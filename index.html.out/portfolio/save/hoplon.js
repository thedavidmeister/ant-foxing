// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.save.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('portfolio.save.api');
goog.require('spectre.hoplon');
portfolio.save.hoplon.save = (function portfolio$save$hoplon$save(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Save") : hoplon.core.h2.call(null,"Save")),(function (){var G__20371 = (function (){var fexpr__20374 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20373,G__20372){
return (G__20372.cljs$core$IFn$_invoke$arity$1 ? G__20372.cljs$core$IFn$_invoke$arity$1(G__20373) : G__20372.call(null,G__20373));
}));
return (fexpr__20374.cljs$core$IFn$_invoke$arity$2 ? fexpr__20374.cljs$core$IFn$_invoke$arity$2(conn,portfolio.save.api.save_db) : fexpr__20374.call(null,conn,portfolio.save.api.save_db));
})();
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__20371) : hoplon.core.code.call(null,G__20371));
})()], 0));
});
portfolio.save.hoplon.load = (function portfolio$save$hoplon$load(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Load") : hoplon.core.h2.call(null,"Load")),(function (){var db = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__20376 = cljs.core.cst$kw$submit;
var G__20377 = ((function (G__20376,db){
return (function (){
return portfolio.save.api.load_db_BANG_(conn,cljs.core.deref(db));
});})(G__20376,db))
;
var G__20378 = spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"text",cljs.core.cst$kw$input,((function (G__20376,G__20377,db){
return (function (p1__20375_SHARP_){
return cljs.core.reset_BANG_(db,cljs.core.deref(p1__20375_SHARP_));
});})(G__20376,G__20377,db))
], 0));
var G__20379 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Load"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$4(G__20376,G__20377,G__20378,G__20379) : hoplon.core.form.call(null,G__20376,G__20377,G__20378,G__20379));
})()], 0));
});
portfolio.save.hoplon.reset = (function portfolio$save$hoplon$reset(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Reset") : hoplon.core.h2.call(null,"Reset")),(function (){var G__20380 = cljs.core.cst$kw$submit;
var G__20381 = ((function (G__20380){
return (function (){
return portfolio.save.api.reset_conn_BANG_(conn);
});})(G__20380))
;
var G__20382 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Reset"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$3(G__20380,G__20381,G__20382) : hoplon.core.form.call(null,G__20380,G__20381,G__20382));
})()], 0));
});
portfolio.save.hoplon.page = (function portfolio$save$hoplon$page(conn){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Save, load or reset") : hoplon.core.h1.call(null,"Save, load or reset")),portfolio.save.hoplon.save(conn),portfolio.save.hoplon.load(conn),portfolio.save.hoplon.reset(conn)], 0));
});
