(ns coinmarketcap.data)

(def base-url "https://api.coinmarketcap.com/v1/")

; https://coinmarketcap.com/api/
; Please limit requests to no more than 10 per minute.
; Endpoints update every 5 minutes.
(def refresh-interval (* 1000 60 5))
