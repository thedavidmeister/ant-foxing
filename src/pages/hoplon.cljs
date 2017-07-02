(ns pages.hoplon
 (:require
  [hoplon.core :as h]))

(h/defelem outer
 [_ children]
 (h/html
  (h/body
   (h/div
    children))))
