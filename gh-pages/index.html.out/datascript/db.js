// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.arrays');
goog.require('datascript.btset');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.tx0 = (536870912);
datascript.db.default_schema = null;
datascript.db.seqable_QMARK_ = (function datascript$db$seqable_QMARK_(x){
return (!(typeof x === 'string')) && ((cljs.core.seqable_QMARK_(x)) || (datascript.arrays.array_QMARK_(x)));
});
datascript.db.neg_number_QMARK_ = (function datascript$db$neg_number_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine(x,y);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return null;
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(a,b){
return null;
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return null;
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__23413 = arguments.length;
switch (G__23413) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
return null;
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,nf){
return null;
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
return null;
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,nf){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__8762__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return d__$1.__hash = (datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.hash_datom.call(null,d__$1));
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__8750__auto__ = (o instanceof datascript.db.Datom);
if(and__8750__auto__){
return (datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2(d__$1,o) : datascript.db.equiv_datom.call(null,d__$1,o));
} else {
return and__8750__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.seq_datom.call(null,d__$1));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,null) : datascript.db.val_at_datom.call(null,d__$1,k,null));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,nf) : datascript.db.val_at_datom.call(null,d__$1,k,nf));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i) : datascript.db.nth_datom.call(null,this$__$1,i));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found) : datascript.db.nth_datom.call(null,this$__$1,i,not_found));
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return (datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,v__$1) : datascript.db.assoc_datom.call(null,d__$1,k,v__$1));
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$e,cljs.core.cst$sym$a,cljs.core.cst$sym$v,cljs.core.cst$sym$tx,cljs.core.cst$sym$added], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"datascript.db/Datom");
});

datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom = (function datascript$db$datom(var_args){
var G__23416 = arguments.length;
switch (G__23416) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,(536870912),true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes(datascript.db.combine_hashes(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
var x__9711__auto__ = d.e;
return cljs.core._conj((function (){var x__9711__auto____$1 = d.a;
return cljs.core._conj((function (){var x__9711__auto____$2 = d.v;
return cljs.core._conj((function (){var x__9711__auto____$3 = d.tx;
return cljs.core._conj((function (){var x__9711__auto____$4 = d.added;
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$4);
})(),x__9711__auto____$3);
})(),x__9711__auto____$2);
})(),x__9711__auto____$1);
})(),x__9711__auto__);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__23418 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,G__23418)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",G__23418)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$added,G__23418)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",G__23418)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__23418)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",G__23418)){
return d.a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx,G__23418)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("added",G__23418)){
return d.added;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tx",G__23418)){
return d.tx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__23418)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__23420 = arguments.length;
switch (G__23420) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__23421 = i;
switch (G__23421) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Datom/-nth: Index out of bounds: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__23422 = i;
switch (G__23422) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__23426 = k;
var G__23426__$1 = (((G__23426 instanceof cljs.core.Keyword))?G__23426.fqn:null);
switch (G__23426__$1) {
case "e":
return (new datascript.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.db.IllegalArgumentException([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid key for #datascript/Datom: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__8750__auto__ = o1;
if(cljs.core.truth_(and__8750__auto__)){
return o2;
} else {
return and__8750__auto__;
}
})())){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_num = (function datascript$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__8750__auto__ = n1;
if(cljs.core.truth_(and__8750__auto__)){
return n2;
} else {
return and__8750__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.db.cmp_val = (function datascript$db$cmp_val(o1,o2){
if((!((o1 == null))) && (!((o2 == null)))){
return cljs.core.compare(o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__22885__auto__ = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__22885__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__22885__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = datascript.db.cmp_val(d1.v,d2.v);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = datascript.db.cmp_num(d1.e,d2.e);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = datascript.db.cmp_num(d1.tx,d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__22885__auto__ = (d1.e - d2.e);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__22885__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = (d1.e - d2.e);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__22885__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__22885__auto__)){
var c__22885__auto____$1 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__22885__auto____$1)){
var c__22885__auto____$2 = (d1.e - d2.e);
if(((0) === c__22885__auto____$2)){
var c__22885__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__22885__auto____$3)){
return (0);
} else {
return c__22885__auto____$3;
}
} else {
return c__22885__auto____$2;
}
} else {
return c__22885__auto____$1;
}
} else {
return c__22885__auto__;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null)))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__9495__auto__ = (((data == null))?null:data);
var m__9496__auto__ = (datascript.db._search[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__9496__auto__.call(null,data,pattern));
} else {
var m__9496__auto____$1 = (datascript.db._search["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__9496__auto____$1.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__9495__auto__ = (((db == null))?null:db);
var m__9496__auto__ = (datascript.db._datoms[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__9496__auto__.call(null,db,index,components));
} else {
var m__9496__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__9496__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__9495__auto__ = (((db == null))?null:db);
var m__9496__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__9496__auto__.call(null,db,index,components));
} else {
var m__9496__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__9496__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__9495__auto__ = (((db == null))?null:db);
var m__9496__auto__ = (datascript.db._index_range[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__9496__auto__.call(null,db,attr,start,end));
} else {
var m__9496__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__9496__auto____$1.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null)))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__9495__auto__ = (((db == null))?null:db);
var m__9496__auto__ = (datascript.db._schema[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__9496__auto__.call(null,db));
} else {
var m__9496__auto____$1 = (datascript.db._schema["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(db) : m__9496__auto____$1.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__9495__auto__ = (((db == null))?null:db);
var m__9496__auto__ = (datascript.db._attrs_by[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__9496__auto__.call(null,db,property));
} else {
var m__9496__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(db,property) : m__9496__auto____$1.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
}
});

datascript.db.hash_db = (function datascript$db$hash_db(db){
return null;
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
return null;
});
datascript.db.equiv_db = (function datascript$db$equiv_db(a,b){
return null;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var G__23430 = arguments.length;
switch (G__23430) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
return null;
});
datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
return null;
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
return null;
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,cs){
return null;
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k23434,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__23438 = k23434;
var G__23438__$1 = (((G__23438 instanceof cljs.core.Keyword))?G__23438.fqn:null);
switch (G__23438__$1) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23434,else__9453__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.db.DB{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23433){
var self__ = this;
var G__23433__$1 = this;
return (new cljs.core.RecordIter((0),G__23433__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__23439 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1515640948 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__23439(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23435,other23436){
var self__ = this;
var this23435__$1 = this;
return (!((other23436 == null))) && ((this23435__$1.constructor === other23436.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.schema,other23436.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.eavt,other23436.eavt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.aevt,other23436.aevt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.avet,other23436.avet)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.max_eid,other23436.max_eid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.max_tx,other23436.max_tx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.rschema,other23436.rschema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.hash,other23436.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23435__$1.__extmap,other23436.__extmap));
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$max_DASH_tx,null,cljs.core.cst$kw$hash,null,cljs.core.cst$kw$aevt,null,cljs.core.cst$kw$avet,null,cljs.core.cst$kw$max_DASH_eid,null,cljs.core.cst$kw$eavt,null,cljs.core.cst$kw$rschema,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__23433){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__23440 = cljs.core.keyword_identical_QMARK_;
var expr__23441 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__23443 = cljs.core.cst$kw$schema;
var G__23444 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23443,G__23444) : pred__23440.call(null,G__23443,G__23444));
})())){
return (new datascript.db.DB(G__23433,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23445 = cljs.core.cst$kw$eavt;
var G__23446 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23445,G__23446) : pred__23440.call(null,G__23445,G__23446));
})())){
return (new datascript.db.DB(self__.schema,G__23433,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23447 = cljs.core.cst$kw$aevt;
var G__23448 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23447,G__23448) : pred__23440.call(null,G__23447,G__23448));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,G__23433,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23449 = cljs.core.cst$kw$avet;
var G__23450 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23449,G__23450) : pred__23440.call(null,G__23449,G__23450));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__23433,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23451 = cljs.core.cst$kw$max_DASH_eid;
var G__23452 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23451,G__23452) : pred__23440.call(null,G__23451,G__23452));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__23433,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23453 = cljs.core.cst$kw$max_DASH_tx;
var G__23454 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23453,G__23454) : pred__23440.call(null,G__23453,G__23454));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__23433,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23455 = cljs.core.cst$kw$rschema;
var G__23456 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23455,G__23456) : pred__23440.call(null,G__23455,G__23456));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__23433,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23457 = cljs.core.cst$kw$hash;
var G__23458 = expr__23441;
return (pred__23440.cljs$core$IFn$_invoke$arity$2 ? pred__23440.cljs$core$IFn$_invoke$arity$2(G__23457,G__23458) : pred__23440.call(null,G__23457,G__23458));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__23433,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__23433),null));
}
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__23433){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__23433,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$eavt,cljs.core.cst$sym$aevt,cljs.core.cst$sym$avet,cljs.core.cst$sym$max_DASH_eid,cljs.core.cst$sym$max_DASH_tx,cljs.core.cst$sym$rschema,cljs.core.cst$sym$hash], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/DB");
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.db/DB");
});

datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__23437){
return (new datascript.db.DB(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$aevt.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$avet.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$max_DASH_tx.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$rschema.cljs$core$IFn$_invoke$arity$1(G__23437),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__23437),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23437,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], 0))),null));
});


datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_db.call(null,db__$1));
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
var G__23459 = db__$1.schema;
return (datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(G__23459) : datascript.db.empty_db.call(null,G__23459));
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq(db__$1.eavt);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$3(db__$1,index,cs) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs)),(new datascript.db.Datom(null,null,null,null,null)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,attr) : datascript.db.indexing_QMARK_.call(null,db__$1,attr)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Attribute"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)))].join(''),"should be marked as :db/index true");
}

