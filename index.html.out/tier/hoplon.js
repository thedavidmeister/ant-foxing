// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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

var current_ratio = (function (){var fexpr__31410 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31409,G__31408){
return (G__31408.cljs$core$IFn$_invoke$arity$1 ? G__31408.cljs$core$IFn$_invoke$arity$1(G__31409) : G__31408.call(null,G__31409));
}));
return (fexpr__31410.cljs$core$IFn$_invoke$arity$2 ? fexpr__31410.cljs$core$IFn$_invoke$arity$2(conn,tier.api.db__GT_ratio) : fexpr__31410.call(null,conn,tier.api.db__GT_ratio));
})();
var tiers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null);
var G__31411 = spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Portfolio tiering ratio") : hoplon.core.h2.call(null,"Portfolio tiering ratio")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("What is the ratio to use for each tiering of the portfolio?") : hoplon.core.p.call(null,"What is the ratio to use for each tiering of the portfolio?")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("The ratio will be used in a geometric sequence for each tiering.") : hoplon.core.p.call(null,"The ratio will be used in a geometric sequence for each tiering.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("The ratio as a decimal is what will remain at the end of each tier for subsequent tiers. Sensible values are lte 0.5.") : hoplon.core.p.call(null,"The ratio as a decimal is what will remain at the end of each tier for subsequent tiers. Sensible values are lte 0.5.")),wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1("https://en.wikipedia.org/wiki/Geometric_series"),(function (){var G__31412 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Indicative values for each tier") : hoplon.core.p.call(null,"Indicative values for each tier"));
var G__31413 = (function (){var G__31416 = (function (){var fexpr__31418 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31412,current_ratio,tiers){
return (function (G__31417){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Current tiering ratio: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31417)].join('');
});})(G__31412,current_ratio,tiers))
);
return (fexpr__31418.cljs$core$IFn$_invoke$arity$1 ? fexpr__31418.cljs$core$IFn$_invoke$arity$1(current_ratio) : fexpr__31418.call(null,current_ratio));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__31416) : hoplon.core.p.call(null,G__31416));
})();
var G__31414 = (function (){var G__31419 = (function (){var fexpr__31421 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31412,G__31413,current_ratio,tiers){
return (function (G__31420){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Percentage of funds used per tier: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - ((100) * G__31420))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
});})(G__31412,G__31413,current_ratio,tiers))
);
return (fexpr__31421.cljs$core$IFn$_invoke$arity$1 ? fexpr__31421.cljs$core$IFn$_invoke$arity$1(current_ratio) : fexpr__31421.call(null,current_ratio));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__31419) : hoplon.core.p.call(null,G__31419));
})();
var G__31415 = spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31422 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$0() : hoplon.core.th.call(null));
var G__31423 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__31422,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (item__21556__auto__){
var vec__31424 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31427 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31422,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__31422,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31427.cljs$core$IFn$_invoke$arity$1 ? fexpr__31427.cljs$core$IFn$_invoke$arity$1(item__21556__auto__) : fexpr__31427.call(null,item__21556__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31424,(0),null);
var G__31428 = (function (){var fexpr__31430 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31424,tier__$1,G__31422,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (G__31429){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tier "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31429)].join('');
});})(vec__31424,tier__$1,G__31422,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31430.cljs$core$IFn$_invoke$arity$1 ? fexpr__31430.cljs$core$IFn$_invoke$arity$1(tier__$1) : fexpr__31430.call(null,tier__$1));
})();
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(G__31428) : hoplon.core.th.call(null,G__31428));
});})(G__31422,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__31422,G__31423) : hoplon.core.tr.call(null,G__31422,G__31423));
})(),(function (){var G__31431 = (function (){var G__31433 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Remaining") : hoplon.core.strong.call(null,"Remaining"));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31433) : hoplon.core.td.call(null,G__31433));
})();
var G__31432 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__31431,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (item__21556__auto__){
var vec__31434 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31437 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31431,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__31431,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31437.cljs$core$IFn$_invoke$arity$1 ? fexpr__31437.cljs$core$IFn$_invoke$arity$1(item__21556__auto__) : fexpr__31437.call(null,item__21556__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31434,(0),null);
var G__31438 = (function (){var fexpr__31442 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31434,tier__$1,G__31431,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (G__31441,G__31439,G__31440){
return (G__31439.cljs$core$IFn$_invoke$arity$2 ? G__31439.cljs$core$IFn$_invoke$arity$2(G__31440,G__31441) : G__31439.call(null,G__31440,G__31441)).toPrecision((3));
});})(vec__31434,tier__$1,G__31431,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31442.cljs$core$IFn$_invoke$arity$3 ? fexpr__31442.cljs$core$IFn$_invoke$arity$3(tier__$1,math.geometric.sequence.nth,current_ratio) : fexpr__31442.call(null,tier__$1,math.geometric.sequence.nth,current_ratio));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31438) : hoplon.core.td.call(null,G__31438));
});})(G__31431,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__31431,G__31432) : hoplon.core.tr.call(null,G__31431,G__31432));
})(),(function (){var G__31443 = (function (){var G__31445 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("This tier") : hoplon.core.strong.call(null,"This tier"));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31445) : hoplon.core.td.call(null,G__31445));
})();
var G__31444 = hoplon.core.loop_tpl_STAR_(tiers,((function (G__31443,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (item__21556__auto__){
var vec__31446 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31449 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__31443,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (tier__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tier__$1], null);
});})(G__31443,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31449.cljs$core$IFn$_invoke$arity$1 ? fexpr__31449.cljs$core$IFn$_invoke$arity$1(item__21556__auto__) : fexpr__31449.call(null,item__21556__auto__));
})());
var tier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(0),null);
var G__31450 = (function (){var fexpr__31454 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__31446,tier__$1,G__31443,G__31412,G__31413,G__31414,current_ratio,tiers){
return (function (G__31453,G__31452,G__31451){
return (G__31451.cljs$core$IFn$_invoke$arity$2 ? G__31451.cljs$core$IFn$_invoke$arity$2(G__31452,G__31453) : G__31451.call(null,G__31452,G__31453)).toPrecision((3));
});})(vec__31446,tier__$1,G__31443,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (fexpr__31454.cljs$core$IFn$_invoke$arity$3 ? fexpr__31454.cljs$core$IFn$_invoke$arity$3(tier__$1,current_ratio,math.geometric.sequence.at_nth) : fexpr__31454.call(null,tier__$1,current_ratio,math.geometric.sequence.at_nth));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__31450) : hoplon.core.td.call(null,G__31450));
});})(G__31443,G__31412,G__31413,G__31414,current_ratio,tiers))
);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__31443,G__31444) : hoplon.core.tr.call(null,G__31443,G__31444));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__31412,G__31413,G__31414,G__31415) : hoplon.core.div.call(null,G__31412,G__31413,G__31414,G__31415));
})(),(function (){var G__31455 = spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$blur,((function (current_ratio,tiers){
return (function (p1__31407_SHARP_){
return portfolio.api.set_config_BANG_(conn,cljs.core.cst$kw$portfolio$tier_SLASH_ratio,cljs.core.deref(p1__31407_SHARP_));
});})(current_ratio,tiers))
,cljs.core.cst$kw$value,current_ratio], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__31455) : hoplon.core.form.call(null,G__31455));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31411) : hoplon.core.div.call(null,G__31411));
});
