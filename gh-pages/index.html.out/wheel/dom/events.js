// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.dom.manipulation');
goog.require('wheel.hoplon.on');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljs.test');
wheel.dom.events.ensure_original_object_BANG_ = (function wheel$dom$events$ensure_original_object_BANG_(e){
if(cljs.core.not((e["originalEvent"]))){
return (e["originalEvent"] = {});
} else {
return e;
}
});
wheel.dom.events.set_data_BANG_ = (function wheel$dom$events$set_data_BANG_(e,k,v){
wheel.dom.events.ensure_original_object_BANG_(e);

((e["originalEvent"])[k] = v);

return e;
});
wheel.dom.events.get_data = (function wheel$dom$events$get_data(e,k){
var temp__5276__auto__ = (e["originalEvent"]);
if(cljs.core.truth_(temp__5276__auto__)){
var original_event = temp__5276__auto__;
return (original_event[k]);
} else {
return null;
}
});
wheel.dom.events.make_bubblable_BANG_ = (function wheel$dom$events$make_bubblable_BANG_(el){
return wheel.dom.manipulation.document_append_BANG_(el);
});
wheel.dom.events.trigger_native_BANG_ = (function wheel$dom$events$trigger_native_BANG_(el,name){
if((el instanceof Element)){
} else {
throw (new Error("Assert failed: (instance? js/Element el)"));
}

var e = document.createEvent("UIEvents");
e.initEvent(name,true,true);

return el.dispatchEvent(e);
});
wheel.dom.events.trigger_jq_BANG_ = (function wheel$dom$events$trigger_jq_BANG_(var_args){
var G__16169 = arguments.length;
switch (G__16169) {
case 2:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,name){
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3(el,name,null);
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,name,properties){
var e = (new jQuery.Event(name,cljs.core.clj__GT_js(properties)));
return jQuery(el).trigger(e);
});

wheel.dom.events.trigger_jq_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.events._QMARK__QMARK_events_set_get_data = (function wheel$dom$events$_QMARK__QMARK_events_set_get_data(){
return cljs.test.test_var(wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var);
});
wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test = (function (){
var result = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var inner = (function (){var G__16173 = cljs.core.cst$kw$input;
var G__16174 = ((function (G__16173,result){
return (function (p1__16171_SHARP_){
return wheel.dom.events.set_data_BANG_(p1__16171_SHARP_,cljs.core.cst$kw$foo,cljs.core.cst$kw$bar);
});})(G__16173,result))
;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__16173,G__16174) : hoplon.core.div.call(null,G__16173,G__16174));
})();
var dom = (function (){var G__16175 = cljs.core.cst$kw$input;
var G__16176 = ((function (G__16175,result,inner){
return (function (p1__16172_SHARP_){
return cljs.core.reset_BANG_(result,wheel.dom.events.get_data(p1__16172_SHARP_,cljs.core.cst$kw$foo));
});})(G__16175,result,inner))
;
var G__16177 = inner;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__16175,G__16176,G__16177) : hoplon.core.div.call(null,G__16175,G__16176,G__16177));
})();
try{var values__15906__auto___16180 = (function (){var x__9034__auto__ = cljs.core.deref(result);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})();
var result__15907__auto___16181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__15906__auto___16180);
if(cljs.core.truth_(result__15907__auto___16181)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__15906__auto___16180),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9034__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__15906__auto___16180);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16178){var t__15944__auto___16182 = e16178;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__15944__auto___16182,cljs.core.cst$kw$message,null], null));
}
wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(inner,"input");

try{var values__15906__auto__ = cljs.core._conj((function (){var x__9034__auto__ = cljs.core.deref(result);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$kw$bar);
var result__15907__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__15906__auto__);
if(cljs.core.truth_(result__15907__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__15906__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9034__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__15906__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__15907__auto__;
}catch (e16179){var t__15944__auto__ = e16179;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__15944__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.events._QMARK__QMARK_events_set_get_data;},cljs.core.cst$sym$wheel$dom$events_SLASH__QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$events,cljs.core.cst$sym$_QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ant-foxing/14he/p0eeom/index.html.out/wheel/dom/events.cljs",31,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.events._QMARK__QMARK_events_set_get_data)?wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test:null)]));
