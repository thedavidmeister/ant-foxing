// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.storage_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');

/**
 * Represents a storage resource.
 * @interface
 */
hoplon.storage_atom.IStorageBackend = function(){};

hoplon.storage_atom._get = (function hoplon$storage_atom$_get(this$,not_found){
if((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_get$arity$2 == null)))){
return this$.hoplon$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.storage_atom._get[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__9496__auto__.call(null,this$,not_found));
} else {
var m__9496__auto____$1 = (hoplon.storage_atom._get["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__9496__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
hoplon.storage_atom._commit_BANG_ = (function hoplon$storage_atom$_commit_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))){
return this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.storage_atom._commit_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__9496__auto__.call(null,this$,value));
} else {
var m__9496__auto____$1 = (hoplon.storage_atom._commit_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__9496__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {hoplon.storage_atom.IStorageBackend}
*/
hoplon.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL;

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5276__auto__ = self__.store.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)));
if(cljs.core.truth_(temp__5276__auto__)){
var existing = temp__5276__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(existing);
} else {
return not_found;
}
});

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});

hoplon.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

hoplon.storage_atom.StorageBackend.cljs$lang$type = true;

hoplon.storage_atom.StorageBackend.cljs$lang$ctorStr = "hoplon.storage-atom/StorageBackend";

hoplon.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"hoplon.storage-atom/StorageBackend");
});

hoplon.storage_atom.__GT_StorageBackend = (function hoplon$storage_atom$__GT_StorageBackend(store,key){
return (new hoplon.storage_atom.StorageBackend(store,key));
});

hoplon.storage_atom.store = (function hoplon$storage_atom$store(var_args){
var args__10041__auto__ = [];
var len__10034__auto___20334 = arguments.length;
var i__10035__auto___20335 = (0);
while(true){
if((i__10035__auto___20335 < len__10034__auto___20334)){
args__10041__auto__.push((arguments[i__10035__auto___20335]));

var G__20336 = (i__10035__auto___20335 + (1));
i__10035__auto___20335 = G__20336;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__20330){
var map__20331 = p__20330;
var map__20331__$1 = ((((!((map__20331 == null)))?((((map__20331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20331):map__20331);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,cljs.core.cst$kw$ignore_DASH_existing);
var existing = (function (){var or__8762__auto__ = (function (){var and__8750__auto__ = ignore_existing;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none;
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return hoplon.storage_atom._get(backend,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none,existing)){
hoplon.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else {
cljs.core.reset_BANG_(atom,existing);
}

var G__20333 = atom;
cljs.core.add_watch(G__20333,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__20333,existing,map__20331,map__20331__$1,ignore_existing){
return (function (p1__20324_SHARP_,p2__20325_SHARP_,p3__20326_SHARP_,p4__20323_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__20323_SHARP_);
});})(G__20333,existing,map__20331,map__20331__$1,ignore_existing))
);

return G__20333;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq20327){
var G__20328 = cljs.core.first(seq20327);
var seq20327__$1 = cljs.core.next(seq20327);
var G__20329 = cljs.core.first(seq20327__$1);
var seq20327__$2 = cljs.core.next(seq20327__$1);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(G__20328,G__20329,seq20327__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___20344 = arguments.length;
var i__10035__auto___20345 = (0);
while(true){
if((i__10035__auto___20345 < len__10034__auto___20344)){
args__10041__auto__.push((arguments[i__10035__auto___20345]));

var G__20346 = (i__10035__auto___20345 + (1));
i__10035__auto___20345 = G__20346;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((3) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10042__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__20341){
var map__20342 = p__20341;
var map__20342__$1 = ((((!((map__20342 == null)))?((((map__20342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20342):map__20342);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20342__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq20337){
var G__20338 = cljs.core.first(seq20337);
var seq20337__$1 = cljs.core.next(seq20337);
var G__20339 = cljs.core.first(seq20337__$1);
var seq20337__$2 = cljs.core.next(seq20337__$1);
var G__20340 = cljs.core.first(seq20337__$2);
var seq20337__$3 = cljs.core.next(seq20337__$2);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(G__20338,G__20339,G__20340,seq20337__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___20353 = arguments.length;
var i__10035__auto___20354 = (0);
while(true){
if((i__10035__auto___20354 < len__10034__auto___20353)){
args__10041__auto__.push((arguments[i__10035__auto___20354]));

var G__20355 = (i__10035__auto___20354 + (1));
i__10035__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__20350){
var map__20351 = p__20350;
var map__20351__$1 = ((((!((map__20351 == null)))?((((map__20351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20351):map__20351);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20351__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq20347){
var G__20348 = cljs.core.first(seq20347);
var seq20347__$1 = cljs.core.next(seq20347);
var G__20349 = cljs.core.first(seq20347__$1);
var seq20347__$2 = cljs.core.next(seq20347__$1);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic(G__20348,G__20349,seq20347__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___20362 = arguments.length;
var i__10035__auto___20363 = (0);
while(true){
if((i__10035__auto___20363 < len__10034__auto___20362)){
args__10041__auto__.push((arguments[i__10035__auto___20363]));

var G__20364 = (i__10035__auto___20363 + (1));
i__10035__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__20359){
var map__20360 = p__20359;
var map__20360__$1 = ((((!((map__20360 == null)))?((((map__20360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20360):map__20360);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20360__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq20356){
var G__20357 = cljs.core.first(seq20356);
var seq20356__$1 = cljs.core.next(seq20356);
var G__20358 = cljs.core.first(seq20356__$1);
var seq20356__$2 = cljs.core.next(seq20356__$1);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic(G__20357,G__20358,seq20356__$2);
});

