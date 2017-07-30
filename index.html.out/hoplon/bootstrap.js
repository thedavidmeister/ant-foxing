// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.bootstrap');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__30317_SHARP_,p2__30316_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__30316_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__30316_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
if((cljs.core.sequential_QMARK_(value)) && (cljs.core.every_QMARK_(javelin.core.cell_QMARK_,value))){
var vec__30320 = value;
var seq__30321 = cljs.core.seq(vec__30320);
var first__30322 = cljs.core.first(seq__30321);
var seq__30321__$1 = cljs.core.next(seq__30321);
var v_cell = first__30322;
var c_cells = seq__30321__$1;
var f = ((function (vec__30320,seq__30321,first__30322,seq__30321__$1,v_cell,c_cells,this$__$1){
return (function (){
var G__30323 = elem;
var G__30324 = this$__$1;
var G__30325 = cljs.core.deref(v_cell);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__30323,G__30324,G__30325) : hoplon.core.do_BANG_.call(null,G__30323,G__30324,G__30325));
});})(vec__30320,seq__30321,first__30322,seq__30321__$1,v_cell,c_cells,this$__$1))
;
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v_cell,((function (vec__30320,seq__30321,first__30322,seq__30321__$1,v_cell,c_cells,f,this$__$1){
return (function (p1__30319_SHARP_,p2__30318_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__30318_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__30318_SHARP_));
});})(vec__30320,seq__30321,first__30322,seq__30321__$1,v_cell,c_cells,f,this$__$1))
);

if(c_cells){
var seq__30326 = cljs.core.seq(c_cells);
var chunk__30327 = null;
var count__30328 = (0);
var i__30329 = (0);
while(true){
if((i__30329 < count__30328)){
var c = chunk__30327.cljs$core$IIndexed$_nth$arity$2(null,i__30329);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(c,f);

var G__30330 = seq__30326;
var G__30331 = chunk__30327;
var G__30332 = count__30328;
var G__30333 = (i__30329 + (1));
seq__30326 = G__30330;
chunk__30327 = G__30331;
count__30328 = G__30332;
i__30329 = G__30333;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__30326);
if(temp__5278__auto__){
var seq__30326__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30326__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__30326__$1);
var G__30334 = cljs.core.chunk_rest(seq__30326__$1);
var G__30335 = c__9011__auto__;
var G__30336 = cljs.core.count(c__9011__auto__);
var G__30337 = (0);
seq__30326 = G__30334;
chunk__30327 = G__30335;
count__30328 = G__30336;
i__30329 = G__30337;
continue;
} else {
var c = cljs.core.first(seq__30326__$1);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(c,f);

var G__30338 = cljs.core.next(seq__30326__$1);
var G__30339 = null;
var G__30340 = (0);
var G__30341 = (0);
seq__30326 = G__30338;
chunk__30327 = G__30339;
count__30328 = G__30340;
i__30329 = G__30341;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
}
});
