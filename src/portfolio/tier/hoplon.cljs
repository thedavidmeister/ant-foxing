(ns portfolio.tier.hoplon
 (:require
  [hoplon.core :as h]
  portfolio.api
  portfolio.tier.api
  math.geometric.sequence
  wheel.link.hoplon
  [datascript.core :as d]
  [javelin.core :as j]))

(defn ratio
 [conn]
 {:pre [(d/conn? conn)]}
 (let [current-ratio (j/cell= (portfolio.tier.api/parse-ratio (portfolio.api/db->config conn :portfolio.tier/ratio)))
       tiers [1 2 3 4]]
  (h/div
   (h/div
    (h/h2 "Portfolio tiering ratio")
    (h/p "What is the ratio to use for each tiering of the portfolio?")
    (h/p "The ratio will be used in a geometric sequence for each tiering.")
    (h/p "The ratio as a decimal is what will remain at the end of each tier for subsequent tiers. Sensible values are lte 0.5.")
    (wheel.link.hoplon/external "https://en.wikipedia.org/wiki/Geometric_series")
    (h/div
     (h/p "Indicative values for each tier")
     (h/p (j/cell= (str "Current tiering ratio: " current-ratio)))
     (h/p (j/cell= (str "Percentage of funds used per tier: " (- 100 (* 100 current-ratio)) "%")))
     (h/table
      (h/tr
       (h/th)
       (h/for-tpl [tier tiers]
        (h/th (j/cell= (str "Tier " tier)))))
      (h/tr
       (h/td (h/strong "Remaining"))
       (h/for-tpl [tier tiers]
        (h/td (j/cell=
               (.toPrecision
                ; Skip the first tier as it is just 1
                (math.geometric.sequence/nth current-ratio tier)
                3)))))
      (h/tr
       (h/td (h/strong "This tier"))
       (h/for-tpl [tier tiers]
        (h/td (j/cell= (.toPrecision
                        (math.geometric.sequence/at-nth current-ratio tier)
                        3))))))))
   (h/form
    (h/input
     :input #(portfolio.api/set-config! conn :portfolio.tier/ratio @%)
     :value current-ratio)))))
