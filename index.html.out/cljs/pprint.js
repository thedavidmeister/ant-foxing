// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14704 = arguments.length;
var i__9333__auto___14705 = (0);
while(true){
if((i__9333__auto___14705 < len__9332__auto___14704)){
args__9339__auto__.push((arguments[i__9333__auto___14705]));

var G__14706 = (i__9333__auto___14705 + (1));
i__9333__auto___14705 = G__14706;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq14703){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14703));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14708 = arguments.length;
var i__9333__auto___14709 = (0);
while(true){
if((i__9333__auto___14709 < len__9332__auto___14708)){
args__9339__auto__.push((arguments[i__9333__auto___14709]));

var G__14710 = (i__9333__auto___14709 + (1));
i__9333__auto___14709 = G__14710;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq14707){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14707));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__14711 = cljs.core._EQ_;
var expr__14712 = c;
if(cljs.core.truth_((function (){var G__14714 = "\b";
var G__14715 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14714,G__14715) : pred__14711.call(null,G__14714,G__14715));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__14716 = "\t";
var G__14717 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14716,G__14717) : pred__14711.call(null,G__14716,G__14717));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__14718 = "\n";
var G__14719 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14718,G__14719) : pred__14711.call(null,G__14718,G__14719));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__14720 = "\f";
var G__14721 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14720,G__14721) : pred__14711.call(null,G__14720,G__14721));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__14722 = "\r";
var G__14723 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14722,G__14723) : pred__14711.call(null,G__14722,G__14723));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__14724 = "\"";
var G__14725 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14724,G__14725) : pred__14711.call(null,G__14724,G__14725));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__14726 = "\\";
var G__14727 = expr__14712;
return (pred__14711.cljs$core$IFn$_invoke$arity$2 ? pred__14711.cljs$core$IFn$_invoke$arity$2(G__14726,G__14727) : pred__14711.call(null,G__14726,G__14727));
})())){
return "\\\\";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14729 = arguments.length;
var i__9333__auto___14730 = (0);
while(true){
if((i__9333__auto___14730 < len__9332__auto___14729)){
args__9339__auto__.push((arguments[i__9333__auto___14730]));

var G__14731 = (i__9333__auto___14730 + (1));
i__9333__auto___14730 = G__14731;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq14728){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14728));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14733 = arguments.length;
var i__9333__auto___14734 = (0);
while(true){
if((i__9333__auto___14734 < len__9332__auto___14733)){
args__9339__auto__.push((arguments[i__9333__auto___14734]));

var G__14735 = (i__9333__auto___14734 + (1));
i__9333__auto___14734 = G__14735;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq14732){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14732));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__14736 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14736,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14736,(1),null);
var G__14739 = new_context;
var G__14740 = remainder;
var G__14741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__14739;
lis__$1 = G__14740;
acc = G__14741;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__14742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__14745 = new_context;
var G__14746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__14745;
acc = G__14746;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__14747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__14750 = new_context;
var G__14751 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__14750;
acc = G__14751;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8962__auto__ = (function cljs$pprint$unzip_map_$_iter__14752(s__14753){
return (new cljs.core.LazySeq(null,(function (){
var s__14753__$1 = s__14753;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__14753__$1);
if(temp__5278__auto__){
var s__14753__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14753__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__14753__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__14755 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__14754 = (0);
while(true){
if((i__14754 < size__8961__auto__)){
var vec__14756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__14754);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,(0),null);
var vec__14759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(1),null);
cljs.core.chunk_append(b__14755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__14784 = (i__14754 + (1));
i__14754 = G__14784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14755),cljs$pprint$unzip_map_$_iter__14752(cljs.core.chunk_rest(s__14753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14755),null);
}
} else {
var vec__14762 = cljs.core.first(s__14753__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(0),null);
var vec__14765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14762,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__14752(cljs.core.rest(s__14753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8962__auto__ = (function cljs$pprint$unzip_map_$_iter__14768(s__14769){
return (new cljs.core.LazySeq(null,(function (){
var s__14769__$1 = s__14769;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__14769__$1);
if(temp__5278__auto__){
var s__14769__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14769__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__14769__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__14771 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__14770 = (0);
while(true){
if((i__14770 < size__8961__auto__)){
var vec__14772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__14770);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(0),null);
var vec__14775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(1),null);
cljs.core.chunk_append(b__14771,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__14785 = (i__14770 + (1));
i__14770 = G__14785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14771),cljs$pprint$unzip_map_$_iter__14768(cljs.core.chunk_rest(s__14769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14771),null);
}
} else {
var vec__14778 = cljs.core.first(s__14769__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14778,(0),null);
var vec__14781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14778,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__14768(cljs.core.rest(s__14769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8962__auto__ = (function cljs$pprint$tuple_map_$_iter__14786(s__14787){
return (new cljs.core.LazySeq(null,(function (){
var s__14787__$1 = s__14787;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__14787__$1);
if(temp__5278__auto__){
var s__14787__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14787__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__14787__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__14789 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__14788 = (0);
while(true){
if((i__14788 < size__8961__auto__)){
var vec__14790 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__14788);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(1),null);
cljs.core.chunk_append(b__14789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__14796 = (i__14788 + (1));
i__14788 = G__14796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14789),cljs$pprint$tuple_map_$_iter__14786(cljs.core.chunk_rest(s__14787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14789),null);
}
} else {
var vec__14793 = cljs.core.first(s__14787__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__14786(cljs.core.rest(s__14787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__14797 = (n - (1));
n = G__14797;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__14798 = (n + (1));
n = G__14798;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__14800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__14800) : test.call(null,G__14800));
})()))){
return pos;
} else {
var G__14801 = (pos + (1));
pos = G__14801;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__8818__auto__ = (((pp == null))?null:pp);
var m__8819__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__8819__auto__.call(null,pp));
} else {
var m__8819__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__8819__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__14802 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__14802) : sym.call(null,G__14802));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__14805 = arguments.length;
switch (G__14805) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint14806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint14806 = (function (writer,max_columns,fields,meta14807){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta14807 = meta14807;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint14806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_14808,meta14807__$1){
var self__ = this;
var _14808__$1 = this;
return (new cljs.pprint.t_cljs$pprint14806(self__.writer,self__.max_columns,self__.fields,meta14807__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_14808){
var self__ = this;
var _14808__$1 = this;
return self__.meta14807;
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__14809 = cljs.core._EQ_;
var expr__14810 = cljs.core.type(x);
if(cljs.core.truth_((pred__14809.cljs$core$IFn$_invoke$arity$2 ? pred__14809.cljs$core$IFn$_invoke$arity$2(String,expr__14810) : pred__14809.call(null,String,expr__14810)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__14809,expr__14810,this$__$1,fields){
return (function (p1__14803_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14803_SHARP_,"\n");
});})(s,nl,pred__14809,expr__14810,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__14809.cljs$core$IFn$_invoke$arity$2 ? pred__14809.cljs$core$IFn$_invoke$arity$2(Number,expr__14810) : pred__14809.call(null,Number,expr__14810)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14810)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta14807], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint14806.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint14806.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint14806";

cljs.pprint.t_cljs$pprint14806.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint14806");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint14806 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint14806(writer__$1,max_columns__$1,fields__$1,meta14807){
return (new cljs.pprint.t_cljs$pprint14806(writer__$1,max_columns__$1,fields__$1,meta14807));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint14806(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14814,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14818 = k14814;
var G__14818__$1 = (((G__14818 instanceof cljs.core.Keyword))?G__14818.fqn:null);
switch (G__14818__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14814,else__8776__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14813){
var self__ = this;
var G__14813__$1 = this;
return (new cljs.core.RecordIter((0),G__14813__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14819 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14819.cljs$core$IFn$_invoke$arity$1 ? fexpr__14819.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14819.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14815,other14816){
var self__ = this;
var this14815__$1 = this;
return (!((other14816 == null))) && ((this14815__$1.constructor === other14816.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.parent,other14816.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.section,other14816.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.start_col,other14816.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.indent,other14816.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.done_nl,other14816.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.intra_block_nl,other14816.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.prefix,other14816.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.per_line_prefix,other14816.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.suffix,other14816.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.logical_block_callback,other14816.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14815__$1.__extmap,other14816.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14813){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14820 = cljs.core.keyword_identical_QMARK_;
var expr__14821 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14823 = cljs.core.cst$kw$parent;
var G__14824 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14823,G__14824) : pred__14820.call(null,G__14823,G__14824));
})())){
return (new cljs.pprint.logical_block(G__14813,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14825 = cljs.core.cst$kw$section;
var G__14826 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14825,G__14826) : pred__14820.call(null,G__14825,G__14826));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__14813,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14827 = cljs.core.cst$kw$start_DASH_col;
var G__14828 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14827,G__14828) : pred__14820.call(null,G__14827,G__14828));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__14813,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14829 = cljs.core.cst$kw$indent;
var G__14830 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14829,G__14830) : pred__14820.call(null,G__14829,G__14830));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__14813,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14831 = cljs.core.cst$kw$done_DASH_nl;
var G__14832 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14831,G__14832) : pred__14820.call(null,G__14831,G__14832));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__14813,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14833 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__14834 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14833,G__14834) : pred__14820.call(null,G__14833,G__14834));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__14813,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14835 = cljs.core.cst$kw$prefix;
var G__14836 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14835,G__14836) : pred__14820.call(null,G__14835,G__14836));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__14813,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14837 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__14838 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14837,G__14838) : pred__14820.call(null,G__14837,G__14838));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__14813,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14839 = cljs.core.cst$kw$suffix;
var G__14840 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14839,G__14840) : pred__14820.call(null,G__14839,G__14840));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__14813,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14841 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__14842 = expr__14821;
return (pred__14820.cljs$core$IFn$_invoke$arity$2 ? pred__14820.cljs$core$IFn$_invoke$arity$2(G__14841,G__14842) : pred__14820.call(null,G__14841,G__14842));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__14813,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14813),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14813){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__14813,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__14817){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__14817),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__14817),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14817,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__14844 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__14844;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14846,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14850 = k14846;
var G__14850__$1 = (((G__14850 instanceof cljs.core.Keyword))?G__14850.fqn:null);
switch (G__14850__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14846,else__8776__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14845){
var self__ = this;
var G__14845__$1 = this;
return (new cljs.core.RecordIter((0),G__14845__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14851 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14851.cljs$core$IFn$_invoke$arity$1 ? fexpr__14851.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14851.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14847,other14848){
var self__ = this;
var this14847__$1 = this;
return (!((other14848 == null))) && ((this14847__$1.constructor === other14848.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.type_tag,other14848.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.data,other14848.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.trailing_white_space,other14848.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.start_pos,other14848.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.end_pos,other14848.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14847__$1.__extmap,other14848.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14845){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14852 = cljs.core.keyword_identical_QMARK_;
var expr__14853 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14855 = cljs.core.cst$kw$type_DASH_tag;
var G__14856 = expr__14853;
return (pred__14852.cljs$core$IFn$_invoke$arity$2 ? pred__14852.cljs$core$IFn$_invoke$arity$2(G__14855,G__14856) : pred__14852.call(null,G__14855,G__14856));
})())){
return (new cljs.pprint.buffer_blob(G__14845,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14857 = cljs.core.cst$kw$data;
var G__14858 = expr__14853;
return (pred__14852.cljs$core$IFn$_invoke$arity$2 ? pred__14852.cljs$core$IFn$_invoke$arity$2(G__14857,G__14858) : pred__14852.call(null,G__14857,G__14858));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__14845,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14859 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__14860 = expr__14853;
return (pred__14852.cljs$core$IFn$_invoke$arity$2 ? pred__14852.cljs$core$IFn$_invoke$arity$2(G__14859,G__14860) : pred__14852.call(null,G__14859,G__14860));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__14845,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14861 = cljs.core.cst$kw$start_DASH_pos;
var G__14862 = expr__14853;
return (pred__14852.cljs$core$IFn$_invoke$arity$2 ? pred__14852.cljs$core$IFn$_invoke$arity$2(G__14861,G__14862) : pred__14852.call(null,G__14861,G__14862));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__14845,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14863 = cljs.core.cst$kw$end_DASH_pos;
var G__14864 = expr__14853;
return (pred__14852.cljs$core$IFn$_invoke$arity$2 ? pred__14852.cljs$core$IFn$_invoke$arity$2(G__14863,G__14864) : pred__14852.call(null,G__14863,G__14864));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__14845,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14845),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14845){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__14845,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__14849){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__14849),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__14849),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__14849),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14849),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14849),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14849,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__14634__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14634__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14867,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14871 = k14867;
var G__14871__$1 = (((G__14871 instanceof cljs.core.Keyword))?G__14871.fqn:null);
switch (G__14871__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14867,else__8776__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14866){
var self__ = this;
var G__14866__$1 = this;
return (new cljs.core.RecordIter((0),G__14866__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14872 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14872.cljs$core$IFn$_invoke$arity$1 ? fexpr__14872.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14872.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14868,other14869){
var self__ = this;
var this14868__$1 = this;
return (!((other14869 == null))) && ((this14868__$1.constructor === other14869.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.type_tag,other14869.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.type,other14869.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.logical_block,other14869.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.start_pos,other14869.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.end_pos,other14869.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14868__$1.__extmap,other14869.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14866){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14873 = cljs.core.keyword_identical_QMARK_;
var expr__14874 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14876 = cljs.core.cst$kw$type_DASH_tag;
var G__14877 = expr__14874;
return (pred__14873.cljs$core$IFn$_invoke$arity$2 ? pred__14873.cljs$core$IFn$_invoke$arity$2(G__14876,G__14877) : pred__14873.call(null,G__14876,G__14877));
})())){
return (new cljs.pprint.nl_t(G__14866,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14878 = cljs.core.cst$kw$type;
var G__14879 = expr__14874;
return (pred__14873.cljs$core$IFn$_invoke$arity$2 ? pred__14873.cljs$core$IFn$_invoke$arity$2(G__14878,G__14879) : pred__14873.call(null,G__14878,G__14879));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__14866,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14880 = cljs.core.cst$kw$logical_DASH_block;
var G__14881 = expr__14874;
return (pred__14873.cljs$core$IFn$_invoke$arity$2 ? pred__14873.cljs$core$IFn$_invoke$arity$2(G__14880,G__14881) : pred__14873.call(null,G__14880,G__14881));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__14866,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14882 = cljs.core.cst$kw$start_DASH_pos;
var G__14883 = expr__14874;
return (pred__14873.cljs$core$IFn$_invoke$arity$2 ? pred__14873.cljs$core$IFn$_invoke$arity$2(G__14882,G__14883) : pred__14873.call(null,G__14882,G__14883));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__14866,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14884 = cljs.core.cst$kw$end_DASH_pos;
var G__14885 = expr__14874;
return (pred__14873.cljs$core$IFn$_invoke$arity$2 ? pred__14873.cljs$core$IFn$_invoke$arity$2(G__14884,G__14885) : pred__14873.call(null,G__14884,G__14885));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__14866,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14866),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14866){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__14866,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__14870){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__14870),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__14870),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14870),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14870),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14870),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14870,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__14634__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14634__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14888,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14892 = k14888;
var G__14892__$1 = (((G__14892 instanceof cljs.core.Keyword))?G__14892.fqn:null);
switch (G__14892__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14888,else__8776__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14887){
var self__ = this;
var G__14887__$1 = this;
return (new cljs.core.RecordIter((0),G__14887__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14893 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14893.cljs$core$IFn$_invoke$arity$1 ? fexpr__14893.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14893.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14889,other14890){
var self__ = this;
var this14889__$1 = this;
return (!((other14890 == null))) && ((this14889__$1.constructor === other14890.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14889__$1.type_tag,other14890.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14889__$1.logical_block,other14890.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14889__$1.start_pos,other14890.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14889__$1.end_pos,other14890.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14889__$1.__extmap,other14890.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14887){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14894 = cljs.core.keyword_identical_QMARK_;
var expr__14895 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14897 = cljs.core.cst$kw$type_DASH_tag;
var G__14898 = expr__14895;
return (pred__14894.cljs$core$IFn$_invoke$arity$2 ? pred__14894.cljs$core$IFn$_invoke$arity$2(G__14897,G__14898) : pred__14894.call(null,G__14897,G__14898));
})())){
return (new cljs.pprint.start_block_t(G__14887,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14899 = cljs.core.cst$kw$logical_DASH_block;
var G__14900 = expr__14895;
return (pred__14894.cljs$core$IFn$_invoke$arity$2 ? pred__14894.cljs$core$IFn$_invoke$arity$2(G__14899,G__14900) : pred__14894.call(null,G__14899,G__14900));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__14887,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14901 = cljs.core.cst$kw$start_DASH_pos;
var G__14902 = expr__14895;
return (pred__14894.cljs$core$IFn$_invoke$arity$2 ? pred__14894.cljs$core$IFn$_invoke$arity$2(G__14901,G__14902) : pred__14894.call(null,G__14901,G__14902));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__14887,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14903 = cljs.core.cst$kw$end_DASH_pos;
var G__14904 = expr__14895;
return (pred__14894.cljs$core$IFn$_invoke$arity$2 ? pred__14894.cljs$core$IFn$_invoke$arity$2(G__14903,G__14904) : pred__14894.call(null,G__14903,G__14904));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__14887,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14887),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14887){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__14887,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__14891){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__14891),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14891),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14891),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14891),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14891,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__14634__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14634__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14907,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14911 = k14907;
var G__14911__$1 = (((G__14911 instanceof cljs.core.Keyword))?G__14911.fqn:null);
switch (G__14911__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14907,else__8776__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14906){
var self__ = this;
var G__14906__$1 = this;
return (new cljs.core.RecordIter((0),G__14906__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14912 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14912.cljs$core$IFn$_invoke$arity$1 ? fexpr__14912.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14912.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14908,other14909){
var self__ = this;
var this14908__$1 = this;
return (!((other14909 == null))) && ((this14908__$1.constructor === other14909.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14908__$1.type_tag,other14909.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14908__$1.logical_block,other14909.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14908__$1.start_pos,other14909.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14908__$1.end_pos,other14909.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14908__$1.__extmap,other14909.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14906){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14913 = cljs.core.keyword_identical_QMARK_;
var expr__14914 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14916 = cljs.core.cst$kw$type_DASH_tag;
var G__14917 = expr__14914;
return (pred__14913.cljs$core$IFn$_invoke$arity$2 ? pred__14913.cljs$core$IFn$_invoke$arity$2(G__14916,G__14917) : pred__14913.call(null,G__14916,G__14917));
})())){
return (new cljs.pprint.end_block_t(G__14906,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14918 = cljs.core.cst$kw$logical_DASH_block;
var G__14919 = expr__14914;
return (pred__14913.cljs$core$IFn$_invoke$arity$2 ? pred__14913.cljs$core$IFn$_invoke$arity$2(G__14918,G__14919) : pred__14913.call(null,G__14918,G__14919));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__14906,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14920 = cljs.core.cst$kw$start_DASH_pos;
var G__14921 = expr__14914;
return (pred__14913.cljs$core$IFn$_invoke$arity$2 ? pred__14913.cljs$core$IFn$_invoke$arity$2(G__14920,G__14921) : pred__14913.call(null,G__14920,G__14921));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__14906,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14922 = cljs.core.cst$kw$end_DASH_pos;
var G__14923 = expr__14914;
return (pred__14913.cljs$core$IFn$_invoke$arity$2 ? pred__14913.cljs$core$IFn$_invoke$arity$2(G__14922,G__14923) : pred__14913.call(null,G__14922,G__14923));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__14906,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14906),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14906){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__14906,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__14910){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__14910),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14910),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14910),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14910),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14910,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__14634__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14634__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k14926,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__14930 = k14926;
var G__14930__$1 = (((G__14930 instanceof cljs.core.Keyword))?G__14930.fqn:null);
switch (G__14930__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14926,else__8776__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14925){
var self__ = this;
var G__14925__$1 = this;
return (new cljs.core.RecordIter((0),G__14925__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__14931 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14931.cljs$core$IFn$_invoke$arity$1 ? fexpr__14931.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__14931.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14927,other14928){
var self__ = this;
var this14927__$1 = this;
return (!((other14928 == null))) && ((this14927__$1.constructor === other14928.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.type_tag,other14928.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.logical_block,other14928.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.relative_to,other14928.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.offset,other14928.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.start_pos,other14928.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.end_pos,other14928.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14927__$1.__extmap,other14928.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__14925){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__14932 = cljs.core.keyword_identical_QMARK_;
var expr__14933 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__14935 = cljs.core.cst$kw$type_DASH_tag;
var G__14936 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14935,G__14936) : pred__14932.call(null,G__14935,G__14936));
})())){
return (new cljs.pprint.indent_t(G__14925,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14937 = cljs.core.cst$kw$logical_DASH_block;
var G__14938 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14937,G__14938) : pred__14932.call(null,G__14937,G__14938));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__14925,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14939 = cljs.core.cst$kw$relative_DASH_to;
var G__14940 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14939,G__14940) : pred__14932.call(null,G__14939,G__14940));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__14925,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14941 = cljs.core.cst$kw$offset;
var G__14942 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14941,G__14942) : pred__14932.call(null,G__14941,G__14942));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__14925,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14943 = cljs.core.cst$kw$start_DASH_pos;
var G__14944 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14943,G__14944) : pred__14932.call(null,G__14943,G__14944));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__14925,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14945 = cljs.core.cst$kw$end_DASH_pos;
var G__14946 = expr__14933;
return (pred__14932.cljs$core$IFn$_invoke$arity$2 ? pred__14932.cljs$core$IFn$_invoke$arity$2(G__14945,G__14946) : pred__14932.call(null,G__14945,G__14946));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__14925,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__14925),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__14925){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__14925,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__14929){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__14929),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14929),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__14929),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__14929),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14929),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__14929),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14929,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__14634__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__14634__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__){
return (function (p1__14949_SHARP_,p2__14948_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__14948_SHARP_);
});})(method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__))
,cljs.core.cst$kw$default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5278__auto___14951 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5278__auto___14951)){
var cb_14952 = temp__5278__auto___14951;
var G__14950_14953 = cljs.core.cst$kw$start;
(cb_14952.cljs$core$IFn$_invoke$arity$1 ? cb_14952.cljs$core$IFn$_invoke$arity$1(G__14950_14953) : cb_14952.call(null,G__14950_14953));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5278__auto___14954 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5278__auto___14954)){
var prefix_14955 = temp__5278__auto___14954;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_14955);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5278__auto___14957 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5278__auto___14957)){
var cb_14958 = temp__5278__auto___14957;
var G__14956_14959 = cljs.core.cst$kw$end;
(cb_14958.cljs$core$IFn$_invoke$arity$1 ? cb_14958.cljs$core$IFn$_invoke$arity$1(G__14956_14959) : cb_14958.call(null,G__14956_14959));
} else {
}

