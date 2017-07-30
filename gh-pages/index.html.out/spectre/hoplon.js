// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('spectre.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
spectre.hoplon.styles = (function spectre$hoplon$styles(){
var G__15983 = cljs.core.cst$kw$rel;
var G__15984 = "stylesheet";
var G__15985 = cljs.core.cst$kw$href;
var G__15986 = "spectre.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__15983,G__15984,G__15985,G__15986) : hoplon.core.link.call(null,G__15983,G__15984,G__15985,G__15986));
});
/**
 * @param {...*} var_args
 */
spectre.hoplon.wrapper = (function() { 
var spectre$hoplon$wrapper__delegate = function (args__15441__auto__){
var vec__15987 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(1),null);
var G__15990 = cljs.core.cst$kw$class;
var G__15991 = "wrapper";
var G__15992 = attributes;
var G__15993 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__15990,G__15991,G__15992,G__15993) : hoplon.core.div.call(null,G__15990,G__15991,G__15992,G__15993));
};
var spectre$hoplon$wrapper = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__15994__i = 0, G__15994__a = new Array(arguments.length -  0);
while (G__15994__i < G__15994__a.length) {G__15994__a[G__15994__i] = arguments[G__15994__i + 0]; ++G__15994__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__15994__a,0,null);
} 
return spectre$hoplon$wrapper__delegate.call(this,args__15441__auto__);};
spectre$hoplon$wrapper.cljs$lang$maxFixedArity = 0;
spectre$hoplon$wrapper.cljs$lang$applyTo = (function (arglist__15995){
var args__15441__auto__ = cljs.core.seq(arglist__15995);
return spectre$hoplon$wrapper__delegate(args__15441__auto__);
});
spectre$hoplon$wrapper.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$wrapper__delegate;
return spectre$hoplon$wrapper;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.page_content = (function() { 
var spectre$hoplon$page_content__delegate = function (args__15441__auto__){
var vec__15996 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15996,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15996,(1),null);
var G__15999 = cljs.core.cst$kw$class;
var G__16000 = "page-content";
var G__16001 = attributes;
var G__16002 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__15999,G__16000,G__16001,G__16002) : hoplon.core.div.call(null,G__15999,G__16000,G__16001,G__16002));
};
var spectre$hoplon$page_content = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16003__i = 0, G__16003__a = new Array(arguments.length -  0);
while (G__16003__i < G__16003__a.length) {G__16003__a[G__16003__i] = arguments[G__16003__i + 0]; ++G__16003__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16003__a,0,null);
} 
return spectre$hoplon$page_content__delegate.call(this,args__15441__auto__);};
spectre$hoplon$page_content.cljs$lang$maxFixedArity = 0;
spectre$hoplon$page_content.cljs$lang$applyTo = (function (arglist__16004){
var args__15441__auto__ = cljs.core.seq(arglist__16004);
return spectre$hoplon$page_content__delegate(args__15441__auto__);
});
spectre$hoplon$page_content.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$page_content__delegate;
return spectre$hoplon$page_content;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.table = (function() { 
var spectre$hoplon$table__delegate = function (args__15441__auto__){
var vec__16005 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(1),null);
var G__16008 = cljs.core.cst$kw$class;
var G__16009 = "table";
var G__16010 = attributes;
var G__16011 = children;
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__16008,G__16009,G__16010,G__16011) : hoplon.core.table.call(null,G__16008,G__16009,G__16010,G__16011));
};
var spectre$hoplon$table = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16012__i = 0, G__16012__a = new Array(arguments.length -  0);
while (G__16012__i < G__16012__a.length) {G__16012__a[G__16012__i] = arguments[G__16012__i + 0]; ++G__16012__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16012__a,0,null);
} 
return spectre$hoplon$table__delegate.call(this,args__15441__auto__);};
spectre$hoplon$table.cljs$lang$maxFixedArity = 0;
spectre$hoplon$table.cljs$lang$applyTo = (function (arglist__16013){
var args__15441__auto__ = cljs.core.seq(arglist__16013);
return spectre$hoplon$table__delegate(args__15441__auto__);
});
spectre$hoplon$table.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$table__delegate;
return spectre$hoplon$table;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.panel = (function() { 
var spectre$hoplon$panel__delegate = function (args__15441__auto__){
var vec__16014 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16014,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16014,(1),null);
var G__16017 = cljs.core.cst$kw$class;
var G__16018 = "panel";
var G__16019 = attributes;
var G__16020 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__16017,G__16018,G__16019,G__16020) : hoplon.core.div.call(null,G__16017,G__16018,G__16019,G__16020));
};
var spectre$hoplon$panel = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16021__i = 0, G__16021__a = new Array(arguments.length -  0);
while (G__16021__i < G__16021__a.length) {G__16021__a[G__16021__i] = arguments[G__16021__i + 0]; ++G__16021__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16021__a,0,null);
} 
return spectre$hoplon$panel__delegate.call(this,args__15441__auto__);};
spectre$hoplon$panel.cljs$lang$maxFixedArity = 0;
spectre$hoplon$panel.cljs$lang$applyTo = (function (arglist__16022){
var args__15441__auto__ = cljs.core.seq(arglist__16022);
return spectre$hoplon$panel__delegate(args__15441__auto__);
});
spectre$hoplon$panel.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$panel__delegate;
return spectre$hoplon$panel;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav = (function() { 
var spectre$hoplon$nav__delegate = function (args__15441__auto__){
var vec__16023 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023,(1),null);
var G__16026 = cljs.core.cst$kw$class;
var G__16027 = "nav";
var G__16028 = attributes;
var G__16029 = children;
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$4(G__16026,G__16027,G__16028,G__16029) : hoplon.core.nav.call(null,G__16026,G__16027,G__16028,G__16029));
};
var spectre$hoplon$nav = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16030__i = 0, G__16030__a = new Array(arguments.length -  0);
while (G__16030__i < G__16030__a.length) {G__16030__a[G__16030__i] = arguments[G__16030__i + 0]; ++G__16030__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16030__a,0,null);
} 
return spectre$hoplon$nav__delegate.call(this,args__15441__auto__);};
spectre$hoplon$nav.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav.cljs$lang$applyTo = (function (arglist__16031){
var args__15441__auto__ = cljs.core.seq(arglist__16031);
return spectre$hoplon$nav__delegate(args__15441__auto__);
});
spectre$hoplon$nav.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav__delegate;
return spectre$hoplon$nav;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav_item = (function() { 
var spectre$hoplon$nav_item__delegate = function (args__15441__auto__){
var vec__16032 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16032,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16032,(1),null);
var G__16035 = cljs.core.cst$kw$class;
var G__16036 = "nav-item";
var G__16037 = attributes;
var G__16038 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__16035,G__16036,G__16037,G__16038) : hoplon.core.a.call(null,G__16035,G__16036,G__16037,G__16038));
};
var spectre$hoplon$nav_item = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16039__i = 0, G__16039__a = new Array(arguments.length -  0);
while (G__16039__i < G__16039__a.length) {G__16039__a[G__16039__i] = arguments[G__16039__i + 0]; ++G__16039__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16039__a,0,null);
} 
return spectre$hoplon$nav_item__delegate.call(this,args__15441__auto__);};
spectre$hoplon$nav_item.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav_item.cljs$lang$applyTo = (function (arglist__16040){
var args__15441__auto__ = cljs.core.seq(arglist__16040);
return spectre$hoplon$nav_item__delegate(args__15441__auto__);
});
spectre$hoplon$nav_item.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav_item__delegate;
return spectre$hoplon$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_input = (function() { 
var spectre$hoplon$form_input__delegate = function (args__15441__auto__){
var vec__16041 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16041,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16041,(1),null);
var G__16044 = cljs.core.cst$kw$class;
var G__16045 = "form-input";
var G__16046 = attributes;
var G__16047 = children;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$4(G__16044,G__16045,G__16046,G__16047) : hoplon.core.input.call(null,G__16044,G__16045,G__16046,G__16047));
};
var spectre$hoplon$form_input = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16048__i = 0, G__16048__a = new Array(arguments.length -  0);
while (G__16048__i < G__16048__a.length) {G__16048__a[G__16048__i] = arguments[G__16048__i + 0]; ++G__16048__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16048__a,0,null);
} 
return spectre$hoplon$form_input__delegate.call(this,args__15441__auto__);};
spectre$hoplon$form_input.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_input.cljs$lang$applyTo = (function (arglist__16049){
var args__15441__auto__ = cljs.core.seq(arglist__16049);
return spectre$hoplon$form_input__delegate(args__15441__auto__);
});
spectre$hoplon$form_input.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_input__delegate;
return spectre$hoplon$form_input;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_textarea = (function() { 
var spectre$hoplon$form_textarea__delegate = function (args__15441__auto__){
var vec__16050 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16050,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16050,(1),null);
var G__16053 = cljs.core.cst$kw$class;
var G__16054 = "form-input";
var G__16055 = attributes;
var G__16056 = children;
return (hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4(G__16053,G__16054,G__16055,G__16056) : hoplon.core.textarea.call(null,G__16053,G__16054,G__16055,G__16056));
};
var spectre$hoplon$form_textarea = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16057__i = 0, G__16057__a = new Array(arguments.length -  0);
while (G__16057__i < G__16057__a.length) {G__16057__a[G__16057__i] = arguments[G__16057__i + 0]; ++G__16057__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16057__a,0,null);
} 
return spectre$hoplon$form_textarea__delegate.call(this,args__15441__auto__);};
spectre$hoplon$form_textarea.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_textarea.cljs$lang$applyTo = (function (arglist__16058){
var args__15441__auto__ = cljs.core.seq(arglist__16058);
return spectre$hoplon$form_textarea__delegate(args__15441__auto__);
});
spectre$hoplon$form_textarea.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_textarea__delegate;
return spectre$hoplon$form_textarea;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.button = (function() { 
var spectre$hoplon$button__delegate = function (args__15441__auto__){
var vec__16059 = hoplon.core.parse_args(args__15441__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(1),null);
var G__16062 = cljs.core.cst$kw$class;
var G__16063 = "btn";
var G__16064 = attributes;
var G__16065 = children;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$4(G__16062,G__16063,G__16064,G__16065) : hoplon.core.button.call(null,G__16062,G__16063,G__16064,G__16065));
};
var spectre$hoplon$button = function (var_args){
var args__15441__auto__ = null;
if (arguments.length > 0) {
var G__16066__i = 0, G__16066__a = new Array(arguments.length -  0);
while (G__16066__i < G__16066__a.length) {G__16066__a[G__16066__i] = arguments[G__16066__i + 0]; ++G__16066__i;}
  args__15441__auto__ = new cljs.core.IndexedSeq(G__16066__a,0,null);
} 
return spectre$hoplon$button__delegate.call(this,args__15441__auto__);};
spectre$hoplon$button.cljs$lang$maxFixedArity = 0;
spectre$hoplon$button.cljs$lang$applyTo = (function (arglist__16067){
var args__15441__auto__ = cljs.core.seq(arglist__16067);
return spectre$hoplon$button__delegate(args__15441__auto__);
});
spectre$hoplon$button.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$button__delegate;
return spectre$hoplon$button;
})()
;
