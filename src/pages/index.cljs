(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  pages.hoplon
  pages.navigation.hoplon))

(pages.hoplon/outer
 (pages.navigation.hoplon/nav pages.routes.config/routes)
 (pages.navigation.hoplon/nav-content pages.routes.state/location))
