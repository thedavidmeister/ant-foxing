(ns coinmarketcap.api
 (:require
  [javelin.core :as j]
  ajax.core
  coinmarketcap.data
  taoensso.timbre))

(defn do-it!
 ([c endpoint] (do-it! c endpoint nil))
 ([c endpoint params]
  {:pre [(j/cell? c) (string? endpoint)]}
  (taoensso.timbre/info "Hitting coinmarketcap endpoint: " endpoint)
  (let [url (str coinmarketcap.data/base-url endpoint)]
   (ajax.core/GET
    url
    (merge
     {:handler #(do
                 (taoensso.timbre/info "Success fetching response from coinmarketcap endpoint: " endpoint)
                 (reset! c %))}
     (when params {:params params}))))))

(defn global
 ([c] (global nil))
 ([c params]
  (do-it! c "global/" params)))
