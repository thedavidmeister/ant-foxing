(ns tier.api
 (:require
  wheel.math.number
  tier.data
  [datascript.core :as d]
  currency.api))

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
 (tier.api/parse-ratio
  (portfolio.api/db->config
   conn
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
 [db]
 (into
  (sorted-map)
  (group-by
   :currency/tier
   (currency.api/db->currencies db))))
