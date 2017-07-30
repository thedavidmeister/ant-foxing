// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('pages.routes.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pages.routes.config');
goog.require('wheel.route.core');
goog.require('javelin.core');
goog.require('taoensso.timbre');
if(typeof pages.routes.api.history !== 'undefined'){
} else {
pages.routes.api.history = cljs.core.memoize(wheel.route.core.history_cell);
}
pages.routes.api._location = (function pages$routes$api$_location(){
var history_cell = (pages.routes.api.history.cljs$core$IFn$_invoke$arity$0 ? pages.routes.api.history.cljs$core$IFn$_invoke$arity$0() : pages.routes.api.history.call(null));
var c = (function (){var fexpr__28890 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history_cell){
return (function (G__28888,G__28886,G__28889,G__28887){
return (G__28886.cljs$core$IFn$_invoke$arity$3 ? G__28886.cljs$core$IFn$_invoke$arity$3(G__28887,G__28888,G__28889) : G__28886.call(null,G__28887,G__28888,G__28889));
});})(history_cell))
);
return (fexpr__28890.cljs$core$IFn$_invoke$arity$4 ? fexpr__28890.cljs$core$IFn$_invoke$arity$4(pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell) : fexpr__28890.call(null,pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell));
})();
var fexpr__28904_28915 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history_cell){
return (function (G__28891,G__28892,G__28893){
var G__28905 = G__28892;
var G__28906 = cljs.core.cst$kw$info;
var G__28907 = "pages.routes.api";
var G__28908 = null;
var G__28909 = 18;
var G__28910 = cljs.core.cst$kw$p;
var G__28911 = cljs.core.cst$kw$auto;
var G__28912 = (new cljs.core.Delay(((function (G__28905,G__28906,G__28907,G__28908,G__28909,G__28910,G__28911,c,history_cell){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Location changed to: ",G__28893], null);
});})(G__28905,G__28906,G__28907,G__28908,G__28909,G__28910,G__28911,c,history_cell))
,null));
var G__28913 = null;
var G__28914 = -945502432;
return (G__28891.cljs$core$IFn$_invoke$arity$10 ? G__28891.cljs$core$IFn$_invoke$arity$10(G__28905,G__28906,G__28907,G__28908,G__28909,G__28910,G__28911,G__28912,G__28913,G__28914) : G__28891.call(null,G__28905,G__28906,G__28907,G__28908,G__28909,G__28910,G__28911,G__28912,G__28913,G__28914));
});})(c,history_cell))
);
(fexpr__28904_28915.cljs$core$IFn$_invoke$arity$3 ? fexpr__28904_28915.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c) : fexpr__28904_28915.call(null,taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c));

return c;
});
if(typeof pages.routes.api.location !== 'undefined'){
} else {
pages.routes.api.location = cljs.core.memoize(pages.routes.api._location);
}
if(typeof pages.routes.api.navigate_BANG_ !== 'undefined'){
} else {
pages.routes.api.navigate_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(wheel.route.core.navigate_BANG_,(pages.routes.api.history.cljs$core$IFn$_invoke$arity$0 ? pages.routes.api.history.cljs$core$IFn$_invoke$arity$0() : pages.routes.api.history.call(null)),pages.routes.config.routes);
}
if(typeof pages.routes.api.handler_BANG_ !== 'undefined'){
} else {
pages.routes.api.handler_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(wheel.route.core.handler_BANG_,(pages.routes.api.history.cljs$core$IFn$_invoke$arity$0 ? pages.routes.api.history.cljs$core$IFn$_invoke$arity$0() : pages.routes.api.history.call(null)),pages.routes.config.routes);
}
if(typeof pages.routes.api.params_BANG_ !== 'undefined'){
} else {
pages.routes.api.params_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(wheel.route.core.params_BANG_,(pages.routes.api.history.cljs$core$IFn$_invoke$arity$0 ? pages.routes.api.history.cljs$core$IFn$_invoke$arity$0() : pages.routes.api.history.call(null)),pages.routes.config.routes);
}
