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
var G__25847 = arguments.length;
switch (G__25847) {
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
var G__25849 = db;
var G__25850 = e;
var G__25851 = cljs.core.volatile_BANG_(false);
var G__25852 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__25849,G__25850,G__25851,G__25852) : datascript.impl.entity.__GT_Entity.call(null,G__25849,G__25850,G__25851,G__25852));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25853_SHARP_,p2__25854_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25853_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__25854_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25855_SHARP_,p2__25856_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25855_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__25856_SHARP_));
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
return (function (p1__25857_SHARP_,p2__25858_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25857_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__25858_SHARP_)));
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

var iter__9639__auto__ = (function datascript$impl$entity$js_seq_$_iter__25859(s__25860){
return (new cljs.core.LazySeq(null,(function (){
var s__25860__$1 = s__25860;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25860__$1);
if(temp__5278__auto__){
var s__25860__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25860__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__25860__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__25862 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__25861 = (0);
while(true){
if((i__25861 < size__9638__auto__)){
var vec__25863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__25861);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25863,(1),null);
cljs.core.chunk_append(b__25862,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__25869 = (i__25861 + (1));
i__25861 = G__25869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25862),datascript$impl$entity$js_seq_$_iter__25859(cljs.core.chunk_rest(s__25860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25862),null);
}
} else {
var vec__25866 = cljs.core.first(s__25860__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25866,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__25859(cljs.core.rest(s__25860__$2)));
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
var G__25895 = null;
var G__25895__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__25871 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__25872 = null;
var count__25873 = (0);
var i__25874 = (0);
while(true){
if((i__25874 < count__25873)){
var vec__25875 = chunk__25872.cljs$core$IIndexed$_nth$arity$2(null,i__25874);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25875,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__25896 = seq__25871;
var G__25897 = chunk__25872;
var G__25898 = count__25873;
var G__25899 = (i__25874 + (1));
seq__25871 = G__25896;
chunk__25872 = G__25897;
count__25873 = G__25898;
i__25874 = G__25899;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25871);
if(temp__5278__auto__){
var seq__25871__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25871__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__25871__$1);
var G__25900 = cljs.core.chunk_rest(seq__25871__$1);
var G__25901 = c__9688__auto__;
var G__25902 = cljs.core.count(c__9688__auto__);
var G__25903 = (0);
seq__25871 = G__25900;
chunk__25872 = G__25901;
count__25873 = G__25902;
i__25874 = G__25903;
continue;
} else {
var vec__25878 = cljs.core.first(seq__25871__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__25904 = cljs.core.next(seq__25871__$1);
var G__25905 = null;
var G__25906 = (0);
var G__25907 = (0);
seq__25871 = G__25904;
chunk__25872 = G__25905;
count__25873 = G__25906;
i__25874 = G__25907;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__25895__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__25881 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__25882 = null;
var count__25883 = (0);
var i__25884 = (0);
while(true){
if((i__25884 < count__25883)){
var vec__25885 = chunk__25882.cljs$core$IIndexed$_nth$arity$2(null,i__25884);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(1),null);
f.call(use_as_this,v,a,this$);

var G__25908 = seq__25881;
var G__25909 = chunk__25882;
var G__25910 = count__25883;
var G__25911 = (i__25884 + (1));
seq__25881 = G__25908;
chunk__25882 = G__25909;
count__25883 = G__25910;
i__25884 = G__25911;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25881);
if(temp__5278__auto__){
var seq__25881__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25881__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__25881__$1);
var G__25912 = cljs.core.chunk_rest(seq__25881__$1);
var G__25913 = c__9688__auto__;
var G__25914 = cljs.core.count(c__9688__auto__);
var G__25915 = (0);
seq__25881 = G__25912;
chunk__25882 = G__25913;
count__25883 = G__25914;
i__25884 = G__25915;
continue;
} else {
var vec__25888 = cljs.core.first(seq__25881__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(1),null);
f.call(use_as_this,v,a,this$);

var G__25916 = cljs.core.next(seq__25881__$1);
var G__25917 = null;
var G__25918 = (0);
var G__25919 = (0);
seq__25881 = G__25916;
chunk__25882 = G__25917;
count__25883 = G__25918;
i__25884 = G__25919;
continue;
}
} else {
return null;
}
}
break;
}
});
G__25895 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__25895__1.call(this,f);
case 2:
return G__25895__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25895.cljs$core$IFn$_invoke$arity$1 = G__25895__1;
G__25895.cljs$core$IFn$_invoke$arity$2 = G__25895__2;
return G__25895;
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
var G__25891 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__25891);
} else {
return G__25891;
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
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__25892 = this$__$1;
var G__25893 = k;
var G__25894 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__25892,G__25893,G__25894) : datascript.impl.entity.lookup_entity.call(null,G__25892,G__25893,G__25894));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__25920 = null;
var G__25920__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__25920__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__25920 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25920__2.call(this,self__,k);
case 3:
return G__25920__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25920.cljs$core$IFn$_invoke$arity$2 = G__25920__2;
G__25920.cljs$core$IFn$_invoke$arity$3 = G__25920__3;
return G__25920;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args25870){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25870)));
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
var G__25922 = arguments.length;
switch (G__25922) {
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
var temp__5280__auto__ = (function (){var fexpr__25923 = cljs.core.deref(this$.cache);
return (fexpr__25923.cljs$core$IFn$_invoke$arity$1 ? fexpr__25923.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__25923.call(null,attr));
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
var temp__5278__auto___25925 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5278__auto___25925)){
var datoms_25926 = temp__5278__auto___25925;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_25926)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__25927_25949 = "datascript.impl.entity.Entity.prototype.get";
var G__25928_25950 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__25927_25949,G__25928_25950);

var G__25929_25951 = "datascript.impl.entity.Entity.prototype.has";
var G__25930_25952 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__25929_25951,G__25930_25952);

var G__25931_25953 = "datascript.impl.entity.Entity.prototype.forEach";
var G__25932_25954 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__25931_25953,G__25932_25954);

var G__25933_25955 = "datascript.impl.entity.Entity.prototype.key_set";
var G__25934_25956 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__25933_25955,G__25934_25956);

var G__25935_25957 = "datascript.impl.entity.Entity.prototype.value_set";
var G__25936_25958 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__25935_25957,G__25936_25958);

var G__25937_25959 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__25938_25960 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__25937_25959,G__25938_25960);

var G__25939_25961 = "datascript.impl.entity.Entity.prototype.keys";
var G__25940_25962 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__25939_25961,G__25940_25962);

var G__25941_25963 = "datascript.impl.entity.Entity.prototype.values";
var G__25942_25964 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__25941_25963,G__25942_25964);

var G__25943_25965 = "datascript.impl.entity.Entity.prototype.entries";
var G__25944_25966 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__25943_25965,G__25944_25966);

var G__25945_25967 = "cljs.core.ES6Iterator.prototype.next";
var G__25946_25968 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__25945_25967,G__25946_25968);

var G__25947_25969 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__25948_25970 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__25947_25969,G__25948_25970);
