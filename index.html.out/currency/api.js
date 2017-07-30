// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('currency.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('tier.data');
goog.require('currency.data');
goog.require('cljs.spec.alpha');
goog.require('wheel.math.number');
currency.api.db__GT_currency_ids = (function currency$api$db__GT_currency_ids(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__27706 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$sym$_QMARK_id], null)], null);
var G__27707 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__27706,G__27707) : datascript.core.q.call(null,G__27706,G__27707));
})())));
});
currency.api.db__GT_currency = (function currency$api$db__GT_currency(db,id){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

var _PERCENT_ = (cljs.core.truth_(id)?(function (){var pulled = (function (){var G__27710 = db;
var G__27711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__27712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,id], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__27710,G__27711,G__27712) : datascript.core.pull.call(null,G__27710,G__27711,G__27712));
})();
var with_parsed_tier = ((function (pulled){
return (function (p1__27708_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__27708_SHARP_,cljs.core.cst$kw$currency_SLASH_tier,tier.data.parse_tier);
});})(pulled))
;
var with_parsed_hodling = ((function (pulled,with_parsed_tier){
return (function (p1__27709_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__27709_SHARP_,cljs.core.cst$kw$currency_SLASH_hodling,currency.data.parse_hodling);
});})(pulled,with_parsed_tier))
;
var defaults = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$currency_SLASH_tier,tier.data.default_tier,cljs.core.cst$kw$currency_SLASH_hodling,(0)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,with_parsed_hodling(with_parsed_tier(pulled))], 0));
})():null);
if(cljs.core.truth_(currency.data.currency_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (currency.data/currency? %)"));
}

return _PERCENT_;
});
currency.api.db__GT_currencies = (function currency$api$db__GT_currencies(db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27713_SHARP_){
return currency.api.db__GT_currency(db,p1__27713_SHARP_);
}),cljs.core.seq(currency.api.db__GT_currency_ids(db)));
});
