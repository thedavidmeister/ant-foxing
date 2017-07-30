// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
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
var c = (function (){var fexpr__28518 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history_cell){
return (function (G__28516,G__28514,G__28517,G__28515){
return (G__28514.cljs$core$IFn$_invoke$arity$3 ? G__28514.cljs$core$IFn$_invoke$arity$3(G__28515,G__28516,G__28517) : G__28514.call(null,G__28515,G__28516,G__28517));
});})(history_cell))
);
return (fexpr__28518.cljs$core$IFn$_invoke$arity$4 ? fexpr__28518.cljs$core$IFn$_invoke$arity$4(pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell) : fexpr__28518.call(null,pages.routes.config.routes,wheel.route.core.path__GT_bidi,pages.routes.config.fallback,history_cell));
})();
var fexpr__28532_28543 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history_cell){
return (function (G__28519,G__28520,G__28521){
var G__28533 = G__28520;
var G__28534 = cljs.core.cst$kw$info;
var G__28535 = "pages.routes.api";
var G__28536 = null;
var G__28537 = 18;
var G__28538 = cljs.core.cst$kw$p;
var G__28539 = cljs.core.cst$kw$auto;
var G__28540 = (new cljs.core.Delay(((function (G__28533,G__28534,G__28535,G__28536,G__28537,G__28538,G__28539,c,history_cell){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Location changed to: ",G__28521], null);
});})(G__28533,G__28534,G__28535,G__28536,G__28537,G__28538,G__28539,c,history_cell))
,null));
var G__28541 = null;
var G__28542 = -429014650;
return (G__28519.cljs$core$IFn$_invoke$arity$10 ? G__28519.cljs$core$IFn$_invoke$arity$10(G__28533,G__28534,G__28535,G__28536,G__28537,G__28538,G__28539,G__28540,G__28541,G__28542) : G__28519.call(null,G__28533,G__28534,G__28535,G__28536,G__28537,G__28538,G__28539,G__28540,G__28541,G__28542));
});})(c,history_cell))
);
(fexpr__28532_28543.cljs$core$IFn$_invoke$arity$3 ? fexpr__28532_28543.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c) : fexpr__28532_28543.call(null,taoensso.timbre._log_BANG_,taoensso.timbre._STAR_config_STAR_,c));

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
