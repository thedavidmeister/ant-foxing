// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('coinmarketcap.ticker.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('coinmarketcap.api');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('hoplon.storage_atom');
goog.require('coinmarketcap.ticker.data');
coinmarketcap.ticker.api.fetch_all_BANG_ = (function coinmarketcap$ticker$api$fetch_all_BANG_(var_args){
var G__29804 = arguments.length;
switch (G__29804) {
case 1:
return coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$2(c,null);
});

coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (c,params){
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3(c,"ticker/",params);
});

coinmarketcap.ticker.api.fetch_all_BANG_.cljs$lang$maxFixedArity = 2;

coinmarketcap.ticker.api.fetch_id_BANG_ = (function coinmarketcap$ticker$api$fetch_id_BANG_(var_args){
var G__29807 = arguments.length;
switch (G__29807) {
case 2:
return coinmarketcap.ticker.api.fetch_id_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return coinmarketcap.ticker.api.fetch_id_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

coinmarketcap.ticker.api.fetch_id_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (c,id){
return coinmarketcap.ticker.api.fetch_id_BANG_.cljs$core$IFn$_invoke$arity$3(c,id,null);
});

coinmarketcap.ticker.api.fetch_id_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (c,id,params){
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1("ticker/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),c,params);
});

coinmarketcap.ticker.api.fetch_id_BANG_.cljs$lang$maxFixedArity = 3;

coinmarketcap.ticker.api.currency_ticker__GT_market_cap = (function coinmarketcap$ticker$api$currency_ticker__GT_market_cap(currency_ticker){
if(cljs.core.truth_(coinmarketcap.ticker.data.currency_ticker_QMARK_(currency_ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/currency-ticker? currency-ticker)"));
}

var _PERCENT_ = (function (){var cap_str = (function (){var or__8099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(currency_ticker,"market_cap_usd");
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return "0";
}
})();
return coinmarketcap.ticker.data.parse_price(cap_str);
})();
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
/**
 * Numerically sort a ticker API response by market cap descending.
 */
coinmarketcap.ticker.api.sort_by_cap = (function coinmarketcap$ticker$api$sort_by_cap(ticker){
var ticker__$1 = coinmarketcap.ticker.data.ticker_seq_or_nil(ticker);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (ticker__$1){
return (function (currency_ticker){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coinmarketcap.ticker.api.currency_ticker__GT_market_cap(currency_ticker),cljs.core.get.cljs$core$IFn$_invoke$arity$2(currency_ticker,"id")], null);
});})(ticker__$1))
,ticker__$1));
});
coinmarketcap.ticker.api._fetch_all_cell = (function coinmarketcap$ticker$api$_fetch_all_cell(){
var c = hoplon.storage_atom.session_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$coinmarketcap$ticker$api_SLASH_all);
var keep_fetching_BANG__29811 = ((function (c){
return (function coinmarketcap$ticker$api$_fetch_all_cell_$_keep_fetching_BANG_(c__$1){
coinmarketcap.ticker.api.fetch_all_BANG_.cljs$core$IFn$_invoke$arity$1(c__$1);

var G__29809 = ((function (c){
return (function (){
return coinmarketcap$ticker$api$_fetch_all_cell_$_keep_fetching_BANG_(c__$1);
});})(c))
;
var G__29810 = coinmarketcap.data.refresh_interval;
return setTimeout(G__29809,G__29810);
});})(c))
;
keep_fetching_BANG__29811(c);

return c;
});
coinmarketcap.ticker.api.fetch_all_cell = cljs.core.memoize(coinmarketcap.ticker.api._fetch_all_cell);
coinmarketcap.ticker.api.ticker_id_filter = (function coinmarketcap$ticker$api$ticker_id_filter(ticker,id){
var ticker__$1 = coinmarketcap.ticker.data.ticker_seq_or_nil(ticker);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ticker__$1){
return (function (p1__29812_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29812_SHARP_,"id"));
});})(ticker__$1))
,ticker__$1));
});
