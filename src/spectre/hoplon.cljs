(ns spectre.hoplon
 (:require
  [hoplon.core :as h]))

(defn styles
 []
 (h/link :rel "stylesheet" :href "spectre.css"))

(h/defelem table
 [attributes children]
 (h/table
  :class "table"
  attributes
  children))

(h/defelem panel
 [attributes children]
 (h/div
  :class "panel"
  attributes
  children))
