// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.datascript');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.javelin');
goog.require('hoplon.storage_atom');
goog.require('javelin.core');
goog.require('datascript.core');
portfolio.datascript.schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$currency_SLASH_id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null),cljs.core.cst$kw$config_SLASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null)], null);
portfolio.datascript.new_conn = (function portfolio$datascript$new_conn(){
var conn = datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$1(portfolio.datascript.schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$config_SLASH_key,cljs.core.cst$kw$portfolio$tier_SLASH_ratio], null)], null));

return conn;
});
portfolio.datascript._conn = (function portfolio$datascript$_conn(){
return hoplon.storage_atom.local_storage(portfolio.datascript.new_conn(),cljs.core.cst$kw$portfolio$datascript_SLASH_conn);
});
portfolio.datascript.conn = cljs.core.memoize(portfolio.datascript._conn);
