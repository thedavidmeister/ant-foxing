(ns spectre.hoplon
 (:require
  [hoplon.core :as h]))

(defn styles
 []
 (h/link :rel "stylesheet" :href "spectre.css"))

(h/defelem wrapper
 [attributes children]
 (h/div
  :class "wrapper"
  attributes
  children))

(h/defelem page-content
 [attributes children]
 (h/div
  :class "page-content"
  attributes
  children))

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

(h/defelem nav
 [attributes children]
 (h/nav
  :class "nav"
  attributes
  children))

(h/defelem nav-item
 [attributes children]
 (h/a
  :class "nav-item"
  attributes
  children))

(h/defelem form-input
 [attributes children]
 (h/input
  :class "form-input"
  attributes
  children))

(h/defelem form-textarea
 [attributes children]
 (h/textarea
  :class "form-input"
  attributes
  children))
