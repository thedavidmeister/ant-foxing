// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('pages.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('spectre.hoplon');
/**
 * @param {...*} var_args
 */
pages.hoplon.outer = (function() { 
var pages$hoplon$outer__delegate = function (args__13963__auto__){
var vec__30302 = hoplon.core.parse_args(args__13963__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(1),null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30305 = spectre.hoplon.styles();
var G__30306 = (function (){var G__30307 = cljs.core.cst$kw$rel;
var G__30308 = "stylesheet";
var G__30309 = cljs.core.cst$kw$href;
var G__30310 = "styles.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__30307,G__30308,G__30309,G__30310) : hoplon.core.link.call(null,G__30307,G__30308,G__30309,G__30310));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__30305,G__30306) : hoplon.core.head.call(null,G__30305,G__30306));
})(),(function (){var G__30311 = spectre.hoplon.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__30311) : hoplon.core.body.call(null,G__30311));
})()], 0));
};
var pages$hoplon$outer = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__30312__i = 0, G__30312__a = new Array(arguments.length -  0);
while (G__30312__i < G__30312__a.length) {G__30312__a[G__30312__i] = arguments[G__30312__i + 0]; ++G__30312__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__30312__a,0,null);
} 
return pages$hoplon$outer__delegate.call(this,args__13963__auto__);};
pages$hoplon$outer.cljs$lang$maxFixedArity = 0;
pages$hoplon$outer.cljs$lang$applyTo = (function (arglist__30313){
var args__13963__auto__ = cljs.core.seq(arglist__30313);
return pages$hoplon$outer__delegate(args__13963__auto__);
});
pages$hoplon$outer.cljs$core$IFn$_invoke$arity$variadic = pages$hoplon$outer__delegate;
return pages$hoplon$outer;
})()
;
