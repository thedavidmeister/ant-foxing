// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('javelin.core');
goog.require('coinmarketcap.ticker.api');
goog.require('wheel.math.number');
goog.require('currency.api');
portfolio.api.db__GT_config = (function portfolio$api$db__GT_config(db,k){
return cljs.core.first((function (){var G__29815 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_v], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$config_SLASH_key,cljs.core.cst$sym$_QMARK_k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$config_SLASH_value,cljs.core.cst$sym$_QMARK_v], null),cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_k], null);
var G__29816 = db;
var G__29817 = k;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__29815,G__29816,G__29817) : datascript.core.q.call(null,G__29815,G__29816,G__29817));
})());
});
portfolio.api.set_config_BANG_ = (function portfolio$api$set_config_BANG_(conn,k,v){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config_SLASH_value,v,cljs.core.cst$kw$db_SLASH_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config_SLASH_key,k], null)], null)], null));
});
portfolio.api.add_currencies_BANG_ = (function portfolio$api$add_currencies_BANG_(conn,ids){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$currency_SLASH_id,id], null);
}),ids));
});
portfolio.api.remove_currencies_BANG_ = (function portfolio$api$remove_currencies_BANG_(conn,ids){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,id], null)], null);
}),ids));
});
portfolio.api.input_string__GT_currency_ids = (function portfolio$api$input_string__GT_currency_ids(ticker,s){
if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var candidates = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/)));
var ticker_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (candidates){
return (function (p1__29818_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29818_SHARP_,"id");
});})(candidates))
,ticker));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(candidates,ticker_ids);
});
portfolio.api.set_currencies_BANG_ = (function portfolio$api$set_currencies_BANG_(conn,ids){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

var currency_ids = currency.api.db__GT_currency_ids(cljs.core.deref(conn));
portfolio.api.add_currencies_BANG_(conn,ids);

return portfolio.api.remove_currencies_BANG_(conn,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(currency_ids,ids));
});
portfolio.api.set_currencies_from_input_string_BANG_ = (function portfolio$api$set_currencies_from_input_string_BANG_(conn,ticker,input_string){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

if(cljs.core.truth_(coinmarketcap.ticker.data.ticker_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (coinmarketcap.ticker.data/ticker? ticker)"));
}

if(typeof input_string === 'string'){
} else {
throw (new Error("Assert failed: (string? input-string)"));
}

return portfolio.api.set_currencies_BANG_(conn,portfolio.api.input_string__GT_currency_ids(ticker,input_string));
});
/**
 * Closing the loop...
 */
portfolio.api.db__GT_input_string = (function portfolio$api$db__GT_input_string(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

var ids = currency.api.db__GT_currency_ids(db);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ids);
});
portfolio.api.upsert_currency_BANG_ = (function portfolio$api$upsert_currency_BANG_(var_args){
var G__29820 = arguments.length;
switch (G__29820) {
case 3:
return portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,id,kvs){
return portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$currency_SLASH_id,id], null)], 0)));
});

portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,kvs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null));
});

portfolio.api.upsert_currency_BANG_.cljs$lang$maxFixedArity = 3;

