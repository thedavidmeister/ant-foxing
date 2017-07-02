(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  coinmarketcap.ticker.state
  coinmarketcap.ticker.hoplon))

(h/html
 (h/body
  (coinmarketcap.ticker.hoplon/page coinmarketcap.ticker.state/all)))