var temp__5278__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5278__auto__)){
var suffix = temp__5278__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__14960 = cljs.core._EQ_;
var expr__14961 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__14963 = cljs.core.cst$kw$block;
var G__14964 = expr__14961;
return (pred__14960.cljs$core$IFn$_invoke$arity$2 ? pred__14960.cljs$core$IFn$_invoke$arity$2(G__14963,G__14964) : pred__14960.call(null,G__14963,G__14964));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__14965 = cljs.core.cst$kw$current;
var G__14966 = expr__14961;
return (pred__14960.cljs$core$IFn$_invoke$arity$2 ? pred__14960.cljs$core$IFn$_invoke$arity$2(G__14965,G__14966) : pred__14960.call(null,G__14965,G__14966));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14961)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8099__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8087__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8087__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5276__auto___14967 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5276__auto___14967)){
var tws_14968 = temp__5276__auto___14967;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_14968);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__14969 = cljs.core.seq(tokens);
var chunk__14970 = null;
var count__14971 = (0);
var i__14972 = (0);
while(true){
if((i__14972 < count__14971)){
var token = chunk__14970.cljs$core$IIndexed$_nth$arity$2(null,i__14972);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5276__auto___14973 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5276__auto___14973)){
var tws_14974 = temp__5276__auto___14973;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_14974);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_14975 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8087__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8087__auto__)){
return tws_14975;
} else {
return and__8087__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_14975);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__14976 = seq__14969;
var G__14977 = chunk__14970;
var G__14978 = count__14971;
var G__14979 = (i__14972 + (1));
seq__14969 = G__14976;
chunk__14970 = G__14977;
count__14971 = G__14978;
i__14972 = G__14979;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14969);
if(temp__5278__auto__){
var seq__14969__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14969__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14969__$1);
var G__14980 = cljs.core.chunk_rest(seq__14969__$1);
var G__14981 = c__9011__auto__;
var G__14982 = cljs.core.count(c__9011__auto__);
var G__14983 = (0);
seq__14969 = G__14980;
chunk__14970 = G__14981;
count__14971 = G__14982;
i__14972 = G__14983;
continue;
} else {
var token = cljs.core.first(seq__14969__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5276__auto___14984 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5276__auto___14984)){
var tws_14985 = temp__5276__auto___14984;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_14985);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_14986 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8087__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8087__auto__)){
return tws_14986;
} else {
return and__8087__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_14986);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__14987 = cljs.core.next(seq__14969__$1);
var G__14988 = null;
var G__14989 = (0);
var G__14990 = (0);
seq__14969 = G__14987;
chunk__14970 = G__14988;
count__14971 = G__14989;
i__14972 = G__14990;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8099__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8087__auto__ = miser_width;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = maxcol;
if(cljs.core.truth_(and__8087__auto____$1)){
var and__8087__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8087__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__8087__auto____$2;
}
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__))
,cljs.core.cst$kw$default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8099__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8099__auto____$1){
return or__8099__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__14991_SHARP_){
return cljs.core.not((function (){var and__8087__auto__ = cljs.pprint.nl_t_QMARK_(p1__14991_SHARP_);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__14991_SHARP_),lb);
} else {
return and__8087__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__14992_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__14992_SHARP_);
return cljs.core.not((function (){var and__8087__auto__ = cljs.pprint.nl_t_QMARK_(p1__14992_SHARP_);
if(cljs.core.truth_(and__8087__auto__)){
var or__8099__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8099__auto__){
return or__8099__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8087__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__14993 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__14993;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_14994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_14994);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14995_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__14995_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__14996 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__14999 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14999,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14999,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__15002 = newl;
var G__15003 = this$;
var G__15004 = section;
var G__15005 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__15002,G__15003,G__15004,G__15005) : cljs.pprint.emit_nl_QMARK_.call(null,G__15002,G__15003,G__15004,G__15005));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__15006 = new_buffer;
buffer = G__15006;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5276__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5276__auto__)){
var buf = temp__5276__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5278__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5278__auto__)){
var tws = temp__5278__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_15011 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_15012 = (oldpos_15011 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15012);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_15011,newpos_15012));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__15007_15013 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__15008_15014 = null;
var count__15009_15015 = (0);
var i__15010_15016 = (0);
while(true){
if((i__15010_15016 < count__15009_15015)){
var l_15017__$1 = chunk__15008_15014.cljs$core$IIndexed$_nth$arity$2(null,i__15010_15016);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_15017__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__15018 = seq__15007_15013;
var G__15019 = chunk__15008_15014;
var G__15020 = count__15009_15015;
var G__15021 = (i__15010_15016 + (1));
seq__15007_15013 = G__15018;
chunk__15008_15014 = G__15019;
count__15009_15015 = G__15020;
i__15010_15016 = G__15021;
continue;
} else {
var temp__5278__auto___15022 = cljs.core.seq(seq__15007_15013);
if(temp__5278__auto___15022){
var seq__15007_15023__$1 = temp__5278__auto___15022;
if(cljs.core.chunked_seq_QMARK_(seq__15007_15023__$1)){
var c__9011__auto___15024 = cljs.core.chunk_first(seq__15007_15023__$1);
var G__15025 = cljs.core.chunk_rest(seq__15007_15023__$1);
var G__15026 = c__9011__auto___15024;
var G__15027 = cljs.core.count(c__9011__auto___15024);
var G__15028 = (0);
seq__15007_15013 = G__15025;
chunk__15008_15014 = G__15026;
count__15009_15015 = G__15027;
i__15010_15016 = G__15028;
continue;
} else {
var l_15029__$1 = cljs.core.first(seq__15007_15023__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_15029__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__15030 = cljs.core.next(seq__15007_15023__$1);
var G__15031 = null;
var G__15032 = (0);
var G__15033 = (0);
seq__15007_15013 = G__15030;
chunk__15008_15014 = G__15031;
count__15009_15015 = G__15032;
i__15010_15016 = G__15033;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint15034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15034 = (function (writer,max_columns,miser_width,lb,fields,meta15035){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta15035 = meta15035;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_15036,meta15035__$1){
var self__ = this;
var _15036__$1 = this;
return (new cljs.pprint.t_cljs$pprint15034(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta15035__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_15036){
var self__ = this;
var _15036__$1 = this;
return self__.meta15035;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15037 = cljs.core._EQ_;
var expr__15038 = cljs.core.type(x);
if(cljs.core.truth_((pred__15037.cljs$core$IFn$_invoke$arity$2 ? pred__15037.cljs$core$IFn$_invoke$arity$2(String,expr__15038) : pred__15037.call(null,String,expr__15038)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__15037.cljs$core$IFn$_invoke$arity$2 ? pred__15037.cljs$core$IFn$_invoke$arity$2(Number,expr__15038) : pred__15037.call(null,Number,expr__15038)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15038)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint15034.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta15035], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15034.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15034.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15034";

cljs.pprint.t_cljs$pprint15034.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint15034");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint15034 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint15034(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15035){
return (new cljs.pprint.t_cljs$pprint15034(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15035));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint15034(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5278__auto___15041 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5278__auto___15041)){
var cb_15042 = temp__5278__auto___15041;
var G__15040_15043 = cljs.core.cst$kw$start;
(cb_15042.cljs$core$IFn$_invoke$arity$1 ? cb_15042.cljs$core$IFn$_invoke$arity$1(G__15040_15043) : cb_15042.call(null,G__15040_15043));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5278__auto___15045 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5278__auto___15045)){
var cb_15046 = temp__5278__auto___15045;
var G__15044_15047 = cljs.core.cst$kw$end;
(cb_15046.cljs$core$IFn$_invoke$arity$1 ? cb_15046.cljs$core$IFn$_invoke$arity$1(G__15044_15047) : cb_15046.call(null,G__15044_15047));
} else {
}
} else {
var oldpos_15048 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_15049 = (oldpos_15048 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15049);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_15048,newpos_15049));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__15050 = cljs.core._EQ_;
var expr__15051 = relative_to;
if(cljs.core.truth_((function (){var G__15053 = cljs.core.cst$kw$block;
var G__15054 = expr__15051;
return (pred__15050.cljs$core$IFn$_invoke$arity$2 ? pred__15050.cljs$core$IFn$_invoke$arity$2(G__15053,G__15054) : pred__15050.call(null,G__15053,G__15054));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__15055 = cljs.core.cst$kw$current;
var G__15056 = expr__15051;
return (pred__15050.cljs$core$IFn$_invoke$arity$2 ? pred__15050.cljs$core$IFn$_invoke$arity$2(G__15055,G__15056) : pred__15050.call(null,G__15055,G__15056));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15051)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__15057_SHARP_){
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__15057_SHARP_));
if(cljs.core.truth_(temp__5278__auto__)){
var v = temp__5278__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__15057_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8087__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8087__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8087__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8087__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8087__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9339__auto__ = [];
var len__9332__auto___15076 = arguments.length;
var i__9333__auto___15077 = (0);
while(true){
if((i__9333__auto___15077 < len__9332__auto___15076)){
args__9339__auto__.push((arguments[i__9333__auto___15077]));

var G__15078 = (i__9333__auto___15077 + (1));
i__9333__auto___15077 = G__15078;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_15062 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_15063 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_15064 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_15065 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_15066 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_15067 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_15068 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_15069 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_15070 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_15071 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_15072 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_15073 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__14617__auto___15079 = base_writer;
var new_writer__14618__auto___15080 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__14617__auto___15079));
var _STAR_out_STAR_15074_15081 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__14618__auto___15080)?cljs.pprint.make_pretty_writer(base_writer__14617__auto___15079,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__14617__auto___15079);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15074_15081;
}} else {
var _STAR_out_STAR_15075_15082 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15075_15082;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_15073;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_15072;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_15071;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_15070;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15069;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_15068;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_15067;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_15066;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15065;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15064;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_15063;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_15062;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq15060){
var G__15061 = cljs.core.first(seq15060);
var seq15060__$1 = cljs.core.next(seq15060);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__15061,seq15060__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__15084 = arguments.length;
switch (G__15084) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_15085 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15085;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__14617__auto__ = writer;
var new_writer__14618__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__14617__auto__));
var _STAR_out_STAR_15086 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__14618__auto__)?cljs.pprint.make_pretty_writer(base_writer__14617__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__14617__auto__);

try{var _STAR_print_pretty_STAR_15087_15089 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15087_15089;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15086;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad argument: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". It must be one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8087__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8087__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9339__auto__ = [];
var len__9332__auto___15093 = arguments.length;
var i__9333__auto___15094 = (0);
while(true){
if((i__9333__auto___15094 < len__9332__auto___15093)){
args__9339__auto__.push((arguments[i__9333__auto___15094]));

var G__15095 = (i__9333__auto___15094 + (1));
i__9333__auto___15094 = G__15095;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((2) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9340__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq15090){
var G__15091 = cljs.core.first(seq15090);
var seq15090__$1 = cljs.core.next(seq15090);
var G__15092 = cljs.core.first(seq15090__$1);
var seq15090__$2 = cljs.core.next(seq15090__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__15091,G__15092,seq15090__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k15097,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__15101 = k15097;
var G__15101__$1 = (((G__15101 instanceof cljs.core.Keyword))?G__15101.fqn:null);
switch (G__15101__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15097,else__8776__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15096){
var self__ = this;
var G__15096__$1 = this;
return (new cljs.core.RecordIter((0),G__15096__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__15102 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__15102.cljs$core$IFn$_invoke$arity$1 ? fexpr__15102.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__15102.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15098,other15099){
var self__ = this;
var this15098__$1 = this;
return (!((other15099 == null))) && ((this15098__$1.constructor === other15099.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15098__$1.seq,other15099.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15098__$1.rest,other15099.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15098__$1.pos,other15099.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15098__$1.__extmap,other15099.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__15096){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__15103 = cljs.core.keyword_identical_QMARK_;
var expr__15104 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__15106 = cljs.core.cst$kw$seq;
var G__15107 = expr__15104;
return (pred__15103.cljs$core$IFn$_invoke$arity$2 ? pred__15103.cljs$core$IFn$_invoke$arity$2(G__15106,G__15107) : pred__15103.call(null,G__15106,G__15107));
})())){
return (new cljs.pprint.arg_navigator(G__15096,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15108 = cljs.core.cst$kw$rest;
var G__15109 = expr__15104;
return (pred__15103.cljs$core$IFn$_invoke$arity$2 ? pred__15103.cljs$core$IFn$_invoke$arity$2(G__15108,G__15109) : pred__15103.call(null,G__15108,G__15109));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__15096,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15110 = cljs.core.cst$kw$pos;
var G__15111 = expr__15104;
return (pred__15103.cljs$core$IFn$_invoke$arity$2 ? pred__15103.cljs$core$IFn$_invoke$arity$2(G__15110,G__15111) : pred__15103.call(null,G__15110,G__15111));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__15096,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__15096),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__15096){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__15096,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__15100){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__15100),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__15100),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__15100),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15100,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__15113 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15113,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15113,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__15116 = navigator;
var G__15117 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__15116,G__15117) : cljs.pprint.relative_reposition.call(null,G__15116,G__15117));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k15119,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__15123 = k15119;
var G__15123__$1 = (((G__15123 instanceof cljs.core.Keyword))?G__15123.fqn:null);
switch (G__15123__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15119,else__8776__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15118){
var self__ = this;
var G__15118__$1 = this;
return (new cljs.core.RecordIter((0),G__15118__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__15124 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__15124.cljs$core$IFn$_invoke$arity$1 ? fexpr__15124.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__15124.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15120,other15121){
var self__ = this;
var this15120__$1 = this;
return (!((other15121 == null))) && ((this15120__$1.constructor === other15121.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15120__$1.func,other15121.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15120__$1.def,other15121.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15120__$1.params,other15121.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15120__$1.offset,other15121.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15120__$1.__extmap,other15121.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__15118){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__15125 = cljs.core.keyword_identical_QMARK_;
var expr__15126 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__15128 = cljs.core.cst$kw$func;
var G__15129 = expr__15126;
return (pred__15125.cljs$core$IFn$_invoke$arity$2 ? pred__15125.cljs$core$IFn$_invoke$arity$2(G__15128,G__15129) : pred__15125.call(null,G__15128,G__15129));
})())){
return (new cljs.pprint.compiled_directive(G__15118,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15130 = cljs.core.cst$kw$def;
var G__15131 = expr__15126;
return (pred__15125.cljs$core$IFn$_invoke$arity$2 ? pred__15125.cljs$core$IFn$_invoke$arity$2(G__15130,G__15131) : pred__15125.call(null,G__15130,G__15131));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__15118,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15132 = cljs.core.cst$kw$params;
var G__15133 = expr__15126;
return (pred__15125.cljs$core$IFn$_invoke$arity$2 ? pred__15125.cljs$core$IFn$_invoke$arity$2(G__15132,G__15133) : pred__15125.call(null,G__15132,G__15133));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__15118,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15134 = cljs.core.cst$kw$offset;
var G__15135 = expr__15126;
return (pred__15125.cljs$core$IFn$_invoke$arity$2 ? pred__15125.cljs$core$IFn$_invoke$arity$2(G__15134,G__15135) : pred__15125.call(null,G__15134,G__15135));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__15118,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__15118),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__15118){
var self__ = this;
var this__8772__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__15118,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__15122){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__15122),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__15122),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15122),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__15122),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15122,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__15137,navigator){
var vec__15138 = p__15137;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(0),null);
var vec__15141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(1),null);
var vec__15144 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__15147 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("r")].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__15150 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(1),null);
var base_output = (function (){var or__8099__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__15153_SHARP_){
if((p1__15153_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__15153_SHARP_,base),cljs.core.quot(p1__15153_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__15154_SHARP_){
if((p1__15154_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__15154_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__15154_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__15156 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_15159 = (arg < (0));
var pos_arg_15160 = ((neg_15159)?(- arg):arg);
var raw_str_15161 = cljs.pprint.opt_base_str(base,pos_arg_15160);
var group_str_15162 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_15159,pos_arg_15160,raw_str_15161,vec__15156,arg,arg_navigator__$1){
return (function (p1__15155_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__15155_SHARP_);
});})(neg_15159,pos_arg_15160,raw_str_15161,vec__15156,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_15161));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_15161);
var signed_str_15163 = ((neg_15159)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_15162)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_15162)].join(''):group_str_15162
));
var padded_str_15164 = (((signed_str_15163.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_15163.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_15163)].join(''):signed_str_15163);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_15164], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__15165 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__15166 = (pos - (1));
var G__15167 = cljs.core.first(remainder);
var G__15168 = cljs.core.next(remainder);
acc = G__15165;
pos = G__15166;
this$ = G__15167;
remainder = G__15168;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__15169 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_15172 = (((arg < (0)))?(- arg):arg);
var parts_15173 = cljs.pprint.remainders((1000),abs_arg_15172);
if((cljs.core.count(parts_15173) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15174 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_15173);
var full_str_15175 = cljs.pprint.add_english_scales(parts_strs_15174,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_15175)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__15176 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_15179 = (((arg < (0)))?(- arg):arg);
var parts_15180 = cljs.pprint.remainders((1000),abs_arg_15179);
if((cljs.core.count(parts_15180) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15181 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_15180));
var head_str_15182 = cljs.pprint.add_english_scales(parts_strs_15181,(1));
var tail_str_15183 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_15180));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_15182))) && (!(cljs.core.empty_QMARK_(tail_str_15183))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_15182),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_15183)].join(''):((!(cljs.core.empty_QMARK_(head_str_15182)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_15182),cljs.core.str.cljs$core$IFn$_invoke$arity$1("th")].join(''):tail_str_15183
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_15184 = cljs.core.rem(arg,(100));
var not_teens_15185 = (((11) < low_two_digits_15184)) || (((19) > low_two_digits_15184));
var low_digit_15186 = cljs.core.rem(low_two_digits_15184,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_15186 === (1))) && (not_teens_15185))?"st":((((low_digit_15186 === (2))) && (not_teens_15185))?"nd":((((low_digit_15186 === (3))) && (not_teens_15185))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__15187 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_15190 = cljs.pprint.remainders((10),arg);
var acc_15191 = cljs.core.PersistentVector.EMPTY;
var pos_15192 = (cljs.core.count(digits_15190) - (1));
var digits_15193__$1 = digits_15190;
while(true){
if(cljs.core.empty_QMARK_(digits_15193__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_15191)], 0));
} else {
var digit_15194 = cljs.core.first(digits_15193__$1);
var G__15195 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_15194))?acc_15191:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_15191,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_15192),(digit_15194 - (1)))));
var G__15196 = (pos_15192 - (1));
var G__15197 = cljs.core.next(digits_15193__$1);
acc_15191 = G__15195;
pos_15192 = G__15196;
digits_15193__$1 = G__15197;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__15198 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Control-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__15201 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
var pred__15204_15211 = cljs.core._EQ_;
var expr__15205_15212 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__15207 = "o";
var G__15208 = expr__15205_15212;
return (pred__15204_15211.cljs$core$IFn$_invoke$arity$2 ? pred__15204_15211.cljs$core$IFn$_invoke$arity$2(G__15207,G__15208) : pred__15204_15211.call(null,G__15207,G__15208));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__15209 = "u";
var G__15210 = expr__15205_15212;
return (pred__15204_15211.cljs$core$IFn$_invoke$arity$2 ? pred__15204_15211.cljs$core$IFn$_invoke$arity$2(G__15209,G__15210) : pred__15204_15211.call(null,G__15209,G__15210));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__15204_15211.cljs$core$IFn$_invoke$arity$2 ? pred__15204_15211.cljs$core$IFn$_invoke$arity$2(null,expr__15205_15212) : pred__15204_15211.call(null,null,expr__15205_15212)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15205_15212)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__15213 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15213,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15213,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__15216 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(1),null);
var vec__15219 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15219,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15219,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__15222 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__15225 = (i - (1));
i = G__15225;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8099__auto__ = d;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8437__auto__ = (2);
var y__8438__auto__ = w;
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8437__auto__ = (e + (1));
var y__8438__auto__ = (w__$1 - (1));
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})():(w__$1 + e)
));
var vec__15226 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__15229 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15229,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15229,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__15232 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15232,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15232,(1),null);
var vec__15235 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__15238 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8099__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__15241 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8087__auto__ = w;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = d;
if(cljs.core.truth_(and__8087__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_15244 = cljs.core.count(fixed_repr__$1);
var signed_len_15245 = (cljs.core.truth_(add_sign)?(len_15244 + (1)):len_15244);
var prepend_zero_15246__$1 = (prepend_zero) && (!((signed_len_15245 >= w)));
var append_zero_15247__$1 = (append_zero) && (!((signed_len_15245 >= w)));
var full_len_15248 = (((prepend_zero_15246__$1) || (append_zero_15247__$1))?(signed_len_15245 + (1)):signed_len_15245);
if(cljs.core.truth_((function (){var and__8087__auto__ = (full_len_15248 > w);
if(and__8087__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8087__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_15248),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15246__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15247__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__15249 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15249,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__15255_15265 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__15256_15266 = G__15255_15265;
var mantissa_15267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15256_15266,(0),null);
var exp_15268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15256_15266,(1),null);
var G__15255_15269__$1 = G__15255_15265;
while(true){
var vec__15259_15270 = G__15255_15269__$1;
var mantissa_15271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259_15270,(0),null);
var exp_15272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259_15270,(1),null);
var w_15273 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_15274 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_15275 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_15276 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_15277 = (function (){var or__8099__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return "E";
}
})();
var add_sign_15278 = (function (){var or__8099__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_15279 = (k_15276 <= (0));
var scaled_exp_15280 = (exp_15272__$1 - (k_15276 - (1)));
var scaled_exp_str_15281 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_15280))].join('');
var scaled_exp_str_15282__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_15277),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_15280 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_15275)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_15275 - cljs.core.count(scaled_exp_str_15281)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15281)].join('');
var exp_width_15283 = cljs.core.count(scaled_exp_str_15282__$1);
var base_mantissa_width_15284 = cljs.core.count(mantissa_15271__$1);
var scaled_mantissa_15285 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_15276),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_15271__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_15274)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_15274 - (base_mantissa_width_15284 - (1))) - (((k_15276 < (0)))?(- k_15276):(0))),"0")):null))].join('');
var w_mantissa_15286 = (cljs.core.truth_(w_15273)?(w_15273 - exp_width_15283):null);
var vec__15262_15287 = cljs.pprint.round_str(scaled_mantissa_15285,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_15276,(0)))?(d_15274 - (1)):(((k_15276 > (0)))?d_15274:(((k_15276 < (0)))?(d_15274 - (1)):null))),(cljs.core.truth_(w_mantissa_15286)?(w_mantissa_15286 - (cljs.core.truth_(add_sign_15278)?(1):(0))):null));
var rounded_mantissa_15288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262_15287,(0),null);
var __15289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262_15287,(1),null);
var incr_exp_15290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262_15287,(2),null);
var full_mantissa_15291 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_15288,k_15276);
var append_zero_15292 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_15276,cljs.core.count(rounded_mantissa_15288))) && ((d_15274 == null));
if(cljs.core.not(incr_exp_15290)){
if(cljs.core.truth_(w_15273)){
var len_15293 = (cljs.core.count(full_mantissa_15291) + exp_width_15283);
var signed_len_15294 = (cljs.core.truth_(add_sign_15278)?(len_15293 + (1)):len_15293);
var prepend_zero_15295__$1 = (prepend_zero_15279) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_15294,w_15273)));
var full_len_15296 = ((prepend_zero_15295__$1)?(signed_len_15294 + (1)):signed_len_15294);
var append_zero_15297__$1 = (append_zero_15292) && ((full_len_15296 < w_15273));
if(cljs.core.truth_((function (){var and__8087__auto__ = (function (){var or__8099__auto__ = (full_len_15296 > w_15273);
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = e_15275;
if(cljs.core.truth_(and__8087__auto__)){
return ((exp_width_15283 - (2)) > e_15275);
} else {
return and__8087__auto__;
}
}
})();
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8087__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_15273,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_15273 - full_len_15296) - ((append_zero_15297__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_15278)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15295__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_15291),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15297__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15282__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_15278)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15279)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_15291),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15292)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15282__$1)].join('')], 0));
}
} else {
var G__15298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_15288,(exp_15272__$1 + (1))], null);
G__15255_15269__$1 = G__15298;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__15299 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15299,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15299,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__15302 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8437__auto__ = cljs.core.count(mantissa);
var y__8438__auto__ = (function (){var x__8444__auto__ = n;
var y__8445__auto__ = (7);
return ((x__8444__auto__ < y__8445__auto__) ? x__8444__auto__ : y__8445__auto__);
})();
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__15305 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,(1),null);
var vec__15308 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8099__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (arg < (0));
}
})();
var vec__15311 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15311,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15311,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15311,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8087__auto__)){
return add_sign;
} else {
return and__8087__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8087__auto__){
return add_sign;
} else {
return and__8087__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__15314 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__15317 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15317,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15317,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__15320 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15323 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15323,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15323,(1),null);
var vec__15326 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8099__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = max_count;
if(cljs.core.truth_(and__8087__auto__)){
return (count >= max_count);
} else {
return and__8087__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__15329 = (count + (1));
var G__15330 = iter_result;
var G__15331 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__15329;
args__$1 = G__15330;
last_pos = G__15331;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15332 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(1),null);
var vec__15335 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8099__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = max_count;
if(cljs.core.truth_(and__8087__auto__)){
return (count >= max_count);
} else {
return and__8087__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__15338 = (count + (1));
var G__15339 = cljs.core.next(arg_list__$1);
count = G__15338;
arg_list__$1 = G__15339;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15340 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8099__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = max_count;
if(cljs.core.truth_(and__8087__auto__)){
return (count >= max_count);
} else {
return and__8087__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__15343 = (count + (1));
var G__15344 = iter_result;
var G__15345 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__15343;
navigator__$2 = G__15344;
last_pos = G__15345;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15346 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8099__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8099__auto__){
return or__8099__auto__;
} else {
var and__8087__auto__ = max_count;
if(cljs.core.truth_(and__8087__auto__)){
return (count >= max_count);
} else {
return and__8087__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__15349 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__15352 = (count + (1));
var G__15353 = navigator__$3;
count = G__15352;
navigator__$2 = G__15353;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__15354 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_15357 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15357;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__15358 = cljs.core.next(clauses__$1);
var G__15359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__15360 = iter_result;
clauses__$1 = G__15358;
acc = G__15359;
navigator__$1 = G__15360;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__15361 = (function (){var temp__5278__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5278__auto__)){
var else$ = temp__5278__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__15364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361,(1),null);
var navigator__$1 = (function (){var or__8099__auto__ = new_navigator;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return navigator;
}
})();
var vec__15367 = (function (){var temp__5278__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5278__auto__)){
var p = temp__5278__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(1),null);
var navigator__$2 = (function (){var or__8099__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8099__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8099__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__15370 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(1),null);
var slots = (function (){var x__8437__auto__ = (1);
var y__8438__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8437__auto__ = minpad;
var y__8438__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8087__auto__ = eol_str;
if(cljs.core.truth_(and__8087__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8087__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_15373__$1 = slots;
var extra_pad_15374__$1 = extra_pad;
var strs_15375__$1 = strs;
var pad_only_15376 = (function (){var or__8099__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_15375__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_15375__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_15376))?cljs.core.first(strs_15375__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8099__auto__ = pad_only_15376;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = cljs.core.next(strs_15375__$1);
if(or__8099__auto____$1){
return or__8099__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_15374__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__15377 = (slots_15373__$1 - (1));
var G__15378 = (extra_pad_15374__$1 - (1));
var G__15379 = (cljs.core.truth_(pad_only_15376)?strs_15375__$1:cljs.core.next(strs_15375__$1));
var G__15380 = false;
slots_15373__$1 = G__15377;
extra_pad_15374__$1 = G__15378;
strs_15375__$1 = G__15379;
pad_only_15376 = G__15380;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint15381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15381 = (function (writer,meta15382){
this.writer = writer;
this.meta15382 = meta15382;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15383,meta15382__$1){
var self__ = this;
var _15383__$1 = this;
return (new cljs.pprint.t_cljs$pprint15381(self__.writer,meta15382__$1));
});

cljs.pprint.t_cljs$pprint15381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15383){
var self__ = this;
var _15383__$1 = this;
return self__.meta15382;
});

cljs.pprint.t_cljs$pprint15381.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint15381.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15384 = cljs.core._EQ_;
var expr__15385 = cljs.core.type(x);
if(cljs.core.truth_((pred__15384.cljs$core$IFn$_invoke$arity$2 ? pred__15384.cljs$core$IFn$_invoke$arity$2(String,expr__15385) : pred__15384.call(null,String,expr__15385)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__15384.cljs$core$IFn$_invoke$arity$2 ? pred__15384.cljs$core$IFn$_invoke$arity$2(Number,expr__15385) : pred__15384.call(null,Number,expr__15385)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15385)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint15381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta15382], null);
});

cljs.pprint.t_cljs$pprint15381.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15381.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15381";

cljs.pprint.t_cljs$pprint15381.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint15381");
});

cljs.pprint.__GT_t_cljs$pprint15381 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint15381(writer__$1,meta15382){
return (new cljs.pprint.t_cljs$pprint15381(writer__$1,meta15382));
});

}

return (new cljs.pprint.t_cljs$pprint15381(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint15387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15387 = (function (writer,meta15388){
this.writer = writer;
this.meta15388 = meta15388;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15389,meta15388__$1){
var self__ = this;
var _15389__$1 = this;
return (new cljs.pprint.t_cljs$pprint15387(self__.writer,meta15388__$1));
});

cljs.pprint.t_cljs$pprint15387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15389){
var self__ = this;
var _15389__$1 = this;
return self__.meta15388;
});

cljs.pprint.t_cljs$pprint15387.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint15387.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15390 = cljs.core._EQ_;
var expr__15391 = cljs.core.type(x);
if(cljs.core.truth_((pred__15390.cljs$core$IFn$_invoke$arity$2 ? pred__15390.cljs$core$IFn$_invoke$arity$2(String,expr__15391) : pred__15390.call(null,String,expr__15391)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__15390.cljs$core$IFn$_invoke$arity$2 ? pred__15390.cljs$core$IFn$_invoke$arity$2(Number,expr__15391) : pred__15390.call(null,Number,expr__15391)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15391)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint15387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta15388], null);
});

