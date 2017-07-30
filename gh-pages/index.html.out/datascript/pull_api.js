// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$multi_QMARK_,cljs.core.cst$kw$eids,cljs.core.cst$kw$state,cljs.core.cst$kw$recursion,cljs.core.cst$kw$specs,cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$kvps,cljs.core.cst$kw$pattern,cljs.core.cst$kw$results],[multi_QMARK_,eids,cljs.core.cst$kw$pattern,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$depth,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern)),cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.initial_frame(pattern,eids,multi_QMARK_),cljs.core.cst$kw$attr,attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$eids,eids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$specs,cljs.core.seq(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern)),cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.cst$kw$kvps,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$results,(function (){var G__25776 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__25776,kvps);
} else {
return G__25776;
}
})()], 0));
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__25777 = rec;
var map__25777__$1 = ((((!((map__25777 == null)))?((((map__25777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25777):map__25777);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25777__$1,cljs.core.cst$kw$depth);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25777__$1,cljs.core.cst$kw$seen);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,cljs.core.cst$kw$depth,cljs.core.update.cljs$core$IFn$_invoke$arity$3(depth,attr,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eid)], 0));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion,cljs.core.cst$kw$seen], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(cljs.core.truth_(datascript.pull_api.seen_eid_QMARK_(frame,eid))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame,cljs.core.cst$kw$results,cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__25779 = cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame);
var G__25779__$1 = (((G__25779 == null))?null:cljs.core.persistent_BANG_(G__25779));
if((G__25779__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__25779__$1,key);
}
});
datascript.pull_api.recursion_result = (function datascript$pull_api$recursion_result(frame){
return datascript.pull_api.single_frame_result(cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_recursion,frame);
});
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_recursion),cljs.core.cst$kw$recursion,rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__25780){
var vec__25781 = p__25780;
var seq__25782 = cljs.core.seq(vec__25781);
var first__25783 = cljs.core.first(seq__25782);
var seq__25782__$1 = cljs.core.next(seq__25782);
var frame = first__25783;
var frames = seq__25782__$1;
var temp__5276__auto__ = cljs.core.seq(cljs.core.cst$kw$eids.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto__){
var eids = temp__5276__auto__;
var frame__$1 = datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),datascript.pull_api.recursion_result(frame));
var eid = cljs.core.first(eids);
var or__8762__auto__ = datascript.pull_api.pull_seen_eid(frame__$1,frames,eid);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.recursion_frame(frame__$1,eid)], 0));
}
} else {
var kvps = datascript.pull_api.recursion_result(frame);
var results = (function (){var G__25784 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__25784,kvps);
} else {
return G__25784;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$done,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$results,results], 0)));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__25785 = parent;
var map__25785__$1 = ((((!((map__25785 == null)))?((((map__25785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25785):map__25785);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25785__$1,cljs.core.cst$kw$recursion);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25785__$1,cljs.core.cst$kw$pattern);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recursion,cljs.core.cst$kw$depth),attr,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state,cljs.core.cst$kw$recursion,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$multi_QMARK_,multi_QMARK_,cljs.core.cst$kw$eids,eids,cljs.core.cst$kw$recursion,recursion,cljs.core.cst$kw$results,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null)], 0)));
}
});
var pattern_25787 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_25787){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(pattern_25787,eids,multi_QMARK_,attr_key),cljs.core.cst$kw$recursion,rec);
});})(pattern_25787))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__25789){
var vec__25790 = p__25789;
var seq__25791 = cljs.core.seq(vec__25790);
var first__25792 = cljs.core.first(seq__25791);
var seq__25791__$1 = cljs.core.next(seq__25791);
var parent = first__25792;
var frames = seq__25791__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$limit,(1000));
var found = cljs.core.not_empty((function (){var G__25793 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(limit),G__25793);
} else {
return G__25793;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_(db,attr);
var component_QMARK_ = (ref_QMARK_) && (datascript.db.component_QMARK_(db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_(db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames))
);
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$subpattern)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.subpattern_frame(cljs.core.cst$kw$subpattern.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),multi_QMARK_,attr_key)], 0));
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$recursion)){
return datascript.pull_api.recurse_attr(db,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__8750__auto__ = component_QMARK_;
if(and__8750__auto__){
return forward_QMARK_;
} else {
return and__8750__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_frame(parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found))], 0));
} else {
var as_value = (function (){var G__25794 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__25794,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames){
return (function (p1__25788_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$db_SLASH_id],[p1__25788_SHARP_]);
});})(G__25794,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__25790,seq__25791,first__25792,seq__25791__$1,parent,frames))
,G__25794);
} else {
return G__25794;
}
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,(function (){var G__25795 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_value),found);
if(single_QMARK_){
return cljs.core.first(G__25795);
} else {
return G__25795;
}
})()));

}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,(function (){var G__25796 = parent;
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25796,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__25796;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__25797 = spec;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25797,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25797,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,attr_key)){
if(cljs.core.truth_(cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.first(frames),cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,cljs.core.cst$kw$db_SLASH_id,eid));
} else {
return frames;
}
} else {
var attr = cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__25800){
var vec__25801 = p__25800;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25801,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$attrs,rattrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wildcard_QMARK_,false], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev);
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(frames),cljs.core.cst$kw$kvps,datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_(kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__25804){
var vec__25805 = p__25804;
var seq__25806 = cljs.core.seq(vec__25805);
var first__25807 = cljs.core.first(seq__25806);
var seq__25806__$1 = cljs.core.next(seq__25806);
var frame = first__25807;
var frames = seq__25806__$1;
return datascript.pull_api.expand_result(frames,datascript.pull_api.into_BANG_(cljs.core.cst$kw$expand_DASH_kvps.cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__8762__auto__ = datascript.pull_api.single_frame_result(cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev,frame);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__25808){
var vec__25809 = p__25808;
var seq__25810 = cljs.core.seq(vec__25809);
var first__25811 = cljs.core.first(seq__25810);
var seq__25810__$1 = cljs.core.next(seq__25810);
var frame = first__25811;
var frames = seq__25810__$1;
var temp__5276__auto__ = cljs.core.seq(cljs.core.cst$kw$datoms.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto__){
var datoms_by_attr = temp__5276__auto__;
var vec__25812 = cljs.core.first(datoms_by_attr);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(1),null);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$attrs], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms(db,attr,attr,cljs.core.cst$kw$eid.cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$datoms,cljs.core.rest)));
} else {
var temp__5276__auto____$1 = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$attrs], null))));
if(cljs.core.truth_(temp__5276__auto____$1)){
var rattrs = temp__5276__auto____$1;
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$expand_DASH_rev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expand_DASH_kvps,cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$kvps,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_reverse_subpattern_frame(frame__$1,cljs.core.cst$kw$eid.cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs)], 0));
} else {
return datascript.pull_api.expand_result(frames,cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by((function (d){
return d.a;
}),datascript.db._datoms(db,cljs.core.cst$kw$eavt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__25815 = frame;
var map__25815__$1 = ((((!((map__25815 == null)))?((((map__25815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25815):map__25815);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25815__$1,cljs.core.cst$kw$attr);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25815__$1,cljs.core.cst$kw$recursion);
var rec = (function (){var G__25817 = recursion;
if(!((attr == null))){
return datascript.pull_api.push_recursion(G__25817,attr,eid);
} else {
return G__25817;
}
})();
return datascript.pull_api.pull_expand_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$expand,cljs.core.cst$kw$kvps,cljs.core.transient$(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,eid], null)),cljs.core.cst$kw$eid,eid,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$datoms,cljs.core.seq(datoms),cljs.core.cst$kw$recursion,rec], null)], 0)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__25818 = frame;
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25818):map__25818);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$eid);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$pattern);
var or__8762__auto__ = datascript.pull_api.pull_seen_eid(frame,frames,eid);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand(db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__25820){
while(true){
var vec__25821 = p__25820;
var seq__25822 = cljs.core.seq(vec__25821);
var first__25823 = cljs.core.first(seq__25822);
var seq__25822__$1 = cljs.core.next(seq__25822);
var frame = first__25823;
var frames = seq__25822__$1;
var temp__5276__auto__ = cljs.core.seq(cljs.core.cst$kw$eids.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto__){
var eids = temp__5276__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$specs,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eid,cljs.core.first(eids),cljs.core.cst$kw$wildcard_QMARK_,false], 0)),frames);
} else {
var temp__5276__auto____$1 = cljs.core.seq(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto____$1){
var specs = temp__5276__auto____$1;
var spec = cljs.core.first(specs);
var pattern = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$specs,cljs.core.rest(specs)));
return datascript.pull_api.pull_attr(db,spec,cljs.core.first(eids),new_frames);
} else {
var G__25824 = db;
var G__25825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),cljs.core.not_empty(cljs.core.persistent_BANG_(cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__25824;
p__25820 = G__25825;
continue;
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$done));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__25826 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames));
var G__25826__$1 = (((G__25826 instanceof cljs.core.Keyword))?G__25826.fqn:null);
switch (G__25826__$1) {
case "expand":
var G__25833 = db;
var G__25834 = datascript.pull_api.pull_expand_frame(db,frames);
db = G__25833;
frames = G__25834;
continue;

break;
case "expand-rev":
var G__25835 = db;
var G__25836 = datascript.pull_api.pull_expand_reverse_frame(db,frames);
db = G__25835;
frames = G__25836;
continue;

break;
case "pattern":
var G__25837 = db;
var G__25838 = datascript.pull_api.pull_pattern_frame(db,frames);
db = G__25837;
frames = G__25838;
continue;

break;
case "recursion":
var G__25839 = db;
var G__25840 = datascript.pull_api.pull_recursion_frame(db,frames);
db = G__25839;
frames = G__25840;
continue;

break;
case "done":
var vec__25827 = frames;
var seq__25828 = cljs.core.seq(vec__25827);
var first__25829 = cljs.core.first(seq__25828);
var seq__25828__$1 = cljs.core.next(seq__25828);
var f = first__25829;
var remaining = seq__25828__$1;
var result = (function (){var G__25830 = cljs.core.persistent_BANG_(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not(cljs.core.cst$kw$multi_QMARK_.cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first(G__25830);
} else {
return G__25830;
}
})();
if(cljs.core.seq(remaining)){
var G__25841 = db;
var G__25842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(remaining),(function (){var G__25831 = cljs.core.first(remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__25831,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__25831;
}
})());
db = G__25841;
frames = G__25842;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25826__$1)].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__25843_SHARP_){
return datascript.db.entid_strict(db,p1__25843_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern(db,(function (){var x__9711__auto__ = datascript.pull_api.initial_frame(pattern,eids__$1,multi_QMARK_);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})());
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec(db,datascript.pull_parser.parse_pull(selector),eids,true);
});
