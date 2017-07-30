// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('report.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('currency.data');
goog.require('coinmarketcap.ticker.data');
goog.require('report.data');
report.api.__GT_price_usd = (function report$api$__GT_price_usd(currency_ticker,currency__$1){
if(cljs.core.truth_((function (){var or__8762__auto__ = coinmarketcap.ticker.data.currency_ticker_QMARK_(report.api.ticker);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return (report.api.ticker == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))"));
}

if(cljs.core.truth_(currency.data.currency_QMARK_(currency__$1))){
} else {
throw (new Error("Assert failed: (currency.data/currency? currency)"));
}

var _PERCENT_ = coinmarketcap.ticker.data.parse_price(cljs.core.get.cljs$core$IFn$_invoke$arity$2(currency_ticker,"price_usd"));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.__GT_cap = (function report$api$__GT_cap(currency_ticker,currency__$1){
if(cljs.core.truth_((function (){var or__8762__auto__ = coinmarketcap.ticker.data.currency_ticker_QMARK_(report.api.ticker);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return (report.api.ticker == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))"));
}

if(cljs.core.truth_(currency.data.currency_QMARK_(currency__$1))){
} else {
throw (new Error("Assert failed: (currency.data/currency? currency)"));
}

var _PERCENT_ = coinmarketcap.ticker.data.parse_price(cljs.core.get.cljs$core$IFn$_invoke$arity$2(currency_ticker,"market_cap_usd"));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.__GT_hodling = (function report$api$__GT_hodling(currency_ticker,currency__$1){
if(cljs.core.truth_((function (){var or__8762__auto__ = coinmarketcap.ticker.data.currency_ticker_QMARK_(report.api.ticker);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return (report.api.ticker == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))"));
}

if(cljs.core.truth_(currency.data.currency_QMARK_(currency__$1))){
} else {
throw (new Error("Assert failed: (currency.data/currency? currency)"));
}

var _PERCENT_ = currency.data.parse_hodling(cljs.core.cst$kw$currency_SLASH_hodling.cljs$core$IFn$_invoke$arity$1(currency__$1));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.__GT_valuation = (function report$api$__GT_valuation(currency_ticker,currency__$1){
if(cljs.core.truth_((function (){var or__8762__auto__ = coinmarketcap.ticker.data.currency_ticker_QMARK_(report.api.ticker);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return (report.api.ticker == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (coinmarketcap.ticker.data/currency-ticker? ticker) (nil? ticker))"));
}

if(cljs.core.truth_(currency.data.currency_QMARK_(currency__$1))){
} else {
throw (new Error("Assert failed: (currency.data/currency? currency)"));
}

var _PERCENT_ = ((report.api.__GT_hodling(currency_ticker,currency__$1) * report.api.__GT_price_usd(currency_ticker,currency__$1)) | (0));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.__GT_total_cap = (function report$api$__GT_total_cap(ticker,currencies){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(cljs.core.every_QMARK_(currency.data.currency_QMARK_,currencies)){
} else {
throw (new Error("Assert failed: (every? currency.data/currency? currencies)"));
}

var _PERCENT_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (currency__$1){
return report.api.__GT_cap(report.data.__GT_currency_ticker(ticker,currency__$1),currency__$1);
}),currencies));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.ratio_fn = (function report$api$ratio_fn(this_fn,total_fn){
return (function (ticker,currencies,currency__$1){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(cljs.core.every_QMARK_(currency.data.currency_QMARK_,currencies)){
} else {
throw (new Error("Assert failed: (every? currency.data/currency? currencies)"));
}

if(cljs.core.truth_(currency.data.currency_QMARK_(currency__$1))){
} else {
throw (new Error("Assert failed: (currency.data/currency? currency)"));
}

var _PERCENT_ = (function (){var total = (total_fn.cljs$core$IFn$_invoke$arity$2 ? total_fn.cljs$core$IFn$_invoke$arity$2(ticker,currencies) : total_fn.call(null,ticker,currencies));
var this$ = (function (){var G__30914 = report.data.__GT_currency_ticker(ticker,currency__$1);
var G__30915 = currency__$1;
return (this_fn.cljs$core$IFn$_invoke$arity$2 ? this_fn.cljs$core$IFn$_invoke$arity$2(G__30914,G__30915) : this_fn.call(null,G__30914,G__30915));
})();
return report.data.simple_number((this$ / total));
})();
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
});
report.api.__GT_cap_ratio = report.api.ratio_fn(report.api.__GT_cap,report.api.__GT_total_cap);
report.api.__GT_total_valuation = (function report$api$__GT_total_valuation(ticker,currencies){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(cljs.core.every_QMARK_(currency.data.currency_QMARK_,currencies)){
} else {
throw (new Error("Assert failed: (every? currency.data/currency? currencies)"));
}

var _PERCENT_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (currency__$1){
return report.api.__GT_valuation(report.data.__GT_currency_ticker(ticker,currency__$1),currency__$1);
}),currencies));
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
report.api.__GT_valuation_ratio = report.api.ratio_fn(report.api.__GT_valuation,report.api.__GT_total_valuation);
