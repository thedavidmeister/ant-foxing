// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$eids,eids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$specs,cljs.core.seq(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern)),cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.cst$kw$kvps,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$results,(function (){var G__24736 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__24736,kvps);
} else {
return G__24736;
}
})()], 0));
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__24737 = rec;
var map__24737__$1 = ((((!((map__24737 == null)))?((((map__24737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24737):map__24737);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737__$1,cljs.core.cst$kw$depth);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24737__$1,cljs.core.cst$kw$seen);
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
var G__24739 = cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame);
var G__24739__$1 = (((G__24739 == null))?null:cljs.core.persistent_BANG_(G__24739));
if((G__24739__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__24739__$1,key);
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
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__24740){
var vec__24741 = p__24740;
var seq__24742 = cljs.core.seq(vec__24741);
var first__24743 = cljs.core.first(seq__24742);
var seq__24742__$1 = cljs.core.next(seq__24742);
var frame = first__24743;
var frames = seq__24742__$1;
var temp__5276__auto__ = cljs.core.seq(cljs.core.cst$kw$eids.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto__){
var eids = temp__5276__auto__;
var frame__$1 = datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),datascript.pull_api.recursion_result(frame));
var eid = cljs.core.first(eids);
var or__8099__auto__ = datascript.pull_api.pull_seen_eid(frame__$1,frames,eid);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.recursion_frame(frame__$1,eid)], 0));
}
} else {
var kvps = datascript.pull_api.recursion_result(frame);
var results = (function (){var G__24744 = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq(kvps)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__24744,kvps);
} else {
return G__24744;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$state,cljs.core.cst$kw$done,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$results,results], 0)));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__24745 = parent;
var map__24745__$1 = ((((!((map__24745 == null)))?((((map__24745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24745):map__24745);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24745__$1,cljs.core.cst$kw$recursion);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24745__$1,cljs.core.cst$kw$pattern);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recursion,cljs.core.cst$kw$depth),attr,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state,cljs.core.cst$kw$recursion,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$multi_QMARK_,multi_QMARK_,cljs.core.cst$kw$eids,eids,cljs.core.cst$kw$recursion,recursion,cljs.core.cst$kw$results,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null)], 0)));
}
});
var pattern_24747 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_24747){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion(cljs.core.cst$kw$recursion.cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.subpattern_frame(pattern_24747,eids,multi_QMARK_,attr_key),cljs.core.cst$kw$recursion,rec);
});})(pattern_24747))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__24749){
var vec__24750 = p__24749;
var seq__24751 = cljs.core.seq(vec__24750);
var first__24752 = cljs.core.first(seq__24751);
var seq__24751__$1 = cljs.core.next(seq__24751);
var parent = first__24752;
var frames = seq__24751__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$limit,(1000));
var found = cljs.core.not_empty((function (){var G__24753 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(limit),G__24753);
} else {
return G__24753;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_(db,attr);
var component_QMARK_ = (ref_QMARK_) && (datascript.db.component_QMARK_(db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_(db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames))
);
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$subpattern)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.subpattern_frame(cljs.core.cst$kw$subpattern.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),multi_QMARK_,attr_key)], 0));
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$recursion)){
return datascript.pull_api.recurse_attr(db,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = component_QMARK_;
if(and__8087__auto__){
return forward_QMARK_;
} else {
return and__8087__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.pull_api.expand_frame(parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(datom_val,found))], 0));
} else {
var as_value = (function (){var G__24754 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__24754,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames){
return (function (p1__24748_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$db_SLASH_id],[p1__24748_SHARP_]);
});})(G__24754,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__24750,seq__24751,first__24752,seq__24751__$1,parent,frames))
,G__24754);
} else {
return G__24754;
}
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,(function (){var G__24755 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_value),found);
if(single_QMARK_){
return cljs.core.first(G__24755);
} else {
return G__24755;
}
})()));

}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,(function (){var G__24756 = parent;
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__24756,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,attr_key,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__24756;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__24757 = spec;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24757,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24757,(1),null);
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
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__24760){
var vec__24761 = p__24760;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24761,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$attrs,rattrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wildcard_QMARK_,false], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev);
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(frames),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(frames),cljs.core.cst$kw$kvps,datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_(kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__24764){
var vec__24765 = p__24764;
var seq__24766 = cljs.core.seq(vec__24765);
var first__24767 = cljs.core.first(seq__24766);
var seq__24766__$1 = cljs.core.next(seq__24766);
var frame = first__24767;
var frames = seq__24766__$1;
return datascript.pull_api.expand_result(frames,datascript.pull_api.into_BANG_(cljs.core.cst$kw$expand_DASH_kvps.cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__8099__auto__ = datascript.pull_api.single_frame_result(cljs.core.cst$kw$datascript$pull_DASH_api_SLASH_expand_DASH_rev,frame);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__24768){
var vec__24769 = p__24768;
var seq__24770 = cljs.core.seq(vec__24769);
var first__24771 = cljs.core.first(seq__24770);
var seq__24770__$1 = cljs.core.next(seq__24770);
var frame = first__24771;
var frames = seq__24770__$1;
var temp__5276__auto__ = cljs.core.seq(cljs.core.cst$kw$datoms.cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5276__auto__){
var datoms_by_attr = temp__5276__auto__;
var vec__24772 = cljs.core.first(datoms_by_attr);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24772,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24772,(1),null);
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
var map__24775 = frame;
var map__24775__$1 = ((((!((map__24775 == null)))?((((map__24775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24775):map__24775);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24775__$1,cljs.core.cst$kw$attr);
var recursion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24775__$1,cljs.core.cst$kw$recursion);
var rec = (function (){var G__24777 = recursion;
if(!((attr == null))){
return datascript.pull_api.push_recursion(G__24777,attr,eid);
} else {
return G__24777;
}
})();
return datascript.pull_api.pull_expand_frame(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(frames,frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$expand,cljs.core.cst$kw$kvps,cljs.core.transient$(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,eid], null)),cljs.core.cst$kw$eid,eid,cljs.core.cst$kw$pattern,pattern,cljs.core.cst$kw$datoms,cljs.core.seq(datoms),cljs.core.cst$kw$recursion,rec], null)], 0)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__24778 = frame;
var map__24778__$1 = ((((!((map__24778 == null)))?((((map__24778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24778):map__24778);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778__$1,cljs.core.cst$kw$eid);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778__$1,cljs.core.cst$kw$pattern);
var or__8099__auto__ = datascript.pull_api.pull_seen_eid(frame,frames,eid);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand(db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__24780){
while(true){
var vec__24781 = p__24780;
var seq__24782 = cljs.core.seq(vec__24781);
var first__24783 = cljs.core.first(seq__24782);
var seq__24782__$1 = cljs.core.next(seq__24782);
var frame = first__24783;
var frames = seq__24782__$1;
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
var G__24784 = db;
var G__24785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames,datascript.pull_api.reset_frame(frame,cljs.core.rest(eids),cljs.core.not_empty(cljs.core.persistent_BANG_(cljs.core.cst$kw$kvps.cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__24784;
p__24780 = G__24785;
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
var G__24786 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames));
var G__24786__$1 = (((G__24786 instanceof cljs.core.Keyword))?G__24786.fqn:null);
switch (G__24786__$1) {
case "expand":
var G__24793 = db;
var G__24794 = datascript.pull_api.pull_expand_frame(db,frames);
db = G__24793;
frames = G__24794;
continue;

break;
case "expand-rev":
var G__24795 = db;
var G__24796 = datascript.pull_api.pull_expand_reverse_frame(db,frames);
db = G__24795;
frames = G__24796;
continue;

break;
case "pattern":
var G__24797 = db;
var G__24798 = datascript.pull_api.pull_pattern_frame(db,frames);
db = G__24797;
frames = G__24798;
continue;

break;
case "recursion":
var G__24799 = db;
var G__24800 = datascript.pull_api.pull_recursion_frame(db,frames);
db = G__24799;
frames = G__24800;
continue;

break;
case "done":
var vec__24787 = frames;
var seq__24788 = cljs.core.seq(vec__24787);
var first__24789 = cljs.core.first(seq__24788);
var seq__24788__$1 = cljs.core.next(seq__24788);
var f = first__24789;
var remaining = seq__24788__$1;
var result = (function (){var G__24790 = cljs.core.persistent_BANG_(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not(cljs.core.cst$kw$multi_QMARK_.cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first(G__24790);
} else {
return G__24790;
}
})();
if(cljs.core.seq(remaining)){
var G__24801 = db;
var G__24802 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(remaining),(function (){var G__24791 = cljs.core.first(remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__24791,cljs.core.cst$kw$kvps,cljs.core.assoc_BANG_,cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__24791;
}
})());
db = G__24801;
frames = G__24802;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24786__$1)].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24803_SHARP_){
return datascript.db.entid_strict(db,p1__24803_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern(db,(function (){var x__9034__auto__ = datascript.pull_api.initial_frame(pattern,eids__$1,multi_QMARK_);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
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
