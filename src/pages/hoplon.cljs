(ns pages.hoplon
 (:require
  [hoplon.core :as h]))

(h/defelem outer
 [_ children]
 (h/html
  (h/head
   (h/link :rel "stylesheet" :href "styles.css"))
  (h/body
   (h/div
    children))))
