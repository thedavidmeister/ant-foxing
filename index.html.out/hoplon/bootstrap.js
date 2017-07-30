// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
return (function (p1__31590_SHARP_,p2__31589_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__31589_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__31589_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
if((cljs.core.sequential_QMARK_(value)) && (cljs.core.every_QMARK_(javelin.core.cell_QMARK_,value))){
var vec__31593 = value;
var seq__31594 = cljs.core.seq(vec__31593);
var first__31595 = cljs.core.first(seq__31594);
var seq__31594__$1 = cljs.core.next(seq__31594);
var v_cell = first__31595;
var c_cells = seq__31594__$1;
var f = ((function (vec__31593,seq__31594,first__31595,seq__31594__$1,v_cell,c_cells,this$__$1){
return (function (){
var G__31596 = elem;
var G__31597 = this$__$1;
var G__31598 = cljs.core.deref(v_cell);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__31596,G__31597,G__31598) : hoplon.core.do_BANG_.call(null,G__31596,G__31597,G__31598));
});})(vec__31593,seq__31594,first__31595,seq__31594__$1,v_cell,c_cells,this$__$1))
;
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v_cell,((function (vec__31593,seq__31594,first__31595,seq__31594__$1,v_cell,c_cells,f,this$__$1){
return (function (p1__31592_SHARP_,p2__31591_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__31591_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__31591_SHARP_));
});})(vec__31593,seq__31594,first__31595,seq__31594__$1,v_cell,c_cells,f,this$__$1))
);

if(c_cells){
var seq__31599 = cljs.core.seq(c_cells);
var chunk__31600 = null;
var count__31601 = (0);
var i__31602 = (0);
while(true){
if((i__31602 < count__31601)){
var c = chunk__31600.cljs$core$IIndexed$_nth$arity$2(null,i__31602);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(c,f);

var G__31603 = seq__31599;
var G__31604 = chunk__31600;
var G__31605 = count__31601;
var G__31606 = (i__31602 + (1));
seq__31599 = G__31603;
chunk__31600 = G__31604;
count__31601 = G__31605;
i__31602 = G__31606;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__31599);
if(temp__5278__auto__){
var seq__31599__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31599__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__31599__$1);
var G__31607 = cljs.core.chunk_rest(seq__31599__$1);
var G__31608 = c__9688__auto__;
var G__31609 = cljs.core.count(c__9688__auto__);
var G__31610 = (0);
seq__31599 = G__31607;
chunk__31600 = G__31608;
count__31601 = G__31609;
i__31602 = G__31610;
continue;
} else {
var c = cljs.core.first(seq__31599__$1);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(c,f);

var G__31611 = cljs.core.next(seq__31599__$1);
var G__31612 = null;
var G__31613 = (0);
var G__31614 = (0);
seq__31599 = G__31611;
chunk__31600 = G__31612;
count__31601 = G__31613;
i__31602 = G__31614;
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
