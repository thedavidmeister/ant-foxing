// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.db');

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
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24597,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24601 = k24597;
var G__24601__$1 = (((G__24601 instanceof cljs.core.Keyword))?G__24601.fqn:null);
switch (G__24601__$1) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24597,else__8776__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24596){
var self__ = this;
var G__24596__$1 = this;
return (new cljs.core.RecordIter((0),G__24596__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$attrs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24602 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (90253489 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24602.cljs$core$IFn$_invoke$arity$1 ? fexpr__24602.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24602.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24598,other24599){
var self__ = this;
var this24598__$1 = this;
return (!((other24599 == null))) && ((this24598__$1.constructor === other24599.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24598__$1.wildcard_QMARK_,other24599.wildcard_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24598__$1.attrs,other24599.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24598__$1.__extmap,other24599.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,null,cljs.core.cst$kw$wildcard_QMARK_,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24596){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24603 = cljs.core.keyword_identical_QMARK_;
var expr__24604 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24606 = cljs.core.cst$kw$wildcard_QMARK_;
var G__24607 = expr__24604;
return (pred__24603.cljs$core$IFn$_invoke$arity$2 ? pred__24603.cljs$core$IFn$_invoke$arity$2(G__24606,G__24607) : pred__24603.call(null,G__24606,G__24607));
})())){
return (new datascript.pull_parser.PullSpec(G__24596,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24608 = cljs.core.cst$kw$attrs;
var G__24609 = expr__24604;
return (pred__24603.cljs$core$IFn$_invoke$arity$2 ? pred__24603.cljs$core$IFn$_invoke$arity$2(G__24608,G__24609) : pred__24603.call(null,G__24608,G__24609));
})())){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__24596,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24596),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24596){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__24596,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$wildcard_QMARK_,cljs.core.cst$sym$attrs], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__24600){
return (new datascript.pull_parser.PullSpec(cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24600),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__24600),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24600,cljs.core.cst$kw$wildcard_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$attrs], 0))),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPullSpecComponent.-as-spec",this$);
}
}
}
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24612,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24616 = k24612;
var G__24616__$1 = (((G__24616 instanceof cljs.core.Keyword))?G__24616.fqn:null);
switch (G__24616__$1) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24612,else__8776__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24611){
var self__ = this;
var G__24611__$1 = this;
return (new cljs.core.RecordIter((0),G__24611__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24617 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-838771693 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24617.cljs$core$IFn$_invoke$arity$1 ? fexpr__24617.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24617.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24613,other24614){
var self__ = this;
var this24613__$1 = this;
return (!((other24614 == null))) && ((this24613__$1.constructor === other24614.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24613__$1.attr,other24614.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24613__$1.__extmap,other24614.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24611){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24618 = cljs.core.keyword_identical_QMARK_;
var expr__24619 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24621 = cljs.core.cst$kw$attr;
var G__24622 = expr__24619;
return (pred__24618.cljs$core$IFn$_invoke$arity$2 ? pred__24618.cljs$core$IFn$_invoke$arity$2(G__24621,G__24622) : pred__24618.call(null,G__24621,G__24622));
})())){
return (new datascript.pull_parser.PullAttrName(G__24611,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24611),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24611){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__24611,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__24615){
return (new datascript.pull_parser.PullAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__24615),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24615,cljs.core.cst$kw$attr)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24625,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24629 = k24625;
var G__24629__$1 = (((G__24629 instanceof cljs.core.Keyword))?G__24629.fqn:null);
switch (G__24629__$1) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24625,else__8776__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24624){
var self__ = this;
var G__24624__$1 = this;
return (new cljs.core.RecordIter((0),G__24624__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$rattr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24630 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (158820207 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24630.cljs$core$IFn$_invoke$arity$1 ? fexpr__24630.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24630.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24626,other24627){
var self__ = this;
var this24626__$1 = this;
return (!((other24627 == null))) && ((this24626__$1.constructor === other24627.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24626__$1.attr,other24627.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24626__$1.rattr,other24627.rattr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24626__$1.__extmap,other24627.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rattr,null,cljs.core.cst$kw$attr,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24624){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24631 = cljs.core.keyword_identical_QMARK_;
var expr__24632 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24634 = cljs.core.cst$kw$attr;
var G__24635 = expr__24632;
return (pred__24631.cljs$core$IFn$_invoke$arity$2 ? pred__24631.cljs$core$IFn$_invoke$arity$2(G__24634,G__24635) : pred__24631.call(null,G__24634,G__24635));
})())){
return (new datascript.pull_parser.PullReverseAttrName(G__24624,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24636 = cljs.core.cst$kw$rattr;
var G__24637 = expr__24632;
return (pred__24631.cljs$core$IFn$_invoke$arity$2 ? pred__24631.cljs$core$IFn$_invoke$arity$2(G__24636,G__24637) : pred__24631.call(null,G__24636,G__24637));
})())){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__24624,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24624),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24624){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__24624,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$rattr], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__24628){
return (new datascript.pull_parser.PullReverseAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__24628),cljs.core.cst$kw$rattr.cljs$core$IFn$_invoke$arity$1(G__24628),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24628,cljs.core.cst$kw$attr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rattr], 0))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24640,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24644 = k24640;
var G__24644__$1 = (((G__24644 instanceof cljs.core.Keyword))?G__24644.fqn:null);
switch (G__24644__$1) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24640,else__8776__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24639){
var self__ = this;
var G__24639__$1 = this;
return (new cljs.core.RecordIter((0),G__24639__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24645 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (2109320956 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24645.cljs$core$IFn$_invoke$arity$1 ? fexpr__24645.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24645.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24641,other24642){
var self__ = this;
var this24641__$1 = this;
return (!((other24642 == null))) && ((this24641__$1.constructor === other24642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24641__$1.attr,other24642.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24641__$1.limit,other24642.limit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24641__$1.__extmap,other24642.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$limit], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,null,cljs.core.cst$kw$attr,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24639){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24646 = cljs.core.keyword_identical_QMARK_;
var expr__24647 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24649 = cljs.core.cst$kw$attr;
var G__24650 = expr__24647;
return (pred__24646.cljs$core$IFn$_invoke$arity$2 ? pred__24646.cljs$core$IFn$_invoke$arity$2(G__24649,G__24650) : pred__24646.call(null,G__24649,G__24650));
})())){
return (new datascript.pull_parser.PullLimitExpr(G__24639,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24651 = cljs.core.cst$kw$limit;
var G__24652 = expr__24647;
return (pred__24646.cljs$core$IFn$_invoke$arity$2 ? pred__24646.cljs$core$IFn$_invoke$arity$2(G__24651,G__24652) : pred__24646.call(null,G__24651,G__24652));
})())){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__24639,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24639),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24639){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__24639,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__24643){
return (new datascript.pull_parser.PullLimitExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__24643),cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__24643),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24643,cljs.core.cst$kw$attr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$limit], 0))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24655,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24659 = k24655;
var G__24659__$1 = (((G__24659 instanceof cljs.core.Keyword))?G__24659.fqn:null);
switch (G__24659__$1) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24655,else__8776__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24654){
var self__ = this;
var G__24654__$1 = this;
return (new cljs.core.RecordIter((0),G__24654__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24660 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1499761615 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24660.cljs$core$IFn$_invoke$arity$1 ? fexpr__24660.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24660.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24656,other24657){
var self__ = this;
var this24656__$1 = this;
return (!((other24657 == null))) && ((this24656__$1.constructor === other24657.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24656__$1.attr,other24657.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24656__$1.value,other24657.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24656__$1.__extmap,other24657.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$default], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$attr,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24654){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24661 = cljs.core.keyword_identical_QMARK_;
var expr__24662 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24664 = cljs.core.cst$kw$attr;
var G__24665 = expr__24662;
return (pred__24661.cljs$core$IFn$_invoke$arity$2 ? pred__24661.cljs$core$IFn$_invoke$arity$2(G__24664,G__24665) : pred__24661.call(null,G__24664,G__24665));
})())){
return (new datascript.pull_parser.PullDefaultExpr(G__24654,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24666 = cljs.core.cst$kw$value;
var G__24667 = expr__24662;
return (pred__24661.cljs$core$IFn$_invoke$arity$2 ? pred__24661.cljs$core$IFn$_invoke$arity$2(G__24666,G__24667) : pred__24661.call(null,G__24666,G__24667));
})())){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__24654,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24654),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24654){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__24654,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$value], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__24658){
return (new datascript.pull_parser.PullDefaultExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__24658),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__24658),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24658,cljs.core.cst$kw$attr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0))),null));
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
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24670,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24674 = k24670;
switch (G__24674) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24670,else__8776__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24669){
var self__ = this;
var G__24669__$1 = this;
return (new cljs.core.RecordIter((0),G__24669__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24675 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-163917799 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24675.cljs$core$IFn$_invoke$arity$1 ? fexpr__24675.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24675.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24671,other24672){
var self__ = this;
var this24671__$1 = this;
return (!((other24672 == null))) && ((this24671__$1.constructor === other24672.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24671__$1.__extmap,other24672.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24669){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24676 = cljs.core.keyword_identical_QMARK_;
var expr__24677 = k__8781__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24669),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24669){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__24669,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__24673){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24673)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24681,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24685 = k24681;
var G__24685__$1 = (((G__24685 instanceof cljs.core.Keyword))?G__24685.fqn:null);
switch (G__24685__$1) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24681,else__8776__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24680){
var self__ = this;
var G__24680__$1 = this;
return (new cljs.core.RecordIter((0),G__24680__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24686 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1552688154 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24686.cljs$core$IFn$_invoke$arity$1 ? fexpr__24686.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24686.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24682,other24683){
var self__ = this;
var this24682__$1 = this;
return (!((other24683 == null))) && ((this24682__$1.constructor === other24683.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24682__$1.limit,other24683.limit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24682__$1.__extmap,other24683.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion,self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$limit,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24680){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24687 = cljs.core.keyword_identical_QMARK_;
var expr__24688 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24690 = cljs.core.cst$kw$limit;
var G__24691 = expr__24688;
return (pred__24687.cljs$core$IFn$_invoke$arity$2 ? pred__24687.cljs$core$IFn$_invoke$arity$2(G__24690,G__24691) : pred__24687.call(null,G__24690,G__24691));
})())){
return (new datascript.pull_parser.PullRecursionLimit(G__24680,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24680),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24680){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__24680,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__24684){
return (new datascript.pull_parser.PullRecursionLimit(cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__24684),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24684,cljs.core.cst$kw$limit)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24694,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24698 = k24694;
var G__24698__$1 = (((G__24698 instanceof cljs.core.Keyword))?G__24698.fqn:null);
switch (G__24698__$1) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24694,else__8776__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24693){
var self__ = this;
var G__24693__$1 = this;
return (new cljs.core.RecordIter((0),G__24693__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$porrl], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24699 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (152088668 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24699.cljs$core$IFn$_invoke$arity$1 ? fexpr__24699.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24699.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24695,other24696){
var self__ = this;
var this24695__$1 = this;
return (!((other24696 == null))) && ((this24695__$1.constructor === other24696.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24695__$1.attr,other24696.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24695__$1.porrl,other24696.porrl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24695__$1.__extmap,other24696.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(datascript.pull_parser._as_spec(self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec(self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$porrl,null,cljs.core.cst$kw$attr,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24693){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24700 = cljs.core.keyword_identical_QMARK_;
var expr__24701 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24703 = cljs.core.cst$kw$attr;
var G__24704 = expr__24701;
return (pred__24700.cljs$core$IFn$_invoke$arity$2 ? pred__24700.cljs$core$IFn$_invoke$arity$2(G__24703,G__24704) : pred__24700.call(null,G__24703,G__24704));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(G__24693,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24705 = cljs.core.cst$kw$porrl;
var G__24706 = expr__24701;
return (pred__24700.cljs$core$IFn$_invoke$arity$2 ? pred__24700.cljs$core$IFn$_invoke$arity$2(G__24705,G__24706) : pred__24700.call(null,G__24705,G__24706));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__24693,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24693),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24693){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__24693,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$porrl], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__24697){
return (new datascript.pull_parser.PullMapSpecEntry(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__24697),cljs.core.cst$kw$porrl.cljs$core$IFn$_invoke$arity$1(G__24697),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24697,cljs.core.cst$kw$attr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$porrl], 0))),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$wildcard_QMARK_,true);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(res,cljs.core.cst$kw$attrs,cljs.core.conj_BANG_,datascript.pull_parser._as_spec(part));
}
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24709,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24713 = k24709;
var G__24713__$1 = (((G__24713 instanceof cljs.core.Keyword))?G__24713.fqn:null);
switch (G__24713__$1) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24709,else__8776__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24708){
var self__ = this;
var G__24708__$1 = this;
return (new cljs.core.RecordIter((0),G__24708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24714 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-795554044 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24714.cljs$core$IFn$_invoke$arity$1 ? fexpr__24714.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24714.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24710,other24711){
var self__ = this;
var this24710__$1 = this;
return (!((other24711 == null))) && ((this24710__$1.constructor === other24711.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24710__$1.specs,other24711.specs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24710__$1.__extmap,other24711.__extmap));
});

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subpattern,cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$attrs,cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$specs,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24708){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24715 = cljs.core.keyword_identical_QMARK_;
var expr__24716 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24718 = cljs.core.cst$kw$specs;
var G__24719 = expr__24716;
return (pred__24715.cljs$core$IFn$_invoke$arity$2 ? pred__24715.cljs$core$IFn$_invoke$arity$2(G__24718,G__24719) : pred__24715.call(null,G__24718,G__24719));
})())){
return (new datascript.pull_parser.PullPattern(G__24708,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24708),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24708){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__24708,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$specs], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__24712){
return (new datascript.pull_parser.PullPattern(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(G__24712),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24712,cljs.core.cst$kw$specs)),null));
});

datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
return null;
});
datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_STAR_,null,"*",null,cljs.core.cst$sym$_STAR_,null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.wildcard_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_(spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref(spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,cljs.core.cst$sym$$$$,null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_((datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_(spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$limit,null,cljs.core.cst$kw$limit,null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__24721 = spec;
var limit_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721,(1),null);
var pos_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24721,(2),null);
if(cljs.core.truth_((datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1(limit_sym) : datascript.pull_parser.limit_QMARK_.call(null,limit_sym)))){
var temp__5276__auto__ = (function (){var and__8087__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__8087__auto__){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var attr_name = temp__5276__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected [\"limit\" attr-name (positive-number | nil)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$default,null,cljs.core.cst$kw$default,null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__24724 = spec;
var default_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(1),null);
var default_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(2),null);
if(cljs.core.truth_((datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym)))){
var temp__5276__auto__ = (function (){var and__8087__auto__ = (datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym));
if(cljs.core.truth_(and__8087__auto__)){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var attr_name = temp__5276__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected [\"default\" attr-name any-value]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__24727){
var vec__24728 = p__24727;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24728,(1),null);
var temp__5276__auto__ = (function (){var or__8099__auto__ = datascript.pull_parser.parse_attr_name(k);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(k))){
return datascript.pull_parser.parse_limit_expr(k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var attr_name = temp__5276__auto__;
var temp__5276__auto____$1 = (function (){var or__8099__auto__ = datascript.pull_parser.parse_recursion_limit(v);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1(v) : datascript.pull_parser.parse_pattern.call(null,v));
}
})();
if(cljs.core.truth_(temp__5276__auto____$1)){
var pattern_or_rec = temp__5276__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected (pattern | recursion-limit)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected (attr-name | limit-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_(spec)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(spec))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Maps should contain exactly 1 entry"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(= 1 (count spec))")].join('')));
}

return datascript.pull_parser.parse_map_spec_entry(cljs.core.first(spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(spec))){
var or__8099__auto__ = datascript.pull_parser.parse_limit_expr(spec);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return datascript.pull_parser.parse_default_expr(spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__8099__auto__ = datascript.pull_parser.parse_attr_name(spec);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.pull_parser.parse_wildcard(spec);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.pull_parser.parse_map_spec(spec);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
var or__8099__auto____$3 = datascript.pull_parser.parse_attr_expr(spec);
if(cljs.core.truth_(or__8099__auto____$3)){
return or__8099__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_(clause)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(clause) : datascript.pull_parser.wildcard_QMARK_.call(null,clause)))){
return cljs.core.cst$kw$wildcard;
} else {
return cljs.core.cst$kw$other;

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24731_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__24731_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by(datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$wildcard)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(base,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$other)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.expand_map_clause),cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$map));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_(pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses(pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(datascript.pull_parser._as_spec(pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__8099__auto__ = (function (){var G__24733 = pattern;
var G__24733__$1 = (((G__24733 == null))?null:datascript.pull_parser.parse_pattern(G__24733));
if((G__24733__$1 == null)){
return null;
} else {
return datascript.pull_parser.pattern__GT_spec(G__24733__$1);
}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull pattern, expected: [attr-spec+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,pattern], null));
}
});
