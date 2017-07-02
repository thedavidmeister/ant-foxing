(ns save.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(defn page
 [conn]
 (h/div
  (h/h1 "Save")
  (h/code
   (j/cell= (pr-str conn)))))
