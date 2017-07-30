// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.utils');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't priveledged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto__.call(null,this$));
} else {
var m__9496__auto____$1 = (schema.spec.core.subschemas["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoreSpec.subschemas",this$);
}
}
}
});

/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params are: subschema-checker, return-walked?, and cache.
 * 
 *   params is a map specifying:
 *    - subschema-checker - a function for checking subschemas
 *    - returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (schema.spec.core.checker[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__9496__auto__.call(null,this$,params));
} else {
var m__9496__auto____$1 = (schema.spec.core.checker["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__9496__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("CoreSpec.checker",this$);
}
}
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable standin for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__5278__auto__ = (function (){try{if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return null;
} else {
return cljs.core.cst$sym$not;
}
}catch (e28351){if((e28351 instanceof Object)){
var e_SHARP_ = e28351;
return cljs.core.cst$sym$throws_QMARK_;
} else {
throw e28351;

}
}})();
if(cljs.core.truth_(temp__5278__auto__)){
var reason = temp__5278__auto__;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay(((function (reason,temp__5278__auto__){
return (function (){
var G__28352 = schema.utils.value_name(x);
return (err_f.cljs$core$IFn$_invoke$arity$1 ? err_f.cljs$core$IFn$_invoke$arity$1(G__28352) : err_f.call(null,G__28352));
});})(reason,temp__5278__auto__))
,null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
var G__28353 = s;
var G__28354 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$subschema_DASH_checker,f,cljs.core.cst$kw$return_DASH_walked_QMARK_,return_walked_QMARK_,cljs.core.cst$kw$cache,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28353,G__28354) : f.call(null,G__28353,G__28354));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__5276__auto__ = (function (){var fexpr__28355 = cljs.core.deref(cache);
return (fexpr__28355.cljs$core$IFn$_invoke$arity$1 ? fexpr__28355.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__28355.call(null,cache_key));
})();
if(cljs.core.truth_(temp__5276__auto__)){
var w = temp__5276__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress,w)){
var G__28356 = (new cljs.core.Delay(((function (w,temp__5276__auto__){
return (function (){
var fexpr__28357 = cljs.core.deref(cache);
return (fexpr__28357.cljs$core$IFn$_invoke$arity$1 ? fexpr__28357.cljs$core$IFn$_invoke$arity$1(cache_key) : fexpr__28357.call(null,cache_key));
});})(w,temp__5276__auto__))
,null));
return (wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1 ? wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1(G__28356) : wrap_recursive_delay.call(null,G__28356));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress);

var res = (result_fn.cljs$core$IFn$_invoke$arity$0 ? result_fn.cljs$core$IFn$_invoke$arity$0() : result_fn.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__28358,p__28359){
var map__28360 = p__28358;
var map__28360__$1 = ((((!((map__28360 == null)))?((((map__28360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28360):map__28360);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28360__$1,cljs.core.cst$kw$schema);
var error_wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28360__$1,cljs.core.cst$kw$error_DASH_wrap);
var map__28361 = p__28359;
var map__28361__$1 = ((((!((map__28361 == null)))?((((map__28361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28361):map__28361);
var params = map__28361__$1;
var subschema_checker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361__$1,cljs.core.cst$kw$subschema_DASH_checker);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361__$1,cljs.core.cst$kw$cache);
var sub = schema.spec.core.with_cache(cache,schema__$1,((function (map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache){
return (function (d){
return ((function (map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache){
return (function (x){
var fexpr__28364 = cljs.core.deref(d);
return (fexpr__28364.cljs$core$IFn$_invoke$arity$1 ? fexpr__28364.cljs$core$IFn$_invoke$arity$1(x) : fexpr__28364.call(null,x));
});
;})(map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache))
});})(map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache))
,((function (map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache){
return (function (){
return (subschema_checker.cljs$core$IFn$_invoke$arity$2 ? subschema_checker.cljs$core$IFn$_invoke$arity$2(schema__$1,params) : subschema_checker.call(null,schema__$1,params));
});})(map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache))
);
if(cljs.core.truth_(error_wrap)){
return ((function (sub,map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache){
return (function (x){
var res = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(x) : sub.call(null,x));
var temp__5276__auto__ = schema.utils.error_val(res);
if(cljs.core.truth_(temp__5276__auto__)){
var e = temp__5276__auto__;
return schema.utils.error((error_wrap.cljs$core$IFn$_invoke$arity$1 ? error_wrap.cljs$core$IFn$_invoke$arity$1(res) : error_wrap.call(null,res)));
} else {
return res;
}
});
;})(sub,map__28360,map__28360__$1,schema__$1,error_wrap,map__28361,map__28361__$1,params,subschema_checker,cache))
} else {
return sub;
}
});
