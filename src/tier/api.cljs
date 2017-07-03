(ns tier.api
 (:require
  wheel.math.number
  tier.data
  [datascript.core :as d]
  currency.api
  portfolio.api
  math.geometric.sequence))

(defn parse-ratio
 "Parse a tiering ratio from user input"
 [i]
 {:post [(number? %)]}
 (let [n (js/parseFloat i)]
  (if (wheel.math.number/nan? n)
   tier.data/default-ratio
   n)))

(defn db->ratio
 [db]
 {:pre [(d/db? db)]}
 (tier.api/parse-ratio
  (portfolio.api/db->config
   db
   :portfolio.tier/ratio)))

(defn db->tiers
 [db]
 {:pre [(d/db? db)]}
 ; We don't do this with a query because we want default vals to be included.
 (let [currencies (currency.api/db->currencies db)]
  (seq
   (into
    (sorted-set)
    (map
     :currency/tier
     currencies)))))

(defn tiers-incremental?
 [tiers]
 (let [expected (range 1 (inc (count tiers)))]
  (= expected tiers)))

(defn currencies-by-tier
 [currencies]
 (into
  (sorted-map)
  (group-by
   :currency/tier
   currencies)))

(defn tier-target
 "The last tier needs to scoop up all remaining funds, other tiers need to follow geometric rules"
 [db tier]
 {:pre [(d/db? db)
        (number? tier)]
  :post [(number? %)]}
 (let [last-tier? (= tier (last (db->tiers db)))]
  ((if last-tier? math.geometric.sequence/nth math.geometric.sequence/at-nth)
   (db->ratio db) tier)))
