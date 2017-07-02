(ns portfolio.hoplon
 (:require
  [hoplon.core :as h]))

(defn currently-hodling
 [conn ticker]
 (h/form
  (h/h2 "List (space separated) the ids of the currencies currently hodling")
  (h/input)))

(defn page
 [conn ticker]
 (h/h1 "Configure your portfolio")
 (currently-hodling conn ticker))
