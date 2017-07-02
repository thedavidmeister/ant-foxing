(ns portfolio.save.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.save.api))

(defn save
 [conn]
 (h/div
  (h/h2 "Save")
  (h/code
   (j/cell= (portfolio.save.api/save-db conn)))))

(defn load
 [conn]
 (h/div
  (h/h2 "Load")
  (let [db (j/cell "")]
   (h/form
    :submit #(portfolio.save.api/load-db! conn @db)
    (h/input
     :input #(reset! db @%))
    (h/button
     :type "submit"
     "Load")))))

(defn reset
 [conn]
 (h/div
  (h/h2 "Reset")
  (h/form
   :submit #(portfolio.save.api/reset-conn! conn)
   (h/button
    :type "submit"
    "Reset"))))

(defn page
 [conn]
 (h/div
  (save conn)
  (load conn)
  (reset conn)))
