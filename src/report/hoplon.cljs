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

(defn diff
 [n]
 (h/strong
  :css (j/cell= {:color (cond (< 0 n) "green"
                              (> 0 n) "red"
                              :else "black")})
  n))

(defn tier-report
 [conn tier ticker all-currencies tier-currencies]
 (let [tier-cap (j/cell= (report.api/->total-cap ticker tier-currencies))
       tier-valuation (j/cell= (report.api/->total-valuation ticker tier-currencies))
       tier-target (j/cell= (tier.api/tier-target conn tier))
       tier-target-valuation (j/cell= (int (* tier-valuation tier-target)))
       tier-valuation-diff (j/cell= (- tier-target-valuation tier-valuation))]
  (spectre.hoplon/panel
   (h/h2 (j/cell= (str "Tier " tier)))

   (h/h3 "Aggregate report")
   (spectre.hoplon/table
    (h/tr
     (h/th "Tier market cap")
     (h/th "Tier valuation")
     (h/th "Target ratio")
     (h/th "Target valuation")
     (h/th "Valuation diff"))
    (h/tr
     (h/td tier-cap)
     (h/td tier-valuation)
     (h/td tier-target)
     (h/td tier-target-valuation)
     (h/td (diff tier-valuation-diff))))

   (h/h3 "Hodlings info")
   (spectre.hoplon/table
    (h/tr
     (h/th "Name")
     (h/th "Rank")
     (h/th "Market cap")
     (h/th "Ratio of tier cap")
     (h/th "Current hodlings")
     (h/th "Current valuation (USD)")
     (h/th "Ratio of tier valuation")
     (h/th "Target valuation")
     (h/th "Target valuation diff (USD)")
     (h/th "Target hodling diff"))
    (h/for-tpl [currency tier-currencies]
     (let [currency-ticker (j/cell= (report.data/->currency-ticker ticker currency))
           currency-name (j/cell= (get currency-ticker "name"))
           rank (j/cell= (get currency-ticker "rank"))
           cap (j/cell= (report.api/->cap currency-ticker currency))
           cap-ratio (j/cell= (report.api/->cap-ratio ticker tier-currencies currency))
           hodling (j/cell= (report.api/->hodling currency-ticker currency))
           valuation (j/cell= (report.api/->valuation currency-ticker currency))
           valuation-ratio (j/cell= (report.api/->valuation-ratio ticker tier-currencies currency))
           valuation-target (j/cell= (int (* cap-ratio tier-target-valuation)))
           valuation-target-diff (j/cell= (- valuation-target valuation))
           hodling-target-diff (j/cell= (/ valuation-target-diff (report.api/->price-usd currency-ticker currency)))]
      (h/tr
       (h/td currency-name)
       (h/td rank)
       (h/td cap)
       (h/td cap-ratio)
       (h/td hodling)
       (h/td valuation)
       (h/td valuation-ratio)
       (h/td valuation-target)
       (h/td (diff valuation-target-diff))
       (h/td (diff hodling-target-diff)))))))))

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
  (spectre.hoplon/page-content
   (h/h1 "Report")

   (portfolio-report ticker all-currencies)

   (h/if-tpl error?
    (spectre.hoplon/panel
     (instructions.hoplon/warning "The tiers must increment by 1"))
    (h/div
     (h/for-tpl [[tier tier-currencies] (j/cell= (tier.api/currencies-by-tier all-currencies))]
      (tier-report conn tier ticker all-currencies tier-currencies)))))))
