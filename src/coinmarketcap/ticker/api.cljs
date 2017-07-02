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

(defn ticker-seq-or-nil
 "Normalises ticker results into a sequence or nil if the ticker represents an API error"
 [ticker]
 (if (sequential? ticker)
  ticker
  (when-not (get ticker "error")
   [ticker])))
