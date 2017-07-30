// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (datascript.parser._collect[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__9496__auto__.call(null,_,pred,acc));
} else {
var m__9496__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__9496__auto____$1.call(null,_,pred,acc));
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
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__9496__auto__.call(null,_,acc));
} else {
var m__9496__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,acc) : m__9496__auto____$1.call(null,_,acc));
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
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (datascript.parser._postwalk[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__9496__auto__.call(null,_,f));
} else {
var m__9496__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,f) : m__9496__auto____$1.call(null,_,f));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24840_SHARP_,p2__24839_SHARP_){
var temp__5276__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__24839_SHARP_) : parse_el.call(null,p2__24839_SHARP_));
if(cljs.core.truth_(temp__5276__auto__)){
var parsed = temp__5276__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24840_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__24842 = arguments.length;
switch (G__24842) {
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
var or__8762__auto__ = cljs.core.empty_QMARK_(coll);
if(or__8762__auto__){
return or__8762__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__24848 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24848) : f.call(null,G__24848));
} else {
if(cljs.core.map_QMARK_(form)){
var G__24849 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__24850){
var vec__24851 = p__24850;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24849) : f.call(null,G__24849));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__24854 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24845_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__24845_SHARP_,f) : datascript.parser.postwalk.call(null,p1__24845_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24854) : f.call(null,G__24854));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__24855 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24846_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__24846_SHARP_,f) : datascript.parser.postwalk.call(null,p1__24846_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24855) : f.call(null,G__24855));
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
var or__8762__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24860,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24864 = k24860;
switch (G__24864) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24860,else__9453__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Placeholder{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24859){
var self__ = this;
var G__24859__$1 = this;
return (new cljs.core.RecordIter((0),G__24859__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24865 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24865(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24861,other24862){
var self__ = this;
var this24861__$1 = this;
return (!((other24862 == null))) && ((this24861__$1.constructor === other24862.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24861__$1.__extmap,other24862.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24859){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24866 = cljs.core.keyword_identical_QMARK_;
var expr__24867 = k__9458__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24859),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24859){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Placeholder(G__24859,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24856){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24857,acc24858){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24858;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24858){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24858;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__24863){
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24863)),null));
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
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24874,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24878 = k24874;
var G__24878__$1 = (((G__24878 instanceof cljs.core.Keyword))?G__24878.fqn:null);
switch (G__24878__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24874,else__9453__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Variable{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24873){
var self__ = this;
var G__24873__$1 = this;
return (new cljs.core.RecordIter((0),G__24873__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24879 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24879(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24875,other24876){
var self__ = this;
var this24875__$1 = this;
return (!((other24876 == null))) && ((this24875__$1.constructor === other24876.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24875__$1.symbol,other24876.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24875__$1.__extmap,other24876.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24873){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24880 = cljs.core.keyword_identical_QMARK_;
var expr__24881 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__24883 = cljs.core.cst$kw$symbol;
var G__24884 = expr__24881;
return (pred__24880.cljs$core$IFn$_invoke$arity$2 ? pred__24880.cljs$core$IFn$_invoke$arity$2(G__24883,G__24884) : pred__24880.call(null,G__24883,G__24884));
})())){
return (new datascript.parser.Variable(G__24873,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24873),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24873){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__24873,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24870){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f24870),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24871,acc24872){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24871,self__.symbol,acc24872);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24872){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24872,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24872,self__.symbol));
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__24877){
return (new datascript.parser.Variable(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24877),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24877,cljs.core.cst$kw$symbol)),null));
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
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24890,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24894 = k24890;
var G__24894__$1 = (((G__24894 instanceof cljs.core.Keyword))?G__24894.fqn:null);
switch (G__24894__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24890,else__9453__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.SrcVar{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24889){
var self__ = this;
var G__24889__$1 = this;
return (new cljs.core.RecordIter((0),G__24889__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24895 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24895(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24891,other24892){
var self__ = this;
var this24891__$1 = this;
return (!((other24892 == null))) && ((this24891__$1.constructor === other24892.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24891__$1.symbol,other24892.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24891__$1.__extmap,other24892.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24889){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24896 = cljs.core.keyword_identical_QMARK_;
var expr__24897 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__24899 = cljs.core.cst$kw$symbol;
var G__24900 = expr__24897;
return (pred__24896.cljs$core$IFn$_invoke$arity$2 ? pred__24896.cljs$core$IFn$_invoke$arity$2(G__24899,G__24900) : pred__24896.call(null,G__24899,G__24900));
})())){
return (new datascript.parser.SrcVar(G__24889,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24889),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24889){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__24889,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24886){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f24886),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24887,acc24888){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24887,self__.symbol,acc24888);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24888){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24888,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24888,self__.symbol));
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__24893){
return (new datascript.parser.SrcVar(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24893),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24893,cljs.core.cst$kw$symbol)),null));
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
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24906,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24910 = k24906;
switch (G__24910) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24906,else__9453__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24905){
var self__ = this;
var G__24905__$1 = this;
return (new cljs.core.RecordIter((0),G__24905__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24911 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24911(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24907,other24908){
var self__ = this;
var this24907__$1 = this;
return (!((other24908 == null))) && ((this24907__$1.constructor === other24908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24907__$1.__extmap,other24908.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24905){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24912 = cljs.core.keyword_identical_QMARK_;
var expr__24913 = k__9458__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24905),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24905){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__24905,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24902){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24903,acc24904){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24904;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24904){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24904;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__24909){
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24909)),null));
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
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24920,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24924 = k24920;
switch (G__24924) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24920,else__9453__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.RulesVar{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24919){
var self__ = this;
var G__24919__$1 = this;
return (new cljs.core.RecordIter((0),G__24919__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24925 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24925(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24921,other24922){
var self__ = this;
var this24921__$1 = this;
return (!((other24922 == null))) && ((this24921__$1.constructor === other24922.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24921__$1.__extmap,other24922.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24919){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24926 = cljs.core.keyword_identical_QMARK_;
var expr__24927 = k__9458__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24919),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24919){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.RulesVar(G__24919,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24916){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24917,acc24918){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24918;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24918){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24918;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__24923){
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24923)),null));
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
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24934,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24938 = k24934;
var G__24938__$1 = (((G__24938 instanceof cljs.core.Keyword))?G__24938.fqn:null);
switch (G__24938__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24934,else__9453__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Constant{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24933){
var self__ = this;
var G__24933__$1 = this;
return (new cljs.core.RecordIter((0),G__24933__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24939 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24939(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24935,other24936){
var self__ = this;
var this24935__$1 = this;
return (!((other24936 == null))) && ((this24935__$1.constructor === other24936.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24935__$1.value,other24936.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24935__$1.__extmap,other24936.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24933){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24940 = cljs.core.keyword_identical_QMARK_;
var expr__24941 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__24943 = cljs.core.cst$kw$value;
var G__24944 = expr__24941;
return (pred__24940.cljs$core$IFn$_invoke$arity$2 ? pred__24940.cljs$core$IFn$_invoke$arity$2(G__24943,G__24944) : pred__24940.call(null,G__24943,G__24944));
})())){
return (new datascript.parser.Constant(G__24933,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24933),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24933){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__24933,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24930){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f24930),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24931,acc24932){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24931,self__.value,acc24932);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24932){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24932,self__.value) : datascript.parser.collect_vars_acc.call(null,acc24932,self__.value));
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__24937){
return (new datascript.parser.Constant(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__24937),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24937,cljs.core.cst$kw$value)),null));
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
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24950,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24954 = k24950;
var G__24954__$1 = (((G__24954 instanceof cljs.core.Keyword))?G__24954.fqn:null);
switch (G__24954__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24950,else__9453__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24949){
var self__ = this;
var G__24949__$1 = this;
return (new cljs.core.RecordIter((0),G__24949__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24955 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24955(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24951,other24952){
var self__ = this;
var this24951__$1 = this;
return (!((other24952 == null))) && ((this24951__$1.constructor === other24952.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24951__$1.symbol,other24952.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24951__$1.__extmap,other24952.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24949){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24956 = cljs.core.keyword_identical_QMARK_;
var expr__24957 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__24959 = cljs.core.cst$kw$symbol;
var G__24960 = expr__24957;
return (pred__24956.cljs$core$IFn$_invoke$arity$2 ? pred__24956.cljs$core$IFn$_invoke$arity$2(G__24959,G__24960) : pred__24956.call(null,G__24959,G__24960));
})())){
return (new datascript.parser.PlainSymbol(G__24949,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24949),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24949){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__24949,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24946){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f24946),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24947,acc24948){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24947,self__.symbol,acc24948);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24948){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24948,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24948,self__.symbol));
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__24953){
return (new datascript.parser.PlainSymbol(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24953),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24953,cljs.core.cst$kw$symbol)),null));
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
var or__8762__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_constant(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
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
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24966,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24970 = k24966;
var G__24970__$1 = (((G__24970 instanceof cljs.core.Keyword))?G__24970.fqn:null);
switch (G__24970__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24966,else__9453__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.RuleVars{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24965){
var self__ = this;
var G__24965__$1 = this;
return (new cljs.core.RecordIter((0),G__24965__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$required,cljs.core.cst$kw$free], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24971 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24971(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24967,other24968){
var self__ = this;
var this24967__$1 = this;
return (!((other24968 == null))) && ((this24967__$1.constructor === other24968.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24967__$1.required,other24968.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24967__$1.free,other24968.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24967__$1.__extmap,other24968.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$free,null,cljs.core.cst$kw$required,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24965){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24972 = cljs.core.keyword_identical_QMARK_;
var expr__24973 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__24975 = cljs.core.cst$kw$required;
var G__24976 = expr__24973;
return (pred__24972.cljs$core$IFn$_invoke$arity$2 ? pred__24972.cljs$core$IFn$_invoke$arity$2(G__24975,G__24976) : pred__24972.call(null,G__24975,G__24976));
})())){
return (new datascript.parser.RuleVars(G__24965,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24977 = cljs.core.cst$kw$free;
var G__24978 = expr__24973;
return (pred__24972.cljs$core$IFn$_invoke$arity$2 ? pred__24972.cljs$core$IFn$_invoke$arity$2(G__24977,G__24978) : pred__24972.call(null,G__24977,G__24978));
})())){
return (new datascript.parser.RuleVars(self__.required,G__24965,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24965),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24965){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__24965,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24962){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f24962),datascript.parser.postwalk(self__.free,f24962),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24963,acc24964){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24963,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24963,self__.required,acc24964));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24964){
var self__ = this;
var ___23655__auto____$1 = this;
var G__24979 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24964,self__.required) : datascript.parser.collect_vars_acc.call(null,acc24964,self__.required));
var G__24980 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24979,G__24980) : datascript.parser.collect_vars_acc.call(null,G__24979,G__24980));
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$required,cljs.core.cst$sym$free], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__24969){
return (new datascript.parser.RuleVars(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__24969),cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(G__24969),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24969,cljs.core.cst$kw$required,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$free], 0))),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__24982 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(1),null);
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
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k24989,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__24993 = k24989;
switch (G__24993) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24989,else__9453__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24988){
var self__ = this;
var G__24988__$1 = this;
return (new cljs.core.RecordIter((0),G__24988__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__24994 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__24994(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24990,other24991){
var self__ = this;
var this24990__$1 = this;
return (!((other24991 == null))) && ((this24990__$1.constructor === other24991.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24990__$1.__extmap,other24991.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__24988){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__24995 = cljs.core.keyword_identical_QMARK_;
var expr__24996 = k__9458__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__24988),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__24988){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__24988,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24985){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred24986,acc24987){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24987;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc24987){
var self__ = this;
var ___23655__auto____$1 = this;
return acc24987;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__24992){
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24992)),null));
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
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25003,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25007 = k25003;
var G__25007__$1 = (((G__25007 instanceof cljs.core.Keyword))?G__25007.fqn:null);
switch (G__25007__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25003,else__9453__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.BindScalar{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25002){
var self__ = this;
var G__25002__$1 = this;
return (new cljs.core.RecordIter((0),G__25002__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25008 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25008(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25004,other25005){
var self__ = this;
var this25004__$1 = this;
return (!((other25005 == null))) && ((this25004__$1.constructor === other25005.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25004__$1.variable,other25005.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25004__$1.__extmap,other25005.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variable,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25002){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25009 = cljs.core.keyword_identical_QMARK_;
var expr__25010 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25012 = cljs.core.cst$kw$variable;
var G__25013 = expr__25010;
return (pred__25009.cljs$core$IFn$_invoke$arity$2 ? pred__25009.cljs$core$IFn$_invoke$arity$2(G__25012,G__25013) : pred__25009.call(null,G__25012,G__25013));
})())){
return (new datascript.parser.BindScalar(G__25002,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25002),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25002){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__25002,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f24999){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f24999),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25000,acc25001){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25000,self__.variable,acc25001);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25001){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25001,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc25001,self__.variable));
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$variable], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__25006){
return (new datascript.parser.BindScalar(cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__25006),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25006,cljs.core.cst$kw$variable)),null));
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
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25019,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25023 = k25019;
var G__25023__$1 = (((G__25023 instanceof cljs.core.Keyword))?G__25023.fqn:null);
switch (G__25023__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25019,else__9453__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.BindTuple{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25018){
var self__ = this;
var G__25018__$1 = this;
return (new cljs.core.RecordIter((0),G__25018__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25024 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25024(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25020,other25021){
var self__ = this;
var this25020__$1 = this;
return (!((other25021 == null))) && ((this25020__$1.constructor === other25021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25020__$1.bindings,other25021.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25020__$1.__extmap,other25021.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25018){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25025 = cljs.core.keyword_identical_QMARK_;
var expr__25026 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25028 = cljs.core.cst$kw$bindings;
var G__25029 = expr__25026;
return (pred__25025.cljs$core$IFn$_invoke$arity$2 ? pred__25025.cljs$core$IFn$_invoke$arity$2(G__25028,G__25029) : pred__25025.call(null,G__25028,G__25029));
})())){
return (new datascript.parser.BindTuple(G__25018,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25018),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25018){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__25018,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25015){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f25015),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25016,acc25017){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25016,self__.bindings,acc25017);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25017){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25017,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc25017,self__.bindings));
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__25022){
return (new datascript.parser.BindTuple(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__25022),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25022,cljs.core.cst$kw$bindings)),null));
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
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25035,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25039 = k25035;
var G__25039__$1 = (((G__25039 instanceof cljs.core.Keyword))?G__25039.fqn:null);
switch (G__25039__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25035,else__9453__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.BindColl{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25034){
var self__ = this;
var G__25034__$1 = this;
return (new cljs.core.RecordIter((0),G__25034__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25040 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25040(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25036,other25037){
var self__ = this;
var this25036__$1 = this;
return (!((other25037 == null))) && ((this25036__$1.constructor === other25037.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25036__$1.binding,other25037.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25036__$1.__extmap,other25037.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25034){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25041 = cljs.core.keyword_identical_QMARK_;
var expr__25042 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25044 = cljs.core.cst$kw$binding;
var G__25045 = expr__25042;
return (pred__25041.cljs$core$IFn$_invoke$arity$2 ? pred__25041.cljs$core$IFn$_invoke$arity$2(G__25044,G__25045) : pred__25041.call(null,G__25044,G__25045));
})())){
return (new datascript.parser.BindColl(G__25034,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25034),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25034){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__25034,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25031){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f25031),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25032,acc25033){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25032,self__.binding,acc25033);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25033){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25033,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc25033,self__.binding));
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__25038){
return (new datascript.parser.BindColl(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__25038),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25038,cljs.core.cst$kw$binding)),null));
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
if(cljs.core.truth_((function (){var and__8750__auto__ = datascript.parser.of_size_QMARK_(form,(2));
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$$$$);
} else {
return and__8750__auto__;
}
})())){
var temp__5276__auto__ = (function (){var G__25047 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__25047) : datascript.parser.parse_binding.call(null,G__25047));
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
var or__8762__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
if(cljs.core.truth_((function (){var and__8750__auto__ = datascript.parser.of_size_QMARK_(form,(1));
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.sequential_QMARK_(cljs.core.first(form));
} else {
return and__8750__auto__;
}
})())){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__8762__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
} else {
var or__8762__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__8762__auto____$3)){
return or__8762__auto____$3;
} else {
var or__8762__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__8762__auto____$4)){
return or__8762__auto____$4;
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
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (datascript.parser._find_vars[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto__.call(null,this$));
} else {
var m__9496__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto____$1.call(null,this$));
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

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25052,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25056 = k25052;
var G__25056__$1 = (((G__25056 instanceof cljs.core.Keyword))?G__25056.fqn:null);
switch (G__25056__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25052,else__9453__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Aggregate{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25051){
var self__ = this;
var G__25051__$1 = this;
return (new cljs.core.RecordIter((0),G__25051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25057 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25057(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25053,other25054){
var self__ = this;
var this25053__$1 = this;
return (!((other25054 == null))) && ((this25053__$1.constructor === other25054.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25053__$1.fn,other25054.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25053__$1.args,other25054.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25053__$1.__extmap,other25054.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25051){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25058 = cljs.core.keyword_identical_QMARK_;
var expr__25059 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25061 = cljs.core.cst$kw$fn;
var G__25062 = expr__25059;
return (pred__25058.cljs$core$IFn$_invoke$arity$2 ? pred__25058.cljs$core$IFn$_invoke$arity$2(G__25061,G__25062) : pred__25058.call(null,G__25061,G__25062));
})())){
return (new datascript.parser.Aggregate(G__25051,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25063 = cljs.core.cst$kw$args;
var G__25064 = expr__25059;
return (pred__25058.cljs$core$IFn$_invoke$arity$2 ? pred__25058.cljs$core$IFn$_invoke$arity$2(G__25063,G__25064) : pred__25058.call(null,G__25063,G__25064));
})())){
return (new datascript.parser.Aggregate(self__.fn,G__25051,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25051),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25051){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__25051,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25048){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f25048),datascript.parser.postwalk(self__.args,f25048),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25049,acc25050){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25049,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25049,self__.fn,acc25050));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25050){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25065 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25050,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc25050,self__.fn));
var G__25066 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25065,G__25066) : datascript.parser.collect_vars_acc.call(null,G__25065,G__25066));
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__25055){
return (new datascript.parser.Aggregate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__25055),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25055),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25055,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
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

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25072,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25076 = k25072;
var G__25076__$1 = (((G__25076 instanceof cljs.core.Keyword))?G__25076.fqn:null);
switch (G__25076__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25072,else__9453__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Pull{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25071){
var self__ = this;
var G__25071__$1 = this;
return (new cljs.core.RecordIter((0),G__25071__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25077 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25077(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25073,other25074){
var self__ = this;
var this25073__$1 = this;
return (!((other25074 == null))) && ((this25073__$1.constructor === other25074.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25073__$1.source,other25074.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25073__$1.variable,other25074.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25073__$1.pattern,other25074.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25073__$1.__extmap,other25074.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$variable,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25071){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25078 = cljs.core.keyword_identical_QMARK_;
var expr__25079 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25081 = cljs.core.cst$kw$source;
var G__25082 = expr__25079;
return (pred__25078.cljs$core$IFn$_invoke$arity$2 ? pred__25078.cljs$core$IFn$_invoke$arity$2(G__25081,G__25082) : pred__25078.call(null,G__25081,G__25082));
})())){
return (new datascript.parser.Pull(G__25071,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25083 = cljs.core.cst$kw$variable;
var G__25084 = expr__25079;
return (pred__25078.cljs$core$IFn$_invoke$arity$2 ? pred__25078.cljs$core$IFn$_invoke$arity$2(G__25083,G__25084) : pred__25078.call(null,G__25083,G__25084));
})())){
return (new datascript.parser.Pull(self__.source,G__25071,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25085 = cljs.core.cst$kw$pattern;
var G__25086 = expr__25079;
return (pred__25078.cljs$core$IFn$_invoke$arity$2 ? pred__25078.cljs$core$IFn$_invoke$arity$2(G__25085,G__25086) : pred__25078.call(null,G__25085,G__25086));
})())){
return (new datascript.parser.Pull(self__.source,self__.variable,G__25071,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25071),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25071){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__25071,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25068){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f25068),datascript.parser.postwalk(self__.variable,f25068),datascript.parser.postwalk(self__.pattern,f25068),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25069,acc25070){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25069,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25069,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25069,self__.source,acc25070)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25070){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25087 = (function (){var G__25089 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25070,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25070,self__.source));
var G__25090 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25089,G__25090) : datascript.parser.collect_vars_acc.call(null,G__25089,G__25090));
})();
var G__25088 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25087,G__25088) : datascript.parser.collect_vars_acc.call(null,G__25087,G__25088));
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$variable,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__25075){
return (new datascript.parser.Pull(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25075),cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__25075),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__25075),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25075,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], 0))),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (datascript.parser.find_elements[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto__.call(null,this$));
} else {
var m__9496__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto____$1.call(null,this$));
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
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25096,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25100 = k25096;
var G__25100__$1 = (((G__25100 instanceof cljs.core.Keyword))?G__25100.fqn:null);
switch (G__25100__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25096,else__9453__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.FindRel{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25095){
var self__ = this;
var G__25095__$1 = this;
return (new cljs.core.RecordIter((0),G__25095__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25101 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25101(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25097,other25098){
var self__ = this;
var this25097__$1 = this;
return (!((other25098 == null))) && ((this25097__$1.constructor === other25098.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25097__$1.elements,other25098.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25097__$1.__extmap,other25098.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25095){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25102 = cljs.core.keyword_identical_QMARK_;
var expr__25103 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25105 = cljs.core.cst$kw$elements;
var G__25106 = expr__25103;
return (pred__25102.cljs$core$IFn$_invoke$arity$2 ? pred__25102.cljs$core$IFn$_invoke$arity$2(G__25105,G__25106) : pred__25102.call(null,G__25105,G__25106));
})())){
return (new datascript.parser.FindRel(G__25095,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25095),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25095){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__25095,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25092){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f25092),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25093,acc25094){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25093,self__.elements,acc25094);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25094){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25094,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc25094,self__.elements));
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__25099){
return (new datascript.parser.FindRel(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__25099),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25099,cljs.core.cst$kw$elements)),null));
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
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25112,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25116 = k25112;
var G__25116__$1 = (((G__25116 instanceof cljs.core.Keyword))?G__25116.fqn:null);
switch (G__25116__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25112,else__9453__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.FindColl{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25111){
var self__ = this;
var G__25111__$1 = this;
return (new cljs.core.RecordIter((0),G__25111__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25117 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25117(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25113,other25114){
var self__ = this;
var this25113__$1 = this;
return (!((other25114 == null))) && ((this25113__$1.constructor === other25114.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25113__$1.element,other25114.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25113__$1.__extmap,other25114.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25111){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25118 = cljs.core.keyword_identical_QMARK_;
var expr__25119 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25121 = cljs.core.cst$kw$element;
var G__25122 = expr__25119;
return (pred__25118.cljs$core$IFn$_invoke$arity$2 ? pred__25118.cljs$core$IFn$_invoke$arity$2(G__25121,G__25122) : pred__25118.call(null,G__25121,G__25122));
})())){
return (new datascript.parser.FindColl(G__25111,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25111),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25111){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__25111,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25108){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f25108),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25109,acc25110){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25109,self__.element,acc25110);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25110){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25110,self__.element) : datascript.parser.collect_vars_acc.call(null,acc25110,self__.element));
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__25115){
return (new datascript.parser.FindColl(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__25115),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25115,cljs.core.cst$kw$element)),null));
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
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25128,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25132 = k25128;
var G__25132__$1 = (((G__25132 instanceof cljs.core.Keyword))?G__25132.fqn:null);
switch (G__25132__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25128,else__9453__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.FindScalar{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25127){
var self__ = this;
var G__25127__$1 = this;
return (new cljs.core.RecordIter((0),G__25127__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25133 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25133(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25129,other25130){
var self__ = this;
var this25129__$1 = this;
return (!((other25130 == null))) && ((this25129__$1.constructor === other25130.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25129__$1.element,other25130.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25129__$1.__extmap,other25130.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25127){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25134 = cljs.core.keyword_identical_QMARK_;
var expr__25135 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25137 = cljs.core.cst$kw$element;
var G__25138 = expr__25135;
return (pred__25134.cljs$core$IFn$_invoke$arity$2 ? pred__25134.cljs$core$IFn$_invoke$arity$2(G__25137,G__25138) : pred__25134.call(null,G__25137,G__25138));
})())){
return (new datascript.parser.FindScalar(G__25127,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25127),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25127){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__25127,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25124){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f25124),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25125,acc25126){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25125,self__.element,acc25126);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25126){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25126,self__.element) : datascript.parser.collect_vars_acc.call(null,acc25126,self__.element));
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__25131){
return (new datascript.parser.FindScalar(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__25131),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25131,cljs.core.cst$kw$element)),null));
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
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25144,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25148 = k25144;
var G__25148__$1 = (((G__25148 instanceof cljs.core.Keyword))?G__25148.fqn:null);
switch (G__25148__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25144,else__9453__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.FindTuple{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25143){
var self__ = this;
var G__25143__$1 = this;
return (new cljs.core.RecordIter((0),G__25143__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25149 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25149(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25145,other25146){
var self__ = this;
var this25145__$1 = this;
return (!((other25146 == null))) && ((this25145__$1.constructor === other25146.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25145__$1.elements,other25146.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25145__$1.__extmap,other25146.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25143){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25150 = cljs.core.keyword_identical_QMARK_;
var expr__25151 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25153 = cljs.core.cst$kw$elements;
var G__25154 = expr__25151;
return (pred__25150.cljs$core$IFn$_invoke$arity$2 ? pred__25150.cljs$core$IFn$_invoke$arity$2(G__25153,G__25154) : pred__25150.call(null,G__25153,G__25154));
})())){
return (new datascript.parser.FindTuple(G__25143,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25143),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25143){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__25143,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25140){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f25140),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25141,acc25142){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25141,self__.elements,acc25142);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25142){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25142,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc25142,self__.elements));
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__25147){
return (new datascript.parser.FindTuple(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__25147),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25147,cljs.core.cst$kw$elements)),null));
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
var vec__25156 = form;
var seq__25157 = cljs.core.seq(vec__25156);
var first__25158 = cljs.core.first(seq__25157);
var seq__25157__$1 = cljs.core.next(seq__25157);
var fn = first__25158;
var args = seq__25157__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__8750__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
return args_STAR_;
} else {
return and__8750__auto__;
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
var vec__25159 = form;
var seq__25160 = cljs.core.seq(vec__25159);
var first__25161 = cljs.core.first(seq__25160);
var seq__25160__$1 = cljs.core.next(seq__25160);
var _ = first__25161;
var first__25161__$1 = cljs.core.first(seq__25160__$1);
var seq__25160__$2 = cljs.core.next(seq__25160__$1);
var fn = first__25161__$1;
var args = seq__25160__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__8750__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
return args_STAR_;
} else {
return and__8750__auto__;
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
var vec__25162 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__8762__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__8750__auto__ = src_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
var and__8750__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__8750__auto____$1)){
return pattern_STAR_;
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
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
var or__8762__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__25165 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__25165 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__25165,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
if((cljs.core.sequential_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),cljs.core.cst$sym$$$$))){
var G__25166 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__25166 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__25166,null,null,null));
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
var G__25167 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__25167 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__25167,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
var G__25168 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__25168 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__25168,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__8762__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
} else {
var or__8762__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__8762__auto____$3)){
return or__8762__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__8762__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_with,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5276__auto__ = (function (){var or__8762__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
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
var or__8762__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25173,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25177 = k25173;
var G__25177__$1 = (((G__25177 instanceof cljs.core.Keyword))?G__25177.fqn:null);
switch (G__25177__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25173,else__9453__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Pattern{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25172){
var self__ = this;
var G__25172__$1 = this;
return (new cljs.core.RecordIter((0),G__25172__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25178 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25178(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25174,other25175){
var self__ = this;
var this25174__$1 = this;
return (!((other25175 == null))) && ((this25174__$1.constructor === other25175.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25174__$1.source,other25175.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25174__$1.pattern,other25175.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25174__$1.__extmap,other25175.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25172){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25179 = cljs.core.keyword_identical_QMARK_;
var expr__25180 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25182 = cljs.core.cst$kw$source;
var G__25183 = expr__25180;
return (pred__25179.cljs$core$IFn$_invoke$arity$2 ? pred__25179.cljs$core$IFn$_invoke$arity$2(G__25182,G__25183) : pred__25179.call(null,G__25182,G__25183));
})())){
return (new datascript.parser.Pattern(G__25172,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25184 = cljs.core.cst$kw$pattern;
var G__25185 = expr__25180;
return (pred__25179.cljs$core$IFn$_invoke$arity$2 ? pred__25179.cljs$core$IFn$_invoke$arity$2(G__25184,G__25185) : pred__25179.call(null,G__25184,G__25185));
})())){
return (new datascript.parser.Pattern(self__.source,G__25172,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25172),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25172){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__25172,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25169){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f25169),datascript.parser.postwalk(self__.pattern,f25169),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25170,acc25171){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25170,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25170,self__.source,acc25171));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25171){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25186 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25171,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25171,self__.source));
var G__25187 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25186,G__25187) : datascript.parser.collect_vars_acc.call(null,G__25186,G__25187));
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__25176){
return (new datascript.parser.Pattern(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25176),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__25176),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25176,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pattern], 0))),null));
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
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25193,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25197 = k25193;
var G__25197__$1 = (((G__25197 instanceof cljs.core.Keyword))?G__25197.fqn:null);
switch (G__25197__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25193,else__9453__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Predicate{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25192){
var self__ = this;
var G__25192__$1 = this;
return (new cljs.core.RecordIter((0),G__25192__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25198 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25198(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25194,other25195){
var self__ = this;
var this25194__$1 = this;
return (!((other25195 == null))) && ((this25194__$1.constructor === other25195.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25194__$1.fn,other25195.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25194__$1.args,other25195.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25194__$1.__extmap,other25195.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25192){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25199 = cljs.core.keyword_identical_QMARK_;
var expr__25200 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25202 = cljs.core.cst$kw$fn;
var G__25203 = expr__25200;
return (pred__25199.cljs$core$IFn$_invoke$arity$2 ? pred__25199.cljs$core$IFn$_invoke$arity$2(G__25202,G__25203) : pred__25199.call(null,G__25202,G__25203));
})())){
return (new datascript.parser.Predicate(G__25192,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25204 = cljs.core.cst$kw$args;
var G__25205 = expr__25200;
return (pred__25199.cljs$core$IFn$_invoke$arity$2 ? pred__25199.cljs$core$IFn$_invoke$arity$2(G__25204,G__25205) : pred__25199.call(null,G__25204,G__25205));
})())){
return (new datascript.parser.Predicate(self__.fn,G__25192,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25192),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25192){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__25192,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25189){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f25189),datascript.parser.postwalk(self__.args,f25189),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25190,acc25191){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25190,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25190,self__.fn,acc25191));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25191){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25206 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25191,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc25191,self__.fn));
var G__25207 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25206,G__25207) : datascript.parser.collect_vars_acc.call(null,G__25206,G__25207));
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__25196){
return (new datascript.parser.Predicate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__25196),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25196),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25196,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
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
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25213,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25217 = k25213;
var G__25217__$1 = (((G__25217 instanceof cljs.core.Keyword))?G__25217.fqn:null);
switch (G__25217__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25213,else__9453__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Function{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25212){
var self__ = this;
var G__25212__$1 = this;
return (new cljs.core.RecordIter((0),G__25212__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args,cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25218 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25218(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25214,other25215){
var self__ = this;
var this25214__$1 = this;
return (!((other25215 == null))) && ((this25214__$1.constructor === other25215.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25214__$1.fn,other25215.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25214__$1.args,other25215.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25214__$1.binding,other25215.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25214__$1.__extmap,other25215.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$binding,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25212){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25219 = cljs.core.keyword_identical_QMARK_;
var expr__25220 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25222 = cljs.core.cst$kw$fn;
var G__25223 = expr__25220;
return (pred__25219.cljs$core$IFn$_invoke$arity$2 ? pred__25219.cljs$core$IFn$_invoke$arity$2(G__25222,G__25223) : pred__25219.call(null,G__25222,G__25223));
})())){
return (new datascript.parser.Function(G__25212,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25224 = cljs.core.cst$kw$args;
var G__25225 = expr__25220;
return (pred__25219.cljs$core$IFn$_invoke$arity$2 ? pred__25219.cljs$core$IFn$_invoke$arity$2(G__25224,G__25225) : pred__25219.call(null,G__25224,G__25225));
})())){
return (new datascript.parser.Function(self__.fn,G__25212,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25226 = cljs.core.cst$kw$binding;
var G__25227 = expr__25220;
return (pred__25219.cljs$core$IFn$_invoke$arity$2 ? pred__25219.cljs$core$IFn$_invoke$arity$2(G__25226,G__25227) : pred__25219.call(null,G__25226,G__25227));
})())){
return (new datascript.parser.Function(self__.fn,self__.args,G__25212,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25212),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25212){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__25212,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25209){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f25209),datascript.parser.postwalk(self__.args,f25209),datascript.parser.postwalk(self__.binding,f25209),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25210,acc25211){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25210,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25210,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25210,self__.fn,acc25211)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25211){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25228 = (function (){var G__25230 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25211,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc25211,self__.fn));
var G__25231 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25230,G__25231) : datascript.parser.collect_vars_acc.call(null,G__25230,G__25231));
})();
var G__25229 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25228,G__25229) : datascript.parser.collect_vars_acc.call(null,G__25228,G__25229));
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args,cljs.core.cst$sym$binding], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__25216){
return (new datascript.parser.Function(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__25216),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25216),cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__25216),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25216,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args,cljs.core.cst$kw$binding], 0))),null));
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
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25237,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25241 = k25237;
var G__25241__$1 = (((G__25241 instanceof cljs.core.Keyword))?G__25241.fqn:null);
switch (G__25241__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25237,else__9453__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25236){
var self__ = this;
var G__25236__$1 = this;
return (new cljs.core.RecordIter((0),G__25236__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$name,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25242 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25242(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25238,other25239){
var self__ = this;
var this25238__$1 = this;
return (!((other25239 == null))) && ((this25238__$1.constructor === other25239.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25238__$1.source,other25239.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25238__$1.name,other25239.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25238__$1.args,other25239.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25238__$1.__extmap,other25239.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$source,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25236){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25243 = cljs.core.keyword_identical_QMARK_;
var expr__25244 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25246 = cljs.core.cst$kw$source;
var G__25247 = expr__25244;
return (pred__25243.cljs$core$IFn$_invoke$arity$2 ? pred__25243.cljs$core$IFn$_invoke$arity$2(G__25246,G__25247) : pred__25243.call(null,G__25246,G__25247));
})())){
return (new datascript.parser.RuleExpr(G__25236,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25248 = cljs.core.cst$kw$name;
var G__25249 = expr__25244;
return (pred__25243.cljs$core$IFn$_invoke$arity$2 ? pred__25243.cljs$core$IFn$_invoke$arity$2(G__25248,G__25249) : pred__25243.call(null,G__25248,G__25249));
})())){
return (new datascript.parser.RuleExpr(self__.source,G__25236,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25250 = cljs.core.cst$kw$args;
var G__25251 = expr__25244;
return (pred__25243.cljs$core$IFn$_invoke$arity$2 ? pred__25243.cljs$core$IFn$_invoke$arity$2(G__25250,G__25251) : pred__25243.call(null,G__25250,G__25251));
})())){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__25236,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25236),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25236){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__25236,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25233){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f25233),datascript.parser.postwalk(self__.name,f25233),datascript.parser.postwalk(self__.args,f25233),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25234,acc25235){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25234,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25234,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25234,self__.source,acc25235)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25235){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25252 = (function (){var G__25254 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25235,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25235,self__.source));
var G__25255 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25254,G__25255) : datascript.parser.collect_vars_acc.call(null,G__25254,G__25255));
})();
var G__25253 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25252,G__25253) : datascript.parser.collect_vars_acc.call(null,G__25252,G__25253));
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$name,cljs.core.cst$sym$args], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__25240){
return (new datascript.parser.RuleExpr(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25240),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25240),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25240),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25240,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,cljs.core.cst$kw$args], 0))),null));
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
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25261,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25265 = k25261;
var G__25265__$1 = (((G__25265 instanceof cljs.core.Keyword))?G__25265.fqn:null);
switch (G__25265__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25261,else__9453__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Not{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25260){
var self__ = this;
var G__25260__$1 = this;
return (new cljs.core.RecordIter((0),G__25260__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25266 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25266(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25262,other25263){
var self__ = this;
var this25262__$1 = this;
return (!((other25263 == null))) && ((this25262__$1.constructor === other25263.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25262__$1.source,other25263.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25262__$1.vars,other25263.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25262__$1.clauses,other25263.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25262__$1.__extmap,other25263.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25260){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25267 = cljs.core.keyword_identical_QMARK_;
var expr__25268 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25270 = cljs.core.cst$kw$source;
var G__25271 = expr__25268;
return (pred__25267.cljs$core$IFn$_invoke$arity$2 ? pred__25267.cljs$core$IFn$_invoke$arity$2(G__25270,G__25271) : pred__25267.call(null,G__25270,G__25271));
})())){
return (new datascript.parser.Not(G__25260,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25272 = cljs.core.cst$kw$vars;
var G__25273 = expr__25268;
return (pred__25267.cljs$core$IFn$_invoke$arity$2 ? pred__25267.cljs$core$IFn$_invoke$arity$2(G__25272,G__25273) : pred__25267.call(null,G__25272,G__25273));
})())){
return (new datascript.parser.Not(self__.source,G__25260,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25274 = cljs.core.cst$kw$clauses;
var G__25275 = expr__25268;
return (pred__25267.cljs$core$IFn$_invoke$arity$2 ? pred__25267.cljs$core$IFn$_invoke$arity$2(G__25274,G__25275) : pred__25267.call(null,G__25274,G__25275));
})())){
return (new datascript.parser.Not(self__.source,self__.vars,G__25260,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25260),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25260){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__25260,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25257){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f25257),datascript.parser.postwalk(self__.vars,f25257),datascript.parser.postwalk(self__.clauses,f25257),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25258,acc25259){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25258,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25258,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25258,self__.source,acc25259)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25259){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25276 = (function (){var G__25278 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25259,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25259,self__.source));
var G__25279 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25278,G__25279) : datascript.parser.collect_vars_acc.call(null,G__25278,G__25279));
})();
var G__25277 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25276,G__25277) : datascript.parser.collect_vars_acc.call(null,G__25276,G__25277));
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__25264){
return (new datascript.parser.Not(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25264),cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__25264),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25264),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25264,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], 0))),null));
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
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25285,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25289 = k25285;
var G__25289__$1 = (((G__25289 instanceof cljs.core.Keyword))?G__25289.fqn:null);
switch (G__25289__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25285,else__9453__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Or{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25284){
var self__ = this;
var G__25284__$1 = this;
return (new cljs.core.RecordIter((0),G__25284__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25290 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25290(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25286,other25287){
var self__ = this;
var this25286__$1 = this;
return (!((other25287 == null))) && ((this25286__$1.constructor === other25287.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25286__$1.source,other25287.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25286__$1.rule_vars,other25287.rule_vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25286__$1.clauses,other25287.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25286__$1.__extmap,other25287.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule_DASH_vars,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25284){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25291 = cljs.core.keyword_identical_QMARK_;
var expr__25292 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25294 = cljs.core.cst$kw$source;
var G__25295 = expr__25292;
return (pred__25291.cljs$core$IFn$_invoke$arity$2 ? pred__25291.cljs$core$IFn$_invoke$arity$2(G__25294,G__25295) : pred__25291.call(null,G__25294,G__25295));
})())){
return (new datascript.parser.Or(G__25284,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25296 = cljs.core.cst$kw$rule_DASH_vars;
var G__25297 = expr__25292;
return (pred__25291.cljs$core$IFn$_invoke$arity$2 ? pred__25291.cljs$core$IFn$_invoke$arity$2(G__25296,G__25297) : pred__25291.call(null,G__25296,G__25297));
})())){
return (new datascript.parser.Or(self__.source,G__25284,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25298 = cljs.core.cst$kw$clauses;
var G__25299 = expr__25292;
return (pred__25291.cljs$core$IFn$_invoke$arity$2 ? pred__25291.cljs$core$IFn$_invoke$arity$2(G__25298,G__25299) : pred__25291.call(null,G__25298,G__25299));
})())){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__25284,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25284),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25284){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__25284,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25281){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f25281),datascript.parser.postwalk(self__.rule_vars,f25281),datascript.parser.postwalk(self__.clauses,f25281),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25282,acc25283){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25282,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25282,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25282,self__.source,acc25283)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25283){
var self__ = this;
var ___23655__auto____$1 = this;
var G__25300 = (function (){var G__25302 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25283,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25283,self__.source));
var G__25303 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25302,G__25303) : datascript.parser.collect_vars_acc.call(null,G__25302,G__25303));
})();
var G__25301 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25300,G__25301) : datascript.parser.collect_vars_acc.call(null,G__25300,G__25301));
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$rule_DASH_vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__25288){
return (new datascript.parser.Or(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25288),cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(G__25288),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25288),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25288,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], 0))),null));
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
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25309,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25313 = k25309;
var G__25313__$1 = (((G__25313 instanceof cljs.core.Keyword))?G__25313.fqn:null);
switch (G__25313__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25309,else__9453__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.And{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25308){
var self__ = this;
var G__25308__$1 = this;
return (new cljs.core.RecordIter((0),G__25308__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25314 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25314(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25310,other25311){
var self__ = this;
var this25310__$1 = this;
return (!((other25311 == null))) && ((this25310__$1.constructor === other25311.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25310__$1.clauses,other25311.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25310__$1.__extmap,other25311.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25308){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25315 = cljs.core.keyword_identical_QMARK_;
var expr__25316 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25318 = cljs.core.cst$kw$clauses;
var G__25319 = expr__25316;
return (pred__25315.cljs$core$IFn$_invoke$arity$2 ? pred__25315.cljs$core$IFn$_invoke$arity$2(G__25318,G__25319) : pred__25315.call(null,G__25318,G__25319));
})())){
return (new datascript.parser.And(G__25308,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25308),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25308){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__25308,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25305){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f25305),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25306,acc25307){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25306,self__.clauses,acc25307);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25307){
var self__ = this;
var ___23655__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25307,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc25307,self__.clauses));
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clauses], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__25312){
return (new datascript.parser.And(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25312),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25312,cljs.core.cst$kw$clauses)),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__8762__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
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
var vec__25321 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25321,(1),null);
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
var vec__25324 = form;
var seq__25325 = cljs.core.seq(vec__25324);
var first__25326 = cljs.core.first(seq__25325);
var seq__25325__$1 = cljs.core.next(seq__25325);
var fn = first__25326;
var args = seq__25325__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__8762__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__8750__auto__ = fn_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
return args_STAR_;
} else {
return and__8750__auto__;
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
var vec__25327 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25327,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25327,(1),null);
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
var vec__25330 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25330,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25330,(1),null);
var temp__5278__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__25333 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(1),null);
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
var vec__25336 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25336,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25336,(1),null);
var vec__25339 = next_form;
var seq__25340 = cljs.core.seq(vec__25339);
var first__25341 = cljs.core.first(seq__25340);
var seq__25340__$1 = cljs.core.next(seq__25340);
var name = first__25341;
var args = seq__25340__$1;
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
var G__25342 = acc;
var G__25343 = cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(form);
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25342,G__25343) : datascript.parser.collect_vars_acc.call(null,G__25342,G__25343));
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
var undeclared_25345 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),cljs.core.set(datascript.parser.collect_vars(clauses)));
if(cljs.core.empty_QMARK_(undeclared_25345)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variable not declared inside clauses: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_25345)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
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
var vec__25346 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(1),null);
var vec__25349 = next_form;
var seq__25350 = cljs.core.seq(vec__25349);
var first__25351 = cljs.core.first(seq__25350);
var seq__25350__$1 = cljs.core.next(seq__25350);
var sym = first__25351;
var clauses = seq__25350__$1;
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
var vec__25352 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(1),null);
var vec__25355 = next_form;
var seq__25356 = cljs.core.seq(vec__25355);
var first__25357 = cljs.core.first(seq__25356);
var seq__25356__$1 = cljs.core.next(seq__25356);
var sym = first__25357;
var first__25357__$1 = cljs.core.first(seq__25356__$1);
var seq__25356__$2 = cljs.core.next(seq__25356__$1);
var vars = first__25357__$1;
var clauses = seq__25356__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__8750__auto__ = vars_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
return clauses_STAR_;
} else {
return and__8750__auto__;
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
var map__25358 = clause;
var map__25358__$1 = ((((!((map__25358 == null)))?((((map__25358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25358):map__25358);
var map__25359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25358__$1,cljs.core.cst$kw$rule_DASH_vars);
var map__25359__$1 = ((((!((map__25359 == null)))?((((map__25359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25359):map__25359);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,cljs.core.cst$kw$required);
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,cljs.core.cst$kw$free);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25358__$1,cljs.core.cst$kw$clauses);
var vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,free);
var seq__25362_25366 = cljs.core.seq(clauses);
var chunk__25363_25367 = null;
var count__25364_25368 = (0);
var i__25365_25369 = (0);
while(true){
if((i__25365_25369 < count__25364_25368)){
var clause_25370__$1 = chunk__25363_25367.cljs$core$IIndexed$_nth$arity$2(null,i__25365_25369);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_25370__$1], null),form);

var G__25371 = seq__25362_25366;
var G__25372 = chunk__25363_25367;
var G__25373 = count__25364_25368;
var G__25374 = (i__25365_25369 + (1));
seq__25362_25366 = G__25371;
chunk__25363_25367 = G__25372;
count__25364_25368 = G__25373;
i__25365_25369 = G__25374;
continue;
} else {
var temp__5278__auto___25375 = cljs.core.seq(seq__25362_25366);
if(temp__5278__auto___25375){
var seq__25362_25376__$1 = temp__5278__auto___25375;
if(cljs.core.chunked_seq_QMARK_(seq__25362_25376__$1)){
var c__9688__auto___25377 = cljs.core.chunk_first(seq__25362_25376__$1);
var G__25378 = cljs.core.chunk_rest(seq__25362_25376__$1);
var G__25379 = c__9688__auto___25377;
var G__25380 = cljs.core.count(c__9688__auto___25377);
var G__25381 = (0);
seq__25362_25366 = G__25378;
chunk__25363_25367 = G__25379;
count__25364_25368 = G__25380;
i__25365_25369 = G__25381;
continue;
} else {
var clause_25382__$1 = cljs.core.first(seq__25362_25376__$1);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_25382__$1], null),form);

var G__25383 = cljs.core.next(seq__25362_25376__$1);
var G__25384 = null;
var G__25385 = (0);
var G__25386 = (0);
seq__25362_25366 = G__25383;
chunk__25363_25367 = G__25384;
count__25364_25368 = G__25385;
i__25365_25369 = G__25386;
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
var clauses_STAR_ = (function (){var G__25387 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__25387) : datascript.parser.parse_clauses.call(null,G__25387));
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
var vec__25388 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388,(1),null);
var vec__25391 = next_form;
var seq__25392 = cljs.core.seq(vec__25391);
var first__25393 = cljs.core.first(seq__25392);
var seq__25392__$1 = cljs.core.next(seq__25392);
var sym = first__25393;
var clauses = seq__25392__$1;
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
var vec__25394 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25394,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25394,(1),null);
var vec__25397 = next_form;
var seq__25398 = cljs.core.seq(vec__25397);
var first__25399 = cljs.core.first(seq__25398);
var seq__25398__$1 = cljs.core.next(seq__25398);
var sym = first__25399;
var first__25399__$1 = cljs.core.first(seq__25398__$1);
var seq__25398__$2 = cljs.core.next(seq__25398__$1);
var vars = first__25399__$1;
var clauses = seq__25398__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__8750__auto__ = vars_STAR_;
if(cljs.core.truth_(and__8750__auto__)){
return clauses_STAR_;
} else {
return and__8750__auto__;
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
var or__8762__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var or__8762__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__8762__auto____$1)){
return or__8762__auto____$1;
} else {
var or__8762__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__8762__auto____$2)){
return or__8762__auto____$2;
} else {
var or__8762__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__8762__auto____$3)){
return or__8762__auto____$3;
} else {
var or__8762__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__8762__auto____$4)){
return or__8762__auto____$4;
} else {
var or__8762__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__8762__auto____$5)){
return or__8762__auto____$5;
} else {
var or__8762__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__8762__auto____$6)){
return or__8762__auto____$6;
} else {
var or__8762__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__8762__auto____$7)){
return or__8762__auto____$7;
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
var or__8762__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25405,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25409 = k25405;
var G__25409__$1 = (((G__25409 instanceof cljs.core.Keyword))?G__25409.fqn:null);
switch (G__25409__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25405,else__9453__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25404){
var self__ = this;
var G__25404__$1 = this;
return (new cljs.core.RecordIter((0),G__25404__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25410 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25410(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25406,other25407){
var self__ = this;
var this25406__$1 = this;
return (!((other25407 == null))) && ((this25406__$1.constructor === other25407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25406__$1.vars,other25407.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25406__$1.clauses,other25407.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25406__$1.__extmap,other25407.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25404){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25411 = cljs.core.keyword_identical_QMARK_;
var expr__25412 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25414 = cljs.core.cst$kw$vars;
var G__25415 = expr__25412;
return (pred__25411.cljs$core$IFn$_invoke$arity$2 ? pred__25411.cljs$core$IFn$_invoke$arity$2(G__25414,G__25415) : pred__25411.call(null,G__25414,G__25415));
})())){
return (new datascript.parser.RuleBranch(G__25404,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25416 = cljs.core.cst$kw$clauses;
var G__25417 = expr__25412;
return (pred__25411.cljs$core$IFn$_invoke$arity$2 ? pred__25411.cljs$core$IFn$_invoke$arity$2(G__25416,G__25417) : pred__25411.call(null,G__25416,G__25417));
})())){
return (new datascript.parser.RuleBranch(self__.vars,G__25404,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25404),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25404){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__25404,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25401){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f25401),datascript.parser.postwalk(self__.clauses,f25401),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25402,acc25403){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25402,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25402,self__.vars,acc25403));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25403){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25403,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__25408){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__25408),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25408),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25408,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clauses], 0))),null));
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
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25423,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25427 = k25423;
var G__25427__$1 = (((G__25427 instanceof cljs.core.Keyword))?G__25427.fqn:null);
switch (G__25427__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25423,else__9453__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Rule{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25422){
var self__ = this;
var G__25422__$1 = this;
return (new cljs.core.RecordIter((0),G__25422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$branches], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25428 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25428(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25424,other25425){
var self__ = this;
var this25424__$1 = this;
return (!((other25425 == null))) && ((this25424__$1.constructor === other25425.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25424__$1.name,other25425.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25424__$1.branches,other25425.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25424__$1.__extmap,other25425.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$branches,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25422){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25429 = cljs.core.keyword_identical_QMARK_;
var expr__25430 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25432 = cljs.core.cst$kw$name;
var G__25433 = expr__25430;
return (pred__25429.cljs$core$IFn$_invoke$arity$2 ? pred__25429.cljs$core$IFn$_invoke$arity$2(G__25432,G__25433) : pred__25429.call(null,G__25432,G__25433));
})())){
return (new datascript.parser.Rule(G__25422,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25434 = cljs.core.cst$kw$branches;
var G__25435 = expr__25430;
return (pred__25429.cljs$core$IFn$_invoke$arity$2 ? pred__25429.cljs$core$IFn$_invoke$arity$2(G__25434,G__25435) : pred__25429.call(null,G__25434,G__25435));
})())){
return (new datascript.parser.Rule(self__.name,G__25422,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25422),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25422){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__25422,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25419){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f25419),datascript.parser.postwalk(self__.branches,f25419),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25420,acc25421){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25420,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25420,self__.name,acc25421));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25421){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25421,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$branches], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__25426){
return (new datascript.parser.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25426),cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(G__25426),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25426,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$branches], 0))),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__25437_SHARP_){
return (p1__25437_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (declared_vars){
return (function (p1__25438_SHARP_){
return (p1__25438_SHARP_ instanceof datascript.parser.Variable);
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
var vec__25439 = form;
var seq__25440 = cljs.core.seq(vec__25439);
var first__25441 = cljs.core.first(seq__25440);
var seq__25440__$1 = cljs.core.next(seq__25440);
var head = first__25441;
var clauses = seq__25440__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__25442 = head;
var seq__25443 = cljs.core.seq(vec__25442);
var first__25444 = cljs.core.first(seq__25443);
var seq__25443__$1 = cljs.core.next(seq__25443);
var name = first__25444;
var vars = seq__25443__$1;
var name_STAR_ = (function (){var or__8762__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__8762__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
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
var seq__25445 = cljs.core.seq(cljs.core.next(branches));
var chunk__25447 = null;
var count__25448 = (0);
var i__25449 = (0);
while(true){
if((i__25449 < count__25448)){
var b = chunk__25447.cljs$core$IIndexed$_nth$arity$2(null,i__25449);
var vars_25451 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_25451))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_25451)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__25452 = seq__25445;
var G__25453 = chunk__25447;
var G__25454 = count__25448;
var G__25455 = (i__25449 + (1));
seq__25445 = G__25452;
chunk__25447 = G__25453;
count__25448 = G__25454;
i__25449 = G__25455;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25445);
if(temp__5278__auto__){
var seq__25445__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25445__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__25445__$1);
var G__25456 = cljs.core.chunk_rest(seq__25445__$1);
var G__25457 = c__9688__auto__;
var G__25458 = cljs.core.count(c__9688__auto__);
var G__25459 = (0);
seq__25445 = G__25456;
chunk__25447 = G__25457;
count__25448 = G__25458;
i__25449 = G__25459;
continue;
} else {
var b = cljs.core.first(seq__25445__$1);
var vars_25460 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_25460))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_25460)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__25461 = cljs.core.next(seq__25445__$1);
var G__25462 = null;
var G__25463 = (0);
var G__25464 = (0);
seq__25445 = G__25461;
chunk__25447 = G__25462;
count__25448 = G__25463;
i__25449 = G__25464;
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
return cljs.core.vec((function (){var iter__9639__auto__ = (function datascript$parser$parse_rules_$_iter__25466(s__25467){
return (new cljs.core.LazySeq(null,(function (){
var s__25467__$1 = s__25467;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__25467__$1);
if(temp__5278__auto__){
var s__25467__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25467__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__25467__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__25469 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__25468 = (0);
while(true){
if((i__25468 < size__9638__auto__)){
var vec__25470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__25468);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__25468,vec__25470,name,branches,c__9637__auto__,size__9638__auto__,b__25469,s__25467__$2,temp__5278__auto__){
return (function (p1__25465_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__25465_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__25465_SHARP_),null,null,null));
});})(i__25468,vec__25470,name,branches,c__9637__auto__,size__9638__auto__,b__25469,s__25467__$2,temp__5278__auto__))
,branches);
cljs.core.chunk_append(b__25469,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__25476 = (i__25468 + (1));
i__25468 = G__25476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25469),datascript$parser$parse_rules_$_iter__25466(cljs.core.chunk_rest(s__25467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25469),null);
}
} else {
var vec__25473 = cljs.core.first(s__25467__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25473,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25473,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__25473,name,branches,s__25467__$2,temp__5278__auto__){
return (function (p1__25465_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__25465_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__25465_SHARP_),null,null,null));
});})(vec__25473,name,branches,s__25467__$2,temp__5278__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__25466(cljs.core.rest(s__25467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9639__auto__(cljs.core.group_by(cljs.core.cst$kw$name,datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
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
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k25481,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__25485 = k25481;
var G__25485__$1 = (((G__25485 instanceof cljs.core.Keyword))?G__25485.fqn:null);
switch (G__25485__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25481,else__9453__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#datascript.parser.Query{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25480){
var self__ = this;
var G__25480__$1 = this;
return (new cljs.core.RecordIter((0),G__25480__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__25486 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__25486(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25482,other25483){
var self__ = this;
var this25482__$1 = this;
return (!((other25483 == null))) && ((this25482__$1.constructor === other25483.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25482__$1.find,other25483.find)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25482__$1.with,other25483.with)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25482__$1.in,other25483.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25482__$1.where,other25483.where)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25482__$1.__extmap,other25483.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$find,null,cljs.core.cst$kw$where,null,cljs.core.cst$kw$with,null,cljs.core.cst$kw$in,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__25480){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__25487 = cljs.core.keyword_identical_QMARK_;
var expr__25488 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__25490 = cljs.core.cst$kw$find;
var G__25491 = expr__25488;
return (pred__25487.cljs$core$IFn$_invoke$arity$2 ? pred__25487.cljs$core$IFn$_invoke$arity$2(G__25490,G__25491) : pred__25487.call(null,G__25490,G__25491));
})())){
return (new datascript.parser.Query(G__25480,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25492 = cljs.core.cst$kw$with;
var G__25493 = expr__25488;
return (pred__25487.cljs$core$IFn$_invoke$arity$2 ? pred__25487.cljs$core$IFn$_invoke$arity$2(G__25492,G__25493) : pred__25487.call(null,G__25492,G__25493));
})())){
return (new datascript.parser.Query(self__.find,G__25480,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25494 = cljs.core.cst$kw$in;
var G__25495 = expr__25488;
return (pred__25487.cljs$core$IFn$_invoke$arity$2 ? pred__25487.cljs$core$IFn$_invoke$arity$2(G__25494,G__25495) : pred__25487.call(null,G__25494,G__25495));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,G__25480,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25496 = cljs.core.cst$kw$where;
var G__25497 = expr__25488;
return (pred__25487.cljs$core$IFn$_invoke$arity$2 ? pred__25487.cljs$core$IFn$_invoke$arity$2(G__25496,G__25497) : pred__25487.call(null,G__25496,G__25497));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__25480,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__25480),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__25480){
var self__ = this;
var this__9449__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__25480,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23652__auto__,f25477){
var self__ = this;
var this__23652__auto____$1 = this;
var new__23653__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.find,f25477),datascript.parser.postwalk(self__.with$,f25477),datascript.parser.postwalk(self__.in$,f25477),datascript.parser.postwalk(self__.where,f25477),null,null,null));
var temp__5276__auto__ = cljs.core.meta(this__23652__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__23654__auto__ = temp__5276__auto__;
return cljs.core.with_meta(new__23653__auto__,meta__23654__auto__);
} else {
return new__23653__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23655__auto__,pred25478,acc25479){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25478,self__.where,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25478,self__.in$,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25478,self__.with$,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25478,self__.find,acc25479))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23655__auto__,acc25479){
var self__ = this;
var ___23655__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25479,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$find,cljs.core.cst$sym$with,cljs.core.cst$sym$in,cljs.core.cst$sym$where], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__25484){
return (new datascript.parser.Query(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(G__25484),cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(G__25484),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__25484),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(G__25484),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25484,cljs.core.cst$kw$find,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], 0))),null));
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
var G__25499 = parsed;
var G__25500 = q;
var G__25501 = cljs.core.next(qs);
parsed = G__25499;
key = G__25500;
qs = G__25501;
continue;
} else {
var G__25502 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__25503 = key;
var G__25504 = cljs.core.next(qs);
parsed = G__25502;
key = G__25503;
qs = G__25504;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_25511 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_25512 = cljs.core.set(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
var in_vars_25513 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_25514 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q)));
var unknown_25515 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_25511,with_vars_25512),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_25514,in_vars_25513));
var shared_25516 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_25511,with_vars_25512);
if(cljs.core.empty_QMARK_(unknown_25515)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query for unknown vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_25515)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_25515,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(shared_25516)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":in and :with should not use same variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,shared_25516)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,shared_25516,cljs.core.cst$kw$form,form], null));
}

