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
var G__25743 = arguments.length;
switch (G__25743) {
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
var G__25745 = db;
var G__25746 = e;
var G__25747 = cljs.core.volatile_BANG_(false);
var G__25748 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__25745,G__25746,G__25747,G__25748) : datascript.impl.entity.__GT_Entity.call(null,G__25745,G__25746,G__25747,G__25748));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25749_SHARP_,p2__25750_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25749_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__25750_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25751_SHARP_,p2__25752_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25751_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__25752_SHARP_));
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
return (function (p1__25753_SHARP_,p2__25754_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25753_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__25754_SHARP_)));
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

var iter__9639__auto__ = (function datascript$impl$entity$js_seq_$_iter__25755(s__25756){
return (new cljs.core.LazySeq(null,(function (){
var s__25756__$1 = s__25756;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25756__$1);
if(temp__5278__auto__){
var s__25756__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25756__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__25756__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__25758 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__25757 = (0);
while(true){
if((i__25757 < size__9638__auto__)){
var vec__25759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__25757);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25759,(1),null);
cljs.core.chunk_append(b__25758,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__25765 = (i__25757 + (1));
i__25757 = G__25765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25758),datascript$impl$entity$js_seq_$_iter__25755(cljs.core.chunk_rest(s__25756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25758),null);
}
} else {
var vec__25762 = cljs.core.first(s__25756__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__25755(cljs.core.rest(s__25756__$2)));
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
var G__25791 = null;
var G__25791__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__25767 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__25768 = null;
var count__25769 = (0);
var i__25770 = (0);
while(true){
if((i__25770 < count__25769)){
var vec__25771 = chunk__25768.cljs$core$IIndexed$_nth$arity$2(null,i__25770);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__25792 = seq__25767;
var G__25793 = chunk__25768;
var G__25794 = count__25769;
var G__25795 = (i__25770 + (1));
seq__25767 = G__25792;
chunk__25768 = G__25793;
count__25769 = G__25794;
i__25770 = G__25795;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25767);
if(temp__5278__auto__){
var seq__25767__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25767__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__25767__$1);
var G__25796 = cljs.core.chunk_rest(seq__25767__$1);
var G__25797 = c__9688__auto__;
var G__25798 = cljs.core.count(c__9688__auto__);
var G__25799 = (0);
seq__25767 = G__25796;
chunk__25768 = G__25797;
count__25769 = G__25798;
i__25770 = G__25799;
continue;
} else {
var vec__25774 = cljs.core.first(seq__25767__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25774,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__25800 = cljs.core.next(seq__25767__$1);
var G__25801 = null;
var G__25802 = (0);
var G__25803 = (0);
seq__25767 = G__25800;
chunk__25768 = G__25801;
count__25769 = G__25802;
i__25770 = G__25803;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__25791__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__25777 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__25778 = null;
var count__25779 = (0);
var i__25780 = (0);
while(true){
if((i__25780 < count__25779)){
var vec__25781 = chunk__25778.cljs$core$IIndexed$_nth$arity$2(null,i__25780);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25781,(1),null);
f.call(use_as_this,v,a,this$);

var G__25804 = seq__25777;
var G__25805 = chunk__25778;
var G__25806 = count__25779;
var G__25807 = (i__25780 + (1));
seq__25777 = G__25804;
chunk__25778 = G__25805;
count__25779 = G__25806;
i__25780 = G__25807;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25777);
if(temp__5278__auto__){
var seq__25777__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25777__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__25777__$1);
var G__25808 = cljs.core.chunk_rest(seq__25777__$1);
var G__25809 = c__9688__auto__;
var G__25810 = cljs.core.count(c__9688__auto__);
var G__25811 = (0);
seq__25777 = G__25808;
chunk__25778 = G__25809;
count__25779 = G__25810;
i__25780 = G__25811;
continue;
} else {
var vec__25784 = cljs.core.first(seq__25777__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25784,(1),null);
f.call(use_as_this,v,a,this$);

var G__25812 = cljs.core.next(seq__25777__$1);
var G__25813 = null;
var G__25814 = (0);
var G__25815 = (0);
seq__25777 = G__25812;
chunk__25778 = G__25813;
count__25779 = G__25814;
i__25780 = G__25815;
continue;
}
} else {
return null;
}
}
break;
}
});
G__25791 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__25791__1.call(this,f);
case 2:
return G__25791__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25791.cljs$core$IFn$_invoke$arity$1 = G__25791__1;
G__25791.cljs$core$IFn$_invoke$arity$2 = G__25791__2;
return G__25791;
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
var G__25787 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__25787);
} else {
return G__25787;
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
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__25788 = this$__$1;
var G__25789 = k;
var G__25790 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__25788,G__25789,G__25790) : datascript.impl.entity.lookup_entity.call(null,G__25788,G__25789,G__25790));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__25816 = null;
var G__25816__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__25816__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__25816 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25816__2.call(this,self__,k);
case 3:
return G__25816__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25816.cljs$core$IFn$_invoke$arity$2 = G__25816__2;
G__25816.cljs$core$IFn$_invoke$arity$3 = G__25816__3;
return G__25816;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args25766){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25766)));
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
var G__25818 = arguments.length;
switch (G__25818) {
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
var temp__5280__auto__ = (function (){var fexpr__25819 = cljs.core.deref(this$.cache);
return (fexpr__25819.cljs$core$IFn$_invoke$arity$1 ? fexpr__25819.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__25819.call(null,attr));
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
var temp__5278__auto___25821 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5278__auto___25821)){
var datoms_25822 = temp__5278__auto___25821;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_25822)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__25823_25845 = "datascript.impl.entity.Entity.prototype.get";
var G__25824_25846 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__25823_25845,G__25824_25846);

var G__25825_25847 = "datascript.impl.entity.Entity.prototype.has";
var G__25826_25848 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__25825_25847,G__25826_25848);

var G__25827_25849 = "datascript.impl.entity.Entity.prototype.forEach";
var G__25828_25850 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__25827_25849,G__25828_25850);

var G__25829_25851 = "datascript.impl.entity.Entity.prototype.key_set";
var G__25830_25852 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__25829_25851,G__25830_25852);

var G__25831_25853 = "datascript.impl.entity.Entity.prototype.value_set";
var G__25832_25854 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__25831_25853,G__25832_25854);

var G__25833_25855 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__25834_25856 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__25833_25855,G__25834_25856);

var G__25835_25857 = "datascript.impl.entity.Entity.prototype.keys";
var G__25836_25858 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__25835_25857,G__25836_25858);

var G__25837_25859 = "datascript.impl.entity.Entity.prototype.values";
var G__25838_25860 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__25837_25859,G__25838_25860);

var G__25839_25861 = "datascript.impl.entity.Entity.prototype.entries";
var G__25840_25862 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__25839_25861,G__25840_25862);

var G__25841_25863 = "cljs.core.ES6Iterator.prototype.next";
var G__25842_25864 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__25841_25863,G__25842_25864);

var G__25843_25865 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__25844_25866 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__25843_25865,G__25844_25866);
