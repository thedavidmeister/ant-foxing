// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.save.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('portfolio.save.api');
goog.require('spectre.hoplon');
portfolio.save.hoplon.save = (function portfolio$save$hoplon$save(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Save") : hoplon.core.h2.call(null,"Save")),(function (){var G__26442 = (function (){var fexpr__26445 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__26444,G__26443){
return (G__26443.cljs$core$IFn$_invoke$arity$1 ? G__26443.cljs$core$IFn$_invoke$arity$1(G__26444) : G__26443.call(null,G__26444));
}));
return (fexpr__26445.cljs$core$IFn$_invoke$arity$2 ? fexpr__26445.cljs$core$IFn$_invoke$arity$2(conn,portfolio.save.api.save_db) : fexpr__26445.call(null,conn,portfolio.save.api.save_db));
})();
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__26442) : hoplon.core.code.call(null,G__26442));
})()], 0));
});
portfolio.save.hoplon.load = (function portfolio$save$hoplon$load(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Load") : hoplon.core.h2.call(null,"Load")),(function (){var db = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__26447 = cljs.core.cst$kw$submit;
var G__26448 = ((function (G__26447,db){
return (function (){
return portfolio.save.api.load_db_BANG_(conn,cljs.core.deref(db));
});})(G__26447,db))
;
var G__26449 = spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"text",cljs.core.cst$kw$input,((function (G__26447,G__26448,db){
return (function (p1__26446_SHARP_){
return cljs.core.reset_BANG_(db,cljs.core.deref(p1__26446_SHARP_));
});})(G__26447,G__26448,db))
], 0));
var G__26450 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Load"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$4(G__26447,G__26448,G__26449,G__26450) : hoplon.core.form.call(null,G__26447,G__26448,G__26449,G__26450));
})()], 0));
});
portfolio.save.hoplon.reset = (function portfolio$save$hoplon$reset(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Reset") : hoplon.core.h2.call(null,"Reset")),(function (){var G__26451 = cljs.core.cst$kw$submit;
var G__26452 = ((function (G__26451){
return (function (){
return portfolio.save.api.reset_conn_BANG_(conn);
});})(G__26451))
;
var G__26453 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Reset"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$3(G__26451,G__26452,G__26453) : hoplon.core.form.call(null,G__26451,G__26452,G__26453));
})()], 0));
});
portfolio.save.hoplon.page = (function portfolio$save$hoplon$page(conn){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Save, load or reset") : hoplon.core.h1.call(null,"Save, load or reset")),portfolio.save.hoplon.save(conn),portfolio.save.hoplon.load(conn),portfolio.save.hoplon.reset(conn)], 0));
});