cljs.pprint.t_cljs$pprint15387.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15387.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15387";

cljs.pprint.t_cljs$pprint15387.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint15387");
});

cljs.pprint.__GT_t_cljs$pprint15387 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint15387(writer__$1,meta15388){
return (new cljs.pprint.t_cljs$pprint15387(writer__$1,meta15388));
});

}

return (new cljs.pprint.t_cljs$pprint15387(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8087__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = f;
if(cljs.core.truth_(and__8087__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8087__auto__ = m;
if(cljs.core.truth_(and__8087__auto__)){
return (m.index + (1));
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint15393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15393 = (function (writer,last_was_whitespace_QMARK_,meta15394){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta15394 = meta15394;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_15395,meta15394__$1){
var self__ = this;
var _15395__$1 = this;
return (new cljs.pprint.t_cljs$pprint15393(self__.writer,self__.last_was_whitespace_QMARK_,meta15394__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_15395){
var self__ = this;
var _15395__$1 = this;
return self__.meta15394;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15393.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15393.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15396 = cljs.core._EQ_;
var expr__15397 = cljs.core.type(x);
if(cljs.core.truth_((pred__15396.cljs$core$IFn$_invoke$arity$2 ? pred__15396.cljs$core$IFn$_invoke$arity$2(String,expr__15397) : pred__15396.call(null,String,expr__15397)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__15399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__15399);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__15396.cljs$core$IFn$_invoke$arity$2 ? pred__15396.cljs$core$IFn$_invoke$arity$2(Number,expr__15397) : pred__15396.call(null,Number,expr__15397)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15397)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15393.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta15394], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15393.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15393.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15393";

cljs.pprint.t_cljs$pprint15393.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint15393");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint15393 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint15393(writer__$1,last_was_whitespace_QMARK___$1,meta15394){
return (new cljs.pprint.t_cljs$pprint15393(writer__$1,last_was_whitespace_QMARK___$1,meta15394));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint15393(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint15400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15400 = (function (writer,capped,meta15401){
this.writer = writer;
this.capped = capped;
this.meta15401 = meta15401;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_15402,meta15401__$1){
var self__ = this;
var _15402__$1 = this;
return (new cljs.pprint.t_cljs$pprint15400(self__.writer,self__.capped,meta15401__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint15400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_15402){
var self__ = this;
var _15402__$1 = this;
return self__.meta15401;
});})(capped))
;

cljs.pprint.t_cljs$pprint15400.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint15400.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15403 = cljs.core._EQ_;
var expr__15404 = cljs.core.type(x);
if(cljs.core.truth_((pred__15403.cljs$core$IFn$_invoke$arity$2 ? pred__15403.cljs$core$IFn$_invoke$arity$2(String,expr__15404) : pred__15403.call(null,String,expr__15404)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8087__auto__ = m;
if(cljs.core.truth_(and__8087__auto__)){
return m.index;
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__15403.cljs$core$IFn$_invoke$arity$2 ? pred__15403.cljs$core$IFn$_invoke$arity$2(Number,expr__15404) : pred__15403.call(null,Number,expr__15404)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8087__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8087__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15404)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint15400.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta15401], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint15400.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15400.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15400";

cljs.pprint.t_cljs$pprint15400.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"cljs.pprint/t_cljs$pprint15400");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint15400 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint15400(writer__$1,capped__$1,meta15401){
return (new cljs.pprint.t_cljs$pprint15400(writer__$1,capped__$1,meta15401));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint15400(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_15406 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15406;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_15408 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_15409 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_15410 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_15411 = (((current_15410 < colnum_15408))?(colnum_15408 - current_15410):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_15409,(0)))?(0):(colinc_15409 - cljs.core.rem((current_15410 - colnum_15408),colinc_15409))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_15411," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_15412 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_15413 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_15414 = (colrel_15412 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_15415 = (((colinc_15413 > (0)))?cljs.core.rem(start_col_15414,colinc_15413):(0));
var space_count_15416 = (colrel_15412 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_15415))?(0):(colinc_15413 - offset_15415)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_15416," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__15417 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15417,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15420_15422 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15421_15423 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15421_15423;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15420_15422;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15424_SHARP_,p2__15425_SHARP_,p3__15426_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__15424_SHARP_,p2__15425_SHARP_,p3__15426_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15427_SHARP_,p2__15428_SHARP_,p3__15429_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__15427_SHARP_,p2__15428_SHARP_,p3__15429_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15430_SHARP_,p2__15431_SHARP_,p3__15432_SHARP_){
return cljs.pprint.format_integer((10),p1__15430_SHARP_,p2__15431_SHARP_,p3__15432_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15433_SHARP_,p2__15434_SHARP_,p3__15435_SHARP_){
return cljs.pprint.format_integer((2),p1__15433_SHARP_,p2__15434_SHARP_,p3__15435_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15436_SHARP_,p2__15437_SHARP_,p3__15438_SHARP_){
return cljs.pprint.format_integer((8),p1__15436_SHARP_,p2__15437_SHARP_,p3__15438_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15439_SHARP_,p2__15440_SHARP_,p3__15441_SHARP_){
return cljs.pprint.format_integer((16),p1__15439_SHARP_,p2__15440_SHARP_,p3__15441_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__15442_SHARP_,p2__15443_SHARP_,p3__15444_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__15442_SHARP_),p1__15442_SHARP_,p2__15443_SHARP_,p3__15444_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8087__auto__;
}
})())){
return (function (p1__15445_SHARP_,p2__15446_SHARP_,p3__15447_SHARP_){
return cljs.pprint.format_old_roman(p1__15445_SHARP_,p2__15446_SHARP_,p3__15447_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15448_SHARP_,p2__15449_SHARP_,p3__15450_SHARP_){
return cljs.pprint.format_new_roman(p1__15448_SHARP_,p2__15449_SHARP_,p3__15450_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15451_SHARP_,p2__15452_SHARP_,p3__15453_SHARP_){
return cljs.pprint.format_ordinal_english(p1__15451_SHARP_,p2__15452_SHARP_,p3__15453_SHARP_);
});
} else {
return (function (p1__15454_SHARP_,p2__15455_SHARP_,p3__15456_SHARP_){
return cljs.pprint.format_cardinal_english(p1__15454_SHARP_,p2__15455_SHARP_,p3__15456_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__15466 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9121__auto___15484 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_15485 = (0);
while(true){
if((i_15485 < n__9121__auto___15484)){
cljs.pprint.prn();

var G__15486 = (i_15485 + (1));
i_15485 = G__15486;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_15487 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_15487 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9121__auto___15488 = (cnt_15487 - (1));
var i_15489 = (0);
while(true){
if((i_15489 < n__9121__auto___15488)){
cljs.pprint.prn();

var G__15490 = (i_15489 + (1));
i_15489 = G__15490;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9121__auto___15491 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_15492 = (0);
while(true){
if((i_15492 < n__9121__auto___15491)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__15493 = (i_15492 + (1));
i_15492 = G__15493;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15457_SHARP_,p2__15458_SHARP_,p3__15459_SHARP_){
return cljs.pprint.relative_tabulation(p1__15457_SHARP_,p2__15458_SHARP_,p3__15459_SHARP_);
});
} else {
return (function (p1__15460_SHARP_,p2__15461_SHARP_,p3__15462_SHARP_){
return cljs.pprint.absolute_tabulation(p1__15460_SHARP_,p2__15461_SHARP_,p3__15462_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__15469 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__15472 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472,(1),null);
var vec__15475 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8087__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__15463_SHARP_,p2__15464_SHARP_,p3__15465_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__15463_SHARP_,p2__15464_SHARP_,p3__15465_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8087__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8087__auto__ = arg1;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = arg2;
if(cljs.core.truth_(and__8087__auto____$1)){
return arg3;
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = arg1;
if(cljs.core.truth_(and__8087__auto__)){
return arg2;
} else {
return and__8087__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8099__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__15478 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__15481 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__15494){
var vec__15495 = p__15494;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15495,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15495,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15495,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__15498){
var vec__15499 = p__15498;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__15502){
var vec__15503 = p__15502;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15503,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15503,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15503,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Flag \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8087__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8087__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"@\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8087__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8087__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\":\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8087__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8087__auto__){
var and__8087__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8087__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),(function (){var x__8444__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8445__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8444__auto__ < y__8445__auto__) ? x__8444__auto__ : y__8445__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15506_SHARP_,p2__15507_SHARP_){
var val = cljs.core.first(p1__15506_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__15507_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__15507_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" has bad type in directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__15506_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__8962__auto__ = (function cljs$pprint$map_params_$_iter__15511(s__15512){
return (new cljs.core.LazySeq(null,(function (){
var s__15512__$1 = s__15512;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__15512__$1);
if(temp__5278__auto__){
var s__15512__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15512__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__15512__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__15514 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__15513 = (0);
while(true){
if((i__15513 < size__8961__auto__)){
var vec__15515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__15513);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(0),null);
var vec__15518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15518,(0),null);
cljs.core.chunk_append(b__15514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__15527 = (i__15513 + (1));
i__15513 = G__15527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15514),cljs$pprint$map_params_$_iter__15511(cljs.core.chunk_rest(s__15512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15514),null);
}
} else {
var vec__15521 = cljs.core.first(s__15512__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15521,(0),null);
var vec__15524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15521,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15524,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__15511(cljs.core.rest(s__15512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15508_SHARP_,p2__15509_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__15508_SHARP_,p2__15509_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15510_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__15510_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__15528 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528,(0),null);
var vec__15531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(1),null);
var vec__15534 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(0),null);
var vec__15537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15537,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__15540 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__15540.cljs$core$IFn$_invoke$arity$2 ? fexpr__15540.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__15540.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8087__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8087__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__15541 = (function (){var G__15544 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__15545 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__15546 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__15544,G__15545,G__15546) : cljs.pprint.collect_clauses.call(null,G__15544,G__15545,G__15546));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__15547){
var vec__15548 = p__15547;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15548,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15548,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15548,(2),null);
var vec__15551 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551,(0),null);
var vec__15554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_15557 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_15557){
return (function (p__15558){
var vec__15559 = p__15558;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15559,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15559,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_15557))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_15557;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8099__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__15562 = cljs.core.next(format__$1);
format__$1 = G__15562;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__15564 = arguments.length;
switch (G__15564) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8087__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8087__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_15565 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15565;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__15566 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566,(1),null);
var vec__15569 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__15573 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__15573) : cljs.pprint.reader_macros.call(null,G__15573));
})();
if(cljs.core.truth_((function (){var and__8087__auto__ = macro_char;
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8087__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15574_15577 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15575_15578 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count15576_15579 = (0);
var alis_15580__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15576_15579 < cljs.core._STAR_print_length_STAR_))){
if(alis_15580__$1){
cljs.pprint.write_out(cljs.core.first(alis_15580__$1));

if(cljs.core.next(alis_15580__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15581 = (length_count15576_15579 + (1));
var G__15582 = cljs.core.next(alis_15580__$1);
length_count15576_15579 = G__15581;
alis_15580__$1 = G__15582;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15575_15578;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15574_15577;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15583_15586 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15584_15587 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count15585_15588 = (0);
var aseq_15589 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15585_15588 < cljs.core._STAR_print_length_STAR_))){
if(aseq_15589){
cljs.pprint.write_out(cljs.core.first(aseq_15589));

if(cljs.core.next(aseq_15589)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15590 = (length_count15585_15588 + (1));
var G__15591 = cljs.core.next(aseq_15589);
length_count15585_15588 = G__15590;
aseq_15589 = G__15591;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15584_15587;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15583_15586;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__14682__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15592__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15592 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15593__i = 0, G__15593__a = new Array(arguments.length -  0);
while (G__15593__i < G__15593__a.length) {G__15593__a[G__15593__i] = arguments[G__15593__i + 0]; ++G__15593__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15593__a,0,null);
} 
return G__15592__delegate.call(this,args__14684__auto__);};
G__15592.cljs$lang$maxFixedArity = 0;
G__15592.cljs$lang$applyTo = (function (arglist__15594){
var args__14684__auto__ = cljs.core.seq(arglist__15594);
return G__15592__delegate(args__14684__auto__);
});
G__15592.cljs$core$IFn$_invoke$arity$variadic = G__15592__delegate;
return G__15592;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__15595 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__15598 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9692,9692,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__15598.cljs$core$IFn$_invoke$arity$1 ? fexpr__15598.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__15598.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(1),null);
var amap__$1 = (function (){var or__8099__auto__ = lift_map;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15599_15604 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15600_15605 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count15601_15606 = (0);
var aseq_15607 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15601_15606 < cljs.core._STAR_print_length_STAR_))){
if(aseq_15607){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15602_15608 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15603_15609 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_15607));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_15607)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15603_15609;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15602_15608;
}}


if(cljs.core.next(aseq_15607)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15610 = (length_count15601_15606 + (1));
var G__15611 = cljs.core.next(aseq_15607);
length_count15601_15606 = G__15610;
aseq_15607 = G__15611;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15600_15605;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15599_15604;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__14682__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15612__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15612 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15613__i = 0, G__15613__a = new Array(arguments.length -  0);
while (G__15613__i < G__15613__a.length) {G__15613__a[G__15613__i] = arguments[G__15613__i + 0]; ++G__15613__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15613__a,0,null);
} 
return G__15612__delegate.call(this,args__14684__auto__);};
G__15612.cljs$lang$maxFixedArity = 0;
G__15612.cljs$lang$applyTo = (function (arglist__15614){
var args__14684__auto__ = cljs.core.seq(arglist__15614);
return G__15612__delegate(args__14684__auto__);
});
G__15612.cljs$core$IFn$_invoke$arity$variadic = G__15612__delegate;
return G__15612;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8099__auto__ = (function (){var temp__5278__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5278__auto__)){
var match = temp__5278__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15615_15619 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15616_15620 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8087__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8087__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8087__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15616_15620;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15615_15619;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__14682__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15621__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15621 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15622__i = 0, G__15622__a = new Array(arguments.length -  0);
while (G__15622__i < G__15622__a.length) {G__15622__a[G__15622__i] = arguments[G__15622__i + 0]; ++G__15622__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15622__a,0,null);
} 
return G__15621__delegate.call(this,args__14684__auto__);};
G__15621.cljs$lang$maxFixedArity = 0;
G__15621.cljs$lang$applyTo = (function (arglist__15623){
var args__14684__auto__ = cljs.core.seq(arglist__15623);
return G__15621__delegate(args__14684__auto__);
});
G__15621.cljs$core$IFn$_invoke$arity$variadic = G__15621__delegate;
return G__15621;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__15625 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15625,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15625,(1),null);
var vec__15628 = reference;
var seq__15629 = cljs.core.seq(vec__15628);
var first__15630 = cljs.core.first(seq__15629);
var seq__15629__$1 = cljs.core.next(seq__15629);
var keyw = first__15630;
var args = seq__15629__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15631_15647 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15632_15648 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__15633_15649 = (function (){var format_in__14682__auto__ = "~w~:i";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15650__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15650 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15651__i = 0, G__15651__a = new Array(arguments.length -  0);
while (G__15651__i < G__15651__a.length) {G__15651__a[G__15651__i] = arguments[G__15651__i + 0]; ++G__15651__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15651__a,0,null);
} 
return G__15650__delegate.call(this,args__14684__auto__);};
G__15650.cljs$lang$maxFixedArity = 0;
G__15650.cljs$lang$applyTo = (function (arglist__15652){
var args__14684__auto__ = cljs.core.seq(arglist__15652);
return G__15650__delegate(args__14684__auto__);
});
G__15650.cljs$core$IFn$_invoke$arity$variadic = G__15650__delegate;
return G__15650;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15633_15649.cljs$core$IFn$_invoke$arity$1 ? fexpr__15633_15649.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__15633_15649.call(null,keyw));

var args_15653__$1 = args;
while(true){
if(cljs.core.seq(args_15653__$1)){
var fexpr__15634_15654 = (function (){var format_in__14682__auto__ = " ";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15655__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15655 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15656__i = 0, G__15656__a = new Array(arguments.length -  0);
while (G__15656__i < G__15656__a.length) {G__15656__a[G__15656__i] = arguments[G__15656__i + 0]; ++G__15656__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15656__a,0,null);
} 
return G__15655__delegate.call(this,args__14684__auto__);};
G__15655.cljs$lang$maxFixedArity = 0;
G__15655.cljs$lang$applyTo = (function (arglist__15657){
var args__14684__auto__ = cljs.core.seq(arglist__15657);
return G__15655__delegate(args__14684__auto__);
});
G__15655.cljs$core$IFn$_invoke$arity$variadic = G__15655__delegate;
return G__15655;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15634_15654.cljs$core$IFn$_invoke$arity$0 ? fexpr__15634_15654.cljs$core$IFn$_invoke$arity$0() : fexpr__15634_15654.call(null));

var arg_15658 = cljs.core.first(args_15653__$1);
if(cljs.core.sequential_QMARK_(arg_15658)){
var vec__15635_15659 = cljs.pprint.brackets(arg_15658);
var start_15660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15635_15659,(0),null);
var end_15661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15635_15659,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15638_15662 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15639_15663 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_15660__$1,null,end_15661__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_15658),(3))) && ((cljs.core.second(arg_15658) instanceof cljs.core.Keyword))){
var vec__15640_15664 = arg_15658;
var ns_15665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15664,(0),null);
var kw_15666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15664,(1),null);
var lis_15667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15664,(2),null);
var fexpr__15643_15668 = (function (){var format_in__14682__auto__ = "~w ~w ";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15640_15664,ns_15665,kw_15666,lis_15667,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15669__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15669 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15670__i = 0, G__15670__a = new Array(arguments.length -  0);
while (G__15670__i < G__15670__a.length) {G__15670__a[G__15670__i] = arguments[G__15670__i + 0]; ++G__15670__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15670__a,0,null);
} 
return G__15669__delegate.call(this,args__14684__auto__);};
G__15669.cljs$lang$maxFixedArity = 0;
G__15669.cljs$lang$applyTo = (function (arglist__15671){
var args__14684__auto__ = cljs.core.seq(arglist__15671);
return G__15669__delegate(args__14684__auto__);
});
G__15669.cljs$core$IFn$_invoke$arity$variadic = G__15669__delegate;
return G__15669;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15640_15664,ns_15665,kw_15666,lis_15667,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15643_15668.cljs$core$IFn$_invoke$arity$2 ? fexpr__15643_15668.cljs$core$IFn$_invoke$arity$2(ns_15665,kw_15666) : fexpr__15643_15668.call(null,ns_15665,kw_15666));

if(cljs.core.sequential_QMARK_(lis_15667)){
var fexpr__15644_15672 = (function (){var format_in__14682__auto__ = ((cljs.core.vector_QMARK_(lis_15667))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15640_15664,ns_15665,kw_15666,lis_15667,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15673__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15673 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15674__i = 0, G__15674__a = new Array(arguments.length -  0);
while (G__15674__i < G__15674__a.length) {G__15674__a[G__15674__i] = arguments[G__15674__i + 0]; ++G__15674__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15674__a,0,null);
} 
return G__15673__delegate.call(this,args__14684__auto__);};
G__15673.cljs$lang$maxFixedArity = 0;
G__15673.cljs$lang$applyTo = (function (arglist__15675){
var args__14684__auto__ = cljs.core.seq(arglist__15675);
return G__15673__delegate(args__14684__auto__);
});
G__15673.cljs$core$IFn$_invoke$arity$variadic = G__15673__delegate;
return G__15673;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15640_15664,ns_15665,kw_15666,lis_15667,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15644_15672.cljs$core$IFn$_invoke$arity$1 ? fexpr__15644_15672.cljs$core$IFn$_invoke$arity$1(lis_15667) : fexpr__15644_15672.call(null,lis_15667));
} else {
cljs.pprint.write_out(lis_15667);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__14682__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15676__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15676 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15677__i = 0, G__15677__a = new Array(arguments.length -  0);
while (G__15677__i < G__15677__a.length) {G__15677__a[G__15677__i] = arguments[G__15677__i + 0]; ++G__15677__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15677__a,0,null);
} 
return G__15676__delegate.call(this,args__14684__auto__);};
G__15676.cljs$lang$maxFixedArity = 0;
G__15676.cljs$lang$applyTo = (function (arglist__15678){
var args__14684__auto__ = cljs.core.seq(arglist__15678);
return G__15676__delegate(args__14684__auto__);
});
G__15676.cljs$core$IFn$_invoke$arity$variadic = G__15676__delegate;
return G__15676;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15638_15662,_STAR_current_length_STAR_15639_15663,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})(),arg_15658);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15639_15663;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15638_15662;
}}


