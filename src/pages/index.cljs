(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]))

(h/html
 (h/body
  (h/div "Hello world!")))
