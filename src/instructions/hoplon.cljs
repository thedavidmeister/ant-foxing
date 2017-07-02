(ns instructions.hoplon
 (:require
  [hoplon.core :as h]))

(h/defelem warning
 [attributes children]
 (h/strong
  :css {:color "red"}
  attributes
  children))
