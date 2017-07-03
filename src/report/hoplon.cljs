(ns report.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  tier.api
  currency.api))

(defn page
 [conn ticker]
 (h/h1 "Report"
  (j/cell= (prn (currency.api/db->currencies conn)))))
