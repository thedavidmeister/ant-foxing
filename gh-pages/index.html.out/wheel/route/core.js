// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('wheel.route.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.History');
goog.require('bidi.bidi');
goog.require('medley.core');
goog.require('cuerdas.core');
goog.require('javelin.core');
goog.require('schema.core');
goog.require('bidi.schema');
goog.require('cljs.test');
wheel.route.core.routes_QMARK_ = (function wheel$route$core$routes_QMARK_(routes){
if(cljs.core.truth_(javelin.core.cell_QMARK_(routes))){
var G__24978 = cljs.core.deref(routes);
return (wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24978) : wheel.route.core.routes_QMARK_.call(null,G__24978));
} else {
return cljs.core.not(schema.core.check(bidi.schema.RoutePair,routes));
}
});
/**
 * A cell analagous to hoplon's route cell, based on Google Closure History API
 */
wheel.route.core.history_cell = (function wheel$route$core$history_cell(){
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var history = (new goog.History());
var _ = (function (){var c__14563__auto__ = (function (){var fexpr__24981 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history){
return (function (G__24980){
return G__24980;
});})(c,history))
);
return (fexpr__24981.cljs$core$IFn$_invoke$arity$1 ? fexpr__24981.cljs$core$IFn$_invoke$arity$1(c) : fexpr__24981.call(null,c));
})();
c__14563__auto__.update = ((function (c__14563__auto__,c,history){
return (function (p1__24979_SHARP_){
return history.setToken(p1__24979_SHARP_);
});})(c__14563__auto__,c,history))
;

return c__14563__auto__;
})();
var G__24982_24985 = history;
var G__24983_24986 = goog.History.EventType.NAVIGATE;
var G__24984_24987 = ((function (G__24982_24985,G__24983_24986,_,c,history){
return (function (e){
return cljs.core.reset_BANG_(c,e.token);
});})(G__24982_24985,G__24983_24986,_,c,history))
;
goog.events.listen(G__24982_24985,G__24983_24986,G__24984_24987);

history.setEnabled(true);

return _;
});
/**
 * Fetches the current hash from the window location, sans left # character
 */
wheel.route.core.current_hash = (function wheel$route$core$current_hash(){
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2(window.location.hash,"#");
});
/**
 * Given a path, routes and fallback handler, returns a bidi location
 */
wheel.route.core.path__GT_bidi = (function wheel$route$core$path__GT_bidi(var_args){
var G__24989 = arguments.length;
switch (G__24989) {
case 2:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2 = (function (path,routes){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?cljs.core.deref(routes):routes);
var path__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(path))?cljs.core.deref(path):path);
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

return bidi.bidi.match_route(routes__$1,path__$1);
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3 = (function (path,routes,fallback){
var or__8762__auto__ = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(path,routes);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
}
});

wheel.route.core.path__GT_bidi.cljs$lang$maxFixedArity = 3;

/**
 * Given a bidi handler, and optionally bidi params, returns a path
 */
wheel.route.core.bidi__GT_path = (function wheel$route$core$bidi__GT_path(var_args){
var G__24992 = arguments.length;
switch (G__24992) {
case 2:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (routes,handler){
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (routes,handler,params){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?cljs.core.deref(routes):routes);
var handler__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(handler))?cljs.core.deref(handler):handler);
var params__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(params))?cljs.core.deref(params):params);
var with_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bidi.bidi.path_for,routes__$1,handler__$1);
var param_list = cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,params__$1));
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(with_handler,param_list);
});

wheel.route.core.bidi__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * Set the history cell to the given handler and params
 */
wheel.route.core.navigate_BANG_ = (function wheel$route$core$navigate_BANG_(var_args){
var G__24995 = arguments.length;
switch (G__24995) {
case 3:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (history,routes,handler){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (history,routes,handler,params){
return cljs.core.reset_BANG_(history,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,params))].join(''));
});