var G__23460_23467 = attr;
var G__23461_23468 = cljs.core._conj(cljs.core._conj((function (){var x__9711__auto__ = attr;
return cljs.core._conj((function (){var x__9711__auto____$1 = start;
return cljs.core._conj((function (){var x__9711__auto____$2 = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$2);
})(),x__9711__auto____$1);
})(),x__9711__auto__);
})(),cljs.core.cst$sym$db),cljs.core.cst$sym$_DASH_index_DASH_range);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__23460_23467,G__23461_23468) : datascript.db.validate_attr.call(null,G__23460_23467,G__23461_23468));

return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,start,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null)),(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$5(db__$1,null,attr,end,null) : datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null)));
});

datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
var fexpr__23462 = db__$1.rschema;
return (fexpr__23462.cljs$core$IFn$_invoke$arity$1 ? fexpr__23462.cljs$core$IFn$_invoke$arity$1(property) : fexpr__23462.call(null,property));
});

datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__23463 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,a,null,null,null)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(eavt,(new datascript.db.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
} else {
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(avet,(new datascript.db.Datom(null,a,v,null,null)));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(aevt,(new datascript.db.Datom(null,a,null,null,null)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx));
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.tx);
});})(vec__23463,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__8750__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x));
if(and__8750__auto__){
var and__8750__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x));
if(and__8750__auto____$1){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k23478,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__23482 = k23478;
var G__23482__$1 = (((G__23482 instanceof cljs.core.Keyword))?G__23482.fqn:null);
switch (G__23482__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23478,else__9453__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.db.FilteredDB{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23477){
var self__ = this;
var G__23477__$1 = this;
return (new cljs.core.RecordIter((0),G__23477__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__23483 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-351969977 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__23483(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23479,other23480){
var self__ = this;
var this23479__$1 = this;
return (!((other23480 == null))) && ((this23479__$1.constructor === other23480.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23479__$1.unfiltered_db,other23480.unfiltered_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23479__$1.pred,other23480.pred)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23479__$1.hash,other23480.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23479__$1.__extmap,other23480.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$unfiltered_DASH_db,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__23477){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__23484 = cljs.core.keyword_identical_QMARK_;
var expr__23485 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__23487 = cljs.core.cst$kw$unfiltered_DASH_db;
var G__23488 = expr__23485;
return (pred__23484.cljs$core$IFn$_invoke$arity$2 ? pred__23484.cljs$core$IFn$_invoke$arity$2(G__23487,G__23488) : pred__23484.call(null,G__23487,G__23488));
})())){
return (new datascript.db.FilteredDB(G__23477,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23489 = cljs.core.cst$kw$pred;
var G__23490 = expr__23485;
return (pred__23484.cljs$core$IFn$_invoke$arity$2 ? pred__23484.cljs$core$IFn$_invoke$arity$2(G__23489,G__23490) : pred__23484.call(null,G__23489,G__23490));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__23477,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23491 = cljs.core.cst$kw$hash;
var G__23492 = expr__23485;
return (pred__23484.cljs$core$IFn$_invoke$arity$2 ? pred__23484.cljs$core$IFn$_invoke$arity$2(G__23491,G__23492) : pred__23484.call(null,G__23491,G__23492));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__23477,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__23477),null));
}
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__23477){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__23477,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unfiltered_DASH_db,cljs.core.cst$sym$pred,cljs.core.cst$sym$hash], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/FilteredDB");
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.db/FilteredDB");
});

datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__23481){
return (new datascript.db.FilteredDB(cljs.core.cst$kw$unfiltered_DASH_db.cljs$core$IFn$_invoke$arity$1(G__23481),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(G__23481),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__23481),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23481,cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], 0))),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_fdb.call(null,db__$1));
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
var G__23494 = v;
var G__23494__$1 = (((G__23494 instanceof cljs.core.Keyword))?G__23494.fqn:null);
switch (G__23494__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity,cljs.core.cst$kw$db_SLASH_index], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_value,cljs.core.cst$kw$db_SLASH_index], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$cardinality_SLASH_many], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$type_SLASH_ref,cljs.core.cst$kw$db_SLASH_index], null);

break;
default:
if(v === true){
var G__23495 = k;
var G__23495__$1 = (((G__23495 instanceof cljs.core.Keyword))?G__23495.fqn:null);
switch (G__23495__$1) {
case "db/isComponent":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent], null);

