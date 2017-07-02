(ns portfolio.datascript
 (:require
  datascript.javelin
  hoplon.storage-atom))

(def schema {:currency/id {:db/unique :db.unique/identity}
             :portfolio/config {:db/unique :db.unique/identity}})
(defn new-conn [] (datascript.javelin/conn-cell schema))

(defn -conn
 []
 (hoplon.storage-atom/local-storage (new-conn) ::conn))
(def conn (memoize -conn))
