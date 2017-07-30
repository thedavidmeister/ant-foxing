// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('spectre.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
spectre.hoplon.styles = (function spectre$hoplon$styles(){
var G__21118 = cljs.core.cst$kw$rel;
var G__21119 = "stylesheet";
var G__21120 = cljs.core.cst$kw$href;
var G__21121 = "spectre.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__21118,G__21119,G__21120,G__21121) : hoplon.core.link.call(null,G__21118,G__21119,G__21120,G__21121));
});
/**
 * @param {...*} var_args
 */
spectre.hoplon.wrapper = (function() { 
var spectre$hoplon$wrapper__delegate = function (args__13963__auto__){
var vec__21122 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(1),null);
var G__21125 = cljs.core.cst$kw$class;
var G__21126 = "wrapper";
var G__21127 = attributes;
var G__21128 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__21125,G__21126,G__21127,G__21128) : hoplon.core.div.call(null,G__21125,G__21126,G__21127,G__21128));
};
var spectre$hoplon$wrapper = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21129__i = 0, G__21129__a = new Array(arguments.length -  0);
while (G__21129__i < G__21129__a.length) {G__21129__a[G__21129__i] = arguments[G__21129__i + 0]; ++G__21129__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21129__a,0,null);
} 
return spectre$hoplon$wrapper__delegate.call(this,args__13963__auto__);};
spectre$hoplon$wrapper.cljs$lang$maxFixedArity = 0;
spectre$hoplon$wrapper.cljs$lang$applyTo = (function (arglist__21130){
var args__13963__auto__ = cljs.core.seq(arglist__21130);
return spectre$hoplon$wrapper__delegate(args__13963__auto__);
});
spectre$hoplon$wrapper.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$wrapper__delegate;
return spectre$hoplon$wrapper;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.page_content = (function() { 
var spectre$hoplon$page_content__delegate = function (args__13963__auto__){
var vec__21131 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(1),null);
var G__21134 = cljs.core.cst$kw$class;
var G__21135 = "page-content";
var G__21136 = attributes;
var G__21137 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__21134,G__21135,G__21136,G__21137) : hoplon.core.div.call(null,G__21134,G__21135,G__21136,G__21137));
};
var spectre$hoplon$page_content = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21138__i = 0, G__21138__a = new Array(arguments.length -  0);
while (G__21138__i < G__21138__a.length) {G__21138__a[G__21138__i] = arguments[G__21138__i + 0]; ++G__21138__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21138__a,0,null);
} 
return spectre$hoplon$page_content__delegate.call(this,args__13963__auto__);};
spectre$hoplon$page_content.cljs$lang$maxFixedArity = 0;
spectre$hoplon$page_content.cljs$lang$applyTo = (function (arglist__21139){
var args__13963__auto__ = cljs.core.seq(arglist__21139);
return spectre$hoplon$page_content__delegate(args__13963__auto__);
});
spectre$hoplon$page_content.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$page_content__delegate;
return spectre$hoplon$page_content;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.table = (function() { 
var spectre$hoplon$table__delegate = function (args__13963__auto__){
var vec__21140 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21140,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21140,(1),null);
var G__21143 = cljs.core.cst$kw$class;
var G__21144 = "table";
var G__21145 = attributes;
var G__21146 = children;
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__21143,G__21144,G__21145,G__21146) : hoplon.core.table.call(null,G__21143,G__21144,G__21145,G__21146));
};
var spectre$hoplon$table = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21147__i = 0, G__21147__a = new Array(arguments.length -  0);
while (G__21147__i < G__21147__a.length) {G__21147__a[G__21147__i] = arguments[G__21147__i + 0]; ++G__21147__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21147__a,0,null);
} 
return spectre$hoplon$table__delegate.call(this,args__13963__auto__);};
spectre$hoplon$table.cljs$lang$maxFixedArity = 0;
spectre$hoplon$table.cljs$lang$applyTo = (function (arglist__21148){
var args__13963__auto__ = cljs.core.seq(arglist__21148);
return spectre$hoplon$table__delegate(args__13963__auto__);
});
spectre$hoplon$table.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$table__delegate;
return spectre$hoplon$table;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.panel = (function() { 
var spectre$hoplon$panel__delegate = function (args__13963__auto__){
var vec__21149 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,(1),null);
var G__21152 = cljs.core.cst$kw$class;
var G__21153 = "panel";
var G__21154 = attributes;
var G__21155 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__21152,G__21153,G__21154,G__21155) : hoplon.core.div.call(null,G__21152,G__21153,G__21154,G__21155));
};
var spectre$hoplon$panel = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21156__i = 0, G__21156__a = new Array(arguments.length -  0);
while (G__21156__i < G__21156__a.length) {G__21156__a[G__21156__i] = arguments[G__21156__i + 0]; ++G__21156__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21156__a,0,null);
} 
return spectre$hoplon$panel__delegate.call(this,args__13963__auto__);};
spectre$hoplon$panel.cljs$lang$maxFixedArity = 0;
spectre$hoplon$panel.cljs$lang$applyTo = (function (arglist__21157){
var args__13963__auto__ = cljs.core.seq(arglist__21157);
return spectre$hoplon$panel__delegate(args__13963__auto__);
});
spectre$hoplon$panel.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$panel__delegate;
return spectre$hoplon$panel;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav = (function() { 
var spectre$hoplon$nav__delegate = function (args__13963__auto__){
var vec__21158 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(1),null);
var G__21161 = cljs.core.cst$kw$class;
var G__21162 = "nav";
var G__21163 = attributes;
var G__21164 = children;
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$4(G__21161,G__21162,G__21163,G__21164) : hoplon.core.nav.call(null,G__21161,G__21162,G__21163,G__21164));
};
var spectre$hoplon$nav = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21165__i = 0, G__21165__a = new Array(arguments.length -  0);
while (G__21165__i < G__21165__a.length) {G__21165__a[G__21165__i] = arguments[G__21165__i + 0]; ++G__21165__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21165__a,0,null);
} 
return spectre$hoplon$nav__delegate.call(this,args__13963__auto__);};
spectre$hoplon$nav.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav.cljs$lang$applyTo = (function (arglist__21166){
var args__13963__auto__ = cljs.core.seq(arglist__21166);
return spectre$hoplon$nav__delegate(args__13963__auto__);
});
spectre$hoplon$nav.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav__delegate;
return spectre$hoplon$nav;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.nav_item = (function() { 
var spectre$hoplon$nav_item__delegate = function (args__13963__auto__){
var vec__21167 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167,(1),null);
var G__21170 = cljs.core.cst$kw$class;
var G__21171 = "nav-item";
var G__21172 = attributes;
var G__21173 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$4(G__21170,G__21171,G__21172,G__21173) : hoplon.core.a.call(null,G__21170,G__21171,G__21172,G__21173));
};
var spectre$hoplon$nav_item = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21174__i = 0, G__21174__a = new Array(arguments.length -  0);
while (G__21174__i < G__21174__a.length) {G__21174__a[G__21174__i] = arguments[G__21174__i + 0]; ++G__21174__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21174__a,0,null);
} 
return spectre$hoplon$nav_item__delegate.call(this,args__13963__auto__);};
spectre$hoplon$nav_item.cljs$lang$maxFixedArity = 0;
spectre$hoplon$nav_item.cljs$lang$applyTo = (function (arglist__21175){
var args__13963__auto__ = cljs.core.seq(arglist__21175);
return spectre$hoplon$nav_item__delegate(args__13963__auto__);
});
spectre$hoplon$nav_item.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$nav_item__delegate;
return spectre$hoplon$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_input = (function() { 
var spectre$hoplon$form_input__delegate = function (args__13963__auto__){
var vec__21176 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21176,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21176,(1),null);
var G__21179 = cljs.core.cst$kw$class;
var G__21180 = "form-input";
var G__21181 = attributes;
var G__21182 = children;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$4(G__21179,G__21180,G__21181,G__21182) : hoplon.core.input.call(null,G__21179,G__21180,G__21181,G__21182));
};
var spectre$hoplon$form_input = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21183__i = 0, G__21183__a = new Array(arguments.length -  0);
while (G__21183__i < G__21183__a.length) {G__21183__a[G__21183__i] = arguments[G__21183__i + 0]; ++G__21183__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21183__a,0,null);
} 
return spectre$hoplon$form_input__delegate.call(this,args__13963__auto__);};
spectre$hoplon$form_input.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_input.cljs$lang$applyTo = (function (arglist__21184){
var args__13963__auto__ = cljs.core.seq(arglist__21184);
return spectre$hoplon$form_input__delegate(args__13963__auto__);
});
spectre$hoplon$form_input.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_input__delegate;
return spectre$hoplon$form_input;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.form_textarea = (function() { 
var spectre$hoplon$form_textarea__delegate = function (args__13963__auto__){
var vec__21185 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21185,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21185,(1),null);
var G__21188 = cljs.core.cst$kw$class;
var G__21189 = "form-input";
var G__21190 = attributes;
var G__21191 = children;
return (hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.textarea.cljs$core$IFn$_invoke$arity$4(G__21188,G__21189,G__21190,G__21191) : hoplon.core.textarea.call(null,G__21188,G__21189,G__21190,G__21191));
};
var spectre$hoplon$form_textarea = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21192__i = 0, G__21192__a = new Array(arguments.length -  0);
while (G__21192__i < G__21192__a.length) {G__21192__a[G__21192__i] = arguments[G__21192__i + 0]; ++G__21192__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21192__a,0,null);
} 
return spectre$hoplon$form_textarea__delegate.call(this,args__13963__auto__);};
spectre$hoplon$form_textarea.cljs$lang$maxFixedArity = 0;
spectre$hoplon$form_textarea.cljs$lang$applyTo = (function (arglist__21193){
var args__13963__auto__ = cljs.core.seq(arglist__21193);
return spectre$hoplon$form_textarea__delegate(args__13963__auto__);
});
spectre$hoplon$form_textarea.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$form_textarea__delegate;
return spectre$hoplon$form_textarea;
})()
;
/**
 * @param {...*} var_args
 */
