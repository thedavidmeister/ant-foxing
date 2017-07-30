// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('spectre.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
spectre.hoplon.styles = (function spectre$hoplon$styles(){
var G__22054 = cljs.core.cst$kw$rel;
var G__22055 = "stylesheet";
var G__22056 = cljs.core.cst$kw$href;
var G__22057 = "spectre.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__22054,G__22055,G__22056,G__22057) : hoplon.core.link.call(null,G__22054,G__22055,G__22056,G__22057));
});
/**
 * @param {...*} var_args
 */
spectre.hoplon.wrapper = (function() { 
var spectre$hoplon$wrapper__delegate = function (args__21512__auto__){
var vec__22058 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22058,(1),null);
var G__22061 = cljs.core.cst$kw$class;
var G__22062 = "wrapper";
var G__22063 = attributes;
var G__22064 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22061,G__22062,G__22063,G__22064) : hoplon.core.div.call(null,G__22061,G__22062,G__22063,G__22064));
};
var spectre$hoplon$wrapper = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22065__i = 0, G__22065__a = new Array(arguments.length -  0);
while (G__22065__i < G__22065__a.length) {G__22065__a[G__22065__i] = arguments[G__22065__i + 0]; ++G__22065__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22065__a,0,null);
} 
return spectre$hoplon$wrapper__delegate.call(this,args__21512__auto__);};
spectre$hoplon$wrapper.cljs$lang$maxFixedArity = 0;
spectre$hoplon$wrapper.cljs$lang$applyTo = (function (arglist__22066){
var args__21512__auto__ = cljs.core.seq(arglist__22066);
return spectre$hoplon$wrapper__delegate(args__21512__auto__);
});
spectre$hoplon$wrapper.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$wrapper__delegate;
return spectre$hoplon$wrapper;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.page_content = (function() { 
var spectre$hoplon$page_content__delegate = function (args__21512__auto__){
var vec__22067 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,(1),null);
var G__22070 = cljs.core.cst$kw$class;
var G__22071 = "page-content";
var G__22072 = attributes;
var G__22073 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22070,G__22071,G__22072,G__22073) : hoplon.core.div.call(null,G__22070,G__22071,G__22072,G__22073));
};
var spectre$hoplon$page_content = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22074__i = 0, G__22074__a = new Array(arguments.length -  0);
while (G__22074__i < G__22074__a.length) {G__22074__a[G__22074__i] = arguments[G__22074__i + 0]; ++G__22074__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22074__a,0,null);
} 
return spectre$hoplon$page_content__delegate.call(this,args__21512__auto__);};
spectre$hoplon$page_content.cljs$lang$maxFixedArity = 0;
spectre$hoplon$page_content.cljs$lang$applyTo = (function (arglist__22075){
var args__21512__auto__ = cljs.core.seq(arglist__22075);
return spectre$hoplon$page_content__delegate(args__21512__auto__);
});
spectre$hoplon$page_content.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$page_content__delegate;
return spectre$hoplon$page_content;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.table = (function() { 
var spectre$hoplon$table__delegate = function (args__21512__auto__){
var vec__22076 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(1),null);
var G__22079 = cljs.core.cst$kw$class;
var G__22080 = "table";
var G__22081 = attributes;
var G__22082 = children;
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__22079,G__22080,G__22081,G__22082) : hoplon.core.table.call(null,G__22079,G__22080,G__22081,G__22082));
};
var spectre$hoplon$table = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22083__i = 0, G__22083__a = new Array(arguments.length -  0);
while (G__22083__i < G__22083__a.length) {G__22083__a[G__22083__i] = arguments[G__22083__i + 0]; ++G__22083__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22083__a,0,null);
} 
return spectre$hoplon$table__delegate.call(this,args__21512__auto__);};
spectre$hoplon$table.cljs$lang$maxFixedArity = 0;
spectre$hoplon$table.cljs$lang$applyTo = (function (arglist__22084){
var args__21512__auto__ = cljs.core.seq(arglist__22084);
return spectre$hoplon$table__delegate(args__21512__auto__);
});
spectre$hoplon$table.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$table__delegate;
return spectre$hoplon$table;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.panel = (function() { 
var spectre$hoplon$panel__delegate = function (args__21512__auto__){
var vec__22085 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,(1),null);
var G__22088 = cljs.core.cst$kw$class;
var G__22089 = "panel";
var G__22090 = attributes;
var G__22091 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22088,G__22089,G__22090,G__22091) : hoplon.core.div.call(null,G__22088,G__22089,G__22090,G__22091));
};
var spectre$hoplon$panel = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22092__i = 0, G__22092__a = new Array(arguments.length -  0);
while (G__22092__i < G__22092__a.length) {G__22092__a[G__22092__i] = arguments[G__22092__i + 0]; ++G__22092__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22092__a,0,null);
} 
return spectre$hoplon$panel__delegate.call(this,args__21512__auto__);};
spectre$hoplon$panel.cljs$lang$maxFixedArity = 0;
spectre$hoplon$panel.cljs$lang$applyTo = (function (arglist__22093){
var args__21512__auto__ = cljs.core.seq(arglist__22093);
return spectre$hoplon$panel__delegate(args__21512__auto__);
});
spectre$hoplon$panel.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$panel__delegate;
return spectre$hoplon$panel;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav = (function() { 
var spectre$hoplon$nav__delegate = function (args__21512__auto__){
var vec__22094 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094,(1),null);
var G__22097 = cljs.core.cst$kw$class;
var G__22098 = "nav";
var G__22099 = attributes;
var G__22100 = children;
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$4(G__22097,G__22098,G__22099,G__22100) : hoplon.core.nav.call(null,G__22097,G__22098,G__22099,G__22100));
};
var spectre$hoplon$nav = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22101__i = 0, G__22101__a = new Array(arguments.length -  0);
while (G__22101__i < G__22101__a.length) {G__22101__a[G__22101__i] = arguments[G__22101__i + 0]; ++G__22101__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22101__a,0,null);
} 
return spectre$hoplon$nav__delegate.call(this,args__21512__auto__);};
spectre$hoplon$nav.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav.cljs$lang$applyTo = (function (arglist__22102){
var args__21512__auto__ = cljs.core.seq(arglist__22102);
return spectre$hoplon$nav__delegate(args__21512__auto__);
});
spectre$hoplon$nav.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav__delegate;
return spectre$hoplon$nav;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav_item = (function() { 
var spectre$hoplon$nav_item__delegate = function (args__21512__auto__){
var vec__22103 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(1),null);
var G__22106 = cljs.core.cst$kw$class;
var G__22107 = "nav-item";
var G__22108 = attributes;
var G__22109 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__22106,G__22107,G__22108,G__22109) : hoplon.core.a.call(null,G__22106,G__22107,G__22108,G__22109));
};
var spectre$hoplon$nav_item = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22110__i = 0, G__22110__a = new Array(arguments.length -  0);
while (G__22110__i < G__22110__a.length) {G__22110__a[G__22110__i] = arguments[G__22110__i + 0]; ++G__22110__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22110__a,0,null);
} 
return spectre$hoplon$nav_item__delegate.call(this,args__21512__auto__);};
spectre$hoplon$nav_item.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav_item.cljs$lang$applyTo = (function (arglist__22111){
var args__21512__auto__ = cljs.core.seq(arglist__22111);
return spectre$hoplon$nav_item__delegate(args__21512__auto__);
});
spectre$hoplon$nav_item.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav_item__delegate;
return spectre$hoplon$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_input = (function() { 
var spectre$hoplon$form_input__delegate = function (args__21512__auto__){
var vec__22112 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,(1),null);
var G__22115 = cljs.core.cst$kw$class;
var G__22116 = "form-input";
var G__22117 = attributes;
var G__22118 = children;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$4(G__22115,G__22116,G__22117,G__22118) : hoplon.core.input.call(null,G__22115,G__22116,G__22117,G__22118));
};
var spectre$hoplon$form_input = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22119__i = 0, G__22119__a = new Array(arguments.length -  0);
while (G__22119__i < G__22119__a.length) {G__22119__a[G__22119__i] = arguments[G__22119__i + 0]; ++G__22119__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22119__a,0,null);
} 
return spectre$hoplon$form_input__delegate.call(this,args__21512__auto__);};
spectre$hoplon$form_input.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_input.cljs$lang$applyTo = (function (arglist__22120){
var args__21512__auto__ = cljs.core.seq(arglist__22120);
return spectre$hoplon$form_input__delegate(args__21512__auto__);
});
spectre$hoplon$form_input.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_input__delegate;
return spectre$hoplon$form_input;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_textarea = (function() { 
var spectre$hoplon$form_textarea__delegate = function (args__21512__auto__){
var vec__22121 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(1),null);
var G__22124 = cljs.core.cst$kw$class;
var G__22125 = "form-input";
var G__22126 = attributes;
var G__22127 = children;
return (hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4(G__22124,G__22125,G__22126,G__22127) : hoplon.core.textarea.call(null,G__22124,G__22125,G__22126,G__22127));
};
var spectre$hoplon$form_textarea = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22128__i = 0, G__22128__a = new Array(arguments.length -  0);
while (G__22128__i < G__22128__a.length) {G__22128__a[G__22128__i] = arguments[G__22128__i + 0]; ++G__22128__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22128__a,0,null);
} 
return spectre$hoplon$form_textarea__delegate.call(this,args__21512__auto__);};
spectre$hoplon$form_textarea.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_textarea.cljs$lang$applyTo = (function (arglist__22129){
var args__21512__auto__ = cljs.core.seq(arglist__22129);
return spectre$hoplon$form_textarea__delegate(args__21512__auto__);
});
spectre$hoplon$form_textarea.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_textarea__delegate;
return spectre$hoplon$form_textarea;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.button = (function() { 
var spectre$hoplon$button__delegate = function (args__21512__auto__){
var vec__22130 = hoplon.core.parse_args(args__21512__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(1),null);
var G__22133 = cljs.core.cst$kw$class;
var G__22134 = "btn";
var G__22135 = attributes;
var G__22136 = children;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$4(G__22133,G__22134,G__22135,G__22136) : hoplon.core.button.call(null,G__22133,G__22134,G__22135,G__22136));
};
var spectre$hoplon$button = function (var_args){
var args__21512__auto__ = null;
if (arguments.length > 0) {
var G__22137__i = 0, G__22137__a = new Array(arguments.length -  0);
while (G__22137__i < G__22137__a.length) {G__22137__a[G__22137__i] = arguments[G__22137__i + 0]; ++G__22137__i;}
  args__21512__auto__ = new cljs.core.IndexedSeq(G__22137__a,0,null);
} 
return spectre$hoplon$button__delegate.call(this,args__21512__auto__);};
spectre$hoplon$button.cljs$lang$maxFixedArity = 0;
spectre$hoplon$button.cljs$lang$applyTo = (function (arglist__22138){
var args__21512__auto__ = cljs.core.seq(arglist__22138);
return spectre$hoplon$button__delegate(args__21512__auto__);
});
spectre$hoplon$button.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$button__delegate;
return spectre$hoplon$button;
})()
;
