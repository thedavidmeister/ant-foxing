(ns portfolio.api
 (:require
  [datascript.core :as d]
  [javelin.core :as j]
  coinmarketcap.ticker.api))

(defn db->currencies
 [db]
 {:pre [(d/db? db)]}
 (into
  (sorted-set)
  (remove
   nil?
   (map first
    (d/q
     '[:find ?id
       :where [_ :currency/id ?id]]
     db)))))

(defn add-currencies!
 [conn ids]
 {:pre [(d/conn? conn)]}
 (d/transact!
  conn
  (map
   (fn [id]
    {:currency/id id})
   ids)))

(defn remove-currencies!
 [conn ids]
 {:pre [(d/conn? conn)]}
 (d/transact!
  conn
  (map
   (fn [id]
    [:db.fn/retractEntity [:currency/id id]])
   ids)))

(defn input-string->currency-ids
 [ticker s]
 {:pre [(coinmarketcap.ticker.api/ticker? ticker)
        (string? s)]}
 (let [candidates (set (map clojure.string/lower-case (clojure.string/split s #"\s+")))
       ticker-ids (set (map #(get % "id") ticker))]
  (clojure.set/intersection candidates ticker-ids)))

(defn set-currencies!
 [conn ids]
 {:pre [(d/conn? conn)]}
 (let [conn-currencies (db->currencies @conn)]
  (j/dosync
   (add-currencies! conn ids)
   (remove-currencies! conn (clojure.set/difference conn-currencies ids)))))

(defn set-currencies-from-input-string!
 [conn ticker input-string]
 {:pre [(d/conn? conn)
        (coinmarketcap.ticker.api/ticker? ticker)
        (string? input-string)]}
 (set-currencies!
  conn
  (input-string->currency-ids ticker input-string)))

(defn db->input-string
 "Closing the loop..."
 [db]
 {:pre [(d/db? db)]}
 (let [ids (db->currencies db)]
  (prn ids)
  (clojure.string/join " " ids)))
