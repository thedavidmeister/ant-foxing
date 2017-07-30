// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('tier.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.math.number');
goog.require('tier.data');
goog.require('datascript.core');
goog.require('currency.api');
goog.require('portfolio.api');
goog.require('math.geometric.sequence');
/**
 * Parse a tiering ratio from user input
 */
tier.api.parse_ratio = (function tier$api$parse_ratio(i){
var _PERCENT_ = (function (){var n = parseFloat(i);
if(cljs.core.truth_(wheel.math.number.nan_QMARK_(n))){
return tier.data.default_ratio;
} else {
return n;
}
})();
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
tier.api.db__GT_ratio = (function tier$api$db__GT_ratio(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

return tier.api.parse_ratio(portfolio.api.db__GT_config(db,cljs.core.cst$kw$portfolio$tier_SLASH_ratio));
});
tier.api.db__GT_tiers = (function tier$api$db__GT_tiers(db){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

var currencies = currency.api.db__GT_currencies(db);
return cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency_SLASH_tier,currencies)));
});
tier.api.tiers_incremental_QMARK_ = (function tier$api$tiers_incremental_QMARK_(tiers){
var expected = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(tiers) + (1)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,tiers);
});
tier.api.currencies_by_tier = (function tier$api$currencies_by_tier(currencies){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.group_by(cljs.core.cst$kw$currency_SLASH_tier,currencies));
});
/**
 * The last tier needs to scoop up all remaining funds, other tiers need to follow geometric rules
 */
tier.api.tier_target = (function tier$api$tier_target(db,tier__$1){
if(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(db) : datascript.core.db_QMARK_.call(null,db)))){
} else {
throw (new Error("Assert failed: (d/db? db)"));
}

if(typeof tier__$1 === 'number'){
} else {
throw (new Error("Assert failed: (number? tier)"));
}

var _PERCENT_ = (function (){var last_tier_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tier__$1,cljs.core.last(tier.api.db__GT_tiers(db)));
var G__30907 = tier.api.db__GT_ratio(db);
var G__30908 = tier__$1;
var fexpr__30906 = ((last_tier_QMARK_)?math.geometric.sequence.nth:math.geometric.sequence.at_nth);
return (fexpr__30906.cljs$core$IFn$_invoke$arity$2 ? fexpr__30906.cljs$core$IFn$_invoke$arity$2(G__30907,G__30908) : fexpr__30906.call(null,G__30907,G__30908));
})();
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
