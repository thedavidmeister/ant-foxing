// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('currency.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_hodling,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27715_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$p1__27715_SHARP_))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__27715_SHARP_){
return ((0) <= p1__27715_SHARP_);
})], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_notes,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$currency_SLASH_currency,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$currency_SLASH_hodling], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$currency_SLASH_notes], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27716){
return cljs.core.map_QMARK_(G__27716);
}),(function (G__27716){
return cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_id);
}),(function (G__27716){
return cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_tier);
}),(function (G__27716){
return cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_hodling);
})], null),(function (G__27716){
return (cljs.core.map_QMARK_(G__27716)) && (cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_id)) && (cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_tier)) && (cljs.core.contains_QMARK_(G__27716,cljs.core.cst$kw$currency_SLASH_hodling));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$currency_SLASH_notes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$currency_SLASH_hodling], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$currency_SLASH_hodling], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$currency_SLASH_hodling], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$currency_SLASH_notes], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$currency_SLASH_id)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$currency_SLASH_tier)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$currency_SLASH_hodling))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$currency_SLASH_notes], null)])));
currency.data.currency_QMARK_ = (function currency$data$currency_QMARK_(currency__$1){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$currency_SLASH_currency,currency__$1);
});
currency.data.parse_hodling = (function currency$data$parse_hodling(i){
var _PERCENT_ = (function (){var n = parseFloat(i);
if(cljs.core.truth_(wheel.math.number.nan_QMARK_(n))){
return (0);
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