wheel.route.core.navigate_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Set the history cell to the given handler without changing the params
 */
wheel.route.core.handler_BANG_ = (function wheel$route$core$handler_BANG_(history,routes,handler){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(history,routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1));
});
/**
 * Set the history cell to the given params without changing the handler
 */
wheel.route.core.params_BANG_ = (function wheel$route$core$params_BANG_(history,routes,params){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(history,routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(bidi__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1),params], 0)));
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash = (function wheel$route$core$_QMARK__QMARK_history_cell__set_hash(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test = (function (){
if(typeof wheel.route.core.t_wheel$route$core24997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
wheel.route.core.t_wheel$route$core24997 = (function (meta24998){
this.meta24998 = meta24998;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
wheel.route.core.t_wheel$route$core24997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24999,meta24998__$1){
var self__ = this;
var _24999__$1 = this;
return (new wheel.route.core.t_wheel$route$core24997(meta24998__$1));
});

wheel.route.core.t_wheel$route$core24997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24999){
var self__ = this;
var _24999__$1 = this;
return self__.meta24998;
});

wheel.route.core.t_wheel$route$core24997.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

wheel.route.core.t_wheel$route$core24997.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___24554__auto__ = self____$1;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

var fexpr__25009 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___24554__auto__,self____$1){
return (function (G__25001,G__25002,G__25005,G__25003,G__25004){
if(cljs.core.truth_((function (){var G__25010 = G__25002;
var G__25011 = G__25003;
var G__25012 = (G__25004.cljs$core$IFn$_invoke$arity$0 ? G__25004.cljs$core$IFn$_invoke$arity$0() : G__25004.call(null));
return (G__25001.cljs$core$IFn$_invoke$arity$3 ? G__25001.cljs$core$IFn$_invoke$arity$3(G__25010,G__25011,G__25012) : G__25001.call(null,G__25010,G__25011,G__25012));
})())){
return (G__25005.cljs$core$IFn$_invoke$arity$0 ? G__25005.cljs$core$IFn$_invoke$arity$0() : G__25005.call(null));
} else {
return null;
}
});})(c,p,___24554__auto__,self____$1))
);
return (fexpr__25009.cljs$core$IFn$_invoke$arity$5 ? fexpr__25009.cljs$core$IFn$_invoke$arity$5(cljs.core._EQ_,p,done,c,wheel.route.core.current_hash) : fexpr__25009.call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash));
});

wheel.route.core.t_wheel$route$core24997.prototype.apply = (function (self__,args25000){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25000)));
});

wheel.route.core.t_wheel$route$core24997.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___24554__auto__ = this;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

var fexpr__25021 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___24554__auto__){
return (function (G__25013,G__25014,G__25017,G__25015,G__25016){
if(cljs.core.truth_((function (){var G__25022 = G__25014;
var G__25023 = G__25015;
var G__25024 = (G__25016.cljs$core$IFn$_invoke$arity$0 ? G__25016.cljs$core$IFn$_invoke$arity$0() : G__25016.call(null));
return (G__25013.cljs$core$IFn$_invoke$arity$3 ? G__25013.cljs$core$IFn$_invoke$arity$3(G__25022,G__25023,G__25024) : G__25013.call(null,G__25022,G__25023,G__25024));
})())){
return (G__25017.cljs$core$IFn$_invoke$arity$0 ? G__25017.cljs$core$IFn$_invoke$arity$0() : G__25017.call(null));
} else {
return null;
}
});})(c,p,___24554__auto__))
);
return (fexpr__25021.cljs$core$IFn$_invoke$arity$5 ? fexpr__25021.cljs$core$IFn$_invoke$arity$5(cljs.core._EQ_,p,done,c,wheel.route.core.current_hash) : fexpr__25021.call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash));
});

wheel.route.core.t_wheel$route$core24997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta24998], null);
});

wheel.route.core.t_wheel$route$core24997.cljs$lang$type = true;

