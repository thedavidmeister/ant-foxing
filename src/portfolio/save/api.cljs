(ns portfolio.save.api
 (:require
  [datascript.core :as d]
  portfolio.datascript))

(defn save-db
 [db]
 {:pre [(d/db? db)]}
 (pr-str db))

(defn load-db!
 [conn str]
 (let [loaded-db (cljs.reader/read-string str)]
  (assert (d/db? loaded-db))
  (reset! conn loaded-db)))

(defn reset-conn!
 [conn]
 (reset! conn @(portfolio.datascript/new-conn)))
