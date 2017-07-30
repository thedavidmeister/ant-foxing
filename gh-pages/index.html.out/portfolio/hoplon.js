// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('portfolio.api');
goog.require('datascript.core');
goog.require('instructions.hoplon');
goog.require('tier.hoplon');
goog.require('spectre.hoplon');
portfolio.hoplon.currently_hodling = (function portfolio$hoplon$currently_hodling(conn,ticker){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

if(cljs.core.truth_(javelin.core.cell_QMARK_(ticker))){
} else {
throw (new Error("Assert failed: (j/cell? ticker)"));
}

var G__31459 = spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("List (space separated) the IDs of the currencies currently hodling") : hoplon.core.h2.call(null,"List (space separated) the IDs of the currencies currently hodling")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you type in a currency ID not found in the ticker data it will be ignored.") : hoplon.core.p.call(null,"If you type in a currency ID not found in the ticker data it will be ignored.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Refer to the raw market cap data to find the ID of your currency.") : hoplon.core.p.call(null,"Refer to the raw market cap data to find the ID of your currency.")),(function (){var G__31460 = instructions.hoplon.warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you delete or malform an ID here then all the data below will be purged for that currency!"], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__31460) : hoplon.core.p.call(null,G__31460));
})(),(function (){var G__31461 = (function (){var value = (function (){var fexpr__31464 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31463,G__31462){
return (G__31462.cljs$core$IFn$_invoke$arity$1 ? G__31462.cljs$core$IFn$_invoke$arity$1(G__31463) : G__31462.call(null,G__31463));
}));
return (fexpr__31464.cljs$core$IFn$_invoke$arity$2 ? fexpr__31464.cljs$core$IFn$_invoke$arity$2(conn,portfolio.api.db__GT_input_string) : fexpr__31464.call(null,conn,portfolio.api.db__GT_input_string));
})();
return spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$placeholder,"Enter coin ID here, eg bitcoin",cljs.core.cst$kw$blur,((function (value){
return (function (p1__31458_SHARP_){
return portfolio.api.set_currencies_from_input_string_BANG_(conn,cljs.core.deref(ticker),cljs.core.deref(p1__31458_SHARP_));
});})(value))
,cljs.core.cst$kw$value,value,cljs.core.cst$kw$size,(function (){var fexpr__31467 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (value){
return (function (G__31466,G__31465){
return (G__31465.cljs$core$IFn$_invoke$arity$1 ? G__31465.cljs$core$IFn$_invoke$arity$1(G__31466) : G__31465.call(null,G__31466));
});})(value))
);
return (fexpr__31467.cljs$core$IFn$_invoke$arity$2 ? fexpr__31467.cljs$core$IFn$_invoke$arity$2(value,cljs.core.count) : fexpr__31467.call(null,value,cljs.core.count));
})()], 0));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__31461) : hoplon.core.form.call(null,G__31461));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31459) : hoplon.core.div.call(null,G__31459));
});
/**
 * @param {...*} var_args
 */
