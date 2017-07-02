(ns coinmarketcap.api
 (:require
  [javelin.core :as j]
  ajax.core
  coinmarketcap.config))

(defn do-it!
 ([c endpoint] (do-it! c endpoint nil))
 ([c endpoint params]
  {:pre [(j/cell? c) (string? endpoint)]}
  (let [url (str coinmarketcap.config/base-url endpoint)]
   (ajax.core/GET
    url
    (merge
     {:handler #(reset! c %)}
     (when params {:params params}))))))

(defn ticker
 ([c] (ticker c nil))
 ([c params]
  (do-it! c "ticker/" params)))

(defn ticker-currency
 ([c id] (ticker-currency c id nil))
 ([c id params]
  (do-it! (str "ticker/" id "/") c params)))

(defn global
 ([c] (global nil))
 ([c params]
  (do-it! c "global/" params)))
