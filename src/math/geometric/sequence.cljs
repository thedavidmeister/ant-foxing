(ns math.geometric.sequence
 (:refer-clojure :exclude [nth]))

(defn nth
 ; https://en.wikipedia.org/wiki/Geometric_progression
 ([r n] (nth 1 r n))
 ([a r n]
  {:pre [(number? a)
         (number? r)
         (number? n)]}
  (* a (.pow js/Math r (dec n)))))
