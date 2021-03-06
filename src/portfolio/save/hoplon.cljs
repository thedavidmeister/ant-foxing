(ns portfolio.save.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.save.api
  spectre.hoplon))

(defn save
 [conn]
 (spectre.hoplon/panel
  (h/h2 "Save")
  (h/code
   (j/cell= (portfolio.save.api/save-db conn)))))

(defn load
 [conn]
 (spectre.hoplon/panel
  (h/h2 "Load")
  (let [db (j/cell "")]
   (h/form
    :submit #(portfolio.save.api/load-db! conn @db)
    (spectre.hoplon/form-input
     :type "text"
     :input #(reset! db @%))
    (spectre.hoplon/button
     :type "submit"
     "Load")))))

(defn reset
 [conn]
 (spectre.hoplon/panel
  (h/h2 "Reset")
  (h/form
   :submit #(portfolio.save.api/reset-conn! conn)
   (spectre.hoplon/button
    :type "submit"
    "Reset"))))

(defn page
 [conn]
 (spectre.hoplon/page-content
  (h/h1 "Save, load or reset")
  (save conn)
  (load conn)
  (reset conn)))
