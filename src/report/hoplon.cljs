(ns report.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  tier.api
  currency.api
  instructions.hoplon
  currency.data
  report.api
  coinmarketcap.ticker.api))

(defn currency-report-row
 [conn ticker currencies currency]
 (let [currency-ticker (j/cell= (report.data/->currency-ticker ticker currency))]
  (h/tr
   (h/td (j/cell= (get currency-ticker "name")))
   (h/td (j/cell= (get currency-ticker "rank")))
   (h/td (j/cell= (report.api/->cap currency-ticker currency)))
   (h/td (j/cell= (report.api/->cap-percentage ticker currencies currency)))
   (h/td (j/cell= (report.api/->hodling currency-ticker currency)))
   (h/td (j/cell= (report.api/->valuation currency-ticker currency)))
   (h/td (j/cell= (report.api/->valuation-percentage ticker currencies currency))))))

(defn tier-report
 [conn ticker tier currencies]
 (h/div
  (h/h2 (j/cell= (str "Tier " tier)))
  (h/h3 "Aggregate report")
  (h/table
   (h/tr
    (h/th "Total cap")
    (h/th "Total valuation"))
   (h/tr
    (h/td (j/cell= (report.api/->total-cap ticker currencies)))
    (h/td (j/cell= (report.api/->total-valuation ticker currencies)))))
  (h/h3 "Hodlings info")
  (h/table
   (h/tr
    (h/th "Name")
    (h/th "Rank")
    (h/th "Market cap")
    (h/th "Percentage of market cap")
    (h/th "Current hodlings")
    (h/th "Current valuation (USD)")
    (h/th "Percentage of tier valuation"))
   (h/for-tpl [currency currencies]
    (currency-report-row conn ticker currencies currency)))))

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
