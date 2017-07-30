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
var len__10034__auto___22113 = arguments.length;
var i__10035__auto___22114 = (0);
while(true){
if((i__10035__auto___22114 < len__10034__auto___22113)){
args__10041__auto__.push((arguments[i__10035__auto___22114]));

var G__22115 = (i__10035__auto___22114 + (1));
i__10035__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__22109){
var map__22110 = p__22109;
var map__22110__$1 = ((((!((map__22110 == null)))?((((map__22110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22110):map__22110);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22110__$1,cljs.core.cst$kw$ignore_DASH_existing);
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

var G__22112 = atom;
cljs.core.add_watch(G__22112,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__22112,existing,map__22110,map__22110__$1,ignore_existing){
return (function (p1__22103_SHARP_,p2__22104_SHARP_,p3__22105_SHARP_,p4__22102_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__22102_SHARP_);
});})(G__22112,existing,map__22110,map__22110__$1,ignore_existing))
);

return G__22112;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq22106){
var G__22107 = cljs.core.first(seq22106);
var seq22106__$1 = cljs.core.next(seq22106);
var G__22108 = cljs.core.first(seq22106__$1);
var seq22106__$2 = cljs.core.next(seq22106__$1);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(G__22107,G__22108,seq22106__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___22123 = arguments.length;
var i__10035__auto___22124 = (0);
while(true){
if((i__10035__auto___22124 < len__10034__auto___22123)){
args__10041__auto__.push((arguments[i__10035__auto___22124]));

var G__22125 = (i__10035__auto___22124 + (1));
i__10035__auto___22124 = G__22125;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((3) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10042__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__22120){
var map__22121 = p__22120;
var map__22121__$1 = ((((!((map__22121 == null)))?((((map__22121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22121):map__22121);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22121__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq22116){
var G__22117 = cljs.core.first(seq22116);
var seq22116__$1 = cljs.core.next(seq22116);
var G__22118 = cljs.core.first(seq22116__$1);
var seq22116__$2 = cljs.core.next(seq22116__$1);
var G__22119 = cljs.core.first(seq22116__$2);
var seq22116__$3 = cljs.core.next(seq22116__$2);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(G__22117,G__22118,G__22119,seq22116__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___22132 = arguments.length;
var i__10035__auto___22133 = (0);
while(true){
if((i__10035__auto___22133 < len__10034__auto___22132)){
args__10041__auto__.push((arguments[i__10035__auto___22133]));

var G__22134 = (i__10035__auto___22133 + (1));
i__10035__auto___22133 = G__22134;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__22129){
var map__22130 = p__22129;
var map__22130__$1 = ((((!((map__22130 == null)))?((((map__22130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22130):map__22130);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22130__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq22126){
var G__22127 = cljs.core.first(seq22126);
var seq22126__$1 = cljs.core.next(seq22126);
var G__22128 = cljs.core.first(seq22126__$1);
var seq22126__$2 = cljs.core.next(seq22126__$1);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic(G__22127,G__22128,seq22126__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__10041__auto__ = [];
var len__10034__auto___22141 = arguments.length;
var i__10035__auto___22142 = (0);
while(true){
if((i__10035__auto___22142 < len__10034__auto___22141)){
args__10041__auto__.push((arguments[i__10035__auto___22142]));

var G__22143 = (i__10035__auto___22142 + (1));
i__10035__auto___22142 = G__22143;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__22138){
var map__22139 = p__22138;
var map__22139__$1 = ((((!((map__22139 == null)))?((((map__22139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22139):map__22139);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq22135){
var G__22136 = cljs.core.first(seq22135);
var seq22135__$1 = cljs.core.next(seq22135);
var G__22137 = cljs.core.first(seq22135__$1);
var seq22135__$2 = cljs.core.next(seq22135__$1);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic(G__22136,G__22137,seq22135__$2);
});

