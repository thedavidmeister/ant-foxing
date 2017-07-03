(ns coinmarketcap.ticker.api
 (:require
  coinmarketcap.api
  [javelin.core :as j]
  [hoplon.core :as h]
  hoplon.storage-atom
  coinmarketcap.ticker.data))

(defn fetch-all!
 ([c] (fetch-all! c nil))
 ([c params]
  (coinmarketcap.api/do-it! c "ticker/" params)))

(defn fetch-id!
 ([c id] (fetch-id! c id nil))
 ([c id params]
  (coinmarketcap.api/do-it! (str "ticker/" id "/") c params)))

(defn currency-ticker->market-cap
 [currency-ticker]
 {:pre [(coinmarketcap.ticker.data/currency-ticker? currency-ticker)]
  :post [(number? %)]}
 (let [cap-str (or (get currency-ticker "market_cap_usd")
                   "0")]
  (coinmarketcap.ticker.data/parse-price cap-str)))

(defn sort-by-cap
 "Numerically sort a ticker API response by market cap descending."
 [ticker]
 (let [ticker (coinmarketcap.ticker.data/ticker-seq-or-nil ticker)]
  (reverse
   (sort-by
    (fn
     [currency-ticker]
     [(currency-ticker->market-cap currency-ticker) (get currency-ticker "id")])
    ticker))))

(defn -fetch-all-cell
 []
 (j/with-let [c (hoplon.storage-atom/session-storage (j/cell []) ::all)]
  (let [keep-fetching! (fn keep-fetching! [c]
                        (fetch-all! c)
                        (h/with-timeout
                         coinmarketcap.data/refresh-interval
                         (keep-fetching! c)))]
   (keep-fetching! c))))
(def fetch-all-cell (memoize -fetch-all-cell))

(defn ticker-id-filter
 [ticker id]
 (let [ticker (coinmarketcap.ticker.data/ticker-seq-or-nil ticker)]
  (first
   (filter
    #(= id (get % "id"))
    ticker))))
