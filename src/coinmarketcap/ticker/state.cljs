(ns coinmarketcap.ticker.state
 (:require
  [javelin.core :as j]
  coinmarketcap.ticker.api
  [hoplon.core :as h]))

(defonce all
 (j/with-let [c (j/cell nil)]
  (coinmarketcap.ticker.api/fetch-all! c)
  (h/with-interval
   coinmarketcap.config/refresh-interval
   (coinmarketcap.ticker.api/fetch-all! c))))
