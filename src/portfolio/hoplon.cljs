(ns portfolio.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.api
  [datascript.core :as d]))

(defn currently-hodling
 [conn ticker]
 {:pre [(d/conn? conn) (j/cell? ticker)]}
 (h/form
  (h/h2 "List (space separated) the IDs of the currencies currently hodling")
  (h/p "If you type in a currency ID not found in the ticker data it will be ignored.")
  (h/p "Refer to the raw market cap data to find the ID of your currency.")
  (h/input
   :input #(portfolio.api/set-currencies!
            conn
            (portfolio.api/input-string->currencies @ticker @%)))))

(defn page
 [conn ticker]
 (h/h1 "Configure your portfolio")
 (currently-hodling conn ticker))
