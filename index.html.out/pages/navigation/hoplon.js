// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var route_keys = (function (){var fexpr__31542 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31537,G__31539,G__31538){
var G__31543 = G__31538;
var G__31544 = (G__31538.cljs$core$IFn$_invoke$arity$1 ? G__31538.cljs$core$IFn$_invoke$arity$1(G__31539) : G__31538.call(null,G__31539));
return (G__31537.cljs$core$IFn$_invoke$arity$2 ? G__31537.cljs$core$IFn$_invoke$arity$2(G__31543,G__31544) : G__31537.call(null,G__31543,G__31544));
}));
return (fexpr__31542.cljs$core$IFn$_invoke$arity$3 ? fexpr__31542.cljs$core$IFn$_invoke$arity$3(cljs.core.map,routes,cljs.core.second) : fexpr__31542.call(null,cljs.core.map,routes,cljs.core.second));
})();
return spectre.hoplon.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31545 = (function (){var G__31546 = (hoplon.core.em.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$1("Ant Foxing") : hoplon.core.em.call(null,"Ant Foxing"));
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1(G__31546) : hoplon.core.strong.call(null,G__31546));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1(G__31545) : hoplon.core.h1.call(null,G__31545));
})(),hoplon.core.loop_tpl_STAR_(route_keys,((function (route_keys){
return (function (item__15485__auto__){
var vec__31547 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31550 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (route_keys){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(route_keys))
);
return (fexpr__31550.cljs$core$IFn$_invoke$arity$1 ? fexpr__31550.cljs$core$IFn$_invoke$arity$1(item__15485__auto__) : fexpr__31550.call(null,item__15485__auto__));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31547,(0),null);
return spectre.hoplon.nav_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$click,((function (vec__31547,k,route_keys){
return (function (){
var G__31551 = cljs.core.deref(k);
return (pages.routes.api.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 ? pages.routes.api.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(G__31551) : pages.routes.api.navigate_BANG_.call(null,G__31551));
});})(vec__31547,k,route_keys))
,(function (){var fexpr__31558 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31547,k,route_keys){
return (function (G__31553,G__31554,G__31555,G__31552){
var G__31559 = (function (){var G__31560 = (G__31554.cljs$core$IFn$_invoke$arity$1 ? G__31554.cljs$core$IFn$_invoke$arity$1(G__31555) : G__31554.call(null,G__31555));
return (G__31553.cljs$core$IFn$_invoke$arity$1 ? G__31553.cljs$core$IFn$_invoke$arity$1(G__31560) : G__31553.call(null,G__31560));
})();
return (G__31552.cljs$core$IFn$_invoke$arity$1 ? G__31552.cljs$core$IFn$_invoke$arity$1(G__31559) : G__31552.call(null,G__31559));
});})(vec__31547,k,route_keys))
);
return (fexpr__31558.cljs$core$IFn$_invoke$arity$4 ? fexpr__31558.cljs$core$IFn$_invoke$arity$4(cuerdas.core.human,cljs.core.name,k,clojure.string.capitalize) : fexpr__31558.call(null,cuerdas.core.human,cljs.core.name,k,clojure.string.capitalize));
})()], 0));
});})(route_keys))
)], 0));
});
pages.navigation.hoplon.nav_content = (function pages$navigation$hoplon$nav_content(location,conn,ticker){
var G__31561 = (new cljs.core.Delay((function (){
return coinmarketcap.ticker.hoplon.page(conn,ticker);
}),null));
var G__31562 = (new cljs.core.Delay(((function (G__31561){
return (function (){
return portfolio.hoplon.page(conn,ticker);
});})(G__31561))
,null));
var G__31563 = (new cljs.core.Delay(((function (G__31561,G__31562){
return (function (){
return report.hoplon.page(conn,ticker);
});})(G__31561,G__31562))
,null));
var G__31564 = (new cljs.core.Delay(((function (G__31561,G__31562,G__31563){
return (function (){
return portfolio.save.hoplon.page(conn);
});})(G__31561,G__31562,G__31563))
,null));
var G__31565 = (new cljs.core.Delay(((function (G__31561,G__31562,G__31563,G__31564){
return (function (){
return null;
});})(G__31561,G__31562,G__31563,G__31564))
,null));
var tpl__15524__auto__ = ((function (G__31561,G__31562,G__31563,G__31564,G__31565){
return (function (expr__15525__auto__){
return cljs.core.deref((function (){var or__8762__auto__ = (function (){var G__31567 = expr__15525__auto__;
var G__31567__$1 = (((G__31567 instanceof cljs.core.Keyword))?G__31567.fqn:null);
switch (G__31567__$1) {
case "market-cap-data":
return G__31561;

break;
case "portfolio":
return G__31562;

break;
case "report":
return G__31563;

break;
case "save":
return G__31564;

break;
default:
return G__31565;

}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.atom();
}
})());
});})(G__31561,G__31562,G__31563,G__31564,G__31565))
;
var G__31569 = (function (){var fexpr__31571 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31561,G__31562,G__31563,G__31564,G__31565,tpl__15524__auto__){
return (function (G__31570){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__31570);
});})(G__31561,G__31562,G__31563,G__31564,G__31565,tpl__15524__auto__))
);
return (fexpr__31571.cljs$core$IFn$_invoke$arity$1 ? fexpr__31571.cljs$core$IFn$_invoke$arity$1(location) : fexpr__31571.call(null,location));
})();
var fexpr__31568 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__15524__auto__);
return (fexpr__31568.cljs$core$IFn$_invoke$arity$1 ? fexpr__31568.cljs$core$IFn$_invoke$arity$1(G__31569) : fexpr__31568.call(null,G__31569));
});
