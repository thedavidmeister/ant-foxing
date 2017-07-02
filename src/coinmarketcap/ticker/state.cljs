(ns coinmarketcap.ticker.state
 (:require
  [javelin.core :as j]
  coinmarketcap.ticker.api
  [hoplon.core :as h]
  hoplon.storage-atom))

(defn fetch-all-cell
 []
 (j/with-let [c (hoplon.storage-atom/session-storage (j/cell []) ::all)]
  (let [keep-fetching! (fn [c]
                        (coinmarketcap.ticker.api/fetch-all! c)
                        (h/with-timeout
                         coinmarketcap.config/refresh-interval
                         (keep-fetching! c)))]
   (keep-fetching! c))))

(defonce all (fetch-all-cell))
