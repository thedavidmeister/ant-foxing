// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('pages.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('spectre.hoplon');
/**
 * @param {...*} var_args
 */
pages.hoplon.outer = (function() { 
var pages$hoplon$outer__delegate = function (args__21560__auto__){
var vec__31575 = hoplon.core.parse_args(args__21560__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(1),null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31578 = spectre.hoplon.styles();
var G__31579 = (function (){var G__31580 = cljs.core.cst$kw$rel;
var G__31581 = "stylesheet";
var G__31582 = cljs.core.cst$kw$href;
var G__31583 = "styles.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__31580,G__31581,G__31582,G__31583) : hoplon.core.link.call(null,G__31580,G__31581,G__31582,G__31583));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__31578,G__31579) : hoplon.core.head.call(null,G__31578,G__31579));
})(),(function (){var G__31584 = spectre.hoplon.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__31584) : hoplon.core.body.call(null,G__31584));
})()], 0));
};
var pages$hoplon$outer = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__31585__i = 0, G__31585__a = new Array(arguments.length -  0);
while (G__31585__i < G__31585__a.length) {G__31585__a[G__31585__i] = arguments[G__31585__i + 0]; ++G__31585__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__31585__a,0,null);
} 
return pages$hoplon$outer__delegate.call(this,args__21560__auto__);};
pages$hoplon$outer.cljs$lang$maxFixedArity = 0;
pages$hoplon$outer.cljs$lang$applyTo = (function (arglist__31586){
var args__21560__auto__ = cljs.core.seq(arglist__31586);
return pages$hoplon$outer__delegate(args__21560__auto__);
});
pages$hoplon$outer.cljs$core$IFn$_invoke$arity$variadic = pages$hoplon$outer__delegate;
return pages$hoplon$outer;
})()
;