break;
case "db/index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
} else {
return null;
}

}
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return cljs.core.reduce_kv((function (m,attr,keys__GT_values){
return cljs.core.reduce_kv((function (m__$1,key,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,prop){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,prop,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,prop,cljs.core.PersistentHashSet.EMPTY),attr));
}),m__$1,datascript.db.attr__GT_properties(key,value));
}),m,keys__GT_values);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_(expected,v))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])])], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__23498_23508 = cljs.core.seq(schema);
var chunk__23499_23509 = null;
var count__23500_23510 = (0);
var i__23501_23511 = (0);
while(true){
if((i__23501_23511 < count__23500_23510)){
var vec__23502_23512 = chunk__23499_23509.cljs$core$IIndexed$_nth$arity$2(null,i__23501_23511);
var a_23513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502_23512,(0),null);
var kv_23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502_23512,(1),null);
var comp_QMARK__23515 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_23514,false);
datascript.db.validate_schema_key(a_23513,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_23514),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__8750__auto__ = comp_QMARK__23515;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_23514),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__8750__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_23513),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_23513,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_23513,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_23514),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_23513,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_23514),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_23513,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_23514),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__23516 = seq__23498_23508;
var G__23517 = chunk__23499_23509;
var G__23518 = count__23500_23510;
var G__23519 = (i__23501_23511 + (1));
seq__23498_23508 = G__23516;
chunk__23499_23509 = G__23517;
count__23500_23510 = G__23518;
i__23501_23511 = G__23519;
continue;
} else {
var temp__5278__auto___23520 = cljs.core.seq(seq__23498_23508);
if(temp__5278__auto___23520){
var seq__23498_23521__$1 = temp__5278__auto___23520;
if(cljs.core.chunked_seq_QMARK_(seq__23498_23521__$1)){
var c__9688__auto___23522 = cljs.core.chunk_first(seq__23498_23521__$1);
var G__23523 = cljs.core.chunk_rest(seq__23498_23521__$1);
var G__23524 = c__9688__auto___23522;
var G__23525 = cljs.core.count(c__9688__auto___23522);
var G__23526 = (0);
seq__23498_23508 = G__23523;
chunk__23499_23509 = G__23524;
count__23500_23510 = G__23525;
i__23501_23511 = G__23526;
continue;
} else {
var vec__23505_23527 = cljs.core.first(seq__23498_23521__$1);
var a_23528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_23527,(0),null);
var kv_23529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_23527,(1),null);
var comp_QMARK__23530 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv_23529,false);
datascript.db.validate_schema_key(a_23528,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv_23529),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__8750__auto__ = comp_QMARK__23530;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_23529),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__8750__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_23528),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a_23528,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a_23528,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv_23529),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a_23528,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv_23529),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a_23528,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv_23529),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));

var G__23531 = cljs.core.next(seq__23498_23521__$1);
var G__23532 = null;
var G__23533 = (0);
var G__23534 = (0);
seq__23498_23508 = G__23531;
chunk__23499_23509 = G__23532;
count__23500_23510 = G__23533;
i__23501_23511 = G__23534;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var G__23536 = arguments.length;
switch (G__23536) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(null);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_(schema))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,datascript.db.validate_schema(schema),cljs.core.cst$kw$eavt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_eavt),cljs.core.cst$kw$aevt,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_aevt),cljs.core.cst$kw$avet,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_avet),cljs.core.cst$kw$max_DASH_eid,(0),cljs.core.cst$kw$max_DASH_tx,(536870912),cljs.core.cst$kw$rschema,datascript.db.rschema(schema),cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var temp__5276__auto__ = datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(eavt,(new datascript.db.Datom(null,null,null,null,null)),(new datascript.db.Datom(((536870912) - (1)),null,null,null,null)));
if(cljs.core.truth_(temp__5276__auto__)){
var slice = temp__5276__auto__;
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.rseq(slice)));
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var G__23539 = arguments.length;
switch (G__23539) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(datoms,null);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
if(cljs.core.empty_QMARK_(datoms)){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(schema);
} else {
var _ = datascript.db.validate_schema(schema);
var rschema = datascript.db.rschema(schema);
var indexed = cljs.core.cst$kw$db_SLASH_index.cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = ((cljs.core.array_QMARK_(datoms))?datoms:datascript.arrays.into_array(datoms));
var eavt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_eavt_quick),datascript.db.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr(ds_arr.sort(datascript.db.cmp_datoms_aevt_quick),datascript.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_,rschema,indexed,ds_arr,eavt,aevt){
return (function (arr,d){
if(cljs.core.contains_QMARK_(indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt))
,[],datoms).sort(datascript.db.cmp_datoms_avet_quick);
var avet = datascript.btset._btset_from_sorted_arr(avet_datoms,datascript.db.cmp_datoms_avet);
var max_eid = datascript.db.init_max_eid(eavt);
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid))
),cljs.core.max,(536870912),eavt);
return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,schema,cljs.core.cst$kw$eavt,eavt,cljs.core.cst$kw$aevt,aevt,cljs.core.cst$kw$avet,avet,cljs.core.cst$kw$max_DASH_eid,max_eid,cljs.core.cst$kw$max_DASH_tx,max_tx,cljs.core.cst$kw$rschema,rschema,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
}
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__23541 = cljs.core.next(xs);
var G__23542 = cljs.core.next(ys);
xs = G__23541;
ys = G__23542;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref(db.hash);
if((h === (0))){
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(db.schema),cljs.core.hash(db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref(db.hash);
var datoms = (function (){var or__8762__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__8762__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(datascript.db._schema(db)),cljs.core.hash_unordered_coll(datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__8750__auto__ = ((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB));
if(and__8750__auto__){
var and__8750__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other));
if(and__8750__auto____$1){
return datascript.db.equiv_db_index(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY),datascript.db._datoms(other,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__23543){
var map__23544 = p__23543;
var map__23544__$1 = ((((!((map__23544 == null)))?((((map__23544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23544):map__23544);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23544__$1,cljs.core.cst$kw$schema);
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23544__$1,cljs.core.cst$kw$datoms);
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23544,map__23544__$1,schema,datoms){
return (function (p__23546){
var vec__23547 = p__23546;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(3),null);
return (new datascript.db.Datom(e,a,v,tx,true));
});})(map__23544,map__23544__$1,schema,datoms))
,datoms),schema);
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
return null;
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
return null;
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return null;
});
datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
var G__23550_23552 = a;
var G__23551_23553 = cljs.core._conj(cljs.core._conj((function (){var x__9711__auto__ = e;
return cljs.core._conj((function (){var x__9711__auto____$1 = a;
return cljs.core._conj((function (){var x__9711__auto____$2 = v;
return cljs.core._conj((function (){var x__9711__auto____$3 = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$3);
})(),x__9711__auto____$2);
})(),x__9711__auto____$1);
})(),x__9711__auto__);
})(),cljs.core.cst$sym$db),cljs.core.cst$sym$resolve_DASH_datom);
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__23550_23552,G__23551_23553) : datascript.db.validate_attr.call(null,G__23550_23552,G__23551_23553));
} else {
}

