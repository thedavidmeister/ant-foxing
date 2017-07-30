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
var len__10034__auto___26405 = arguments.length;
var i__10035__auto___26406 = (0);
while(true){
if((i__10035__auto___26406 < len__10034__auto___26405)){
args__10041__auto__.push((arguments[i__10035__auto___26406]));

var G__26407 = (i__10035__auto___26406 + (1));
i__10035__auto___26406 = G__26407;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__26401){
var map__26402 = p__26401;
var map__26402__$1 = ((((!((map__26402 == null)))?((((map__26402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26402):map__26402);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26402__$1,cljs.core.cst$kw$ignore_DASH_existing);
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

var G__26404 = atom;
cljs.core.add_watch(G__26404,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__26404,existing,map__26402,map__26402__$1,ignore_existing){
return (function (p1__26395_SHARP_,p2__26396_SHARP_,p3__26397_SHARP_,p4__26394_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__26394_SHARP_);
});})(G__26404,existing,map__26402,map__26402__$1,ignore_existing))
);

return G__26404;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq26398){
var G__26399 = cljs.core.first(seq26398);
var seq26398__$1 = cljs.core.next(seq26398);
var G__26400 = cljs.core.first(seq26398__$1);
var seq26398__$2 = cljs.core.next(seq26398__$1);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(G__26399,G__26400,seq26398__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26415 = arguments.length;
var i__10035__auto___26416 = (0);
while(true){
if((i__10035__auto___26416 < len__10034__auto___26415)){
args__10041__auto__.push((arguments[i__10035__auto___26416]));

var G__26417 = (i__10035__auto___26416 + (1));
i__10035__auto___26416 = G__26417;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((3) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10042__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__26412){
var map__26413 = p__26412;
var map__26413__$1 = ((((!((map__26413 == null)))?((((map__26413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26413):map__26413);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq26408){
var G__26409 = cljs.core.first(seq26408);
var seq26408__$1 = cljs.core.next(seq26408);
var G__26410 = cljs.core.first(seq26408__$1);
var seq26408__$2 = cljs.core.next(seq26408__$1);
var G__26411 = cljs.core.first(seq26408__$2);
var seq26408__$3 = cljs.core.next(seq26408__$2);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(G__26409,G__26410,G__26411,seq26408__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26424 = arguments.length;
var i__10035__auto___26425 = (0);
while(true){
if((i__10035__auto___26425 < len__10034__auto___26424)){
args__10041__auto__.push((arguments[i__10035__auto___26425]));

var G__26426 = (i__10035__auto___26425 + (1));
i__10035__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__26421){
var map__26422 = p__26421;
var map__26422__$1 = ((((!((map__26422 == null)))?((((map__26422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26422):map__26422);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26422__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq26418){
var G__26419 = cljs.core.first(seq26418);
var seq26418__$1 = cljs.core.next(seq26418);
var G__26420 = cljs.core.first(seq26418__$1);
var seq26418__$2 = cljs.core.next(seq26418__$1);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic(G__26419,G__26420,seq26418__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26433 = arguments.length;
var i__10035__auto___26434 = (0);
while(true){
if((i__10035__auto___26434 < len__10034__auto___26433)){
args__10041__auto__.push((arguments[i__10035__auto___26434]));

var G__26435 = (i__10035__auto___26434 + (1));
i__10035__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__26430){
var map__26431 = p__26430;
var map__26431__$1 = ((((!((map__26431 == null)))?((((map__26431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26431):map__26431);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26431__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq26427){
var G__26428 = cljs.core.first(seq26427);
var seq26427__$1 = cljs.core.next(seq26427);
var G__26429 = cljs.core.first(seq26427__$1);
var seq26427__$2 = cljs.core.next(seq26427__$1);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic(G__26428,G__26429,seq26427__$2);
});

