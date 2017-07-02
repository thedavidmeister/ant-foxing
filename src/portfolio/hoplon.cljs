(ns portfolio.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.api
  [datascript.core :as d]
  instructions.hoplon))

(defn currently-hodling
 [conn ticker]
 {:pre [(d/conn? conn) (j/cell? ticker)]}
 (h/form
  (h/h2 "List (space separated) the IDs of the currencies currently hodling")
  (h/p "If you type in a currency ID not found in the ticker data it will be ignored.")
  (h/p "Refer to the raw market cap data to find the ID of your currency.")
  (h/p
   (instructions.hoplon/warning
    "If you delete or malform an ID here then all the data below will be purged for that currency!"))
  (h/input
   :input #(portfolio.api/set-currencies-from-input-string!
            conn
            @ticker
            @%)
   :value (j/cell= (portfolio.api/db->input-string conn)))))

(defn currency-form
 [conn id]
 {:pre [(d/conn? conn)]}
 (let [currency (j/cell= (portfolio.api/db->currency conn id))]
  (h/form
   (h/h3 id)
   (h/label
    "Current hodlings:"
    (h/input)))))

(defn page
 [conn ticker]
 (h/div
  (h/h1 "Configure your portfolio")
  (currently-hodling conn ticker)
  (let [currency-ids (j/cell= (portfolio.api/db->currency-ids conn))]
   (h/for-tpl [id (j/cell= (seq currency-ids))]
    (currency-form conn id)))))
