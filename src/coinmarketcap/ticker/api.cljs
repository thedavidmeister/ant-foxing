(ns coinmarketcap.ticker.api
 (:require
  coinmarketcap.api
  [javelin.core :as j]
  [hoplon.core :as h]
  hoplon.storage-atom
  coinmarketcap.config))

(defn fetch-all!
 ([c] (fetch-all! c nil))
 ([c params]
  (coinmarketcap.api/do-it! c "ticker/" params)))

(defn fetch-id!
 ([c id] (fetch-id! c id nil))
 ([c id params]
  (coinmarketcap.api/do-it! (str "ticker/" id "/") c params)))

(defn ticker?
 [ticker]
 (if (sequential? ticker)
  (ticker? (first ticker))
  (and
   (get ticker "name")
   (get ticker "symbol")
   (get ticker "id"))))

(defn ticker-seq-or-nil
 "Normalises ticker results into a sequence or nil if the ticker represents an API error"
 [ticker]
 (if (ticker? ticker)
  (if (sequential? ticker)
   ticker
   [ticker])))

(defn currency->market-cap
 [currency]
 {:pre [(map? currency)]
  :post [(number? %)]}
 (let [cap-str (or (get currency "market_cap_usd")
                   "0")]
  (cljs.reader/read-string cap-str)))

(defn sort-by-cap
 "Numerically sort a ticker API response by market cap descending."
 [ticker]
 (let [ticker (ticker-seq-or-nil ticker)]
  (reverse
   (sort-by
    currency->market-cap
    ticker))))

(defn -fetch-all-cell
 []
 (j/with-let [c (hoplon.storage-atom/session-storage (j/cell []) ::all)]
  (let [keep-fetching! (fn [c]
                        (fetch-all! c)
                        (h/with-timeout
                         coinmarketcap.config/refresh-interval
                         (keep-fetching! c)))]
   (keep-fetching! c))))
(def fetch-all-cell (memoize -fetch-all-cell))

(defn ticker-id-filter
 [ticker id]
 (let [ticker (ticker-seq-or-nil ticker)]
  (first
   (filter
    #(= id (get % "id"))
    ticker))))
