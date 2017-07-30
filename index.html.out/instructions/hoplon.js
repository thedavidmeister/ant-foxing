// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('instructions.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
instructions.hoplon.warning = (function() { 
var instructions$hoplon$warning__delegate = function (args__15441__auto__){
var vec__30918 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30918,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30918,(1),null);
var G__30921 = cljs.core.cst$kw$css;
var G__30922 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null);
var G__30923 = attributes;
var G__30924 = children;
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$4(G__30921,G__30922,G__30923,G__30924) : hoplon.core.strong.call(null,G__30921,G__30922,G__30923,G__30924));
};
var instructions$hoplon$warning = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__30925__i = 0, G__30925__a = new Array(arguments.length -  0);
while (G__30925__i < G__30925__a.length) {G__30925__a[G__30925__i] = arguments[G__30925__i + 0]; ++G__30925__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__30925__a,0,null);
} 
return instructions$hoplon$warning__delegate.call(this,args__15441__auto__);};
instructions$hoplon$warning.cljs$lang$maxFixedArity = 0;
instructions$hoplon$warning.cljs$lang$applyTo = (function (arglist__30926){
var args__15441__auto__ = cljs.core.seq(arglist__30926);
return instructions$hoplon$warning__delegate(args__15441__auto__);
});
instructions$hoplon$warning.cljs$core$IFn$_invoke$arity$variadic = instructions$hoplon$warning__delegate;
return instructions$hoplon$warning;
})()
;