var in_vars_25517 = datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_sources_25518 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_25517){
return (function (p1__25505_SHARP_){
return (p1__25505_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_25517))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_rules_25519 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_25517,in_sources_25518){
return (function (p1__25506_SHARP_){
return (p1__25506_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_25517,in_sources_25518))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__8750__auto__ = datascript.parser.distinct_QMARK_(in_vars_25517);
if(cljs.core.truth_(and__8750__auto__)){
var and__8750__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_25518);
if(cljs.core.truth_(and__8750__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_25519);
} else {
return and__8750__auto____$1;
}
} else {
return and__8750__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var with_vars_25520 = datascript.parser.collect_vars(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_25520))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var in_sources_25521 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__25507_SHARP_){
return (p1__25507_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_25522 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (in_sources_25521){
return (function (p1__25508_SHARP_){
return (p1__25508_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_25521))
,cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_25523 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_25522,in_sources_25521);
if(cljs.core.empty_QMARK_(unknown_25523)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Where uses unknown source vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_25523)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_25523,cljs.core.cst$kw$form,form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__25509_SHARP_){
return (p1__25509_SHARP_ instanceof datascript.parser.RuleExpr);
}),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (rule_exprs){
return (function (p1__25510_SHARP_){
return (p1__25510_SHARP_ instanceof datascript.parser.RulesVar);
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
