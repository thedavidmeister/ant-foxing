// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.traversal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.jquery');
goog.require('wheel.dom.events');
goog.require('hoplon.core');
goog.require('cljs.test');
wheel.dom.traversal.is_QMARK_ = (function wheel$dom$traversal$is_QMARK_(el,sel){
return jQuery(el).is(sel);
});
wheel.dom.traversal.find = (function wheel$dom$traversal$find(el,sel){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).find(sel));
});
wheel.dom.traversal.contains_QMARK_ = (function wheel$dom$traversal$contains_QMARK_(el,sel){
return !((wheel.dom.traversal.find(el,sel) == null));
});
wheel.dom.traversal.children = (function wheel$dom$traversal$children(el){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).children());
});
wheel.dom.traversal.exists_QMARK_ = (function wheel$dom$traversal$exists_QMARK_(el,sel){
return ((0) < cljs.core.count(wheel.dom.traversal.find(el,sel)));
});
wheel.dom.traversal.contains_attrs_QMARK_ = (function wheel$dom$traversal$contains_attrs_QMARK_(el,attrs,vals){
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__16185 = el;
var G__16186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__16187 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__16185,G__16186,G__16187) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__16185,G__16186,G__16187));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__16188 = el;
var G__16189 = attrs;
var G__16190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__16188,G__16189,G__16190) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__16188,G__16189,G__16190));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__8962__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__16191(s__16192){
return (new cljs.core.LazySeq(null,(function (){
var s__16192__$1 = s__16192;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__16192__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var attr = cljs.core.first(xs__5831__auto__);
var iterys__8958__auto__ = ((function (s__16192__$1,attr,xs__5831__auto__,temp__5278__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__16191_$_iter__16193(s__16194){
return (new cljs.core.LazySeq(null,((function (s__16192__$1,attr,xs__5831__auto__,temp__5278__auto__){
return (function (){
var s__16194__$1 = s__16194;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__16194__$1);
if(temp__5278__auto____$1){
var s__16194__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16194__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__16194__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__16196 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__16195 = (0);
while(true){
if((i__16195 < size__8961__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__16195);
cljs.core.chunk_append(b__16196,!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)));

var G__16197 = (i__16195 + (1));
i__16195 = G__16197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16196),wheel$dom$traversal$contains_attrs_QMARK__$_iter__16191_$_iter__16193(cljs.core.chunk_rest(s__16194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16196),null);
}
} else {
var val = cljs.core.first(s__16194__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__16191_$_iter__16193(cljs.core.rest(s__16194__$2)));
}
} else {
return null;
}
break;
}
});})(s__16192__$1,attr,xs__5831__auto__,temp__5278__auto__))
,null,null));
});})(s__16192__$1,attr,xs__5831__auto__,temp__5278__auto__))
;
var fs__8959__auto__ = cljs.core.seq(iterys__8958__auto__(vals));
if(fs__8959__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8959__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__16191(cljs.core.rest(s__16192__$1)));
} else {
var G__16198 = cljs.core.rest(s__16192__$1);
s__16192__$1 = G__16198;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(attrs);
})())
));
if(cljs.core.boolean_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (boolean? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.attr = (function wheel$dom$traversal$attr(el,attr_name){
return jQuery(el).attr(attr_name);
});
wheel.dom.traversal.find_attr = (function wheel$dom$traversal$find_attr(el,sel,attr_name){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16199_SHARP_){
return wheel.dom.traversal.attr(p1__16199_SHARP_,attr_name);
}),wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.text = (function wheel$dom$traversal$text(el){
return jQuery(el).text();
});
wheel.dom.traversal.find_text = (function wheel$dom$traversal$find_text(el,sel){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.text,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.val = (function wheel$dom$traversal$val(el){
return jQuery(el).val();
});
wheel.dom.traversal.find_val = (function wheel$dom$traversal$find_val(el,sel){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.val,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
/**
 * Sets the val of el to the given v, but also triggers input, which is often necessary for tests.
 */
wheel.dom.traversal.input_val_BANG_ = (function wheel$dom$traversal$input_val_BANG_(el,v){
return jQuery(el).val(v).trigger("input");
});
wheel.dom.traversal.find_fn_input_val_BANG_ = (function wheel$dom$traversal$find_fn_input_val_BANG_(var_args){
var G__16201 = arguments.length;
switch (G__16201) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = (function (){var G__16202 = wheel.dom.traversal.find(jQuery(el),sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16202) : f.call(null,G__16202));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var G__16205 = arguments.length;
switch (G__16205) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3(el,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,sel,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,sel,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.traversal.css = (function wheel$dom$traversal$css(el,k){
return jQuery(el).css(k);
});
/**
 * Use jQuery to trigger the given event on the first match of sel
 */
wheel.dom.traversal.trigger_first_BANG_ = (function wheel$dom$traversal$trigger_first_BANG_(el,sel,e){
var target = cljs.core.first(wheel.dom.traversal.find(el,sel));
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(target,e);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_ = (function wheel$dom$traversal$_QMARK__QMARK_contains_attrs_QMARK_(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test = (function (){
var seq__16207 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__16208 = null;
var count__16209 = (0);
var i__16210 = (0);
while(true){
if((i__16210 < count__16209)){
var v = chunk__16208.cljs$core$IIndexed$_nth$arity$2(null,i__16210);
try{var values__15906__auto___16225 = (function (){var x__9034__auto__ = (function (){var G__16215 = (function (){var G__16216 = cljs.core.cst$kw$data_DASH_foo;
var G__16217 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__16216,G__16217) : hoplon.core.div.call(null,G__16216,G__16217));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__16215) : hoplon.core.div.call(null,G__16215));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9034__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9034__auto__);
})();
var result__15907__auto___16226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__15906__auto___16225);
if(cljs.core.truth_(result__15907__auto___16226)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__15906__auto___16225),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9034__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__15906__auto___16225);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16211){var t__15944__auto___16227 = e16211;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__15944__auto___16227,cljs.core.cst$kw$message,null], null));
}
var G__16228 = seq__16207;
var G__16229 = chunk__16208;
var G__16230 = count__16209;
var G__16231 = (i__16210 + (1));
seq__16207 = G__16228;
chunk__16208 = G__16229;
count__16209 = G__16230;
i__16210 = G__16231;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__16207);
if(temp__5278__auto__){
var seq__16207__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16207__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__16207__$1);
var G__16232 = cljs.core.chunk_rest(seq__16207__$1);
var G__16233 = c__9011__auto__;
var G__16234 = cljs.core.count(c__9011__auto__);
var G__16235 = (0);
seq__16207 = G__16232;
chunk__16208 = G__16233;
count__16209 = G__16234;
i__16210 = G__16235;
continue;
} else {
var v = cljs.core.first(seq__16207__$1);
try{var values__15906__auto___16236 = (function (){var x__9034__auto__ = (function (){var G__16222 = (function (){var G__16223 = cljs.core.cst$kw$data_DASH_foo;
var G__16224 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__16223,G__16224) : hoplon.core.div.call(null,G__16223,G__16224));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__16222) : hoplon.core.div.call(null,G__16222));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9034__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9034__auto__);
})();
var result__15907__auto___16237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__15906__auto___16236);
if(cljs.core.truth_(result__15907__auto___16237)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__15906__auto___16236),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9034__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__15906__auto___16236);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16218){var t__15944__auto___16238 = e16218;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__15944__auto___16238,cljs.core.cst$kw$message,null], null));
}
var G__16239 = cljs.core.next(seq__16207__$1);
var G__16240 = null;
var G__16241 = (0);
var G__16242 = (0);
seq__16207 = G__16239;
chunk__16208 = G__16240;
count__16209 = G__16241;
i__16210 = G__16242;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ant-foxing/14he/p0eeom/index.html.out/wheel/dom/traversal.cljs",27,1,101,101,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
