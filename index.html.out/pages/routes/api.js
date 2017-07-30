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
var c = (function (){var fexpr__30861 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history_cell){
return (function (G__30859,G__30857,G__30860,G__30858){
return (G__30857.cljs$core$IFn$_invoke$arity$3 ? G__30857.cljs$core$IFn$_invoke$arity$3(G__30858,G__30859,G__30860) : G__30857.call(null,G__30858,G__30859,G__30860));
});})(history_cell))
);
return (fexpr__30861.cljs$core$IFn$_invoke$arity$4 ? fexpr__30861.cljs$core$IFn$_invoke$arity$4(pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell) : fexpr__30861.call(null,pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell));
})();
var fexpr__30875_30886 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history_cell){
return (function (G__30862,G__30863,G__30864){
var G__30876 = G__30863;
var G__30877 = cljs.core.cst$kw$info;
var G__30878 = "pages.routes.api";
var G__30879 = null;
var G__30880 = 18;
var G__30881 = cljs.core.cst$kw$p;
var G__30882 = cljs.core.cst$kw$auto;
var G__30883 = (new cljs.core.Delay(((function (G__30876,G__30877,G__30878,G__30879,G__30880,G__30881,G__30882,c,history_cell){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Location changed to: ",G__30864], null);
});})(G__30876,G__30877,G__30878,G__30879,G__30880,G__30881,G__30882,c,history_cell))
,null));
var G__30884 = null;
var G__30885 = 1977869765;
return (G__30862.cljs$core$IFn$_invoke$arity$10 ? G__30862.cljs$core$IFn$_invoke$arity$10(G__30876,G__30877,G__30878,G__30879,G__30880,G__30881,G__30882,G__30883,G__30884,G__30885) : G__30862.call(null,G__30876,G__30877,G__30878,G__30879,G__30880,G__30881,G__30882,G__30883,G__30884,G__30885));
});})(c,history_cell))
);
(fexpr__30875_30886.cljs$core$IFn$_invoke$arity$3 ? fexpr__30875_30886.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c) : fexpr__30875_30886.call(null,taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c));

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
