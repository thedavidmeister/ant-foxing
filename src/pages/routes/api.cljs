(ns pages.routes.api
 (:require
  pages.routes.config
  wheel.route.core
  [javelin.core :as j]
  taoensso.timbre))

(defonce history (memoize wheel.route.core/history-cell))

(defn -location
 []
 (let [history-cell (history)]
  (j/with-let [c (j/cell=
                  (wheel.route.core/path->bidi
                   history-cell
                   pages.routes.config/routes
                   pages.routes.config/fallback))]
   (j/cell= (taoensso.timbre/info "Location changed to: " c)))))
(defonce location (memoize -location))

(defonce navigate! (partial wheel.route.core/navigate! (history) pages.routes.config/routes))
(defonce handler! (partial wheel.route.core/handler! (history) pages.routes.config/routes))
(defonce params! (partial wheel.route.core/params! (history) pages.routes.config/routes))
