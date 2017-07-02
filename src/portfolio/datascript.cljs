(ns portfolio.datascript
 (:require
  datascript.javelin
  hoplon.storage-atom
  [javelin.core :as j]
  [datascript.core :as d]
  portfolio.config))

(def schema {:currency/id {:db/unique :db.unique/identity}
             :config/key {:db/unique :db.unique/identity}})

(defn new-conn []
 (j/with-let [conn (datascript.javelin/conn-cell schema)]
  (d/transact! conn [{:config/key :portfolio/ranking-ratio
                      :config/value portfolio.config/default-ranking-ratio}])))

(defn -conn
 []
 (hoplon.storage-atom/local-storage (new-conn) ::conn))
(def conn (memoize -conn))
