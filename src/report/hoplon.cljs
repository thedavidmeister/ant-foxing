(ns report.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  tier.api
  currency.api
  instructions.hoplon
  currency.data
  report.api
  spectre.hoplon
  coinmarketcap.ticker.api))

(defn currency-report-row
 [ticker all-currencies tier-currencies currency]
 (let [currency-ticker (j/cell= (report.data/->currency-ticker ticker currency))]
  (h/tr
   (h/td (j/cell= (get currency-ticker "name")))
   (h/td (j/cell= (get currency-ticker "rank")))
   (h/td (j/cell= (report.api/->cap currency-ticker currency)))
   (h/td (j/cell= (report.api/->cap-percentage ticker tier-currencies currency)))
   (h/td (j/cell= (report.api/->hodling currency-ticker currency)))
   (h/td (j/cell= (report.api/->valuation currency-ticker currency)))
   (h/td (j/cell= (report.api/->valuation-percentage ticker tier-currencies currency))))))

(defn tier-report
 [tier ticker all-currencies tier-currencies]
 (spectre.hoplon/panel
  (h/h2 (j/cell= (str "Tier " tier)))
  (h/h3 "Aggregate report")
  (spectre.hoplon/table
   (h/tr
    (h/th "Tier market cap")
    (h/th "Tier valuation"))
   (h/tr
    (h/td (j/cell= (report.api/->total-cap ticker tier-currencies)))
    (h/td (j/cell= (report.api/->total-valuation ticker tier-currencies)))))
  (h/h3 "Hodlings info")
  (spectre.hoplon/table
   (h/tr
    (h/th "Name")
    (h/th "Rank")
    (h/th "Market cap")
    (h/th "Percentage of market cap")
    (h/th "Current hodlings")
    (h/th "Current valuation (USD)")
    (h/th "Percentage of tier valuation"))
   (h/for-tpl [currency tier-currencies]
    (currency-report-row ticker all-currencies tier-currencies currency)))))

(defn portfolio-report
 [ticker all-currencies]
 (spectre.hoplon/panel
  (h/h2 "Portfolio totals")
  (spectre.hoplon/table
   (h/tr
    (h/th "Market cap")
    (h/th "Portfolio valuation"))
   (h/tr
    (h/td
     (j/cell= (report.api/->total-cap ticker all-currencies)))
    (h/td
     (j/cell= (report.api/->total-valuation ticker all-currencies)))))))

(defn page
 [conn ticker]
 (let [tiers (j/cell= (tier.api/db->tiers conn))
       all-currencies (j/cell= (currency.api/db->currencies conn))
       error? (j/cell= (not (tier.api/tiers-incremental? tiers)))]
  (h/div
   :class "page-content"
   (h/h1 "Report")

   (portfolio-report ticker all-currencies)

   (h/if-tpl error?
    (spectre.hoplon/panel
     (instructions.hoplon/warning "The tiers must increment by 1"))
    (h/div
     (h/for-tpl [[tier tier-currencies] (j/cell= (tier.api/currencies-by-tier all-currencies))]
      (tier-report tier ticker all-currencies tier-currencies)))))))
