// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('coinmarketcap.ticker.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.math.number');
/**
 * Is an individual ticker for one currency
 */
coinmarketcap.ticker.data.currency_ticker_QMARK_ = (function coinmarketcap$ticker$data$currency_ticker_QMARK_(ticker){
var and__8750__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ticker,"name");
if(cljs.core.truth_(and__8750__auto__)){
var and__8750__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ticker,"symbol");
if(cljs.core.truth_(and__8750__auto____$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ticker,"id");
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
});
coinmarketcap.ticker.data.ticker_QMARK_ = (function coinmarketcap$ticker$data$ticker_QMARK_(ticker){
if(cljs.core.sequential_QMARK_(ticker)){
var G__21479 = cljs.core.first(ticker);
return (coinmarketcap.ticker.data.ticker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? coinmarketcap.ticker.data.ticker_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21479) : coinmarketcap.ticker.data.ticker_QMARK_.call(null,G__21479));
} else {
return coinmarketcap.ticker.data.currency_ticker_QMARK_(ticker);
}
});
/**
 * Normalises ticker results into a sequence or nil if the ticker represents an API error
 */
coinmarketcap.ticker.data.ticker_seq_or_nil = (function coinmarketcap$ticker$data$ticker_seq_or_nil(ticker){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
if(cljs.core.sequential_QMARK_(ticker)){
return ticker;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ticker], null);
}
} else {
return null;
}
});
coinmarketcap.ticker.data.parse_price = (function coinmarketcap$ticker$data$parse_price(i){
var _PERCENT_ = (cljs.core.truth_(i)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(i):wheel.math.number.nan);
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