wheel.route.core.t_wheel$route$core24997.cljs$lang$ctorStr = "wheel.route.core/t_wheel$route$core24997";

wheel.route.core.t_wheel$route$core24997.cljs$lang$ctorPrWriter = (function (this__9433__auto__,writer__9434__auto__,opt__9435__auto__){
return cljs.core._write(writer__9434__auto__,"wheel.route.core/t_wheel$route$core24997");
});

wheel.route.core.__GT_t_wheel$route$core24997 = (function wheel$route$core$__GT_t_wheel$route$core24997(meta24998){
return (new wheel.route.core.t_wheel$route$core24997(meta24998));
});

}

return (new wheel.route.core.t_wheel$route$core24997(null));
});

wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell__set_hash;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",34,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell__set_hash)?wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_history_cell = (function wheel$route$core$_QMARK__QMARK_history_cell(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test = (function (){
var c = wheel.route.core.history_cell();
try{var values__24479__auto___25028 = (function (){var x__9711__auto__ = (cljs.core.deref(c) == null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})();
var result__24480__auto___25029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__24479__auto___25028);
if(cljs.core.truth_(result__24480__auto___25029)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__24479__auto___25028),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__24479__auto___25028);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25025){var t__24524__auto___25030 = e25025;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,t__24524__auto___25030,cljs.core.cst$kw$message,null], null));
}
try{var values__24479__auto___25031 = (function (){var x__9711__auto__ = cljs.core.deref(c);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})();
var result__24480__auto___25032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__24479__auto___25031);
if(cljs.core.truth_(result__24480__auto___25032)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.string_QMARK_,values__24479__auto___25031),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$string_QMARK_,values__24479__auto___25031);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25026){var t__24524__auto___25033 = e25026;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,t__24524__auto___25033,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(c,"bar");

try{var values__24479__auto__ = cljs.core._conj((function (){var x__9711__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})(),"bar");
var result__24480__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto__);
if(cljs.core.truth_(result__24480__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__24480__auto__;
}catch (e25027){var t__24524__auto__ = e25027;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",24,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell)?wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_path__GT_bidi = (function wheel$route$core$_QMARK__QMARK_path__GT_bidi(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test = (function (){
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,handler], null);
var fallback = cljs.core.cst$kw$bar;
try{var values__24479__auto___25036 = (function (){var x__9711__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null);
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3(path,routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto___25037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto___25036);
if(cljs.core.truth_(result__24480__auto___25037)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto___25036),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto___25036);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25034){var t__24524__auto___25038 = e25034;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__24524__auto___25038,cljs.core.cst$kw$message,null], null));
}
try{var values__24479__auto__ = (function (){var x__9711__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto__);
if(cljs.core.truth_(result__24480__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__24480__auto__;
}catch (e25035){var t__24524__auto__ = e25035;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__24524__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_path__GT_bidi;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_path_DASH__GT_bidi,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_path_DASH__GT_bidi,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",22,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_path__GT_bidi)?wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_bidi__GT_path = (function wheel$route$core$_QMARK__QMARK_bidi__GT_path(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test = (function (){
try{var values__24479__auto___25041 = cljs.core._conj((function (){var x__9711__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),"/foo");
var result__24480__auto___25042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto___25041);
if(cljs.core.truth_(result__24480__auto___25042)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto___25041),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto___25041);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25039){var t__24524__auto___25043 = e25039;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,t__24524__auto___25043,cljs.core.cst$kw$message,null], null));
}
try{var values__24479__auto__ = cljs.core._conj((function (){var x__9711__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),"/foo/123");
var result__24480__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto__);
if(cljs.core.truth_(result__24480__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__24480__auto__;
}catch (e25040){var t__24524__auto__ = e25040;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,t__24524__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_bidi__GT_path;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_bidi_DASH__GT_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_bidi_DASH__GT_path,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",22,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_bidi__GT_path)?wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_navigate_BANG_ = (function wheel$route$core$_QMARK__QMARK_navigate_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test = (function (){
var history_25048 = wheel.route.core.history_cell();
var path_25049 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_25050 = cljs.core.cst$kw$foo;
var routes_25051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_25049,handler_25050], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3(history_25048,routes_25051,handler_25050);

try{var values__24479__auto___25052 = (function (){var x__9711__auto__ = path_25049;
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto___25053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto___25052);
if(cljs.core.truth_(result__24480__auto___25053)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto___25052),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto___25052);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25044){var t__24524__auto___25054 = e25044;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto___25054,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var param_key = cljs.core.cst$kw$bar;
var param_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler])])], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value]));

