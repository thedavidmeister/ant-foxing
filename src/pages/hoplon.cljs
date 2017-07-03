(ns pages.hoplon
 (:require
  [hoplon.core :as h]
  spectre.hoplon))

(h/defelem outer
 [_ children]
 (h/html
  (h/head
   (spectre.hoplon/styles)
   (h/link :rel "stylesheet" :href "styles.css"))
  (h/body
   (spectre.hoplon/wrapper
    children))))
