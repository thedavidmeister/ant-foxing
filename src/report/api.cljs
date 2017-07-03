(ns report.api
 (:require
  currency.data
  coinmarketcap.ticker.data
  report.data))

; individual currencies

(defn ->price-usd
 [currency-ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]
  :post [(number? %)]}
 (coinmarketcap.ticker.data/parse-price
  (get currency-ticker "price_usd")))

(defn ->cap
 [currency-ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]
  :post [(number? %)]}
 (coinmarketcap.ticker.data/parse-price
  (get currency-ticker "market_cap_usd")))

(defn ->hodling
 [currency-ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]
  :post [(number? %)]}
 (currency.data/parse-hodling (:currency/hodling currency)))

(defn ->valuation
 [currency-ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]
  :post [(number? %)]}
 (int
  (* (->hodling currency-ticker currency)
     (->price-usd currency-ticker currency))))

; aggregate reports

(defn ->total-cap
 [ticker currencies]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (every? currency.data/currency? currencies)]
  :post [(number? %)]}
 (reduce
  +
  (map
   (fn [currency]
    (->cap
     (report.data/->currency-ticker ticker currency)
     currency))
   currencies)))

(defn ratio-fn
 [this-fn total-fn]
 (fn
  [ticker currencies currency]
  {:pre [(coinmarketcap.ticker.data/ticker? ticker)
         (every? currency.data/currency? currencies)
         (currency.data/currency? currency)]
   :post [(number? %)]}
  (let [total (total-fn ticker currencies)
        this (this-fn (report.data/->currency-ticker ticker currency) currency)]
   (report.data/simple-ratio (/ this total)))))

(def ->cap-ratio (ratio-fn ->cap ->total-cap))

(defn ->total-valuation
 [ticker currencies]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (every? currency.data/currency? currencies)]
  :post [(number? %)]}
 (reduce
  +
  (map
   (fn [currency]
    (->valuation
     (report.data/->currency-ticker ticker currency)
     currency))
   currencies)))

(def ->valuation-ratio (ratio-fn ->valuation ->total-valuation))
