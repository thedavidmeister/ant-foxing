// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('datascript.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__24934 = arguments.length;
switch (G__24934) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
return null;
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
return null;
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24937,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24941 = k24937;
var G__24941__$1 = (((G__24941 instanceof cljs.core.Keyword))?G__24941.fqn:null);
switch (G__24941__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24937,else__8776__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.query.Context{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24936){
var self__ = this;
var G__24936__$1 = this;
return (new cljs.core.RecordIter((0),G__24936__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24942 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24942.cljs$core$IFn$_invoke$arity$1 ? fexpr__24942.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24942.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24938,other24939){
var self__ = this;
var this24938__$1 = this;
return (!((other24939 == null))) && ((this24938__$1.constructor === other24939.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24938__$1.rels,other24939.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24938__$1.sources,other24939.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24938__$1.rules,other24939.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24938__$1.__extmap,other24939.__extmap));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24936){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24943 = cljs.core.keyword_identical_QMARK_;
var expr__24944 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24946 = cljs.core.cst$kw$rels;
var G__24947 = expr__24944;
return (pred__24943.cljs$core$IFn$_invoke$arity$2 ? pred__24943.cljs$core$IFn$_invoke$arity$2(G__24946,G__24947) : pred__24943.call(null,G__24946,G__24947));
})())){
return (new datascript.query.Context(G__24936,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24948 = cljs.core.cst$kw$sources;
var G__24949 = expr__24944;
return (pred__24943.cljs$core$IFn$_invoke$arity$2 ? pred__24943.cljs$core$IFn$_invoke$arity$2(G__24948,G__24949) : pred__24943.call(null,G__24948,G__24949));
})())){
return (new datascript.query.Context(self__.rels,G__24936,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24950 = cljs.core.cst$kw$rules;
var G__24951 = expr__24944;
return (pred__24943.cljs$core$IFn$_invoke$arity$2 ? pred__24943.cljs$core$IFn$_invoke$arity$2(G__24950,G__24951) : pred__24943.call(null,G__24950,G__24951));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__24936,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24936),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24936){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__24936,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__24940){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__24940),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__24940),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__24940),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24940,cljs.core.cst$kw$rels,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24954,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24958 = k24954;
var G__24958__$1 = (((G__24958 instanceof cljs.core.Keyword))?G__24958.fqn:null);
switch (G__24958__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24954,else__8776__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.query.Relation{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24953){
var self__ = this;
var G__24953__$1 = this;
return (new cljs.core.RecordIter((0),G__24953__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24959 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24959.cljs$core$IFn$_invoke$arity$1 ? fexpr__24959.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24959.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24955,other24956){
var self__ = this;
var this24955__$1 = this;
return (!((other24956 == null))) && ((this24955__$1.constructor === other24956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24955__$1.attrs,other24956.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24955__$1.tuples,other24956.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24955__$1.__extmap,other24956.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24953){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24960 = cljs.core.keyword_identical_QMARK_;
var expr__24961 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24963 = cljs.core.cst$kw$attrs;
var G__24964 = expr__24961;
return (pred__24960.cljs$core$IFn$_invoke$arity$2 ? pred__24960.cljs$core$IFn$_invoke$arity$2(G__24963,G__24964) : pred__24960.call(null,G__24963,G__24964));
})())){
return (new datascript.query.Relation(G__24953,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24965 = cljs.core.cst$kw$tuples;
var G__24966 = expr__24961;
return (pred__24960.cljs$core$IFn$_invoke$arity$2 ? pred__24960.cljs$core$IFn$_invoke$arity$2(G__24965,G__24966) : pred__24960.call(null,G__24965,G__24966));
})())){
return (new datascript.query.Relation(self__.attrs,G__24953,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24953),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24953){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__24953,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__24957){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__24957),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__24957),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24957,cljs.core.cst$kw$attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tuples], 0))),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__9339__auto__ = [];
var len__9332__auto___24969 = arguments.length;
var i__9333__auto___24970 = (0);
while(true){
if((i__9333__auto___24970 < len__9332__auto___24969)){
args__9339__auto__.push((arguments[i__9333__auto___24970]));

var G__24971 = (i__9333__auto___24970 + (1));
i__9333__auto___24970 = G__24971;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq24968){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24968));
});

datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__24976){
var vec__24977 = p__24976;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__24984){
var vec__24985 = p__24984;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24985,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24985,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = datascript.arrays.make_array((l1 + l2));
var n__9121__auto___24988 = l1;
var i_24989 = (0);
while(true){
if((i_24989 < n__9121__auto___24988)){
(res[i_24989] = (t1[(idxs1[i_24989])]));

var G__24990 = (i_24989 + (1));
i_24989 = G__24990;
continue;
} else {
}
break;
}

var n__9121__auto___24991 = l2;
var i_24992 = (0);
while(true){
if((i_24992 < n__9121__auto___24991)){
(res[(l1 + i_24992)] = (t2[(idxs2[i_24992])]));

var G__24993 = (i_24992 + (1));
i_24992 = G__24993;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(a),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__24995 = arguments.length;
switch (G__24995) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.arrays.make_array((0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__9339__auto__ = [];
var len__9332__auto___24998 = arguments.length;
var i__9333__auto___24999 = (0);
while(true){
if((i__9333__auto___24999 < len__9332__auto___24998)){
args__9339__auto__.push((arguments[i__9333__auto___24999]));

var G__25000 = (i__9333__auto___24999 + (1));
i__9333__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq24997){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24997));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("get-else: nil default value is not supported")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
}

var temp__5276__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__5276__auto__)){
var datom = temp__5276__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25004 = arguments.length;
var i__9333__auto___25005 = (0);
while(true){
if((i__9333__auto___25005 < len__9332__auto___25004)){
args__9339__auto__.push((arguments[i__9333__auto___25005]));

var G__25006 = (i__9333__auto___25005 + (1));
i__9333__auto___25005 = G__25006;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((2) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9340__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5278__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__5278__auto__)){
var datom = temp__5278__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(datom),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom)], null));
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq25001){
var G__25002 = cljs.core.first(seq25001);
var seq25001__$1 = cljs.core.next(seq25001);
var G__25003 = cljs.core.first(seq25001__$1);
var seq25001__$2 = cljs.core.next(seq25001__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__25002,G__25003,seq25001__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25008 = arguments.length;
var i__9333__auto___25009 = (0);
while(true){
if((i__9333__auto___25009 < len__9332__auto___25008)){
args__9339__auto__.push((arguments[i__9333__auto___25009]));

var G__25010 = (i__9333__auto___25009 + (1));
i__9333__auto___25009 = G__25010;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

datascript.query.and_fn.cljs$lang$applyTo = (function (seq25007){
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25007));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25012 = arguments.length;
var i__9333__auto___25013 = (0);
while(true){
if((i__9333__auto___25013 < len__9332__auto___25012)){
args__9339__auto__.push((arguments[i__9333__auto___25013]));

var G__25014 = (i__9333__auto___25013 + (1));
i__9333__auto___25013 = G__25014;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

datascript.query.or_fn.cljs$lang$applyTo = (function (seq25011){
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25011));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$and,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$print_DASH_str,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$count,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$not,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$re_DASH_seq,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$name,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$rand_DASH_int,cljs.core.cst$sym$complement,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$hash_DASH_map,cljs.core.cst$sym$compare,cljs.core.cst$sym$range,cljs.core.cst$sym$max,cljs.core.cst$sym$empty_QMARK_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pr_DASH_str,cljs.core.cst$sym$println_DASH_str,cljs.core.cst$sym$meta,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$prn_DASH_str,cljs.core.cst$sym$dec,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$namespace,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$some_QMARK_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$rand,cljs.core.cst$sym$re_DASH_matches,cljs.core.cst$sym$list,cljs.core.cst$sym$contains_QMARK_,cljs.core.cst$sym$subs,cljs.core.cst$sym$mod,cljs.core.cst$sym$array_DASH_map,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$type,cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$not_DASH_empty,cljs.core.cst$sym$or,cljs.core.cst$sym$identical_QMARK_,cljs.core.cst$sym$set,cljs.core.cst$sym$re_DASH_find],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,cljs.core.subs,cljs.core.mod,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__25021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__25021 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__25021;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__8962__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__25022(s__25023){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__25023__$1 = s__25023;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25023__$1);
if(temp__5278__auto__){
var s__25023__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25023__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25023__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25025 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25024 = (0);
while(true){
if((i__25024 < size__8961__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25024);
var delta = (x - mean);
cljs.core.chunk_append(b__25025,(delta * delta));

var G__25027 = (i__25024 + (1));
i__25024 = G__25027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25025),datascript$query$variance_$_iter__25022(cljs.core.chunk_rest(s__25023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25025),null);
}
} else {
var x = cljs.core.first(s__25023__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__25022(cljs.core.rest(s__25023__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__8962__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
var G__25026 = variance(coll);
return Math.sqrt(G__25026);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__25028 = null;
var G__25028__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__25028__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__25028 = function(n,coll){
switch(arguments.length){
case 1:
return G__25028__1.call(this,n);
case 2:
return G__25028__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25028.cljs$core$IFn$_invoke$arity$1 = G__25028__1;
G__25028.cljs$core$IFn$_invoke$arity$2 = G__25028__2;
return G__25028;
})()
,(function() {
var G__25029 = null;
var G__25029__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__25029__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__25029 = function(n,coll){
switch(arguments.length){
case 1:
return G__25029__1.call(this,n);
case 2:
return G__25029__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25029.cljs$core$IFn$_invoke$arity$1 = G__25029__1;
G__25029.cljs$core$IFn$_invoke$arity$2 = G__25029__2;
return G__25029;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__25030 = null;
var G__25030__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__25030__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__25030 = function(n,coll){
switch(arguments.length){
case 1:
return G__25030__1.call(this,n);
case 2:
return G__25030__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25030.cljs$core$IFn$_invoke$arity$1 = G__25030__1;
G__25030.cljs$core$IFn$_invoke$arity$2 = G__25030__2;
return G__25030;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__8818__auto__ = (((binding == null))?null:binding);
var m__8819__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__8819__auto__.call(null,binding,value));
} else {
var m__8819__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__8819__auto____$1.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__25031_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__25031_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not enough elements in a collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to bind tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__25032_SHARP_,p2__25033_SHARP_){
return datascript.query.in__GT_rel(p1__25032_SHARP_,p2__25033_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__25034){
var vec__25035 = p__25034;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25035,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25035,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources], null),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_lookup_source_STAR_,eid);
} else {
if(datascript.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_lookup_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__25038_SHARP_){
return (p1__25038_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25038_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__25038_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5276__auto__ = cljs.core.first(tuples__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var tuple = temp__5276__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__25040 = cljs.core.next(tuples__$1);
var G__25041 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__25040;
hash_table = G__25041;
continue;
} else {
return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__25042_SHARP_){
return datascript.query.getter_fn(attrs1,p1__25042_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__25043_SHARP_){
return datascript.query.getter_fn(attrs2,p1__25043_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if(cljs.core.truth_(temp__5276__auto__)){
var tuples1__$1 = temp__5276__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__5276__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5276__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25044_SHARP_){
if((p1__25044_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__25044_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__25045){
var vec__25046 = p__25045;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25046,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25046,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__8087__auto__ = tuple__$1;
if(cljs.core.truth_(and__8087__auto__)){
return pattern__$1;
} else {
return and__8087__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p))){
var G__25049 = cljs.core.next(tuple__$1);
var G__25050 = cljs.core.next(pattern__$1);
tuple__$1 = G__25049;
pattern__$1 = G__25050;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25051_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__25051_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__25052){
var vec__25053 = p__25052;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25053,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25053,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5276__auto__ = cljs.core.first(rels__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var rel = temp__5276__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__25057 = cljs.core.next(rels__$1);
var G__25058 = datascript.query.hash_join(rel,new_rel__$1);
var G__25059 = acc;
rels__$1 = G__25057;
new_rel__$1 = G__25058;
acc = G__25059;
continue;
} else {
var G__25060 = cljs.core.next(rels__$1);
var G__25061 = new_rel__$1;
var G__25062 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__25060;
new_rel__$1 = G__25061;
acc = G__25062;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__25063_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__25063_SHARP_),sym)){
return p1__25063_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5278__auto__ = datascript.query.rel_with_attr(context,sym);
if(cljs.core.truth_(temp__5278__auto__)){
var rel = temp__5278__auto__;
var temp__5278__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__5278__auto____$1)){
var tuple = temp__5278__auto____$1;
return (tuple[(function (){var fexpr__25064 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__25064.cljs$core$IFn$_invoke$arity$1 ? fexpr__25064.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__25064.call(null,sym));
})()]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25065_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__25065_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__25066_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__25066_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = datascript.arrays.make_array(len);
var tuples_args = datascript.arrays.make_array(len);
var n__9121__auto___25067 = len;
var i_25068 = (0);
while(true){
if((i_25068 < n__9121__auto___25067)){
var arg_25069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_25068);
if((arg_25069 instanceof cljs.core.Symbol)){
var temp__5276__auto___25070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_25069);
if(cljs.core.truth_(temp__5276__auto___25070)){
var source_25071 = temp__5276__auto___25070;
(static_args[i_25068] = source_25071);
} else {
(tuples_args[i_25068] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_25069));
}
} else {
(static_args[i_25068] = arg_25069);
}

var G__25072 = (i_25068 + (1));
i_25068 = G__25072;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__9121__auto___25073 = len;
var i_25074 = (0);
while(true){
if((i_25074 < n__9121__auto___25073)){
var temp__5278__auto___25075 = (tuples_args[i_25074]);
if(cljs.core.truth_(temp__5278__auto___25075)){
var tuple_idx_25076 = temp__5278__auto___25075;
var v_25077 = (tuple[tuple_idx_25076]);
(static_args[i_25074] = v_25077);
} else {
}

var G__25078 = (i_25074 + (1));
i_25074 = G__25078;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__25080 = clause;
var vec__25083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25080,(0),null);
var seq__25084 = cljs.core.seq(vec__25083);
var first__25085 = cljs.core.first(seq__25084);
var seq__25084__$1 = cljs.core.next(seq__25084);
var f = first__25085;
var args = seq__25084__$1;
var pred = (function (){var or__8099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown predicate '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__25086 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25086,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25086,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__25080,vec__25083,seq__25084,first__25085,seq__25084__$1,f,args,pred,vec__25086,context__$1,production){
return (function (p1__25079_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__25079_SHARP_);
});})(tuple_pred,vec__25080,vec__25083,seq__25084,first__25085,seq__25084__$1,f,args,pred,vec__25086,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__25089 = clause;
var vec__25092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25089,(0),null);
var seq__25093 = cljs.core.seq(vec__25092);
var first__25094 = cljs.core.first(seq__25093);
var seq__25093__$1 = cljs.core.next(seq__25093);
var f = first__25094;
var args = seq__25093__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25089,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__8099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown function '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__25095 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__8962__auto__ = ((function (tuple_fn,vec__25089,vec__25092,seq__25093,first__25094,seq__25093__$1,f,args,out,binding,fun,vec__25095,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__25098(s__25099){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__25089,vec__25092,seq__25093,first__25094,seq__25093__$1,f,args,out,binding,fun,vec__25095,context__$1,production){
return (function (){
var s__25099__$1 = s__25099;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25099__$1);
if(temp__5278__auto__){
var s__25099__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25099__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25099__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25101 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25100 = (0);
while(true){
if((i__25100 < size__8961__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25100);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__25101,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__25102 = (i__25100 + (1));
i__25100 = G__25102;
continue;
} else {
var G__25103 = (i__25100 + (1));
i__25100 = G__25103;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25101),datascript$query$bind_by_fn_$_iter__25098(cljs.core.chunk_rest(s__25099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25101),null);
}
} else {
var tuple = cljs.core.first(s__25099__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__25098(cljs.core.rest(s__25099__$2)));
} else {
var G__25104 = cljs.core.rest(s__25099__$2);
s__25099__$1 = G__25104;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__25089,vec__25092,seq__25093,first__25094,seq__25093__$1,f,args,out,binding,fun,vec__25095,context__$1,production))
,null,null));
});})(tuple_fn,vec__25089,vec__25092,seq__25093,first__25094,seq__25093__$1,f,args,out,binding,fun,vec__25095,context__$1,production))
;
return iter__8962__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__25106 = clause;
var seq__25107 = cljs.core.seq(vec__25106);
var first__25108 = cljs.core.first(seq__25107);
var seq__25107__$1 = cljs.core.next(seq__25107);
var rule = first__25108;
var call_args = seq__25107__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__8962__auto__ = ((function (vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__25109(s__25110){
return (new cljs.core.LazySeq(null,((function (vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches){
return (function (){
var s__25110__$1 = s__25110;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25110__$1);
if(temp__5278__auto__){
var s__25110__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25110__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25110__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25112 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25111 = (0);
while(true){
if((i__25111 < size__8961__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25111);
var vec__25113 = branch;
var seq__25114 = cljs.core.seq(vec__25113);
var first__25115 = cljs.core.first(seq__25114);
var seq__25114__$1 = cljs.core.next(seq__25114);
var vec__25116 = first__25115;
var seq__25117 = cljs.core.seq(vec__25116);
var first__25118 = cljs.core.first(seq__25117);
var seq__25117__$1 = cljs.core.next(seq__25117);
var _ = first__25118;
var rule_args = seq__25117__$1;
var clauses = seq__25114__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__25112,clojure.walk.postwalk(((function (i__25111,vec__25113,seq__25114,first__25115,seq__25114__$1,vec__25116,seq__25117,first__25118,seq__25117__$1,_,rule_args,clauses,replacements,branch,c__8960__auto__,size__8961__auto__,b__25112,s__25110__$2,temp__5278__auto__,vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches){
return (function (p1__25105_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__25105_SHARP_))){
var x__22325__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__25105_SHARP_) : replacements.call(null,p1__25105_SHARP_));
if((x__22325__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__25105_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__22325__auto__;
}
} else {
return p1__25105_SHARP_;
}
});})(i__25111,vec__25113,seq__25114,first__25115,seq__25114__$1,vec__25116,seq__25117,first__25118,seq__25117__$1,_,rule_args,clauses,replacements,branch,c__8960__auto__,size__8961__auto__,b__25112,s__25110__$2,temp__5278__auto__,vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches))
,clauses));

var G__25125 = (i__25111 + (1));
i__25111 = G__25125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25112),datascript$query$expand_rule_$_iter__25109(cljs.core.chunk_rest(s__25110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25112),null);
}
} else {
var branch = cljs.core.first(s__25110__$2);
var vec__25119 = branch;
var seq__25120 = cljs.core.seq(vec__25119);
var first__25121 = cljs.core.first(seq__25120);
var seq__25120__$1 = cljs.core.next(seq__25120);
var vec__25122 = first__25121;
var seq__25123 = cljs.core.seq(vec__25122);
var first__25124 = cljs.core.first(seq__25123);
var seq__25123__$1 = cljs.core.next(seq__25123);
var _ = first__25124;
var rule_args = seq__25123__$1;
var clauses = seq__25120__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__25119,seq__25120,first__25121,seq__25120__$1,vec__25122,seq__25123,first__25124,seq__25123__$1,_,rule_args,clauses,replacements,branch,s__25110__$2,temp__5278__auto__,vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches){
return (function (p1__25105_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__25105_SHARP_))){
var x__22325__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__25105_SHARP_) : replacements.call(null,p1__25105_SHARP_));
if((x__22325__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__25105_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__22325__auto__;
}
} else {
return p1__25105_SHARP_;
}
});})(vec__25119,seq__25120,first__25121,seq__25120__$1,vec__25122,seq__25123,first__25124,seq__25123__$1,_,rule_args,clauses,replacements,branch,s__25110__$2,temp__5278__auto__,vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__25109(cljs.core.rest(s__25110__$2)));
}
} else {
return null;
}
break;
}
});})(vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__25106,seq__25107,first__25108,seq__25107__$1,rule,call_args,seqid,branches))
;
return iter__8962__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25126){
var vec__25127 = p__25126;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25127,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25127,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__25130 = rule_clause;
var seq__25131 = cljs.core.seq(vec__25130);
var first__25132 = cljs.core.first(seq__25131);
var seq__25131__$1 = cljs.core.next(seq__25131);
var rule = first__25132;
var call_args = seq__25131__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__8962__auto__ = ((function (vec__25130,seq__25131,first__25132,seq__25131__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__25133(s__25134){
return (new cljs.core.LazySeq(null,((function (vec__25130,seq__25131,first__25132,seq__25131__$1,rule,call_args,prev_call_args){
return (function (){
var s__25134__$1 = s__25134;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25134__$1);
if(temp__5278__auto__){
var s__25134__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25134__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25134__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25136 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25135 = (0);
while(true){
if((i__25135 < size__8961__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25135);
var vec__25137 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,(1),null);
cljs.core.chunk_append(b__25136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__25143 = (i__25135 + (1));
i__25135 = G__25143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25136),datascript$query$rule_gen_guards_$_iter__25133(cljs.core.chunk_rest(s__25134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25136),null);
}
} else {
var prev_args = cljs.core.first(s__25134__$2);
var vec__25140 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__25133(cljs.core.rest(s__25134__$2)));
}
} else {
return null;
}
break;
}
});})(vec__25130,seq__25131,first__25132,seq__25131__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__25130,seq__25131,first__25132,seq__25131__$1,rule,call_args,prev_call_args))
;
return iter__8962__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (res){
return (function (p1__25144_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__25144_SHARP_) : pred.call(null,p1__25144_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__25144_SHARP_);
} else {
}

return p1__25144_SHARP_;
});})(res))
,form);

