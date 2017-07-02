(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  hoplon.jquery
  pages.hoplon
  pages.navigation.hoplon
  coinmarketcap.ticker.api
  portfolio.datascript))

(pages.hoplon/outer
 (pages.navigation.hoplon/nav pages.routes.config/routes)
 (pages.navigation.hoplon/nav-content
  (pages.routes.api/location)
  (portfolio.datascript/conn)
  (coinmarketcap.ticker.api/fetch-all-cell)))
