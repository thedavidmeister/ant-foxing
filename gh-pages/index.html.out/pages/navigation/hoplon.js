// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('pages.navigation.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('pages.routes.config');
goog.require('pages.routes.api');
goog.require('cuerdas.core');
goog.require('coinmarketcap.ticker.hoplon');
goog.require('portfolio.hoplon');
goog.require('report.hoplon');
goog.require('portfolio.save.hoplon');
goog.require('spectre.hoplon');
/**
 * A top nav based on the simplest possible routing setup
 */
pages.navigation.hoplon.nav = (function pages$navigation$hoplon$nav(routes){
var route_keys = (function (){var fexpr__30269 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30264,G__30266,G__30265){
var G__30270 = G__30265;
var G__30271 = (G__30265.cljs$core$IFn$_invoke$arity$1 ? G__30265.cljs$core$IFn$_invoke$arity$1(G__30266) : G__30265.call(null,G__30266));
return (G__30264.cljs$core$IFn$_invoke$arity$2 ? G__30264.cljs$core$IFn$_invoke$arity$2(G__30270,G__30271) : G__30264.call(null,G__30270,G__30271));
}));
return (fexpr__30269.cljs$core$IFn$_invoke$arity$3 ? fexpr__30269.cljs$core$IFn$_invoke$arity$3(cljs.core.map,routes,cljs.core.second) : fexpr__30269.call(null,cljs.core.map,routes,cljs.core.second));
})();
return spectre.hoplon.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30272 = (function (){var G__30273 = (hoplon.core.em.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$1("Ant Foxing") : hoplon.core.em.call(null,"Ant Foxing"));
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1(G__30273) : hoplon.core.strong.call(null,G__30273));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1(G__30272) : hoplon.core.h1.call(null,G__30272));
})(),hoplon.core.loop_tpl_STAR_(route_keys,((function (route_keys){
return (function (item__14007__auto__){
var vec__30274 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30277 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (route_keys){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(route_keys))
);
return (fexpr__30277.cljs$core$IFn$_invoke$arity$1 ? fexpr__30277.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30277.call(null,item__14007__auto__));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30274,(0),null);
return spectre.hoplon.nav_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$click,((function (vec__30274,k,route_keys){
return (function (){
var G__30278 = cljs.core.deref(k);
return (pages.routes.api.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? pages.routes.api.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(G__30278) : pages.routes.api.navigate_BANG_.call(null,G__30278));
});})(vec__30274,k,route_keys))
,(function (){var fexpr__30285 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30274,k,route_keys){
return (function (G__30280,G__30281,G__30282,G__30279){
var G__30286 = (function (){var G__30287 = (G__30281.cljs$core$IFn$_invoke$arity$1 ? G__30281.cljs$core$IFn$_invoke$arity$1(G__30282) : G__30281.call(null,G__30282));
return (G__30280.cljs$core$IFn$_invoke$arity$1 ? G__30280.cljs$core$IFn$_invoke$arity$1(G__30287) : G__30280.call(null,G__30287));
})();
return (G__30279.cljs$core$IFn$_invoke$arity$1 ? G__30279.cljs$core$IFn$_invoke$arity$1(G__30286) : G__30279.call(null,G__30286));
});})(vec__30274,k,route_keys))
);
return (fexpr__30285.cljs$core$IFn$_invoke$arity$4 ? fexpr__30285.cljs$core$IFn$_invoke$arity$4(cuerdas.core.human,cljs.core.name,k,clojure.string.capitalize) : fexpr__30285.call(null,cuerdas.core.human,cljs.core.name,k,clojure.string.capitalize));
})()], 0));
});})(route_keys))
)], 0));
});
pages.navigation.hoplon.nav_content = (function pages$navigation$hoplon$nav_content(location,conn,ticker){
var G__30288 = (new cljs.core.Delay((function (){
return coinmarketcap.ticker.hoplon.page(conn,ticker);
}),null));
var G__30289 = (new cljs.core.Delay(((function (G__30288){
return (function (){
return portfolio.hoplon.page(conn,ticker);
});})(G__30288))
,null));
var G__30290 = (new cljs.core.Delay(((function (G__30288,G__30289){
return (function (){
return report.hoplon.page(conn,ticker);
});})(G__30288,G__30289))
,null));
var G__30291 = (new cljs.core.Delay(((function (G__30288,G__30289,G__30290){
return (function (){
return portfolio.save.hoplon.page(conn);
});})(G__30288,G__30289,G__30290))
,null));
var G__30292 = (new cljs.core.Delay(((function (G__30288,G__30289,G__30290,G__30291){
return (function (){
return null;
});})(G__30288,G__30289,G__30290,G__30291))
,null));
var tpl__14046__auto__ = ((function (G__30288,G__30289,G__30290,G__30291,G__30292){
return (function (expr__14047__auto__){
return cljs.core.deref((function (){var or__8099__auto__ = (function (){var G__30294 = expr__14047__auto__;
var G__30294__$1 = (((G__30294 instanceof cljs.core.Keyword))?G__30294.fqn:null);
switch (G__30294__$1) {
case "market-cap-data":
return G__30288;

break;
case "portfolio":
return G__30289;

break;
case "report":
return G__30290;

break;
case "save":
return G__30291;

break;
default:
return G__30292;

}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.atom();
}
})());
});})(G__30288,G__30289,G__30290,G__30291,G__30292))
;
var G__30296 = (function (){var fexpr__30298 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30288,G__30289,G__30290,G__30291,G__30292,tpl__14046__auto__){
return (function (G__30297){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__30297);
});})(G__30288,G__30289,G__30290,G__30291,G__30292,tpl__14046__auto__))
);
return (fexpr__30298.cljs$core$IFn$_invoke$arity$1 ? fexpr__30298.cljs$core$IFn$_invoke$arity$1(location) : fexpr__30298.call(null,location));
})();
var fexpr__30295 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14046__auto__);
return (fexpr__30295.cljs$core$IFn$_invoke$arity$1 ? fexpr__30295.cljs$core$IFn$_invoke$arity$1(G__30296) : fexpr__30295.call(null,G__30296));
});
