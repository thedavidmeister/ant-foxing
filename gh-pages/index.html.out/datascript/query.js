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
var G__25974 = arguments.length;
switch (G__25974) {
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

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25977,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25981 = k25977;
var G__25981__$1 = (((G__25981 instanceof cljs.core.Keyword))?G__25981.fqn:null);
switch (G__25981__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25977,else__9453__auto__);

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

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25976){
var self__ = this;
var G__25976__$1 = this;
return (new cljs.core.RecordIter((0),G__25976__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__9218__auto____$1 = (function (){var fexpr__25982 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25982(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25978,other25979){
var self__ = this;
var this25978__$1 = this;
return (!((other25979 == null))) && ((this25978__$1.constructor === other25979.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25978__$1.rels,other25979.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25978__$1.sources,other25979.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25978__$1.rules,other25979.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25978__$1.__extmap,other25979.__extmap));
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

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25976){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25983 = cljs.core.keyword_identical_QMARK_;
var expr__25984 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25986 = cljs.core.cst$kw$rels;
var G__25987 = expr__25984;
return (pred__25983.cljs$core$IFn$_invoke$arity$2 ? pred__25983.cljs$core$IFn$_invoke$arity$2(G__25986,G__25987) : pred__25983.call(null,G__25986,G__25987));
})())){
return (new datascript.query.Context(G__25976,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25988 = cljs.core.cst$kw$sources;
var G__25989 = expr__25984;
return (pred__25983.cljs$core$IFn$_invoke$arity$2 ? pred__25983.cljs$core$IFn$_invoke$arity$2(G__25988,G__25989) : pred__25983.call(null,G__25988,G__25989));
})())){
return (new datascript.query.Context(self__.rels,G__25976,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25990 = cljs.core.cst$kw$rules;
var G__25991 = expr__25984;
return (pred__25983.cljs$core$IFn$_invoke$arity$2 ? pred__25983.cljs$core$IFn$_invoke$arity$2(G__25990,G__25991) : pred__25983.call(null,G__25990,G__25991));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__25976,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25976),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25976){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__25976,self__.__extmap,self__.__hash));
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

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__25980){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__25980),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__25980),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__25980),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25980,cljs.core.cst$kw$rels,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0))),null));
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

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25994,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25998 = k25994;
var G__25998__$1 = (((G__25998 instanceof cljs.core.Keyword))?G__25998.fqn:null);
switch (G__25998__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25994,else__9453__auto__);

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

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25993){
var self__ = this;
var G__25993__$1 = this;
return (new cljs.core.RecordIter((0),G__25993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__9218__auto____$1 = (function (){var fexpr__25999 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25999(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25995,other25996){
var self__ = this;
var this25995__$1 = this;
return (!((other25996 == null))) && ((this25995__$1.constructor === other25996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25995__$1.attrs,other25996.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25995__$1.tuples,other25996.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25995__$1.__extmap,other25996.__extmap));
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

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25993){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__26000 = cljs.core.keyword_identical_QMARK_;
var expr__26001 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__26003 = cljs.core.cst$kw$attrs;
var G__26004 = expr__26001;
return (pred__26000.cljs$core$IFn$_invoke$arity$2 ? pred__26000.cljs$core$IFn$_invoke$arity$2(G__26003,G__26004) : pred__26000.call(null,G__26003,G__26004));
})())){
return (new datascript.query.Relation(G__25993,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26005 = cljs.core.cst$kw$tuples;
var G__26006 = expr__26001;
return (pred__26000.cljs$core$IFn$_invoke$arity$2 ? pred__26000.cljs$core$IFn$_invoke$arity$2(G__26005,G__26006) : pred__26000.call(null,G__26005,G__26006));
})())){
return (new datascript.query.Relation(self__.attrs,G__25993,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25993),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25993){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__25993,self__.__extmap,self__.__hash));
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

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__25997){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__25997),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__25997),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25997,cljs.core.cst$kw$attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tuples], 0))),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26009 = arguments.length;
var i__10035__auto___26010 = (0);
while(true){
if((i__10035__auto___26010 < len__10034__auto___26009)){
args__10041__auto__.push((arguments[i__10035__auto___26010]));

var G__26011 = (i__10035__auto___26010 + (1));
i__10035__auto___26010 = G__26011;
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

datascript.query.concatv.cljs$lang$applyTo = (function (seq26008){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26008));
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
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__26016){
var vec__26017 = p__26016;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26017,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26017,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__26024){
var vec__26025 = p__26024;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26025,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26025,(1),null);
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
var n__9800__auto___26028 = l1;
var i_26029 = (0);
while(true){
if((i_26029 < n__9800__auto___26028)){
(res[i_26029] = (t1[(idxs1[i_26029])]));

var G__26030 = (i_26029 + (1));
i_26029 = G__26030;
continue;
} else {
}
break;
}

var n__9800__auto___26031 = l2;
var i_26032 = (0);
while(true){
if((i_26032 < n__9800__auto___26031)){
(res[(l1 + i_26032)] = (t2[(idxs2[i_26032])]));

var G__26033 = (i_26032 + (1));
i_26032 = G__26033;
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
var G__26035 = arguments.length;
switch (G__26035) {
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
var len__10034__auto___26038 = arguments.length;
var i__10035__auto___26039 = (0);
while(true){
if((i__10035__auto___26039 < len__10034__auto___26038)){
args__10041__auto__.push((arguments[i__10035__auto___26039]));

var G__26040 = (i__10035__auto___26039 + (1));
i__10035__auto___26039 = G__26040;
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

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq26037){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26037));
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
var len__10034__auto___26044 = arguments.length;
var i__10035__auto___26045 = (0);
while(true){
if((i__10035__auto___26045 < len__10034__auto___26044)){
args__10041__auto__.push((arguments[i__10035__auto___26045]));

var G__26046 = (i__10035__auto___26045 + (1));
i__10035__auto___26045 = G__26046;
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

datascript.query._get_some.cljs$lang$applyTo = (function (seq26041){
var G__26042 = cljs.core.first(seq26041);
var seq26041__$1 = cljs.core.next(seq26041);
var G__26043 = cljs.core.first(seq26041__$1);
var seq26041__$2 = cljs.core.next(seq26041__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__26042,G__26043,seq26041__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26048 = arguments.length;
var i__10035__auto___26049 = (0);
while(true){
if((i__10035__auto___26049 < len__10034__auto___26048)){
args__10041__auto__.push((arguments[i__10035__auto___26049]));

var G__26050 = (i__10035__auto___26049 + (1));
i__10035__auto___26049 = G__26050;
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

datascript.query.and_fn.cljs$lang$applyTo = (function (seq26047){
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26047));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__10041__auto__ = [];
var len__10034__auto___26052 = arguments.length;
var i__10035__auto___26053 = (0);
while(true){
if((i__10035__auto___26053 < len__10034__auto___26052)){
args__10041__auto__.push((arguments[i__10035__auto___26053]));

var G__26054 = (i__10035__auto___26053 + (1));
i__10035__auto___26053 = G__26054;
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

datascript.query.or_fn.cljs$lang$applyTo = (function (seq26051){
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26051));
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
var G__26061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__26061 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__26061;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__9639__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__26062(s__26063){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__26063__$1 = s__26063;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26063__$1);
if(temp__5278__auto__){
var s__26063__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26063__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26063__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26065 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26064 = (0);
while(true){
if((i__26064 < size__9638__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26064);
var delta = (x - mean);
cljs.core.chunk_append(b__26065,(delta * delta));

var G__26067 = (i__26064 + (1));
i__26064 = G__26067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26065),datascript$query$variance_$_iter__26062(cljs.core.chunk_rest(s__26063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26065),null);
}
} else {
var x = cljs.core.first(s__26063__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__26062(cljs.core.rest(s__26063__$2)));
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
var G__26066 = variance(coll);
return Math.sqrt(G__26066);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__26068 = null;
var G__26068__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__26068__2 = (function (n,coll){
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
G__26068 = function(n,coll){
switch(arguments.length){
case 1:
return G__26068__1.call(this,n);
case 2:
return G__26068__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26068.cljs$core$IFn$_invoke$arity$1 = G__26068__1;
G__26068.cljs$core$IFn$_invoke$arity$2 = G__26068__2;
return G__26068;
})()
,(function() {
var G__26069 = null;
var G__26069__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__26069__2 = (function (n,coll){
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
G__26069 = function(n,coll){
switch(arguments.length){
case 1:
return G__26069__1.call(this,n);
case 2:
return G__26069__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26069.cljs$core$IFn$_invoke$arity$1 = G__26069__1;
G__26069.cljs$core$IFn$_invoke$arity$2 = G__26069__2;
return G__26069;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__26070 = null;
var G__26070__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__26070__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__26070 = function(n,coll){
switch(arguments.length){
case 1:
return G__26070__1.call(this,n);
case 2:
return G__26070__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26070.cljs$core$IFn$_invoke$arity$1 = G__26070__1;
G__26070.cljs$core$IFn$_invoke$arity$2 = G__26070__2;
return G__26070;
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
return (function (p1__26071_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__26071_SHARP_);
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
return (function (p1__26072_SHARP_,p2__26073_SHARP_){
return datascript.query.in__GT_rel(p1__26072_SHARP_,p2__26073_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__26074){
var vec__26075 = p__26074;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(1),null);
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
return (function (p1__26078_SHARP_){
return (p1__26078_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26078_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__26078_SHARP_.call(null,tuple));
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
var G__26080 = cljs.core.next(tuples__$1);
var G__26081 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__26080;
hash_table = G__26081;
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
return (function (p1__26082_SHARP_){
return datascript.query.getter_fn(attrs1,p1__26082_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__26083_SHARP_){
return datascript.query.getter_fn(attrs2,p1__26083_SHARP_);
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
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26084_SHARP_){
if((p1__26084_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__26084_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__26085){
var vec__26086 = p__26085;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(1),null);
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
var G__26089 = cljs.core.next(tuple__$1);
var G__26090 = cljs.core.next(pattern__$1);
tuple__$1 = G__26089;
pattern__$1 = G__26090;
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
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26091_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__26091_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__26092){
var vec__26093 = p__26092;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26093,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26093,(1),null);
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
var G__26097 = cljs.core.next(rels__$1);
var G__26098 = datascript.query.hash_join(rel,new_rel__$1);
var G__26099 = acc;
rels__$1 = G__26097;
new_rel__$1 = G__26098;
acc = G__26099;
continue;
} else {
var G__26100 = cljs.core.next(rels__$1);
var G__26101 = new_rel__$1;
var G__26102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__26100;
new_rel__$1 = G__26101;
acc = G__26102;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__26103_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__26103_SHARP_),sym)){
return p1__26103_SHARP_;
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
return (tuple[(function (){var fexpr__26104 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__26104.cljs$core$IFn$_invoke$arity$1 ? fexpr__26104.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__26104.call(null,sym));
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
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26105_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__26105_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__26106_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__26106_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = datascript.arrays.make_array(len);
var tuples_args = datascript.arrays.make_array(len);
var n__9800__auto___26107 = len;
var i_26108 = (0);
while(true){
if((i_26108 < n__9800__auto___26107)){
var arg_26109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_26108);
if((arg_26109 instanceof cljs.core.Symbol)){
var temp__5276__auto___26110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_26109);
if(cljs.core.truth_(temp__5276__auto___26110)){
var source_26111 = temp__5276__auto___26110;
(static_args[i_26108] = source_26111);
} else {
(tuples_args[i_26108] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_26109));
}
} else {
(static_args[i_26108] = arg_26109);
}

var G__26112 = (i_26108 + (1));
i_26108 = G__26112;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__9800__auto___26113 = len;
var i_26114 = (0);
while(true){
if((i_26114 < n__9800__auto___26113)){
var temp__5278__auto___26115 = (tuples_args[i_26114]);
if(cljs.core.truth_(temp__5278__auto___26115)){
var tuple_idx_26116 = temp__5278__auto___26115;
var v_26117 = (tuple[tuple_idx_26116]);
(static_args[i_26114] = v_26117);
} else {
}

var G__26118 = (i_26114 + (1));
i_26114 = G__26118;
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
var vec__26120 = clause;
var vec__26123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26120,(0),null);
var seq__26124 = cljs.core.seq(vec__26123);
var first__26125 = cljs.core.first(seq__26124);
var seq__26124__$1 = cljs.core.next(seq__26124);
var f = first__26125;
var args = seq__26124__$1;
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
var vec__26126 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26126,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26126,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__26120,vec__26123,seq__26124,first__26125,seq__26124__$1,f,args,pred,vec__26126,context__$1,production){
return (function (p1__26119_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__26119_SHARP_);
});})(tuple_pred,vec__26120,vec__26123,seq__26124,first__26125,seq__26124__$1,f,args,pred,vec__26126,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__26129 = clause;
var vec__26132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(0),null);
var seq__26133 = cljs.core.seq(vec__26132);
var first__26134 = cljs.core.first(seq__26133);
var seq__26133__$1 = cljs.core.next(seq__26133);
var f = first__26134;
var args = seq__26133__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129,(1),null);
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
var vec__26135 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26135,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26135,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__9639__auto__ = ((function (tuple_fn,vec__26129,vec__26132,seq__26133,first__26134,seq__26133__$1,f,args,out,binding,fun,vec__26135,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__26138(s__26139){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__26129,vec__26132,seq__26133,first__26134,seq__26133__$1,f,args,out,binding,fun,vec__26135,context__$1,production){
return (function (){
var s__26139__$1 = s__26139;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26139__$1);
if(temp__5278__auto__){
var s__26139__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26139__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26139__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26141 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26140 = (0);
while(true){
if((i__26140 < size__9638__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26140);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__26141,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__26142 = (i__26140 + (1));
i__26140 = G__26142;
continue;
} else {
var G__26143 = (i__26140 + (1));
i__26140 = G__26143;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26141),datascript$query$bind_by_fn_$_iter__26138(cljs.core.chunk_rest(s__26139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26141),null);
}
} else {
var tuple = cljs.core.first(s__26139__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__26138(cljs.core.rest(s__26139__$2)));
} else {
var G__26144 = cljs.core.rest(s__26139__$2);
s__26139__$1 = G__26144;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__26129,vec__26132,seq__26133,first__26134,seq__26133__$1,f,args,out,binding,fun,vec__26135,context__$1,production))
,null,null));
});})(tuple_fn,vec__26129,vec__26132,seq__26133,first__26134,seq__26133__$1,f,args,out,binding,fun,vec__26135,context__$1,production))
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
var vec__26146 = clause;
var seq__26147 = cljs.core.seq(vec__26146);
var first__26148 = cljs.core.first(seq__26147);
var seq__26147__$1 = cljs.core.next(seq__26147);
var rule = first__26148;
var call_args = seq__26147__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__9639__auto__ = ((function (vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__26149(s__26150){
return (new cljs.core.LazySeq(null,((function (vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches){
return (function (){
var s__26150__$1 = s__26150;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26150__$1);
if(temp__5278__auto__){
var s__26150__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26150__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26150__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26152 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26151 = (0);
while(true){
if((i__26151 < size__9638__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26151);
var vec__26153 = branch;
var seq__26154 = cljs.core.seq(vec__26153);
var first__26155 = cljs.core.first(seq__26154);
var seq__26154__$1 = cljs.core.next(seq__26154);
var vec__26156 = first__26155;
var seq__26157 = cljs.core.seq(vec__26156);
var first__26158 = cljs.core.first(seq__26157);
var seq__26157__$1 = cljs.core.next(seq__26157);
var _ = first__26158;
var rule_args = seq__26157__$1;
var clauses = seq__26154__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__26152,clojure.walk.postwalk(((function (i__26151,vec__26153,seq__26154,first__26155,seq__26154__$1,vec__26156,seq__26157,first__26158,seq__26157__$1,_,rule_args,clauses,replacements,branch,c__9637__auto__,size__9638__auto__,b__26152,s__26150__$2,temp__5278__auto__,vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches){
return (function (p1__26145_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__26145_SHARP_))){
var x__23365__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__26145_SHARP_) : replacements.call(null,p1__26145_SHARP_));
if((x__23365__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__26145_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__23365__auto__;
}
} else {
return p1__26145_SHARP_;
}
});})(i__26151,vec__26153,seq__26154,first__26155,seq__26154__$1,vec__26156,seq__26157,first__26158,seq__26157__$1,_,rule_args,clauses,replacements,branch,c__9637__auto__,size__9638__auto__,b__26152,s__26150__$2,temp__5278__auto__,vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches))
,clauses));

var G__26165 = (i__26151 + (1));
i__26151 = G__26165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26152),datascript$query$expand_rule_$_iter__26149(cljs.core.chunk_rest(s__26150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26152),null);
}
} else {
var branch = cljs.core.first(s__26150__$2);
var vec__26159 = branch;
var seq__26160 = cljs.core.seq(vec__26159);
var first__26161 = cljs.core.first(seq__26160);
var seq__26160__$1 = cljs.core.next(seq__26160);
var vec__26162 = first__26161;
var seq__26163 = cljs.core.seq(vec__26162);
var first__26164 = cljs.core.first(seq__26163);
var seq__26163__$1 = cljs.core.next(seq__26163);
var _ = first__26164;
var rule_args = seq__26163__$1;
var clauses = seq__26160__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__26159,seq__26160,first__26161,seq__26160__$1,vec__26162,seq__26163,first__26164,seq__26163__$1,_,rule_args,clauses,replacements,branch,s__26150__$2,temp__5278__auto__,vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches){
return (function (p1__26145_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__26145_SHARP_))){
var x__23365__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__26145_SHARP_) : replacements.call(null,p1__26145_SHARP_));
if((x__23365__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__26145_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__23365__auto__;
}
} else {
return p1__26145_SHARP_;
}
});})(vec__26159,seq__26160,first__26161,seq__26160__$1,vec__26162,seq__26163,first__26164,seq__26163__$1,_,rule_args,clauses,replacements,branch,s__26150__$2,temp__5278__auto__,vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__26149(cljs.core.rest(s__26150__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__26146,seq__26147,first__26148,seq__26147__$1,rule,call_args,seqid,branches))
;
return iter__9639__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26166){
var vec__26167 = p__26166;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__26170 = rule_clause;
var seq__26171 = cljs.core.seq(vec__26170);
var first__26172 = cljs.core.first(seq__26171);
var seq__26171__$1 = cljs.core.next(seq__26171);
var rule = first__26172;
var call_args = seq__26171__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__9639__auto__ = ((function (vec__26170,seq__26171,first__26172,seq__26171__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__26173(s__26174){
return (new cljs.core.LazySeq(null,((function (vec__26170,seq__26171,first__26172,seq__26171__$1,rule,call_args,prev_call_args){
return (function (){
var s__26174__$1 = s__26174;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26174__$1);
if(temp__5278__auto__){
var s__26174__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26174__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26174__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26176 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26175 = (0);
while(true){
if((i__26175 < size__9638__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26175);
var vec__26177 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26177,(1),null);
cljs.core.chunk_append(b__26176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__26183 = (i__26175 + (1));
i__26175 = G__26183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26176),datascript$query$rule_gen_guards_$_iter__26173(cljs.core.chunk_rest(s__26174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26176),null);
}
} else {
var prev_args = cljs.core.first(s__26174__$2);
var vec__26180 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26180,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26180,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__26173(cljs.core.rest(s__26174__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26170,seq__26171,first__26172,seq__26171__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__26170,seq__26171,first__26172,seq__26171__$1,rule,call_args,prev_call_args))
;
return iter__9639__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (res){
return (function (p1__26184_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__26184_SHARP_) : pred.call(null,p1__26184_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__26184_SHARP_);
} else {
}

return p1__26184_SHARP_;
});})(res))
,form);

return cljs.core.deref(res);
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__26185){
var vec__26186 = p__26185;
var vec__26189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26186,(0),null);
var seq__26190 = cljs.core.seq(vec__26189);
var first__26191 = cljs.core.first(seq__26190);
var seq__26190__$1 = cljs.core.next(seq__26190);
var _ = first__26191;
var vars = seq__26190__$1;
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
return (function (p1__26192_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__26192_SHARP_));
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
var vec__26195 = cljs.core.split_with(((function (stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__26193_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__26193_SHARP_));
});})(stack,rel,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26195,(0),null);
var vec__26198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26195,(1),null);
var seq__26199 = cljs.core.seq(vec__26198);
var first__26200 = cljs.core.first(seq__26199);
var seq__26199__$1 = cljs.core.next(seq__26199);
var rule_clause = first__26200;
var next_clauses = seq__26199__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__26211 = cljs.core.next(stack);
var G__26212 = datascript.query.sum_rel(rel,new_rel);
stack = G__26211;
rel = G__26212;
continue;
} else {
var vec__26201 = rule_clause;
var seq__26202 = cljs.core.seq(vec__26201);
var first__26203 = cljs.core.first(seq__26202);
var seq__26202__$1 = cljs.core.next(seq__26202);
var rule = first__26203;
var call_args = seq__26202__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__26204 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__26194_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26194_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__26213 = cljs.core.next(stack);
var G__26214 = rel;
stack = G__26213;
rel = G__26214;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__26215 = cljs.core.next(stack);
var G__26216 = rel;
stack = G__26215;
rel = G__26216;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__26217 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9639__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__26207(s__26208){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__26208__$1 = s__26208;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26208__$1);
if(temp__5278__auto__){
var s__26208__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26208__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26208__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26210 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26209 = (0);
while(true){
if((i__26209 < size__9638__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26209);
cljs.core.chunk_append(b__26210,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__26219 = (i__26209 + (1));
i__26209 = G__26219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26210),datascript$query$solve_rule_$_iter__26207(cljs.core.chunk_rest(s__26208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26210),null);
}
} else {
var branch = cljs.core.first(s__26208__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__26207(cljs.core.rest(s__26208__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26201,seq__26202,first__26203,seq__26202__$1,rule,call_args,guards,vec__26204,active_gs,pending_gs,vec__26195,clauses,vec__26198,seq__26199,first__26200,seq__26199__$1,rule_clause,next_clauses,frame,temp__5276__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__9639__auto__(branches);
})(),cljs.core.next(stack));
var G__26218 = rel;
stack = G__26217;
rel = G__26218;
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
var vec__26221 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221,(3),null);
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
var vec__26224 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(3),null);
var G__26227 = cljs.core.PersistentHashSet.EMPTY;
var G__26227__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26227,e):G__26227);
var G__26227__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26227__$1,tx):G__26227__$1);
if(cljs.core.truth_((function (){var and__8750__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__8750__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__8750__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26227__$2,v);
} else {
return G__26227__$2;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__26228 = datascript.query.looks_like_QMARK_;
var expr__26229 = clause;
if(cljs.core.truth_((function (){var G__26231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__26232 = expr__26229;
return (pred__26228.cljs$core$IFn$_invoke$arity$2 ? pred__26228.cljs$core$IFn$_invoke$arity$2(G__26231,G__26232) : pred__26228.call(null,G__26231,G__26232));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__26233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__26234 = expr__26229;
return (pred__26228.cljs$core$IFn$_invoke$arity$2 ? pred__26228.cljs$core$IFn$_invoke$arity$2(G__26233,G__26234) : pred__26228.call(null,G__26233,G__26234));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__26235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__26236 = expr__26229;
return (pred__26228.cljs$core$IFn$_invoke$arity$2 ? pred__26228.cljs$core$IFn$_invoke$arity$2(G__26235,G__26236) : pred__26228.call(null,G__26235,G__26236));
})())){
var vec__26237 = datascript.query.normalize_pattern_clause(clause);
var seq__26238 = cljs.core.seq(vec__26237);
var first__26239 = cljs.core.first(seq__26238);
var seq__26238__$1 = cljs.core.next(seq__26238);
var source_sym = first__26239;
var pattern = seq__26238__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_26241 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_26242 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_26242;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_26241;
}} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26229)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__26243 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26243,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26243,(1),null);
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
var G__26248 = arguments.length;
switch (G__26248) {
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
var G__26256 = acc;
var G__26257 = cljs.core.next(rels);
var G__26258 = symbols;
acc = G__26256;
rels = G__26257;
symbols = G__26258;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5276__auto__){
return (function (p1__26246_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__26246_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5276__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__26259 = (function (){var iter__9639__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__26249(s__26250){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__26250__$1 = s__26250;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26250__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var t1 = cljs.core.first(xs__5831__auto__);
var iterys__9635__auto__ = ((function (s__26250__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function datascript$query$iter__26249_$_iter__26251(s__26252){
return (new cljs.core.LazySeq(null,((function (s__26250__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__){
return (function (){
var s__26252__$1 = s__26252;
while(true){
var temp__5278__auto____$1 = cljs.core.seq(s__26252__$1);
if(temp__5278__auto____$1){
var s__26252__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26252__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26252__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26254 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26253 = (0);
while(true){
if((i__26253 < size__9638__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26253);
cljs.core.chunk_append(b__26254,(function (){var res = cljs.core.aclone(t1);
var n__9800__auto___26262 = len;
var i_26263 = (0);
while(true){
if((i_26263 < n__9800__auto___26262)){
var temp__5278__auto___26264__$2 = (copy_map[i_26263]);
if(cljs.core.truth_(temp__5278__auto___26264__$2)){
var idx_26265 = temp__5278__auto___26264__$2;
(res[i_26263] = (t2[idx_26265]));
} else {
}

var G__26266 = (i_26263 + (1));
i_26263 = G__26266;
continue;
} else {
}
break;
}

return res;
})());

var G__26267 = (i__26253 + (1));
i__26253 = G__26267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26254),datascript$query$iter__26249_$_iter__26251(cljs.core.chunk_rest(s__26252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26254),null);
}
} else {
var t2 = cljs.core.first(s__26252__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__9800__auto___26268 = len;
var i_26269 = (0);
while(true){
if((i_26269 < n__9800__auto___26268)){
var temp__5278__auto___26270__$2 = (copy_map[i_26269]);
if(cljs.core.truth_(temp__5278__auto___26270__$2)){
var idx_26271 = temp__5278__auto___26270__$2;
(res[i_26269] = (t2[idx_26271]));
} else {
}

var G__26272 = (i_26269 + (1));
i_26269 = G__26272;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__26249_$_iter__26251(cljs.core.rest(s__26252__$2)));
}
} else {
return null;
}
break;
}
});})(s__26250__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
,null,null));
});})(s__26250__$1,acc,rels,symbols,t1,xs__5831__auto__,temp__5278__auto__,copy_map,len,keep_attrs,rel,temp__5276__auto__))
;
var fs__9636__auto__ = cljs.core.seq(iterys__9635__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__9636__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9636__auto__,datascript$query$iter__26249(cljs.core.rest(s__26250__$1)));
} else {
var G__26273 = cljs.core.rest(s__26250__$1);
s__26250__$1 = G__26273;
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
var G__26260 = cljs.core.next(rels);
var G__26261 = symbols;
acc = G__26259;
rels = G__26260;
symbols = G__26261;
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
return (function (p1__26274_SHARP_){
return datascript.query._context_resolve(p1__26274_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__26275_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__26275_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26276_SHARP_,p2__26277_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__26276_SHARP_) : pred.call(null,p1__26276_SHARP_)))){
return p2__26277_SHARP_;
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
return (function (p1__26278_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__26278_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__9639__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__26279(s__26280){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__26280__$1 = s__26280;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26280__$1);
if(temp__5278__auto__){
var s__26280__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26280__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26280__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26282 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26281 = (0);
while(true){
if((i__26281 < size__9638__auto__)){
var vec__26283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26281);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(1),null);
cljs.core.chunk_append(b__26282,datascript.query._aggregate(find_elements,context,tuples));

var G__26289 = (i__26281 + (1));
i__26281 = G__26289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26282),datascript$query$aggregate_$_iter__26279(cljs.core.chunk_rest(s__26280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26282),null);
}
} else {
var vec__26286 = cljs.core.first(s__26280__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__26279(cljs.core.rest(s__26280__$2)));
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
var resolved = (function (){var iter__9639__auto__ = (function datascript$query$pull_$_iter__26290(s__26291){
return (new cljs.core.LazySeq(null,(function (){
var s__26291__$1 = s__26291;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26291__$1);
if(temp__5278__auto__){
var s__26291__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26291__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26291__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26293 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26292 = (0);
while(true){
if((i__26292 < size__9638__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26292);
cljs.core.chunk_append(b__26293,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__26304 = (i__26292 + (1));
i__26292 = G__26304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26293),datascript$query$pull_$_iter__26290(cljs.core.chunk_rest(s__26291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26293),null);
}
} else {
var find = cljs.core.first(s__26291__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__26290(cljs.core.rest(s__26291__$2)));
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
return (function datascript$query$pull_$_iter__26294(s__26295){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__26295__$1 = s__26295;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__26295__$1);
if(temp__5278__auto__){
var s__26295__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26295__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__26295__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__26297 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__26296 = (0);
while(true){
if((i__26296 < size__9638__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__26296);
cljs.core.chunk_append(b__26297,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__26296,tuple,c__9637__auto__,size__9638__auto__,b__26297,s__26295__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__26298 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26298,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26298,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__26296,tuple,c__9637__auto__,size__9638__auto__,b__26297,s__26295__$2,temp__5278__auto__,resolved))
,resolved,tuple));

var G__26305 = (i__26296 + (1));
i__26296 = G__26305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26297),datascript$query$pull_$_iter__26294(cljs.core.chunk_rest(s__26295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26297),null);
}
} else {
var tuple = cljs.core.first(s__26295__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__26295__$2,temp__5278__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__26301 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__26295__$2,temp__5278__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__26294(cljs.core.rest(s__26295__$2)));
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
var len__10034__auto___26311 = arguments.length;
var i__10035__auto___26312 = (0);
while(true){
if((i__10035__auto___26312 < len__10034__auto___26311)){
args__10041__auto__.push((arguments[i__10035__auto___26312]));

var G__26313 = (i__10035__auto___26312 + (1));
i__10035__auto___26312 = G__26313;
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
var q__$1 = (function (){var G__26309 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__26309);
} else {
return G__26309;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__26310 = resultset;
var G__26310__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26310,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__26306_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__26306_SHARP_,(0),result_arity));
});})(G__26310,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__26310):G__26310);
var G__26310__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__26310__$1):G__26310__$1);
var G__26310__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__26310__$2):G__26310__$2);
return datascript.query._post_process(find,G__26310__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq26307){
var G__26308 = cljs.core.first(seq26307);
var seq26307__$1 = cljs.core.next(seq26307);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__26308,seq26307__$1);
});

