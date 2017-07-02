(ns report.hoplon
 (:require
  [hoplon.core :as h]))

(defn page
 [conn ticker]
 (h/h1 "Report"))
