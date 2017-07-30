// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.save.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('portfolio.save.api');
goog.require('spectre.hoplon');
portfolio.save.hoplon.save = (function portfolio$save$hoplon$save(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Save") : hoplon.core.h2.call(null,"Save")),(function (){var G__25506 = (function (){var fexpr__25509 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25508,G__25507){
return (G__25507.cljs$core$IFn$_invoke$arity$1 ? G__25507.cljs$core$IFn$_invoke$arity$1(G__25508) : G__25507.call(null,G__25508));
}));
return (fexpr__25509.cljs$core$IFn$_invoke$arity$2 ? fexpr__25509.cljs$core$IFn$_invoke$arity$2(conn,portfolio.save.api.save_db) : fexpr__25509.call(null,conn,portfolio.save.api.save_db));
})();
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__25506) : hoplon.core.code.call(null,G__25506));
})()], 0));
});
portfolio.save.hoplon.load = (function portfolio$save$hoplon$load(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Load") : hoplon.core.h2.call(null,"Load")),(function (){var db = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__25511 = cljs.core.cst$kw$submit;
var G__25512 = ((function (G__25511,db){
return (function (){
return portfolio.save.api.load_db_BANG_(conn,cljs.core.deref(db));
});})(G__25511,db))
;
var G__25513 = spectre.hoplon.form_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"text",cljs.core.cst$kw$input,((function (G__25511,G__25512,db){
return (function (p1__25510_SHARP_){
return cljs.core.reset_BANG_(db,cljs.core.deref(p1__25510_SHARP_));
});})(G__25511,G__25512,db))
], 0));
var G__25514 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Load"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$4(G__25511,G__25512,G__25513,G__25514) : hoplon.core.form.call(null,G__25511,G__25512,G__25513,G__25514));
})()], 0));
});
portfolio.save.hoplon.reset = (function portfolio$save$hoplon$reset(conn){
return spectre.hoplon.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Reset") : hoplon.core.h2.call(null,"Reset")),(function (){var G__25515 = cljs.core.cst$kw$submit;
var G__25516 = ((function (G__25515){
return (function (){
return portfolio.save.api.reset_conn_BANG_(conn);
});})(G__25515))
;
var G__25517 = spectre.hoplon.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"submit","Reset"], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$3(G__25515,G__25516,G__25517) : hoplon.core.form.call(null,G__25515,G__25516,G__25517));
})()], 0));
});
portfolio.save.hoplon.page = (function portfolio$save$hoplon$page(conn){
return spectre.hoplon.page_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Save, load or reset") : hoplon.core.h1.call(null,"Save, load or reset")),portfolio.save.hoplon.save(conn),portfolio.save.hoplon.load(conn),portfolio.save.hoplon.reset(conn)], 0));
});
