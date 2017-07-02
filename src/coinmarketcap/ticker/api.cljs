(ns coinmarketcap.ticker.api
 (:require
  coinmarketcap.api))

(defn fetch-all!
 ([c] (fetch-all! c nil))
 ([c params]
  (coinmarketcap.api/do-it! c "ticker/" params)))

(defn fetch-id!
 ([c id] (fetch-id! c id nil))
 ([c id params]
  (coinmarketcap.api/do-it! (str "ticker/" id "/") c params)))
