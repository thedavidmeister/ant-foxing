// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('coinmarketcap.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('ajax.core');
goog.require('coinmarketcap.data');
goog.require('taoensso.timbre');
coinmarketcap.api.do_it_BANG_ = (function coinmarketcap$api$do_it_BANG_(var_args){
var G__21427 = arguments.length;
switch (G__21427) {
case 2:
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (c,endpoint){
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3(c,endpoint,null);
});

coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (c,endpoint,params){
if(cljs.core.truth_(javelin.core.cell_QMARK_(c))){
} else {
throw (new Error("Assert failed: (j/cell? c)"));
}

if(typeof endpoint === 'string'){
} else {
throw (new Error("Assert failed: (string? endpoint)"));
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"coinmarketcap.api",null,12,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hitting coinmarketcap endpoint: ",endpoint], null);
}),null)),null,1242223711);

var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(coinmarketcap.data.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,((function (url){
return (function (p1__21425_SHARP_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"coinmarketcap.api",null,18,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (url){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Success fetching response from coinmarketcap endpoint: ",endpoint], null);
});})(url))
,null)),null,-1196398479);

return cljs.core.reset_BANG_(c,p1__21425_SHARP_);
});})(url))
], null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));
});

coinmarketcap.api.do_it_BANG_.cljs$lang$maxFixedArity = 3;

coinmarketcap.api.global = (function coinmarketcap$api$global(var_args){
var G__21430 = arguments.length;
switch (G__21430) {
case 1:
return coinmarketcap.api.global.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return coinmarketcap.api.global.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

coinmarketcap.api.global.cljs$core$IFn$_invoke$arity$1 = (function (c){
return coinmarketcap.api.global.cljs$core$IFn$_invoke$arity$1(null);
});

coinmarketcap.api.global.cljs$core$IFn$_invoke$arity$2 = (function (c,params){
return coinmarketcap.api.do_it_BANG_.cljs$core$IFn$_invoke$arity$3(c,"global/",params);
});

coinmarketcap.api.global.cljs$lang$maxFixedArity = 2;

