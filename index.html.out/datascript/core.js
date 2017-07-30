// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = (function datascript$core$q(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26318 = arguments.length;
var i__10035__auto___26319 = (0);
while(true){
if((i__10035__auto___26319 < len__10034__auto___26318)){
args__10041__auto__.push((arguments[i__10035__auto___26319]));

var G__26320 = (i__10035__auto___26319 + (1));
i__10035__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((1) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((1)),(0),null)):null);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10042__auto__);
});

datascript.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
return null;
});

datascript.core.q.cljs$lang$maxFixedArity = (1);

datascript.core.q.cljs$lang$applyTo = (function (seq26316){
var G__26317 = cljs.core.first(seq26316);
var seq26316__$1 = cljs.core.next(seq26316);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic(G__26317,seq26316__$1);
});

datascript.core.q = datascript.query.q;
datascript.core.entity = (function datascript$core$entity(db,eid){
return null;
});
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
datascript.core.datom = (function datascript$core$datom(var_args){
var G__26322 = arguments.length;
switch (G__26322) {
case 3:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return null;
});

datascript.core.datom.cljs$lang$maxFixedArity = 5;

datascript.core.datom = datascript.db.datom;
datascript.core.pull = (function datascript$core$pull(db,selector,eid){
return null;
});
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = (function datascript$core$pull_many(db,selector,eids){
return null;
});
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = (function datascript$core$touch(e){
return null;
});
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = (function datascript$core$empty_db(var_args){
var G__26325 = arguments.length;
switch (G__26325) {
case 0:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datascript.core.empty_db.cljs$lang$maxFixedArity = 1;

datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = (function datascript$core$init_db(var_args){
var G__26328 = arguments.length;
switch (G__26328) {
case 1:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return null;
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return null;
});

datascript.core.init_db.cljs$lang$maxFixedArity = 2;

datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return null;
});
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
return null;
});
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = (536870912);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__26330_SHARP_){
var and__8750__auto__ = (orig_pred.cljs$core$IFn$_invoke$arity$1 ? orig_pred.cljs$core$IFn$_invoke$arity$1(p1__26330_SHARP_) : orig_pred.call(null,p1__26330_SHARP_));
if(cljs.core.truth_(and__8750__auto__)){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(orig_db,p1__26330_SHARP_) : pred.call(null,orig_db,p1__26330_SHARP_));
} else {
return and__8750__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__26331_SHARP_){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(db,p1__26331_SHARP_) : pred.call(null,db,p1__26331_SHARP_));
}),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var G__26333 = arguments.length;
switch (G__26333) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transaction_SLASH_filtered], null));
} else {
return datascript.db.transact_tx_data(datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_DASH_before,db,cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$tempids,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$tx_DASH_meta,tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var G__26336 = arguments.length;
switch (G__26336) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var G__26339 = arguments.length;
switch (G__26339) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range(db,attr,start,end);
});
datascript.core.entid = (function datascript$core$entid(db,eid){
return null;
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__8750__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__8750__auto__){
return datascript.db.db_QMARK_(cljs.core.deref(conn));
} else {
return and__8750__auto__;
}
});
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$listeners,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
});
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var G__26344 = arguments.length;
switch (G__26344) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var G__26347 = arguments.length;
switch (G__26347) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){
var r = datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.reset_BANG_(report,r);

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref(report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var G__26350 = arguments.length;
switch (G__26350) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_(conn,tx_data,tx_meta);
var seq__26351_26362 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
var chunk__26352_26363 = null;
var count__26353_26364 = (0);
var i__26354_26365 = (0);
while(true){
if((i__26354_26365 < count__26353_26364)){
var vec__26355_26366 = chunk__26352_26363.cljs$core$IIndexed$_nth$arity$2(null,i__26354_26365);
var __26367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26355_26366,(0),null);
var callback_26368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26355_26366,(1),null);
(callback_26368.cljs$core$IFn$_invoke$arity$1 ? callback_26368.cljs$core$IFn$_invoke$arity$1(report) : callback_26368.call(null,report));

var G__26369 = seq__26351_26362;
var G__26370 = chunk__26352_26363;
var G__26371 = count__26353_26364;
var G__26372 = (i__26354_26365 + (1));
seq__26351_26362 = G__26369;
chunk__26352_26363 = G__26370;
count__26353_26364 = G__26371;
i__26354_26365 = G__26372;
continue;
} else {
var temp__5278__auto___26373 = cljs.core.seq(seq__26351_26362);
if(temp__5278__auto___26373){
var seq__26351_26374__$1 = temp__5278__auto___26373;
if(cljs.core.chunked_seq_QMARK_(seq__26351_26374__$1)){
var c__9688__auto___26375 = cljs.core.chunk_first(seq__26351_26374__$1);
var G__26376 = cljs.core.chunk_rest(seq__26351_26374__$1);
var G__26377 = c__9688__auto___26375;
var G__26378 = cljs.core.count(c__9688__auto___26375);
var G__26379 = (0);
seq__26351_26362 = G__26376;
chunk__26352_26363 = G__26377;
count__26353_26364 = G__26378;
i__26354_26365 = G__26379;
continue;
} else {
var vec__26358_26380 = cljs.core.first(seq__26351_26374__$1);
var __26381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26358_26380,(0),null);
var callback_26382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26358_26380,(1),null);
(callback_26382.cljs$core$IFn$_invoke$arity$1 ? callback_26382.cljs$core$IFn$_invoke$arity$1(report) : callback_26382.call(null,report));

var G__26383 = cljs.core.next(seq__26351_26374__$1);
var G__26384 = null;
var G__26385 = (0);
var G__26386 = (0);
seq__26351_26362 = G__26383;
chunk__26352_26363 = G__26384;
count__26353_26364 = G__26385;
i__26354_26365 = G__26386;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var G__26389 = arguments.length;
switch (G__26389) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_DASH_before,cljs.core.deref(conn),cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26387_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26387_SHARP_,cljs.core.cst$kw$added,false);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conn),cljs.core.cst$kw$eavt)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$eavt)),cljs.core.cst$kw$tx_DASH_meta,tx_meta], null));
cljs.core.reset_BANG_(conn,db);

