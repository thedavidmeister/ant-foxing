// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('coinmarketcap.ticker.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('coinmarketcap.ticker.api');
goog.require('cuerdas.core');
goog.require('spectre.hoplon');
coinmarketcap.ticker.hoplon.table = (function coinmarketcap$ticker$hoplon$table(ticker){
var ticker__$1 = (function (){var fexpr__31103 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31101,G__31102){
return (G__31101.cljs$core$IFn$_invoke$arity$1 ? G__31101.cljs$core$IFn$_invoke$arity$1(G__31102) : G__31101.call(null,G__31102));
}));
return (fexpr__31103.cljs$core$IFn$_invoke$arity$2 ? fexpr__31103.cljs$core$IFn$_invoke$arity$2(coinmarketcap.ticker.data.ticker_seq_or_nil,ticker) : fexpr__31103.call(null,coinmarketcap.ticker.data.ticker_seq_or_nil,ticker));
})();
var ks = (function (){var fexpr__31108 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (ticker__$1){
return (function (G__31105,G__31106,G__31104){
var G__31109 = (G__31105.cljs$core$IFn$_invoke$arity$1 ? G__31105.cljs$core$IFn$_invoke$arity$1(G__31106) : G__31105.call(null,G__31106));
return (G__31104.cljs$core$IFn$_invoke$arity$1 ? G__31104.cljs$core$IFn$_invoke$arity$1(G__31109) : G__31104.call(null,G__31109));
});})(ticker__$1))
);
return (fexpr__31108.cljs$core$IFn$_invoke$arity$3 ? fexpr__31108.cljs$core$IFn$_invoke$arity$3(cljs.core.first,ticker__$1,cljs.core.keys) : fexpr__31108.call(null,cljs.core.first,ticker__$1,cljs.core.keys));
})();
var G__31110 = (function (){var G__31114 = (new cljs.core.Delay(((function (ticker__$1,ks){
return (function (){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("No results (probably still loading)") : hoplon.core.div.call(null,"No results (probably still loading)"));
});})(ticker__$1,ks))
,null));
var G__31115 = (new cljs.core.Delay(((function (G__31114,ticker__$1,ks){
return (function (){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("No results (probably an error)") : hoplon.core.div.call(null,"No results (probably an error)"));
});})(G__31114,ticker__$1,ks))
,null));
var G__31116 = (new cljs.core.Delay(((function (G__31114,G__31115,ticker__$1,ks){
return (function (){
return spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31117 = hoplon.core.loop_tpl_STAR_(ks,((function (G__31114,G__31115,ticker__$1,ks){
return (function (item__15485__auto__){
var vec__31118 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31121 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31114,G__31115,ticker__$1,ks){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(G__31114,G__31115,ticker__$1,ks))
);
return (fexpr__31121.cljs$core$IFn$_invoke$arity$1 ? fexpr__31121.cljs$core$IFn$_invoke$arity$1(item__15485__auto__) : fexpr__31121.call(null,item__15485__auto__));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31118,(0),null);
var G__31122 = (function (){var fexpr__31127 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31118,k,G__31114,G__31115,ticker__$1,ks){
return (function (G__31124,G__31125,G__31123){
var G__31128 = (G__31124.cljs$core$IFn$_invoke$arity$1 ? G__31124.cljs$core$IFn$_invoke$arity$1(G__31125) : G__31124.call(null,G__31125));
return (G__31123.cljs$core$IFn$_invoke$arity$1 ? G__31123.cljs$core$IFn$_invoke$arity$1(G__31128) : G__31123.call(null,G__31128));
});})(vec__31118,k,G__31114,G__31115,ticker__$1,ks))
);
return (fexpr__31127.cljs$core$IFn$_invoke$arity$3 ? fexpr__31127.cljs$core$IFn$_invoke$arity$3(cuerdas.core.human,k,clojure.string.capitalize) : fexpr__31127.call(null,cuerdas.core.human,k,clojure.string.capitalize));
})();
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(G__31122) : hoplon.core.th.call(null,G__31122));
});})(G__31114,G__31115,ticker__$1,ks))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__31117) : hoplon.core.tr.call(null,G__31117));
})(),hoplon.core.loop_tpl_STAR_(ticker__$1,((function (G__31114,G__31115,ticker__$1,ks){
return (function (item__15485__auto__){
var vec__31129 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31132 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31114,G__31115,ticker__$1,ks){
return (function (t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
});})(G__31114,G__31115,ticker__$1,ks))
);
return (fexpr__31132.cljs$core$IFn$_invoke$arity$1 ? fexpr__31132.cljs$core$IFn$_invoke$arity$1(item__15485__auto__) : fexpr__31132.call(null,item__15485__auto__));
})());
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31129,(0),null);
var G__31133 = hoplon.core.loop_tpl_STAR_(ks,((function (vec__31129,t,G__31114,G__31115,ticker__$1,ks){
return (function (item__15485__auto____$1){
var vec__31134 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31137 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31129,t,G__31114,G__31115,ticker__$1,ks){
return (function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
});})(vec__31129,t,G__31114,G__31115,ticker__$1,ks))
);
return (fexpr__31137.cljs$core$IFn$_invoke$arity$1 ? fexpr__31137.cljs$core$IFn$_invoke$arity$1(item__15485__auto____$1) : fexpr__31137.call(null,item__15485__auto____$1));
})());
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31134,(0),null);
var G__31138 = (function (){var fexpr__31142 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31134,k,vec__31129,t,G__31114,G__31115,ticker__$1,ks){
return (function (G__31140,G__31139,G__31141){
return (G__31139.cljs$core$IFn$_invoke$arity$2 ? G__31139.cljs$core$IFn$_invoke$arity$2(G__31140,G__31141) : G__31139.call(null,G__31140,G__31141));
});})(vec__31134,k,vec__31129,t,G__31114,G__31115,ticker__$1,ks))
);
return (fexpr__31142.cljs$core$IFn$_invoke$arity$3 ? fexpr__31142.cljs$core$IFn$_invoke$arity$3(t,cljs.core.get,k) : fexpr__31142.call(null,t,cljs.core.get,k));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31138) : hoplon.core.td.call(null,G__31138));
});})(vec__31129,t,G__31114,G__31115,ticker__$1,ks))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__31133) : hoplon.core.tr.call(null,G__31133));
});})(G__31114,G__31115,ticker__$1,ks))
)], 0));
});})(G__31114,G__31115,ticker__$1,ks))
,null));
var tpl__15513__auto__ = ((function (G__31114,G__31115,G__31116,ticker__$1,ks){
return (function (G__31111,G__31112,G__31113){
return cljs.core.deref((function (){var or__8762__auto__ = (cljs.core.truth_(G__31111)?G__31114:(cljs.core.truth_(G__31112)?G__31115:(cljs.core.truth_(G__31113)?G__31116:null)));
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.atom();
}
})());
});})(G__31114,G__31115,G__31116,ticker__$1,ks))
;
var G__31144 = (function (){var fexpr__31151 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks){
return (function (G__31147,G__31148){
var G__31152 = cljs.core.PersistentVector.EMPTY;
var G__31153 = G__31148;
return (G__31147.cljs$core$IFn$_invoke$arity$2 ? G__31147.cljs$core$IFn$_invoke$arity$2(G__31152,G__31153) : G__31147.call(null,G__31152,G__31153));
});})(G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks))
);
return (fexpr__31151.cljs$core$IFn$_invoke$arity$2 ? fexpr__31151.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,ticker__$1) : fexpr__31151.call(null,cljs.core._EQ_,ticker__$1));
})();
var G__31145 = (function (){var fexpr__31156 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31144,G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks){
return (function (G__31155,G__31154){
return (G__31154.cljs$core$IFn$_invoke$arity$1 ? G__31154.cljs$core$IFn$_invoke$arity$1(G__31155) : G__31154.call(null,G__31155));
});})(G__31144,G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks))
);
return (fexpr__31156.cljs$core$IFn$_invoke$arity$2 ? fexpr__31156.cljs$core$IFn$_invoke$arity$2(ticker__$1,cljs.core.not) : fexpr__31156.call(null,ticker__$1,cljs.core.not));
})();
var G__31146 = (function (){var fexpr__31157 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31144,G__31145,G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks){
return (function (){
return cljs.core.cst$kw$else;
});})(G__31144,G__31145,G__31114,G__31115,G__31116,tpl__15513__auto__,ticker__$1,ks))
);
return (fexpr__31157.cljs$core$IFn$_invoke$arity$0 ? fexpr__31157.cljs$core$IFn$_invoke$arity$0() : fexpr__31157.call(null));
})();
var fexpr__31143 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__15513__auto__);
return (fexpr__31143.cljs$core$IFn$_invoke$arity$3 ? fexpr__31143.cljs$core$IFn$_invoke$arity$3(G__31144,G__31145,G__31146) : fexpr__31143.call(null,G__31144,G__31145,G__31146));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31110) : hoplon.core.div.call(null,G__31110));
});
coinmarketcap.ticker.hoplon.page = (function coinmarketcap$ticker$hoplon$page(conn,ticker){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Ticker") : hoplon.core.h1.call(null,"Ticker")),spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Raw data from coinmarketcap.com sorted by market cap desc.") : hoplon.core.h2.call(null,"Raw data from coinmarketcap.com sorted by market cap desc.")),coinmarketcap.ticker.hoplon.table((function (){var fexpr__31160 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31158,G__31159){
return (G__31158.cljs$core$IFn$_invoke$arity$1 ? G__31158.cljs$core$IFn$_invoke$arity$1(G__31159) : G__31158.call(null,G__31159));
}));
return (fexpr__31160.cljs$core$IFn$_invoke$arity$2 ? fexpr__31160.cljs$core$IFn$_invoke$arity$2(coinmarketcap.ticker.api.sort_by_cap,ticker) : fexpr__31160.call(null,coinmarketcap.ticker.api.sort_by_cap,ticker));
})())], 0))], 0));
});
