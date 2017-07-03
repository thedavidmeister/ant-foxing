(ns report.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  tier.api
  currency.api
  instructions.hoplon
  coinmarketcap.ticker.api))

(defn currency-report-row
 [conn ticker currency]
 (let [currency-ticker (j/cell= (coinmarketcap.ticker.api/ticker-id-filter ticker (:currency/id currency)))]
  (h/tr
   (h/td (j/cell= (get currency-ticker "name")))
   (h/td (j/cell= (get currency-ticker "rank")))
   (h/td (j/cell= (get currency-ticker "market_cap_usd")))
   (h/td (j/cell= (:currency/hodling currency))))))

(defn tier-report
 [conn ticker tier currencies]
 (h/div
  (h/h2 (j/cell= (str "Tier " tier)))
  (h/table
   (h/tr
    (h/th "Name")
    (h/th "Rank")
    (h/th "Market cap")
    (h/th "Current hodlings")))
  (h/for-tpl [currency currencies]
   (currency-report-row conn ticker currency))))

(defn page
 [conn ticker]
 (h/div
  (h/h1 "Report")
  (let [tiers (j/cell= (tier.api/db->tiers conn))
        currencies (j/cell= (currency.api/db->currencies conn))
        error? (j/cell= (not (tier.api/tiers-incremental? tiers)))]
   (h/div
    (h/if-tpl error?
     (instructions.hoplon/warning "The tiers must increment by 1")
     (h/div
      (h/for-tpl [[t cs] (j/cell= (tier.api/currencies-by-tier conn))]
       (tier-report conn ticker t cs))))))))
