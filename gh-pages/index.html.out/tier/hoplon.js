// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('tier.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('portfolio.api');
goog.require('tier.api');
goog.require('math.geometric.sequence');
goog.require('wheel.link.hoplon');
goog.require('datascript.core');
goog.require('javelin.core');
goog.require('spectre.hoplon');
tier.hoplon.ratio = (function tier$hoplon$ratio(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

var current_ratio = (function (){var fexpr__30137 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30136,G__30135){
return (G__30135.cljs$core$IFn$_invoke$arity$1 ? G__30135.cljs$core$IFn$_invoke$arity$1(G__30136) : G__30135.call(null,G__30136));
}));
return (fexpr__30137.cljs$core$IFn$_invoke$arity$2 ? fexpr__30137.cljs$core$IFn$_invoke$arity$2(conn,tier.api.db__GT_ratio) : fexpr__30137.call(null,conn,tier.api.db__GT_ratio));
})();
var tiers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null);
var G__30138 = spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Portfolio tiering ratio") : hoplon.core.h2.call(null,"Portfolio tiering ratio")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("What is the ratio to use for each tiering of the portfolio?") : hoplon.core.p.call(null,"What is the ratio to use for each tiering of the portfolio?")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("The ratio will be used in a geometric sequence for each tiering.") : hoplon.core.p.call(null,"The ratio will be used in a geometric sequence for each tiering.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("The ratio as a decimal is what will remain at the end of each tier for subsequent tiers. Sensible values are lte 0.5.") : hoplon.core.p.call(null,"The ratio as a decimal is what will remain at the end of each tier for subsequent tiers. Sensible values are lte 0.5.")),wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1("https://en.wikipedia.org/wiki/Geometric_series"),(function (){var G__30139 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Indicative values for each tier") : hoplon.core.p.call(null,"Indicative values for each tier"));
var G__30140 = (function (){var G__30143 = (function (){var fexpr__30145 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30139,current_ratio,tiers){
return (function (G__30144){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Current tiering ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30144)].join('');
});})(G__30139,current_ratio,tiers))
);
return (fexpr__30145.cljs$core$IFn$_invoke$arity$1 ? fexpr__30145.cljs$core$IFn$_invoke$arity$1(current_ratio) : fexpr__30145.call(null,current_ratio));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__30143) : hoplon.core.p.call(null,G__30143));
})();
var G__30141 = (function (){var G__30146 = (function (){var fexpr__30148 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30139,G__30140,current_ratio,tiers){
return (function (G__30147){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Percentage of funds used per tier: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - ((100) * G__30147))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
});})(G__30139,G__30140,current_ratio,tiers))
);
return (fexpr__30148.cljs$core$IFn$_invoke$arity$1 ? fexpr__30148.cljs$core$IFn$_invoke$arity$1(current_ratio) : fexpr__30148.call(null,current_ratio));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__30146) : hoplon.core.p.call(null,G__30146));
})();
var G__30142 = spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30149 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$0() : hoplon.core.th.call(null));
var G__30150 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__30149,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (item__14007__auto__){
var vec__30151 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30154 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30149,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__30149,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30154.cljs$core$IFn$_invoke$arity$1 ? fexpr__30154.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30154.call(null,item__14007__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(0),null);
var G__30155 = (function (){var fexpr__30157 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30151,tier__$1,G__30149,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (G__30156){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tier "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30156)].join('');
});})(vec__30151,tier__$1,G__30149,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30157.cljs$core$IFn$_invoke$arity$1 ? fexpr__30157.cljs$core$IFn$_invoke$arity$1(tier__$1) : fexpr__30157.call(null,tier__$1));
})();
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(G__30155) : hoplon.core.th.call(null,G__30155));
});})(G__30149,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__30149,G__30150) : hoplon.core.tr.call(null,G__30149,G__30150));
})(),(function (){var G__30158 = (function (){var G__30160 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Remaining") : hoplon.core.strong.call(null,"Remaining"));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30160) : hoplon.core.td.call(null,G__30160));
})();
var G__30159 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__30158,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (item__14007__auto__){
var vec__30161 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30164 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30158,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__30158,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30164.cljs$core$IFn$_invoke$arity$1 ? fexpr__30164.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30164.call(null,item__14007__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30161,(0),null);
var G__30165 = (function (){var fexpr__30169 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30161,tier__$1,G__30158,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (G__30168,G__30166,G__30167){
return (G__30166.cljs$core$IFn$_invoke$arity$2 ? G__30166.cljs$core$IFn$_invoke$arity$2(G__30167,G__30168) : G__30166.call(null,G__30167,G__30168)).toPrecision((3));
});})(vec__30161,tier__$1,G__30158,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30169.cljs$core$IFn$_invoke$arity$3 ? fexpr__30169.cljs$core$IFn$_invoke$arity$3(tier__$1,math.geometric.sequence.nth,current_ratio) : fexpr__30169.call(null,tier__$1,math.geometric.sequence.nth,current_ratio));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30165) : hoplon.core.td.call(null,G__30165));
});})(G__30158,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__30158,G__30159) : hoplon.core.tr.call(null,G__30158,G__30159));
})(),(function (){var G__30170 = (function (){var G__30172 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("This tier") : hoplon.core.strong.call(null,"This tier"));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30172) : hoplon.core.td.call(null,G__30172));
})();
var G__30171 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__30170,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (item__14007__auto__){
var vec__30173 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30176 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__30170,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__30170,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30176.cljs$core$IFn$_invoke$arity$1 ? fexpr__30176.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30176.call(null,item__14007__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(0),null);
var G__30177 = (function (){var fexpr__30181 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__30173,tier__$1,G__30170,G__30139,G__30140,G__30141,current_ratio,tiers){
return (function (G__30180,G__30179,G__30178){
return (G__30178.cljs$core$IFn$_invoke$arity$2 ? G__30178.cljs$core$IFn$_invoke$arity$2(G__30179,G__30180) : G__30178.call(null,G__30179,G__30180)).toPrecision((3));
});})(vec__30173,tier__$1,G__30170,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (fexpr__30181.cljs$core$IFn$_invoke$arity$3 ? fexpr__30181.cljs$core$IFn$_invoke$arity$3(tier__$1,current_ratio,math.geometric.sequence.at_nth) : fexpr__30181.call(null,tier__$1,current_ratio,math.geometric.sequence.at_nth));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__30177) : hoplon.core.td.call(null,G__30177));
});})(G__30170,G__30139,G__30140,G__30141,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__30170,G__30171) : hoplon.core.tr.call(null,G__30170,G__30171));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__30139,G__30140,G__30141,G__30142) : hoplon.core.div.call(null,G__30139,G__30140,G__30141,G__30142));
})(),(function (){var G__30182 = spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$blur,((function (current_ratio,tiers){
return (function (p1__30134_SHARP_){
return portfolio.api.set_config_BANG_(conn,cljs.core.cst$kw$portfolio$tier_SLASH_ratio,cljs.core.deref(p1__30134_SHARP_));
});})(current_ratio,tiers))
,cljs.core.cst$kw$value,current_ratio], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__30182) : hoplon.core.form.call(null,G__30182));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__30138) : hoplon.core.div.call(null,G__30138));
});
