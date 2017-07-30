// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(87),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.87);
}
/**
 * Default (fn [data]) -> string output fn.
 *   Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__28801 = arguments.length;
switch (G__28801) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__28802 = opts;
var map__28802__$1 = ((((!((map__28802 == null)))?((((map__28802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28802):map__28802);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28802__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28802__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__28803 = data;
var map__28803__$1 = ((((!((map__28803 == null)))?((((map__28803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28803):map__28803);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28803__$1,cljs.core.cst$kw$_QMARK_line);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8762__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
return "?";
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8762__auto__ = _QMARK_line;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return "?";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("] - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5278__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5278__auto__)){
var err = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _} (clj only)
 *    :ns-whitelist    ; Optional, stacks with active config's whitelist
 *    :ns-blacklist    ; Optional, stacks with active config's blacklist
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :vargs           ; Vector of raw args
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string (clj only)
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; *context* value at log time (see `with-context`)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware
 *  returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_whitelist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ns_DASH_blacklist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__28807 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__28807) : taoensso.timbre.console_appender.call(null,G__28807));
})()], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__10041__auto__ = [];
var len__10034__auto___28810 = arguments.length;
var i__10035__auto___28811 = (0);
while(true){
if((i__10035__auto___28811 < len__10034__auto___28810)){
args__10041__auto__.push((arguments[i__10035__auto___28811]));

var G__28812 = (i__10035__auto___28811 + (1));
i__10035__auto___28811 = G__28812;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((1) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10042__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq28808){
var G__28809 = cljs.core.first(seq28808);
var seq28808__$1 = cljs.core.next(seq28808);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28809,seq28808__$1);
});

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$level,level);
}));
});
taoensso.timbre._levels_vec = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
taoensso.timbre._levels_set = cljs.core.set(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null));
taoensso.timbre._levels_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null),cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_((taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x)))){
return true;
} else {
return false;
}
});
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
var or__8762__auto__ = (taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x));
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Timbre logging level",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,x], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((function (){var G__28813 = taoensso.timbre.valid_level(x);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__28813) : taoensso.timbre._levels_map.call(null,G__28813));
})() >= (function (){var G__28814 = taoensso.timbre.valid_level(y);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__28814) : taoensso.timbre._levels_map.call(null,G__28814));
})());
});
taoensso.timbre._compile_ns_filter = taoensso.encore.memoize_(taoensso.encore.compile_ns_filter);
/**
 * Returns true iff given ns passes white/black lists.
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_((function (whitelist,blacklist,_QMARK_ns){
var fexpr__28815 = (taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2(whitelist,blacklist) : taoensso.timbre._compile_ns_filter.call(null,whitelist,blacklist));
return (fexpr__28815.cljs$core$IFn$_invoke$arity$1 ? fexpr__28815.cljs$core$IFn$_invoke$arity$1(_QMARK_ns) : fexpr__28815.call(null,_QMARK_ns));
}));
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__28817 = arguments.length;
switch (G__28817) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,null,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__8762__auto__ = _QMARK_config;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$level,cljs.core.cst$kw$report);
var and__8750__auto__ = taoensso.timbre.level_GT__EQ_(level,min_level);
if(cljs.core.truth_(and__8750__auto__)){
return (cljs.core.boolean$((function (){var G__28821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__28822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
var G__28823 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__28821,G__28822,G__28823) : taoensso.timbre.ns_filter.call(null,G__28821,G__28822,G__28823));
})())) && (true);
} else {
return and__8750__auto__;
}
});

taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.vrest = (function taoensso$timbre$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__28828 = _QMARK_err;
var G__28829 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__28828,G__28829) : taoensso.encore.kw_identical_QMARK_.call(null,G__28828,G__28829));
})();
var fmt_msg_QMARK_ = (function (){var G__28830 = msg_type;
var G__28831 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__28830,G__28831) : taoensso.encore.kw_identical_QMARK_.call(null,G__28830,G__28831));
})();
var vec__28825 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(0),null);
if(cljs.core.truth_((function (){var and__8750__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__8750__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__8750__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.timbre.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__28832 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28832,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__8750__auto__ = cljs.core.map_QMARK_(v0);
if(and__8750__auto__){
return cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__8750__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__8762__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.timbre.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__28835 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__28839 = arguments.length;
switch (G__28839) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null);
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,config)){
var instant_28859 = taoensso.encore.now_dt();
var context_28860 = taoensso.timbre._STAR_context_STAR_;
var vargs_28861 = cljs.core.deref(vargs_);
var vec__28840_28862 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_28861);
var _QMARK_err_28863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_28862,(0),null);
var _QMARK_meta_28864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_28862,(1),null);
var _QMARK_msg_fmt_28865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_28862,(2),null);
var vargs_28866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_28862,(3),null);
var data_28867 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__8762__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_28859,config,vargs_28866__$1,_QMARK_file,(function (){var fexpr__28843 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__28843.cljs$core$IFn$_invoke$arity$1 ? fexpr__28843.cljs$core$IFn$_invoke$arity$1(level) : fexpr__28843.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_28863__$1,context_28860,_QMARK_line,(new cljs.core.Delay(((function (instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1){
return (function (){
return _QMARK_err_28863__$1;
});})(instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1))
,null)),_QMARK_meta_28864,_QMARK_msg_fmt_28865]));
var _QMARK_data_28868 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867){
return (function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
});})(instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867))
,data_28867,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__5278__auto___28869 = _QMARK_data_28868;
if(cljs.core.truth_(temp__5278__auto___28869)){
var data_28870__$1 = temp__5278__auto___28869;
var map__28844_28871 = data_28870__$1;
var map__28844_28872__$1 = ((((!((map__28844_28871 == null)))?((((map__28844_28871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28844_28871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28844_28871):map__28844_28871);
var vargs_28873__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28844_28872__$1,cljs.core.cst$kw$vargs);
var data_28874__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_28870__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay(((function (map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868){
return (function (){
return vargs_28873__$2;
});})(map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868))
,null)));
var data_28875__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_28874__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay(((function (map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868){
return (function (){
var G__28846 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28846)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__28846)){
return taoensso.timbre.str_join(vargs_28873__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__28846)){
if(typeof _QMARK_msg_fmt_28865 === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8762__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
return "?";
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8762__auto__ = _QMARK_line;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_28865,vargs_28873__$2);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28846)].join('')));

}
}
}
});})(map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868))
,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay(((function (map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868){
return (function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_28865,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_28864,cljs.core.cst$kw$hash,vargs_28873__$2)], null));
});})(map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868))
,null))], 0));
var output_fn1_28876 = taoensso.encore.memoize_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
cljs.core.reduce_kv(((function (map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28875__$3,output_fn1_28876,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__8750__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__8750__auto__)){
return taoensso.timbre.level_GT__EQ_(level,(function (){var or__8762__auto__ = cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.cst$kw$trace;
}
})());
} else {
return and__8750__auto__;
}
})())){
if(cljs.core.truth_((function (){var G__28847 = cljs.core.cst$kw$ns_DASH_whitelist.cljs$core$IFn$_invoke$arity$1(appender);
var G__28848 = cljs.core.cst$kw$ns_DASH_blacklist.cljs$core$IFn$_invoke$arity$1(appender);
var G__28849 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__28847,G__28848,G__28849) : taoensso.timbre.ns_filter.call(null,G__28847,G__28848,G__28849));
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__8762__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__8762__auto__){
return or__8762__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__28851 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_28875__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__28851) : rl_fn.call(null,G__28851));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__28852 = appender;
var map__28852__$1 = ((((!((map__28852 == null)))?((((map__28852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28852):map__28852);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28852__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28852__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__8762__auto__ = (f == null);
if(or__8762__auto__){
return or__8762__auto__;
} else {
var G__28856 = f;
var G__28857 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__28856,G__28857) : taoensso.encore.kw_identical_QMARK_.call(null,G__28856,G__28857));
}
})())){
return output_fn1_28876;
} else {
return f;
}
})();
var output_ = (new cljs.core.Delay(((function (map__28852,map__28852__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28875__$3,output_fn1_28876,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868){
return (function (){
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data_28875__$3) : output_fn.call(null,data_28875__$3));
});})(map__28852,map__28852__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28875__$3,output_fn1_28876,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868))
,null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_28875__$3,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_], null));
var _QMARK_data__$1 = (function (){var temp__5276__auto__ = cljs.core.cst$kw$middleware_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5276__auto__)){
var mfn = temp__5276__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__5278__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5278__auto____$1)){
var data__$5 = temp__5278__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(map__28844_28871,map__28844_28872__$1,vargs_28873__$2,data_28874__$2,data_28875__$3,output_fn1_28876,data_28870__$1,temp__5278__auto___28869,instant_28859,context_28860,vargs_28861,vec__28840_28862,_QMARK_err_28863__$1,_QMARK_meta_28864,_QMARK_msg_fmt_28865,vargs_28866__$1,data_28867,_QMARK_data_28868))
,null,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
});

taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 10;

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__28878 = arguments.length;
switch (G__28878) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2;

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns)].join(''));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__10041__auto__ = [];
var len__10034__auto___28881 = arguments.length;
var i__10035__auto___28882 = (0);
while(true){
if((i__10035__auto___28882 < len__10034__auto___28881)){
args__10041__auto__.push((arguments[i__10035__auto___28882]));

var G__28883 = (i__10035__auto___28882 + (1));
i__10035__auto___28882 = G__28883;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq28880){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28880));
});
