// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__31302 = el;
var G__31303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__31304 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__31302,G__31303,G__31304) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__31302,G__31303,G__31304));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__31305 = el;
var G__31306 = attrs;
var G__31307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__31305,G__31306,G__31307) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__31305,G__31306,G__31307));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__9639__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__31308(s__31309){
return (new cljs.core.LazySeq(null,(function (){
var s__31309__$1 = s__31309;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__31309__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var attr = cljs.core.first(xs__5831__auto__);
var iterys__9635__auto__ = ((function (s__31309__$1,attr,xs__5831__auto__,temp__5278__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__31308_$_iter__31310(s__31311){
return (new cljs.core.LazySeq(null,((function (s__31309__$1,attr,xs__5831__auto__,temp__5278__auto__){
return (function (){
var s__31311__$1 = s__31311;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__31311__$1);
if(temp__5278__auto____$1){
var s__31311__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31311__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__31311__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__31313 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__31312 = (0);
while(true){
if((i__31312 < size__9638__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__31312);
cljs.core.chunk_append(b__31313,!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)));

var G__31314 = (i__31312 + (1));
i__31312 = G__31314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31313),wheel$dom$traversal$contains_attrs_QMARK__$_iter__31308_$_iter__31310(cljs.core.chunk_rest(s__31311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31313),null);
}
} else {
var val = cljs.core.first(s__31311__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__31308_$_iter__31310(cljs.core.rest(s__31311__$2)));
}
} else {
return null;
}
break;
}
});})(s__31309__$1,attr,xs__5831__auto__,temp__5278__auto__))
,null,null));
});})(s__31309__$1,attr,xs__5831__auto__,temp__5278__auto__))
;
var fs__9636__auto__ = cljs.core.seq(iterys__9635__auto__(vals));
if(fs__9636__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9636__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__31308(cljs.core.rest(s__31309__$1)));
} else {
var G__31315 = cljs.core.rest(s__31309__$1);
s__31309__$1 = G__31315;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9639__auto__(attrs);
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
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31316_SHARP_){
return wheel.dom.traversal.attr(p1__31316_SHARP_,attr_name);
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
var G__31318 = arguments.length;
switch (G__31318) {
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
var target = (function (){var G__31319 = wheel.dom.traversal.find(jQuery(el),sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31319) : f.call(null,G__31319));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var G__31322 = arguments.length;
switch (G__31322) {
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
var seq__31324 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__31325 = null;
var count__31326 = (0);
var i__31327 = (0);
while(true){
if((i__31327 < count__31326)){
var v = chunk__31325.cljs$core$IIndexed$_nth$arity$2(null,i__31327);
try{var values__17396__auto___31342 = (function (){var x__9711__auto__ = (function (){var G__31332 = (function (){var G__31333 = cljs.core.cst$kw$data_DASH_foo;
var G__31334 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__31333,G__31334) : hoplon.core.div.call(null,G__31333,G__31334));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31332) : hoplon.core.div.call(null,G__31332));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9711__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9711__auto__);
})();
var result__17397__auto___31343 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17396__auto___31342);
if(cljs.core.truth_(result__17397__auto___31343)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17396__auto___31342),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17396__auto___31342);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31328){var t__17441__auto___31344 = e31328;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17441__auto___31344,cljs.core.cst$kw$message,null], null));
}
var G__31345 = seq__31324;
var G__31346 = chunk__31325;
var G__31347 = count__31326;
var G__31348 = (i__31327 + (1));
seq__31324 = G__31345;
chunk__31325 = G__31346;
count__31326 = G__31347;
i__31327 = G__31348;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__31324);
if(temp__5278__auto__){
var seq__31324__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31324__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__31324__$1);
var G__31349 = cljs.core.chunk_rest(seq__31324__$1);
var G__31350 = c__9688__auto__;
var G__31351 = cljs.core.count(c__9688__auto__);
var G__31352 = (0);
seq__31324 = G__31349;
chunk__31325 = G__31350;
count__31326 = G__31351;
i__31327 = G__31352;
continue;
} else {
var v = cljs.core.first(seq__31324__$1);
try{var values__17396__auto___31353 = (function (){var x__9711__auto__ = (function (){var G__31339 = (function (){var G__31340 = cljs.core.cst$kw$data_DASH_foo;
var G__31341 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__31340,G__31341) : hoplon.core.div.call(null,G__31340,G__31341));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__31339) : hoplon.core.div.call(null,G__31339));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9711__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9711__auto__);
})();
var result__17397__auto___31354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17396__auto___31353);
if(cljs.core.truth_(result__17397__auto___31354)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17396__auto___31353),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17396__auto___31353);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e31335){var t__17441__auto___31355 = e31335;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17441__auto___31355,cljs.core.cst$kw$message,null], null));
}
var G__31356 = cljs.core.next(seq__31324__$1);
var G__31357 = null;
var G__31358 = (0);
var G__31359 = (0);
seq__31324 = G__31356;
chunk__31325 = G__31357;
count__31326 = G__31358;
i__31327 = G__31359;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/eaq/-9aykq3/index.html.out/wheel/dom/traversal.cljs",27,1,101,101,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
