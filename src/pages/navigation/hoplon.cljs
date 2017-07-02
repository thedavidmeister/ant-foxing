(ns pages.navigation.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  pages.routes.config
  pages.routes.state
  cuerdas.core
  coinmarketcap.ticker.hoplon
  coinmarketcap.ticker.state
  portfolio.hoplon
  report.hoplon))

(defn nav
 "A top nav based on the simplest possible routing setup"
 [routes]
 (let [route-keys (j/cell= (map second (second routes)))]
  (h/nav
   (h/for-tpl [k route-keys]
    (h/a
     :click #(pages.routes.state/navigate! @k)
     (j/cell= (-> k name cuerdas.core/human clojure.string/capitalize)))))))

(defn nav-content
 [location]
 (h/case-tpl (j/cell= (:handler location))
  :market-cap-data
  (coinmarketcap.ticker.hoplon/page coinmarketcap.ticker.state/all)

  :portfolio
  (portfolio.hoplon/page)

  :report
  (report.hoplon/page)))
