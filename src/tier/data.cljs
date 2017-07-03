(ns tier.data)

; e.g. http://www.blocklink.info/
(def default-ratio 0.3)

(def default-tier 1)

(defn parse-tier
 "Parse a currency tier from user input"
 [i]
 {:post [(number? %)]}
 (let [n (js/parseInt i 10)]
  (if (wheel.math.number/nan? n)
   default-tier
   n)))
