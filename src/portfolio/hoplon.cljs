(ns portfolio.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  portfolio.api
  [datascript.core :as d]
  instructions.hoplon))

(defn currently-hodling
 [conn ticker]
 {:pre [(d/conn? conn) (j/cell? ticker)]}
 (h/form
  (h/h2 "List (space separated) the IDs of the currencies currently hodling")
  (h/p "If you type in a currency ID not found in the ticker data it will be ignored.")
  (h/p "Refer to the raw market cap data to find the ID of your currency.")
  (h/p
   (instructions.hoplon/warning
    "If you delete or malform an ID here then all the data below will be purged for that currency!"))
  (h/input
   :input #(portfolio.api/set-currencies-from-input-string!
            conn
            @ticker
            @%)
   :value (j/cell= (portfolio.api/db->input-string conn)))))

(h/defelem currency-form-input
 [{:keys [conn currency k el-fn default-val] :as attributes} children]
 (let [el-fn (or el-fn h/input)
       default-val (or default-val "")]
  (h/label
   (h/div children)
   (el-fn
    (dissoc attributes :conn :id :k)
    :input #(portfolio.api/upsert-currency! conn (:currency/id @currency) {k @%})
    :value (j/cell= (get currency k default-val))))))

(defn currency-form
 [conn currency]
 {:pre [(d/conn? conn)]}
 (let [input (fn [attributes children]
              (currency-form-input
               (merge
                {:conn conn
                 :currency currency}
                attributes)
               children))
       structure [[{:k :currency/hodling
                    :default-val 0}
                   "Current hodlings:"]
                  [{:k :currency/rank
                    :type "number"
                    :min 1
                    :step 1
                    :default-val 1}
                   "Rank (lower allocates more funds):"]
                  [{:k :currency/website}
                   "Website:"]
                  [{:k :currency/notes
                    :el-fn h/textarea}
                   "Notes:"]]]
  (h/form
   (h/h3 (j/cell= (:currency/id currency)))
   (for [[a c] structure]
    (input a c)))))

(defn page
 [conn ticker]
 (h/div
  (h/h1 "Configure your portfolio")
  (currently-hodling conn ticker)
  (let [currency-ids (j/cell= (portfolio.api/db->currency-ids conn))
        currencies (j/cell= (map #(portfolio.api/db->currency conn %) (seq currency-ids)))]
   (h/for-tpl [currency currencies]
    (currency-form conn currency)))))
