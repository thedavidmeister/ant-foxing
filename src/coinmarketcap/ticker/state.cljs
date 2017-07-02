(ns coinmarketcap.ticker.state
 (:require
  [javelin.core :as j]
  coinmarketcap.ticker.api
  [hoplon.core :as h]
  hoplon.storage-atom))

(defonce all
 (j/with-let [c (hoplon.storage-atom/session-storage (j/cell nil) ::all)]
  (coinmarketcap.ticker.api/fetch-all! c)
  (h/with-interval
   coinmarketcap.config/refresh-interval
   (coinmarketcap.ticker.api/fetch-all! c))))