return cljs.core.deref(res);
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__25145){
var vec__25146 = p__25145;
var vec__25149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25146,(0),null);
var seq__25150 = cljs.core.seq(vec__25149);
var first__25151 = cljs.core.first(seq__25150);
var seq__25150__$1 = cljs.core.next(seq__25150);
var _ = first__25151;
var vars = seq__25150__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__25152_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__25152_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (function (){var x__9034__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})();
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5276__auto__ = cljs.core.first(stack);
if(cljs.core.truth_(temp__5276__auto__)){
var frame = temp__5276__auto__;
var vec__25155 = cljs.core.split_with(((function (stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__25153_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__25153_SHARP_));
});})(stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155,(0),null);
var vec__25158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155,(1),null);
var seq__25159 = cljs.core.seq(vec__25158);
var first__25160 = cljs.core.first(seq__25159);
var seq__25159__$1 = cljs.core.next(seq__25159);
var rule_clause = first__25160;
var next_clauses = seq__25159__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__25171 = cljs.core.next(stack);
var G__25172 = datascript.query.sum_rel(rel,new_rel);
stack = G__25171;
rel = G__25172;
continue;
} else {
var vec__25161 = rule_clause;
var seq__25162 = cljs.core.seq(vec__25161);
var first__25163 = cljs.core.first(seq__25162);
var seq__25162__$1 = cljs.core.next(seq__25162);
var rule = first__25163;
var call_args = seq__25162__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__25164 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25164,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25164,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__25154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25154_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__25173 = cljs.core.next(stack);
var G__25174 = rel;
stack = G__25173;
rel = G__25174;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__25175 = cljs.core.next(stack);
var G__25176 = rel;
stack = G__25175;
rel = G__25176;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__25177 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__8962__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__25167(s__25168){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__25168__$1 = s__25168;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25168__$1);
if(temp__5278__auto__){
var s__25168__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25168__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25168__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25170 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25169 = (0);
while(true){
if((i__25169 < size__8961__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25169);
cljs.core.chunk_append(b__25170,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__25179 = (i__25169 + (1));
i__25169 = G__25179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25170),datascript$query$solve_rule_$_iter__25167(cljs.core.chunk_rest(s__25168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25170),null);
}
} else {
var branch = cljs.core.first(s__25168__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__25167(cljs.core.rest(s__25168__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__25161,seq__25162,first__25163,seq__25162__$1,rule,call_args,guards,vec__25164,active_gs,pending_gs,vec__25155,clauses,vec__25158,seq__25159,first__25160,seq__25159__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__8962__auto__(branches);
})(),cljs.core.next(stack));
var G__25178 = rel;
stack = G__25177;
rel = G__25178;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__25181 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(e))?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__8087__auto__ = v;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__8087__auto____$1)){
var and__8087__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__8087__auto____$2){
return datascript.query.lookup_ref_QMARK_(v);
} else {
return and__8087__auto____$2;
}
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__25184 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(3),null);
var G__25187 = cljs.core.PersistentHashSet.EMPTY;
var G__25187__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25187,e):G__25187);
var G__25187__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25187__$1,tx):G__25187__$1);
if(cljs.core.truth_((function (){var and__8087__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__8087__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__8087__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25187__$2,v);
} else {
return G__25187__$2;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__25188 = datascript.query.looks_like_QMARK_;
var expr__25189 = clause;
if(cljs.core.truth_((function (){var G__25191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__25192 = expr__25189;
return (pred__25188.cljs$core$IFn$_invoke$arity$2 ? pred__25188.cljs$core$IFn$_invoke$arity$2(G__25191,G__25192) : pred__25188.call(null,G__25191,G__25192));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__25193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__25194 = expr__25189;
return (pred__25188.cljs$core$IFn$_invoke$arity$2 ? pred__25188.cljs$core$IFn$_invoke$arity$2(G__25193,G__25194) : pred__25188.call(null,G__25193,G__25194));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__25195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__25196 = expr__25189;
return (pred__25188.cljs$core$IFn$_invoke$arity$2 ? pred__25188.cljs$core$IFn$_invoke$arity$2(G__25195,G__25196) : pred__25188.call(null,G__25195,G__25196));
})())){
var vec__25197 = datascript.query.normalize_pattern_clause(clause);
var seq__25198 = cljs.core.seq(vec__25197);
var first__25199 = cljs.core.first(seq__25198);
var seq__25198__$1 = cljs.core.next(seq__25198);
var source_sym = first__25199;
var pattern = seq__25198__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_25201 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_25202 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_25202;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_25201;
}} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25189)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__25203 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(1),null);
var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,source], null));
var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$sources,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$$,source__$1], null)),rule);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__25208 = arguments.length;
switch (G__25208) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5276__auto__ = cljs.core.first(rels);
if(cljs.core.truth_(temp__5276__auto__)){
var rel = temp__5276__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__25216 = acc;
var G__25217 = cljs.core.next(rels);
var G__25218 = symbols;
acc = G__25216;
rels = G__25217;
symbols = G__25218;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5276__auto__){
return (function (p1__25206_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__25206_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5276__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__25219 = (function (){var iter__8962__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__25209(s__25210){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__25210__$1 = s__25210;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25210__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var t1 = cljs.core.first(xs__5831__auto__);
var iterys__8958__auto__ = ((function (s__25210__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__25209_$_iter__25211(s__25212){
return (new cljs.core.LazySeq(null,((function (s__25210__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__25212__$1 = s__25212;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__25212__$1);
if(temp__5278__auto____$1){
var s__25212__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25212__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25212__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25214 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25213 = (0);
while(true){
if((i__25213 < size__8961__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25213);
cljs.core.chunk_append(b__25214,(function (){var res = cljs.core.aclone(t1);
var n__9121__auto___25222 = len;
var i_25223 = (0);
while(true){
if((i_25223 < n__9121__auto___25222)){
var temp__5278__auto___25224__$2 = (copy_map[i_25223]);
if(cljs.core.truth_(temp__5278__auto___25224__$2)){
var idx_25225 = temp__5278__auto___25224__$2;
(res[i_25223] = (t2[idx_25225]));
} else {
}

var G__25226 = (i_25223 + (1));
i_25223 = G__25226;
continue;
} else {
}
break;
}

return res;
})());

var G__25227 = (i__25213 + (1));
i__25213 = G__25227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25214),datascript$query$iter__25209_$_iter__25211(cljs.core.chunk_rest(s__25212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25214),null);
}
} else {
var t2 = cljs.core.first(s__25212__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__9121__auto___25228 = len;
var i_25229 = (0);
while(true){
if((i_25229 < n__9121__auto___25228)){
var temp__5278__auto___25230__$2 = (copy_map[i_25229]);
if(cljs.core.truth_(temp__5278__auto___25230__$2)){
var idx_25231 = temp__5278__auto___25230__$2;
(res[i_25229] = (t2[idx_25231]));
} else {
}

var G__25232 = (i_25229 + (1));
i_25229 = G__25232;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__25209_$_iter__25211(cljs.core.rest(s__25212__$2)));
}
} else {
return null;
}
break;
}
});})(s__25210__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
,null,null));
});})(s__25210__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
;
var fs__8959__auto__ = cljs.core.seq(iterys__8958__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__8959__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8959__auto__,datascript$query$iter__25209(cljs.core.rest(s__25210__$1)));
} else {
var G__25233 = cljs.core.rest(s__25210__$1);
s__25210__$1 = G__25233;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__))
;
return iter__8962__auto__(acc);
})();
var G__25220 = cljs.core.next(rels);
var G__25221 = symbols;
acc = G__25219;
rels = G__25220;
symbols = G__25221;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__8818__auto__ = (((var$ == null))?null:var$);
var m__8819__auto__ = (datascript.query._context_resolve[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__8819__auto__.call(null,var$,context));
} else {
var m__8819__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__8819__auto____$1.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__8099__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_(element))){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__25234_SHARP_){
return datascript.query._context_resolve(p1__25234_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__25235_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__25235_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25236_SHARP_,p2__25237_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__25236_SHARP_) : pred.call(null,p1__25236_SHARP_)))){
return p2__25237_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__25238_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__25238_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__8962__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__25239(s__25240){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__25240__$1 = s__25240;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25240__$1);
if(temp__5278__auto__){
var s__25240__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25240__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25240__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25242 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25241 = (0);
while(true){
if((i__25241 < size__8961__auto__)){
var vec__25243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25241);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25243,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25243,(1),null);
cljs.core.chunk_append(b__25242,datascript.query._aggregate(find_elements,context,tuples));

var G__25249 = (i__25241 + (1));
i__25241 = G__25249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25242),datascript$query$aggregate_$_iter__25239(cljs.core.chunk_rest(s__25240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25242),null);
}
} else {
var vec__25246 = cljs.core.first(s__25240__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__25239(cljs.core.rest(s__25240__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__8962__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__8818__auto__ = (((find == null))?null:find);
var m__8819__auto__ = (datascript.query._post_process[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__8819__auto__.call(null,find,tuples));
} else {
var m__8819__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__8819__auto____$1.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__8962__auto__ = (function datascript$query$pull_$_iter__25250(s__25251){
return (new cljs.core.LazySeq(null,(function (){
var s__25251__$1 = s__25251;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25251__$1);
if(temp__5278__auto__){
var s__25251__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25251__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25251__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25253 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25252 = (0);
while(true){
if((i__25252 < size__8961__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25252);
cljs.core.chunk_append(b__25253,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__25264 = (i__25252 + (1));
i__25252 = G__25264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25253),datascript$query$pull_$_iter__25250(cljs.core.chunk_rest(s__25251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25253),null);
}
} else {
var find = cljs.core.first(s__25251__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__25250(cljs.core.rest(s__25251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(find_elements);
})();
var iter__8962__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__25254(s__25255){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__25255__$1 = s__25255;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25255__$1);
if(temp__5278__auto__){
var s__25255__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25255__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__25255__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__25257 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__25256 = (0);
while(true){
if((i__25256 < size__8961__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__25256);
cljs.core.chunk_append(b__25257,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__25256,tuple,c__8960__auto__,size__8961__auto__,b__25257,s__25255__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__25258 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25258,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25258,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__25256,tuple,c__8960__auto__,size__8961__auto__,b__25257,s__25255__$2,temp__5278__auto__,resolved))
,resolved,tuple));

var G__25265 = (i__25256 + (1));
i__25256 = G__25265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25257),datascript$query$pull_$_iter__25254(cljs.core.chunk_rest(s__25255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25257),null);
}
} else {
var tuple = cljs.core.first(s__25255__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__25255__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__25261 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25261,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25261,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__25255__$2,temp__5278__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__25254(cljs.core.rest(s__25255__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__8962__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if(cljs.core.truth_(temp__5276__auto__)){
var cached = temp__5276__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query(q);
cljs.core._vreset_BANG_(datascript.query.query_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__9339__auto__ = [];
var len__9332__auto___25271 = arguments.length;
var i__9333__auto___25272 = (0);
while(true){
if((i__9333__auto___25272 < len__9332__auto___25271)){
args__9339__auto__.push((arguments[i__9333__auto___25272]));

var G__25273 = (i__9333__auto___25272 + (1));
i__9333__auto___25272 = G__25273;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__25269 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__25269);
} else {
return G__25269;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__25270 = resultset;
var G__25270__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25270,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__25266_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__25266_SHARP_,(0),result_arity));
});})(G__25270,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__25270):G__25270);
var G__25270__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__25270__$1):G__25270__$1);
var G__25270__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__25270__$2):G__25270__$2);
return datascript.query._post_process(find,G__25270__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq25267){
var G__25268 = cljs.core.first(seq25267);
var seq25267__$1 = cljs.core.next(seq25267);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__25268,seq25267__$1);
});