spectre.hoplon.button = (function() { 
var spectre$hoplon$button__delegate = function (args__13963__auto__){
var vec__21194 = hoplon.core.parse_args(args__13963__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21194,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21194,(1),null);
var G__21197 = cljs.core.cst$kw$class;
var G__21198 = "btn";
var G__21199 = attributes;
var G__21200 = children;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$4(G__21197,G__21198,G__21199,G__21200) : hoplon.core.button.call(null,G__21197,G__21198,G__21199,G__21200));
};
var spectre$hoplon$button = function (var_args){
var args__13963__auto__ = null;
if (arguments.length > 0) {
var G__21201__i = 0, G__21201__a = new Array(arguments.length -  0);
while (G__21201__i < G__21201__a.length) {G__21201__a[G__21201__i] = arguments[G__21201__i + 0]; ++G__21201__i;}
  args__13963__auto__ = new cljs.core.IndexedSeq(G__21201__a,0,null);
} 
return spectre$hoplon$button__delegate.call(this,args__13963__auto__);};
spectre$hoplon$button.cljs$lang$maxFixedArity = 0;
spectre$hoplon$button.cljs$lang$applyTo = (function (arglist__21202){
var args__13963__auto__ = cljs.core.seq(arglist__21202);
return spectre$hoplon$button__delegate(args__13963__auto__);
});
spectre$hoplon$button.cljs$core$IFn$_invoke$arity$variadic = spectre$hoplon$button__delegate;
return spectre$hoplon$button;
})()
;