var seq__26390_26401 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
var chunk__26391_26402 = null;
var count__26392_26403 = (0);
var i__26393_26404 = (0);
while(true){
if((i__26393_26404 < count__26392_26403)){
var vec__26394_26405 = chunk__26391_26402.cljs$core$IIndexed$_nth$arity$2(null,i__26393_26404);
var __26406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26394_26405,(0),null);
var callback_26407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26394_26405,(1),null);
(callback_26407.cljs$core$IFn$_invoke$arity$1 ? callback_26407.cljs$core$IFn$_invoke$arity$1(report) : callback_26407.call(null,report));

var G__26408 = seq__26390_26401;
var G__26409 = chunk__26391_26402;
var G__26410 = count__26392_26403;
var G__26411 = (i__26393_26404 + (1));
seq__26390_26401 = G__26408;
chunk__26391_26402 = G__26409;
count__26392_26403 = G__26410;
i__26393_26404 = G__26411;
continue;
} else {
var temp__5278__auto___26412 = cljs.core.seq(seq__26390_26401);
if(temp__5278__auto___26412){
var seq__26390_26413__$1 = temp__5278__auto___26412;
if(cljs.core.chunked_seq_QMARK_(seq__26390_26413__$1)){
var c__9688__auto___26414 = cljs.core.chunk_first(seq__26390_26413__$1);
var G__26415 = cljs.core.chunk_rest(seq__26390_26413__$1);
var G__26416 = c__9688__auto___26414;
var G__26417 = cljs.core.count(c__9688__auto___26414);
var G__26418 = (0);
seq__26390_26401 = G__26415;
chunk__26391_26402 = G__26416;
count__26392_26403 = G__26417;
i__26393_26404 = G__26418;
continue;
} else {
var vec__26397_26419 = cljs.core.first(seq__26390_26413__$1);
var __26420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397_26419,(0),null);
var callback_26421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397_26419,(1),null);
(callback_26421.cljs$core$IFn$_invoke$arity$1 ? callback_26421.cljs$core$IFn$_invoke$arity$1(report) : callback_26421.call(null,report));

var G__26422 = cljs.core.next(seq__26390_26413__$1);
var G__26423 = null;
var G__26424 = (0);
var G__26425 = (0);
seq__26390_26401 = G__26422;
chunk__26391_26402 = G__26423;
count__26392_26403 = G__26424;
i__26393_26404 = G__26425;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var G__26427 = arguments.length;
switch (G__26427) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$datascript_SLASH_Datom,datascript.db.datom_from_reader,cljs.core.cst$sym$datascript_SLASH_DB,datascript.db.db_from_reader], null);
var seq__26429_26439 = cljs.core.seq(datascript.core.data_readers);
var chunk__26430_26440 = null;
var count__26431_26441 = (0);
var i__26432_26442 = (0);
while(true){
if((i__26432_26442 < count__26431_26441)){
var vec__26433_26443 = chunk__26430_26440.cljs$core$IIndexed$_nth$arity$2(null,i__26432_26442);
var tag_26444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26433_26443,(0),null);
var cb_26445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26433_26443,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_26444,cb_26445);

