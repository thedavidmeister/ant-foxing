(ns tier.api
 (:require
  wheel.math.number
  tier.config
  [datascript.core :as d]))

(defn parse-ratio
 "Parse a tiering ratio from user input"
 [i]
 {:post [(number? %)]}
 (let [n (js/parseFloat i)]
  (if (wheel.math.number/nan? n)
   tier.config/default-ratio
   n)))

(defn db->ratio
 [db]
 (tier.api/parse-ratio
  (portfolio.api/db->config
   conn
   :portfolio.tier/ratio)))

(defn parse-tier
 "Parse a currency tier from user input"
 [i]
 {:post [(number? %)]}
 (let [n (js/parseInt i 10)]
  (if (wheel.math.number/nan? n)
   tier.config/default-tier
   n)))

(defn db->tiers
 [db]
 {:pre [(d/db? db)]}
 (d/q
  '[:find ?t
    :where [_ :currency/tier ?t]]
  db))

(defn normalized-tiers
 [tiers])

(def db->normalized-tiers (comp normalized-tiers db->tiers))
