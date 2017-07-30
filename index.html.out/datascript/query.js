// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var G__19799 = arguments.length;
switch (G__19799) {
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
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k19802,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__19806 = k19802;
var G__19806__$1 = (((G__19806 instanceof cljs.core.Keyword))?G__19806.fqn:null);
switch (G__19806__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19802,else__9453__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.query.Context{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19801){
var self__ = this;
var G__19801__$1 = this;
return (new cljs.core.RecordIter((0),G__19801__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__19807 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__19807(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19803,other19804){
var self__ = this;
var this19803__$1 = this;
return (!((other19804 == null))) && ((this19803__$1.constructor === other19804.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19803__$1.rels,other19804.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19803__$1.sources,other19804.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19803__$1.rules,other19804.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19803__$1.__extmap,other19804.__extmap));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__19801){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__19808 = cljs.core.keyword_identical_QMARK_;
var expr__19809 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__19811 = cljs.core.cst$kw$rels;
var G__19812 = expr__19809;
return (pred__19808.cljs$core$IFn$_invoke$arity$2 ? pred__19808.cljs$core$IFn$_invoke$arity$2(G__19811,G__19812) : pred__19808.call(null,G__19811,G__19812));
})())){
return (new datascript.query.Context(G__19801,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19813 = cljs.core.cst$kw$sources;
var G__19814 = expr__19809;
return (pred__19808.cljs$core$IFn$_invoke$arity$2 ? pred__19808.cljs$core$IFn$_invoke$arity$2(G__19813,G__19814) : pred__19808.call(null,G__19813,G__19814));
})())){
return (new datascript.query.Context(self__.rels,G__19801,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19815 = cljs.core.cst$kw$rules;
var G__19816 = expr__19809;
return (pred__19808.cljs$core$IFn$_invoke$arity$2 ? pred__19808.cljs$core$IFn$_invoke$arity$2(G__19815,G__19816) : pred__19808.call(null,G__19815,G__19816));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__19801,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__19801),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__19801){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__19801,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__19805){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__19805),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__19805),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__19805),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19805,cljs.core.cst$kw$rels,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0))),null));
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
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k19819,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__19823 = k19819;
var G__19823__$1 = (((G__19823 instanceof cljs.core.Keyword))?G__19823.fqn:null);
switch (G__19823__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19819,else__9453__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.query.Relation{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19818){
var self__ = this;
var G__19818__$1 = this;
return (new cljs.core.RecordIter((0),G__19818__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__19824 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__19824(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19820,other19821){
var self__ = this;
var this19820__$1 = this;
return (!((other19821 == null))) && ((this19820__$1.constructor === other19821.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19820__$1.attrs,other19821.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19820__$1.tuples,other19821.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19820__$1.__extmap,other19821.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__19818){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__19825 = cljs.core.keyword_identical_QMARK_;
var expr__19826 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__19828 = cljs.core.cst$kw$attrs;
var G__19829 = expr__19826;
return (pred__19825.cljs$core$IFn$_invoke$arity$2 ? pred__19825.cljs$core$IFn$_invoke$arity$2(G__19828,G__19829) : pred__19825.call(null,G__19828,G__19829));
})())){
return (new datascript.query.Relation(G__19818,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19830 = cljs.core.cst$kw$tuples;
var G__19831 = expr__19826;
return (pred__19825.cljs$core$IFn$_invoke$arity$2 ? pred__19825.cljs$core$IFn$_invoke$arity$2(G__19830,G__19831) : pred__19825.call(null,G__19830,G__19831));
})())){
return (new datascript.query.Relation(self__.attrs,G__19818,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__19818),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__19818){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__19818,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__19822){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__19822),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__19822),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19822,cljs.core.cst$kw$attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tuples], 0))),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__10041__auto__ = [];
var len__10034__auto___19834 = arguments.length;
var i__10035__auto___19835 = (0);
while(true){
if((i__10035__auto___19835 < len__10034__auto___19834)){
args__10041__auto__.push((arguments[i__10035__auto___19835]));

var G__19836 = (i__10035__auto___19835 + (1));
i__10035__auto___19835 = G__19836;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq19833){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19833));
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
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__19841){
var vec__19842 = p__19841;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__19849){
var vec__19850 = p__19849;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(1),null);
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
var n__9800__auto___19853 = l1;
var i_19854 = (0);
while(true){
if((i_19854 < n__9800__auto___19853)){
(res[i_19854] = (t1[(idxs1[i_19854])]));

var G__19855 = (i_19854 + (1));
i_19854 = G__19855;
continue;
} else {
}
break;
}