return (new datascript.db.Datom((datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.db.entid_some.call(null,db,e)),a,(cljs.core.truth_((function (){var and__8750__auto__ = !((v == null));
if(and__8750__auto__){
return (datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.db.ref_QMARK_.call(null,db,a));
} else {
return and__8750__auto__;
}
})())?(datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.db.entid_strict.call(null,db,v)):v),(datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,t) : datascript.db.entid_some.call(null,db,t)),null));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__23554){
var vec__23555 = p__23554;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(3),null);
var G__23558 = index;
var G__23558__$1 = (((G__23558 instanceof cljs.core.Keyword))?G__23558.fqn:null);
switch (G__23558__$1) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23558__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k23561,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__23565 = k23561;
var G__23565__$1 = (((G__23565 instanceof cljs.core.Keyword))?G__23565.fqn:null);
switch (G__23565__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23561,else__9453__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.db.TxReport{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23560){
var self__ = this;
var G__23560__$1 = this;
return (new cljs.core.RecordIter((0),G__23560__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__23566 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-2022644885 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__23566(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23562,other23563){
var self__ = this;
var this23562__$1 = this;
return (!((other23563 == null))) && ((this23562__$1.constructor === other23563.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.db_before,other23563.db_before)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.db_after,other23563.db_after)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.tx_data,other23563.tx_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.tempids,other23563.tempids)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.tx_meta,other23563.tx_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.__extmap,other23563.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tempids,null,cljs.core.cst$kw$db_DASH_after,null,cljs.core.cst$kw$db_DASH_before,null,cljs.core.cst$kw$tx_DASH_data,null,cljs.core.cst$kw$tx_DASH_meta,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__23560){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__23567 = cljs.core.keyword_identical_QMARK_;
var expr__23568 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__23570 = cljs.core.cst$kw$db_DASH_before;
var G__23571 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23570,G__23571) : pred__23567.call(null,G__23570,G__23571));
})())){
return (new datascript.db.TxReport(G__23560,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23572 = cljs.core.cst$kw$db_DASH_after;
var G__23573 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23572,G__23573) : pred__23567.call(null,G__23572,G__23573));
})())){
return (new datascript.db.TxReport(self__.db_before,G__23560,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23574 = cljs.core.cst$kw$tx_DASH_data;
var G__23575 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23574,G__23575) : pred__23567.call(null,G__23574,G__23575));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__23560,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23576 = cljs.core.cst$kw$tempids;
var G__23577 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23576,G__23577) : pred__23567.call(null,G__23576,G__23577));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__23560,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23578 = cljs.core.cst$kw$tx_DASH_meta;
var G__23579 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23578,G__23579) : pred__23567.call(null,G__23578,G__23579));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__23560,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__23560),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__23560){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__23560,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db_DASH_before,cljs.core.cst$sym$db_DASH_after,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tempids,cljs.core.cst$sym$tx_DASH_meta], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.db/TxReport");
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.db/TxReport");
});

datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__23564){
return (new datascript.db.TxReport(cljs.core.cst$kw$db_DASH_before.cljs$core$IFn$_invoke$arity$1(G__23564),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(G__23564),cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(G__23564),cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(G__23564),cljs.core.cst$kw$tx_DASH_meta.cljs$core$IFn$_invoke$arity$1(G__23564),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23564,cljs.core.cst$kw$db_DASH_before,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], 0))),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$cardinality_SLASH_many);
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$type_SLASH_ref);
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_isComponent);
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_index);
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref should contain 2 elements: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_(db,cljs.core.first(eid),cljs.core.cst$kw$db_SLASH_unique))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref attribute should be marked as :db/unique: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_unique,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if((cljs.core.second(eid) == null)){
return null;
} else {
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_(eid)){
var G__23581 = db;
var G__23582 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(eid);
db = G__23581;
eid = G__23582;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for entity id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));

}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__8762__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Nothing found for entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_missing,cljs.core.cst$kw$entity_DASH_id,eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__8750__auto__ = datom.added;
if(cljs.core.truth_(and__8750__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,cljs.core.cst$kw$db_SLASH_unique);
} else {
return and__8750__auto__;
}
})())){
var temp__5278__auto__ = cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__5278__auto__)){
var found = temp__5278__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot add "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datom], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" because of unique constraint: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([found], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_unique,cljs.core.cst$kw$attribute,datom.a,cljs.core.cst$kw$datom,datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot store nil as a value at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$value,v,cljs.core.cst$kw$context,at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$max_DASH_tx], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$db_SLASH_current_DASH_tx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx"));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__23583 = db;
if(((eid > cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db))) && ((eid < (536870912)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23583,cljs.core.cst$kw$max_DASH_eid,eid);
} else {
return G__23583;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var G__23585 = arguments.length;
switch (G__23585) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__23586 = report;
var G__23586__$1 = ((datascript.db.neg_number_QMARK_(e))?cljs.core.assoc_in(G__23586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__23586);
var G__23586__$2 = ((datascript.db.tx_id_QMARK_(e))?cljs.core.assoc_in(G__23586__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__23586__$1);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__23586__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__23588 = db;
var G__23588__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23588,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__23588__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23588__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__23588__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23588__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_avet_quick):G__23588__$2);
var G__23588__$4 = datascript.db.advance_max_eid(G__23588__$3,datom.e)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23588__$4,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

} else {
var temp__5276__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if(cljs.core.truth_(temp__5276__auto__)){
var removing = temp__5276__auto__;
var G__23589 = db;
var G__23589__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23589,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__23589__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23589__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__23589__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__23589__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_avet_quick):G__23589__$2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23589__$3,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

} else {
return db;
}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx_DASH_data], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__23590 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23590,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23590,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23590,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__23593 = acc;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23593,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23593,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23593,(2),null);
var _e = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if(((_e == null)) || ((_e < (0))) || ((acc == null)) || ((_e === e))){
return acc;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but entity already has :db/id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$assertion,acc], null));
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__5278__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,cljs.core.cst$kw$db$unique_SLASH_identity));
if(cljs.core.truth_(temp__5278__auto__)){
var idents = temp__5278__auto__;
return cljs.core.first(datascript.db.check_upsert_conflict(entity,cljs.core.reduce_kv(((function (idents,temp__5278__auto__){
return (function (acc,a,v){
if(cljs.core.contains_QMARK_(idents,a)){
var temp__5276__auto__ = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if(cljs.core.truth_(temp__5276__auto__)){
var e = temp__5276__auto__;
if((acc == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,(0)),e)){
return acc;
} else {
var vec__23596 = acc;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(2),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upserts: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_e], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$assertion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),cljs.core.cst$kw$conflict,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
} else {
return acc;
}
} else {
return acc;
}
});})(idents,temp__5278__auto__))
,null,entity)));
} else {
return null;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(!((datascript.arrays.array_QMARK_(vs)) || ((cljs.core.coll_QMARK_(vs)) && (!(cljs.core.map_QMARK_(vs)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),cljs.core.cst$kw$db$unique_SLASH_identity))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
var iter__9639__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__23599(s__23600){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__23600__$1 = s__23600;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__23600__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var vec__23605 = cljs.core.first(xs__5831__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23605,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23605,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$db_SLASH_id)){
var _ = datascript.db.validate_attr(a,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_SLASH_id,eid,a,vs]));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.db.ref_QMARK_(db,straight_a))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$context,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_SLASH_id,eid,a,vs])], null))})():null);
var iterys__9635__auto__ = ((function (s__23600__$1,_,reverse_QMARK_,straight_a,___$1,vec__23605,a,vs,xs__5831__auto__,temp__5278__auto__,eid){
return (function datascript$db$explode_$_iter__23599_$_iter__23601(s__23602){
return (new cljs.core.LazySeq(null,((function (s__23600__$1,_,reverse_QMARK_,straight_a,___$1,vec__23605,a,vs,xs__5831__auto__,temp__5278__auto__,eid){
return (function (){
var s__23602__$1 = s__23602;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__23602__$1);
if(temp__5278__auto____$1){
var s__23602__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23602__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__23602__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__23604 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__23603 = (0);
while(true){
if((i__23603 < size__9638__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__23603);
cljs.core.chunk_append(b__23604,(((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))));

var G__23608 = (i__23603 + (1));
i__23603 = G__23608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23604),datascript$db$explode_$_iter__23599_$_iter__23601(cljs.core.chunk_rest(s__23602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23604),null);
}
} else {
var v = cljs.core.first(s__23602__$2);
return cljs.core.cons((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))),datascript$db$explode_$_iter__23599_$_iter__23601(cljs.core.rest(s__23602__$2)));
}
} else {
return null;
}
break;
}
});})(s__23600__$1,_,reverse_QMARK_,straight_a,___$1,vec__23605,a,vs,xs__5831__auto__,temp__5278__auto__,eid))
,null,null));
});})(s__23600__$1,_,reverse_QMARK_,straight_a,___$1,vec__23605,a,vs,xs__5831__auto__,temp__5278__auto__,eid))
;
var fs__9636__auto__ = cljs.core.seq(iterys__9635__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__9636__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9636__auto__,datascript$db$explode_$_iter__23599(cljs.core.rest(s__23600__$1)));
} else {
var G__23609 = cljs.core.rest(s__23600__$1);
s__23600__$1 = G__23609;
continue;
}
} else {
var G__23610 = cljs.core.rest(s__23600__$1);
s__23600__$1 = G__23610;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__9639__auto__(entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__23611){
var vec__23612 = p__23611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(3),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,(4),null);
var ent = vec__23612;
datascript.db.validate_attr(a,ent);

datascript.db.validate_val(v,ent);

var tx__$1 = (function (){var or__8762__auto__ = tx;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return datascript.db.current_tx(report);
}
})();
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var datom = (new datascript.db.Datom(e__$1,a,v__$1,tx__$1,true));
if(datascript.db.multival_QMARK_(db,a)){
if(cljs.core.empty_QMARK_(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report(report,datom);
} else {
return report;
}
} else {
var temp__5276__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__5276__auto__)){
var old_datom = temp__5276__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,(new datascript.db.Datom(e__$1,a,old_datom.v,tx__$1,false))),datom);
}
} else {
return datascript.db.transact_report(report,datom);
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,(new datascript.db.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,d.v], null);
}))),datoms);
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(report,es){
return null;
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),tempid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tempid], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" both to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upserted_eid], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),tempid)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert], null));
} else {
var G__23616 = cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,tempid], null),upserted_eid);
var G__23617 = es;
return (datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2 ? datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2(G__23616,G__23617) : datascript.db.transact_tx_data.call(null,G__23616,G__23617));
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if(((initial_es == null)) || (cljs.core.sequential_QMARK_(initial_es))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad transaction data "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_es], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,initial_es], null));
}

