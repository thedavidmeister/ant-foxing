(ns coinmarketcap.ticker.hoplon
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  cuerdas.core))

(defn table
 [ticker]
 (let [error? (j/cell= (and (not (sequential? ticker))
                            (get ticker "error")))
       ticker (j/cell= (if (sequential? ticker) ticker [ticker]))
       ks (j/cell= (keys (first ticker)))]
  (h/div
   (h/if-tpl error?
    (h/div
     "There was an error processing the ticker results.")
    (h/table
     (h/tr
      (h/for-tpl [k ks]
       (h/th (j/cell= (clojure.string/capitalize (cuerdas.core/human k))))))

     (h/for-tpl [t ticker]
      (h/tr
       (h/for-tpl [k ks]
        (h/td
         (j/cell= (get t k)))))))))))
