(ns currency.api
 (:require
  [datascript.core :as d]
  tier.config
  cljs.spec.alpha
  wheel.math.number))

(cljs.spec.alpha/def :currency/id string?)
(cljs.spec.alpha/def :currency/tier pos-int?)
(cljs.spec.alpha/def :currency/hodling (cljs.spec.alpha/and number? #(<= 0 %)))
(cljs.spec.alpha/def :currency/website string?)
(cljs.spec.alpha/def :currency/notes string?)

(cljs.spec.alpha/def :currency/currency
 (cljs.spec.alpha/keys
  :req [:currency/id :currency/tier :currency/hodling]
  :opt [:currency/website :currency/notes]))

(defn currency? [currency] (cljs.spec.alpha/valid? :currency/currency currency))

(defn parse-hodling
 [i]
 {:post [(number? %)]}
 (let [n (js/parseFloat i)]
  (if (wheel.math.number/nan? n)
   0
   n)))

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
  :post [(currency? %)]}
 (when id
  (let [pulled (d/pull db '[*] [:currency/id id])
        with-parsed-tier #(update % :currency/tier tier.api/parse-tier)
        with-parsed-hodling #(update % :currency/hodling parse-hodling)
        defaults {:currency/tier tier.config/default-tier
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
