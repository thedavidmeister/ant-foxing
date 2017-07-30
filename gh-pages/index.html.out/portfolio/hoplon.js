// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
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

var G__30186 = spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("List (space separated) the IDs of the currencies currently hodling") : hoplon.core.h2.call(null,"List (space separated) the IDs of the currencies currently hodling")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you type in a currency ID not found in the ticker data it will be ignored.") : hoplon.core.p.call(null,"If you type in a currency ID not found in the ticker data it will be ignored.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Refer to the raw market cap data to find the ID of your currency.") : hoplon.core.p.call(null,"Refer to the raw market cap data to find the ID of your currency.")),(function (){var G__30187 = instructions.hoplon.warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you delete or malform an ID here then all the data below will be purged for that currency!"], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__30187) : hoplon.core.p.call(null,G__30187));
})(),(function (){var G__30188 = (function (){var value = (function (){var fexpr__30191 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30190,G__30189){
return (G__30189.cljs$core$IFn$_invoke$arity$1 ? G__30189.cljs$core$IFn$_invoke$arity$1(G__30190) : G__30189.call(null,G__30190));
}));
return (fexpr__30191.cljs$core$IFn$_invoke$arity$2 ? fexpr__30191.cljs$core$IFn$_invoke$arity$2(conn,portfolio.api.db__GT_input_string) : fexpr__30191.call(null,conn,portfolio.api.db__GT_input_string));
})();
return spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$placeholder,"Enter coin ID here, eg bitcoin",cljs.core.cst$kw$blur,((function (value){
return (function (p1__30185_SHARP_){
return portfolio.api.set_currencies_from_input_string_BANG_(conn,cljs.core.deref(ticker),cljs.core.deref(p1__30185_SHARP_));
});})(value))
,cljs.core.cst$kw$value,value,cljs.core.cst$kw$size,(function (){var fexpr__30194 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (value){
return (function (G__30193,G__30192){
return (G__30192.cljs$core$IFn$_invoke$arity$1 ? G__30192.cljs$core$IFn$_invoke$arity$1(G__30193) : G__30192.call(null,G__30193));
});})(value))
);
return (fexpr__30194.cljs$core$IFn$_invoke$arity$2 ? fexpr__30194.cljs$core$IFn$_invoke$arity$2(value,cljs.core.count) : fexpr__30194.call(null,value,cljs.core.count));
})()], 0));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__30188) : hoplon.core.form.call(null,G__30188));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__30186) : hoplon.core.div.call(null,G__30186));
});
/**
 * @param {...*} var_args
 */
