// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15617_SHARP_,p2__15618_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15617_SHARP_,p2__15618_SHARP_.getAttribute("static-id"),p2__15618_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__15620 = arguments.length;
switch (G__15620) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__15621_15624 = init;
var G__15622_15625 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15621_15624,G__15622_15625) : f.call(null,G__15621_15624,G__15622_15625));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__15626 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__15627 = cljs.core.seq(vec__15626);
var first__15628 = cljs.core.first(seq__15627);
var seq__15627__$1 = cljs.core.next(seq__15627);
var f = first__15628;
var more = seq__15627__$1;
var vec__15629 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("76f212f398df4a7fae8c12a7e1b53174")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__15632_SHARP_){
return cljs.core.zipmap(p1__15632_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8762__auto__ = (function (){var and__8750__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8750__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__15633 = (i + (1));
var G__15634 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__15633;
ret = G__15634;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__15636 = arguments.length;
switch (G__15636) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__15638 = (i + (1));
i = G__15638;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core.node[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto__.call(null,this$));
} else {
var m__9496__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9496__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__15639_15642 = hoplon.core.node;
var G__15640_15643 = "string";
var G__15641_15644 = ((function (G__15639_15642,G__15640_15643){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__15639_15642,G__15640_15643))
;
goog.object.set(G__15639_15642,G__15640_15643,G__15641_15644);
goog.object.set(hoplon.core.INode,"number",true);

var G__15645_15649 = hoplon.core.node;
var G__15646_15650 = "number";
var G__15647_15651 = ((function (G__15645_15649,G__15646_15650){
return (function (this$){
var G__15648 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__15648) : hoplon.core.$text.call(null,G__15648));
});})(G__15645_15649,G__15646_15650))
;
goog.object.set(G__15645_15649,G__15646_15650,G__15647_15651);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15654_SHARP_,p2__15653_SHARP_){
if((p2__15653_SHARP_ == null)){
return p1__15654_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15654_SHARP_,p2__15653_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__15661 = new$__$1;
var vec__15663 = G__15661;
var seq__15664 = cljs.core.seq(vec__15663);
var first__15665 = cljs.core.first(seq__15664);
var seq__15664__$1 = cljs.core.next(seq__15664);
var x = first__15665;
var xs = seq__15664__$1;
var G__15662 = hoplon.core.child_vec(this$);
var vec__15666 = G__15662;
var seq__15667 = cljs.core.seq(vec__15666);
var first__15668 = cljs.core.first(seq__15667);
var seq__15667__$1 = cljs.core.next(seq__15667);
var k = first__15668;
var ks = seq__15667__$1;
var kids = vec__15666;
var G__15661__$1 = G__15661;
var G__15662__$1 = G__15662;
while(true){
var vec__15669 = G__15661__$1;
var seq__15670 = cljs.core.seq(vec__15669);
var first__15671 = cljs.core.first(seq__15670);
var seq__15670__$1 = cljs.core.next(seq__15670);
var x__$1 = first__15671;
var xs__$1 = seq__15670__$1;
var vec__15672 = G__15662__$1;
var seq__15673 = cljs.core.seq(vec__15672);
var first__15674 = cljs.core.first(seq__15673);
var seq__15673__$1 = cljs.core.next(seq__15673);
var k__$1 = first__15674;
var ks__$1 = seq__15673__$1;
var kids__$1 = vec__15672;
if(cljs.core.truth_((function (){var or__8762__auto__ = x__$1;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return k__$1;
}
})())){
var G__15675 = xs__$1;
var G__15676 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__15661__$1 = G__15675;
G__15662__$1 = G__15676;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_15677 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_15677;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_15677,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_15680 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_15681 = cljs.core.count(cljs.core.deref(kids_15680));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_15680,i_15681,child__$1){
return (function (p1__15679_SHARP_,p2__15678_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15680,cljs.core.assoc,i_15681,p2__15678_SHARP_);
});})(kids_15680,i_15681,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15680,cljs.core.assoc,i_15681,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8750__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8750__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8750__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8750__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8750__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__15682_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__15682_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__15683_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__15683_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__15684_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__15684_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_15685 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_15686 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__15687 = (function (){var and__8750__auto__ = attr_15686;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_15686),kk_15685);
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__15687)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_15686,cljs.core.assoc,kk_15685,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__15688_SHARP_){
return p1__15688_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__15689_SHARP_){
return p1__15689_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__15690_SHARP_){
return p1__15690_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__15691_SHARP_){
return p1__15691_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9496__auto__.call(null,this$,kvs));
} else {
var m__9496__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9496__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9496__auto__.call(null,this$,kvs));
} else {
var m__9496__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9496__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9496__auto__.call(null,this$,child));
} else {
var m__9496__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9496__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9496__auto__.call(null,this$,child));
} else {
var m__9496__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9496__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9496__auto__.call(null,this$,new$,existing));
} else {
var m__9496__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9496__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9496__auto__.call(null,this$,new$,existing));
} else {
var m__9496__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9496__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__15697 = arguments.length;
switch (G__15697) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___15699 = arguments.length;
var i__10035__auto___15700 = (0);
while(true){
if((i__10035__auto___15700 < len__10034__auto___15699)){
args_arr__10057__auto__.push((arguments[i__10035__auto___15700]));

var G__15701 = (i__10035__auto___15700 + (1));
i__10035__auto___15700 = G__15701;
continue;
} else {
}
break;
}

var argseq__10058__auto__ = (new cljs.core.IndexedSeq(args_arr__10057__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10058__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15693){
var G__15694 = cljs.core.first(seq15693);
var seq15693__$1 = cljs.core.next(seq15693);
var G__15695 = cljs.core.first(seq15693__$1);
var seq15693__$2 = cljs.core.next(seq15693__$1);
var G__15696 = cljs.core.first(seq15693__$2);
var seq15693__$3 = cljs.core.next(seq15693__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15694,G__15695,G__15696,seq15693__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__15707 = arguments.length;
switch (G__15707) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___15709 = arguments.length;
var i__10035__auto___15710 = (0);
while(true){
if((i__10035__auto___15710 < len__10034__auto___15709)){
args_arr__10057__auto__.push((arguments[i__10035__auto___15710]));

var G__15711 = (i__10035__auto___15710 + (1));
i__10035__auto___15710 = G__15711;
continue;
} else {
}
break;
}

var argseq__10058__auto__ = (new cljs.core.IndexedSeq(args_arr__10057__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10058__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq15703){
var G__15704 = cljs.core.first(seq15703);
var seq15703__$1 = cljs.core.next(seq15703);
var G__15705 = cljs.core.first(seq15703__$1);
var seq15703__$2 = cljs.core.next(seq15703__$1);
var G__15706 = cljs.core.first(seq15703__$2);
var seq15703__$3 = cljs.core.next(seq15703__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15704,G__15705,G__15706,seq15703__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__9495__auto__ = (((this$ == null))?null:this$);
var m__9496__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9496__auto__.call(null,this$,elem,value));
} else {
var m__9496__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9496__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__15714_SHARP_,p2__15713_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__15713_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__15713_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__15715_SHARP_){
return p1__15715_SHARP_.head;
}):(function (p1__15716_SHARP_){
return p1__15716_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__15717_SHARP_){
try{return cljs.core.vector_QMARK_(p1__15717_SHARP_);
}catch (e15718){if((e15718 instanceof Error)){
var _ = e15718;
return null;
} else {
throw e15718;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__15719_SHARP_){
try{return cljs.core.seq_QMARK_(p1__15719_SHARP_);
}catch (e15720){if((e15720 instanceof Error)){
var _ = e15720;
return null;
} else {
throw e15720;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var G__15722 = arguments.length;
switch (G__15722) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e15723){if((e15723 instanceof Error)){
var _ = e15723;
return not_found;
} else {
throw e15723;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__15726 = arguments.length;
switch (G__15726) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__15728 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15729 = (0);
return setTimeout(G__15728,G__15729);
} else {
var temp__5276__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return v.push(f);
} else {
var G__15730_15748 = this$;
var G__15731_15749 = "_hoplonWhenDom";
var G__15732_15750 = [f];
goog.object.set(G__15730_15748,G__15731_15749,G__15732_15750);

var G__15733 = ((function (temp__5276__auto__){
return (function (){
var fexpr__15741 = ((function (temp__5276__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__15742 = ((function (temp__5276__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5276__auto__))
;
var G__15743 = (20);
return setTimeout(G__15742,G__15743);
} else {
var seq__15744_15751 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__15745_15752 = null;
var count__15746_15753 = (0);
var i__15747_15754 = (0);
while(true){
if((i__15747_15754 < count__15746_15753)){
var f_15755__$1 = chunk__15745_15752.cljs$core$IIndexed$_nth$arity$2(null,i__15747_15754);
(f_15755__$1.cljs$core$IFn$_invoke$arity$0 ? f_15755__$1.cljs$core$IFn$_invoke$arity$0() : f_15755__$1.call(null));

var G__15756 = seq__15744_15751;
var G__15757 = chunk__15745_15752;
var G__15758 = count__15746_15753;
var G__15759 = (i__15747_15754 + (1));
seq__15744_15751 = G__15756;
chunk__15745_15752 = G__15757;
count__15746_15753 = G__15758;
i__15747_15754 = G__15759;
continue;
} else {
var temp__5278__auto___15760 = cljs.core.seq(seq__15744_15751);
if(temp__5278__auto___15760){
var seq__15744_15761__$1 = temp__5278__auto___15760;
if(cljs.core.chunked_seq_QMARK_(seq__15744_15761__$1)){
var c__9688__auto___15762 = cljs.core.chunk_first(seq__15744_15761__$1);
var G__15763 = cljs.core.chunk_rest(seq__15744_15761__$1);
var G__15764 = c__9688__auto___15762;
var G__15765 = cljs.core.count(c__9688__auto___15762);
var G__15766 = (0);
seq__15744_15751 = G__15763;
chunk__15745_15752 = G__15764;
count__15746_15753 = G__15765;
i__15747_15754 = G__15766;
continue;
} else {
var f_15767__$1 = cljs.core.first(seq__15744_15761__$1);
(f_15767__$1.cljs$core$IFn$_invoke$arity$0 ? f_15767__$1.cljs$core$IFn$_invoke$arity$0() : f_15767__$1.call(null));

var G__15768 = cljs.core.next(seq__15744_15761__$1);
var G__15769 = null;
var G__15770 = (0);
var G__15771 = (0);
seq__15744_15751 = G__15768;
chunk__15745_15752 = G__15769;
count__15746_15753 = G__15770;
i__15747_15754 = G__15771;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5276__auto__))
;
return fexpr__15741();
});})(temp__5276__auto__))
;
var G__15734 = (0);
return setTimeout(G__15733,G__15734);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__15778 = args;
var vec__15779 = G__15778;
var seq__15780 = cljs.core.seq(vec__15779);
var first__15781 = cljs.core.first(seq__15780);
var seq__15780__$1 = cljs.core.next(seq__15780);
var arg = first__15781;
var args__$1 = seq__15780__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__15778__$1 = G__15778;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__15782 = G__15778__$1;
var seq__15783 = cljs.core.seq(vec__15782);
var first__15784 = cljs.core.first(seq__15783);
var seq__15783__$1 = cljs.core.next(seq__15783);
var arg__$1 = first__15784;
var args__$2 = seq__15783__$1;
if(cljs.core.not((function (){var or__8762__auto__ = arg__$1;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__15785 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__15778__$1,attr__$2,kids__$2,vec__15782,seq__15783,first__15784,seq__15783__$1,arg__$1,args__$2,attr,kids,G__15778,vec__15779,seq__15780,first__15781,seq__15780__$1,arg,args__$1){
return (function (p1__15772_SHARP_,p2__15773_SHARP_,p3__15774_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__15772_SHARP_,p2__15773_SHARP_,p3__15774_SHARP_);
});})(attr__$1,kids__$1,G__15778__$1,attr__$2,kids__$2,vec__15782,seq__15783,first__15784,seq__15783__$1,arg__$1,args__$2,attr,kids,G__15778,vec__15779,seq__15780,first__15781,seq__15780__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__15786 = kids__$2;
var G__15787 = args__$2;
attr__$1 = G__15785;
kids__$1 = G__15786;
G__15778__$1 = G__15787;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__15788 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__15789 = kids__$2;
var G__15790 = cljs.core.rest(args__$2);
attr__$1 = G__15788;
kids__$1 = G__15789;
G__15778__$1 = G__15790;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__15791 = attr__$2;
var G__15792 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15793 = args__$2;
attr__$1 = G__15791;
kids__$1 = G__15792;
G__15778__$1 = G__15793;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__15794 = attr__$2;
var G__15795 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15796 = args__$2;
attr__$1 = G__15794;
kids__$1 = G__15795;
G__15778__$1 = G__15796;
continue;
} else {
var G__15797 = attr__$2;
var G__15798 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__15799 = args__$2;
attr__$1 = G__15797;
kids__$1 = G__15798;
G__15778__$1 = G__15799;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__15801_SHARP_,p2__15800_SHARP_,p3__15802_SHARP_){
hoplon.core._attr_BANG_(p2__15800_SHARP_,p1__15801_SHARP_,p3__15802_SHARP_);

return p1__15801_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__15803){
var vec__15804 = p__15803;
var seq__15805 = cljs.core.seq(vec__15804);
var first__15806 = cljs.core.first(seq__15805);
var seq__15805__$1 = cljs.core.next(seq__15805);
var child_cell = first__15806;
var _ = seq__15805__$1;
var kids = vec__15804;
var this$__$1 = this$;
var seq__15807_15811 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__15808_15812 = null;
var count__15809_15813 = (0);
var i__15810_15814 = (0);
while(true){
if((i__15810_15814 < count__15809_15813)){
var x_15815 = chunk__15808_15812.cljs$core$IIndexed$_nth$arity$2(null,i__15810_15814);
var temp__5278__auto___15816 = hoplon.core.__GT_node(x_15815);
if(cljs.core.truth_(temp__5278__auto___15816)){
var x_15817__$1 = temp__5278__auto___15816;
hoplon.core.append_child_BANG_(this$__$1,x_15817__$1);
} else {
}

var G__15818 = seq__15807_15811;
var G__15819 = chunk__15808_15812;
var G__15820 = count__15809_15813;
var G__15821 = (i__15810_15814 + (1));
seq__15807_15811 = G__15818;
chunk__15808_15812 = G__15819;
count__15809_15813 = G__15820;
i__15810_15814 = G__15821;
continue;
} else {
var temp__5278__auto___15822 = cljs.core.seq(seq__15807_15811);
if(temp__5278__auto___15822){
var seq__15807_15823__$1 = temp__5278__auto___15822;
if(cljs.core.chunked_seq_QMARK_(seq__15807_15823__$1)){
var c__9688__auto___15824 = cljs.core.chunk_first(seq__15807_15823__$1);
var G__15825 = cljs.core.chunk_rest(seq__15807_15823__$1);
var G__15826 = c__9688__auto___15824;
var G__15827 = cljs.core.count(c__9688__auto___15824);
var G__15828 = (0);
seq__15807_15811 = G__15825;
chunk__15808_15812 = G__15826;
count__15809_15813 = G__15827;
i__15810_15814 = G__15828;
continue;
} else {
var x_15829 = cljs.core.first(seq__15807_15823__$1);
var temp__5278__auto___15830__$1 = hoplon.core.__GT_node(x_15829);
if(cljs.core.truth_(temp__5278__auto___15830__$1)){
var x_15831__$1 = temp__5278__auto___15830__$1;
hoplon.core.append_child_BANG_(this$__$1,x_15831__$1);
} else {
}

var G__15832 = cljs.core.next(seq__15807_15823__$1);
var G__15833 = null;
var G__15834 = (0);
var G__15835 = (0);
seq__15807_15811 = G__15832;
chunk__15808_15812 = G__15833;
count__15809_15813 = G__15834;
i__15810_15814 = G__15835;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__15874__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__15837 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(1),null);
var G__15840 = this$;
hoplon.core.add_attributes_BANG_(G__15840,attr);

hoplon.core.add_children_BANG_(G__15840,kids);

return G__15840;
};
var G__15874 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__15875__i = 0, G__15875__a = new Array(arguments.length -  1);
while (G__15875__i < G__15875__a.length) {G__15875__a[G__15875__i] = arguments[G__15875__i + 1]; ++G__15875__i;}
  args = new cljs.core.IndexedSeq(G__15875__a,0,null);
} 
return G__15874__delegate.call(this,self__,args);};
G__15874.cljs$lang$maxFixedArity = 1;
G__15874.cljs$lang$applyTo = (function (arglist__15876){
var self__ = cljs.core.first(arglist__15876);
var args = cljs.core.rest(arglist__15876);
return G__15874__delegate(self__,args);
});
G__15874.cljs$core$IFn$_invoke$arity$variadic = G__15874__delegate;
return G__15874;
})()
;

Element.prototype.apply = (function (self__,args15836){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15836)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__15877__delegate = function (args){
var this$ = this;
var vec__15841 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15841,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15841,(1),null);
var G__15844 = this$;
hoplon.core.add_attributes_BANG_(G__15844,attr);

hoplon.core.add_children_BANG_(G__15844,kids);

return G__15844;
};
var G__15877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15878__i = 0, G__15878__a = new Array(arguments.length -  0);
while (G__15878__i < G__15878__a.length) {G__15878__a[G__15878__i] = arguments[G__15878__i + 0]; ++G__15878__i;}
  args = new cljs.core.IndexedSeq(G__15878__a,0,null);
} 
return G__15877__delegate.call(this,args);};
G__15877.cljs$lang$maxFixedArity = 0;
G__15877.cljs$lang$applyTo = (function (arglist__15879){
var args = cljs.core.seq(arglist__15879);
return G__15877__delegate(args);
});
G__15877.cljs$core$IFn$_invoke$arity$variadic = G__15877__delegate;
return G__15877;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__15845 = cljs.core.seq(kvs);
var chunk__15847 = null;
var count__15848 = (0);
var i__15849 = (0);
while(true){
if((i__15849 < count__15848)){
var vec__15851 = chunk__15847.cljs$core$IIndexed$_nth$arity$2(null,i__15849);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(1),null);
var k_15880__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_15880__$1);
} else {
e.setAttribute(k_15880__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15880__$1:v));
}

var G__15881 = seq__15845;
var G__15882 = chunk__15847;
var G__15883 = count__15848;
var G__15884 = (i__15849 + (1));
seq__15845 = G__15881;
chunk__15847 = G__15882;
count__15848 = G__15883;
i__15849 = G__15884;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__15845);
if(temp__5278__auto__){
var seq__15845__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15845__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__15845__$1);
var G__15885 = cljs.core.chunk_rest(seq__15845__$1);
var G__15886 = c__9688__auto__;
var G__15887 = cljs.core.count(c__9688__auto__);
var G__15888 = (0);
seq__15845 = G__15885;
chunk__15847 = G__15886;
count__15848 = G__15887;
i__15849 = G__15888;
continue;
} else {
var vec__15854 = cljs.core.first(seq__15845__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15854,(1),null);
var k_15889__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_15889__$1);
} else {
e.setAttribute(k_15889__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15889__$1:v));
}

var G__15890 = cljs.core.next(seq__15845__$1);
var G__15891 = null;
var G__15892 = (0);
var G__15893 = (0);
seq__15845 = G__15890;
chunk__15847 = G__15891;
count__15848 = G__15892;
i__15849 = G__15893;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__15857 = cljs.core.seq(kvs);
var chunk__15858 = null;
var count__15859 = (0);
var i__15860 = (0);
while(true){
if((i__15860 < count__15859)){
var vec__15861 = chunk__15858.cljs$core$IIndexed$_nth$arity$2(null,i__15860);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861,(1),null);
var G__15864_15894 = e.style;
var G__15865_15895 = cljs.core.name(k);
var G__15866_15896 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15864_15894,G__15865_15895,G__15866_15896);

var G__15897 = seq__15857;
var G__15898 = chunk__15858;
var G__15899 = count__15859;
var G__15900 = (i__15860 + (1));
seq__15857 = G__15897;
chunk__15858 = G__15898;
count__15859 = G__15899;
i__15860 = G__15900;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__15857);
if(temp__5278__auto__){
var seq__15857__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15857__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__15857__$1);
var G__15901 = cljs.core.chunk_rest(seq__15857__$1);
var G__15902 = c__9688__auto__;
var G__15903 = cljs.core.count(c__9688__auto__);
var G__15904 = (0);
seq__15857 = G__15901;
chunk__15858 = G__15902;
count__15859 = G__15903;
i__15860 = G__15904;
continue;
} else {
var vec__15867 = cljs.core.first(seq__15857__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867,(1),null);
var G__15870_15905 = e.style;
var G__15871_15906 = cljs.core.name(k);
var G__15872_15907 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15870_15905,G__15871_15906,G__15872_15907);

var G__15908 = cljs.core.next(seq__15857__$1);
var G__15909 = null;
var G__15910 = (0);
var G__15911 = (0);
seq__15857 = G__15908;
chunk__15858 = G__15909;
count__15859 = G__15910;
i__15860 = G__15911;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e15873){if((e15873 instanceof Error)){
var _ = e15873;
return null;
} else {
throw e15873;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__15915__delegate = function (args){
var vec__15912 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__15915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15916__i = 0, G__15916__a = new Array(arguments.length -  0);
while (G__15916__i < G__15916__a.length) {G__15916__a[G__15916__i] = arguments[G__15916__i + 0]; ++G__15916__i;}
  args = new cljs.core.IndexedSeq(G__15916__a,0,null);
} 
return G__15915__delegate.call(this,args);};
G__15915.cljs$lang$maxFixedArity = 0;
G__15915.cljs$lang$applyTo = (function (arglist__15917){
var args = cljs.core.seq(arglist__15917);
return G__15915__delegate(args);
});
G__15915.cljs$core$IFn$_invoke$arity$variadic = G__15915__delegate;
return G__15915;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__15920__delegate = function (rest__15918_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__15918_SHARP_);
};
var G__15920 = function (var_args){
var rest__15918_SHARP_ = null;
if (arguments.length > 0) {
var G__15921__i = 0, G__15921__a = new Array(arguments.length -  0);
while (G__15921__i < G__15921__a.length) {G__15921__a[G__15921__i] = arguments[G__15921__i + 0]; ++G__15921__i;}
  rest__15918_SHARP_ = new cljs.core.IndexedSeq(G__15921__a,0,null);
} 
return G__15920__delegate.call(this,rest__15918_SHARP_);};
G__15920.cljs$lang$maxFixedArity = 0;
G__15920.cljs$lang$applyTo = (function (arglist__15922){
var rest__15918_SHARP_ = cljs.core.seq(arglist__15922);
return G__15920__delegate(rest__15918_SHARP_);
});
G__15920.cljs$core$IFn$_invoke$arity$variadic = G__15920__delegate;
return G__15920;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__15923__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e15919){if((e15919 instanceof Error)){
var _ = e15919;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e15919;

}
}};
var G__15923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15924__i = 0, G__15924__a = new Array(arguments.length -  0);
while (G__15924__i < G__15924__a.length) {G__15924__a[G__15924__i] = arguments[G__15924__i + 0]; ++G__15924__i;}
  args = new cljs.core.IndexedSeq(G__15924__a,0,null);
} 
return G__15923__delegate.call(this,args);};
G__15923.cljs$lang$maxFixedArity = 0;
G__15923.cljs$lang$applyTo = (function (arglist__15925){
var args = cljs.core.seq(arglist__15925);
return G__15923__delegate(args);
});
G__15923.cljs$core$IFn$_invoke$arity$variadic = G__15923__delegate;
return G__15923;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__10041__auto__ = [];
var len__10034__auto___15927 = arguments.length;
var i__10035__auto___15928 = (0);
while(true){
if((i__10035__auto___15928 < len__10034__auto___15927)){
args__10041__auto__.push((arguments[i__10035__auto___15928]));

var G__15929 = (i__10035__auto___15928 + (1));
i__10035__auto___15928 = G__15929;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq15926){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15926));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__15930_SHARP_){
return document.createTextNode(p1__15930_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__15931_SHARP_){
return document.createComment(p1__15931_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__15932 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15933 = (0);
return setTimeout(G__15932,G__15933);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__15934_SHARP_){
var e = p1__15934_SHARP_.target;
if(cljs.core.truth_((function (){var or__8762__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__15934_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9810__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9811__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9812__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9813__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9814__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__,hierarchy__9814__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__,hierarchy__9814__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9814__auto__,method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__15935 = elem;
var G__15936 = cljs.core.cst$kw$attr;
var G__15937 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15935,G__15936,G__15937) : hoplon.core.do_BANG_.call(null,G__15935,G__15936,G__15937));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9810__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9811__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9812__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9813__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9814__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__,hierarchy__9814__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__,hierarchy__9814__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9814__auto__,method_table__9810__auto__,prefer_table__9811__auto__,method_cache__9812__auto__,cached_hierarchy__9813__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__15942 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__15940,G__15941){
return (G__15940.cljs$core$IFn$_invoke$arity$1 ? G__15940.cljs$core$IFn$_invoke$arity$1(G__15941) : G__15940.call(null,G__15941));
});})(on_deck))
);
return (fexpr__15942.cljs$core$IFn$_invoke$arity$2 ? fexpr__15942.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__15942.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__15938_SHARP_){
var fexpr__15946 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__15945,G__15944,G__15943){
return (G__15943.cljs$core$IFn$_invoke$arity$2 ? G__15943.cljs$core$IFn$_invoke$arity$2(G__15944,G__15945) : G__15943.call(null,G__15944,G__15945));
});})(on_deck,items_seq))
);
return (fexpr__15946.cljs$core$IFn$_invoke$arity$3 ? fexpr__15946.cljs$core$IFn$_invoke$arity$3(p1__15938_SHARP_,items_seq,hoplon.core.safe_nth) : fexpr__15946.call(null,p1__15938_SHARP_,items_seq,hoplon.core.safe_nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__15939_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__15939_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__15939_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__15947 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__15948 = null;
var count__15949 = (0);
var i__15950 = (0);
while(true){
if((i__15950 < count__15949)){
var i = chunk__15948.cljs$core$IIndexed$_nth$arity$2(null,i__15950);
var e_15953 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__15951 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15951) : tpl.call(null,G__15951));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15953);

var G__15954 = seq__15947;
var G__15955 = chunk__15948;
var G__15956 = count__15949;
var G__15957 = (i__15950 + (1));
seq__15947 = G__15954;
chunk__15948 = G__15955;
count__15949 = G__15956;
i__15950 = G__15957;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__15947);
if(temp__5278__auto__){
var seq__15947__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15947__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__15947__$1);
var G__15958 = cljs.core.chunk_rest(seq__15947__$1);
var G__15959 = c__9688__auto__;
var G__15960 = cljs.core.count(c__9688__auto__);
var G__15961 = (0);
seq__15947 = G__15958;
chunk__15948 = G__15959;
count__15949 = G__15960;
i__15950 = G__15961;
continue;
} else {
var i = cljs.core.first(seq__15947__$1);
var e_15962 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__15952 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15952) : tpl.call(null,G__15952));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15962);