if(cljs.core.next(args_15653__$1)){
var fexpr__15645_15679 = (function (){var format_in__14682__auto__ = "~_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15680__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15680 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15681__i = 0, G__15681__a = new Array(arguments.length -  0);
while (G__15681__i < G__15681__a.length) {G__15681__a[G__15681__i] = arguments[G__15681__i + 0]; ++G__15681__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15681__a,0,null);
} 
return G__15680__delegate.call(this,args__14684__auto__);};
G__15680.cljs$lang$maxFixedArity = 0;
G__15680.cljs$lang$applyTo = (function (arglist__15682){
var args__14684__auto__ = cljs.core.seq(arglist__15682);
return G__15680__delegate(args__14684__auto__);
});
G__15680.cljs$core$IFn$_invoke$arity$variadic = G__15680__delegate;
return G__15680;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,vec__15635_15659,start_15660__$1,end_15661__$1,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15645_15679.cljs$core$IFn$_invoke$arity$0 ? fexpr__15645_15679.cljs$core$IFn$_invoke$arity$0() : fexpr__15645_15679.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_15658);

if(cljs.core.next(args_15653__$1)){
var fexpr__15646_15683 = (function (){var format_in__14682__auto__ = "~:_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (args_15653__$1,format_in__14682__auto__,cf__14683__auto__,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args){
return (function() { 
var G__15684__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15684 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15685__i = 0, G__15685__a = new Array(arguments.length -  0);
while (G__15685__i < G__15685__a.length) {G__15685__a[G__15685__i] = arguments[G__15685__i + 0]; ++G__15685__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15685__a,0,null);
} 
return G__15684__delegate.call(this,args__14684__auto__);};
G__15684.cljs$lang$maxFixedArity = 0;
G__15684.cljs$lang$applyTo = (function (arglist__15686){
var args__14684__auto__ = cljs.core.seq(arglist__15686);
return G__15684__delegate(args__14684__auto__);
});
G__15684.cljs$core$IFn$_invoke$arity$variadic = G__15684__delegate;
return G__15684;
})()
;
;})(args_15653__$1,format_in__14682__auto__,cf__14683__auto__,arg_15658,_STAR_current_level_STAR_15631_15647,_STAR_current_length_STAR_15632_15648,vec__15625,start,end,vec__15628,seq__15629,first__15630,seq__15629__$1,keyw,args))
})();
(fexpr__15646_15683.cljs$core$IFn$_invoke$arity$0 ? fexpr__15646_15683.cljs$core$IFn$_invoke$arity$0() : fexpr__15646_15683.call(null));
} else {
}
}

