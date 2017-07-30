// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.javelin');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('javelin.core');
/**
 * Mimics datascript conn-from-db but builds a compatible javelin cell
 */
datascript.javelin.conn_cell_from_db = (function datascript$javelin$conn_cell_from_db(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

var _PERCENT_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$listeners,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
if(cljs.core.truth_(datascript.core.conn_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (d/conn? %)"));
}

if(cljs.core.truth_(javelin.core.cell_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (j/cell? %)"));
}

return _PERCENT_;
});
/**
 * Builds a fresh conn cell wrapping an empty db
 */
datascript.javelin.conn_cell = (function datascript$javelin$conn_cell(var_args){
var G__25451 = arguments.length;
switch (G__25451) {
case 0:
return datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(cljs.core.map_QMARK_(schema)){
} else {
throw (new Error("Assert failed: (map? schema)"));
}

var _PERCENT_ = datascript.javelin.conn_cell_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
if(cljs.core.truth_(datascript.core.conn_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (d/conn? %)"));
}

if(cljs.core.truth_(javelin.core.cell_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (j/cell? %)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_PERCENT_))))){
} else {
throw (new Error("Assert failed: (= {} (-> % meta :listeners deref))"));
}

return _PERCENT_;
});

datascript.javelin.conn_cell.cljs$lang$maxFixedArity = 1;

datascript.javelin.conn_cell_with = (function datascript$javelin$conn_cell_with(conn,tx){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

if(cljs.core.coll_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (coll? tx)"));
}

var _PERCENT_ = datascript.javelin.conn_cell_from_db(datascript.core.db_with(cljs.core.deref(conn),tx));
if(cljs.core.truth_(datascript.core.conn_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (d/conn? %)"));
}

if(cljs.core.truth_(javelin.core.cell_QMARK_(_PERCENT_))){
} else {
throw (new Error("Assert failed: (j/cell? %)"));
}

return _PERCENT_;
});
datascript.javelin.conn_from_datoms = (function datascript$javelin$conn_from_datoms(var_args){
var G__25454 = arguments.length;
switch (G__25454) {
case 1:
return datascript.javelin.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.javelin.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.javelin.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.javelin.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,cljs.core.PersistentArrayMap.EMPTY);
});

datascript.javelin.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.javelin.conn_cell_with(datascript.javelin.conn_cell.cljs$core$IFn$_invoke$arity$1(schema),(function (){var or__8099__auto__ = datoms;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});

datascript.javelin.conn_from_datoms.cljs$lang$maxFixedArity = 2;

