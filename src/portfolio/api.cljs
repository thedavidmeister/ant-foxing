(ns portfolio.api)

(defn set-currencies!
 [conn currencies]
 (prn currencies))

(defn input-string->currencies
 [ticker s]
 (let [candidates (set (map clojure.string/lower-case (clojure.string/split s #"\s+")))
       ticker-ids (set (map #(get % "id") ticker))]
  (clojure.set/intersection candidates ticker-ids)))
