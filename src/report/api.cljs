(ns report.api
 (:require
  currency.data
  coinmarketcap.ticker.data))

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