portfolio.hoplon.currency_form_input = (function() { 
var portfolio$hoplon$currency_form_input__delegate = function (args__21560__auto__){
var vec__31469 = hoplon.core.parse_args(args__21560__auto__);
var map__31472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31469,(0),null);
var map__31472__$1 = ((((!((map__31472 == null)))?((((map__31472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31472):map__31472);
var attributes = map__31472__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,cljs.core.cst$kw$conn);
var currency__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,cljs.core.cst$kw$currency);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,cljs.core.cst$kw$k);
var el_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,cljs.core.cst$kw$el_DASH_fn);
var default_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,cljs.core.cst$kw$default_DASH_val);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31469,(1),null);
var el_fn__$1 = (function (){var or__8762__auto__ = el_fn;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return spectre.hoplon.form_input;
}
})();
var value = (function (){var fexpr__31477 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el_fn__$1,vec__31469,map__31472,map__31472__$1,attributes,conn,currency__$1,k,el_fn,default_val,children){
return (function (G__31474,G__31476,G__31475){
return (G__31474.cljs$core$IFn$_invoke$arity$2 ? G__31474.cljs$core$IFn$_invoke$arity$2(G__31475,G__31476) : G__31474.call(null,G__31475,G__31476));
});})(el_fn__$1,vec__31469,map__31472,map__31472__$1,attributes,conn,currency__$1,k,el_fn,default_val,children))
);
return (fexpr__31477.cljs$core$IFn$_invoke$arity$3 ? fexpr__31477.cljs$core$IFn$_invoke$arity$3(cljs.core.get,k,currency__$1) : fexpr__31477.call(null,cljs.core.get,k,currency__$1));
})();
var G__31478 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(children) : hoplon.core.div.call(null,children));
var G__31479 = (function (){var G__31480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$conn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$currency,cljs.core.cst$kw$k,cljs.core.cst$kw$el_DASH_fn,cljs.core.cst$kw$default_DASH_val], 0));
var G__31481 = cljs.core.cst$kw$value;
var G__31482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,conn], null);
var G__31483 = cljs.core.cst$kw$blur;
var G__31484 = ((function (G__31480,G__31481,G__31482,G__31483,G__31478,el_fn__$1,value,vec__31469,map__31472,map__31472__$1,attributes,conn,currency__$1,k,el_fn,default_val,children){
return (function (p1__31468_SHARP_){
return portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$currency_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(currency__$1)),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.deref(p1__31468_SHARP_)]));
});})(G__31480,G__31481,G__31482,G__31483,G__31478,el_fn__$1,value,vec__31469,map__31472,map__31472__$1,attributes,conn,currency__$1,k,el_fn,default_val,children))
;
return (el_fn__$1.cljs$core$IFn$_invoke$arity$5 ? el_fn__$1.cljs$core$IFn$_invoke$arity$5(G__31480,G__31481,G__31482,G__31483,G__31484) : el_fn__$1.call(null,G__31480,G__31481,G__31482,G__31483,G__31484));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__31478,G__31479) : hoplon.core.td.call(null,G__31478,G__31479));
};
var portfolio$hoplon$currency_form_input = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__31485__i = 0, G__31485__a = new Array(arguments.length -  0);
while (G__31485__i < G__31485__a.length) {G__31485__a[G__31485__i] = arguments[G__31485__i + 0]; ++G__31485__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__31485__a,0,null);
} 
return portfolio$hoplon$currency_form_input__delegate.call(this,args__21560__auto__);};
portfolio$hoplon$currency_form_input.cljs$lang$maxFixedArity = 0;
portfolio$hoplon$currency_form_input.cljs$lang$applyTo = (function (arglist__31486){
var args__21560__auto__ = cljs.core.seq(arglist__31486);
return portfolio$hoplon$currency_form_input__delegate(args__21560__auto__);
});
portfolio$hoplon$currency_form_input.cljs$core$IFn$_invoke$arity$variadic = portfolio$hoplon$currency_form_input__delegate;
return portfolio$hoplon$currency_form_input;
})()
;
portfolio.hoplon.currency_form_row = (function portfolio$hoplon$currency_form_row(conn,currency__$1,structure){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (d/conn? conn)"));
}

var input = (function (attributes){
return portfolio.hoplon.currency_form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$conn,conn,cljs.core.cst$kw$currency,currency__$1], null),attributes], 0))], 0));
});
var G__31487 = (function (){var iter__9639__auto__ = ((function (input){
return (function portfolio$hoplon$currency_form_row_$_iter__31488(s__31489){
return (new cljs.core.LazySeq(null,((function (input){
return (function (){
var s__31489__$1 = s__31489;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__31489__$1);
if(temp__5278__auto__){
var s__31489__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31489__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__31489__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__31491 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__31490 = (0);
while(true){
if((i__31490 < size__9638__auto__)){
var vec__31492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__31490);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31492,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31492,(1),null);
cljs.core.chunk_append(b__31491,input(a));

var G__31498 = (i__31490 + (1));
i__31490 = G__31498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31491),portfolio$hoplon$currency_form_row_$_iter__31488(cljs.core.chunk_rest(s__31489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31491),null);
}
} else {
var vec__31495 = cljs.core.first(s__31489__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31495,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31495,(1),null);
return cljs.core.cons(input(a),portfolio$hoplon$currency_form_row_$_iter__31488(cljs.core.rest(s__31489__$2)));
}
} else {
return null;
}
break;
}
});})(input))
,null,null));
});})(input))
;
return iter__9639__auto__(structure);
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__31487) : hoplon.core.tr.call(null,G__31487));
});
portfolio.hoplon.currencies_form = (function portfolio$hoplon$currencies_form(conn,currencies){
var sorted_by_tier = (function (){var fexpr__31506 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31500,G__31501,G__31502){
var G__31507 = (function (p1__31499_SHARP_){
var G__31509 = cljs.core.cst$kw$currency_SLASH_tier.cljs$core$IFn$_invoke$arity$1(p1__31499_SHARP_);
return (G__31501.cljs$core$IFn$_invoke$arity$1 ? G__31501.cljs$core$IFn$_invoke$arity$1(G__31509) : G__31501.call(null,G__31509));
});
var G__31508 = G__31502;
return (G__31500.cljs$core$IFn$_invoke$arity$2 ? G__31500.cljs$core$IFn$_invoke$arity$2(G__31507,G__31508) : G__31500.call(null,G__31507,G__31508));
}));
return (fexpr__31506.cljs$core$IFn$_invoke$arity$3 ? fexpr__31506.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,tier.data.parse_tier,currencies) : fexpr__31506.call(null,cljs.core.sort_by,tier.data.parse_tier,currencies));
})();
var structure = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Currency",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$readonly,true,cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current hodlings",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_hodling,cljs.core.cst$kw$type,"number"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tier (lower = more funds)",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(1),cljs.core.cst$kw$step,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Website",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Notes",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_notes,cljs.core.cst$kw$el_DASH_fn,spectre.hoplon.form_textarea], null)], null)], null);
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31510 = (function (){var con__21614__auto__ = (new cljs.core.Delay(((function (sorted_by_tier,structure){
return (function (){
return spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31511 = (function (){var iter__9639__auto__ = ((function (sorted_by_tier,structure){
return (function portfolio$hoplon$currencies_form_$_iter__31512(s__31513){
return (new cljs.core.LazySeq(null,((function (sorted_by_tier,structure){
return (function (){
var s__31513__$1 = s__31513;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__31513__$1);
if(temp__5278__auto__){
var s__31513__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31513__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__31513__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__31515 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__31514 = (0);
while(true){
if((i__31514 < size__9638__auto__)){
var vec__31516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__31514);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31516,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31516,(1),null);
cljs.core.chunk_append(b__31515,(hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(n) : hoplon.core.th.call(null,n)));

var G__31531 = (i__31514 + (1));
i__31514 = G__31531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31515),portfolio$hoplon$currencies_form_$_iter__31512(cljs.core.chunk_rest(s__31513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31515),null);
}
} else {
var vec__31519 = cljs.core.first(s__31513__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(1),null);
return cljs.core.cons((hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(n) : hoplon.core.th.call(null,n)),portfolio$hoplon$currencies_form_$_iter__31512(cljs.core.rest(s__31513__$2)));
}
} else {
return null;
}
break;
}
});})(sorted_by_tier,structure))
,null,null));
});})(sorted_by_tier,structure))
;
return iter__9639__auto__(structure);
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__31511) : hoplon.core.tr.call(null,G__31511));
})(),hoplon.core.loop_tpl_STAR_(sorted_by_tier,((function (sorted_by_tier,structure){
return (function (item__21604__auto__){
var vec__31522 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__31525 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (sorted_by_tier,structure){
return (function (currency__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency__$1], null);
});})(sorted_by_tier,structure))
);
return (fexpr__31525.cljs$core$IFn$_invoke$arity$1 ? fexpr__31525.cljs$core$IFn$_invoke$arity$1(item__21604__auto__) : fexpr__31525.call(null,item__21604__auto__));
})());
var currency__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31522,(0),null);
return portfolio.hoplon.currency_form_row(conn,currency__$1,structure);
});})(sorted_by_tier,structure))
)], 0));
});})(sorted_by_tier,structure))
,null));
var alt__21615__auto__ = (new cljs.core.Delay(((function (con__21614__auto__,sorted_by_tier,structure){
return (function (){
return null;
});})(con__21614__auto__,sorted_by_tier,structure))
,null));
var tpl__21616__auto__ = ((function (con__21614__auto__,alt__21615__auto__,sorted_by_tier,structure){
return (function (p__21617__auto__){
return cljs.core.deref((function (){var or__8762__auto__ = (cljs.core.truth_(p__21617__auto__)?con__21614__auto__:alt__21615__auto__);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.atom();
}
})());
});})(con__21614__auto__,alt__21615__auto__,sorted_by_tier,structure))
;
var G__31527 = (function (){var fexpr__31530 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__21614__auto__,alt__21615__auto__,tpl__21616__auto__,sorted_by_tier,structure){
return (function (G__31528,G__31529){
return (G__31528.cljs$core$IFn$_invoke$arity$1 ? G__31528.cljs$core$IFn$_invoke$arity$1(G__31529) : G__31528.call(null,G__31529));
});})(con__21614__auto__,alt__21615__auto__,tpl__21616__auto__,sorted_by_tier,structure))
);
return (fexpr__31530.cljs$core$IFn$_invoke$arity$2 ? fexpr__31530.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,sorted_by_tier) : fexpr__31530.call(null,cljs.core.seq,sorted_by_tier));
})();
var fexpr__31526 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__21616__auto__);
return (fexpr__31526.cljs$core$IFn$_invoke$arity$1 ? fexpr__31526.cljs$core$IFn$_invoke$arity$1(G__31527) : fexpr__31526.call(null,G__31527));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__31510) : hoplon.core.form.call(null,G__31510));
})()], 0));
});
portfolio.hoplon.page = (function portfolio$hoplon$page(conn,ticker){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Configure your portfolio") : hoplon.core.h1.call(null,"Configure your portfolio")),tier.hoplon.ratio(conn),portfolio.hoplon.currently_hodling(conn,ticker),portfolio.hoplon.currencies_form(conn,(function (){var fexpr__31534 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__31533,G__31532){
return (G__31532.cljs$core$IFn$_invoke$arity$1 ? G__31532.cljs$core$IFn$_invoke$arity$1(G__31533) : G__31532.call(null,G__31533));
}));
return (fexpr__31534.cljs$core$IFn$_invoke$arity$2 ? fexpr__31534.cljs$core$IFn$_invoke$arity$2(conn,currency.api.db__GT_currencies) : fexpr__31534.call(null,conn,currency.api.db__GT_currencies));
})())], 0));
});
