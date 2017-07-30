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
var c = (function (){var fexpr__30846 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history_cell){
return (function (G__30844,G__30842,G__30845,G__30843){
return (G__30842.cljs$core$IFn$_invoke$arity$3 ? G__30842.cljs$core$IFn$_invoke$arity$3(G__30843,G__30844,G__30845) : G__30842.call(null,G__30843,G__30844,G__30845));
});})(history_cell))
);
return (fexpr__30846.cljs$core$IFn$_invoke$arity$4 ? fexpr__30846.cljs$core$IFn$_invoke$arity$4(pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell) : fexpr__30846.call(null,pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell));
})();
var fexpr__30860_30871 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history_cell){
return (function (G__30847,G__30848,G__30849){
var G__30861 = G__30848;
var G__30862 = cljs.core.cst$kw$info;
var G__30863 = "pages.routes.api";
var G__30864 = null;
var G__30865 = 18;
var G__30866 = cljs.core.cst$kw$p;
var G__30867 = cljs.core.cst$kw$auto;
var G__30868 = (new cljs.core.Delay(((function (G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,c,history_cell){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Location changed to: ",G__30849], null);
});})(G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,c,history_cell))
,null));
var G__30869 = null;
var G__30870 = 1167499519;
return (G__30847.cljs$core$IFn$_invoke$arity$10 ? G__30847.cljs$core$IFn$_invoke$arity$10(G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870) : G__30847.call(null,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870));
});})(c,history_cell))
);
(fexpr__30860_30871.cljs$core$IFn$_invoke$arity$3 ? fexpr__30860_30871.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c) : fexpr__30860_30871.call(null,taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c));

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
