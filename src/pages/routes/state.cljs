(ns pages.routes.state
 (:require
  pages.routes.config
  wheel.route.core
  [javelin.core :as j]))

(defonce history (wheel.route.core/history-cell))
(defonce location
 (j/cell=
  (wheel.route.core/path->bidi history pages.routes.config/routes pages.routes.config/fallback)))

(def navigate! (partial wheel.route.core/navigate! history pages.routes.config/routes))
(def handler! (partial wheel.route.core/handler! history pages.routes.config/routes))
(def params! (partial wheel.route.core/params! history pages.routes.config/routes))
