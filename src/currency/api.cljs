(ns currency.api
 (:require
  [datascript.core :as d]
  tier.data
  currency.data
  cljs.spec.alpha
  wheel.math.number))

(defn db->currency-ids
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

(defn db->currency
 [db id]
 {:pre [(d/db? db)]
  :post [(currency.data/currency? %)]}
 (when id
  (let [pulled (d/pull db '[*] [:currency/id id])
        with-parsed-tier #(update % :currency/tier tier.data/parse-tier)
        with-parsed-hodling #(update % :currency/hodling currency.data/parse-hodling)
        defaults {:currency/tier tier.data/default-tier
                  :currency/hodling 0}]
   (merge
    defaults
    (-> pulled
     with-parsed-tier
     with-parsed-hodling)))))

(defn db->currencies
 [db]
 (map
  #(db->currency db %)
  (seq (db->currency-ids db))))
