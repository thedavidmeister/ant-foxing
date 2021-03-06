(ns pages.routes.config
 (:require
  wheel.route.core))

(defonce routes
 ["/"
  [["market-cap-data" :market-cap-data]
   ["portfolio" :portfolio]
   ["report" :report]
   ["save" :save]]])

(def fallback :market-cap-data)

(assert (wheel.route.core/routes? routes))
