(ns portfolio.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.api
  [datascript.core :as d]
  instructions.hoplon
  tier.hoplon))

(defn currently-hodling
 [conn ticker]
 {:pre [(d/conn? conn) (j/cell? ticker)]}
 (h/div
  (h/div
   (h/h2 "List (space separated) the IDs of the currencies currently hodling")
   (h/p "If you type in a currency ID not found in the ticker data it will be ignored.")
   (h/p "Refer to the raw market cap data to find the ID of your currency.")
   (h/p
    (instructions.hoplon/warning
     "If you delete or malform an ID here then all the data below will be purged for that currency!")))
  (h/form
   (let [value (j/cell= (portfolio.api/db->input-string conn))]
    (h/input
     :input #(portfolio.api/set-currencies-from-input-string!
              conn
              @ticker
              @%)
     :value value
     :size (j/cell= (count value)))))))

(h/defelem currency-form-input
 [{:keys [conn currency k el-fn default-val] :as attributes} children]
 (let [el-fn (or el-fn h/input)]
  (h/td
   (h/div children)
   (el-fn
    (dissoc attributes :conn :currency :k :el-fn :default-val)
    :input #(portfolio.api/upsert-currency! conn (:currency/id @currency) {k @%})
    :value (j/cell= (get currency k))))))

(defn currency-form-row
 [conn currency structure]
 {:pre [(d/conn? conn)]}
 (let [input (fn [attributes]
              (currency-form-input
               (merge
                {:conn conn
                 :currency currency}
                attributes)))]
  (h/tr
   (for [[_ a] structure]
    (input a)))))

(defn currencies-form
 [conn currencies]
 (let [sorted-by-tier (j/cell=
                       (sort-by
                        #(-> %
                          :currency/tier
                          tier.data/parse-tier)
                        currencies))
       structure [["Currency"
                   {:k :currency/id
                    :readonly true
                    :type "text"}]
                  ["Current hodlings"
                   {:k :currency/hodling
                    :type "number"}]
                  ["Tier (lower = more funds)"
                   {:k :currency/tier
                    :type "number"
                    :min 1
                    :step 1}]
                  ["Website"
                   {:k :currency/website
                    :type "text"}]
                  ["Notes"
                   {:k :currency/notes
                    :el-fn h/textarea}]]]

  (h/form
   (h/table
    (h/tr
     (for [[n _] structure]
      (h/th n)))
    (h/for-tpl [currency sorted-by-tier]
     (currency-form-row conn currency structure))))))

(defn page
 [conn ticker]
 (h/div
  (h/h1 "Configure your portfolio")
  (tier.hoplon/ratio conn)
  (currently-hodling conn ticker)
  (currencies-form conn (j/cell= (currency.api/db->currencies conn)))))
