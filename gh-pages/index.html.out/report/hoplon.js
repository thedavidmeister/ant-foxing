// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('report.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('tier.api');
goog.require('currency.api');
goog.require('instructions.hoplon');
goog.require('currency.data');
goog.require('report.api');
goog.require('spectre.hoplon');
goog.require('coinmarketcap.ticker.api');
report.hoplon.diff = (function report$hoplon$diff(n){
var G__29855 = cljs.core.cst$kw$css;
var G__29856 = (function (){var fexpr__29859 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__29855){
return (function (G__29858){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(((0) < G__29858))?"green":(cljs.core.truth_(((0) > G__29858))?"red":"black"
))], null);
});})(G__29855))
);
return (fexpr__29859.cljs$core$IFn$_invoke$arity$1 ? fexpr__29859.cljs$core$IFn$_invoke$arity$1(n) : fexpr__29859.call(null,n));
})();
var G__29857 = (function (){var fexpr__29861 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__29855,G__29856){
return (function (G__29860){
if(cljs.core.truth_(((0) < G__29860))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29860)].join('');
} else {
return G__29860;
}
});})(G__29855,G__29856))
);
return (fexpr__29861.cljs$core$IFn$_invoke$arity$1 ? fexpr__29861.cljs$core$IFn$_invoke$arity$1(n) : fexpr__29861.call(null,n));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__29855,G__29856,G__29857) : hoplon.core.strong.call(null,G__29855,G__29856,G__29857));
});
report.hoplon.tier_report = (function report$hoplon$tier_report(conn,tier__$1,ticker,all_currencies,tier_currencies){
var total_valuation = (function (){var fexpr__29865 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__29864,G__29863,G__29862){
return (G__29862.cljs$core$IFn$_invoke$arity$2 ? G__29862.cljs$core$IFn$_invoke$arity$2(G__29863,G__29864) : G__29862.call(null,G__29863,G__29864));
}));
return (fexpr__29865.cljs$core$IFn$_invoke$arity$3 ? fexpr__29865.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_valuation) : fexpr__29865.call(null,all_currencies,ticker,report.api.__GT_total_valuation));
})();
var tier_cap = (function (){var fexpr__29869 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation){
return (function (G__29868,G__29867,G__29866){
return (G__29866.cljs$core$IFn$_invoke$arity$2 ? G__29866.cljs$core$IFn$_invoke$arity$2(G__29867,G__29868) : G__29866.call(null,G__29867,G__29868));
});})(total_valuation))
);
return (fexpr__29869.cljs$core$IFn$_invoke$arity$3 ? fexpr__29869.cljs$core$IFn$_invoke$arity$3(tier_currencies,ticker,report.api.__GT_total_cap) : fexpr__29869.call(null,tier_currencies,ticker,report.api.__GT_total_cap));
})();
var tier_valuation = (function (){var fexpr__29873 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap){
return (function (G__29872,G__29871,G__29870){
return (G__29870.cljs$core$IFn$_invoke$arity$2 ? G__29870.cljs$core$IFn$_invoke$arity$2(G__29871,G__29872) : G__29870.call(null,G__29871,G__29872));
});})(total_valuation,tier_cap))
);
return (fexpr__29873.cljs$core$IFn$_invoke$arity$3 ? fexpr__29873.cljs$core$IFn$_invoke$arity$3(tier_currencies,ticker,report.api.__GT_total_valuation) : fexpr__29873.call(null,tier_currencies,ticker,report.api.__GT_total_valuation));
})();
var tier_target_ratio = (function (){var fexpr__29877 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation){
return (function (G__29875,G__29876,G__29874){
return (G__29874.cljs$core$IFn$_invoke$arity$2 ? G__29874.cljs$core$IFn$_invoke$arity$2(G__29875,G__29876) : G__29874.call(null,G__29875,G__29876));
});})(total_valuation,tier_cap,tier_valuation))
);
return (fexpr__29877.cljs$core$IFn$_invoke$arity$3 ? fexpr__29877.cljs$core$IFn$_invoke$arity$3(conn,tier__$1,tier.api.tier_target) : fexpr__29877.call(null,conn,tier__$1,tier.api.tier_target));
})();
var tier_target_valuation = (function (){var fexpr__29880 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio){
return (function (G__29878,G__29879){
return ((G__29878 * G__29879) | (0));
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio))
);
return (fexpr__29880.cljs$core$IFn$_invoke$arity$2 ? fexpr__29880.cljs$core$IFn$_invoke$arity$2(total_valuation,tier_target_ratio) : fexpr__29880.call(null,total_valuation,tier_target_ratio));
})();
var tier_valuation_diff = (function (){var fexpr__29883 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation){
return (function (G__29881,G__29882){
return (G__29881 - G__29882);
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation))
);
return (fexpr__29883.cljs$core$IFn$_invoke$arity$2 ? fexpr__29883.cljs$core$IFn$_invoke$arity$2(tier_target_valuation,tier_valuation) : fexpr__29883.call(null,tier_target_valuation,tier_valuation));
})();
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29884 = (function (){var fexpr__29886 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29885){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tier "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29885)].join('');
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29886.cljs$core$IFn$_invoke$arity$1 ? fexpr__29886.cljs$core$IFn$_invoke$arity$1(tier__$1) : fexpr__29886.call(null,tier__$1));
})();
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(G__29884) : hoplon.core.h2.call(null,G__29884));
})(),(hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("Aggregate report") : hoplon.core.h3.call(null,"Aggregate report")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29887 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Tier market cap") : hoplon.core.th.call(null,"Tier market cap"));
var G__29888 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Tier valuation") : hoplon.core.th.call(null,"Tier valuation"));
var G__29889 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target ratio") : hoplon.core.th.call(null,"Target ratio"));
var G__29890 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation") : hoplon.core.th.call(null,"Target valuation"));
var G__29891 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Valuation diff") : hoplon.core.th.call(null,"Valuation diff"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__29887,G__29888,G__29889,G__29890,G__29891) : hoplon.core.tr.call(null,G__29887,G__29888,G__29889,G__29890,G__29891));
})(),(function (){var G__29892 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_cap) : hoplon.core.td.call(null,tier_cap));
var G__29893 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_valuation) : hoplon.core.td.call(null,tier_valuation));
var G__29894 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_target_ratio) : hoplon.core.td.call(null,tier_target_ratio));
var G__29895 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_target_valuation) : hoplon.core.td.call(null,tier_target_valuation));
var G__29896 = (function (){var G__29897 = report.hoplon.diff(tier_valuation_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__29897) : hoplon.core.td.call(null,G__29897));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__29892,G__29893,G__29894,G__29895,G__29896) : hoplon.core.tr.call(null,G__29892,G__29893,G__29894,G__29895,G__29896));
})()], 0)),(hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("Hodlings info") : hoplon.core.h3.call(null,"Hodlings info")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29898 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Name") : hoplon.core.th.call(null,"Name"));
var G__29899 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Rank") : hoplon.core.th.call(null,"Rank"));
var G__29900 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Price USD") : hoplon.core.th.call(null,"Price USD"));
var G__29901 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Market cap") : hoplon.core.th.call(null,"Market cap"));
var G__29902 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Ratio of tier cap") : hoplon.core.th.call(null,"Ratio of tier cap"));
var G__29903 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Current hodlings") : hoplon.core.th.call(null,"Current hodlings"));
var G__29904 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Current valuation (USD)") : hoplon.core.th.call(null,"Current valuation (USD)"));
var G__29905 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Ratio of tier valuation") : hoplon.core.th.call(null,"Ratio of tier valuation"));
var G__29906 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation") : hoplon.core.th.call(null,"Target valuation"));
var G__29907 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation diff (USD)") : hoplon.core.th.call(null,"Target valuation diff (USD)"));
var G__29908 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target hodling diff") : hoplon.core.th.call(null,"Target hodling diff"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$11(G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,G__29904,G__29905,G__29906,G__29907,G__29908) : hoplon.core.tr.call(null,G__29898,G__29899,G__29900,G__29901,G__29902,G__29903,G__29904,G__29905,G__29906,G__29907,G__29908));
})(),hoplon.core.loop_tpl_STAR_(tier_currencies,((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (item__14007__auto__){
var vec__29909 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__29912 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (currency__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency__$1], null);
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29912.cljs$core$IFn$_invoke$arity$1 ? fexpr__29912.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__29912.call(null,item__14007__auto__));
})());
var currency__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(0),null);
var currency_ticker = (function (){var fexpr__29916 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29914,G__29915,G__29913){
return (G__29913.cljs$core$IFn$_invoke$arity$2 ? G__29913.cljs$core$IFn$_invoke$arity$2(G__29914,G__29915) : G__29913.call(null,G__29914,G__29915));
});})(vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29916.cljs$core$IFn$_invoke$arity$3 ? fexpr__29916.cljs$core$IFn$_invoke$arity$3(ticker,currency__$1,report.data.__GT_currency_ticker) : fexpr__29916.call(null,ticker,currency__$1,report.data.__GT_currency_ticker));
})();
var currency_name = (function (){var fexpr__29919 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29917,G__29918){
return (G__29917.cljs$core$IFn$_invoke$arity$2 ? G__29917.cljs$core$IFn$_invoke$arity$2(G__29918,"name") : G__29917.call(null,G__29918,"name"));
});})(currency_ticker,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29919.cljs$core$IFn$_invoke$arity$2 ? fexpr__29919.cljs$core$IFn$_invoke$arity$2(cljs.core.get,currency_ticker) : fexpr__29919.call(null,cljs.core.get,currency_ticker));
})();
var rank = (function (){var fexpr__29922 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29920,G__29921){
return (G__29920.cljs$core$IFn$_invoke$arity$2 ? G__29920.cljs$core$IFn$_invoke$arity$2(G__29921,"rank") : G__29920.call(null,G__29921,"rank"));
});})(currency_ticker,currency_name,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29922.cljs$core$IFn$_invoke$arity$2 ? fexpr__29922.cljs$core$IFn$_invoke$arity$2(cljs.core.get,currency_ticker) : fexpr__29922.call(null,cljs.core.get,currency_ticker));
})();
var price_usd = (function (){var fexpr__29926 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29924,G__29923,G__29925){
return (G__29923.cljs$core$IFn$_invoke$arity$2 ? G__29923.cljs$core$IFn$_invoke$arity$2(G__29924,G__29925) : G__29923.call(null,G__29924,G__29925));
});})(currency_ticker,currency_name,rank,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29926.cljs$core$IFn$_invoke$arity$3 ? fexpr__29926.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_price_usd,currency__$1) : fexpr__29926.call(null,currency_ticker,report.api.__GT_price_usd,currency__$1));
})();
var cap = (function (){var fexpr__29930 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29928,G__29927,G__29929){
return (G__29927.cljs$core$IFn$_invoke$arity$2 ? G__29927.cljs$core$IFn$_invoke$arity$2(G__29928,G__29929) : G__29927.call(null,G__29928,G__29929));
});})(currency_ticker,currency_name,rank,price_usd,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29930.cljs$core$IFn$_invoke$arity$3 ? fexpr__29930.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_cap,currency__$1) : fexpr__29930.call(null,currency_ticker,report.api.__GT_cap,currency__$1));
})();
var cap_ratio = (function (){var fexpr__29935 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29933,G__29931,G__29932,G__29934){
return (G__29931.cljs$core$IFn$_invoke$arity$3 ? G__29931.cljs$core$IFn$_invoke$arity$3(G__29932,G__29933,G__29934) : G__29931.call(null,G__29932,G__29933,G__29934));
});})(currency_ticker,currency_name,rank,price_usd,cap,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29935.cljs$core$IFn$_invoke$arity$4 ? fexpr__29935.cljs$core$IFn$_invoke$arity$4(tier_currencies,report.api.__GT_cap_ratio,ticker,currency__$1) : fexpr__29935.call(null,tier_currencies,report.api.__GT_cap_ratio,ticker,currency__$1));
})();
var hodling = (function (){var fexpr__29939 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29936,G__29937,G__29938){
return (G__29936.cljs$core$IFn$_invoke$arity$2 ? G__29936.cljs$core$IFn$_invoke$arity$2(G__29937,G__29938) : G__29936.call(null,G__29937,G__29938));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29939.cljs$core$IFn$_invoke$arity$3 ? fexpr__29939.cljs$core$IFn$_invoke$arity$3(report.api.__GT_hodling,currency_ticker,currency__$1) : fexpr__29939.call(null,report.api.__GT_hodling,currency_ticker,currency__$1));
})();
var valuation = (function (){var fexpr__29943 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29941,G__29940,G__29942){
return (G__29940.cljs$core$IFn$_invoke$arity$2 ? G__29940.cljs$core$IFn$_invoke$arity$2(G__29941,G__29942) : G__29940.call(null,G__29941,G__29942));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29943.cljs$core$IFn$_invoke$arity$3 ? fexpr__29943.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_valuation,currency__$1) : fexpr__29943.call(null,currency_ticker,report.api.__GT_valuation,currency__$1));
})();
var valuation_ratio = (function (){var fexpr__29948 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29946,G__29944,G__29945,G__29947){
return (G__29944.cljs$core$IFn$_invoke$arity$3 ? G__29944.cljs$core$IFn$_invoke$arity$3(G__29945,G__29946,G__29947) : G__29944.call(null,G__29945,G__29946,G__29947));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29948.cljs$core$IFn$_invoke$arity$4 ? fexpr__29948.cljs$core$IFn$_invoke$arity$4(tier_currencies,report.api.__GT_valuation_ratio,ticker,currency__$1) : fexpr__29948.call(null,tier_currencies,report.api.__GT_valuation_ratio,ticker,currency__$1));
})();
var valuation_target = (function (){var fexpr__29951 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29950,G__29949){
return ((G__29949 * G__29950) | (0));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29951.cljs$core$IFn$_invoke$arity$2 ? fexpr__29951.cljs$core$IFn$_invoke$arity$2(tier_target_valuation,cap_ratio) : fexpr__29951.call(null,tier_target_valuation,cap_ratio));
})();
var valuation_target_diff = (function (){var fexpr__29954 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29952,G__29953){
return (G__29952 - G__29953);
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29954.cljs$core$IFn$_invoke$arity$2 ? fexpr__29954.cljs$core$IFn$_invoke$arity$2(valuation_target,valuation) : fexpr__29954.call(null,valuation_target,valuation));
})();
var hodling_target_diff = (function (){var fexpr__29961 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,valuation_target_diff,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__29955,G__29956,G__29958,G__29957,G__29959){
var G__29962 = (G__29956 / (G__29957.cljs$core$IFn$_invoke$arity$2 ? G__29957.cljs$core$IFn$_invoke$arity$2(G__29958,G__29959) : G__29957.call(null,G__29958,G__29959)));
return (G__29955.cljs$core$IFn$_invoke$arity$1 ? G__29955.cljs$core$IFn$_invoke$arity$1(G__29962) : G__29955.call(null,G__29962));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,valuation_target_diff,vec__29909,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__29961.cljs$core$IFn$_invoke$arity$5 ? fexpr__29961.cljs$core$IFn$_invoke$arity$5(report.data.simple_number,valuation_target_diff,currency_ticker,report.api.__GT_price_usd,currency__$1) : fexpr__29961.call(null,report.data.simple_number,valuation_target_diff,currency_ticker,report.api.__GT_price_usd,currency__$1));
})();
var G__29963 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(currency_name) : hoplon.core.td.call(null,currency_name));
var G__29964 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(rank) : hoplon.core.td.call(null,rank));
var G__29965 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(price_usd) : hoplon.core.td.call(null,price_usd));
var G__29966 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(cap) : hoplon.core.td.call(null,cap));
var G__29967 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(cap_ratio) : hoplon.core.td.call(null,cap_ratio));
var G__29968 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(hodling) : hoplon.core.td.call(null,hodling));
var G__29969 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation) : hoplon.core.td.call(null,valuation));
var G__29970 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation_ratio) : hoplon.core.td.call(null,valuation_ratio));
var G__29971 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation_target) : hoplon.core.td.call(null,valuation_target));
var G__29972 = (function (){var G__29974 = report.hoplon.diff(valuation_target_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__29974) : hoplon.core.td.call(null,G__29974));
})();
var G__29973 = (function (){var G__29975 = report.hoplon.diff(hodling_target_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__29975) : hoplon.core.td.call(null,G__29975));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$11(G__29963,G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973) : hoplon.core.tr.call(null,G__29963,G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973));
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
)], 0))], 0));
});
report.hoplon.portfolio_report = (function report$hoplon$portfolio_report(ticker,all_currencies){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Portfolio totals") : hoplon.core.h2.call(null,"Portfolio totals")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29976 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Market cap") : hoplon.core.th.call(null,"Market cap"));
var G__29977 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Portfolio valuation") : hoplon.core.th.call(null,"Portfolio valuation"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__29976,G__29977) : hoplon.core.tr.call(null,G__29976,G__29977));
})(),(function (){var G__29978 = (function (){var G__29980 = (function (){var fexpr__29984 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__29983,G__29982,G__29981){
return (G__29981.cljs$core$IFn$_invoke$arity$2 ? G__29981.cljs$core$IFn$_invoke$arity$2(G__29982,G__29983) : G__29981.call(null,G__29982,G__29983));
}));
return (fexpr__29984.cljs$core$IFn$_invoke$arity$3 ? fexpr__29984.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_cap) : fexpr__29984.call(null,all_currencies,ticker,report.api.__GT_total_cap));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__29980) : hoplon.core.td.call(null,G__29980));
})();
var G__29979 = (function (){var G__29985 = (function (){var fexpr__29989 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__29978){
return (function (G__29988,G__29987,G__29986){
return (G__29986.cljs$core$IFn$_invoke$arity$2 ? G__29986.cljs$core$IFn$_invoke$arity$2(G__29987,G__29988) : G__29986.call(null,G__29987,G__29988));
});})(G__29978))
);
return (fexpr__29989.cljs$core$IFn$_invoke$arity$3 ? fexpr__29989.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_valuation) : fexpr__29989.call(null,all_currencies,ticker,report.api.__GT_total_valuation));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__29985) : hoplon.core.td.call(null,G__29985));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__29978,G__29979) : hoplon.core.tr.call(null,G__29978,G__29979));
})()], 0))], 0));
});
report.hoplon.page = (function report$hoplon$page(conn,ticker){
var tiers = (function (){var fexpr__29992 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__29991,G__29990){
return (G__29990.cljs$core$IFn$_invoke$arity$1 ? G__29990.cljs$core$IFn$_invoke$arity$1(G__29991) : G__29990.call(null,G__29991));
}));
return (fexpr__29992.cljs$core$IFn$_invoke$arity$2 ? fexpr__29992.cljs$core$IFn$_invoke$arity$2(conn,tier.api.db__GT_tiers) : fexpr__29992.call(null,conn,tier.api.db__GT_tiers));
})();
var all_currencies = (function (){var fexpr__29995 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (tiers){
return (function (G__29994,G__29993){
return (G__29993.cljs$core$IFn$_invoke$arity$1 ? G__29993.cljs$core$IFn$_invoke$arity$1(G__29994) : G__29993.call(null,G__29994));
});})(tiers))
);
return (fexpr__29995.cljs$core$IFn$_invoke$arity$2 ? fexpr__29995.cljs$core$IFn$_invoke$arity$2(conn,currency.api.db__GT_currencies) : fexpr__29995.call(null,conn,currency.api.db__GT_currencies));
})();
var error_QMARK_ = (function (){var fexpr__30000 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (tiers,all_currencies){
return (function (G__29998,G__29996,G__29997){
var G__30001 = (G__29997.cljs$core$IFn$_invoke$arity$1 ? G__29997.cljs$core$IFn$_invoke$arity$1(G__29998) : G__29997.call(null,G__29998));
return (G__29996.cljs$core$IFn$_invoke$arity$1 ? G__29996.cljs$core$IFn$_invoke$arity$1(G__30001) : G__29996.call(null,G__30001));
});})(tiers,all_currencies))
);
return (fexpr__30000.cljs$core$IFn$_invoke$arity$3 ? fexpr__30000.cljs$core$IFn$_invoke$arity$3(tiers,cljs.core.not,tier.api.tiers_incremental_QMARK_) : fexpr__30000.call(null,tiers,cljs.core.not,tier.api.tiers_incremental_QMARK_));
})();
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Report") : hoplon.core.h1.call(null,"Report")),report.hoplon.portfolio_report(ticker,all_currencies),(function (){var con__14017__auto__ = (new cljs.core.Delay(((function (tiers,all_currencies,error_QMARK_){
return (function (){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instructions.hoplon.warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The tiers must increment by 1"], 0))], 0));
});})(tiers,all_currencies,error_QMARK_))
,null));
var alt__14018__auto__ = (new cljs.core.Delay(((function (con__14017__auto__,tiers,all_currencies,error_QMARK_){
return (function (){
var G__30002 = hoplon.core.loop_tpl_STAR_((function (){var fexpr__30005 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__14017__auto__,tiers,all_currencies,error_QMARK_){
return (function (G__30004,G__30003){
return (G__30003.cljs$core$IFn$_invoke$arity$1 ? G__30003.cljs$core$IFn$_invoke$arity$1(G__30004) : G__30003.call(null,G__30004));
});})(con__14017__auto__,tiers,all_currencies,error_QMARK_))
);
return (fexpr__30005.cljs$core$IFn$_invoke$arity$2 ? fexpr__30005.cljs$core$IFn$_invoke$arity$2(all_currencies,tier.api.currencies_by_tier) : fexpr__30005.call(null,all_currencies,tier.api.currencies_by_tier));
})(),((function (con__14017__auto__,tiers,all_currencies,error_QMARK_){
return (function (item__14007__auto__){
var vec__30012 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30019 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__14017__auto__,tiers,all_currencies,error_QMARK_){
return (function (p__30020){
var vec__30021 = p__30020;
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30021,(0),null);
var tier_currencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier_currencies,tier__$1], null);
});})(con__14017__auto__,tiers,all_currencies,error_QMARK_))
);
return (fexpr__30019.cljs$core$IFn$_invoke$arity$1 ? fexpr__30019.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30019.call(null,item__14007__auto__));
})());
var tier_currencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(0),null);
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(1),null);
return report.hoplon.tier_report(conn,tier__$1,ticker,all_currencies,tier_currencies);
});})(con__14017__auto__,tiers,all_currencies,error_QMARK_))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__30002) : hoplon.core.div.call(null,G__30002));
});})(con__14017__auto__,tiers,all_currencies,error_QMARK_))
,null));
var tpl__14019__auto__ = ((function (con__14017__auto__,alt__14018__auto__,tiers,all_currencies,error_QMARK_){
return (function (p__14020__auto__){
return cljs.core.deref((function (){var or__8099__auto__ = (cljs.core.truth_(p__14020__auto__)?con__14017__auto__:alt__14018__auto__);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.atom();
}
})());
});})(con__14017__auto__,alt__14018__auto__,tiers,all_currencies,error_QMARK_))
;
var fexpr__30024 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14019__auto__);
return (fexpr__30024.cljs$core$IFn$_invoke$arity$1 ? fexpr__30024.cljs$core$IFn$_invoke$arity$1(error_QMARK_) : fexpr__30024.call(null,error_QMARK_));
})()], 0));
});
