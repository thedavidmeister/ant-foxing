// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var G__30929 = cljs.core.cst$kw$css;
var G__30930 = (function (){var fexpr__30933 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30929){
return (function (G__30932){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(((0) < G__30932))?"green":(cljs.core.truth_(((0) > G__30932))?"red":"black"
))], null);
});})(G__30929))
);
return (fexpr__30933.cljs$core$IFn$_invoke$arity$1 ? fexpr__30933.cljs$core$IFn$_invoke$arity$1(n) : fexpr__30933.call(null,n));
})();
var G__30931 = (function (){var fexpr__30935 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30929,G__30930){
return (function (G__30934){
if(cljs.core.truth_(((0) < G__30934))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30934)].join('');
} else {
return G__30934;
}
});})(G__30929,G__30930))
);
return (fexpr__30935.cljs$core$IFn$_invoke$arity$1 ? fexpr__30935.cljs$core$IFn$_invoke$arity$1(n) : fexpr__30935.call(null,n));
})();
return (hoplon.core.strong.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$3(G__30929,G__30930,G__30931) : hoplon.core.strong.call(null,G__30929,G__30930,G__30931));
});
report.hoplon.tier_report = (function report$hoplon$tier_report(conn,tier__$1,ticker,all_currencies,tier_currencies){
var total_valuation = (function (){var fexpr__30939 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30938,G__30937,G__30936){
return (G__30936.cljs$core$IFn$_invoke$arity$2 ? G__30936.cljs$core$IFn$_invoke$arity$2(G__30937,G__30938) : G__30936.call(null,G__30937,G__30938));
}));
return (fexpr__30939.cljs$core$IFn$_invoke$arity$3 ? fexpr__30939.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_valuation) : fexpr__30939.call(null,all_currencies,ticker,report.api.__GT_total_valuation));
})();
var tier_cap = (function (){var fexpr__30943 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation){
return (function (G__30942,G__30941,G__30940){
return (G__30940.cljs$core$IFn$_invoke$arity$2 ? G__30940.cljs$core$IFn$_invoke$arity$2(G__30941,G__30942) : G__30940.call(null,G__30941,G__30942));
});})(total_valuation))
);
return (fexpr__30943.cljs$core$IFn$_invoke$arity$3 ? fexpr__30943.cljs$core$IFn$_invoke$arity$3(tier_currencies,ticker,report.api.__GT_total_cap) : fexpr__30943.call(null,tier_currencies,ticker,report.api.__GT_total_cap));
})();
var tier_valuation = (function (){var fexpr__30947 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap){
return (function (G__30946,G__30945,G__30944){
return (G__30944.cljs$core$IFn$_invoke$arity$2 ? G__30944.cljs$core$IFn$_invoke$arity$2(G__30945,G__30946) : G__30944.call(null,G__30945,G__30946));
});})(total_valuation,tier_cap))
);
return (fexpr__30947.cljs$core$IFn$_invoke$arity$3 ? fexpr__30947.cljs$core$IFn$_invoke$arity$3(tier_currencies,ticker,report.api.__GT_total_valuation) : fexpr__30947.call(null,tier_currencies,ticker,report.api.__GT_total_valuation));
})();
var tier_target_ratio = (function (){var fexpr__30951 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation){
return (function (G__30949,G__30950,G__30948){
return (G__30948.cljs$core$IFn$_invoke$arity$2 ? G__30948.cljs$core$IFn$_invoke$arity$2(G__30949,G__30950) : G__30948.call(null,G__30949,G__30950));
});})(total_valuation,tier_cap,tier_valuation))
);
return (fexpr__30951.cljs$core$IFn$_invoke$arity$3 ? fexpr__30951.cljs$core$IFn$_invoke$arity$3(conn,tier__$1,tier.api.tier_target) : fexpr__30951.call(null,conn,tier__$1,tier.api.tier_target));
})();
var tier_target_valuation = (function (){var fexpr__30954 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio){
return (function (G__30952,G__30953){
return ((G__30952 * G__30953) | (0));
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio))
);
return (fexpr__30954.cljs$core$IFn$_invoke$arity$2 ? fexpr__30954.cljs$core$IFn$_invoke$arity$2(total_valuation,tier_target_ratio) : fexpr__30954.call(null,total_valuation,tier_target_ratio));
})();
var tier_valuation_diff = (function (){var fexpr__30957 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation){
return (function (G__30955,G__30956){
return (G__30955 - G__30956);
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation))
);
return (fexpr__30957.cljs$core$IFn$_invoke$arity$2 ? fexpr__30957.cljs$core$IFn$_invoke$arity$2(tier_target_valuation,tier_valuation) : fexpr__30957.call(null,tier_target_valuation,tier_valuation));
})();
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30958 = (function (){var fexpr__30960 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__30959){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tier "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30959)].join('');
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__30960.cljs$core$IFn$_invoke$arity$1 ? fexpr__30960.cljs$core$IFn$_invoke$arity$1(tier__$1) : fexpr__30960.call(null,tier__$1));
})();
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(G__30958) : hoplon.core.h2.call(null,G__30958));
})(),(hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("Aggregate report") : hoplon.core.h3.call(null,"Aggregate report")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30961 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Tier market cap") : hoplon.core.th.call(null,"Tier market cap"));
var G__30962 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Tier valuation") : hoplon.core.th.call(null,"Tier valuation"));
var G__30963 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target ratio") : hoplon.core.th.call(null,"Target ratio"));
var G__30964 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation") : hoplon.core.th.call(null,"Target valuation"));
var G__30965 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Valuation diff") : hoplon.core.th.call(null,"Valuation diff"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__30961,G__30962,G__30963,G__30964,G__30965) : hoplon.core.tr.call(null,G__30961,G__30962,G__30963,G__30964,G__30965));
})(),(function (){var G__30966 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_cap) : hoplon.core.td.call(null,tier_cap));
var G__30967 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_valuation) : hoplon.core.td.call(null,tier_valuation));
var G__30968 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_target_ratio) : hoplon.core.td.call(null,tier_target_ratio));
var G__30969 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(tier_target_valuation) : hoplon.core.td.call(null,tier_target_valuation));
var G__30970 = (function (){var G__30971 = report.hoplon.diff(tier_valuation_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30971) : hoplon.core.td.call(null,G__30971));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__30966,G__30967,G__30968,G__30969,G__30970) : hoplon.core.tr.call(null,G__30966,G__30967,G__30968,G__30969,G__30970));
})()], 0)),(hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("Hodlings info") : hoplon.core.h3.call(null,"Hodlings info")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30972 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Name") : hoplon.core.th.call(null,"Name"));
var G__30973 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Rank") : hoplon.core.th.call(null,"Rank"));
var G__30974 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Price USD") : hoplon.core.th.call(null,"Price USD"));
var G__30975 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Market cap") : hoplon.core.th.call(null,"Market cap"));
var G__30976 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Ratio of tier cap") : hoplon.core.th.call(null,"Ratio of tier cap"));
var G__30977 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Current hodlings") : hoplon.core.th.call(null,"Current hodlings"));
var G__30978 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Current valuation (USD)") : hoplon.core.th.call(null,"Current valuation (USD)"));
var G__30979 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Ratio of tier valuation") : hoplon.core.th.call(null,"Ratio of tier valuation"));
var G__30980 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation") : hoplon.core.th.call(null,"Target valuation"));
var G__30981 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target valuation diff (USD)") : hoplon.core.th.call(null,"Target valuation diff (USD)"));
var G__30982 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Target hodling diff") : hoplon.core.th.call(null,"Target hodling diff"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$11(G__30972,G__30973,G__30974,G__30975,G__30976,G__30977,G__30978,G__30979,G__30980,G__30981,G__30982) : hoplon.core.tr.call(null,G__30972,G__30973,G__30974,G__30975,G__30976,G__30977,G__30978,G__30979,G__30980,G__30981,G__30982));
})(),hoplon.core.loop_tpl_STAR_(tier_currencies,((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (item__21604__auto__){
var vec__30983 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30986 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (currency__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency__$1], null);
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__30986.cljs$core$IFn$_invoke$arity$1 ? fexpr__30986.cljs$core$IFn$_invoke$arity$1(item__21604__auto__) : fexpr__30986.call(null,item__21604__auto__));
})());
var currency__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30983,(0),null);
var currency_ticker = (function (){var fexpr__30990 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__30988,G__30989,G__30987){
return (G__30987.cljs$core$IFn$_invoke$arity$2 ? G__30987.cljs$core$IFn$_invoke$arity$2(G__30988,G__30989) : G__30987.call(null,G__30988,G__30989));
});})(vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__30990.cljs$core$IFn$_invoke$arity$3 ? fexpr__30990.cljs$core$IFn$_invoke$arity$3(ticker,currency__$1,report.data.__GT_currency_ticker) : fexpr__30990.call(null,ticker,currency__$1,report.data.__GT_currency_ticker));
})();
var currency_name = (function (){var fexpr__30993 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__30991,G__30992){
return (G__30991.cljs$core$IFn$_invoke$arity$2 ? G__30991.cljs$core$IFn$_invoke$arity$2(G__30992,"name") : G__30991.call(null,G__30992,"name"));
});})(currency_ticker,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__30993.cljs$core$IFn$_invoke$arity$2 ? fexpr__30993.cljs$core$IFn$_invoke$arity$2(cljs.core.get,currency_ticker) : fexpr__30993.call(null,cljs.core.get,currency_ticker));
})();
var rank = (function (){var fexpr__30996 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__30994,G__30995){
return (G__30994.cljs$core$IFn$_invoke$arity$2 ? G__30994.cljs$core$IFn$_invoke$arity$2(G__30995,"rank") : G__30994.call(null,G__30995,"rank"));
});})(currency_ticker,currency_name,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__30996.cljs$core$IFn$_invoke$arity$2 ? fexpr__30996.cljs$core$IFn$_invoke$arity$2(cljs.core.get,currency_ticker) : fexpr__30996.call(null,cljs.core.get,currency_ticker));
})();
var price_usd = (function (){var fexpr__31000 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__30998,G__30997,G__30999){
return (G__30997.cljs$core$IFn$_invoke$arity$2 ? G__30997.cljs$core$IFn$_invoke$arity$2(G__30998,G__30999) : G__30997.call(null,G__30998,G__30999));
});})(currency_ticker,currency_name,rank,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31000.cljs$core$IFn$_invoke$arity$3 ? fexpr__31000.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_price_usd,currency__$1) : fexpr__31000.call(null,currency_ticker,report.api.__GT_price_usd,currency__$1));
})();
var cap = (function (){var fexpr__31004 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31002,G__31001,G__31003){
return (G__31001.cljs$core$IFn$_invoke$arity$2 ? G__31001.cljs$core$IFn$_invoke$arity$2(G__31002,G__31003) : G__31001.call(null,G__31002,G__31003));
});})(currency_ticker,currency_name,rank,price_usd,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31004.cljs$core$IFn$_invoke$arity$3 ? fexpr__31004.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_cap,currency__$1) : fexpr__31004.call(null,currency_ticker,report.api.__GT_cap,currency__$1));
})();
var cap_ratio = (function (){var fexpr__31009 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31007,G__31005,G__31006,G__31008){
return (G__31005.cljs$core$IFn$_invoke$arity$3 ? G__31005.cljs$core$IFn$_invoke$arity$3(G__31006,G__31007,G__31008) : G__31005.call(null,G__31006,G__31007,G__31008));
});})(currency_ticker,currency_name,rank,price_usd,cap,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31009.cljs$core$IFn$_invoke$arity$4 ? fexpr__31009.cljs$core$IFn$_invoke$arity$4(tier_currencies,report.api.__GT_cap_ratio,ticker,currency__$1) : fexpr__31009.call(null,tier_currencies,report.api.__GT_cap_ratio,ticker,currency__$1));
})();
var hodling = (function (){var fexpr__31013 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31010,G__31011,G__31012){
return (G__31010.cljs$core$IFn$_invoke$arity$2 ? G__31010.cljs$core$IFn$_invoke$arity$2(G__31011,G__31012) : G__31010.call(null,G__31011,G__31012));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31013.cljs$core$IFn$_invoke$arity$3 ? fexpr__31013.cljs$core$IFn$_invoke$arity$3(report.api.__GT_hodling,currency_ticker,currency__$1) : fexpr__31013.call(null,report.api.__GT_hodling,currency_ticker,currency__$1));
})();
var valuation = (function (){var fexpr__31017 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31015,G__31014,G__31016){
return (G__31014.cljs$core$IFn$_invoke$arity$2 ? G__31014.cljs$core$IFn$_invoke$arity$2(G__31015,G__31016) : G__31014.call(null,G__31015,G__31016));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31017.cljs$core$IFn$_invoke$arity$3 ? fexpr__31017.cljs$core$IFn$_invoke$arity$3(currency_ticker,report.api.__GT_valuation,currency__$1) : fexpr__31017.call(null,currency_ticker,report.api.__GT_valuation,currency__$1));
})();
var valuation_ratio = (function (){var fexpr__31022 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31020,G__31018,G__31019,G__31021){
return (G__31018.cljs$core$IFn$_invoke$arity$3 ? G__31018.cljs$core$IFn$_invoke$arity$3(G__31019,G__31020,G__31021) : G__31018.call(null,G__31019,G__31020,G__31021));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31022.cljs$core$IFn$_invoke$arity$4 ? fexpr__31022.cljs$core$IFn$_invoke$arity$4(tier_currencies,report.api.__GT_valuation_ratio,ticker,currency__$1) : fexpr__31022.call(null,tier_currencies,report.api.__GT_valuation_ratio,ticker,currency__$1));
})();
var valuation_target = (function (){var fexpr__31025 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31024,G__31023){
return ((G__31023 * G__31024) | (0));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31025.cljs$core$IFn$_invoke$arity$2 ? fexpr__31025.cljs$core$IFn$_invoke$arity$2(tier_target_valuation,cap_ratio) : fexpr__31025.call(null,tier_target_valuation,cap_ratio));
})();
var valuation_target_diff = (function (){var fexpr__31028 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31026,G__31027){
return (G__31026 - G__31027);
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31028.cljs$core$IFn$_invoke$arity$2 ? fexpr__31028.cljs$core$IFn$_invoke$arity$2(valuation_target,valuation) : fexpr__31028.call(null,valuation_target,valuation));
})();
var hodling_target_diff = (function (){var fexpr__31035 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,valuation_target_diff,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff){
return (function (G__31029,G__31030,G__31032,G__31031,G__31033){
var G__31036 = (G__31030 / (G__31031.cljs$core$IFn$_invoke$arity$2 ? G__31031.cljs$core$IFn$_invoke$arity$2(G__31032,G__31033) : G__31031.call(null,G__31032,G__31033)));
return (G__31029.cljs$core$IFn$_invoke$arity$1 ? G__31029.cljs$core$IFn$_invoke$arity$1(G__31036) : G__31029.call(null,G__31036));
});})(currency_ticker,currency_name,rank,price_usd,cap,cap_ratio,hodling,valuation,valuation_ratio,valuation_target,valuation_target_diff,vec__30983,currency__$1,total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
);
return (fexpr__31035.cljs$core$IFn$_invoke$arity$5 ? fexpr__31035.cljs$core$IFn$_invoke$arity$5(report.data.simple_number,valuation_target_diff,currency_ticker,report.api.__GT_price_usd,currency__$1) : fexpr__31035.call(null,report.data.simple_number,valuation_target_diff,currency_ticker,report.api.__GT_price_usd,currency__$1));
})();
var G__31037 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(currency_name) : hoplon.core.td.call(null,currency_name));
var G__31038 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(rank) : hoplon.core.td.call(null,rank));
var G__31039 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(price_usd) : hoplon.core.td.call(null,price_usd));
var G__31040 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(cap) : hoplon.core.td.call(null,cap));
var G__31041 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(cap_ratio) : hoplon.core.td.call(null,cap_ratio));
var G__31042 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(hodling) : hoplon.core.td.call(null,hodling));
var G__31043 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation) : hoplon.core.td.call(null,valuation));
var G__31044 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation_ratio) : hoplon.core.td.call(null,valuation_ratio));
var G__31045 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(valuation_target) : hoplon.core.td.call(null,valuation_target));
var G__31046 = (function (){var G__31048 = report.hoplon.diff(valuation_target_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31048) : hoplon.core.td.call(null,G__31048));
})();
var G__31047 = (function (){var G__31049 = report.hoplon.diff(hodling_target_diff);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31049) : hoplon.core.td.call(null,G__31049));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$11(G__31037,G__31038,G__31039,G__31040,G__31041,G__31042,G__31043,G__31044,G__31045,G__31046,G__31047) : hoplon.core.tr.call(null,G__31037,G__31038,G__31039,G__31040,G__31041,G__31042,G__31043,G__31044,G__31045,G__31046,G__31047));
});})(total_valuation,tier_cap,tier_valuation,tier_target_ratio,tier_target_valuation,tier_valuation_diff))
)], 0))], 0));
});
report.hoplon.portfolio_report = (function report$hoplon$portfolio_report(ticker,all_currencies){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Portfolio totals") : hoplon.core.h2.call(null,"Portfolio totals")),spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31050 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Market cap") : hoplon.core.th.call(null,"Market cap"));
var G__31051 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Portfolio valuation") : hoplon.core.th.call(null,"Portfolio valuation"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__31050,G__31051) : hoplon.core.tr.call(null,G__31050,G__31051));
})(),(function (){var G__31052 = (function (){var G__31054 = (function (){var fexpr__31058 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31057,G__31056,G__31055){
return (G__31055.cljs$core$IFn$_invoke$arity$2 ? G__31055.cljs$core$IFn$_invoke$arity$2(G__31056,G__31057) : G__31055.call(null,G__31056,G__31057));
}));
return (fexpr__31058.cljs$core$IFn$_invoke$arity$3 ? fexpr__31058.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_cap) : fexpr__31058.call(null,all_currencies,ticker,report.api.__GT_total_cap));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31054) : hoplon.core.td.call(null,G__31054));
})();
var G__31053 = (function (){var G__31059 = (function (){var fexpr__31063 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31052){
return (function (G__31062,G__31061,G__31060){
return (G__31060.cljs$core$IFn$_invoke$arity$2 ? G__31060.cljs$core$IFn$_invoke$arity$2(G__31061,G__31062) : G__31060.call(null,G__31061,G__31062));
});})(G__31052))
);
return (fexpr__31063.cljs$core$IFn$_invoke$arity$3 ? fexpr__31063.cljs$core$IFn$_invoke$arity$3(all_currencies,ticker,report.api.__GT_total_valuation) : fexpr__31063.call(null,all_currencies,ticker,report.api.__GT_total_valuation));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31059) : hoplon.core.td.call(null,G__31059));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__31052,G__31053) : hoplon.core.tr.call(null,G__31052,G__31053));
})()], 0))], 0));
});
report.hoplon.page = (function report$hoplon$page(conn,ticker){
var tiers = (function (){var fexpr__31066 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31065,G__31064){
return (G__31064.cljs$core$IFn$_invoke$arity$1 ? G__31064.cljs$core$IFn$_invoke$arity$1(G__31065) : G__31064.call(null,G__31065));
}));
return (fexpr__31066.cljs$core$IFn$_invoke$arity$2 ? fexpr__31066.cljs$core$IFn$_invoke$arity$2(conn,tier.api.db__GT_tiers) : fexpr__31066.call(null,conn,tier.api.db__GT_tiers));
})();
var all_currencies = (function (){var fexpr__31069 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (tiers){
return (function (G__31068,G__31067){
return (G__31067.cljs$core$IFn$_invoke$arity$1 ? G__31067.cljs$core$IFn$_invoke$arity$1(G__31068) : G__31067.call(null,G__31068));
});})(tiers))
);
return (fexpr__31069.cljs$core$IFn$_invoke$arity$2 ? fexpr__31069.cljs$core$IFn$_invoke$arity$2(conn,currency.api.db__GT_currencies) : fexpr__31069.call(null,conn,currency.api.db__GT_currencies));
})();
var error_QMARK_ = (function (){var fexpr__31074 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (tiers,all_currencies){
return (function (G__31072,G__31070,G__31071){
var G__31075 = (G__31071.cljs$core$IFn$_invoke$arity$1 ? G__31071.cljs$core$IFn$_invoke$arity$1(G__31072) : G__31071.call(null,G__31072));
return (G__31070.cljs$core$IFn$_invoke$arity$1 ? G__31070.cljs$core$IFn$_invoke$arity$1(G__31075) : G__31070.call(null,G__31075));
});})(tiers,all_currencies))
);
return (fexpr__31074.cljs$core$IFn$_invoke$arity$3 ? fexpr__31074.cljs$core$IFn$_invoke$arity$3(tiers,cljs.core.not,tier.api.tiers_incremental_QMARK_) : fexpr__31074.call(null,tiers,cljs.core.not,tier.api.tiers_incremental_QMARK_));
})();
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Report") : hoplon.core.h1.call(null,"Report")),report.hoplon.portfolio_report(ticker,all_currencies),(function (){var con__21614__auto__ = (new cljs.core.Delay(((function (tiers,all_currencies,error_QMARK_){
return (function (){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instructions.hoplon.warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The tiers must increment by 1"], 0))], 0));
});})(tiers,all_currencies,error_QMARK_))
,null));
var alt__21615__auto__ = (new cljs.core.Delay(((function (con__21614__auto__,tiers,all_currencies,error_QMARK_){
return (function (){
var G__31076 = hoplon.core.loop_tpl_STAR_((function (){var fexpr__31079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__21614__auto__,tiers,all_currencies,error_QMARK_){
return (function (G__31078,G__31077){
return (G__31077.cljs$core$IFn$_invoke$arity$1 ? G__31077.cljs$core$IFn$_invoke$arity$1(G__31078) : G__31077.call(null,G__31078));
});})(con__21614__auto__,tiers,all_currencies,error_QMARK_))
);
return (fexpr__31079.cljs$core$IFn$_invoke$arity$2 ? fexpr__31079.cljs$core$IFn$_invoke$arity$2(all_currencies,tier.api.currencies_by_tier) : fexpr__31079.call(null,all_currencies,tier.api.currencies_by_tier));
})(),((function (con__21614__auto__,tiers,all_currencies,error_QMARK_){
return (function (item__21604__auto__){
var vec__31086 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31093 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__21614__auto__,tiers,all_currencies,error_QMARK_){
return (function (p__31094){
var vec__31095 = p__31094;
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31095,(0),null);
var tier_currencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31095,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier_currencies,tier__$1], null);
});})(con__21614__auto__,tiers,all_currencies,error_QMARK_))
);
return (fexpr__31093.cljs$core$IFn$_invoke$arity$1 ? fexpr__31093.cljs$core$IFn$_invoke$arity$1(item__21604__auto__) : fexpr__31093.call(null,item__21604__auto__));
})());
var tier_currencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(0),null);
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31086,(1),null);
return report.hoplon.tier_report(conn,tier__$1,ticker,all_currencies,tier_currencies);
});})(con__21614__auto__,tiers,all_currencies,error_QMARK_))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31076) : hoplon.core.div.call(null,G__31076));
});})(con__21614__auto__,tiers,all_currencies,error_QMARK_))
,null));
var tpl__21616__auto__ = ((function (con__21614__auto__,alt__21615__auto__,tiers,all_currencies,error_QMARK_){
return (function (p__21617__auto__){
return cljs.core.deref((function (){var or__8762__auto__ = (cljs.core.truth_(p__21617__auto__)?con__21614__auto__:alt__21615__auto__);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.atom();
}
})());
});})(con__21614__auto__,alt__21615__auto__,tiers,all_currencies,error_QMARK_))
;
var fexpr__31098 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__21616__auto__);
return (fexpr__31098.cljs$core$IFn$_invoke$arity$1 ? fexpr__31098.cljs$core$IFn$_invoke$arity$1(error_QMARK_) : fexpr__31098.call(null,error_QMARK_));
})()], 0));
});
