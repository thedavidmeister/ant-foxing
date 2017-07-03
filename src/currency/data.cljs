(ns currency.data
 (:require
  cljs.spec.alpha))

(cljs.spec.alpha/def :currency/id string?)
(cljs.spec.alpha/def :currency/tier pos-int?)
(cljs.spec.alpha/def :currency/hodling (cljs.spec.alpha/and number? #(<= 0 %)))
(cljs.spec.alpha/def :currency/website string?)
(cljs.spec.alpha/def :currency/notes string?)

(cljs.spec.alpha/def :currency/currency
 (cljs.spec.alpha/keys
  :req [:currency/id :currency/tier :currency/hodling]
  :opt [:currency/website :currency/notes]))

(defn currency? [currency]
 (cljs.spec.alpha/valid? :currency/currency currency))

(defn parse-hodling
 [i]
 {:post [(number? %)]}
 (let [n (js/parseFloat i)]
  (if (wheel.math.number/nan? n)
   0
   n)))
