// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('pages.routes.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.route.core');
if(typeof pages.routes.config.routes !== 'undefined'){
} else {
pages.routes.config.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["market-cap-data",cljs.core.cst$kw$market_DASH_cap_DASH_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["portfolio",cljs.core.cst$kw$portfolio], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["report",cljs.core.cst$kw$report], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["save",cljs.core.cst$kw$save], null)], null)], null);
}
pages.routes.config.fallback = cljs.core.cst$kw$market_DASH_cap_DASH_data;
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(pages.routes.config.routes))){
} else {
throw (new Error("Assert failed: (wheel.route.core/routes? routes)"));
}
