(ns pages.navigation.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  pages.routes.config
  pages.routes.api
  cuerdas.core
  coinmarketcap.ticker.hoplon
  portfolio.hoplon
  report.hoplon
  save.hoplon))

(defn nav
 "A top nav based on the simplest possible routing setup"
 [routes]
 (let [route-keys (j/cell= (map second (second routes)))]
  (h/nav
   (h/for-tpl [k route-keys]
    (h/a
     :click #(pages.routes.api/navigate! @k)
     (j/cell= (-> k name cuerdas.core/human clojure.string/capitalize)))))))

(defn nav-content
 [location conn ticker]
 (h/case-tpl (j/cell= (:handler location))
  :market-cap-data
  (coinmarketcap.ticker.hoplon/page conn ticker)

  :portfolio
  (portfolio.hoplon/page conn ticker)

  :report
  (report.hoplon/page conn ticker)

  :save
  (save.hoplon/page conn)))
