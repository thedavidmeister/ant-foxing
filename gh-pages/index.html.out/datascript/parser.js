// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
return null;
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
return null;
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return null;
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
return null;
});

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.parser._collect[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__8819__auto__.call(null,_,pred,acc));
} else {
var m__8819__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__8819__auto____$1.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__8819__auto__.call(null,_,acc));
} else {
var m__8819__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(_,acc) : m__8819__auto____$1.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.parser._postwalk[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__8819__auto__.call(null,_,f));
} else {
var m__8819__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(_,f) : m__8819__auto____$1.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23904_SHARP_,p2__23903_SHARP_){
var temp__5276__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__23903_SHARP_) : parse_el.call(null,p2__23903_SHARP_));
if(cljs.core.truth_(temp__5276__auto__)){
var parsed = temp__5276__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23904_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__23906 = arguments.length;
switch (G__23906) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = 3;

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__8099__auto__ = cljs.core.empty_QMARK_(coll);
if(or__8099__auto__){
return or__8099__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__23912 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23912) : f.call(null,G__23912));
} else {
if(cljs.core.map_QMARK_(form)){
var G__23913 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__23914){
var vec__23915 = p__23914;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23915,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23913) : f.call(null,G__23913));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__23918 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23909_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__23909_SHARP_,f) : datascript.parser.postwalk.call(null,p1__23909_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23918) : f.call(null,G__23918));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__23919 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23910_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__23910_SHARP_,f) : datascript.parser.postwalk.call(null,p1__23910_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23919) : f.call(null,G__23919));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__8099__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23924,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__23928 = k23924;
switch (G__23928) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23924,else__8776__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Placeholder{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23923){
var self__ = this;
var G__23923__$1 = this;
return (new cljs.core.RecordIter((0),G__23923__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__23929 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__23929.cljs$core$IFn$_invoke$arity$1 ? fexpr__23929.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__23929.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23925,other23926){
var self__ = this;
var this23925__$1 = this;
return (!((other23926 == null))) && ((this23925__$1.constructor === other23926.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23925__$1.__extmap,other23926.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23923){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__23930 = cljs.core.keyword_identical_QMARK_;
var expr__23931 = k__8781__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23923),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23923){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Placeholder(G__23923,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23920){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23921,acc23922){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23922;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23922){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23922;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__23927){
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23927)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23938,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__23942 = k23938;
var G__23942__$1 = (((G__23942 instanceof cljs.core.Keyword))?G__23942.fqn:null);
switch (G__23942__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23938,else__8776__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Variable{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23937){
var self__ = this;
var G__23937__$1 = this;
return (new cljs.core.RecordIter((0),G__23937__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__23943 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__23943.cljs$core$IFn$_invoke$arity$1 ? fexpr__23943.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__23943.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23939,other23940){
var self__ = this;
var this23939__$1 = this;
return (!((other23940 == null))) && ((this23939__$1.constructor === other23940.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23939__$1.symbol,other23940.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23939__$1.__extmap,other23940.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23937){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__23944 = cljs.core.keyword_identical_QMARK_;
var expr__23945 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__23947 = cljs.core.cst$kw$symbol;
var G__23948 = expr__23945;
return (pred__23944.cljs$core$IFn$_invoke$arity$2 ? pred__23944.cljs$core$IFn$_invoke$arity$2(G__23947,G__23948) : pred__23944.call(null,G__23947,G__23948));
})())){
return (new datascript.parser.Variable(G__23937,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23937),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23937){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__23937,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23934){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f23934),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23935,acc23936){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23935,self__.symbol,acc23936);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23936){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23936,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc23936,self__.symbol));
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__23941){
return (new datascript.parser.Variable(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__23941),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23941,cljs.core.cst$kw$symbol)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23954,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__23958 = k23954;
var G__23958__$1 = (((G__23958 instanceof cljs.core.Keyword))?G__23958.fqn:null);
switch (G__23958__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23954,else__8776__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.SrcVar{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23953){
var self__ = this;
var G__23953__$1 = this;
return (new cljs.core.RecordIter((0),G__23953__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__23959 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__23959.cljs$core$IFn$_invoke$arity$1 ? fexpr__23959.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__23959.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23955,other23956){
var self__ = this;
var this23955__$1 = this;
return (!((other23956 == null))) && ((this23955__$1.constructor === other23956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23955__$1.symbol,other23956.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23955__$1.__extmap,other23956.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23953){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__23960 = cljs.core.keyword_identical_QMARK_;
var expr__23961 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__23963 = cljs.core.cst$kw$symbol;
var G__23964 = expr__23961;
return (pred__23960.cljs$core$IFn$_invoke$arity$2 ? pred__23960.cljs$core$IFn$_invoke$arity$2(G__23963,G__23964) : pred__23960.call(null,G__23963,G__23964));
})())){
return (new datascript.parser.SrcVar(G__23953,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23953),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23953){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__23953,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23950){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f23950),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23951,acc23952){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23951,self__.symbol,acc23952);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23952){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23952,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc23952,self__.symbol));
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__23957){
return (new datascript.parser.SrcVar(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__23957),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23957,cljs.core.cst$kw$symbol)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23970,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__23974 = k23970;
switch (G__23974) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23970,else__8776__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23969){
var self__ = this;
var G__23969__$1 = this;
return (new cljs.core.RecordIter((0),G__23969__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__23975 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__23975.cljs$core$IFn$_invoke$arity$1 ? fexpr__23975.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__23975.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23971,other23972){
var self__ = this;
var this23971__$1 = this;
return (!((other23972 == null))) && ((this23971__$1.constructor === other23972.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23971__$1.__extmap,other23972.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23969){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__23976 = cljs.core.keyword_identical_QMARK_;
var expr__23977 = k__8781__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23969),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23969){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__23969,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23966){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23967,acc23968){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23968;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23968){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23968;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__23973){
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23973)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23984,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__23988 = k23984;
switch (G__23988) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23984,else__8776__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.RulesVar{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23983){
var self__ = this;
var G__23983__$1 = this;
return (new cljs.core.RecordIter((0),G__23983__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__23989 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__23989.cljs$core$IFn$_invoke$arity$1 ? fexpr__23989.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__23989.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23985,other23986){
var self__ = this;
var this23985__$1 = this;
return (!((other23986 == null))) && ((this23985__$1.constructor === other23986.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23985__$1.__extmap,other23986.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23983){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__23990 = cljs.core.keyword_identical_QMARK_;
var expr__23991 = k__8781__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23983),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23983){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.RulesVar(G__23983,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23980){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23981,acc23982){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23982;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23982){
var self__ = this;
var ___22719__auto____$1 = this;
return acc23982;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__23987){
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23987)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k23998,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24002 = k23998;
var G__24002__$1 = (((G__24002 instanceof cljs.core.Keyword))?G__24002.fqn:null);
switch (G__24002__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23998,else__8776__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Constant{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23997){
var self__ = this;
var G__23997__$1 = this;
return (new cljs.core.RecordIter((0),G__23997__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24003 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24003.cljs$core$IFn$_invoke$arity$1 ? fexpr__24003.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24003.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23999,other24000){
var self__ = this;
var this23999__$1 = this;
return (!((other24000 == null))) && ((this23999__$1.constructor === other24000.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23999__$1.value,other24000.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23999__$1.__extmap,other24000.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__23997){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24004 = cljs.core.keyword_identical_QMARK_;
var expr__24005 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24007 = cljs.core.cst$kw$value;
var G__24008 = expr__24005;
return (pred__24004.cljs$core$IFn$_invoke$arity$2 ? pred__24004.cljs$core$IFn$_invoke$arity$2(G__24007,G__24008) : pred__24004.call(null,G__24007,G__24008));
})())){
return (new datascript.parser.Constant(G__23997,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__23997),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__23997){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__23997,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f23994){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f23994),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred23995,acc23996){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23995,self__.value,acc23996);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc23996){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23996,self__.value) : datascript.parser.collect_vars_acc.call(null,acc23996,self__.value));
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__24001){
return (new datascript.parser.Constant(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__24001),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24001,cljs.core.cst$kw$value)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24014,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24018 = k24014;
var G__24018__$1 = (((G__24018 instanceof cljs.core.Keyword))?G__24018.fqn:null);
switch (G__24018__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24014,else__8776__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24013){
var self__ = this;
var G__24013__$1 = this;
return (new cljs.core.RecordIter((0),G__24013__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24019 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24019.cljs$core$IFn$_invoke$arity$1 ? fexpr__24019.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24019.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24015,other24016){
var self__ = this;
var this24015__$1 = this;
return (!((other24016 == null))) && ((this24015__$1.constructor === other24016.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24015__$1.symbol,other24016.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24015__$1.__extmap,other24016.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24013){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24020 = cljs.core.keyword_identical_QMARK_;
var expr__24021 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24023 = cljs.core.cst$kw$symbol;
var G__24024 = expr__24021;
return (pred__24020.cljs$core$IFn$_invoke$arity$2 ? pred__24020.cljs$core$IFn$_invoke$arity$2(G__24023,G__24024) : pred__24020.call(null,G__24023,G__24024));
})())){
return (new datascript.parser.PlainSymbol(G__24013,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24013),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24013){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__24013,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24010){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f24010),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24011,acc24012){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24011,self__.symbol,acc24012);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24012){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24012,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24012,self__.symbol));
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__24017){
return (new datascript.parser.PlainSymbol(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24017),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24017,cljs.core.cst$kw$symbol)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_PERCENT_,form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not(datascript.parser.parse_variable(form))) && (cljs.core.not(datascript.parser.parse_src_var(form))) && (cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__8099__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_constant(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return datascript.parser.parse_src_var(form);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24030,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24034 = k24030;
var G__24034__$1 = (((G__24034 instanceof cljs.core.Keyword))?G__24034.fqn:null);
switch (G__24034__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24030,else__8776__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.RuleVars{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24029){
var self__ = this;
var G__24029__$1 = this;
return (new cljs.core.RecordIter((0),G__24029__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$required,cljs.core.cst$kw$free], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24035 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24035.cljs$core$IFn$_invoke$arity$1 ? fexpr__24035.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24035.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24031,other24032){
var self__ = this;
var this24031__$1 = this;
return (!((other24032 == null))) && ((this24031__$1.constructor === other24032.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24031__$1.required,other24032.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24031__$1.free,other24032.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24031__$1.__extmap,other24032.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$free,null,cljs.core.cst$kw$required,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24029){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24036 = cljs.core.keyword_identical_QMARK_;
var expr__24037 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24039 = cljs.core.cst$kw$required;
var G__24040 = expr__24037;
return (pred__24036.cljs$core$IFn$_invoke$arity$2 ? pred__24036.cljs$core$IFn$_invoke$arity$2(G__24039,G__24040) : pred__24036.call(null,G__24039,G__24040));
})())){
return (new datascript.parser.RuleVars(G__24029,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24041 = cljs.core.cst$kw$free;
var G__24042 = expr__24037;
return (pred__24036.cljs$core$IFn$_invoke$arity$2 ? pred__24036.cljs$core$IFn$_invoke$arity$2(G__24041,G__24042) : pred__24036.call(null,G__24041,G__24042));
})())){
return (new datascript.parser.RuleVars(self__.required,G__24029,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24029),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24029){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__24029,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24026){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f24026),datascript.parser.postwalk(self__.free,f24026),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24027,acc24028){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24027,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24027,self__.required,acc24028));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24028){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24043 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24028,self__.required) : datascript.parser.collect_vars_acc.call(null,acc24028,self__.required));
var G__24044 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24043,G__24044) : datascript.parser.collect_vars_acc.call(null,G__24043,G__24044));
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$required,cljs.core.cst$sym$free], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__24033){
return (new datascript.parser.RuleVars(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__24033),cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(G__24033),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24033,cljs.core.cst$kw$required,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$free], 0))),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__24046 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24053,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24057 = k24053;
switch (G__24057) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24053,else__8776__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24052){
var self__ = this;
var G__24052__$1 = this;
return (new cljs.core.RecordIter((0),G__24052__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24058 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24058.cljs$core$IFn$_invoke$arity$1 ? fexpr__24058.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24058.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24054,other24055){
var self__ = this;
var this24054__$1 = this;
return (!((other24055 == null))) && ((this24054__$1.constructor === other24055.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24054__$1.__extmap,other24055.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24052){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24059 = cljs.core.keyword_identical_QMARK_;
var expr__24060 = k__8781__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24052),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24052){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__24052,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24049){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24050,acc24051){
var self__ = this;
var ___22719__auto____$1 = this;
return acc24051;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24051){
var self__ = this;
var ___22719__auto____$1 = this;
return acc24051;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__24056){
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24056)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24067,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24071 = k24067;
var G__24071__$1 = (((G__24071 instanceof cljs.core.Keyword))?G__24071.fqn:null);
switch (G__24071__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24067,else__8776__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.BindScalar{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24066){
var self__ = this;
var G__24066__$1 = this;
return (new cljs.core.RecordIter((0),G__24066__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24072 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24072.cljs$core$IFn$_invoke$arity$1 ? fexpr__24072.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24072.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24068,other24069){
var self__ = this;
var this24068__$1 = this;
return (!((other24069 == null))) && ((this24068__$1.constructor === other24069.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24068__$1.variable,other24069.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24068__$1.__extmap,other24069.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variable,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24066){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24073 = cljs.core.keyword_identical_QMARK_;
var expr__24074 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24076 = cljs.core.cst$kw$variable;
var G__24077 = expr__24074;
return (pred__24073.cljs$core$IFn$_invoke$arity$2 ? pred__24073.cljs$core$IFn$_invoke$arity$2(G__24076,G__24077) : pred__24073.call(null,G__24076,G__24077));
})())){
return (new datascript.parser.BindScalar(G__24066,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24066),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24066){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__24066,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24063){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f24063),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24064,acc24065){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24064,self__.variable,acc24065);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24065){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24065,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc24065,self__.variable));
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$variable], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__24070){
return (new datascript.parser.BindScalar(cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__24070),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24070,cljs.core.cst$kw$variable)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24083,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24087 = k24083;
var G__24087__$1 = (((G__24087 instanceof cljs.core.Keyword))?G__24087.fqn:null);
switch (G__24087__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24083,else__8776__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.BindTuple{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24082){
var self__ = this;
var G__24082__$1 = this;
return (new cljs.core.RecordIter((0),G__24082__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24088 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24088.cljs$core$IFn$_invoke$arity$1 ? fexpr__24088.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24088.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24084,other24085){
var self__ = this;
var this24084__$1 = this;
return (!((other24085 == null))) && ((this24084__$1.constructor === other24085.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24084__$1.bindings,other24085.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24084__$1.__extmap,other24085.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24082){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24089 = cljs.core.keyword_identical_QMARK_;
var expr__24090 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24092 = cljs.core.cst$kw$bindings;
var G__24093 = expr__24090;
return (pred__24089.cljs$core$IFn$_invoke$arity$2 ? pred__24089.cljs$core$IFn$_invoke$arity$2(G__24092,G__24093) : pred__24089.call(null,G__24092,G__24093));
})())){
return (new datascript.parser.BindTuple(G__24082,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24082),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24082){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__24082,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24079){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f24079),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24080,acc24081){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24080,self__.bindings,acc24081);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24081){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24081,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc24081,self__.bindings));
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__24086){
return (new datascript.parser.BindTuple(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__24086),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24086,cljs.core.cst$kw$bindings)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24099,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24103 = k24099;
var G__24103__$1 = (((G__24103 instanceof cljs.core.Keyword))?G__24103.fqn:null);
switch (G__24103__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24099,else__8776__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.BindColl{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24098){
var self__ = this;
var G__24098__$1 = this;
return (new cljs.core.RecordIter((0),G__24098__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24104 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24104.cljs$core$IFn$_invoke$arity$1 ? fexpr__24104.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24104.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24100,other24101){
var self__ = this;
var this24100__$1 = this;
return (!((other24101 == null))) && ((this24100__$1.constructor === other24101.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24100__$1.binding,other24101.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24100__$1.__extmap,other24101.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24098){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24105 = cljs.core.keyword_identical_QMARK_;
var expr__24106 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24108 = cljs.core.cst$kw$binding;
var G__24109 = expr__24106;
return (pred__24105.cljs$core$IFn$_invoke$arity$2 ? pred__24105.cljs$core$IFn$_invoke$arity$2(G__24108,G__24109) : pred__24105.call(null,G__24108,G__24109));
})())){
return (new datascript.parser.BindColl(G__24098,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24098),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24098){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__24098,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24095){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f24095),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24096,acc24097){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24096,self__.binding,acc24097);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24097){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24097,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc24097,self__.binding));
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__24102){
return (new datascript.parser.BindColl(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__24102),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24102,cljs.core.cst$kw$binding)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5278__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5278__auto__)){
var var$ = temp__5278__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__8087__auto__ = datascript.parser.of_size_QMARK_(form,(2));
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$$$$);
} else {
return and__8087__auto__;
}
})())){
var temp__5276__auto__ = (function (){var G__24111 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__24111) : datascript.parser.parse_binding.call(null,G__24111));
})();
if(cljs.core.truth_(temp__5276__auto__)){
var sub_bind = temp__5276__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__8099__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5278__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5278__auto__)){
var sub_bindings = temp__5278__auto__;
if(!(cljs.core.empty_QMARK_(sub_bindings))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__8087__auto__ = datascript.parser.of_size_QMARK_(form,(1));
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.sequential_QMARK_(cljs.core.first(form));
} else {
return and__8087__auto__;
}
})())){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__8099__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
var or__8099__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__8099__auto____$3)){
return or__8099__auto____$3;
} else {
var or__8099__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__8099__auto____$4)){
return or__8099__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (datascript.parser._find_vars[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24116,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24120 = k24116;
var G__24120__$1 = (((G__24120 instanceof cljs.core.Keyword))?G__24120.fqn:null);
switch (G__24120__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24116,else__8776__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Aggregate{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24115){
var self__ = this;
var G__24115__$1 = this;
return (new cljs.core.RecordIter((0),G__24115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24121 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24121.cljs$core$IFn$_invoke$arity$1 ? fexpr__24121.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24121.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24117,other24118){
var self__ = this;
var this24117__$1 = this;
return (!((other24118 == null))) && ((this24117__$1.constructor === other24118.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24117__$1.fn,other24118.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24117__$1.args,other24118.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24117__$1.__extmap,other24118.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24115){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24122 = cljs.core.keyword_identical_QMARK_;
var expr__24123 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24125 = cljs.core.cst$kw$fn;
var G__24126 = expr__24123;
return (pred__24122.cljs$core$IFn$_invoke$arity$2 ? pred__24122.cljs$core$IFn$_invoke$arity$2(G__24125,G__24126) : pred__24122.call(null,G__24125,G__24126));
})())){
return (new datascript.parser.Aggregate(G__24115,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24127 = cljs.core.cst$kw$args;
var G__24128 = expr__24123;
return (pred__24122.cljs$core$IFn$_invoke$arity$2 ? pred__24122.cljs$core$IFn$_invoke$arity$2(G__24127,G__24128) : pred__24122.call(null,G__24127,G__24128));
})())){
return (new datascript.parser.Aggregate(self__.fn,G__24115,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24115),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24115){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__24115,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24112){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f24112),datascript.parser.postwalk(self__.args,f24112),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24113,acc24114){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24113,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24113,self__.fn,acc24114));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24114){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24129 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24114,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc24114,self__.fn));
var G__24130 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24129,G__24130) : datascript.parser.collect_vars_acc.call(null,G__24129,G__24130));
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__24119){
return (new datascript.parser.Aggregate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__24119),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__24119),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24119,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24136,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24140 = k24136;
var G__24140__$1 = (((G__24140 instanceof cljs.core.Keyword))?G__24140.fqn:null);
switch (G__24140__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24136,else__8776__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Pull{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24135){
var self__ = this;
var G__24135__$1 = this;
return (new cljs.core.RecordIter((0),G__24135__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24141 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24141.cljs$core$IFn$_invoke$arity$1 ? fexpr__24141.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24141.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24137,other24138){
var self__ = this;
var this24137__$1 = this;
return (!((other24138 == null))) && ((this24137__$1.constructor === other24138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24137__$1.source,other24138.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24137__$1.variable,other24138.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24137__$1.pattern,other24138.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24137__$1.__extmap,other24138.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$variable,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24135){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24142 = cljs.core.keyword_identical_QMARK_;
var expr__24143 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24145 = cljs.core.cst$kw$source;
var G__24146 = expr__24143;
return (pred__24142.cljs$core$IFn$_invoke$arity$2 ? pred__24142.cljs$core$IFn$_invoke$arity$2(G__24145,G__24146) : pred__24142.call(null,G__24145,G__24146));
})())){
return (new datascript.parser.Pull(G__24135,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24147 = cljs.core.cst$kw$variable;
var G__24148 = expr__24143;
return (pred__24142.cljs$core$IFn$_invoke$arity$2 ? pred__24142.cljs$core$IFn$_invoke$arity$2(G__24147,G__24148) : pred__24142.call(null,G__24147,G__24148));
})())){
return (new datascript.parser.Pull(self__.source,G__24135,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24149 = cljs.core.cst$kw$pattern;
var G__24150 = expr__24143;
return (pred__24142.cljs$core$IFn$_invoke$arity$2 ? pred__24142.cljs$core$IFn$_invoke$arity$2(G__24149,G__24150) : pred__24142.call(null,G__24149,G__24150));
})())){
return (new datascript.parser.Pull(self__.source,self__.variable,G__24135,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24135),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24135){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__24135,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24132){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f24132),datascript.parser.postwalk(self__.variable,f24132),datascript.parser.postwalk(self__.pattern,f24132),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24133,acc24134){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24133,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24133,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24133,self__.source,acc24134)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24134){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24151 = (function (){var G__24153 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24134,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24134,self__.source));
var G__24154 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24153,G__24154) : datascript.parser.collect_vars_acc.call(null,G__24153,G__24154));
})();
var G__24152 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24151,G__24152) : datascript.parser.collect_vars_acc.call(null,G__24151,G__24152));
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$variable,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__24139){
return (new datascript.parser.Pull(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24139),cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__24139),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__24139),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24139,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], 0))),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (datascript.parser.find_elements[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24160,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24164 = k24160;
var G__24164__$1 = (((G__24164 instanceof cljs.core.Keyword))?G__24164.fqn:null);
switch (G__24164__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24160,else__8776__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.FindRel{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24159){
var self__ = this;
var G__24159__$1 = this;
return (new cljs.core.RecordIter((0),G__24159__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24165 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24165.cljs$core$IFn$_invoke$arity$1 ? fexpr__24165.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24165.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24161,other24162){
var self__ = this;
var this24161__$1 = this;
return (!((other24162 == null))) && ((this24161__$1.constructor === other24162.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24161__$1.elements,other24162.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24161__$1.__extmap,other24162.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24159){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24166 = cljs.core.keyword_identical_QMARK_;
var expr__24167 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24169 = cljs.core.cst$kw$elements;
var G__24170 = expr__24167;
return (pred__24166.cljs$core$IFn$_invoke$arity$2 ? pred__24166.cljs$core$IFn$_invoke$arity$2(G__24169,G__24170) : pred__24166.call(null,G__24169,G__24170));
})())){
return (new datascript.parser.FindRel(G__24159,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24159),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24159){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__24159,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24156){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f24156),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24157,acc24158){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24157,self__.elements,acc24158);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24158){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24158,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc24158,self__.elements));
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__24163){
return (new datascript.parser.FindRel(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__24163),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24163,cljs.core.cst$kw$elements)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24176,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24180 = k24176;
var G__24180__$1 = (((G__24180 instanceof cljs.core.Keyword))?G__24180.fqn:null);
switch (G__24180__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24176,else__8776__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.FindColl{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24175){
var self__ = this;
var G__24175__$1 = this;
return (new cljs.core.RecordIter((0),G__24175__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24181 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24181.cljs$core$IFn$_invoke$arity$1 ? fexpr__24181.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24181.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24177,other24178){
var self__ = this;
var this24177__$1 = this;
return (!((other24178 == null))) && ((this24177__$1.constructor === other24178.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24177__$1.element,other24178.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24177__$1.__extmap,other24178.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24175){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24182 = cljs.core.keyword_identical_QMARK_;
var expr__24183 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24185 = cljs.core.cst$kw$element;
var G__24186 = expr__24183;
return (pred__24182.cljs$core$IFn$_invoke$arity$2 ? pred__24182.cljs$core$IFn$_invoke$arity$2(G__24185,G__24186) : pred__24182.call(null,G__24185,G__24186));
})())){
return (new datascript.parser.FindColl(G__24175,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24175),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24175){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__24175,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24172){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f24172),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24173,acc24174){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24173,self__.element,acc24174);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24174){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24174,self__.element) : datascript.parser.collect_vars_acc.call(null,acc24174,self__.element));
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__24179){
return (new datascript.parser.FindColl(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__24179),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24179,cljs.core.cst$kw$element)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24192,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24196 = k24192;
var G__24196__$1 = (((G__24196 instanceof cljs.core.Keyword))?G__24196.fqn:null);
switch (G__24196__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24192,else__8776__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.FindScalar{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24191){
var self__ = this;
var G__24191__$1 = this;
return (new cljs.core.RecordIter((0),G__24191__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24197 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24197.cljs$core$IFn$_invoke$arity$1 ? fexpr__24197.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24197.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24193,other24194){
var self__ = this;
var this24193__$1 = this;
return (!((other24194 == null))) && ((this24193__$1.constructor === other24194.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24193__$1.element,other24194.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24193__$1.__extmap,other24194.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24191){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24198 = cljs.core.keyword_identical_QMARK_;
var expr__24199 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24201 = cljs.core.cst$kw$element;
var G__24202 = expr__24199;
return (pred__24198.cljs$core$IFn$_invoke$arity$2 ? pred__24198.cljs$core$IFn$_invoke$arity$2(G__24201,G__24202) : pred__24198.call(null,G__24201,G__24202));
})())){
return (new datascript.parser.FindScalar(G__24191,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24191),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24191){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__24191,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24188){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f24188),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24189,acc24190){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24189,self__.element,acc24190);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24190){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24190,self__.element) : datascript.parser.collect_vars_acc.call(null,acc24190,self__.element));
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__24195){
return (new datascript.parser.FindScalar(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__24195),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24195,cljs.core.cst$kw$element)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24208,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24212 = k24208;
var G__24212__$1 = (((G__24212 instanceof cljs.core.Keyword))?G__24212.fqn:null);
switch (G__24212__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24208,else__8776__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.FindTuple{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24207){
var self__ = this;
var G__24207__$1 = this;
return (new cljs.core.RecordIter((0),G__24207__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24213 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24213.cljs$core$IFn$_invoke$arity$1 ? fexpr__24213.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24213.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24209,other24210){
var self__ = this;
var this24209__$1 = this;
return (!((other24210 == null))) && ((this24209__$1.constructor === other24210.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24209__$1.elements,other24210.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24209__$1.__extmap,other24210.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24207){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24214 = cljs.core.keyword_identical_QMARK_;
var expr__24215 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24217 = cljs.core.cst$kw$elements;
var G__24218 = expr__24215;
return (pred__24214.cljs$core$IFn$_invoke$arity$2 ? pred__24214.cljs$core$IFn$_invoke$arity$2(G__24217,G__24218) : pred__24214.call(null,G__24217,G__24218));
})())){
return (new datascript.parser.FindTuple(G__24207,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24207),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24207){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__24207,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24204){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f24204),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24205,acc24206){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24205,self__.elements,acc24206);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24206){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24206,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc24206,self__.elements));
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__24211){
return (new datascript.parser.FindTuple(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__24211),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24211,cljs.core.cst$kw$elements)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2)))){
var vec__24220 = form;
var seq__24221 = cljs.core.seq(vec__24220);
var first__24222 = cljs.core.first(seq__24221);
var seq__24221__$1 = cljs.core.next(seq__24221);
var fn = first__24222;
var args = seq__24221__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__8087__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return args_STAR_;
} else {
return and__8087__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$aggregate))){
if((cljs.core.count(form) >= (3))){
var vec__24223 = form;
var seq__24224 = cljs.core.seq(vec__24223);
var first__24225 = cljs.core.first(seq__24224);
var seq__24224__$1 = cljs.core.next(seq__24224);
var _ = first__24225;
var first__24225__$1 = cljs.core.first(seq__24224__$1);
var seq__24224__$2 = cljs.core.next(seq__24224__$1);
var fn = first__24225__$1;
var args = seq__24224__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__8087__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return args_STAR_;
} else {
return and__8087__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$pull))){
if((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):cljs.core.cst$sym$$);
var vec__24226 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__8099__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__8087__auto__ = src_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__8087__auto____$1)){
return pattern_STAR_;
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__8099__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__24229 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__24229 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__24229,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
if((cljs.core.sequential_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),cljs.core.cst$sym$$$$))){
var G__24230 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__24230 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__24230,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$_DOT_))){
var G__24231 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__24231 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__24231,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
var G__24232 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__24232 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__24232,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__8099__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
var or__8099__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__8099__auto____$3)){
return or__8099__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__8099__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_with,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5276__auto__ = (function (){var or__8099__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var var$ = temp__5276__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__8099__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_in,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24237,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24241 = k24237;
var G__24241__$1 = (((G__24241 instanceof cljs.core.Keyword))?G__24241.fqn:null);
switch (G__24241__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24237,else__8776__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Pattern{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24236){
var self__ = this;
var G__24236__$1 = this;
return (new cljs.core.RecordIter((0),G__24236__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24242 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24242.cljs$core$IFn$_invoke$arity$1 ? fexpr__24242.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24242.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24238,other24239){
var self__ = this;
var this24238__$1 = this;
return (!((other24239 == null))) && ((this24238__$1.constructor === other24239.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24238__$1.source,other24239.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24238__$1.pattern,other24239.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24238__$1.__extmap,other24239.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24236){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24243 = cljs.core.keyword_identical_QMARK_;
var expr__24244 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24246 = cljs.core.cst$kw$source;
var G__24247 = expr__24244;
return (pred__24243.cljs$core$IFn$_invoke$arity$2 ? pred__24243.cljs$core$IFn$_invoke$arity$2(G__24246,G__24247) : pred__24243.call(null,G__24246,G__24247));
})())){
return (new datascript.parser.Pattern(G__24236,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24248 = cljs.core.cst$kw$pattern;
var G__24249 = expr__24244;
return (pred__24243.cljs$core$IFn$_invoke$arity$2 ? pred__24243.cljs$core$IFn$_invoke$arity$2(G__24248,G__24249) : pred__24243.call(null,G__24248,G__24249));
})())){
return (new datascript.parser.Pattern(self__.source,G__24236,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24236),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24236){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__24236,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24233){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f24233),datascript.parser.postwalk(self__.pattern,f24233),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24234,acc24235){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24234,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24234,self__.source,acc24235));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24235){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24250 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24235,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24235,self__.source));
var G__24251 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24250,G__24251) : datascript.parser.collect_vars_acc.call(null,G__24250,G__24251));
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__24240){
return (new datascript.parser.Pattern(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24240),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__24240),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24240,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pattern], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24257,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24261 = k24257;
var G__24261__$1 = (((G__24261 instanceof cljs.core.Keyword))?G__24261.fqn:null);
switch (G__24261__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24257,else__8776__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Predicate{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24256){
var self__ = this;
var G__24256__$1 = this;
return (new cljs.core.RecordIter((0),G__24256__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24262 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24262.cljs$core$IFn$_invoke$arity$1 ? fexpr__24262.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24262.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24258,other24259){
var self__ = this;
var this24258__$1 = this;
return (!((other24259 == null))) && ((this24258__$1.constructor === other24259.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24258__$1.fn,other24259.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24258__$1.args,other24259.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24258__$1.__extmap,other24259.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24256){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24263 = cljs.core.keyword_identical_QMARK_;
var expr__24264 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24266 = cljs.core.cst$kw$fn;
var G__24267 = expr__24264;
return (pred__24263.cljs$core$IFn$_invoke$arity$2 ? pred__24263.cljs$core$IFn$_invoke$arity$2(G__24266,G__24267) : pred__24263.call(null,G__24266,G__24267));
})())){
return (new datascript.parser.Predicate(G__24256,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24268 = cljs.core.cst$kw$args;
var G__24269 = expr__24264;
return (pred__24263.cljs$core$IFn$_invoke$arity$2 ? pred__24263.cljs$core$IFn$_invoke$arity$2(G__24268,G__24269) : pred__24263.call(null,G__24268,G__24269));
})())){
return (new datascript.parser.Predicate(self__.fn,G__24256,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24256),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24256){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__24256,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24253){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f24253),datascript.parser.postwalk(self__.args,f24253),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24254,acc24255){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24254,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24254,self__.fn,acc24255));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24255){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24270 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24255,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc24255,self__.fn));
var G__24271 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24270,G__24271) : datascript.parser.collect_vars_acc.call(null,G__24270,G__24271));
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__24260){
return (new datascript.parser.Predicate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__24260),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__24260),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24260,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24277,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24281 = k24277;
var G__24281__$1 = (((G__24281 instanceof cljs.core.Keyword))?G__24281.fqn:null);
switch (G__24281__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24277,else__8776__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Function{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24276){
var self__ = this;
var G__24276__$1 = this;
return (new cljs.core.RecordIter((0),G__24276__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args,cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24282 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24282.cljs$core$IFn$_invoke$arity$1 ? fexpr__24282.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24282.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24278,other24279){
var self__ = this;
var this24278__$1 = this;
return (!((other24279 == null))) && ((this24278__$1.constructor === other24279.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24278__$1.fn,other24279.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24278__$1.args,other24279.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24278__$1.binding,other24279.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24278__$1.__extmap,other24279.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$binding,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24276){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24283 = cljs.core.keyword_identical_QMARK_;
var expr__24284 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24286 = cljs.core.cst$kw$fn;
var G__24287 = expr__24284;
return (pred__24283.cljs$core$IFn$_invoke$arity$2 ? pred__24283.cljs$core$IFn$_invoke$arity$2(G__24286,G__24287) : pred__24283.call(null,G__24286,G__24287));
})())){
return (new datascript.parser.Function(G__24276,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24288 = cljs.core.cst$kw$args;
var G__24289 = expr__24284;
return (pred__24283.cljs$core$IFn$_invoke$arity$2 ? pred__24283.cljs$core$IFn$_invoke$arity$2(G__24288,G__24289) : pred__24283.call(null,G__24288,G__24289));
})())){
return (new datascript.parser.Function(self__.fn,G__24276,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24290 = cljs.core.cst$kw$binding;
var G__24291 = expr__24284;
return (pred__24283.cljs$core$IFn$_invoke$arity$2 ? pred__24283.cljs$core$IFn$_invoke$arity$2(G__24290,G__24291) : pred__24283.call(null,G__24290,G__24291));
})())){
return (new datascript.parser.Function(self__.fn,self__.args,G__24276,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24276),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24276){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__24276,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24273){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f24273),datascript.parser.postwalk(self__.args,f24273),datascript.parser.postwalk(self__.binding,f24273),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24274,acc24275){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24274,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24274,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24274,self__.fn,acc24275)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24275){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24292 = (function (){var G__24294 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24275,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc24275,self__.fn));
var G__24295 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24294,G__24295) : datascript.parser.collect_vars_acc.call(null,G__24294,G__24295));
})();
var G__24293 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24292,G__24293) : datascript.parser.collect_vars_acc.call(null,G__24292,G__24293));
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args,cljs.core.cst$sym$binding], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__24280){
return (new datascript.parser.Function(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__24280),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__24280),cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__24280),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24280,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args,cljs.core.cst$kw$binding], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24301,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24305 = k24301;
var G__24305__$1 = (((G__24305 instanceof cljs.core.Keyword))?G__24305.fqn:null);
switch (G__24305__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24301,else__8776__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24300){
var self__ = this;
var G__24300__$1 = this;
return (new cljs.core.RecordIter((0),G__24300__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$name,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24306 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24306.cljs$core$IFn$_invoke$arity$1 ? fexpr__24306.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24306.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24302,other24303){
var self__ = this;
var this24302__$1 = this;
return (!((other24303 == null))) && ((this24302__$1.constructor === other24303.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24302__$1.source,other24303.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24302__$1.name,other24303.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24302__$1.args,other24303.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24302__$1.__extmap,other24303.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$source,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24300){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24307 = cljs.core.keyword_identical_QMARK_;
var expr__24308 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24310 = cljs.core.cst$kw$source;
var G__24311 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24310,G__24311) : pred__24307.call(null,G__24310,G__24311));
})())){
return (new datascript.parser.RuleExpr(G__24300,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24312 = cljs.core.cst$kw$name;
var G__24313 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24312,G__24313) : pred__24307.call(null,G__24312,G__24313));
})())){
return (new datascript.parser.RuleExpr(self__.source,G__24300,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24314 = cljs.core.cst$kw$args;
var G__24315 = expr__24308;
return (pred__24307.cljs$core$IFn$_invoke$arity$2 ? pred__24307.cljs$core$IFn$_invoke$arity$2(G__24314,G__24315) : pred__24307.call(null,G__24314,G__24315));
})())){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__24300,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24300),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24300){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__24300,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24297){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f24297),datascript.parser.postwalk(self__.name,f24297),datascript.parser.postwalk(self__.args,f24297),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24298,acc24299){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24298,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24298,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24298,self__.source,acc24299)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24299){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24316 = (function (){var G__24318 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24299,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24299,self__.source));
var G__24319 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24318,G__24319) : datascript.parser.collect_vars_acc.call(null,G__24318,G__24319));
})();
var G__24317 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24316,G__24317) : datascript.parser.collect_vars_acc.call(null,G__24316,G__24317));
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$name,cljs.core.cst$sym$args], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__24304){
return (new datascript.parser.RuleExpr(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24304),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__24304),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__24304),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24304,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,cljs.core.cst$kw$args], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24325,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24329 = k24325;
var G__24329__$1 = (((G__24329 instanceof cljs.core.Keyword))?G__24329.fqn:null);
switch (G__24329__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24325,else__8776__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Not{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24324){
var self__ = this;
var G__24324__$1 = this;
return (new cljs.core.RecordIter((0),G__24324__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24330 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24330.cljs$core$IFn$_invoke$arity$1 ? fexpr__24330.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24330.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24326,other24327){
var self__ = this;
var this24326__$1 = this;
return (!((other24327 == null))) && ((this24326__$1.constructor === other24327.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24326__$1.source,other24327.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24326__$1.vars,other24327.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24326__$1.clauses,other24327.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24326__$1.__extmap,other24327.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24324){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24331 = cljs.core.keyword_identical_QMARK_;
var expr__24332 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24334 = cljs.core.cst$kw$source;
var G__24335 = expr__24332;
return (pred__24331.cljs$core$IFn$_invoke$arity$2 ? pred__24331.cljs$core$IFn$_invoke$arity$2(G__24334,G__24335) : pred__24331.call(null,G__24334,G__24335));
})())){
return (new datascript.parser.Not(G__24324,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24336 = cljs.core.cst$kw$vars;
var G__24337 = expr__24332;
return (pred__24331.cljs$core$IFn$_invoke$arity$2 ? pred__24331.cljs$core$IFn$_invoke$arity$2(G__24336,G__24337) : pred__24331.call(null,G__24336,G__24337));
})())){
return (new datascript.parser.Not(self__.source,G__24324,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24338 = cljs.core.cst$kw$clauses;
var G__24339 = expr__24332;
return (pred__24331.cljs$core$IFn$_invoke$arity$2 ? pred__24331.cljs$core$IFn$_invoke$arity$2(G__24338,G__24339) : pred__24331.call(null,G__24338,G__24339));
})())){
return (new datascript.parser.Not(self__.source,self__.vars,G__24324,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24324),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24324){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__24324,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24321){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f24321),datascript.parser.postwalk(self__.vars,f24321),datascript.parser.postwalk(self__.clauses,f24321),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24322,acc24323){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24322,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24322,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24322,self__.source,acc24323)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24323){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24340 = (function (){var G__24342 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24323,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24323,self__.source));
var G__24343 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24342,G__24343) : datascript.parser.collect_vars_acc.call(null,G__24342,G__24343));
})();
var G__24341 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24340,G__24341) : datascript.parser.collect_vars_acc.call(null,G__24340,G__24341));
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__24328){
return (new datascript.parser.Not(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24328),cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__24328),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__24328),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24328,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24349,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24353 = k24349;
var G__24353__$1 = (((G__24353 instanceof cljs.core.Keyword))?G__24353.fqn:null);
switch (G__24353__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24349,else__8776__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Or{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24348){
var self__ = this;
var G__24348__$1 = this;
return (new cljs.core.RecordIter((0),G__24348__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24354 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24354.cljs$core$IFn$_invoke$arity$1 ? fexpr__24354.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24354.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24350,other24351){
var self__ = this;
var this24350__$1 = this;
return (!((other24351 == null))) && ((this24350__$1.constructor === other24351.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24350__$1.source,other24351.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24350__$1.rule_vars,other24351.rule_vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24350__$1.clauses,other24351.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24350__$1.__extmap,other24351.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule_DASH_vars,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24348){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24355 = cljs.core.keyword_identical_QMARK_;
var expr__24356 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24358 = cljs.core.cst$kw$source;
var G__24359 = expr__24356;
return (pred__24355.cljs$core$IFn$_invoke$arity$2 ? pred__24355.cljs$core$IFn$_invoke$arity$2(G__24358,G__24359) : pred__24355.call(null,G__24358,G__24359));
})())){
return (new datascript.parser.Or(G__24348,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24360 = cljs.core.cst$kw$rule_DASH_vars;
var G__24361 = expr__24356;
return (pred__24355.cljs$core$IFn$_invoke$arity$2 ? pred__24355.cljs$core$IFn$_invoke$arity$2(G__24360,G__24361) : pred__24355.call(null,G__24360,G__24361));
})())){
return (new datascript.parser.Or(self__.source,G__24348,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24362 = cljs.core.cst$kw$clauses;
var G__24363 = expr__24356;
return (pred__24355.cljs$core$IFn$_invoke$arity$2 ? pred__24355.cljs$core$IFn$_invoke$arity$2(G__24362,G__24363) : pred__24355.call(null,G__24362,G__24363));
})())){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__24348,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24348),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24348){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__24348,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24345){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f24345),datascript.parser.postwalk(self__.rule_vars,f24345),datascript.parser.postwalk(self__.clauses,f24345),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24346,acc24347){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24346,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24346,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24346,self__.source,acc24347)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24347){
var self__ = this;
var ___22719__auto____$1 = this;
var G__24364 = (function (){var G__24366 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24347,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24347,self__.source));
var G__24367 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24366,G__24367) : datascript.parser.collect_vars_acc.call(null,G__24366,G__24367));
})();
var G__24365 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24364,G__24365) : datascript.parser.collect_vars_acc.call(null,G__24364,G__24365));
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$rule_DASH_vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__24352){
return (new datascript.parser.Or(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24352),cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(G__24352),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__24352),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24352,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24373,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24377 = k24373;
var G__24377__$1 = (((G__24377 instanceof cljs.core.Keyword))?G__24377.fqn:null);
switch (G__24377__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24373,else__8776__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.And{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24372){
var self__ = this;
var G__24372__$1 = this;
return (new cljs.core.RecordIter((0),G__24372__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24378 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24378.cljs$core$IFn$_invoke$arity$1 ? fexpr__24378.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24378.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24374,other24375){
var self__ = this;
var this24374__$1 = this;
return (!((other24375 == null))) && ((this24374__$1.constructor === other24375.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24374__$1.clauses,other24375.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24374__$1.__extmap,other24375.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24372){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24379 = cljs.core.keyword_identical_QMARK_;
var expr__24380 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24382 = cljs.core.cst$kw$clauses;
var G__24383 = expr__24380;
return (pred__24379.cljs$core$IFn$_invoke$arity$2 ? pred__24379.cljs$core$IFn$_invoke$arity$2(G__24382,G__24383) : pred__24379.call(null,G__24382,G__24383));
})())){
return (new datascript.parser.And(G__24372,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24372),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24372){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__24372,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24369){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f24369),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24370,acc24371){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24370,self__.clauses,acc24371);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24371){
var self__ = this;
var ___22719__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24371,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc24371,self__.clauses));
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clauses], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__24376){
return (new datascript.parser.And(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__24376),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24376,cljs.core.cst$kw$clauses)),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__8099__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5276__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5276__auto__)){
var source_STAR_ = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24385 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24385,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24385,(1),null);
var temp__5278__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5278__auto____$1)){
var pattern_STAR_ = temp__5278__auto____$1;
if(!(cljs.core.empty_QMARK_(pattern_STAR_))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__24388 = form;
var seq__24389 = cljs.core.seq(vec__24388);
var first__24390 = cljs.core.first(seq__24389);
var seq__24389__$1 = cljs.core.next(seq__24389);
var fn = first__24390;
var args = seq__24389__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__8099__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__8087__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return args_STAR_;
} else {
return and__8087__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(1)))){
var temp__5278__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24391 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(2)))){
var vec__24394 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24394,(1),null);
var temp__5278__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24397 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24397,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24397,(1),null);
var temp__5278__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5278__auto____$1)){
var binding_STAR_ = temp__5278__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24400 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24400,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24400,(1),null);
var vec__24403 = next_form;
var seq__24404 = cljs.core.seq(vec__24403);
var first__24405 = cljs.core.first(seq__24404);
var seq__24404__$1 = cljs.core.next(seq__24404);
var name = first__24405;
var args = seq__24404__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
var G__24406 = acc;
var G__24407 = cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(form);
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24406,G__24407) : datascript.parser.collect_vars_acc.call(null,G__24406,G__24407));
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_24409 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),cljs.core.set(datascript.parser.collect_vars(clauses)));
if(cljs.core.empty_QMARK_(undeclared_24409)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variable not declared inside clauses: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_24409)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(vars)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(clause),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24410 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(1),null);
var vec__24413 = next_form;
var seq__24414 = cljs.core.seq(vec__24413);
var first__24415 = cljs.core.first(seq__24414);
var seq__24414__$1 = cljs.core.next(seq__24414);
var sym = first__24415;
var clauses = seq__24414__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not,sym)){
var temp__5276__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5276__auto__)){
var clauses_STAR_ = temp__5276__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24416 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24416,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24416,(1),null);
var vec__24419 = next_form;
var seq__24420 = cljs.core.seq(vec__24419);
var first__24421 = cljs.core.first(seq__24420);
var seq__24420__$1 = cljs.core.next(seq__24420);
var sym = first__24421;
var first__24421__$1 = cljs.core.first(seq__24420__$1);
var seq__24420__$2 = cljs.core.next(seq__24420__$1);
var vars = first__24421__$1;
var clauses = seq__24420__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__8087__auto__ = vars_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return clauses_STAR_;
} else {
return and__8087__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__24422 = clause;
var map__24422__$1 = ((((!((map__24422 == null)))?((((map__24422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24422):map__24422);
var map__24423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,cljs.core.cst$kw$rule_DASH_vars);
var map__24423__$1 = ((((!((map__24423 == null)))?((((map__24423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24423):map__24423);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24423__$1,cljs.core.cst$kw$required);
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24423__$1,cljs.core.cst$kw$free);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24422__$1,cljs.core.cst$kw$clauses);
var vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,free);
var seq__24426_24430 = cljs.core.seq(clauses);
var chunk__24427_24431 = null;
var count__24428_24432 = (0);
var i__24429_24433 = (0);
while(true){
if((i__24429_24433 < count__24428_24432)){
var clause_24434__$1 = chunk__24427_24431.cljs$core$IIndexed$_nth$arity$2(null,i__24429_24433);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_24434__$1], null),form);

var G__24435 = seq__24426_24430;
var G__24436 = chunk__24427_24431;
var G__24437 = count__24428_24432;
var G__24438 = (i__24429_24433 + (1));
seq__24426_24430 = G__24435;
chunk__24427_24431 = G__24436;
count__24428_24432 = G__24437;
i__24429_24433 = G__24438;
continue;
} else {
var temp__5278__auto___24439 = cljs.core.seq(seq__24426_24430);
if(temp__5278__auto___24439){
var seq__24426_24440__$1 = temp__5278__auto___24439;
if(cljs.core.chunked_seq_QMARK_(seq__24426_24440__$1)){
var c__9011__auto___24441 = cljs.core.chunk_first(seq__24426_24440__$1);
var G__24442 = cljs.core.chunk_rest(seq__24426_24440__$1);
var G__24443 = c__9011__auto___24441;
var G__24444 = cljs.core.count(c__9011__auto___24441);
var G__24445 = (0);
seq__24426_24430 = G__24442;
chunk__24427_24431 = G__24443;
count__24428_24432 = G__24444;
i__24429_24433 = G__24445;
continue;
} else {
var clause_24446__$1 = cljs.core.first(seq__24426_24440__$1);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_24446__$1], null),form);

var G__24447 = cljs.core.next(seq__24426_24440__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24426_24430 = G__24447;
chunk__24427_24431 = G__24448;
count__24428_24432 = G__24449;
i__24429_24433 = G__24450;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,cljs.core.first(form)))){
var clauses_STAR_ = (function (){var G__24451 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__24451) : datascript.parser.parse_clauses.call(null,G__24451));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24452 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(1),null);
var vec__24455 = next_form;
var seq__24456 = cljs.core.seq(vec__24455);
var first__24457 = cljs.core.first(seq__24456);
var seq__24456__$1 = cljs.core.next(seq__24456);
var sym = first__24457;
var clauses = seq__24456__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,sym)){
var temp__5276__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5276__auto__)){
var clauses_STAR_ = temp__5276__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5278__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__24458 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458,(1),null);
var vec__24461 = next_form;
var seq__24462 = cljs.core.seq(vec__24461);
var first__24463 = cljs.core.first(seq__24462);
var seq__24462__$1 = cljs.core.next(seq__24462);
var sym = first__24463;
var first__24463__$1 = cljs.core.first(seq__24462__$1);
var seq__24462__$2 = cljs.core.next(seq__24462__$1);
var vars = first__24463__$1;
var clauses = seq__24462__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__8087__auto__ = vars_STAR_;
if(cljs.core.truth_(and__8087__auto__)){
return clauses_STAR_;
} else {
return and__8087__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__8099__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var or__8099__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__8099__auto____$1)){
return or__8099__auto____$1;
} else {
var or__8099__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__8099__auto____$2)){
return or__8099__auto____$2;
} else {
var or__8099__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__8099__auto____$3)){
return or__8099__auto____$3;
} else {
var or__8099__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__8099__auto____$4)){
return or__8099__auto____$4;
} else {
var or__8099__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__8099__auto____$5)){
return or__8099__auto____$5;
} else {
var or__8099__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__8099__auto____$6)){
return or__8099__auto____$6;
} else {
var or__8099__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__8099__auto____$7)){
return or__8099__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__8099__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24469,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24473 = k24469;
var G__24473__$1 = (((G__24473 instanceof cljs.core.Keyword))?G__24473.fqn:null);
switch (G__24473__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24469,else__8776__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24468){
var self__ = this;
var G__24468__$1 = this;
return (new cljs.core.RecordIter((0),G__24468__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24474 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24474.cljs$core$IFn$_invoke$arity$1 ? fexpr__24474.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24474.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24470,other24471){
var self__ = this;
var this24470__$1 = this;
return (!((other24471 == null))) && ((this24470__$1.constructor === other24471.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24470__$1.vars,other24471.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24470__$1.clauses,other24471.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24470__$1.__extmap,other24471.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24468){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24475 = cljs.core.keyword_identical_QMARK_;
var expr__24476 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24478 = cljs.core.cst$kw$vars;
var G__24479 = expr__24476;
return (pred__24475.cljs$core$IFn$_invoke$arity$2 ? pred__24475.cljs$core$IFn$_invoke$arity$2(G__24478,G__24479) : pred__24475.call(null,G__24478,G__24479));
})())){
return (new datascript.parser.RuleBranch(G__24468,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24480 = cljs.core.cst$kw$clauses;
var G__24481 = expr__24476;
return (pred__24475.cljs$core$IFn$_invoke$arity$2 ? pred__24475.cljs$core$IFn$_invoke$arity$2(G__24480,G__24481) : pred__24475.call(null,G__24480,G__24481));
})())){
return (new datascript.parser.RuleBranch(self__.vars,G__24468,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24468),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24468){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__24468,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24465){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f24465),datascript.parser.postwalk(self__.clauses,f24465),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24466,acc24467){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24466,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24466,self__.vars,acc24467));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24467){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc24467,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__24472){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__24472),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__24472),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24472,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clauses], 0))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24487,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24491 = k24487;
var G__24491__$1 = (((G__24491 instanceof cljs.core.Keyword))?G__24491.fqn:null);
switch (G__24491__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24487,else__8776__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Rule{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24486){
var self__ = this;
var G__24486__$1 = this;
return (new cljs.core.RecordIter((0),G__24486__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$branches], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24492 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24492.cljs$core$IFn$_invoke$arity$1 ? fexpr__24492.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24492.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24488,other24489){
var self__ = this;
var this24488__$1 = this;
return (!((other24489 == null))) && ((this24488__$1.constructor === other24489.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24488__$1.name,other24489.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24488__$1.branches,other24489.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24488__$1.__extmap,other24489.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$branches,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24486){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24493 = cljs.core.keyword_identical_QMARK_;
var expr__24494 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24496 = cljs.core.cst$kw$name;
var G__24497 = expr__24494;
return (pred__24493.cljs$core$IFn$_invoke$arity$2 ? pred__24493.cljs$core$IFn$_invoke$arity$2(G__24496,G__24497) : pred__24493.call(null,G__24496,G__24497));
})())){
return (new datascript.parser.Rule(G__24486,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24498 = cljs.core.cst$kw$branches;
var G__24499 = expr__24494;
return (pred__24493.cljs$core$IFn$_invoke$arity$2 ? pred__24493.cljs$core$IFn$_invoke$arity$2(G__24498,G__24499) : pred__24493.call(null,G__24498,G__24499));
})())){
return (new datascript.parser.Rule(self__.name,G__24486,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24486),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24486){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__24486,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24483){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f24483),datascript.parser.postwalk(self__.branches,f24483),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24484,acc24485){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24484,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24484,self__.name,acc24485));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24485){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc24485,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$branches], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__24490){
return (new datascript.parser.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__24490),cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(G__24490),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24490,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$branches], 0))),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__24501_SHARP_){
return (p1__24501_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (declared_vars){
return (function (p1__24502_SHARP_){
return (p1__24502_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(used_vars,declared_vars);
if(cljs.core.empty_QMARK_(undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Reference to the unknown variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_vars)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__24503 = form;
var seq__24504 = cljs.core.seq(vec__24503);
var first__24505 = cljs.core.first(seq__24504);
var seq__24504__$1 = cljs.core.next(seq__24504);
var head = first__24505;
var clauses = seq__24504__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__24506 = head;
var seq__24507 = cljs.core.seq(vec__24506);
var first__24508 = cljs.core.first(seq__24507);
var seq__24507__$1 = cljs.core.next(seq__24507);
var name = first__24508;
var vars = seq__24507__$1;
var name_STAR_ = (function (){var or__8099__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__8099__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
datascript.parser.validate_vars(vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name_STAR_,cljs.core.cst$kw$vars,vars_STAR_,cljs.core.cst$kw$clauses,clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__24509 = cljs.core.seq(cljs.core.next(branches));
var chunk__24511 = null;
var count__24512 = (0);
var i__24513 = (0);
while(true){
if((i__24513 < count__24512)){
var b = chunk__24511.cljs$core$IIndexed$_nth$arity$2(null,i__24513);
var vars_24515 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_24515))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_24515)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__24516 = seq__24509;
var G__24517 = chunk__24511;
var G__24518 = count__24512;
var G__24519 = (i__24513 + (1));
seq__24509 = G__24516;
chunk__24511 = G__24517;
count__24512 = G__24518;
i__24513 = G__24519;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__24509);
if(temp__5278__auto__){
var seq__24509__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24509__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__24509__$1);
var G__24520 = cljs.core.chunk_rest(seq__24509__$1);
var G__24521 = c__9011__auto__;
var G__24522 = cljs.core.count(c__9011__auto__);
var G__24523 = (0);
seq__24509 = G__24520;
chunk__24511 = G__24521;
count__24512 = G__24522;
i__24513 = G__24523;
continue;
} else {
var b = cljs.core.first(seq__24509__$1);
var vars_24524 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_24524))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_24524)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__24525 = cljs.core.next(seq__24509__$1);
var G__24526 = null;
var G__24527 = (0);
var G__24528 = (0);
seq__24509 = G__24525;
chunk__24511 = G__24526;
count__24512 = G__24527;
i__24513 = G__24528;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__8962__auto__ = (function datascript$parser$parse_rules_$_iter__24530(s__24531){
return (new cljs.core.LazySeq(null,(function (){
var s__24531__$1 = s__24531;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__24531__$1);
if(temp__5278__auto__){
var s__24531__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24531__$2)){
var c__8960__auto__ = cljs.core.chunk_first(s__24531__$2);
var size__8961__auto__ = cljs.core.count(c__8960__auto__);
var b__24533 = cljs.core.chunk_buffer(size__8961__auto__);
if((function (){var i__24532 = (0);
while(true){
if((i__24532 < size__8961__auto__)){
var vec__24534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8960__auto__,i__24532);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24534,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__24532,vec__24534,name,branches,c__8960__auto__,size__8961__auto__,b__24533,s__24531__$2,temp__5278__auto__){
return (function (p1__24529_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__24529_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__24529_SHARP_),null,null,null));
});})(i__24532,vec__24534,name,branches,c__8960__auto__,size__8961__auto__,b__24533,s__24531__$2,temp__5278__auto__))
,branches);
cljs.core.chunk_append(b__24533,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__24540 = (i__24532 + (1));
i__24532 = G__24540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24533),datascript$parser$parse_rules_$_iter__24530(cljs.core.chunk_rest(s__24531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24533),null);
}
} else {
var vec__24537 = cljs.core.first(s__24531__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__24537,name,branches,s__24531__$2,temp__5278__auto__){
return (function (p1__24529_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__24529_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__24529_SHARP_),null,null,null));
});})(vec__24537,name,branches,s__24531__$2,temp__5278__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__24530(cljs.core.rest(s__24531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8962__auto__(cljs.core.group_by(cljs.core.cst$kw$name,datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8773__auto__,k__8774__auto__){
var self__ = this;
var this__8773__auto____$1 = this;
return this__8773__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8774__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8775__auto__,k24545,else__8776__auto__){
var self__ = this;
var this__8775__auto____$1 = this;
var G__24549 = k24545;
var G__24549__$1 = (((G__24549 instanceof cljs.core.Keyword))?G__24549.fqn:null);
switch (G__24549__$1) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24545,else__8776__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8787__auto__,writer__8788__auto__,opts__8789__auto__){
var self__ = this;
var this__8787__auto____$1 = this;
var pr_pair__8790__auto__ = ((function (this__8787__auto____$1){
return (function (keyval__8791__auto__){
return cljs.core.pr_sequential_writer(writer__8788__auto__,cljs.core.pr_writer,""," ","",opts__8789__auto__,keyval__8791__auto__);
});})(this__8787__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8788__auto__,pr_pair__8790__auto__,"#datascript.parser.Query{",", ","}",opts__8789__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24544){
var self__ = this;
var G__24544__$1 = this;
return (new cljs.core.RecordIter((0),G__24544__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8771__auto__){
var self__ = this;
var this__8771__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8768__auto__){
var self__ = this;
var this__8768__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8777__auto__){
var self__ = this;
var this__8777__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8769__auto__){
var self__ = this;
var this__8769__auto____$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = (function (){var fexpr__24550 = cljs.core.with_meta(((function (h__8541__auto__,this__8769__auto____$1){
return (function (coll__8770__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__8770__auto__));
});})(h__8541__auto__,this__8769__auto____$1))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__24550.cljs$core$IFn$_invoke$arity$1 ? fexpr__24550.cljs$core$IFn$_invoke$arity$1(this__8769__auto____$1) : fexpr__24550.call(null,this__8769__auto____$1));
})();
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24546,other24547){
var self__ = this;
var this24546__$1 = this;
return (!((other24547 == null))) && ((this24546__$1.constructor === other24547.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24546__$1.find,other24547.find)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24546__$1.with,other24547.with)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24546__$1.in,other24547.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24546__$1.where,other24547.where)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24546__$1.__extmap,other24547.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8782__auto__,k__8783__auto__){
var self__ = this;
var this__8782__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$find,null,cljs.core.cst$kw$where,null,cljs.core.cst$kw$with,null,cljs.core.cst$kw$in,null], null), null),k__8783__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8782__auto____$1),self__.__meta),k__8783__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8783__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8780__auto__,k__8781__auto__,G__24544){
var self__ = this;
var this__8780__auto____$1 = this;
var pred__24551 = cljs.core.keyword_identical_QMARK_;
var expr__24552 = k__8781__auto__;
if(cljs.core.truth_((function (){var G__24554 = cljs.core.cst$kw$find;
var G__24555 = expr__24552;
return (pred__24551.cljs$core$IFn$_invoke$arity$2 ? pred__24551.cljs$core$IFn$_invoke$arity$2(G__24554,G__24555) : pred__24551.call(null,G__24554,G__24555));
})())){
return (new datascript.parser.Query(G__24544,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24556 = cljs.core.cst$kw$with;
var G__24557 = expr__24552;
return (pred__24551.cljs$core$IFn$_invoke$arity$2 ? pred__24551.cljs$core$IFn$_invoke$arity$2(G__24556,G__24557) : pred__24551.call(null,G__24556,G__24557));
})())){
return (new datascript.parser.Query(self__.find,G__24544,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24558 = cljs.core.cst$kw$in;
var G__24559 = expr__24552;
return (pred__24551.cljs$core$IFn$_invoke$arity$2 ? pred__24551.cljs$core$IFn$_invoke$arity$2(G__24558,G__24559) : pred__24551.call(null,G__24558,G__24559));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,G__24544,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24560 = cljs.core.cst$kw$where;
var G__24561 = expr__24552;
return (pred__24551.cljs$core$IFn$_invoke$arity$2 ? pred__24551.cljs$core$IFn$_invoke$arity$2(G__24560,G__24561) : pred__24551.call(null,G__24560,G__24561));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__24544,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8781__auto__,G__24544),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8785__auto__){
var self__ = this;
var this__8785__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8772__auto__,G__24544){
var self__ = this;
var this__8772__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__24544,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8778__auto__,entry__8779__auto__){
var self__ = this;
var this__8778__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8779__auto__)){
return this__8778__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8779__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8778__auto____$1,entry__8779__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__22716__auto__,f24541){
var self__ = this;
var this__22716__auto____$1 = this;
var new__22717__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.find,f24541),datascript.parser.postwalk(self__.with$,f24541),datascript.parser.postwalk(self__.in$,f24541),datascript.parser.postwalk(self__.where,f24541),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__22716__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__22718__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__22717__auto__,meta__22718__auto__);
} else {
return new__22717__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___22719__auto__,pred24542,acc24543){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24542,self__.where,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24542,self__.in$,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24542,self__.with$,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24542,self__.find,acc24543))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___22719__auto__,acc24543){
var self__ = this;
var ___22719__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc24543,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$find,cljs.core.cst$sym$with,cljs.core.cst$sym$in,cljs.core.cst$sym$where], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__8811__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__){
return cljs.core._write(writer__8812__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__24548){
return (new datascript.parser.Query(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(G__24548),cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(G__24548),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__24548),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(G__24548),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24548,cljs.core.cst$kw$find,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], 0))),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5276__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5276__auto__)){
var q = temp__5276__auto__;
if((q instanceof cljs.core.Keyword)){
var G__24563 = parsed;
var G__24564 = q;
var G__24565 = cljs.core.next(qs);
parsed = G__24563;
key = G__24564;
qs = G__24565;
continue;
} else {
var G__24566 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__24567 = key;
var G__24568 = cljs.core.next(qs);
parsed = G__24566;
key = G__24567;
qs = G__24568;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_24575 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_24576 = cljs.core.set(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
var in_vars_24577 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_24578 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q)));
var unknown_24579 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_24575,with_vars_24576),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_24578,in_vars_24577));
var shared_24580 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_24575,with_vars_24576);
if(cljs.core.empty_QMARK_(unknown_24579)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query for unknown vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_24579)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_24579,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(shared_24580)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":in and :with should not use same variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,shared_24580)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,shared_24580,cljs.core.cst$kw$form,form], null));
}

