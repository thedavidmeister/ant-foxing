(ns report.data
 (:require
  currency.data
  coinmarketcap.ticker.data
  coinmarketcap.ticker.api))

(defn ->currency-ticker
 [ticker currency]
 {:pre [(coinmarketcap.ticker.data/ticker? ticker)
        (currency.data/currency? currency)]
  :post [(coinmarketcap.ticker.data/currency-ticker? %)]}
 (coinmarketcap.ticker.api/ticker-id-filter
  ticker
  (:currency/id currency)))