var G__15687 = cljs.core.next(args_15653__$1);
args_15653__$1 = G__15687;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15632_15648;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15631_15647;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__15688 = alis;
var seq__15689 = cljs.core.seq(vec__15688);
var first__15690 = cljs.core.first(seq__15689);
var seq__15689__$1 = cljs.core.next(seq__15689);
var ns_sym = first__15690;
var first__15690__$1 = cljs.core.first(seq__15689__$1);
var seq__15689__$2 = cljs.core.next(seq__15689__$1);
var ns_name = first__15690__$1;
var stuff = seq__15689__$2;
var vec__15691 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15691,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15691,(1),null);
var vec__15694 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15694,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15694,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15697_15704 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15698_15705 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__15699_15706 = (function (){var format_in__14682__auto__ = "~w ~1I~@_~w";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references){
return (function() { 
var G__15707__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15707 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15708__i = 0, G__15708__a = new Array(arguments.length -  0);
while (G__15708__i < G__15708__a.length) {G__15708__a[G__15708__i] = arguments[G__15708__i + 0]; ++G__15708__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15708__a,0,null);
} 
return G__15707__delegate.call(this,args__14684__auto__);};
G__15707.cljs$lang$maxFixedArity = 0;
G__15707.cljs$lang$applyTo = (function (arglist__15709){
var args__14684__auto__ = cljs.core.seq(arglist__15709);
return G__15707__delegate(args__14684__auto__);
});
G__15707.cljs$core$IFn$_invoke$arity$variadic = G__15707__delegate;
return G__15707;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references))
})();
(fexpr__15699_15706.cljs$core$IFn$_invoke$arity$2 ? fexpr__15699_15706.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__15699_15706.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8099__auto__ = doc_str;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = attr_map;
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__15700_15710 = (function (){var format_in__14682__auto__ = "~@:_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references){
return (function() { 
var G__15711__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15711 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15712__i = 0, G__15712__a = new Array(arguments.length -  0);
while (G__15712__i < G__15712__a.length) {G__15712__a[G__15712__i] = arguments[G__15712__i + 0]; ++G__15712__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15712__a,0,null);
} 
return G__15711__delegate.call(this,args__14684__auto__);};
G__15711.cljs$lang$maxFixedArity = 0;
G__15711.cljs$lang$applyTo = (function (arglist__15713){
var args__14684__auto__ = cljs.core.seq(arglist__15713);
return G__15711__delegate(args__14684__auto__);
});
G__15711.cljs$core$IFn$_invoke$arity$variadic = G__15711__delegate;
return G__15711;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references))
})();
(fexpr__15700_15710.cljs$core$IFn$_invoke$arity$0 ? fexpr__15700_15710.cljs$core$IFn$_invoke$arity$0() : fexpr__15700_15710.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8099__auto__ = attr_map;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__15702_15714 = attr_map;
var G__15703_15715 = cljs.core.seq(references);
var fexpr__15701_15716 = (function (){var format_in__14682__auto__ = "~w~:[~;~:@_~]";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,G__15702_15714,G__15703_15715,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references){
return (function() { 
var G__15717__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15717 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15718__i = 0, G__15718__a = new Array(arguments.length -  0);
while (G__15718__i < G__15718__a.length) {G__15718__a[G__15718__i] = arguments[G__15718__i + 0]; ++G__15718__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15718__a,0,null);
} 
return G__15717__delegate.call(this,args__14684__auto__);};
G__15717.cljs$lang$maxFixedArity = 0;
G__15717.cljs$lang$applyTo = (function (arglist__15719){
var args__14684__auto__ = cljs.core.seq(arglist__15719);
return G__15717__delegate(args__14684__auto__);
});
G__15717.cljs$core$IFn$_invoke$arity$variadic = G__15717__delegate;
return G__15717;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,G__15702_15714,G__15703_15715,_STAR_current_level_STAR_15697_15704,_STAR_current_length_STAR_15698_15705,vec__15688,seq__15689,first__15690,seq__15689__$1,ns_sym,first__15690__$1,seq__15689__$2,ns_name,stuff,vec__15691,doc_str,stuff__$1,vec__15694,attr_map,references))
})();
(fexpr__15701_15716.cljs$core$IFn$_invoke$arity$2 ? fexpr__15701_15716.cljs$core$IFn$_invoke$arity$2(G__15702_15714,G__15703_15715) : fexpr__15701_15716.call(null,G__15702_15714,G__15703_15715));
} else {
}

