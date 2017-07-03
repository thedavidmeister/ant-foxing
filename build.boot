(def project 'thedavidmeister/ant-foxing)
(def version "0.1.0-SNAPSHOT")

(set-env!
 :source-paths #{"src"}
 :resource-paths #{"assets"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.9.0-alpha17"]
   [org.clojure/clojurescript "1.9.655"]
   [hoplon "7.0.2"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.0.0"]

   ; util
   [thedavidmeister/wheel "0.2.0-SNAPSHOT"]

   ; logging
   [com.taoensso/timbre "4.10.0"]

   ; networking
   [cljs-ajax "0.6.0"]

   ; data
   [funcool/cuerdas "2.0.3"]
   [datascript "0.16.1"]])

(require
 '[hoplon.boot-hoplon :refer [hoplon]]
 '[pandeiro.boot-http :refer [serve]]
 '[adzerk.boot-reload :refer [reload]]
 '[adzerk.boot-cljs :refer [cljs]])

(deftask dev
 "Build app for local development and compile boot CSS."
 [a advanced-compilation? bool "Compile CLJS with advanced compilation"]
 (comp
  (serve
   :port 8000
   :dir "target_dev"
   :httpkit true)
  (hoplon)
  (watch)
  (speak :theme "woodblock")
  (reload)
  ; This compiles cljs in a way that is fast to compile, easy to debug but
  ; slow to load the page in the browser and with a big FOUC risk.
  (cljs
   :optimizations (if advanced-compilation? :advanced :none)
   :source-map true
   :compiler-options {:verbose true
                      :warnings true
                      :pseudo-names true})
  (target :dir #{"target_dev"})))
