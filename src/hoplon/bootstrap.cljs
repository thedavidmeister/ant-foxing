(ns hoplon.bootstrap
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery))

; https://github.com/hoplon/hoplon/issues/194
(extend-type Keyword
  hoplon.core/ICustomAttribute
  (-attr! [this elem value]
    (cond (j/cell? value) (h/do-watch value #(h/do! elem this %2))
          (fn? value)   (h/on! elem this value)

          (and (sequential? value)
               (every? j/cell? value))
          (let [[v-cell & c-cells] value
                f #(h/do! elem this @v-cell)]
           (h/do-watch v-cell #(h/do! elem this %2))
           (when c-cells
            (doseq [c c-cells] (h/do-watch c f))))

          :else
          (h/do! elem this value))))