var G__15963 = cljs.core.next(seq__15947__$1);
var G__15964 = null;
var G__15965 = (0);
var G__15966 = (0);
seq__15947 = G__15963;
chunk__15948 = G__15964;
count__15949 = G__15965;
i__15950 = G__15966;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9800__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9800__auto__)){
var e_15967 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_15967);

var G__15968 = (_ + (1));
_ = G__15968;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__10041__auto__ = [];
var len__10034__auto___15978 = arguments.length;
var i__10035__auto___15979 = (0);
while(true){
if((i__10035__auto___15979 < len__10034__auto___15978)){
args__10041__auto__.push((arguments[i__10035__auto___15979]));

var G__15980 = (i__10035__auto___15979 + (1));
i__10035__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__15970){
var vec__15971 = p__15970;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15971,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__15977 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__15971,default$){
return (function (G__15974,G__15976,G__15975){
var or__8762__auto__ = (function (){var and__8750__auto__ = (G__15974.cljs$core$IFn$_invoke$arity$1 ? G__15974.cljs$core$IFn$_invoke$arity$1(G__15975) : G__15974.call(null,G__15975));
if(cljs.core.truth_(and__8750__auto__)){
return G__15975;
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return G__15976;
}
});})(c,vec__15971,default$))
);
return (fexpr__15977.cljs$core$IFn$_invoke$arity$3 ? fexpr__15977.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__15977.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__15971,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__15971,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq15969){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15969));
});

