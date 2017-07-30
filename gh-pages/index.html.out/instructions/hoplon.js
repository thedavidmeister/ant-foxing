// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('instructions.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
instructions.hoplon.warning = (function() { 
var instructions$hoplon$warning__delegate = function (args__13963__auto__){
var vec__29844 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(1),null);
var G__29847 = cljs.core.cst$kw$css;
var G__29848 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null);
var G__29849 = attributes;
var G__29850 = children;
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$4(G__29847,G__29848,G__29849,G__29850) : hoplon.core.strong.call(null,G__29847,G__29848,G__29849,G__29850));
};
var instructions$hoplon$warning = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__29851__i = 0, G__29851__a = new Array(arguments.length -  0);
while (G__29851__i < G__29851__a.length) {G__29851__a[G__29851__i] = arguments[G__29851__i + 0]; ++G__29851__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__29851__a,0,null);
} 
return instructions$hoplon$warning__delegate.call(this,args__13963__auto__);};
instructions$hoplon$warning.cljs$lang$maxFixedArity = 0;
instructions$hoplon$warning.cljs$lang$applyTo = (function (arglist__29852){
var args__13963__auto__ = cljs.core.seq(arglist__29852);
return instructions$hoplon$warning__delegate(args__13963__auto__);
});
instructions$hoplon$warning.cljs$core$IFn$_invoke$arity$variadic = instructions$hoplon$warning__delegate;
return instructions$hoplon$warning;
})()
;