var in_vars_24581 = datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_sources_24582 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_24581){
return (function (p1__24569_SHARP_){
return (p1__24569_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_24581))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_rules_24583 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_24581,in_sources_24582){
return (function (p1__24570_SHARP_){
return (p1__24570_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_24581,in_sources_24582))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__8087__auto__ = datascript.parser.distinct_QMARK_(in_vars_24581);
if(cljs.core.truth_(and__8087__auto__)){
var and__8087__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_24582);
if(cljs.core.truth_(and__8087__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_24583);
} else {
return and__8087__auto____$1;
}
} else {
return and__8087__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var with_vars_24584 = datascript.parser.collect_vars(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_24584))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var in_sources_24585 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__24571_SHARP_){
return (p1__24571_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_24586 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (in_sources_24585){
return (function (p1__24572_SHARP_){
return (p1__24572_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_24585))
,cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_24587 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_24586,in_sources_24585);
if(cljs.core.empty_QMARK_(unknown_24587)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Where uses unknown source vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_24587)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_24587,cljs.core.cst$kw$form,form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__24573_SHARP_){
return (p1__24573_SHARP_ instanceof datascript.parser.RuleExpr);
}),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (rule_exprs){
return (function (p1__24574_SHARP_){
return (p1__24574_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_(rule_exprs))) && (cljs.core.empty_QMARK_(rules_vars))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,q], null))})()
));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$find,datascript.parser.parse_find(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$with,(function (){var temp__5278__auto__ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5278__auto__)){
var with$ = temp__5278__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),cljs.core.cst$kw$in,datascript.parser.parse_in(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null))),cljs.core.cst$kw$where,datascript.parser.parse_where(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query(res,q);

return res;
});