var references_15720__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_15720__$1));

var temp__5278__auto___15721 = cljs.core.next(references_15720__$1);
if(temp__5278__auto___15721){
var references_15722__$2 = temp__5278__auto___15721;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15723 = references_15722__$2;
references_15720__$1 = G__15723;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15698_15705;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15697_15704;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__14682__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15724__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15724 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15725__i = 0, G__15725__a = new Array(arguments.length -  0);
while (G__15725__i < G__15725__a.length) {G__15725__a[G__15725__i] = arguments[G__15725__i + 0]; ++G__15725__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15725__a,0,null);
} 
return G__15724__delegate.call(this,args__14684__auto__);};
G__15724.cljs$lang$maxFixedArity = 0;
G__15724.cljs$lang$applyTo = (function (arglist__15726){
var args__14684__auto__ = cljs.core.seq(arglist__15726);
return G__15724__delegate(args__14684__auto__);
});
G__15724.cljs$core$IFn$_invoke$arity$variadic = G__15724__delegate;
return G__15724;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__15727_15730 = (function (){var format_in__14682__auto__ = " ~_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15731__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15731 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15732__i = 0, G__15732__a = new Array(arguments.length -  0);
while (G__15732__i < G__15732__a.length) {G__15732__a[G__15732__i] = arguments[G__15732__i + 0]; ++G__15732__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15732__a,0,null);
} 
return G__15731__delegate.call(this,args__14684__auto__);};
G__15731.cljs$lang$maxFixedArity = 0;
G__15731.cljs$lang$applyTo = (function (arglist__15733){
var args__14684__auto__ = cljs.core.seq(arglist__15733);
return G__15731__delegate(args__14684__auto__);
});
G__15731.cljs$core$IFn$_invoke$arity$variadic = G__15731__delegate;
return G__15731;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
(fexpr__15727_15730.cljs$core$IFn$_invoke$arity$0 ? fexpr__15727_15730.cljs$core$IFn$_invoke$arity$0() : fexpr__15727_15730.call(null));
} else {
var fexpr__15728_15734 = (function (){var format_in__14682__auto__ = " ~@_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15735__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15735 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15736__i = 0, G__15736__a = new Array(arguments.length -  0);
while (G__15736__i < G__15736__a.length) {G__15736__a[G__15736__i] = arguments[G__15736__i + 0]; ++G__15736__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15736__a,0,null);
} 
return G__15735__delegate.call(this,args__14684__auto__);};
G__15735.cljs$lang$maxFixedArity = 0;
G__15735.cljs$lang$applyTo = (function (arglist__15737){
var args__14684__auto__ = cljs.core.seq(arglist__15737);
return G__15735__delegate(args__14684__auto__);
});
G__15735.cljs$core$IFn$_invoke$arity$variadic = G__15735__delegate;
return G__15735;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
(fexpr__15728_15734.cljs$core$IFn$_invoke$arity$0 ? fexpr__15728_15734.cljs$core$IFn$_invoke$arity$0() : fexpr__15728_15734.call(null));
}

