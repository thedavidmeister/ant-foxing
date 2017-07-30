// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var G__19672 = arguments.length;
switch (G__19672) {
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
var G__19674 = db;
var G__19675 = e;
var G__19676 = cljs.core.volatile_BANG_(false);
var G__19677 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__19674,G__19675,G__19676,G__19677) : datascript.impl.entity.__GT_Entity.call(null,G__19674,G__19675,G__19676,G__19677));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19678_SHARP_,p2__19679_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19678_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__19679_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19680_SHARP_,p2__19681_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19680_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__19681_SHARP_));
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
return (function (p1__19682_SHARP_,p2__19683_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19682_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__19683_SHARP_)));
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

var iter__9639__auto__ = (function datascript$impl$entity$js_seq_$_iter__19684(s__19685){
return (new cljs.core.LazySeq(null,(function (){
var s__19685__$1 = s__19685;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19685__$1);
if(temp__5278__auto__){
var s__19685__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19685__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__19685__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__19687 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__19686 = (0);
while(true){
if((i__19686 < size__9638__auto__)){
var vec__19688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__19686);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(1),null);
cljs.core.chunk_append(b__19687,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__19694 = (i__19686 + (1));
i__19686 = G__19694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19687),datascript$impl$entity$js_seq_$_iter__19684(cljs.core.chunk_rest(s__19685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19687),null);
}
} else {
var vec__19691 = cljs.core.first(s__19685__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__19684(cljs.core.rest(s__19685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9639__auto__(cljs.core.deref(e.cache));
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
var G__19720 = null;
var G__19720__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__19696 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__19697 = null;
var count__19698 = (0);
var i__19699 = (0);
while(true){
if((i__19699 < count__19698)){
var vec__19700 = chunk__19697.cljs$core$IIndexed$_nth$arity$2(null,i__19699);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__19721 = seq__19696;
var G__19722 = chunk__19697;
var G__19723 = count__19698;
var G__19724 = (i__19699 + (1));
seq__19696 = G__19721;
chunk__19697 = G__19722;
count__19698 = G__19723;
i__19699 = G__19724;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__19696);
if(temp__5278__auto__){
var seq__19696__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19696__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__19696__$1);
var G__19725 = cljs.core.chunk_rest(seq__19696__$1);
var G__19726 = c__9688__auto__;
var G__19727 = cljs.core.count(c__9688__auto__);
var G__19728 = (0);
seq__19696 = G__19725;
chunk__19697 = G__19726;
count__19698 = G__19727;
i__19699 = G__19728;
continue;
} else {
var vec__19703 = cljs.core.first(seq__19696__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__19729 = cljs.core.next(seq__19696__$1);
var G__19730 = null;
var G__19731 = (0);
var G__19732 = (0);
seq__19696 = G__19729;
chunk__19697 = G__19730;
count__19698 = G__19731;
i__19699 = G__19732;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19720__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__19706 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__19707 = null;
var count__19708 = (0);
var i__19709 = (0);
while(true){
if((i__19709 < count__19708)){
var vec__19710 = chunk__19707.cljs$core$IIndexed$_nth$arity$2(null,i__19709);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(1),null);
f.call(use_as_this,v,a,this$);

var G__19733 = seq__19706;
var G__19734 = chunk__19707;
var G__19735 = count__19708;
var G__19736 = (i__19709 + (1));
seq__19706 = G__19733;
chunk__19707 = G__19734;
count__19708 = G__19735;
i__19709 = G__19736;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__19706);
if(temp__5278__auto__){
var seq__19706__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19706__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__19706__$1);
var G__19737 = cljs.core.chunk_rest(seq__19706__$1);
var G__19738 = c__9688__auto__;
var G__19739 = cljs.core.count(c__9688__auto__);
var G__19740 = (0);
seq__19706 = G__19737;
chunk__19707 = G__19738;
count__19708 = G__19739;
i__19709 = G__19740;
continue;
} else {
var vec__19713 = cljs.core.first(seq__19706__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(1),null);
f.call(use_as_this,v,a,this$);

var G__19741 = cljs.core.next(seq__19706__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19706 = G__19741;
chunk__19707 = G__19742;
count__19708 = G__19743;
i__19709 = G__19744;
continue;
}
} else {
return null;
}
}
break;
}
});
G__19720 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__19720__1.call(this,f);
case 2:
return G__19720__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19720.cljs$core$IFn$_invoke$arity$1 = G__19720__1;
G__19720.cljs$core$IFn$_invoke$arity$2 = G__19720__2;
return G__19720;
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
var G__19716 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__19716);
} else {
return G__19716;
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
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__19717 = this$__$1;
var G__19718 = k;
var G__19719 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__19717,G__19718,G__19719) : datascript.impl.entity.lookup_entity.call(null,G__19717,G__19718,G__19719));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__19745 = null;
var G__19745__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__19745__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__19745 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19745__2.call(this,self__,k);
case 3:
return G__19745__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19745.cljs$core$IFn$_invoke$arity$2 = G__19745__2;
G__19745.cljs$core$IFn$_invoke$arity$3 = G__19745__3;
return G__19745;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args19695){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19695)));
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

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"datascript.impl.entity/Entity");
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
var G__19747 = arguments.length;
switch (G__19747) {
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
var temp__5280__auto__ = (function (){var fexpr__19748 = cljs.core.deref(this$.cache);
return (fexpr__19748.cljs$core$IFn$_invoke$arity$1 ? fexpr__19748.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__19748.call(null,attr));
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
var temp__5278__auto___19750 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5278__auto___19750)){
var datoms_19751 = temp__5278__auto___19750;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_19751)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__19752_19774 = "datascript.impl.entity.Entity.prototype.get";
var G__19753_19775 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__19752_19774,G__19753_19775);

var G__19754_19776 = "datascript.impl.entity.Entity.prototype.has";
var G__19755_19777 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__19754_19776,G__19755_19777);

var G__19756_19778 = "datascript.impl.entity.Entity.prototype.forEach";
var G__19757_19779 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__19756_19778,G__19757_19779);

var G__19758_19780 = "datascript.impl.entity.Entity.prototype.key_set";
var G__19759_19781 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__19758_19780,G__19759_19781);

var G__19760_19782 = "datascript.impl.entity.Entity.prototype.value_set";
var G__19761_19783 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__19760_19782,G__19761_19783);

var G__19762_19784 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__19763_19785 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__19762_19784,G__19763_19785);

var G__19764_19786 = "datascript.impl.entity.Entity.prototype.keys";
var G__19765_19787 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__19764_19786,G__19765_19787);

var G__19766_19788 = "datascript.impl.entity.Entity.prototype.values";
var G__19767_19789 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__19766_19788,G__19767_19789);

var G__19768_19790 = "datascript.impl.entity.Entity.prototype.entries";
var G__19769_19791 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__19768_19790,G__19769_19791);

var G__19770_19792 = "cljs.core.ES6Iterator.prototype.next";
var G__19771_19793 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__19770_19792,G__19771_19793);

var G__19772_19794 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__19773_19795 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__19772_19794,G__19773_19795);
