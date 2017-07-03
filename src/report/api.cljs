(ns report.api
 (:require
  currency.data
  coinmarketcap.ticker.data
  report.data))

; individual currencies

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
     (coinmarketcap.ticker.data/parse-price
      (get currency-ticker "price_usd")))))

; aggregate reports

(defn ->total-cap
 [ticker currencies]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (every? currency.data/currency? currencies)]
  :post [(number? %)]}
 (reduce
  +
  (map
   (comp
    coinmarketcap.ticker.data/parse-price
    #(get % "market_cap_usd")
    #(coinmarketcap.ticker.api/ticker-id-filter ticker %)
    :currency/id)
   currencies)))

(defn ->cap-percentage
 [ticker currencies currency]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (every? currency.data/currency? currencies)
        (currency.data/currency? currency)]
  :post [(number? %)]}
 (let [currency-ticker (report.data/->currency-ticker ticker currency)
       total-cap (->total-cap ticker currencies)
       cap (->cap currency-ticker currency)]
  (js/parseFloat
   (.toPrecision
    (* 100 (/ cap total-cap))
    3))))
