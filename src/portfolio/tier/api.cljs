(ns portfolio.tier.api
 (:require
  wheel.math.number
  portfolio.tier.config))

(defn parse-ratio
 "Parse a tiering ratio from user input"
 [i]
 {:post [(number? %)]}
 (let [n (js/parseFloat i)]
  (if (wheel.math.number/nan? n)
   portfolio.tier.config/default-ratio
   n)))

(defn parse-tier
 "Parse a currency tier from user input"
 [i]
 {:post [(number? %)]}
 (prn "*" i)
 (let [n (js/parseInt i 10)]
  (if (wheel.math.number/nan? n)
   portfolio.tier.config/default-tier
   n)))
