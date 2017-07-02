(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  pages.hoplon
  pages.navigation.hoplon
  coinmarketcap.ticker.state))

(pages.hoplon/outer
 (pages.navigation.hoplon/nav pages.routes.config/routes)
 (pages.navigation.hoplon/nav-content pages.routes.state/location coinmarketcap.ticker.state/all))
