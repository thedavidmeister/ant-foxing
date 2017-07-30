// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('spectre.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
spectre.hoplon.styles = (function spectre$hoplon$styles(){
var G__22158 = cljs.core.cst$kw$rel;
var G__22159 = "stylesheet";
var G__22160 = cljs.core.cst$kw$href;
var G__22161 = "spectre.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__22158,G__22159,G__22160,G__22161) : hoplon.core.link.call(null,G__22158,G__22159,G__22160,G__22161));
});
/**
 * @param {...*} var_args
 */
spectre.hoplon.wrapper = (function() { 
var spectre$hoplon$wrapper__delegate = function (args__21560__auto__){
var vec__22162 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(1),null);
var G__22165 = cljs.core.cst$kw$class;
var G__22166 = "wrapper";
var G__22167 = attributes;
var G__22168 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22165,G__22166,G__22167,G__22168) : hoplon.core.div.call(null,G__22165,G__22166,G__22167,G__22168));
};
var spectre$hoplon$wrapper = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22169__i = 0, G__22169__a = new Array(arguments.length -  0);
while (G__22169__i < G__22169__a.length) {G__22169__a[G__22169__i] = arguments[G__22169__i + 0]; ++G__22169__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22169__a,0,null);
} 
return spectre$hoplon$wrapper__delegate.call(this,args__21560__auto__);};
spectre$hoplon$wrapper.cljs$lang$maxFixedArity = 0;
spectre$hoplon$wrapper.cljs$lang$applyTo = (function (arglist__22170){
var args__21560__auto__ = cljs.core.seq(arglist__22170);
return spectre$hoplon$wrapper__delegate(args__21560__auto__);
});
spectre$hoplon$wrapper.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$wrapper__delegate;
return spectre$hoplon$wrapper;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.page_content = (function() { 
var spectre$hoplon$page_content__delegate = function (args__21560__auto__){
var vec__22171 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(1),null);
var G__22174 = cljs.core.cst$kw$class;
var G__22175 = "page-content";
var G__22176 = attributes;
var G__22177 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22174,G__22175,G__22176,G__22177) : hoplon.core.div.call(null,G__22174,G__22175,G__22176,G__22177));
};
var spectre$hoplon$page_content = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22178__i = 0, G__22178__a = new Array(arguments.length -  0);
while (G__22178__i < G__22178__a.length) {G__22178__a[G__22178__i] = arguments[G__22178__i + 0]; ++G__22178__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22178__a,0,null);
} 
return spectre$hoplon$page_content__delegate.call(this,args__21560__auto__);};
spectre$hoplon$page_content.cljs$lang$maxFixedArity = 0;
spectre$hoplon$page_content.cljs$lang$applyTo = (function (arglist__22179){
var args__21560__auto__ = cljs.core.seq(arglist__22179);
return spectre$hoplon$page_content__delegate(args__21560__auto__);
});
spectre$hoplon$page_content.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$page_content__delegate;
return spectre$hoplon$page_content;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.table = (function() { 
var spectre$hoplon$table__delegate = function (args__21560__auto__){
var vec__22180 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(1),null);
var G__22183 = cljs.core.cst$kw$class;
var G__22184 = "table";
var G__22185 = attributes;
var G__22186 = children;
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__22183,G__22184,G__22185,G__22186) : hoplon.core.table.call(null,G__22183,G__22184,G__22185,G__22186));
};
var spectre$hoplon$table = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22187__i = 0, G__22187__a = new Array(arguments.length -  0);
while (G__22187__i < G__22187__a.length) {G__22187__a[G__22187__i] = arguments[G__22187__i + 0]; ++G__22187__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22187__a,0,null);
} 
return spectre$hoplon$table__delegate.call(this,args__21560__auto__);};
spectre$hoplon$table.cljs$lang$maxFixedArity = 0;
spectre$hoplon$table.cljs$lang$applyTo = (function (arglist__22188){
var args__21560__auto__ = cljs.core.seq(arglist__22188);
return spectre$hoplon$table__delegate(args__21560__auto__);
});
spectre$hoplon$table.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$table__delegate;
return spectre$hoplon$table;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.panel = (function() { 
var spectre$hoplon$panel__delegate = function (args__21560__auto__){
var vec__22189 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22189,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22189,(1),null);
var G__22192 = cljs.core.cst$kw$class;
var G__22193 = "panel";
var G__22194 = attributes;
var G__22195 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__22192,G__22193,G__22194,G__22195) : hoplon.core.div.call(null,G__22192,G__22193,G__22194,G__22195));
};
var spectre$hoplon$panel = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22196__i = 0, G__22196__a = new Array(arguments.length -  0);
while (G__22196__i < G__22196__a.length) {G__22196__a[G__22196__i] = arguments[G__22196__i + 0]; ++G__22196__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22196__a,0,null);
} 
return spectre$hoplon$panel__delegate.call(this,args__21560__auto__);};
spectre$hoplon$panel.cljs$lang$maxFixedArity = 0;
spectre$hoplon$panel.cljs$lang$applyTo = (function (arglist__22197){
var args__21560__auto__ = cljs.core.seq(arglist__22197);
return spectre$hoplon$panel__delegate(args__21560__auto__);
});
spectre$hoplon$panel.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$panel__delegate;
return spectre$hoplon$panel;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav = (function() { 
var spectre$hoplon$nav__delegate = function (args__21560__auto__){
var vec__22198 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(1),null);
var G__22201 = cljs.core.cst$kw$class;
var G__22202 = "nav";
var G__22203 = attributes;
var G__22204 = children;
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$4(G__22201,G__22202,G__22203,G__22204) : hoplon.core.nav.call(null,G__22201,G__22202,G__22203,G__22204));
};
var spectre$hoplon$nav = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22205__i = 0, G__22205__a = new Array(arguments.length -  0);
while (G__22205__i < G__22205__a.length) {G__22205__a[G__22205__i] = arguments[G__22205__i + 0]; ++G__22205__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22205__a,0,null);
} 
return spectre$hoplon$nav__delegate.call(this,args__21560__auto__);};
spectre$hoplon$nav.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav.cljs$lang$applyTo = (function (arglist__22206){
var args__21560__auto__ = cljs.core.seq(arglist__22206);
return spectre$hoplon$nav__delegate(args__21560__auto__);
});
spectre$hoplon$nav.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav__delegate;
return spectre$hoplon$nav;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav_item = (function() { 
var spectre$hoplon$nav_item__delegate = function (args__21560__auto__){
var vec__22207 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(1),null);
var G__22210 = cljs.core.cst$kw$class;
var G__22211 = "nav-item";
var G__22212 = attributes;
var G__22213 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__22210,G__22211,G__22212,G__22213) : hoplon.core.a.call(null,G__22210,G__22211,G__22212,G__22213));
};
var spectre$hoplon$nav_item = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22214__i = 0, G__22214__a = new Array(arguments.length -  0);
while (G__22214__i < G__22214__a.length) {G__22214__a[G__22214__i] = arguments[G__22214__i + 0]; ++G__22214__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22214__a,0,null);
} 
return spectre$hoplon$nav_item__delegate.call(this,args__21560__auto__);};
spectre$hoplon$nav_item.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav_item.cljs$lang$applyTo = (function (arglist__22215){
var args__21560__auto__ = cljs.core.seq(arglist__22215);
return spectre$hoplon$nav_item__delegate(args__21560__auto__);
});
spectre$hoplon$nav_item.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav_item__delegate;
return spectre$hoplon$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_input = (function() { 
var spectre$hoplon$form_input__delegate = function (args__21560__auto__){
var vec__22216 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22216,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22216,(1),null);
var G__22219 = cljs.core.cst$kw$class;
var G__22220 = "form-input";
var G__22221 = attributes;
var G__22222 = children;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$4(G__22219,G__22220,G__22221,G__22222) : hoplon.core.input.call(null,G__22219,G__22220,G__22221,G__22222));
};
var spectre$hoplon$form_input = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22223__i = 0, G__22223__a = new Array(arguments.length -  0);
while (G__22223__i < G__22223__a.length) {G__22223__a[G__22223__i] = arguments[G__22223__i + 0]; ++G__22223__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22223__a,0,null);
} 
return spectre$hoplon$form_input__delegate.call(this,args__21560__auto__);};
spectre$hoplon$form_input.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_input.cljs$lang$applyTo = (function (arglist__22224){
var args__21560__auto__ = cljs.core.seq(arglist__22224);
return spectre$hoplon$form_input__delegate(args__21560__auto__);
});
spectre$hoplon$form_input.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_input__delegate;
return spectre$hoplon$form_input;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_textarea = (function() { 
var spectre$hoplon$form_textarea__delegate = function (args__21560__auto__){
var vec__22225 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22225,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22225,(1),null);
var G__22228 = cljs.core.cst$kw$class;
var G__22229 = "form-input";
var G__22230 = attributes;
var G__22231 = children;
return (hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4(G__22228,G__22229,G__22230,G__22231) : hoplon.core.textarea.call(null,G__22228,G__22229,G__22230,G__22231));
};
var spectre$hoplon$form_textarea = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22232__i = 0, G__22232__a = new Array(arguments.length -  0);
while (G__22232__i < G__22232__a.length) {G__22232__a[G__22232__i] = arguments[G__22232__i + 0]; ++G__22232__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22232__a,0,null);
} 
return spectre$hoplon$form_textarea__delegate.call(this,args__21560__auto__);};
spectre$hoplon$form_textarea.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_textarea.cljs$lang$applyTo = (function (arglist__22233){
var args__21560__auto__ = cljs.core.seq(arglist__22233);
return spectre$hoplon$form_textarea__delegate(args__21560__auto__);
});
spectre$hoplon$form_textarea.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_textarea__delegate;
return spectre$hoplon$form_textarea;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.button = (function() { 
var spectre$hoplon$button__delegate = function (args__21560__auto__){
var vec__22234 = hoplon.core.parse_args(args__21560__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,(1),null);
var G__22237 = cljs.core.cst$kw$class;
var G__22238 = "btn";
var G__22239 = attributes;
var G__22240 = children;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$4(G__22237,G__22238,G__22239,G__22240) : hoplon.core.button.call(null,G__22237,G__22238,G__22239,G__22240));
};
var spectre$hoplon$button = function (var_args){
var args__21560__auto__ = null;
if (arguments.length > 0) {
var G__22241__i = 0, G__22241__a = new Array(arguments.length -  0);
while (G__22241__i < G__22241__a.length) {G__22241__a[G__22241__i] = arguments[G__22241__i + 0]; ++G__22241__i;}
  args__21560__auto__ = new cljs.core.IndexedSeq(G__22241__a,0,null);
} 
return spectre$hoplon$button__delegate.call(this,args__21560__auto__);};
spectre$hoplon$button.cljs$lang$maxFixedArity = 0;
spectre$hoplon$button.cljs$lang$applyTo = (function (arglist__22242){
var args__21560__auto__ = cljs.core.seq(arglist__22242);
return spectre$hoplon$button__delegate(args__21560__auto__);
});
spectre$hoplon$button.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$button__delegate;
return spectre$hoplon$button;
})()
;
