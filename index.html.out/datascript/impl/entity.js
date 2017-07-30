// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('datascript.db');
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
return null;
});
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return null;
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return null;
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__24807 = arguments.length;
switch (G__24807) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return null;
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
return null;
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
return null;
});
datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5278__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__5278__auto__)){
var e = temp__5278__auto__;
var G__24809 = db;
var G__24810 = e;
var G__24811 = cljs.core.volatile_BANG_(false);
var G__24812 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__24809,G__24810,G__24811,G__24812) : datascript.impl.entity.__GT_Entity.call(null,G__24809,G__24810,G__24811,G__24812));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24813_SHARP_,p2__24814_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24813_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__24814_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24815_SHARP_,p2__24816_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24815_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__24816_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5276__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5276__auto__)){
var datoms = temp__5276__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__5276__auto__){
return (function (p1__24817_SHARP_,p2__24818_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24817_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__24818_SHARP_)));
});})(datoms,temp__5276__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__8962__auto__ = (function datascript$impl$entity$js_seq_$_iter__24819(s__24820){
return (new cljs.core.LazySeq(null,(function (){
var s__24820__$1 = s__24820;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__24820__$1);
if(temp__5278__auto__){
var s__24820__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24820__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__24820__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__24822 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__24821 = (0);
while(true){
if((i__24821 < size__8961__auto__)){
var vec__24823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__24821);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24823,(1),null);
cljs.core.chunk_append(b__24822,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__24829 = (i__24821 + (1));
i__24821 = G__24829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24822),datascript$impl$entity$js_seq_$_iter__24819(cljs.core.chunk_rest(s__24820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24822),null);
}
} else {
var vec__24826 = cljs.core.first(s__24820__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24826,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__24819(cljs.core.rest(s__24820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(cljs.core.deref(e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__24855 = null;
var G__24855__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__24831 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__24832 = null;
var count__24833 = (0);
var i__24834 = (0);
while(true){
if((i__24834 < count__24833)){
var vec__24835 = chunk__24832.cljs$core$IIndexed$_nth$arity$2(null,i__24834);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__24856 = seq__24831;
var G__24857 = chunk__24832;
var G__24858 = count__24833;
var G__24859 = (i__24834 + (1));
seq__24831 = G__24856;
chunk__24832 = G__24857;
count__24833 = G__24858;
i__24834 = G__24859;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__24831);
if(temp__5278__auto__){
var seq__24831__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24831__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__24831__$1);
var G__24860 = cljs.core.chunk_rest(seq__24831__$1);
var G__24861 = c__9011__auto__;
var G__24862 = cljs.core.count(c__9011__auto__);
var G__24863 = (0);
seq__24831 = G__24860;
chunk__24832 = G__24861;
count__24833 = G__24862;
i__24834 = G__24863;
continue;
} else {
var vec__24838 = cljs.core.first(seq__24831__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24838,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__24864 = cljs.core.next(seq__24831__$1);
var G__24865 = null;
var G__24866 = (0);
var G__24867 = (0);
seq__24831 = G__24864;
chunk__24832 = G__24865;
count__24833 = G__24866;
i__24834 = G__24867;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__24855__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__24841 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__24842 = null;
var count__24843 = (0);
var i__24844 = (0);
while(true){
if((i__24844 < count__24843)){
var vec__24845 = chunk__24842.cljs$core$IIndexed$_nth$arity$2(null,i__24844);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24845,(1),null);
f.call(use_as_this,v,a,this$);

var G__24868 = seq__24841;
var G__24869 = chunk__24842;
var G__24870 = count__24843;
var G__24871 = (i__24844 + (1));
seq__24841 = G__24868;
chunk__24842 = G__24869;
count__24843 = G__24870;
i__24844 = G__24871;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__24841);
if(temp__5278__auto__){
var seq__24841__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24841__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__24841__$1);
var G__24872 = cljs.core.chunk_rest(seq__24841__$1);
var G__24873 = c__9011__auto__;
var G__24874 = cljs.core.count(c__9011__auto__);
var G__24875 = (0);
seq__24841 = G__24872;
chunk__24842 = G__24873;
count__24843 = G__24874;
i__24844 = G__24875;
continue;
} else {
var vec__24848 = cljs.core.first(seq__24841__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24848,(1),null);
f.call(use_as_this,v,a,this$);

var G__24876 = cljs.core.next(seq__24841__$1);
var G__24877 = null;
var G__24878 = (0);
var G__24879 = (0);
seq__24841 = G__24876;
chunk__24842 = G__24877;
count__24843 = G__24878;
i__24844 = G__24879;
continue;
}
} else {
return null;
}
}
break;
}
});
G__24855 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__24855__1.call(this,f);
case 2:
return G__24855__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24855.cljs$core$IFn$_invoke$arity$1 = G__24855__1;
G__24855.cljs$core$IFn$_invoke$arity$2 = G__24855__2;
return G__24855;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__24851 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__24851);
} else {
return G__24851;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq(cljs.core.deref(self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count(cljs.core.deref(self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__24852 = this$__$1;
var G__24853 = k;
var G__24854 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__24852,G__24853,G__24854) : datascript.impl.entity.lookup_entity.call(null,G__24852,G__24853,G__24854));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__24880 = null;
var G__24880__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__24880__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__24880 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24880__2.call(this,self__,k);
case 3:
return G__24880__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24880.cljs$core$IFn$_invoke$arity$2 = G__24880__2;
G__24880.cljs$core$IFn$_invoke$arity$3 = G__24880__3;
return G__24880;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args24830){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24830)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.cache),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__24882 = arguments.length;
switch (G__24882) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var temp__5280__auto__ = (function (){var fexpr__24883 = cljs.core.deref(this$.cache);
return (fexpr__24883.cljs$core$IFn$_invoke$arity$1 ? fexpr__24883.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__24883.call(null,attr));
})();
if((temp__5280__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref(this$.touched))){
return not_found;
} else {
var temp__5280__auto____$1 = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5280__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5280__auto____$1;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5280__auto__;
return v;
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref(e.touched))){
} else {
var temp__5278__auto___24885 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5278__auto___24885)){
var datoms_24886 = temp__5278__auto___24885;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_24886)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__24887_24909 = "datascript.impl.entity.Entity.prototype.get";
var G__24888_24910 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__24887_24909,G__24888_24910);

var G__24889_24911 = "datascript.impl.entity.Entity.prototype.has";
var G__24890_24912 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__24889_24911,G__24890_24912);

var G__24891_24913 = "datascript.impl.entity.Entity.prototype.forEach";
var G__24892_24914 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__24891_24913,G__24892_24914);

var G__24893_24915 = "datascript.impl.entity.Entity.prototype.key_set";
var G__24894_24916 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__24893_24915,G__24894_24916);

var G__24895_24917 = "datascript.impl.entity.Entity.prototype.value_set";
var G__24896_24918 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__24895_24917,G__24896_24918);

var G__24897_24919 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__24898_24920 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__24897_24919,G__24898_24920);

var G__24899_24921 = "datascript.impl.entity.Entity.prototype.keys";
var G__24900_24922 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__24899_24921,G__24900_24922);

var G__24901_24923 = "datascript.impl.entity.Entity.prototype.values";
var G__24902_24924 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__24901_24923,G__24902_24924);

var G__24903_24925 = "datascript.impl.entity.Entity.prototype.entries";
var G__24904_24926 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__24903_24925,G__24904_24926);

var G__24905_24927 = "cljs.core.ES6Iterator.prototype.next";
var G__24906_24928 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__24905_24927,G__24906_24928);

var G__24907_24929 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__24908_24930 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__24907_24929,G__24908_24930);
