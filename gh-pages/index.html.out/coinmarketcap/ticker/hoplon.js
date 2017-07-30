// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('coinmarketcap.ticker.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('coinmarketcap.ticker.api');
goog.require('cuerdas.core');
goog.require('spectre.hoplon');
coinmarketcap.ticker.hoplon.table = (function coinmarketcap$ticker$hoplon$table(ticker){
var ticker__$1 = (function (){var fexpr__30029 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30027,G__30028){
return (G__30027.cljs$core$IFn$_invoke$arity$1 ? G__30027.cljs$core$IFn$_invoke$arity$1(G__30028) : G__30027.call(null,G__30028));
}));
return (fexpr__30029.cljs$core$IFn$_invoke$arity$2 ? fexpr__30029.cljs$core$IFn$_invoke$arity$2(coinmarketcap.ticker.data.ticker_seq_or_nil,ticker) : fexpr__30029.call(null,coinmarketcap.ticker.data.ticker_seq_or_nil,ticker));
})();
var ks = (function (){var fexpr__30034 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (ticker__$1){
return (function (G__30031,G__30032,G__30030){
var G__30035 = (G__30031.cljs$core$IFn$_invoke$arity$1 ? G__30031.cljs$core$IFn$_invoke$arity$1(G__30032) : G__30031.call(null,G__30032));
return (G__30030.cljs$core$IFn$_invoke$arity$1 ? G__30030.cljs$core$IFn$_invoke$arity$1(G__30035) : G__30030.call(null,G__30035));
});})(ticker__$1))
);
return (fexpr__30034.cljs$core$IFn$_invoke$arity$3 ? fexpr__30034.cljs$core$IFn$_invoke$arity$3(cljs.core.first,ticker__$1,cljs.core.keys) : fexpr__30034.call(null,cljs.core.first,ticker__$1,cljs.core.keys));
})();
var G__30036 = (function (){var G__30040 = (new cljs.core.Delay(((function (ticker__$1,ks){
return (function (){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("No results (probably still loading)") : hoplon.core.div.call(null,"No results (probably still loading)"));
});})(ticker__$1,ks))
,null));
var G__30041 = (new cljs.core.Delay(((function (G__30040,ticker__$1,ks){
return (function (){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("No results (probably an error)") : hoplon.core.div.call(null,"No results (probably an error)"));
});})(G__30040,ticker__$1,ks))
,null));
var G__30042 = (new cljs.core.Delay(((function (G__30040,G__30041,ticker__$1,ks){
return (function (){
return spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30043 = hoplon.core.loop_tpl_STAR_(ks,((function (G__30040,G__30041,ticker__$1,ks){
return (function (item__14007__auto__){
var vec__30044 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30047 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30040,G__30041,ticker__$1,ks){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(G__30040,G__30041,ticker__$1,ks))
);
return (fexpr__30047.cljs$core$IFn$_invoke$arity$1 ? fexpr__30047.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30047.call(null,item__14007__auto__));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30044,(0),null);
var G__30048 = (function (){var fexpr__30053 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30044,k,G__30040,G__30041,ticker__$1,ks){
return (function (G__30050,G__30051,G__30049){
var G__30054 = (G__30050.cljs$core$IFn$_invoke$arity$1 ? G__30050.cljs$core$IFn$_invoke$arity$1(G__30051) : G__30050.call(null,G__30051));
return (G__30049.cljs$core$IFn$_invoke$arity$1 ? G__30049.cljs$core$IFn$_invoke$arity$1(G__30054) : G__30049.call(null,G__30054));
});})(vec__30044,k,G__30040,G__30041,ticker__$1,ks))
);
return (fexpr__30053.cljs$core$IFn$_invoke$arity$3 ? fexpr__30053.cljs$core$IFn$_invoke$arity$3(cuerdas.core.human,k,clojure.string.capitalize) : fexpr__30053.call(null,cuerdas.core.human,k,clojure.string.capitalize));
})();
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(G__30048) : hoplon.core.th.call(null,G__30048));
});})(G__30040,G__30041,ticker__$1,ks))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__30043) : hoplon.core.tr.call(null,G__30043));
})(),hoplon.core.loop_tpl_STAR_(ticker__$1,((function (G__30040,G__30041,ticker__$1,ks){
return (function (item__14007__auto__){
var vec__30055 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30058 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30040,G__30041,ticker__$1,ks){
return (function (t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
});})(G__30040,G__30041,ticker__$1,ks))
);
return (fexpr__30058.cljs$core$IFn$_invoke$arity$1 ? fexpr__30058.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30058.call(null,item__14007__auto__));
})());
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30055,(0),null);
var G__30059 = hoplon.core.loop_tpl_STAR_(ks,((function (vec__30055,t,G__30040,G__30041,ticker__$1,ks){
return (function (item__14007__auto____$1){
var vec__30060 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30063 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30055,t,G__30040,G__30041,ticker__$1,ks){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(vec__30055,t,G__30040,G__30041,ticker__$1,ks))
);
return (fexpr__30063.cljs$core$IFn$_invoke$arity$1 ? fexpr__30063.cljs$core$IFn$_invoke$arity$1(item__14007__auto____$1) : fexpr__30063.call(null,item__14007__auto____$1));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var G__30064 = (function (){var fexpr__30068 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30060,k,vec__30055,t,G__30040,G__30041,ticker__$1,ks){
return (function (G__30066,G__30065,G__30067){
return (G__30065.cljs$core$IFn$_invoke$arity$2 ? G__30065.cljs$core$IFn$_invoke$arity$2(G__30066,G__30067) : G__30065.call(null,G__30066,G__30067));
});})(vec__30060,k,vec__30055,t,G__30040,G__30041,ticker__$1,ks))
);
return (fexpr__30068.cljs$core$IFn$_invoke$arity$3 ? fexpr__30068.cljs$core$IFn$_invoke$arity$3(t,cljs.core.get,k) : fexpr__30068.call(null,t,cljs.core.get,k));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30064) : hoplon.core.td.call(null,G__30064));
});})(vec__30055,t,G__30040,G__30041,ticker__$1,ks))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__30059) : hoplon.core.tr.call(null,G__30059));
});})(G__30040,G__30041,ticker__$1,ks))
)], 0));
});})(G__30040,G__30041,ticker__$1,ks))
,null));
var tpl__14035__auto__ = ((function (G__30040,G__30041,G__30042,ticker__$1,ks){
return (function (G__30037,G__30038,G__30039){
return cljs.core.deref((function (){var or__8099__auto__ = (cljs.core.truth_(G__30037)?G__30040:(cljs.core.truth_(G__30038)?G__30041:(cljs.core.truth_(G__30039)?G__30042:null)));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.atom();
}
})());
});})(G__30040,G__30041,G__30042,ticker__$1,ks))
;
var G__30070 = (function (){var fexpr__30077 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks){
return (function (G__30073,G__30074){
var G__30078 = cljs.core.PersistentVector.EMPTY;
var G__30079 = G__30074;
return (G__30073.cljs$core$IFn$_invoke$arity$2 ? G__30073.cljs$core$IFn$_invoke$arity$2(G__30078,G__30079) : G__30073.call(null,G__30078,G__30079));
});})(G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks))
);
return (fexpr__30077.cljs$core$IFn$_invoke$arity$2 ? fexpr__30077.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,ticker__$1) : fexpr__30077.call(null,cljs.core._EQ_,ticker__$1));
})();
var G__30071 = (function (){var fexpr__30082 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30070,G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks){
return (function (G__30081,G__30080){
return (G__30080.cljs$core$IFn$_invoke$arity$1 ? G__30080.cljs$core$IFn$_invoke$arity$1(G__30081) : G__30080.call(null,G__30081));
});})(G__30070,G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks))
);
return (fexpr__30082.cljs$core$IFn$_invoke$arity$2 ? fexpr__30082.cljs$core$IFn$_invoke$arity$2(ticker__$1,cljs.core.not) : fexpr__30082.call(null,ticker__$1,cljs.core.not));
})();
var G__30072 = (function (){var fexpr__30083 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30070,G__30071,G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks){
return (function (){
return cljs.core.cst$kw$else;
});})(G__30070,G__30071,G__30040,G__30041,G__30042,tpl__14035__auto__,ticker__$1,ks))
);
return (fexpr__30083.cljs$core$IFn$_invoke$arity$0 ? fexpr__30083.cljs$core$IFn$_invoke$arity$0() : fexpr__30083.call(null));
})();
var fexpr__30069 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14035__auto__);
return (fexpr__30069.cljs$core$IFn$_invoke$arity$3 ? fexpr__30069.cljs$core$IFn$_invoke$arity$3(G__30070,G__30071,G__30072) : fexpr__30069.call(null,G__30070,G__30071,G__30072));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__30036) : hoplon.core.div.call(null,G__30036));
});
coinmarketcap.ticker.hoplon.page = (function coinmarketcap$ticker$hoplon$page(conn,ticker){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Ticker") : hoplon.core.h1.call(null,"Ticker")),spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Raw data from coinmarketcap.com sorted by market cap desc.") : hoplon.core.h2.call(null,"Raw data from coinmarketcap.com sorted by market cap desc.")),coinmarketcap.ticker.hoplon.table((function (){var fexpr__30086 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30084,G__30085){
return (G__30084.cljs$core$IFn$_invoke$arity$1 ? G__30084.cljs$core$IFn$_invoke$arity$1(G__30085) : G__30084.call(null,G__30085));
}));
return (fexpr__30086.cljs$core$IFn$_invoke$arity$2 ? fexpr__30086.cljs$core$IFn$_invoke$arity$2(coinmarketcap.ticker.api.sort_by_cap,ticker) : fexpr__30086.call(null,coinmarketcap.ticker.api.sort_by_cap,ticker));
})())], 0))], 0));
});
