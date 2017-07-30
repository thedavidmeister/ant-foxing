// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.save.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('portfolio.datascript');
portfolio.save.api.save_db = (function portfolio$save$api$save_db(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0));
});
portfolio.save.api.load_db_BANG_ = (function portfolio$save$api$load_db_BANG_(conn,str){
var loaded_db = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(str);
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(loaded_db) : datascript.core.db_QMARK_.call(null,loaded_db)))){
} else {
throw (new Error("Assert failed: (d/db? loaded-db)"));
}

return cljs.core.reset_BANG_(conn,loaded_db);
});
portfolio.save.api.reset_conn_BANG_ = (function portfolio$save$api$reset_conn_BANG_(conn){
return cljs.core.reset_BANG_(conn,cljs.core.deref(portfolio.datascript.new_conn()));
});
