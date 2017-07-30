// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.storage_atom._get[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__8819__auto__.call(null,this$,not_found));
} else {
var m__8819__auto____$1 = (hoplon.storage_atom._get["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__8819__auto____$1.call(null,this$,not_found));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.storage_atom._commit_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__8819__auto__.call(null,this$,value));
} else {
var m__8819__auto____$1 = (hoplon.storage_atom._commit_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__8819__auto____$1.call(null,this$,value));
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
return cljs.reader.read_string(existing);
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

hoplon.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"hoplon.storage-atom/StorageBackend");
});

hoplon.storage_atom.__GT_StorageBackend = (function hoplon$storage_atom$__GT_StorageBackend(store,key){
return (new hoplon.storage_atom.StorageBackend(store,key));
});

hoplon.storage_atom.store = (function hoplon$storage_atom$store(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25469 = arguments.length;
var i__9333__auto___25470 = (0);
while(true){
if((i__9333__auto___25470 < len__9332__auto___25469)){
args__9339__auto__.push((arguments[i__9333__auto___25470]));

var G__25471 = (i__9333__auto___25470 + (1));
i__9333__auto___25470 = G__25471;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((2) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9340__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__25465){
var map__25466 = p__25465;
var map__25466__$1 = ((((!((map__25466 == null)))?((((map__25466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25466):map__25466);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,cljs.core.cst$kw$ignore_DASH_existing);
var existing = (function (){var or__8099__auto__ = (function (){var and__8087__auto__ = ignore_existing;
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none;
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return hoplon.storage_atom._get(backend,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none,existing)){
hoplon.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else {
cljs.core.reset_BANG_(atom,existing);
}

var G__25468 = atom;
cljs.core.add_watch(G__25468,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__25468,existing,map__25466,map__25466__$1,ignore_existing){
return (function (p1__25459_SHARP_,p2__25460_SHARP_,p3__25461_SHARP_,p4__25458_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__25458_SHARP_);
});})(G__25468,existing,map__25466,map__25466__$1,ignore_existing))
);

return G__25468;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq25462){
var G__25463 = cljs.core.first(seq25462);
var seq25462__$1 = cljs.core.next(seq25462);
var G__25464 = cljs.core.first(seq25462__$1);
var seq25462__$2 = cljs.core.next(seq25462__$1);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(G__25463,G__25464,seq25462__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25479 = arguments.length;
var i__9333__auto___25480 = (0);
while(true){
if((i__9333__auto___25480 < len__9332__auto___25479)){
args__9339__auto__.push((arguments[i__9333__auto___25480]));

var G__25481 = (i__9333__auto___25480 + (1));
i__9333__auto___25480 = G__25481;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((3) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9340__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__25476){
var map__25477 = p__25476;
var map__25477__$1 = ((((!((map__25477 == null)))?((((map__25477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25477):map__25477);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25477__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq25472){
var G__25473 = cljs.core.first(seq25472);
var seq25472__$1 = cljs.core.next(seq25472);
var G__25474 = cljs.core.first(seq25472__$1);
var seq25472__$2 = cljs.core.next(seq25472__$1);
var G__25475 = cljs.core.first(seq25472__$2);
var seq25472__$3 = cljs.core.next(seq25472__$2);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(G__25473,G__25474,G__25475,seq25472__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25488 = arguments.length;
var i__9333__auto___25489 = (0);
while(true){
if((i__9333__auto___25489 < len__9332__auto___25488)){
args__9339__auto__.push((arguments[i__9333__auto___25489]));

var G__25490 = (i__9333__auto___25489 + (1));
i__9333__auto___25489 = G__25490;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((2) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9340__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__25485){
var map__25486 = p__25485;
var map__25486__$1 = ((((!((map__25486 == null)))?((((map__25486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25486):map__25486);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25486__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq25482){
var G__25483 = cljs.core.first(seq25482);
var seq25482__$1 = cljs.core.next(seq25482);
var G__25484 = cljs.core.first(seq25482__$1);
var seq25482__$2 = cljs.core.next(seq25482__$1);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic(G__25483,G__25484,seq25482__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25497 = arguments.length;
var i__9333__auto___25498 = (0);
while(true){
if((i__9333__auto___25498 < len__9332__auto___25497)){
args__9339__auto__.push((arguments[i__9333__auto___25498]));

var G__25499 = (i__9333__auto___25498 + (1));
i__9333__auto___25498 = G__25499;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((2) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9340__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__25494){
var map__25495 = p__25494;
var map__25495__$1 = ((((!((map__25495 == null)))?((((map__25495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25495):map__25495);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25495__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq25491){
var G__25492 = cljs.core.first(seq25491);
var seq25491__$1 = cljs.core.next(seq25491);
var G__25493 = cljs.core.first(seq25491__$1);
var seq25491__$2 = cljs.core.next(seq25491__$1);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic(G__25492,G__25493,seq25491__$2);
});