var G__26446 = seq__26429_26439;
var G__26447 = chunk__26430_26440;
var G__26448 = count__26431_26441;
var G__26449 = (i__26432_26442 + (1));
seq__26429_26439 = G__26446;
chunk__26430_26440 = G__26447;
count__26431_26441 = G__26448;
i__26432_26442 = G__26449;
continue;
} else {
var temp__5278__auto___26450 = cljs.core.seq(seq__26429_26439);
if(temp__5278__auto___26450){
var seq__26429_26451__$1 = temp__5278__auto___26450;
if(cljs.core.chunked_seq_QMARK_(seq__26429_26451__$1)){
var c__9688__auto___26452 = cljs.core.chunk_first(seq__26429_26451__$1);
var G__26453 = cljs.core.chunk_rest(seq__26429_26451__$1);
var G__26454 = c__9688__auto___26452;
var G__26455 = cljs.core.count(c__9688__auto___26452);
var G__26456 = (0);
seq__26429_26439 = G__26453;
chunk__26430_26440 = G__26454;
count__26431_26441 = G__26455;
i__26432_26442 = G__26456;
continue;
} else {
var vec__26436_26457 = cljs.core.first(seq__26429_26451__$1);
var tag_26458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26436_26457,(0),null);
var cb_26459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26436_26457,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_26458,cb_26459);

var G__26460 = cljs.core.next(seq__26429_26451__$1);
var G__26461 = null;
var G__26462 = (0);
var G__26463 = (0);
seq__26429_26439 = G__26460;
chunk__26430_26440 = G__26461;
count__26431_26441 = G__26462;
i__26432_26442 = G__26463;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var G__26465 = arguments.length;
switch (G__26465) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref(conn);
});
datascript.core.transact = (function datascript$core$transact(var_args){
var G__26468 = arguments.length;
switch (G__26468) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core26469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core26469 = (function (conn,tx_data,tx_meta,res,meta26470){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta26470 = meta26470;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
datascript.core.t_datascript$core26469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_26471,meta26470__$1){
var self__ = this;
var _26471__$1 = this;
return (new datascript.core.t_datascript$core26469(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta26470__$1));
});})(res))
;

datascript.core.t_datascript$core26469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_26471){
var self__ = this;
var _26471__$1 = this;
return self__.meta26470;
});})(res))
;

datascript.core.t_datascript$core26469.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core26469.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core26469.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core26469.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$conn,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tx_DASH_meta,cljs.core.cst$sym$res,cljs.core.cst$sym$meta26470], null);
});})(res))
;

datascript.core.t_datascript$core26469.cljs$lang$type = true;

datascript.core.t_datascript$core26469.cljs$lang$ctorStr = "datascript.core/t_datascript$core26469";

datascript.core.t_datascript$core26469.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"datascript.core/t_datascript$core26469");
});})(res))
;

datascript.core.__GT_t_datascript$core26469 = ((function (res){
return (function datascript$core$__GT_t_datascript$core26469(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta26470){
return (new datascript.core.t_datascript$core26469(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta26470));
});})(res))
;

}

return (new datascript.core.t_datascript$core26469(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var realized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var G__26473_26478 = ((function (res,realized){
return (function (){
cljs.core.reset_BANG_(res,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));

return cljs.core.reset_BANG_(realized,true);
});})(res,realized))
;
var G__26474_26479 = (0);
setTimeout(G__26473_26478,G__26474_26479);

if(typeof datascript.core.t_datascript$core26475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core26475 = (function (f,res,realized,meta26476){
this.f = f;
this.res = res;
this.realized = realized;
this.meta26476 = meta26476;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
datascript.core.t_datascript$core26475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_26477,meta26476__$1){
var self__ = this;
var _26477__$1 = this;
return (new datascript.core.t_datascript$core26475(self__.f,self__.res,self__.realized,meta26476__$1));
});})(res,realized))
;

datascript.core.t_datascript$core26475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_26477){
var self__ = this;
var _26477__$1 = this;
return self__.meta26476;
});})(res,realized))
;

datascript.core.t_datascript$core26475.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core26475.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref(self__.realized))){
return cljs.core.deref(self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core26475.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core26475.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$res,cljs.core.cst$sym$realized,cljs.core.cst$sym$meta26476], null);
});})(res,realized))
;

datascript.core.t_datascript$core26475.cljs$lang$type = true;

datascript.core.t_datascript$core26475.cljs$lang$ctorStr = "datascript.core/t_datascript$core26475";

datascript.core.t_datascript$core26475.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"datascript.core/t_datascript$core26475");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core26475 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core26475(f__$1,res__$1,realized__$1,meta26476){
return (new datascript.core.t_datascript$core26475(f__$1,res__$1,realized__$1,meta26476));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core26475(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var G__26481 = arguments.length;
switch (G__26481) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call((function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var G__26484 = arguments.length;
switch (G__26484) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return ((function (){var G__26486 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8));
var G__26487 = (16);
return parseInt(G__26486,G__26487);
})() * (1000));
});
