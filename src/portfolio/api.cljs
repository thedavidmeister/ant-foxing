(ns portfolio.api
 (:require
  [datascript.core :as d]
  [javelin.core :as j]
  coinmarketcap.ticker.api
  wheel.math.number
  currency.api))

(defn db->config
 [db k]
 (first
  (d/q
   '[:find [?v]
     :where [?e :config/key ?k]
            [?e :config/value ?v]
     :in $ ?k]
   db
   k)))

(defn set-config!
 [conn k v]
 (d/transact! conn [{:config/value v :db/id [:config/key k]}]))

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
 (let [currency-ids (currency.api/db->currency-ids @conn)]
  (j/dosync
   (add-currencies! conn ids)
   (remove-currencies! conn (clojure.set/difference currency-ids ids)))))

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
 (let [ids (currency.api/db->currency-ids db)]
  (clojure.string/join " " ids)))

(defn upsert-currency!
 ([conn id kvs] (upsert-currency! conn (merge kvs {:currency/id id})))
 ([conn kvs]
  (d/transact! conn [kvs])))