var fexpr__15729 = (function (){var format_in__14682__auto__ = "~{~w~^ ~_~}";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15738__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15738 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15739__i = 0, G__15739__a = new Array(arguments.length -  0);
while (G__15739__i < G__15739__a.length) {G__15739__a[G__15739__i] = arguments[G__15739__i + 0]; ++G__15739__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15739__a,0,null);
} 
return G__15738__delegate.call(this,args__14684__auto__);};
G__15738.cljs$lang$maxFixedArity = 0;
G__15738.cljs$lang$applyTo = (function (arglist__15740){
var args__14684__auto__ = cljs.core.seq(arglist__15740);
return G__15738__delegate(args__14684__auto__);
});
G__15738.cljs$core$IFn$_invoke$arity$variadic = G__15738__delegate;
return G__15738;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
return (fexpr__15729.cljs$core$IFn$_invoke$arity$1 ? fexpr__15729.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__15729.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__15741 = (function (){var format_in__14682__auto__ = " ~_~{~w~^ ~_~}";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15742__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15742 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15743__i = 0, G__15743__a = new Array(arguments.length -  0);
while (G__15743__i < G__15743__a.length) {G__15743__a[G__15743__i] = arguments[G__15743__i + 0]; ++G__15743__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15743__a,0,null);
} 
return G__15742__delegate.call(this,args__14684__auto__);};
G__15742.cljs$lang$maxFixedArity = 0;
G__15742.cljs$lang$applyTo = (function (arglist__15744){
var args__14684__auto__ = cljs.core.seq(arglist__15744);
return G__15742__delegate(args__14684__auto__);
});
G__15742.cljs$core$IFn$_invoke$arity$variadic = G__15742__delegate;
return G__15742;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
return (fexpr__15741.cljs$core$IFn$_invoke$arity$1 ? fexpr__15741.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__15741.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__15745 = alis;
var seq__15746 = cljs.core.seq(vec__15745);
var first__15747 = cljs.core.first(seq__15746);
var seq__15746__$1 = cljs.core.next(seq__15746);
var defn_sym = first__15747;
var first__15747__$1 = cljs.core.first(seq__15746__$1);
var seq__15746__$2 = cljs.core.next(seq__15746__$1);
var defn_name = first__15747__$1;
var stuff = seq__15746__$2;
var vec__15748 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748,(1),null);
var vec__15751 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15751,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15751,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15754_15759 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15755_15760 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__15756_15761 = (function (){var format_in__14682__auto__ = "~w ~1I~@_~w";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2){
return (function() { 
var G__15762__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15762 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15763__i = 0, G__15763__a = new Array(arguments.length -  0);
while (G__15763__i < G__15763__a.length) {G__15763__a[G__15763__i] = arguments[G__15763__i + 0]; ++G__15763__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15763__a,0,null);
} 
return G__15762__delegate.call(this,args__14684__auto__);};
G__15762.cljs$lang$maxFixedArity = 0;
G__15762.cljs$lang$applyTo = (function (arglist__15764){
var args__14684__auto__ = cljs.core.seq(arglist__15764);
return G__15762__delegate(args__14684__auto__);
});
G__15762.cljs$core$IFn$_invoke$arity$variadic = G__15762__delegate;
return G__15762;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2))
})();
(fexpr__15756_15761.cljs$core$IFn$_invoke$arity$2 ? fexpr__15756_15761.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__15756_15761.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__15757_15765 = (function (){var format_in__14682__auto__ = " ~_~w";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2){
return (function() { 
var G__15766__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15766 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15767__i = 0, G__15767__a = new Array(arguments.length -  0);
while (G__15767__i < G__15767__a.length) {G__15767__a[G__15767__i] = arguments[G__15767__i + 0]; ++G__15767__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15767__a,0,null);
} 
return G__15766__delegate.call(this,args__14684__auto__);};
G__15766.cljs$lang$maxFixedArity = 0;
G__15766.cljs$lang$applyTo = (function (arglist__15768){
var args__14684__auto__ = cljs.core.seq(arglist__15768);
return G__15766__delegate(args__14684__auto__);
});
G__15766.cljs$core$IFn$_invoke$arity$variadic = G__15766__delegate;
return G__15766;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2))
})();
(fexpr__15757_15765.cljs$core$IFn$_invoke$arity$1 ? fexpr__15757_15765.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__15757_15765.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__15758_15769 = (function (){var format_in__14682__auto__ = " ~_~w";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2){
return (function() { 
var G__15770__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15770 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15771__i = 0, G__15771__a = new Array(arguments.length -  0);
while (G__15771__i < G__15771__a.length) {G__15771__a[G__15771__i] = arguments[G__15771__i + 0]; ++G__15771__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15771__a,0,null);
} 
return G__15770__delegate.call(this,args__14684__auto__);};
G__15770.cljs$lang$maxFixedArity = 0;
G__15770.cljs$lang$applyTo = (function (arglist__15772){
var args__14684__auto__ = cljs.core.seq(arglist__15772);
return G__15770__delegate(args__14684__auto__);
});
G__15770.cljs$core$IFn$_invoke$arity$variadic = G__15770__delegate;
return G__15770;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15754_15759,_STAR_current_length_STAR_15755_15760,vec__15745,seq__15746,first__15747,seq__15746__$1,defn_sym,first__15747__$1,seq__15746__$2,defn_name,stuff,vec__15748,doc_str,stuff__$1,vec__15751,attr_map,stuff__$2))
})();
(fexpr__15758_15769.cljs$core$IFn$_invoke$arity$1 ? fexpr__15758_15769.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__15758_15769.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8099__auto__ = doc_str;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8099__auto__ = doc_str;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15755_15760;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15754_15759;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15773_15778 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15774_15779 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count15775_15780 = (0);
var binding_15781 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15775_15780 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_15781)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15776_15782 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15777_15783 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_15781));