var n__9800__auto___19856 = l2;
var i_19857 = (0);
while(true){
if((i_19857 < n__9800__auto___19856)){
(res[(l1 + i_19857)] = (t2[(idxs2[i_19857])]));

var G__19858 = (i_19857 + (1));
i_19857 = G__19858;
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
var G__19860 = arguments.length;
switch (G__19860) {
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
var args__10041__auto__ = [];
var len__10034__auto___19863 = arguments.length;
var i__10035__auto___19864 = (0);
while(true){
if((i__10035__auto___19864 < len__10034__auto___19863)){
args__10041__auto__.push((arguments[i__10035__auto___19864]));

var G__19865 = (i__10035__auto___19864 + (1));
i__10035__auto___19864 = G__19865;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq19862){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19862));
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
var args__10041__auto__ = [];
var len__10034__auto___19869 = arguments.length;
var i__10035__auto___19870 = (0);
while(true){
if((i__10035__auto___19870 < len__10034__auto___19869)){
args__10041__auto__.push((arguments[i__10035__auto___19870]));

var G__19871 = (i__10035__auto___19870 + (1));
i__10035__auto___19870 = G__19871;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
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

datascript.query._get_some.cljs$lang$applyTo = (function (seq19866){
var G__19867 = cljs.core.first(seq19866);
var seq19866__$1 = cljs.core.next(seq19866);
var G__19868 = cljs.core.first(seq19866__$1);
var seq19866__$2 = cljs.core.next(seq19866__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__19867,G__19868,seq19866__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__10041__auto__ = [];
var len__10034__auto___19873 = arguments.length;
var i__10035__auto___19874 = (0);
while(true){
if((i__10035__auto___19874 < len__10034__auto___19873)){
args__10041__auto__.push((arguments[i__10035__auto___19874]));

var G__19875 = (i__10035__auto___19874 + (1));
i__10035__auto___19874 = G__19875;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
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

datascript.query.and_fn.cljs$lang$applyTo = (function (seq19872){
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19872));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__10041__auto__ = [];
var len__10034__auto___19877 = arguments.length;
var i__10035__auto___19878 = (0);
while(true){
if((i__10035__auto___19878 < len__10034__auto___19877)){
args__10041__auto__.push((arguments[i__10035__auto___19878]));

var G__19879 = (i__10035__auto___19878 + (1));
i__10035__auto___19878 = G__19879;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
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

datascript.query.or_fn.cljs$lang$applyTo = (function (seq19876){
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19876));
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
var G__19886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__19886 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__19886;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__9639__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__19887(s__19888){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__19888__$1 = s__19888;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19888__$1);
if(temp__5278__auto__){
var s__19888__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19888__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__19888__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__19890 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__19889 = (0);
while(true){
if((i__19889 < size__9638__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__19889);
var delta = (x - mean);
cljs.core.chunk_append(b__19890,(delta * delta));

var G__19892 = (i__19889 + (1));
i__19889 = G__19892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19890),datascript$query$variance_$_iter__19887(cljs.core.chunk_rest(s__19888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19890),null);
}
} else {
var x = cljs.core.first(s__19888__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__19887(cljs.core.rest(s__19888__$2)));
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
return iter__9639__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
var G__19891 = variance(coll);
return Math.sqrt(G__19891);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__19893 = null;
var G__19893__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__19893__2 = (function (n,coll){
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
G__19893 = function(n,coll){
switch(arguments.length){
case 1:
return G__19893__1.call(this,n);
case 2:
return G__19893__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19893.cljs$core$IFn$_invoke$arity$1 = G__19893__1;
G__19893.cljs$core$IFn$_invoke$arity$2 = G__19893__2;
return G__19893;
})()
,(function() {
var G__19894 = null;
var G__19894__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__19894__2 = (function (n,coll){
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
G__19894 = function(n,coll){
switch(arguments.length){
case 1:
return G__19894__1.call(this,n);
case 2:
return G__19894__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19894.cljs$core$IFn$_invoke$arity$1 = G__19894__1;
G__19894.cljs$core$IFn$_invoke$arity$2 = G__19894__2;
return G__19894;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__19895 = null;
var G__19895__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__19895__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__19895 = function(n,coll){
switch(arguments.length){
case 1:
return G__19895__1.call(this,n);
case 2:
return G__19895__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19895.cljs$core$IFn$_invoke$arity$1 = G__19895__1;
G__19895.cljs$core$IFn$_invoke$arity$2 = G__19895__2;
return G__19895;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
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
var x__9495__auto__ = (((binding == null))?null:binding);
var m__9496__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__9496__auto__.call(null,binding,value));
} else {
var m__9496__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__9496__auto____$1.call(null,binding,value));
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
return (function (p1__19896_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__19896_SHARP_);
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
return (function (p1__19897_SHARP_,p2__19898_SHARP_){
return datascript.query.in__GT_rel(p1__19897_SHARP_,p2__19898_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__19899){
var vec__19900 = p__19899;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19900,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19900,(1),null);
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
return (function (p1__19903_SHARP_){
return (p1__19903_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19903_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__19903_SHARP_.call(null,tuple));
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
var G__19905 = cljs.core.next(tuples__$1);
var G__19906 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__19905;
hash_table = G__19906;
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
return (function (p1__19907_SHARP_){
return datascript.query.getter_fn(attrs1,p1__19907_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__19908_SHARP_){
return datascript.query.getter_fn(attrs2,p1__19908_SHARP_);
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
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19909_SHARP_){
if((p1__19909_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__19909_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__19910){
var vec__19911 = p__19910;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19911,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19911,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__8750__auto__ = tuple__$1;
if(cljs.core.truth_(and__8750__auto__)){
return pattern__$1;
} else {
return and__8750__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p))){
var G__19914 = cljs.core.next(tuple__$1);
var G__19915 = cljs.core.next(pattern__$1);
tuple__$1 = G__19914;
pattern__$1 = G__19915;
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
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19916_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__19916_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__19917){
var vec__19918 = p__19917;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(1),null);
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
var G__19922 = cljs.core.next(rels__$1);
var G__19923 = datascript.query.hash_join(rel,new_rel__$1);
var G__19924 = acc;
rels__$1 = G__19922;
new_rel__$1 = G__19923;
acc = G__19924;
continue;
} else {
var G__19925 = cljs.core.next(rels__$1);
var G__19926 = new_rel__$1;
var G__19927 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__19925;
new_rel__$1 = G__19926;
acc = G__19927;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__19928_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__19928_SHARP_),sym)){
return p1__19928_SHARP_;
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
return (tuple[(function (){var fexpr__19929 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__19929.cljs$core$IFn$_invoke$arity$1 ? fexpr__19929.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__19929.call(null,sym));
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
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19930_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__19930_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__19931_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__19931_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = datascript.arrays.make_array(len);
var tuples_args = datascript.arrays.make_array(len);
var n__9800__auto___19932 = len;
var i_19933 = (0);
while(true){
if((i_19933 < n__9800__auto___19932)){
var arg_19934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_19933);
if((arg_19934 instanceof cljs.core.Symbol)){
var temp__5276__auto___19935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_19934);
if(cljs.core.truth_(temp__5276__auto___19935)){
var source_19936 = temp__5276__auto___19935;
(static_args[i_19933] = source_19936);
} else {
(tuples_args[i_19933] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_19934));
}
} else {
(static_args[i_19933] = arg_19934);
}

var G__19937 = (i_19933 + (1));
i_19933 = G__19937;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__9800__auto___19938 = len;
var i_19939 = (0);
while(true){
if((i_19939 < n__9800__auto___19938)){
var temp__5278__auto___19940 = (tuples_args[i_19939]);
if(cljs.core.truth_(temp__5278__auto___19940)){
var tuple_idx_19941 = temp__5278__auto___19940;
var v_19942 = (tuple[tuple_idx_19941]);
(static_args[i_19939] = v_19942);
} else {
}

var G__19943 = (i_19939 + (1));
i_19939 = G__19943;
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
var vec__19945 = clause;
var vec__19948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(0),null);
var seq__19949 = cljs.core.seq(vec__19948);
var first__19950 = cljs.core.first(seq__19949);
var seq__19949__$1 = cljs.core.next(seq__19949);
var f = first__19950;
var args = seq__19949__$1;
var pred = (function (){var or__8762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
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
var vec__19951 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__19945,vec__19948,seq__19949,first__19950,seq__19949__$1,f,args,pred,vec__19951,context__$1,production){
return (function (p1__19944_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__19944_SHARP_);
});})(tuple_pred,vec__19945,vec__19948,seq__19949,first__19950,seq__19949__$1,f,args,pred,vec__19951,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__19954 = clause;
var vec__19957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(0),null);
var seq__19958 = cljs.core.seq(vec__19957);
var first__19959 = cljs.core.first(seq__19958);
var seq__19958__$1 = cljs.core.next(seq__19958);
var f = first__19959;
var args = seq__19958__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__8762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
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
var vec__19960 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19960,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19960,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__9639__auto__ = ((function (tuple_fn,vec__19954,vec__19957,seq__19958,first__19959,seq__19958__$1,f,args,out,binding,fun,vec__19960,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__19963(s__19964){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__19954,vec__19957,seq__19958,first__19959,seq__19958__$1,f,args,out,binding,fun,vec__19960,context__$1,production){
return (function (){
var s__19964__$1 = s__19964;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19964__$1);
if(temp__5278__auto__){
var s__19964__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19964__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__19964__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__19966 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__19965 = (0);
while(true){
if((i__19965 < size__9638__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__19965);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__19966,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__19967 = (i__19965 + (1));
i__19965 = G__19967;
continue;
} else {
var G__19968 = (i__19965 + (1));
i__19965 = G__19968;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19966),datascript$query$bind_by_fn_$_iter__19963(cljs.core.chunk_rest(s__19964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19966),null);
}
} else {
var tuple = cljs.core.first(s__19964__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__19963(cljs.core.rest(s__19964__$2)));
} else {
var G__19969 = cljs.core.rest(s__19964__$2);
s__19964__$1 = G__19969;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__19954,vec__19957,seq__19958,first__19959,seq__19958__$1,f,args,out,binding,fun,vec__19960,context__$1,production))
,null,null));
});})(tuple_fn,vec__19954,vec__19957,seq__19958,first__19959,seq__19958__$1,f,args,out,binding,fun,vec__19960,context__$1,production))
;
return iter__9639__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
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
var vec__19971 = clause;
var seq__19972 = cljs.core.seq(vec__19971);
var first__19973 = cljs.core.first(seq__19972);
var seq__19972__$1 = cljs.core.next(seq__19972);
var rule = first__19973;
var call_args = seq__19972__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__9639__auto__ = ((function (vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__19974(s__19975){
return (new cljs.core.LazySeq(null,((function (vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches){
return (function (){
var s__19975__$1 = s__19975;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19975__$1);
if(temp__5278__auto__){
var s__19975__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19975__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__19975__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__19977 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__19976 = (0);
while(true){
if((i__19976 < size__9638__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__19976);
var vec__19978 = branch;
var seq__19979 = cljs.core.seq(vec__19978);
var first__19980 = cljs.core.first(seq__19979);
var seq__19979__$1 = cljs.core.next(seq__19979);
var vec__19981 = first__19980;
var seq__19982 = cljs.core.seq(vec__19981);
var first__19983 = cljs.core.first(seq__19982);
var seq__19982__$1 = cljs.core.next(seq__19982);
var _ = first__19983;
var rule_args = seq__19982__$1;
var clauses = seq__19979__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__19977,clojure.walk.postwalk(((function (i__19976,vec__19978,seq__19979,first__19980,seq__19979__$1,vec__19981,seq__19982,first__19983,seq__19982__$1,_,rule_args,clauses,replacements,branch,c__9637__auto__,size__9638__auto__,b__19977,s__19975__$2,temp__5278__auto__,vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches){
return (function (p1__19970_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__19970_SHARP_))){
var x__17190__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__19970_SHARP_) : replacements.call(null,p1__19970_SHARP_));
if((x__17190__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__19970_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__17190__auto__;
}
} else {
return p1__19970_SHARP_;
}
});})(i__19976,vec__19978,seq__19979,first__19980,seq__19979__$1,vec__19981,seq__19982,first__19983,seq__19982__$1,_,rule_args,clauses,replacements,branch,c__9637__auto__,size__9638__auto__,b__19977,s__19975__$2,temp__5278__auto__,vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches))
,clauses));

var G__19990 = (i__19976 + (1));
i__19976 = G__19990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19977),datascript$query$expand_rule_$_iter__19974(cljs.core.chunk_rest(s__19975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19977),null);
}
} else {
var branch = cljs.core.first(s__19975__$2);
var vec__19984 = branch;
var seq__19985 = cljs.core.seq(vec__19984);
var first__19986 = cljs.core.first(seq__19985);
var seq__19985__$1 = cljs.core.next(seq__19985);
var vec__19987 = first__19986;
var seq__19988 = cljs.core.seq(vec__19987);
var first__19989 = cljs.core.first(seq__19988);
var seq__19988__$1 = cljs.core.next(seq__19988);
var _ = first__19989;
var rule_args = seq__19988__$1;
var clauses = seq__19985__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__19984,seq__19985,first__19986,seq__19985__$1,vec__19987,seq__19988,first__19989,seq__19988__$1,_,rule_args,clauses,replacements,branch,s__19975__$2,temp__5278__auto__,vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches){
return (function (p1__19970_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__19970_SHARP_))){
var x__17190__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__19970_SHARP_) : replacements.call(null,p1__19970_SHARP_));
if((x__17190__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__19970_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__17190__auto__;
}
} else {
return p1__19970_SHARP_;
}
});})(vec__19984,seq__19985,first__19986,seq__19985__$1,vec__19987,seq__19988,first__19989,seq__19988__$1,_,rule_args,clauses,replacements,branch,s__19975__$2,temp__5278__auto__,vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__19974(cljs.core.rest(s__19975__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__19971,seq__19972,first__19973,seq__19972__$1,rule,call_args,seqid,branches))
;
return iter__9639__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__19991){
var vec__19992 = p__19991;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19992,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19992,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__19995 = rule_clause;
var seq__19996 = cljs.core.seq(vec__19995);
var first__19997 = cljs.core.first(seq__19996);
var seq__19996__$1 = cljs.core.next(seq__19996);
var rule = first__19997;
var call_args = seq__19996__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__9639__auto__ = ((function (vec__19995,seq__19996,first__19997,seq__19996__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__19998(s__19999){
return (new cljs.core.LazySeq(null,((function (vec__19995,seq__19996,first__19997,seq__19996__$1,rule,call_args,prev_call_args){
return (function (){
var s__19999__$1 = s__19999;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19999__$1);
if(temp__5278__auto__){
var s__19999__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19999__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__19999__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20001 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20000 = (0);
while(true){
if((i__20000 < size__9638__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20000);
var vec__20002 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20002,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20002,(1),null);
cljs.core.chunk_append(b__20001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__20008 = (i__20000 + (1));
i__20000 = G__20008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20001),datascript$query$rule_gen_guards_$_iter__19998(cljs.core.chunk_rest(s__19999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20001),null);
}
} else {
var prev_args = cljs.core.first(s__19999__$2);
var vec__20005 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20005,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20005,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__19998(cljs.core.rest(s__19999__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19995,seq__19996,first__19997,seq__19996__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__19995,seq__19996,first__19997,seq__19996__$1,rule,call_args,prev_call_args))
;
return iter__9639__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (res){
return (function (p1__20009_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__20009_SHARP_) : pred.call(null,p1__20009_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__20009_SHARP_);
} else {
}

return p1__20009_SHARP_;
});})(res))
,form);

return cljs.core.deref(res);
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__20010){
var vec__20011 = p__20010;
var vec__20014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20011,(0),null);
var seq__20015 = cljs.core.seq(vec__20014);
var first__20016 = cljs.core.first(seq__20015);
var seq__20015__$1 = cljs.core.next(seq__20015);
var _ = first__20016;
var vars = seq__20015__$1;
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
return (function (p1__20017_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__20017_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (function (){var x__9711__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9711__auto__);
})();
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5276__auto__ = cljs.core.first(stack);
if(cljs.core.truth_(temp__5276__auto__)){
var frame = temp__5276__auto__;
var vec__20020 = cljs.core.split_with(((function (stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__20018_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__20018_SHARP_));
});})(stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20020,(0),null);
var vec__20023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20020,(1),null);
var seq__20024 = cljs.core.seq(vec__20023);
var first__20025 = cljs.core.first(seq__20024);
var seq__20024__$1 = cljs.core.next(seq__20024);
var rule_clause = first__20025;
var next_clauses = seq__20024__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__20036 = cljs.core.next(stack);
var G__20037 = datascript.query.sum_rel(rel,new_rel);
stack = G__20036;
rel = G__20037;
continue;
} else {
var vec__20026 = rule_clause;
var seq__20027 = cljs.core.seq(vec__20026);
var first__20028 = cljs.core.first(seq__20027);
var seq__20027__$1 = cljs.core.next(seq__20027);
var rule = first__20028;
var call_args = seq__20027__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__20029 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20029,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20029,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__20019_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20019_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__20038 = cljs.core.next(stack);
var G__20039 = rel;
stack = G__20038;
rel = G__20039;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__20040 = cljs.core.next(stack);
var G__20041 = rel;
stack = G__20040;
rel = G__20041;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__20042 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9639__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__20032(s__20033){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__20033__$1 = s__20033;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__20033__$1);
if(temp__5278__auto__){
var s__20033__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20033__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__20033__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20035 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20034 = (0);
while(true){
if((i__20034 < size__9638__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20034);
cljs.core.chunk_append(b__20035,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__20044 = (i__20034 + (1));
i__20034 = G__20044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20035),datascript$query$solve_rule_$_iter__20032(cljs.core.chunk_rest(s__20033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20035),null);
}
} else {
var branch = cljs.core.first(s__20033__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__20032(cljs.core.rest(s__20033__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__20026,seq__20027,first__20028,seq__20027__$1,rule,call_args,guards,vec__20029,active_gs,pending_gs,vec__20020,clauses,vec__20023,seq__20024,first__20025,seq__20024__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__9639__auto__(branches);
})(),cljs.core.next(stack));
var G__20043 = rel;
stack = G__20042;
rel = G__20043;
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
var vec__20046 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(e))?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__8750__auto__ = v;
if(cljs.core.truth_(and__8750__auto__)){
var and__8750__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__8750__auto____$1)){
var and__8750__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__8750__auto____$2){
return datascript.query.lookup_ref_QMARK_(v);
} else {
return and__8750__auto____$2;
}
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__20049 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(3),null);
var G__20052 = cljs.core.PersistentHashSet.EMPTY;
var G__20052__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20052,e):G__20052);
var G__20052__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20052__$1,tx):G__20052__$1);
if(cljs.core.truth_((function (){var and__8750__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__8750__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__8750__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20052__$2,v);
} else {
return G__20052__$2;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__20053 = datascript.query.looks_like_QMARK_;
var expr__20054 = clause;
if(cljs.core.truth_((function (){var G__20056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__20057 = expr__20054;
return (pred__20053.cljs$core$IFn$_invoke$arity$2 ? pred__20053.cljs$core$IFn$_invoke$arity$2(G__20056,G__20057) : pred__20053.call(null,G__20056,G__20057));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__20058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__20059 = expr__20054;
return (pred__20053.cljs$core$IFn$_invoke$arity$2 ? pred__20053.cljs$core$IFn$_invoke$arity$2(G__20058,G__20059) : pred__20053.call(null,G__20058,G__20059));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__20060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__20061 = expr__20054;
return (pred__20053.cljs$core$IFn$_invoke$arity$2 ? pred__20053.cljs$core$IFn$_invoke$arity$2(G__20060,G__20061) : pred__20053.call(null,G__20060,G__20061));
})())){
var vec__20062 = datascript.query.normalize_pattern_clause(clause);
var seq__20063 = cljs.core.seq(vec__20062);
var first__20064 = cljs.core.first(seq__20063);
var seq__20063__$1 = cljs.core.next(seq__20063);
var source_sym = first__20064;
var pattern = seq__20063__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_20066 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_20067 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_20067;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_20066;
}} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__20054)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__20068 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(1),null);
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
var G__20073 = arguments.length;
switch (G__20073) {
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
var G__20081 = acc;
var G__20082 = cljs.core.next(rels);
var G__20083 = symbols;
acc = G__20081;
rels = G__20082;
symbols = G__20083;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5276__auto__){
return (function (p1__20071_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__20071_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5276__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__20084 = (function (){var iter__9639__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__20074(s__20075){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__20075__$1 = s__20075;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__20075__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var t1 = cljs.core.first(xs__5831__auto__);
var iterys__9635__auto__ = ((function (s__20075__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__20074_$_iter__20076(s__20077){
return (new cljs.core.LazySeq(null,((function (s__20075__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__20077__$1 = s__20077;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__20077__$1);
if(temp__5278__auto____$1){
var s__20077__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20077__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__20077__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20079 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20078 = (0);
while(true){
if((i__20078 < size__9638__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20078);
cljs.core.chunk_append(b__20079,(function (){var res = cljs.core.aclone(t1);
var n__9800__auto___20087 = len;
var i_20088 = (0);
while(true){
if((i_20088 < n__9800__auto___20087)){
var temp__5278__auto___20089__$2 = (copy_map[i_20088]);
if(cljs.core.truth_(temp__5278__auto___20089__$2)){
var idx_20090 = temp__5278__auto___20089__$2;
(res[i_20088] = (t2[idx_20090]));
} else {
}

var G__20091 = (i_20088 + (1));
i_20088 = G__20091;
continue;
} else {
}
break;
}

return res;
})());

var G__20092 = (i__20078 + (1));
i__20078 = G__20092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20079),datascript$query$iter__20074_$_iter__20076(cljs.core.chunk_rest(s__20077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20079),null);
}
} else {
var t2 = cljs.core.first(s__20077__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__9800__auto___20093 = len;
var i_20094 = (0);
while(true){
if((i_20094 < n__9800__auto___20093)){
var temp__5278__auto___20095__$2 = (copy_map[i_20094]);
if(cljs.core.truth_(temp__5278__auto___20095__$2)){
var idx_20096 = temp__5278__auto___20095__$2;
(res[i_20094] = (t2[idx_20096]));
} else {
}

var G__20097 = (i_20094 + (1));
i_20094 = G__20097;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__20074_$_iter__20076(cljs.core.rest(s__20077__$2)));
}
} else {
return null;
}
break;
}
});})(s__20075__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
,null,null));
});})(s__20075__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
;
var fs__9636__auto__ = cljs.core.seq(iterys__9635__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__9636__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9636__auto__,datascript$query$iter__20074(cljs.core.rest(s__20075__$1)));
} else {
var G__20098 = cljs.core.rest(s__20075__$1);
s__20075__$1 = G__20098;
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
return iter__9639__auto__(acc);
})();
var G__20085 = cljs.core.next(rels);
var G__20086 = symbols;
acc = G__20084;
rels = G__20085;
symbols = G__20086;
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
var x__9495__auto__ = (((var$ == null))?null:var$);
var m__9496__auto__ = (datascript.query._context_resolve[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__9496__auto__.call(null,var$,context));
} else {
var m__9496__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__9496__auto____$1.call(null,var$,context));
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
var or__8762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
return (function (p1__20099_SHARP_){
return datascript.query._context_resolve(p1__20099_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__20100_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__20100_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__20101_SHARP_,p2__20102_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__20101_SHARP_) : pred.call(null,p1__20101_SHARP_)))){
return p2__20102_SHARP_;
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
return (function (p1__20103_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__20103_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__9639__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__20104(s__20105){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__20105__$1 = s__20105;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__20105__$1);
if(temp__5278__auto__){
var s__20105__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20105__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__20105__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20107 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20106 = (0);
while(true){
if((i__20106 < size__9638__auto__)){
var vec__20108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20106);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(1),null);
cljs.core.chunk_append(b__20107,datascript.query._aggregate(find_elements,context,tuples));

var G__20114 = (i__20106 + (1));
i__20106 = G__20114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20107),datascript$query$aggregate_$_iter__20104(cljs.core.chunk_rest(s__20105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20107),null);
}
} else {
var vec__20111 = cljs.core.first(s__20105__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20111,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20111,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__20104(cljs.core.rest(s__20105__$2)));
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
return iter__9639__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__9495__auto__ = (((find == null))?null:find);
var m__9496__auto__ = (datascript.query._post_process[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__9496__auto__.call(null,find,tuples));
} else {
var m__9496__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__9496__auto____$1.call(null,find,tuples));
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
var resolved = (function (){var iter__9639__auto__ = (function datascript$query$pull_$_iter__20115(s__20116){
return (new cljs.core.LazySeq(null,(function (){
var s__20116__$1 = s__20116;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__20116__$1);
if(temp__5278__auto__){
var s__20116__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20116__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__20116__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20118 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20117 = (0);
while(true){
if((i__20117 < size__9638__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20117);
cljs.core.chunk_append(b__20118,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__20129 = (i__20117 + (1));
i__20117 = G__20129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20118),datascript$query$pull_$_iter__20115(cljs.core.chunk_rest(s__20116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20118),null);
}
} else {
var find = cljs.core.first(s__20116__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__20115(cljs.core.rest(s__20116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9639__auto__(find_elements);
})();
var iter__9639__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__20119(s__20120){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__20120__$1 = s__20120;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__20120__$1);
if(temp__5278__auto__){
var s__20120__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20120__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__20120__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__20122 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__20121 = (0);
while(true){
if((i__20121 < size__9638__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__20121);
cljs.core.chunk_append(b__20122,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__20121,tuple,c__9637__auto__,size__9638__auto__,b__20122,s__20120__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__20123 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20123,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20123,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__20121,tuple,c__9637__auto__,size__9638__auto__,b__20122,s__20120__$2,temp__5278__auto__,resolved))
,resolved,tuple));

var G__20130 = (i__20121 + (1));
i__20121 = G__20130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20122),datascript$query$pull_$_iter__20119(cljs.core.chunk_rest(s__20120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20122),null);
}
} else {
var tuple = cljs.core.first(s__20120__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__20120__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__20126 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__20120__$2,temp__5278__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__20119(cljs.core.rest(s__20120__$2)));
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
return iter__9639__auto__(resultset);
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
var args__10041__auto__ = [];
var len__10034__auto___20136 = arguments.length;
var i__10035__auto___20137 = (0);
while(true){
if((i__10035__auto___20137 < len__10034__auto___20136)){
args__10041__auto__.push((arguments[i__10035__auto___20137]));

var G__20138 = (i__10035__auto___20137 + (1));
i__10035__auto___20137 = G__20138;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((1) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10042__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__20134 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__20134);
} else {
return G__20134;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__20135 = resultset;
var G__20135__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__20135,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__20131_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__20131_SHARP_,(0),result_arity));
});})(G__20135,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__20135):G__20135);
var G__20135__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__20135__$1):G__20135__$1);
var G__20135__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__20135__$2):G__20135__$2);
return datascript.query._post_process(find,G__20135__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq20132){
var G__20133 = cljs.core.first(seq20132);
var seq20132__$1 = cljs.core.next(seq20132);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__20133,seq20132__$1);
});