portfolio.hoplon.currency_form_input = (function() { 
var portfolio$hoplon$currency_form_input__delegate = function (args__13963__auto__){
var vec__30196 = hoplon.core.parse_args(args__13963__auto__);
var map__30199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(0),null);
var map__30199__$1 = ((((!((map__30199 == null)))?((((map__30199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30199):map__30199);
var attributes = map__30199__$1;
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199__$1,cljs.core.cst$kw$conn);
var currency__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199__$1,cljs.core.cst$kw$currency);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199__$1,cljs.core.cst$kw$k);
var el_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199__$1,cljs.core.cst$kw$el_DASH_fn);
var default_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30199__$1,cljs.core.cst$kw$default_DASH_val);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(1),null);
var el_fn__$1 = (function (){var or__8099__auto__ = el_fn;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return spectre.hoplon.form_input;
}
})();
var value = (function (){var fexpr__30204 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el_fn__$1,vec__30196,map__30199,map__30199__$1,attributes,conn,currency__$1,k,el_fn,default_val,children){
return (function (G__30201,G__30203,G__30202){
return (G__30201.cljs$core$IFn$_invoke$arity$2 ? G__30201.cljs$core$IFn$_invoke$arity$2(G__30202,G__30203) : G__30201.call(null,G__30202,G__30203));
});})(el_fn__$1,vec__30196,map__30199,map__30199__$1,attributes,conn,currency__$1,k,el_fn,default_val,children))
);
return (fexpr__30204.cljs$core$IFn$_invoke$arity$3 ? fexpr__30204.cljs$core$IFn$_invoke$arity$3(cljs.core.get,k,currency__$1) : fexpr__30204.call(null,cljs.core.get,k,currency__$1));
})();
var G__30205 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(children) : hoplon.core.div.call(null,children));
var G__30206 = (function (){var G__30207 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$conn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$currency,cljs.core.cst$kw$k,cljs.core.cst$kw$el_DASH_fn,cljs.core.cst$kw$default_DASH_val], 0));
var G__30208 = cljs.core.cst$kw$value;
var G__30209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,conn], null);
var G__30210 = cljs.core.cst$kw$blur;
var G__30211 = ((function (G__30207,G__30208,G__30209,G__30210,G__30205,el_fn__$1,value,vec__30196,map__30199,map__30199__$1,attributes,conn,currency__$1,k,el_fn,default_val,children){
return (function (p1__30195_SHARP_){
return portfolio.api.upsert_currency_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$currency_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(currency__$1)),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.deref(p1__30195_SHARP_)]));
});})(G__30207,G__30208,G__30209,G__30210,G__30205,el_fn__$1,value,vec__30196,map__30199,map__30199__$1,attributes,conn,currency__$1,k,el_fn,default_val,children))
;
return (el_fn__$1.cljs$core$IFn$_invoke$arity$5 ? el_fn__$1.cljs$core$IFn$_invoke$arity$5(G__30207,G__30208,G__30209,G__30210,G__30211) : el_fn__$1.call(null,G__30207,G__30208,G__30209,G__30210,G__30211));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__30205,G__30206) : hoplon.core.td.call(null,G__30205,G__30206));
};
var portfolio$hoplon$currency_form_input = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__30212__i = 0, G__30212__a = new Array(arguments.length -  0);
while (G__30212__i < G__30212__a.length) {G__30212__a[G__30212__i] = arguments[G__30212__i + 0]; ++G__30212__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__30212__a,0,null);
} 
return portfolio$hoplon$currency_form_input__delegate.call(this,args__13963__auto__);};
portfolio$hoplon$currency_form_input.cljs$lang$maxFixedArity = 0;
portfolio$hoplon$currency_form_input.cljs$lang$applyTo = (function (arglist__30213){
var args__13963__auto__ = cljs.core.seq(arglist__30213);
return portfolio$hoplon$currency_form_input__delegate(args__13963__auto__);
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
var G__30214 = (function (){var iter__8962__auto__ = ((function (input){
return (function portfolio$hoplon$currency_form_row_$_iter__30215(s__30216){
return (new cljs.core.LazySeq(null,((function (input){
return (function (){
var s__30216__$1 = s__30216;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__30216__$1);
if(temp__5278__auto__){
var s__30216__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30216__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__30216__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__30218 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__30217 = (0);
while(true){
if((i__30217 < size__8961__auto__)){
var vec__30219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__30217);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30219,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30219,(1),null);
cljs.core.chunk_append(b__30218,input(a));

var G__30225 = (i__30217 + (1));
i__30217 = G__30225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30218),portfolio$hoplon$currency_form_row_$_iter__30215(cljs.core.chunk_rest(s__30216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30218),null);
}
} else {
var vec__30222 = cljs.core.first(s__30216__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30222,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30222,(1),null);
return cljs.core.cons(input(a),portfolio$hoplon$currency_form_row_$_iter__30215(cljs.core.rest(s__30216__$2)));
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
return iter__8962__auto__(structure);
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__30214) : hoplon.core.tr.call(null,G__30214));
});
portfolio.hoplon.currencies_form = (function portfolio$hoplon$currencies_form(conn,currencies){
var sorted_by_tier = (function (){var fexpr__30233 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30227,G__30228,G__30229){
var G__30234 = (function (p1__30226_SHARP_){
var G__30236 = cljs.core.cst$kw$currency_SLASH_tier.cljs$core$IFn$_invoke$arity$1(p1__30226_SHARP_);
return (G__30228.cljs$core$IFn$_invoke$arity$1 ? G__30228.cljs$core$IFn$_invoke$arity$1(G__30236) : G__30228.call(null,G__30236));
});
var G__30235 = G__30229;
return (G__30227.cljs$core$IFn$_invoke$arity$2 ? G__30227.cljs$core$IFn$_invoke$arity$2(G__30234,G__30235) : G__30227.call(null,G__30234,G__30235));
}));
return (fexpr__30233.cljs$core$IFn$_invoke$arity$3 ? fexpr__30233.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,tier.data.parse_tier,currencies) : fexpr__30233.call(null,cljs.core.sort_by,tier.data.parse_tier,currencies));
})();
var structure = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Currency",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_id,cljs.core.cst$kw$readonly,true,cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current hodlings",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_hodling,cljs.core.cst$kw$type,"number"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tier (lower = more funds)",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_tier,cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(1),cljs.core.cst$kw$step,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Website",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_website,cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Notes",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,cljs.core.cst$kw$currency_SLASH_notes,cljs.core.cst$kw$el_DASH_fn,spectre.hoplon.form_textarea], null)], null)], null);
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30237 = (function (){var con__14017__auto__ = (new cljs.core.Delay(((function (sorted_by_tier,structure){
return (function (){
return spectre.hoplon.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30238 = (function (){var iter__8962__auto__ = ((function (sorted_by_tier,structure){
return (function portfolio$hoplon$currencies_form_$_iter__30239(s__30240){
return (new cljs.core.LazySeq(null,((function (sorted_by_tier,structure){
return (function (){
var s__30240__$1 = s__30240;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__30240__$1);
if(temp__5278__auto__){
var s__30240__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30240__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__30240__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__30242 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__30241 = (0);
while(true){
if((i__30241 < size__8961__auto__)){
var vec__30243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__30241);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30243,(1),null);
cljs.core.chunk_append(b__30242,(hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(n) : hoplon.core.th.call(null,n)));

var G__30258 = (i__30241 + (1));
i__30241 = G__30258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30242),portfolio$hoplon$currencies_form_$_iter__30239(cljs.core.chunk_rest(s__30240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30242),null);
}
} else {
var vec__30246 = cljs.core.first(s__30240__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30246,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30246,(1),null);
return cljs.core.cons((hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1(n) : hoplon.core.th.call(null,n)),portfolio$hoplon$currencies_form_$_iter__30239(cljs.core.rest(s__30240__$2)));
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
return iter__8962__auto__(structure);
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__30238) : hoplon.core.tr.call(null,G__30238));
})(),hoplon.core.loop_tpl_STAR_(sorted_by_tier,((function (sorted_by_tier,structure){
return (function (item__14007__auto__){
var vec__30249 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__30252 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (sorted_by_tier,structure){
return (function (currency__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency__$1], null);
});})(sorted_by_tier,structure))
);
return (fexpr__30252.cljs$core$IFn$_invoke$arity$1 ? fexpr__30252.cljs$core$IFn$_invoke$arity$1(item__14007__auto__) : fexpr__30252.call(null,item__14007__auto__));
})());
var currency__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(0),null);
return portfolio.hoplon.currency_form_row(conn,currency__$1,structure);
});})(sorted_by_tier,structure))
)], 0));
});})(sorted_by_tier,structure))
,null));
var alt__14018__auto__ = (new cljs.core.Delay(((function (con__14017__auto__,sorted_by_tier,structure){
return (function (){
return null;
});})(con__14017__auto__,sorted_by_tier,structure))
,null));
var tpl__14019__auto__ = ((function (con__14017__auto__,alt__14018__auto__,sorted_by_tier,structure){
return (function (p__14020__auto__){
return cljs.core.deref((function (){var or__8099__auto__ = (cljs.core.truth_(p__14020__auto__)?con__14017__auto__:alt__14018__auto__);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.atom();
}
})());
});})(con__14017__auto__,alt__14018__auto__,sorted_by_tier,structure))
;
var G__30254 = (function (){var fexpr__30257 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__14017__auto__,alt__14018__auto__,tpl__14019__auto__,sorted_by_tier,structure){
return (function (G__30255,G__30256){
return (G__30255.cljs$core$IFn$_invoke$arity$1 ? G__30255.cljs$core$IFn$_invoke$arity$1(G__30256) : G__30255.call(null,G__30256));
});})(con__14017__auto__,alt__14018__auto__,tpl__14019__auto__,sorted_by_tier,structure))
);
return (fexpr__30257.cljs$core$IFn$_invoke$arity$2 ? fexpr__30257.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,sorted_by_tier) : fexpr__30257.call(null,cljs.core.seq,sorted_by_tier));
})();
var fexpr__30253 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14019__auto__);
return (fexpr__30253.cljs$core$IFn$_invoke$arity$1 ? fexpr__30253.cljs$core$IFn$_invoke$arity$1(G__30254) : fexpr__30253.call(null,G__30254));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$1(G__30237) : hoplon.core.form.call(null,G__30237));
})()], 0));
});
portfolio.hoplon.page = (function portfolio$hoplon$page(conn,ticker){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Configure your portfolio") : hoplon.core.h1.call(null,"Configure your portfolio")),tier.hoplon.ratio(conn),portfolio.hoplon.currently_hodling(conn,ticker),portfolio.hoplon.currencies_form(conn,(function (){var fexpr__30261 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__30260,G__30259){
return (G__30259.cljs$core$IFn$_invoke$arity$1 ? G__30259.cljs$core$IFn$_invoke$arity$1(G__30260) : G__30259.call(null,G__30260));
}));
return (fexpr__30261.cljs$core$IFn$_invoke$arity$2 ? fexpr__30261.cljs$core$IFn$_invoke$arity$2(conn,currency.api.db__GT_currencies) : fexpr__30261.call(null,conn,currency.api.db__GT_currencies));
})())], 0));
});
