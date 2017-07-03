(ns coinmarketcap.ticker.data
 (:require
  wheel.math.number))

(defn currency-ticker?
 "Is an individual ticker for one currency"
 [ticker]
 (and
  (get ticker "name")
  (get ticker "symbol")
  (get ticker "id")))

(defn ticker?
 [ticker]
 (if (sequential? ticker)
  (ticker? (first ticker))
  (currency-ticker? ticker)))

(defn ticker-seq-or-nil
 "Normalises ticker results into a sequence or nil if the ticker represents an API error"
 [ticker]
 (if (ticker? ticker)
  (if (sequential? ticker)
   ticker
   [ticker])))

(defn parse-price
 [i]
 {:post [(number? %)]}
 (if i
  (cljs.reader/read-string i)
  wheel.math.number/nan))
