(ns coinmarketcap.ticker.hoplon
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  coinmarketcap.ticker.api
  cuerdas.core))

(defn table
 [ticker]
 (let [ticker (j/cell= (coinmarketcap.ticker.api/ticker-seq-or-nil ticker))
       ks (j/cell= (keys (first ticker)))]
  (h/div
   (h/cond-tpl
    (j/cell= (= [] ticker))
    (h/div "No results (probably still loading)")

    (j/cell= (not ticker))
    (h/div
     "No results (probably an error)")

    (j/cell= :else)
    (h/table
     (h/tr
      (h/for-tpl [k ks]
       (h/th (j/cell= (clojure.string/capitalize (cuerdas.core/human k))))))

     (h/for-tpl [t ticker]
      (h/tr
       (h/for-tpl [k ks]
        (h/td
         (j/cell= (get t k)))))))))))

(defn page
 [ticker]
 (h/div
  (h/h1 "Raw data from coinmarketcap.com sorted by market cap desc.")
  (table (j/cell= (coinmarketcap.ticker.api/sort-by-cap ticker)))))
