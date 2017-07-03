(ns report.api
 (:require
  currency.data
  coinmarketcap.ticker.data))

; individual currencies

(defn ->cap
 [ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]}
 (coinmarketcap.ticker.data/parse-price
  (get ticker "market_cap_usd")))

(defn ->hodling
 [ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]}
 (currency.data/parse-hodling (:currency/hodling currency)))

(defn ->valuation
 [ticker currency]
 {:pre [(or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))
        (currency.data/currency? currency)]}
 (int
  (* (->hodling ticker currency)
     (coinmarketcap.ticker.data/parse-price
      (get ticker "price_usd")))))

; aggregate reports

(defn ->total-cap
 [ticker currencies]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (every? currency.data/currency? currencies)]}
 (reduce
  +
  (map
   (comp
    coinmarketcap.ticker.data/parse-price
    #(get % "market_cap_usd")
    #(coinmarketcap.ticker.api/ticker-id-filter ticker %)
    :currency/id)
   currencies)))