var report = initial_report;
var es = initial_es;
while(true){
var vec__23618 = es;
var seq__23619 = cljs.core.seq(vec__23618);
var first__23620 = cljs.core.first(seq__23619);
var seq__23619__$1 = cljs.core.next(seq__23619);
var entity = first__23620;
var entities = seq__23619__$1;
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,cljs.core.cst$kw$db_SLASH_current_DASH_tx], null),datascript.db.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$max_DASH_tx], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_(entity)){
var old_eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_(old_eid)){
var id = datascript.db.current_tx(report);
var G__23633 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,id);
var G__23634 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__23633;
es = G__23634;
continue;
} else {
if(cljs.core.sequential_QMARK_(old_eid)){
var id = datascript.db.entid_strict(db,old_eid);
var G__23635 = report;
var G__23636 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__23635;
es = G__23636;
continue;
} else {
var temp__5276__auto__ = datascript.db.upsert_eid(db,entity);
if(cljs.core.truth_(temp__5276__auto__)){
var upserted_eid = temp__5276__auto__;
if((datascript.db.neg_number_QMARK_(old_eid)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid)))){
return datascript.db.retry_with_tempid(initial_report,initial_es,old_eid,upserted_eid);
} else {
var G__23637 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,upserted_eid);
var G__23638 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,upserted_eid)),entities);
report = G__23637;
es = G__23638;
continue;
}
} else {
if((typeof old_eid === 'number') || ((old_eid == null))){
var new_eid = (((old_eid == null))?datascript.db.next_eid(db):(((old_eid < (0)))?(function (){var or__8762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),old_eid);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return datascript.db.next_eid(db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,new_eid);
var G__23639 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid);
var G__23640 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__23639;
es = G__23640;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for :db/id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity,entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__23621 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_call)){
var vec__23624 = entity;
var seq__23625 = cljs.core.seq(vec__23624);
var first__23626 = cljs.core.first(seq__23625);
var seq__23625__$1 = cljs.core.next(seq__23625);
var _ = first__23626;
var first__23626__$1 = cljs.core.first(seq__23625__$1);
var seq__23625__$2 = cljs.core.next(seq__23625__$1);
var f = first__23626__$1;
var args = seq__23625__$2;
var G__23641 = report;
var G__23642 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__23641;
es = G__23642;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_cas)){
var vec__23627 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = datascript.db.validate_attr(a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = datascript.db.validate_val(nv__$1,entity);
var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__23627,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__23621,op,e,a,v,vec__23618,seq__23619,first__23620,seq__23619__$1,entity,entities,db){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__23627,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__23621,op,e,a,v,vec__23618,seq__23619,first__23620,seq__23619__$1,entity,entities,db))
,datoms))){
var G__23643 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__23644 = entities;
report = G__23643;
es = G__23644;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,datoms)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,datoms,cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
} else {
var v__$1 = cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__23645 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__23646 = entities;
report = G__23645;
es = G__23646;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,cljs.core.first(datoms),cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__23647 = report;
var G__23648 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null),entities);
report = G__23647;
es = G__23648;
continue;
} else {
if((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v))){
var G__23649 = report;
var G__23650 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null),entities);
report = G__23649;
es = G__23650;
continue;
} else {
if(datascript.db.neg_number_QMARK_(e)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Negative entity ids are resolved for :db/add only")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$op,entity], null));
} else {
var upserted_eid = ((datascript.db.is_attr_QMARK_(db,a,cljs.core.cst$kw$db$unique_SLASH_identity))?cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null));
if(cljs.core.truth_((function (){var and__8750__auto__ = upserted_eid;
if(cljs.core.truth_(and__8750__auto__)){
var and__8750__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__8750__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,allocated_eid);
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
})())){
return datascript.db.retry_with_tempid(initial_report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__8762__auto__ = upserted_eid;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
return datascript.db.next_eid(db);
}
}
})();
var G__23651 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,eid);
var G__23652 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__23651;
es = G__23652;
continue;
}
}
} else {
if((datascript.db.ref_QMARK_(db,a)) && (datascript.db.neg_number_QMARK_(v))){
var temp__5276__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,v], null));
if(cljs.core.truth_(temp__5276__auto__)){
var vid = temp__5276__auto__;
var G__23653 = report;
var G__23654 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__23653;
es = G__23654;
continue;
} else {
var G__23655 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.next_eid(db));
var G__23656 = es;
report = G__23655;
es = G__23656;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
var G__23657 = datascript.db.transact_add(report,entity);
var G__23658 = entities;
report = G__23657;
es = G__23658;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retract)){
var temp__5276__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__5276__auto__)){
var e__$1 = temp__5276__auto__;
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
datascript.db.validate_attr(a,entity);

datascript.db.validate_val(v__$1,entity);

var temp__5276__auto____$1 = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__5276__auto____$1)){
var old_datom = temp__5276__auto____$1;
var G__23659 = datascript.db.transact_retract_datom(report,old_datom);
var G__23660 = entities;
report = G__23659;
es = G__23660;
continue;
} else {
var G__23661 = report;
var G__23662 = entities;
report = G__23661;
es = G__23662;
continue;
}
} else {
var G__23663 = report;
var G__23664 = entities;
report = G__23663;
es = G__23664;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractAttribute)){
var temp__5276__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__5276__auto__)){
var e__$1 = temp__5276__auto__;
var _ = datascript.db.validate_attr(a,entity);
var datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__23665 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__23666 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__23665;
es = G__23666;
continue;
} else {
var G__23667 = report;
var G__23668 = entities;
report = G__23667;
es = G__23668;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractEntity)){
var temp__5276__auto__ = datascript.db.entid(db,e);
if(cljs.core.truth_(temp__5276__auto__)){
var e__$1 = temp__5276__auto__;
var e_datoms = datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e_datoms,e__$1,temp__5276__auto__,vec__23621,op,e,a,v,vec__23618,seq__23619,first__23620,seq__23619__$1,entity,entities,db){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__5276__auto__,vec__23621,op,e,a,v,vec__23618,seq__23619,first__23620,seq__23619__$1,entity,entities,db))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.db._attrs_by(db,cljs.core.cst$kw$db$type_SLASH_ref)], 0));
var G__23669 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__23670 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__23669;
es = G__23670;
continue;
} else {
var G__23671 = report;
var G__23672 = entities;
report = G__23671;
es = G__23672;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown operation at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,op,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_(datascript.db.datom_QMARK_(entity))){
var vec__23630 = entity;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(3),null);
var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(4),null);
if(cljs.core.truth_(added)){
var G__23673 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e,a,v,tx], null));
var G__23674 = entities;
report = G__23673;
es = G__23674;
continue;
} else {
var G__23675 = report;
var G__23676 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_retract,e,a,v], null),entities);
report = G__23675;
es = G__23676;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity type at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
break;
}
});
