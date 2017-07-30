// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.spec.core');
goog.require('schema.spec.leaf');
goog.require('schema.spec.variant');
goog.require('schema.spec.collection');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (schema.core.spec[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (schema.core.spec["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (schema.core.explain[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (schema.core.explain["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
var fexpr__27671 = schema.core.checker(schema__$1);
return (fexpr__27671.cljs$core$IFn$_invoke$arity$1 ? fexpr__27671.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27671.call(null,x));
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__5278__auto___27672 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__5278__auto___27672)){
var error_27673 = temp__5278__auto___27672;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_27673], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_27673], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var fexpr__27674 = schema.core.validator(schema__$1);
return (fexpr__27674.cljs$core$IFn$_invoke$arity$1 ? fexpr__27674.cljs$core$IFn$_invoke$arity$1(value) : fexpr__27674.call(null,value));
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__27675_SHARP_){
var and__8087__auto__ = !((p1__27675_SHARP_ == null));
if(and__8087__auto__){
var or__8099__auto__ = (klass === p1__27675_SHARP_.constructor);
if(or__8099__auto__){
return or__8099__auto__;
} else {
return p1__27675_SHARP_ instanceof klass;
}
} else {
return and__8087__auto__;
}
}),(function (p1__27676_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = klass;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27676_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5276__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5276__auto__)){
var class_schema = temp__5276__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__5276__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5276__auto__)){
var more_schema = temp__5276__auto__;
return schema.core.explain(more_schema);
} else {
var pred__27677 = cljs.core._EQ_;
var expr__27678 = this$;
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(null,expr__27678) : pred__27677.call(null,null,expr__27678)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(Boolean,expr__27678) : pred__27677.call(null,Boolean,expr__27678)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(Number,expr__27678) : pred__27677.call(null,Number,expr__27678)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(null,expr__27678) : pred__27677.call(null,null,expr__27678)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(Date,expr__27678) : pred__27677.call(null,Date,expr__27678)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__27677.cljs$core$IFn$_invoke$arity$2 ? pred__27677.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__27678) : pred__27677.call(null,cljs.core.UUID,expr__27678)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27681,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27685 = k27681;
var G__27685__$1 = (((G__27685 instanceof cljs.core.Keyword))?G__27685.fqn:null);
switch (G__27685__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27681,else__8776__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.AnythingSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27680){
var self__ = this;
var G__27680__$1 = this;
return (new cljs.core.RecordIter((0),G__27680__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27686 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27686.cljs$core$IFn$_invoke$arity$1 ? fexpr__27686.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27686.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27682,other27683){
var self__ = this;
var this27682__$1 = this;
return (!((other27683 == null))) && ((this27682__$1.constructor === other27683.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27682__$1._,other27683._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27682__$1.__extmap,other27683.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27680){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27687 = cljs.core.keyword_identical_QMARK_;
var expr__27688 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27690 = cljs.core.cst$kw$_;
var G__27691 = expr__27688;
return (pred__27687.cljs$core$IFn$_invoke$arity$2 ? pred__27687.cljs$core$IFn$_invoke$arity$2(G__27690,G__27691) : pred__27687.call(null,G__27690,G__27691));
})())){
return (new schema.core.AnythingSchema(G__27680,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27680),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27680){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__27680,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__27684){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__27684),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27684,cljs.core.cst$kw$_)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27696,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27700 = k27696;
var G__27700__$1 = (((G__27700 instanceof cljs.core.Keyword))?G__27700.fqn:null);
switch (G__27700__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27696,else__8776__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.EqSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27695){
var self__ = this;
var G__27695__$1 = this;
return (new cljs.core.RecordIter((0),G__27695__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27701 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27701.cljs$core$IFn$_invoke$arity$1 ? fexpr__27701.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27701.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27697,other27698){
var self__ = this;
var this27697__$1 = this;
return (!((other27698 == null))) && ((this27697__$1.constructor === other27698.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27697__$1.v,other27698.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27697__$1.__extmap,other27698.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27695){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27702 = cljs.core.keyword_identical_QMARK_;
var expr__27703 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27705 = cljs.core.cst$kw$v;
var G__27706 = expr__27703;
return (pred__27702.cljs$core$IFn$_invoke$arity$2 ? pred__27702.cljs$core$IFn$_invoke$arity$2(G__27705,G__27706) : pred__27702.call(null,G__27705,G__27706));
})())){
return (new schema.core.EqSchema(G__27695,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27695),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27695){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__27695,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27693_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__27693_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27694_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = self__.v;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27694_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = self__.v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__27699){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__27699),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27699,cljs.core.cst$kw$v)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27711,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27715 = k27711;
var G__27715__$1 = (((G__27715 instanceof cljs.core.Keyword))?G__27715.fqn:null);
switch (G__27715__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27711,else__8776__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Isa{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27710){
var self__ = this;
var G__27710__$1 = this;
return (new cljs.core.RecordIter((0),G__27710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27716 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27716.cljs$core$IFn$_invoke$arity$1 ? fexpr__27716.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27716.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27712,other27713){
var self__ = this;
var this27712__$1 = this;
return (!((other27713 == null))) && ((this27712__$1.constructor === other27713.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27712__$1.h,other27713.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27712__$1.parent,other27713.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27712__$1.__extmap,other27713.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27710){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27717 = cljs.core.keyword_identical_QMARK_;
var expr__27718 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27720 = cljs.core.cst$kw$h;
var G__27721 = expr__27718;
return (pred__27717.cljs$core$IFn$_invoke$arity$2 ? pred__27717.cljs$core$IFn$_invoke$arity$2(G__27720,G__27721) : pred__27717.call(null,G__27720,G__27721));
})())){
return (new schema.core.Isa(G__27710,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27722 = cljs.core.cst$kw$parent;
var G__27723 = expr__27718;
return (pred__27717.cljs$core$IFn$_invoke$arity$2 ? pred__27717.cljs$core$IFn$_invoke$arity$2(G__27722,G__27723) : pred__27717.call(null,G__27722,G__27723));
})())){
return (new schema.core.Isa(self__.h,G__27710,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27710),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27710){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__27710,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27708_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__27708_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__27708_SHARP_,self__.parent);
}
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27709_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = p1__27709_SHARP_;
return cljs.core._conj((function (){var x__9034__auto____$1 = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__27714){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__27714),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__27714),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27714,cljs.core.cst$kw$h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent], 0))),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__27726 = arguments.length;
switch (G__27726) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27731,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27735 = k27731;
var G__27735__$1 = (((G__27735 instanceof cljs.core.Keyword))?G__27735.fqn:null);
switch (G__27735__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27731,else__8776__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.EnumSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27730){
var self__ = this;
var G__27730__$1 = this;
return (new cljs.core.RecordIter((0),G__27730__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27736 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27736.cljs$core$IFn$_invoke$arity$1 ? fexpr__27736.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27736.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27732,other27733){
var self__ = this;
var this27732__$1 = this;
return (!((other27733 == null))) && ((this27732__$1.constructor === other27733.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27732__$1.vs,other27733.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27732__$1.__extmap,other27733.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27730){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27737 = cljs.core.keyword_identical_QMARK_;
var expr__27738 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27740 = cljs.core.cst$kw$vs;
var G__27741 = expr__27738;
return (pred__27737.cljs$core$IFn$_invoke$arity$2 ? pred__27737.cljs$core$IFn$_invoke$arity$2(G__27740,G__27741) : pred__27737.call(null,G__27740,G__27741));
})())){
return (new schema.core.EnumSchema(G__27730,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27730),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27730){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__27730,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27728_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__27728_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27729_SHARP_){
var x__9034__auto__ = self__.vs;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27729_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__27734){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__27734),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27734,cljs.core.cst$kw$vs)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__9339__auto__ = [];
var len__9332__auto___27744 = arguments.length;
var i__9333__auto___27745 = (0);
while(true){
if((i__9333__auto___27745 < len__9332__auto___27744)){
args__9339__auto__.push((arguments[i__9333__auto___27745]));

var G__27746 = (i__9333__auto___27745 + (1));
i__9333__auto___27745 = G__27746;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq27743){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27743));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27749,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27753 = k27749;
var G__27753__$1 = (((G__27753 instanceof cljs.core.Keyword))?G__27753.fqn:null);
switch (G__27753__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27749,else__8776__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Predicate{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27748){
var self__ = this;
var G__27748__$1 = this;
return (new cljs.core.RecordIter((0),G__27748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27754 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27754.cljs$core$IFn$_invoke$arity$1 ? fexpr__27754.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27754.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27750,other27751){
var self__ = this;
var this27750__$1 = this;
return (!((other27751 == null))) && ((this27750__$1.constructor === other27751.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27750__$1.p_QMARK_,other27751.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27750__$1.pred_name,other27751.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27750__$1.__extmap,other27751.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27748){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27755 = cljs.core.keyword_identical_QMARK_;
var expr__27756 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27758 = cljs.core.cst$kw$p_QMARK_;
var G__27759 = expr__27756;
return (pred__27755.cljs$core$IFn$_invoke$arity$2 ? pred__27755.cljs$core$IFn$_invoke$arity$2(G__27758,G__27759) : pred__27755.call(null,G__27758,G__27759));
})())){
return (new schema.core.Predicate(G__27748,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27760 = cljs.core.cst$kw$pred_DASH_name;
var G__27761 = expr__27756;
return (pred__27755.cljs$core$IFn$_invoke$arity$2 ? pred__27755.cljs$core$IFn$_invoke$arity$2(G__27760,G__27761) : pred__27755.call(null,G__27760,G__27761));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__27748,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27748),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27748){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__27748,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__27747_SHARP_){
var x__9034__auto__ = self__.pred_name;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27747_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj((function (){var x__9034__auto__ = self__.pred_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__27752){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27752),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__27752),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27752,cljs.core.cst$kw$p_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_DASH_name], 0))),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__27764 = arguments.length;
switch (G__27764) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27769,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27773 = k27769;
var G__27773__$1 = (((G__27773 instanceof cljs.core.Keyword))?G__27773.fqn:null);
switch (G__27773__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27769,else__8776__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Protocol{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27768){
var self__ = this;
var G__27768__$1 = this;
return (new cljs.core.RecordIter((0),G__27768__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27774 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27774.cljs$core$IFn$_invoke$arity$1 ? fexpr__27774.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27774.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27770,other27771){
var self__ = this;
var this27770__$1 = this;
return (!((other27771 == null))) && ((this27770__$1.constructor === other27771.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27770__$1.p,other27771.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27770__$1.__extmap,other27771.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27768){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27775 = cljs.core.keyword_identical_QMARK_;
var expr__27776 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27778 = cljs.core.cst$kw$p;
var G__27779 = expr__27776;
return (pred__27775.cljs$core$IFn$_invoke$arity$2 ? pred__27775.cljs$core$IFn$_invoke$arity$2(G__27778,G__27779) : pred__27775.call(null,G__27778,G__27779));
})())){
return (new schema.core.Protocol(G__27768,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27768),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27768){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__27768,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27766_SHARP_){
var fexpr__27780 = cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__27780.cljs$core$IFn$_invoke$arity$1 ? fexpr__27780.cljs$core$IFn$_invoke$arity$1(p1__27766_SHARP_) : fexpr__27780.call(null,p1__27766_SHARP_));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27767_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27767_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__27772){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__27772),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27772,cljs.core.cst$kw$p)),null));
});

RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27782_SHARP_){
return cljs.core.re_find(this$__$1,p1__27782_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27783_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(this$__$1);
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27783_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join('').slice((1),(-1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core27786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core27786 = (function (meta27787){
this.meta27787 = meta27787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.core.t_schema$core27786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27788,meta27787__$1){
var self__ = this;
var _27788__$1 = this;
return (new schema.core.t_schema$core27786(meta27787__$1));
});

schema.core.t_schema$core27786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27788){
var self__ = this;
var _27788__$1 = this;
return self__.meta27787;
});

schema.core.t_schema$core27786.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.t_schema$core27786.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__27784_SHARP_){
return (p1__27784_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__27785_SHARP_){
return cljs.core._conj(cljs.core._conj((function (){var x__9034__auto__ = p1__27785_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core27786.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core27786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta27787], null);
});

schema.core.t_schema$core27786.cljs$lang$type = true;

schema.core.t_schema$core27786.cljs$lang$ctorStr = "schema.core/t_schema$core27786";

schema.core.t_schema$core27786.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"schema.core/t_schema$core27786");
});

schema.core.__GT_t_schema$core27786 = (function schema$core$__GT_t_schema$core27786(meta27787){
return (new schema.core.t_schema$core27786(meta27787));
});

}

return (new schema.core.t_schema$core27786(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27790,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27794 = k27790;
var G__27794__$1 = (((G__27794 instanceof cljs.core.Keyword))?G__27794.fqn:null);
switch (G__27794__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27790,else__8776__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Maybe{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27789){
var self__ = this;
var G__27789__$1 = this;
return (new cljs.core.RecordIter((0),G__27789__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27795 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27795.cljs$core$IFn$_invoke$arity$1 ? fexpr__27795.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27795.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27791,other27792){
var self__ = this;
var this27791__$1 = this;
return (!((other27792 == null))) && ((this27791__$1.constructor === other27792.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27791__$1.schema,other27792.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27791__$1.__extmap,other27792.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27789){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27796 = cljs.core.keyword_identical_QMARK_;
var expr__27797 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27799 = cljs.core.cst$kw$schema;
var G__27800 = expr__27797;
return (pred__27796.cljs$core$IFn$_invoke$arity$2 ? pred__27796.cljs$core$IFn$_invoke$arity$2(G__27799,G__27800) : pred__27796.call(null,G__27799,G__27800));
})())){
return (new schema.core.Maybe(G__27789,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27789),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27789){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__27789,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__27793){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__27793),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27793,cljs.core.cst$kw$schema)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27804,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27808 = k27804;
var G__27808__$1 = (((G__27808 instanceof cljs.core.Keyword))?G__27808.fqn:null);
switch (G__27808__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27804,else__8776__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.NamedSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27803){
var self__ = this;
var G__27803__$1 = this;
return (new cljs.core.RecordIter((0),G__27803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27809 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27809.cljs$core$IFn$_invoke$arity$1 ? fexpr__27809.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27809.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27805,other27806){
var self__ = this;
var this27805__$1 = this;
return (!((other27806 == null))) && ((this27805__$1.constructor === other27806.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27805__$1.schema,other27806.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27805__$1.name,other27806.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27805__$1.__extmap,other27806.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27803){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27810 = cljs.core.keyword_identical_QMARK_;
var expr__27811 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27813 = cljs.core.cst$kw$schema;
var G__27814 = expr__27811;
return (pred__27810.cljs$core$IFn$_invoke$arity$2 ? pred__27810.cljs$core$IFn$_invoke$arity$2(G__27813,G__27814) : pred__27810.call(null,G__27813,G__27814));
})())){
return (new schema.core.NamedSchema(G__27803,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27815 = cljs.core.cst$kw$name;
var G__27816 = expr__27811;
return (pred__27810.cljs$core$IFn$_invoke$arity$2 ? pred__27810.cljs$core$IFn$_invoke$arity$2(G__27815,G__27816) : pred__27810.call(null,G__27815,G__27816));
})())){
return (new schema.core.NamedSchema(self__.schema,G__27803,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27803),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27803){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__27803,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__27802_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__27802_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9034__auto____$1 = self__.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__27807){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__27807),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__27807),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27807,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name], 0))),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27820,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27824 = k27820;
var G__27824__$1 = (((G__27824 instanceof cljs.core.Keyword))?G__27824.fqn:null);
switch (G__27824__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27820,else__8776__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Either{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27819){
var self__ = this;
var G__27819__$1 = this;
return (new cljs.core.RecordIter((0),G__27819__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27825 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27825.cljs$core$IFn$_invoke$arity$1 ? fexpr__27825.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27825.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27821,other27822){
var self__ = this;
var this27821__$1 = this;
return (!((other27822 == null))) && ((this27821__$1.constructor === other27822.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27821__$1.schemas,other27822.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27821__$1.__extmap,other27822.__extmap));
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27819){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27826 = cljs.core.keyword_identical_QMARK_;
var expr__27827 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27829 = cljs.core.cst$kw$schemas;
var G__27830 = expr__27827;
return (pred__27826.cljs$core$IFn$_invoke$arity$2 ? pred__27826.cljs$core$IFn$_invoke$arity$2(G__27829,G__27830) : pred__27826.call(null,G__27829,G__27830));
})())){
return (new schema.core.Either(G__27819,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27819),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27819){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__27819,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__8962__auto__ = ((function (this$__$1){
return (function schema$core$iter__27831(s__27832){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__27832__$1 = s__27832;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27832__$1);
if(temp__5278__auto__){
var s__27832__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27832__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__27832__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__27834 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__27833 = (0);
while(true){
if((i__27833 < size__8961__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__27833);
cljs.core.chunk_append(b__27834,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__27836 = (i__27833 + (1));
i__27833 = G__27836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27834),schema$core$iter__27831(cljs.core.chunk_rest(s__27832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27834),null);
}
} else {
var s = cljs.core.first(s__27832__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__27831(cljs.core.rest(s__27832__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__8962__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__27818_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = p1__27818_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__27823){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__27823),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27823,cljs.core.cst$kw$schemas)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__9339__auto__ = [];
var len__9332__auto___27838 = arguments.length;
var i__9333__auto___27839 = (0);
while(true){
if((i__9333__auto___27839 < len__9332__auto___27838)){
args__9339__auto__.push((arguments[i__9333__auto___27839]));

var G__27840 = (i__9333__auto___27839 + (1));
i__9333__auto___27839 = G__27840;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq27837){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27837));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27843,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27847 = k27843;
var G__27847__$1 = (((G__27847 instanceof cljs.core.Keyword))?G__27847.fqn:null);
switch (G__27847__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27843,else__8776__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27842){
var self__ = this;
var G__27842__$1 = this;
return (new cljs.core.RecordIter((0),G__27842__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27848 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27848.cljs$core$IFn$_invoke$arity$1 ? fexpr__27848.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27848.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27844,other27845){
var self__ = this;
var this27844__$1 = this;
return (!((other27845 == null))) && ((this27844__$1.constructor === other27845.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27844__$1.preds_and_schemas,other27845.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27844__$1.error_symbol,other27845.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27844__$1.__extmap,other27845.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27842){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27849 = cljs.core.keyword_identical_QMARK_;
var expr__27850 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27852 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__27853 = expr__27850;
return (pred__27849.cljs$core$IFn$_invoke$arity$2 ? pred__27849.cljs$core$IFn$_invoke$arity$2(G__27852,G__27853) : pred__27849.call(null,G__27852,G__27853));
})())){
return (new schema.core.ConditionalSchema(G__27842,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27854 = cljs.core.cst$kw$error_DASH_symbol;
var G__27855 = expr__27850;
return (pred__27849.cljs$core$IFn$_invoke$arity$2 ? pred__27849.cljs$core$IFn$_invoke$arity$2(G__27854,G__27855) : pred__27849.call(null,G__27854,G__27855));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__27842,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27842),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27842){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__27842,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__8962__auto__ = ((function (this$__$1){
return (function schema$core$iter__27856(s__27857){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__27857__$1 = s__27857;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27857__$1);
if(temp__5278__auto__){
var s__27857__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27857__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__27857__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__27859 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__27858 = (0);
while(true){
if((i__27858 < size__8961__auto__)){
var vec__27860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__27858);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(1),null);
cljs.core.chunk_append(b__27859,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__27871 = (i__27858 + (1));
i__27858 = G__27871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27859),schema$core$iter__27856(cljs.core.chunk_rest(s__27857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27859),null);
}
} else {
var vec__27863 = cljs.core.first(s__27857__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27863,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27863,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__27856(cljs.core.rest(s__27857__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__8962__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__27841_SHARP_){
var x__9034__auto__ = (function (){var or__8099__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})();
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27841_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__27866){
var vec__27867 = p__27866;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__27846){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__27846),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__27846),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27846,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_symbol], 0))),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__9339__auto__ = [];
var len__9332__auto___27883 = arguments.length;
var i__9333__auto___27884 = (0);
while(true){
if((i__9333__auto___27884 < len__9332__auto___27883)){
args__9339__auto__.push((arguments[i__9333__auto___27884]));

var G__27885 = (i__9333__auto___27884 + (1));
i__9333__auto___27884 = G__27885;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__8962__auto__ = (function schema$core$iter__27873(s__27874){
return (new cljs.core.LazySeq(null,(function (){
var s__27874__$1 = s__27874;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27874__$1);
if(temp__5278__auto__){
var s__27874__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27874__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__27874__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__27876 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__27875 = (0);
while(true){
if((i__27875 < size__8961__auto__)){
var vec__27877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__27875);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27877,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27877,(1),null);
cljs.core.chunk_append(b__27876,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conditional predicate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" must be a function")].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__27886 = (i__27875 + (1));
i__27875 = G__27886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27876),schema$core$iter__27873(cljs.core.chunk_rest(s__27874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27876),null);
}
} else {
var vec__27880 = cljs.core.first(s__27874__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conditional predicate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" must be a function")].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__27873(cljs.core.rest(s__27874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq27872){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27872));
});


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (schema.core.precondition[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (schema.core.precondition["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__8962__auto__ = ((function (this$__$1){
return (function schema$core$iter__27887(s__27888){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__27888__$1 = s__27888;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27888__$1);
if(temp__5278__auto__){
var s__27888__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27888__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__27888__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__27890 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__27889 = (0);
while(true){
if((i__27889 < size__8961__auto__)){
var map__27891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__27889);
var map__27891__$1 = ((((!((map__27891 == null)))?((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27891):map__27891);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__27890,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__27895 = (i__27889 + (1));
i__27889 = G__27895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27890),schema$core$iter__27887(cljs.core.chunk_rest(s__27888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27890),null);
}
} else {
var map__27893 = cljs.core.first(s__27888__$2);
var map__27893__$1 = ((((!((map__27893 == null)))?((((map__27893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27893):map__27893);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27893__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__27887(cljs.core.rest(s__27888__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__8962__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27898,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27902 = k27898;
var G__27902__$1 = (((G__27902 instanceof cljs.core.Keyword))?G__27902.fqn:null);
switch (G__27902__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27898,else__8776__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.CondPre{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27897){
var self__ = this;
var G__27897__$1 = this;
return (new cljs.core.RecordIter((0),G__27897__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27903 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27903.cljs$core$IFn$_invoke$arity$1 ? fexpr__27903.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27903.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27899,other27900){
var self__ = this;
var this27899__$1 = this;
return (!((other27900 == null))) && ((this27899__$1.constructor === other27900.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27899__$1.schemas,other27900.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27899__$1.__extmap,other27900.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27897){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27904 = cljs.core.keyword_identical_QMARK_;
var expr__27905 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27907 = cljs.core.cst$kw$schemas;
var G__27908 = expr__27905;
return (pred__27904.cljs$core$IFn$_invoke$arity$2 ? pred__27904.cljs$core$IFn$_invoke$arity$2(G__27907,G__27908) : pred__27904.call(null,G__27907,G__27908));
})())){
return (new schema.core.CondPre(G__27897,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27897),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27897){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__27897,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__8962__auto__ = ((function (this$__$1){
return (function schema$core$iter__27909(s__27910){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__27910__$1 = s__27910;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27910__$1);
if(temp__5278__auto__){
var s__27910__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27910__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__27910__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__27912 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__27911 = (0);
while(true){
if((i__27911 < size__8961__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__27911);
cljs.core.chunk_append(b__27912,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__27914 = (i__27911 + (1));
i__27911 = G__27914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27912),schema$core$iter__27909(cljs.core.chunk_rest(s__27910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27912),null);
}
} else {
var s = cljs.core.first(s__27910__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__27909(cljs.core.rest(s__27910__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__8962__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__27896_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = p1__27896_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__27901){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__27901),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27901,cljs.core.cst$kw$schemas)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__9339__auto__ = [];
var len__9332__auto___27916 = arguments.length;
var i__9333__auto___27917 = (0);
while(true){
if((i__9333__auto___27917 < len__9332__auto___27916)){
args__9339__auto__.push((arguments[i__9333__auto___27917]));

var G__27918 = (i__9333__auto___27917 + (1));
i__9333__auto___27917 = G__27918;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq27915){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27915));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27921,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27925 = k27921;
var G__27925__$1 = (((G__27925 instanceof cljs.core.Keyword))?G__27925.fqn:null);
switch (G__27925__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27921,else__8776__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Constrained{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27920){
var self__ = this;
var G__27920__$1 = this;
return (new cljs.core.RecordIter((0),G__27920__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27926 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27926.cljs$core$IFn$_invoke$arity$1 ? fexpr__27926.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27926.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27922,other27923){
var self__ = this;
var this27922__$1 = this;
return (!((other27923 == null))) && ((this27922__$1.constructor === other27923.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27922__$1.schema,other27923.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27922__$1.postcondition,other27923.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27922__$1.post_name,other27923.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27922__$1.__extmap,other27923.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27920){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27927 = cljs.core.keyword_identical_QMARK_;
var expr__27928 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27930 = cljs.core.cst$kw$schema;
var G__27931 = expr__27928;
return (pred__27927.cljs$core$IFn$_invoke$arity$2 ? pred__27927.cljs$core$IFn$_invoke$arity$2(G__27930,G__27931) : pred__27927.call(null,G__27930,G__27931));
})())){
return (new schema.core.Constrained(G__27920,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27932 = cljs.core.cst$kw$postcondition;
var G__27933 = expr__27928;
return (pred__27927.cljs$core$IFn$_invoke$arity$2 ? pred__27927.cljs$core$IFn$_invoke$arity$2(G__27932,G__27933) : pred__27927.call(null,G__27932,G__27933));
})())){
return (new schema.core.Constrained(self__.schema,G__27920,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27934 = cljs.core.cst$kw$post_DASH_name;
var G__27935 = expr__27928;
return (pred__27927.cljs$core$IFn$_invoke$arity$2 ? pred__27927.cljs$core$IFn$_invoke$arity$2(G__27934,G__27935) : pred__27927.call(null,G__27934,G__27935));
})())){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__27920,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27920),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27920){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__27920,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__27919_SHARP_){
var x__9034__auto__ = self__.post_name;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__27919_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9034__auto____$1 = self__.post_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$constrained);
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__27924){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__27924),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__27924),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__27924),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27924,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0))),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__27938 = arguments.length;
switch (G__27938) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27942,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27946 = k27942;
var G__27946__$1 = (((G__27946 instanceof cljs.core.Keyword))?G__27946.fqn:null);
switch (G__27946__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27942,else__8776__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__27947 = (function (){var or__8099__auto__ = tx;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27947) : f.call(null,G__27947));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__27940_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__27940_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Both{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27941){
var self__ = this;
var G__27941__$1 = this;
return (new cljs.core.RecordIter((0),G__27941__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27948 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27948.cljs$core$IFn$_invoke$arity$1 ? fexpr__27948.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27948.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27943,other27944){
var self__ = this;
var this27943__$1 = this;
return (!((other27944 == null))) && ((this27943__$1.constructor === other27944.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27943__$1.schemas,other27944.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27943__$1.__extmap,other27944.__extmap));
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27941){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27949 = cljs.core.keyword_identical_QMARK_;
var expr__27950 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27952 = cljs.core.cst$kw$schemas;
var G__27953 = expr__27950;
return (pred__27949.cljs$core$IFn$_invoke$arity$2 ? pred__27949.cljs$core$IFn$_invoke$arity$2(G__27952,G__27953) : pred__27949.call(null,G__27952,G__27953));
})())){
return (new schema.core.Both(G__27941,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27941),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27941){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__27941,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__27945){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__27945),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27945,cljs.core.cst$kw$schemas)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__9339__auto__ = [];
var len__9332__auto___27956 = arguments.length;
var i__9333__auto___27957 = (0);
while(true){
if((i__9333__auto___27957 < len__9332__auto___27956)){
args__9339__auto__.push((arguments[i__9333__auto___27957]));

var G__27958 = (i__9333__auto___27957 + (1));
i__9333__auto___27957 = G__27958;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq27955){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27955));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__27959 = cljs.core.meta(v);
var map__27959__$1 = ((((!((map__27959 == null)))?((((map__27959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27959):map__27959);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27962,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27966 = k27962;
var G__27966__$1 = (((G__27966 instanceof cljs.core.Keyword))?G__27966.fqn:null);
switch (G__27966__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27962,else__8776__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Recursive{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27961){
var self__ = this;
var G__27961__$1 = this;
return (new cljs.core.RecordIter((0),G__27961__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27967 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27967.cljs$core$IFn$_invoke$arity$1 ? fexpr__27967.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27967.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27963,other27964){
var self__ = this;
var this27963__$1 = this;
return (!((other27964 == null))) && ((this27963__$1.constructor === other27964.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27963__$1.derefable,other27964.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27963__$1.__extmap,other27964.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27961){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27968 = cljs.core.keyword_identical_QMARK_;
var expr__27969 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27971 = cljs.core.cst$kw$derefable;
var G__27972 = expr__27969;
return (pred__27968.cljs$core$IFn$_invoke$arity$2 ? pred__27968.cljs$core$IFn$_invoke$arity$2(G__27971,G__27972) : pred__27968.call(null,G__27971,G__27972));
})())){
return (new schema.core.Recursive(G__27961,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27961),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27961){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__27961,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.deref(self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = (((self__.derefable instanceof cljs.core.Var))?cljs.core._conj((function (){var x__9034__auto__ = schema.core.var_name(self__.derefable);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__27965){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__27965),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27965,cljs.core.cst$kw$derefable)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$)))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27977,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27981 = k27977;
var G__27981__$1 = (((G__27981 instanceof cljs.core.Keyword))?G__27981.fqn:null);
switch (G__27981__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27977,else__8776__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Atomic{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27976){
var self__ = this;
var G__27976__$1 = this;
return (new cljs.core.RecordIter((0),G__27976__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27982 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27982.cljs$core$IFn$_invoke$arity$1 ? fexpr__27982.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27982.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27978,other27979){
var self__ = this;
var this27978__$1 = this;
return (!((other27979 == null))) && ((this27978__$1.constructor === other27979.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27978__$1.schema,other27979.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27978__$1.__extmap,other27979.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27976){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27983 = cljs.core.keyword_identical_QMARK_;
var expr__27984 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__27986 = cljs.core.cst$kw$schema;
var G__27987 = expr__27984;
return (pred__27983.cljs$core$IFn$_invoke$arity$2 ? pred__27983.cljs$core$IFn$_invoke$arity$2(G__27986,G__27987) : pred__27983.call(null,G__27986,G__27987));
})())){
return (new schema.core.Atomic(G__27976,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27976),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27976){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__27976,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__27988_27990 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__27988_27990) : item_fn.call(null,G__27988_27990));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$atom);
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__27980){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__27980),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27980,cljs.core.cst$kw$schema)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k27992,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__27996 = k27992;
var G__27996__$1 = (((G__27996 instanceof cljs.core.Keyword))?G__27996.fqn:null);
switch (G__27996__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27992,else__8776__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.RequiredKey{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27991){
var self__ = this;
var G__27991__$1 = this;
return (new cljs.core.RecordIter((0),G__27991__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__27997 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__27997.cljs$core$IFn$_invoke$arity$1 ? fexpr__27997.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__27997.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27993,other27994){
var self__ = this;
var this27993__$1 = this;
return (!((other27994 == null))) && ((this27993__$1.constructor === other27994.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.k,other27994.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27993__$1.__extmap,other27994.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__27991){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__27998 = cljs.core.keyword_identical_QMARK_;
var expr__27999 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28001 = cljs.core.cst$kw$k;
var G__28002 = expr__27999;
return (pred__27998.cljs$core$IFn$_invoke$arity$2 ? pred__27998.cljs$core$IFn$_invoke$arity$2(G__28001,G__28002) : pred__27998.call(null,G__28001,G__28002));
})())){
return (new schema.core.RequiredKey(G__27991,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__27991),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__27991){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__27991,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__27995){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__27995),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27995,cljs.core.cst$kw$k)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28005,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28009 = k28005;
var G__28009__$1 = (((G__28009 instanceof cljs.core.Keyword))?G__28009.fqn:null);
switch (G__28009__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28005,else__8776__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.OptionalKey{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28004){
var self__ = this;
var G__28004__$1 = this;
return (new cljs.core.RecordIter((0),G__28004__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28010 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28010.cljs$core$IFn$_invoke$arity$1 ? fexpr__28010.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28010.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28006,other28007){
var self__ = this;
var this28006__$1 = this;
return (!((other28007 == null))) && ((this28006__$1.constructor === other28007.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28006__$1.k,other28007.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28006__$1.__extmap,other28007.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28004){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28011 = cljs.core.keyword_identical_QMARK_;
var expr__28012 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28014 = cljs.core.cst$kw$k;
var G__28015 = expr__28012;
return (pred__28011.cljs$core$IFn$_invoke$arity$2 ? pred__28011.cljs$core$IFn$_invoke$arity$2(G__28014,G__28015) : pred__28011.call(null,G__28014,G__28015));
})())){
return (new schema.core.OptionalKey(G__28004,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28004),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28004){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__28004,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__28008){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__28008),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28008,cljs.core.cst$kw$k)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__8099__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__28017){
var vec__28018 = p__28017;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(1),null);
var coll = vec__28018;
return cljs.core.vec(coll);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28022,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28026 = k28022;
var G__28026__$1 = (((G__28026 instanceof cljs.core.Keyword))?G__28026.fqn:null);
switch (G__28026__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28022,else__8776__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.MapEntry{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28021){
var self__ = this;
var G__28021__$1 = this;
return (new cljs.core.RecordIter((0),G__28021__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28027 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28027.cljs$core$IFn$_invoke$arity$1 ? fexpr__28027.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28027.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28023,other28024){
var self__ = this;
var this28023__$1 = this;
return (!((other28024 == null))) && ((this28023__$1.constructor === other28024.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28023__$1.key_schema,other28024.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28023__$1.val_schema,other28024.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28023__$1.__extmap,other28024.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28021){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28028 = cljs.core.keyword_identical_QMARK_;
var expr__28029 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28031 = cljs.core.cst$kw$key_DASH_schema;
var G__28032 = expr__28029;
return (pred__28028.cljs$core$IFn$_invoke$arity$2 ? pred__28028.cljs$core$IFn$_invoke$arity$2(G__28031,G__28032) : pred__28028.call(null,G__28031,G__28032));
})())){
return (new schema.core.MapEntry(G__28021,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28033 = cljs.core.cst$kw$val_DASH_schema;
var G__28034 = expr__28029;
return (pred__28028.cljs$core$IFn$_invoke$arity$2 ? pred__28028.cljs$core$IFn$_invoke$arity$2(G__28033,G__28034) : pred__28028.call(null,G__28033,G__28034));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__28021,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28021),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28021){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__28021,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__28035_28046 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28035_28046) : item_fn.call(null,G__28035_28046));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__28036_28047 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28036_28047) : item_fn.call(null,G__28036_28047));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__28037,p__28038,_){
var vec__28039 = p__28037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28039,(0),null);
var vec__28042 = p__28038;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042,(1),null);
var temp__5276__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__5276__auto__)){
var k_err = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.key_schema);
return cljs.core._conj((function (){var x__9034__auto____$1 = schema.core.explain(self__.val_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__28025){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__28025),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__28025),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28025,cljs.core.cst$kw$key_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val_DASH_schema], 0))),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
var x__9034__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null));
return cljs.core._conj((function (){var x__9034__auto____$1 = schema.core.explicit_schema_key(kspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_28061 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__28048_SHARP_){
return (cljs.core.count(p1__28048_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_28061)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_28061], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__8962__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__28049(s__28050){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__28050__$1 = s__28050;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__28050__$1);
if(temp__5278__auto__){
var s__28050__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28050__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__28050__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__28052 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__28051 = (0);
while(true){
if((i__28051 < size__8961__auto__)){
var vec__28053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__28051);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(1),null);
cljs.core.chunk_append(b__28052,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__28051,rk,required_QMARK_,vec__28053,k,v,c__8960__auto__,size__8961__auto__,b__28052,s__28050__$2,temp__5278__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__28056_28062 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28056_28062) : item_fn.call(null,G__28056_28062));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__28051,rk,required_QMARK_,vec__28053,k,v,c__8960__auto__,size__8961__auto__,b__28052,s__28050__$2,temp__5278__auto__,extra_keys_schema))
);
})());

var G__28063 = (i__28051 + (1));
i__28051 = G__28063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28052),schema$core$map_elements_$_iter__28049(cljs.core.chunk_rest(s__28050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28052),null);
}
} else {
var vec__28057 = cljs.core.first(s__28050__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__28057,k,v,s__28050__$2,temp__5278__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__28060_28064 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28060_28064) : item_fn.call(null,G__28060_28064));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__28057,k,v,s__28050__$2,temp__5278__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__28049(cljs.core.rest(s__28050__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__8962__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__8962__auto__ = (function schema$core$map_error_$_iter__28065(s__28066){
return (new cljs.core.LazySeq(null,(function (){
var s__28066__$1 = s__28066;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__28066__$1);
if(temp__5278__auto__){
var s__28066__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28066__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__28066__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__28068 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__28067 = (0);
while(true){
if((i__28067 < size__8961__auto__)){
var vec__28069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__28067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(1),null);
cljs.core.chunk_append(b__28068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__28075 = (i__28067 + (1));
i__28067 = G__28075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28068),schema$core$map_error_$_iter__28065(cljs.core.chunk_rest(s__28066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28068),null);
}
} else {
var vec__28072 = cljs.core.first(s__28066__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__28065(cljs.core.rest(s__28066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__28076_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__28076_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8962__auto__ = (function schema$core$map_explain_$_iter__28077(s__28078){
return (new cljs.core.LazySeq(null,(function (){
var s__28078__$1 = s__28078;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__28078__$1);
if(temp__5278__auto__){
var s__28078__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28078__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__28078__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__28080 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__28079 = (0);
while(true){
if((i__28079 < size__8961__auto__)){
var vec__28081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__28079);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(1),null);
cljs.core.chunk_append(b__28080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__28087 = (i__28079 + (1));
i__28079 = G__28087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28080),schema$core$map_explain_$_iter__28077(cljs.core.chunk_rest(s__28078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28080),null);
}
} else {
var vec__28084 = cljs.core.first(s__28078__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__28077(cljs.core.rest(s__28078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28089,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28093 = k28089;
var G__28093__$1 = (((G__28093 instanceof cljs.core.Keyword))?G__28093.fqn:null);
switch (G__28093__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28089,else__8776__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Queue{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28088){
var self__ = this;
var G__28088__$1 = this;
return (new cljs.core.RecordIter((0),G__28088__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28094 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28094.cljs$core$IFn$_invoke$arity$1 ? fexpr__28094.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28094.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28090,other28091){
var self__ = this;
var this28090__$1 = this;
return (!((other28091 == null))) && ((this28090__$1.constructor === other28091.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.schema,other28091.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28090__$1.__extmap,other28091.__extmap));
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28088){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28095 = cljs.core.keyword_identical_QMARK_;
var expr__28096 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28098 = cljs.core.cst$kw$schema;
var G__28099 = expr__28096;
return (pred__28095.cljs$core$IFn$_invoke$arity$2 ? pred__28095.cljs$core$IFn$_invoke$arity$2(G__28098,G__28099) : pred__28095.call(null,G__28098,G__28099));
})())){
return (new schema.core.Queue(G__28088,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28088),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28088){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__28088,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__28092){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__28092),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28092,cljs.core.cst$kw$schema)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28102,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28106 = k28102;
var G__28106__$1 = (((G__28106 instanceof cljs.core.Keyword))?G__28106.fqn:null);
switch (G__28106__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28102,else__8776__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.One{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28101){
var self__ = this;
var G__28101__$1 = this;
return (new cljs.core.RecordIter((0),G__28101__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28107 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28107.cljs$core$IFn$_invoke$arity$1 ? fexpr__28107.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28107.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28103,other28104){
var self__ = this;
var this28103__$1 = this;
return (!((other28104 == null))) && ((this28103__$1.constructor === other28104.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28103__$1.schema,other28104.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28103__$1.optional_QMARK_,other28104.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28103__$1.name,other28104.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28103__$1.__extmap,other28104.__extmap));
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28101){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28108 = cljs.core.keyword_identical_QMARK_;
var expr__28109 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28111 = cljs.core.cst$kw$schema;
var G__28112 = expr__28109;
return (pred__28108.cljs$core$IFn$_invoke$arity$2 ? pred__28108.cljs$core$IFn$_invoke$arity$2(G__28111,G__28112) : pred__28108.call(null,G__28111,G__28112));
})())){
return (new schema.core.One(G__28101,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28113 = cljs.core.cst$kw$optional_QMARK_;
var G__28114 = expr__28109;
return (pred__28108.cljs$core$IFn$_invoke$arity$2 ? pred__28108.cljs$core$IFn$_invoke$arity$2(G__28113,G__28114) : pred__28108.call(null,G__28113,G__28114));
})())){
return (new schema.core.One(self__.schema,G__28101,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28115 = cljs.core.cst$kw$name;
var G__28116 = expr__28109;
return (pred__28108.cljs$core$IFn$_invoke$arity$2 ? pred__28108.cljs$core$IFn$_invoke$arity$2(G__28115,G__28116) : pred__28108.call(null,G__28115,G__28116));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__28101,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28101),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28101){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__28101,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__28105){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__28105),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28105),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__28105),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28105,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0))),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__28121 = cljs.core.split_with((function (p1__28118_SHARP_){
return ((p1__28118_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__28118_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(1),null);
var vec__28124 = cljs.core.split_with(((function (vec__28121,required,more){
return (function (p1__28119_SHARP_){
var and__8087__auto__ = (p1__28119_SHARP_ instanceof schema.core.One);
if(and__8087__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__28119_SHARP_);
} else {
return and__8087__auto__;
}
});})(vec__28121,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28124,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28124,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__28121,required,more,vec__28124,optional,more__$1){
return (function (p1__28120_SHARP_){
return !((p1__28120_SHARP_ instanceof schema.core.One));
});})(vec__28121,required,more,vec__28124,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__28127_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = p1__28127_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__28128 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__28128,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),((function (vec__28128,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5276__auto__ = cljs.core.seq(x);
if(temp__5276__auto__){
var x__$1 = temp__5276__auto__;
var G__28131_28141 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28131_28141) : item_fn.call(null,G__28131_28141));

return cljs.core.rest(x__$1);
} else {
var G__28132_28142 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__5276__auto__,vec__28128,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9034__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(temp__5276__auto__,vec__28128,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28132_28142) : item_fn.call(null,G__28132_28142));

return null;
}
});})(vec__28128,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),((function (vec__28128,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5278__auto__ = cljs.core.seq(x);
if(temp__5278__auto__){
var x__$1 = temp__5278__auto__;
var G__28133_28143 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__28133_28143) : item_fn.call(null,G__28133_28143));

return cljs.core.rest(x__$1);
} else {
return null;
}
});})(vec__28128,singles,multi,this$__$1))
,more)], null);
}
});})(vec__28128,singles,multi,this$__$1))
,(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9034__auto__ = cljs.core.count(extra);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__28134 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__8962__auto__ = ((function (vec__28134,singles,multi,this$__$1){
return (function schema$core$iter__28137(s__28138){
return (new cljs.core.LazySeq(null,((function (vec__28134,singles,multi,this$__$1){
return (function (){
var s__28138__$1 = s__28138;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__28138__$1);
if(temp__5278__auto__){
var s__28138__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28138__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__28138__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__28140 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__28139 = (0);
while(true){
if((i__28139 < size__8961__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__28139);
cljs.core.chunk_append(b__28140,(function (){var x__9034__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9034__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9034__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$2);
})(),x__9034__auto____$1);
})(),x__9034__auto__);
})());

var G__28144 = (i__28139 + (1));
i__28139 = G__28144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28140),schema$core$iter__28137(cljs.core.chunk_rest(s__28138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28140),null);
}
} else {
var s = cljs.core.first(s__28138__$2);
return cljs.core.cons((function (){var x__9034__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9034__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9034__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$2);
})(),x__9034__auto____$1);
})(),x__9034__auto__);
})(),schema$core$iter__28137(cljs.core.rest(s__28138__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28134,singles,multi,this$__$1))
,null,null));
});})(vec__28134,singles,multi,this$__$1))
;
return iter__8962__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28149,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28153 = k28149;
var G__28153__$1 = (((G__28153 instanceof cljs.core.Keyword))?G__28153.fqn:null);
switch (G__28153__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28149,else__8776__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.Record{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28148){
var self__ = this;
var G__28148__$1 = this;
return (new cljs.core.RecordIter((0),G__28148__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28154 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28154.cljs$core$IFn$_invoke$arity$1 ? fexpr__28154.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28154.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28150,other28151){
var self__ = this;
var this28150__$1 = this;
return (!((other28151 == null))) && ((this28150__$1.constructor === other28151.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28150__$1.klass,other28151.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28150__$1.schema,other28151.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28150__$1.__extmap,other28151.__extmap));
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28148){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28155 = cljs.core.keyword_identical_QMARK_;
var expr__28156 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28158 = cljs.core.cst$kw$klass;
var G__28159 = expr__28156;
return (pred__28155.cljs$core$IFn$_invoke$arity$2 ? pred__28155.cljs$core$IFn$_invoke$arity$2(G__28158,G__28159) : pred__28155.call(null,G__28158,G__28159));
})())){
return (new schema.core.Record(G__28148,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28160 = cljs.core.cst$kw$schema;
var G__28161 = expr__28156;
return (pred__28155.cljs$core$IFn$_invoke$arity$2 ? pred__28155.cljs$core$IFn$_invoke$arity$2(G__28160,G__28161) : pred__28155.call(null,G__28160,G__28161));
})())){
return (new schema.core.Record(self__.klass,G__28148,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28148),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28148){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__28148,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__28145_SHARP_){
return (p1__28145_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__28146_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = self__.klass;
return cljs.core._conj((function (){var x__9034__auto____$1 = p1__28146_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__5276__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var evf = temp__5276__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__5276__auto__,p,this$__$1){
return (function (p1__28147_SHARP_){
return cljs.core._conj((function (){var x__9034__auto__ = p1__28147_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__5276__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9034__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0)));
return cljs.core._conj((function (){var x__9034__auto____$1 = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto____$1);
})(),x__9034__auto__);
})(),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__28152){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__28152),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__28152),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28152,cljs.core.cst$kw$klass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema], 0))),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__28165 = cljs.core.split_with((function (p1__28163_SHARP_){
return (p1__28163_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__28165,required,more){
return (function (p1__28164_SHARP_){
return schema.core.explain(p1__28164_SHARP_.schema);
});})(vec__28165,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k28169,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__28173 = k28169;
var G__28173__$1 = (((G__28173 instanceof cljs.core.Keyword))?G__28173.fqn:null);
switch (G__28173__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28169,else__8776__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#schema.core.FnSchema{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28168){
var self__ = this;
var G__28168__$1 = this;
return (new cljs.core.RecordIter((0),G__28168__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__28174 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__28174.cljs$core$IFn$_invoke$arity$1 ? fexpr__28174.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__28174.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28170,other28171){
var self__ = this;
var this28170__$1 = this;
return (!((other28171 == null))) && ((this28170__$1.constructor === other28171.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28170__$1.output_schema,other28171.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28170__$1.input_schemas,other28171.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28170__$1.__extmap,other28171.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__28168){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__28175 = cljs.core.keyword_identical_QMARK_;
var expr__28176 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__28178 = cljs.core.cst$kw$output_DASH_schema;
var G__28179 = expr__28176;
return (pred__28175.cljs$core$IFn$_invoke$arity$2 ? pred__28175.cljs$core$IFn$_invoke$arity$2(G__28178,G__28179) : pred__28175.call(null,G__28178,G__28179));
})())){
return (new schema.core.FnSchema(G__28168,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28180 = cljs.core.cst$kw$input_DASH_schemas;
var G__28181 = expr__28176;
return (pred__28175.cljs$core$IFn$_invoke$arity$2 ? pred__28175.cljs$core$IFn$_invoke$arity$2(G__28180,G__28181) : pred__28175.call(null,G__28180,G__28181));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__28168,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__28168),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__28168){
var self__ = this;
var this__8772__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__28168,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__26184__26185__auto__){
return cljs.core._conj((function (){var x__9034__auto__ = p1__26184__26185__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9034__auto__);
})(),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__28172){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__28172),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__28172),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28172,cljs.core.cst$kw$output_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_schemas], 0))),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__8099__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var m__25861__auto__ = cljs.core.meta(f);
var k__25862__auto__ = cljs.core.cst$kw$schema;
var temp__5276__auto__ = cljs.core.find(m__25861__auto__,k__25862__auto__);
if(cljs.core.truth_(temp__5276__auto__)){
var pair__25863__auto__ = temp__5276__auto__;
return cljs.core.val(pair__25863__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__25862__auto__,m__25861__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
