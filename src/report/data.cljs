(ns report.data
 (:require
  currency.data
  coinmarketcap.ticker.data
  coinmarketcap.ticker.api))

(defn ->currency-ticker
 [ticker currency]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (or (currency.data/currency? currency) (nil? currency))]
  :post [(or (coinmarketcap.ticker.data/currency-ticker? %)
             (nil? %))]}
 (when currency
  (coinmarketcap.ticker.api/ticker-id-filter
   ticker
   (:currency/id currency))))

(defn simple-ratio
 [r]
 (js/parseFloat (.toPrecision r 3)))

(defn ratio->percentage
 [r]
 (str
  (if (zero? b)
   0
   (simple-ratio (* 100 r)))
  "%"))