if(cljs.core.next(binding_15781)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_15781));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15777_15783;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15776_15782;
}}


if(cljs.core.next(cljs.core.rest(binding_15781))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15784 = (length_count15775_15780 + (1));
var G__15785 = cljs.core.next(cljs.core.rest(binding_15781));
length_count15775_15780 = G__15784;
binding_15781 = G__15785;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15774_15779;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15773_15778;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15786_15791 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15787_15792 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__15788_15793 = (function (){var format_in__14682__auto__ = "~w ~1I~@_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15786_15791,_STAR_current_length_STAR_15787_15792,base_sym){
return (function() { 
var G__15794__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15794 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15795__i = 0, G__15795__a = new Array(arguments.length -  0);
while (G__15795__i < G__15795__a.length) {G__15795__a[G__15795__i] = arguments[G__15795__i + 0]; ++G__15795__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15795__a,0,null);
} 
return G__15794__delegate.call(this,args__14684__auto__);};
G__15794.cljs$lang$maxFixedArity = 0;
G__15794.cljs$lang$applyTo = (function (arglist__15796){
var args__14684__auto__ = cljs.core.seq(arglist__15796);
return G__15794__delegate(args__14684__auto__);
});
G__15794.cljs$core$IFn$_invoke$arity$variadic = G__15794__delegate;
return G__15794;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15786_15791,_STAR_current_length_STAR_15787_15792,base_sym))
})();
(fexpr__15788_15793.cljs$core$IFn$_invoke$arity$1 ? fexpr__15788_15793.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__15788_15793.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__15790_15797 = cljs.core.next(cljs.core.rest(alis));
var fexpr__15789_15798 = (function (){var format_in__14682__auto__ = " ~_~{~w~^ ~_~}";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,G__15790_15797,_STAR_current_level_STAR_15786_15791,_STAR_current_length_STAR_15787_15792,base_sym){
return (function() { 
var G__15799__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15799 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15800__i = 0, G__15800__a = new Array(arguments.length -  0);
while (G__15800__i < G__15800__a.length) {G__15800__a[G__15800__i] = arguments[G__15800__i + 0]; ++G__15800__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15800__a,0,null);
} 
return G__15799__delegate.call(this,args__14684__auto__);};
G__15799.cljs$lang$maxFixedArity = 0;
G__15799.cljs$lang$applyTo = (function (arglist__15801){
var args__14684__auto__ = cljs.core.seq(arglist__15801);
return G__15799__delegate(args__14684__auto__);
});
G__15799.cljs$core$IFn$_invoke$arity$variadic = G__15799__delegate;
return G__15799;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,G__15790_15797,_STAR_current_level_STAR_15786_15791,_STAR_current_length_STAR_15787_15792,base_sym))
})();
(fexpr__15789_15798.cljs$core$IFn$_invoke$arity$1 ? fexpr__15789_15798.cljs$core$IFn$_invoke$arity$1(G__15790_15797) : fexpr__15789_15798.call(null,G__15790_15797));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15787_15792;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15786_15791;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__14682__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__){
return (function() { 
var G__15802__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15802 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15803__i = 0, G__15803__a = new Array(arguments.length -  0);
while (G__15803__i < G__15803__a.length) {G__15803__a[G__15803__i] = arguments[G__15803__i + 0]; ++G__15803__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15803__a,0,null);
} 
return G__15802__delegate.call(this,args__14684__auto__);};
G__15802.cljs$lang$maxFixedArity = 0;
G__15802.cljs$lang$applyTo = (function (arglist__15804){
var args__14684__auto__ = cljs.core.seq(arglist__15804);
return G__15802__delegate(args__14684__auto__);
});
G__15802.cljs$core$IFn$_invoke$arity$variadic = G__15802__delegate;
return G__15802;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15805_15810 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15806_15811 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count15807_15812 = (0);
var alis_15813__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15807_15812 < cljs.core._STAR_print_length_STAR_))){
if(alis_15813__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15808_15814 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15809_15815 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_15813__$1));

if(cljs.core.next(alis_15813__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_15813__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15809_15815;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15808_15814;
}}


if(cljs.core.next(cljs.core.rest(alis_15813__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15816 = (length_count15807_15812 + (1));
var G__15817 = cljs.core.next(cljs.core.rest(alis_15813__$1));
length_count15807_15812 = G__15816;
alis_15813__$1 = G__15817;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15806_15811;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15805_15810;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15818_15823 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15819_15824 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__14682__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15818_15823,_STAR_current_length_STAR_15819_15824){
return (function() { 
var G__15825__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15825 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15826__i = 0, G__15826__a = new Array(arguments.length -  0);
while (G__15826__i < G__15826__a.length) {G__15826__a[G__15826__i] = arguments[G__15826__i + 0]; ++G__15826__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15826__a,0,null);
} 
return G__15825__delegate.call(this,args__14684__auto__);};
G__15825.cljs$lang$maxFixedArity = 0;
G__15825.cljs$lang$applyTo = (function (arglist__15827){
var args__14684__auto__ = cljs.core.seq(arglist__15827);
return G__15825__delegate(args__14684__auto__);
});
G__15825.cljs$core$IFn$_invoke$arity$variadic = G__15825__delegate;
return G__15825;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_current_level_STAR_15818_15823,_STAR_current_length_STAR_15819_15824))
})(),alis);

var length_count15820_15828 = (0);
var alis_15829__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15820_15828 < cljs.core._STAR_print_length_STAR_))){
if(alis_15829__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15821_15830 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15822_15831 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_15829__$1));

if(cljs.core.next(alis_15829__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_15829__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15822_15831;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15821_15830;
}}


if(cljs.core.next(cljs.core.rest(alis_15829__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15832 = (length_count15820_15828 + (1));
var G__15833 = cljs.core.next(cljs.core.rest(alis_15829__$1));
length_count15820_15828 = G__15832;
alis_15829__$1 = G__15833;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15819_15824;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15818_15823;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_15836 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_15836,args,nlis){
return (function (p1__15834_SHARP_,p2__15835_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15834_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15835_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_15836,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__15837 = (function (){var format_in__14682__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__14683__auto__ = ((typeof format_in__14682__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__14682__auto__) : cljs.pprint.cached_compile.call(null,format_in__14682__auto__)):format_in__14682__auto__);
return ((function (format_in__14682__auto__,cf__14683__auto__,_STAR_symbol_map_STAR_15836,args,nlis){
return (function() { 
var G__15838__delegate = function (args__14684__auto__){
var navigator__14685__auto__ = cljs.pprint.init_navigator(args__14684__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__14683__auto__,navigator__14685__auto__);
};
var G__15838 = function (var_args){
var args__14684__auto__ = null;
if (arguments.length > 0) {
var G__15839__i = 0, G__15839__a = new Array(arguments.length -  0);
while (G__15839__i < G__15839__a.length) {G__15839__a[G__15839__i] = arguments[G__15839__i + 0]; ++G__15839__i;}
  args__14684__auto__ = new cljs.core.IndexedSeq(G__15839__a,0,null);
} 
return G__15838__delegate.call(this,args__14684__auto__);};
G__15838.cljs$lang$maxFixedArity = 0;
G__15838.cljs$lang$applyTo = (function (arglist__15840){
var args__14684__auto__ = cljs.core.seq(arglist__15840);
return G__15838__delegate(args__14684__auto__);
});
G__15838.cljs$core$IFn$_invoke$arity$variadic = G__15838__delegate;
return G__15838;
})()
;
;})(format_in__14682__auto__,cf__14683__auto__,_STAR_symbol_map_STAR_15836,args,nlis))
})();
return (fexpr__15837.cljs$core$IFn$_invoke$arity$1 ? fexpr__15837.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__15837.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_15836;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15841_15844 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15842_15845 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count15843_15846 = (0);
var alis_15847__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count15843_15846 < cljs.core._STAR_print_length_STAR_))){
if(alis_15847__$1){
cljs.pprint.write_out(cljs.core.first(alis_15847__$1));

if(cljs.core.next(alis_15847__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__15848 = (length_count15843_15846 + (1));
var G__15849 = cljs.core.next(alis_15847__$1);
length_count15843_15846 = G__15848;
alis_15847__$1 = G__15849;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15842_15845;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15841_15844;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__8962__auto__ = (function cljs$pprint$two_forms_$_iter__15850(s__15851){
return (new cljs.core.LazySeq(null,(function (){
var s__15851__$1 = s__15851;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__15851__$1);
if(temp__5278__auto__){
var s__15851__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15851__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__15851__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__15853 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__15852 = (0);
while(true){
if((i__15852 < size__8961__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__15852);
cljs.core.chunk_append(b__15853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__15854 = (i__15852 + (1));
i__15852 = G__15854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15853),cljs$pprint$two_forms_$_iter__15850(cljs.core.chunk_rest(s__15851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15853),null);
}
} else {
var x = cljs.core.first(s__15851__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__15850(cljs.core.rest(s__15851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__15855_SHARP_){
var vec__15856 = p1__15855_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(1),null);
if(cljs.core.not((function (){var or__8099__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__15855_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5276__auto__ = (function (){var G__15859 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__15859) : cljs.pprint._STAR_code_table_STAR_.call(null,G__15859));
})();
if(cljs.core.truth_(temp__5276__auto__)){
var special_form = temp__5276__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5276__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5276__auto__)){
var arg_num = temp__5276__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8437__auto__ = (0);
var y__8438__auto__ = (width - cljs.core.count(s));
return ((x__8437__auto__ > y__8438__auto__) ? x__8437__auto__ : y__8438__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__15864 = arguments.length;
switch (G__15864) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_15865 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_15865){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_15865){
return (function (p1__15860_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__15860_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_15865))
,rows));
});})(_STAR_print_newline_STAR_15865))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_15865){
return (function (p1__15861_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__15861_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_15865))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_15865){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__8962__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_15865){
return (function cljs$pprint$iter__15866(s__15867){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_15865){
return (function (){
var s__15867__$1 = s__15867;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__15867__$1);
if(temp__5278__auto__){
var s__15867__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15867__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__15867__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__15869 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__15868 = (0);
while(true){
if((i__15868 < size__8961__auto__)){
var vec__15870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__15868);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15870,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15870,(1),null);
cljs.core.chunk_append(b__15869,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__15881 = (i__15868 + (1));
i__15868 = G__15881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15869),cljs$pprint$iter__15866(cljs.core.chunk_rest(s__15867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15869),null);
}
} else {
var vec__15873 = cljs.core.first(s__15867__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__15866(cljs.core.rest(s__15867__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_15865))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_15865))
;
return iter__8962__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__8962__auto__,widths,spacers,_STAR_print_newline_STAR_15865){
return (function (p1__15862_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__15862_SHARP_);
});})(iter__8962__auto__,widths,spacers,_STAR_print_newline_STAR_15865))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_15865))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__15876 = cljs.core.seq(rows);
var chunk__15877 = null;
var count__15878 = (0);
var i__15879 = (0);
while(true){
if((i__15879 < count__15878)){
var row = chunk__15877.cljs$core$IIndexed$_nth$arity$2(null,i__15879);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__15882 = seq__15876;
var G__15883 = chunk__15877;
var G__15884 = count__15878;
var G__15885 = (i__15879 + (1));
seq__15876 = G__15882;
chunk__15877 = G__15883;
count__15878 = G__15884;
i__15879 = G__15885;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__15876);
if(temp__5278__auto__){
var seq__15876__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15876__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__15876__$1);
var G__15886 = cljs.core.chunk_rest(seq__15876__$1);
var G__15887 = c__9011__auto__;
var G__15888 = cljs.core.count(c__9011__auto__);
var G__15889 = (0);
seq__15876 = G__15886;
chunk__15877 = G__15887;
count__15878 = G__15888;
i__15879 = G__15889;
continue;
} else {
var row = cljs.core.first(seq__15876__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__15890 = cljs.core.next(seq__15876__$1);
var G__15891 = null;
var G__15892 = (0);
var G__15893 = (0);
seq__15876 = G__15890;
chunk__15877 = G__15891;
count__15878 = G__15892;
i__15879 = G__15893;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15865;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