try{var values__24479__auto___25055 = (function (){var x__9711__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto___25056 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto___25055);
if(cljs.core.truth_(result__24480__auto___25056)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto___25055),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto___25055);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25045){var t__24524__auto___25057 = e25045;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto___25057,cljs.core.cst$kw$message,null], null));
}
var path_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_SINGLEQUOTE_ = cljs.core.cst$kw$baz;
var routes_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler]),path_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler_SINGLEQUOTE_])])], null);
wheel.route.core.handler_BANG_(history,routes_SINGLEQUOTE_,handler_SINGLEQUOTE_);

try{var values__24479__auto___25058 = (function (){var x__9711__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto___25059 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto___25058);
if(cljs.core.truth_(result__24480__auto___25059)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto___25058),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto___25058);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25046){var t__24524__auto___25060 = e25046;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto___25060,cljs.core.cst$kw$message,null], null));
}
var param_value_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
wheel.route.core.params_BANG_(history,routes_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value_SINGLEQUOTE_]));

try{var values__24479__auto__ = (function (){var x__9711__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto__);
if(cljs.core.truth_(result__24480__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__24480__auto__;
}catch (e25047){var t__24524__auto__ = e25047;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_navigate_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_navigate_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_navigate_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",21,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_navigate_BANG_)?wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_handler_BANG_ = (function wheel$route$core$_QMARK__QMARK_handler_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test = (function (){
var history = wheel.route.core.history_cell();
var path = (function (){var fexpr__25062 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (G__25061){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25061.cljs$core$IFn$_invoke$arity$0 ? G__25061.cljs$core$IFn$_invoke$arity$0() : G__25061.call(null)))].join('');
});})(history))
);
return (fexpr__25062.cljs$core$IFn$_invoke$arity$1 ? fexpr__25062.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid) : fexpr__25062.call(null,cljs.core.random_uuid));
})();
var handler = (function (){var fexpr__25063 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path){
return (function (){
return cljs.core.cst$kw$foo;
});})(history,path))
);
return (fexpr__25063.cljs$core$IFn$_invoke$arity$0 ? fexpr__25063.cljs$core$IFn$_invoke$arity$0() : fexpr__25063.call(null));
})();
var routes = (function (){var fexpr__25066 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path,handler){
return (function (G__25065,G__25064){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25064,G__25065], null);
});})(history,path,handler))
);
return (fexpr__25066.cljs$core$IFn$_invoke$arity$2 ? fexpr__25066.cljs$core$IFn$_invoke$arity$2(handler,path) : fexpr__25066.call(null,handler,path));
})();
wheel.route.core.handler_BANG_(history,routes,handler);

try{var values__24479__auto__ = (function (){var x__9711__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(path))].join('');
return cljs.core._conj((function (){var x__9711__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto____$1);
})(),x__9711__auto__);
})();
var result__24480__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__24479__auto__);
if(cljs.core.truth_(result__24480__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__24479__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9711__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__24479__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__24480__auto__;
}catch (e25067){var t__24524__auto__ = e25067;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__24524__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_handler_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_handler_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_handler_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/ant-foxing/e9x/-9aykq3/index.html.out/wheel/route/core.cljs",20,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_handler_BANG_)?wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test:null)]));
