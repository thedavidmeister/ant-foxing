// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('report.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('currency.data');
goog.require('coinmarketcap.ticker.data');
goog.require('coinmarketcap.ticker.api');
report.data.__GT_currency_ticker = (function report$data$__GT_currency_ticker(ticker,currency__$1){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(cljs.core.truth_((function (){var or__8099__auto__ = currency.data.currency_QMARK_(currency__$1);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (currency__$1 == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (currency.data/currency? currency) (nil? currency))"));
}

var _PERCENT_ = (cljs.core.truth_(currency__$1)?coinmarketcap.ticker.api.ticker_id_filter(ticker,cljs.core.cst$kw$currency_SLASH_id.cljs$core$IFn$_invoke$arity$1(currency__$1)):null);
if(cljs.core.truth_((function (){var or__8099__auto__ = coinmarketcap.ticker.data.currency_ticker_QMARK_(_PERCENT_);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (_PERCENT_ == null);
}
})())){
} else {
throw (new Error("Assert failed: (or (coinmarketcap.ticker.data/currency-ticker? %) (nil? %))"));
}

return _PERCENT_;
});
report.data.simple_number = (function report$data$simple_number(r){
var G__29837 = r.toPrecision((3));
return parseFloat(G__29837);
});
report.data.ratio__GT_percentage = (function report$data$ratio__GT_percentage(r){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((report.data.b === (0)))?(0):report.data.simple_number(((100) * r)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
});
