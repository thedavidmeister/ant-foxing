(ns save.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  save.api))

(defn save
 [conn]
 (h/div
  (h/h2 "Save")
  (h/code
   (j/cell= (save.api/save-db conn)))))

(defn load
 [conn]
 (h/div
  (h/h2 "Load")
  (let [db (j/cell "")]
   (h/form
    :submit #(save.api/load-db! conn @db)
    (h/input
     :input #(reset! db @%))
    (h/button
     :type "submit"
     "Load")))))

(defn page
 [conn]
 (h/div
  (save conn)
  (load conn)))
