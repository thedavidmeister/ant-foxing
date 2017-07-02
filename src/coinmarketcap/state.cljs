(ns coinmarketcap.state
 (:require
  coinmarketcap.config
  coinmarketcap.api
  [javelin.core :as j]
  [hoplon.core :as h]))

(defonce ticker
 (j/with-let [c (j/cell nil)]
  (coinmarketcap.api/ticker c)
  (h/with-interval
   coinmarketcap.config
   (coinmarketcap.api/ticker c))))

(j/cell= (prn ticker))
