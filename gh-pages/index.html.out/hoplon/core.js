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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21688_SHARP_,p2__21689_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21688_SHARP_,p2__21689_SHARP_.getAttribute("static-id"),p2__21689_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__21691 = arguments.length;
switch (G__21691) {
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
var G__21692_21695 = init;
var G__21693_21696 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21692_21695,G__21693_21696) : f.call(null,G__21692_21695,G__21693_21696));

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
var vec__21697 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__21698 = cljs.core.seq(vec__21697);
var first__21699 = cljs.core.first(seq__21698);
var seq__21698__$1 = cljs.core.next(seq__21698);
var f = first__21699;
var more = seq__21698__$1;
var vec__21700 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21700,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21700,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("2a59c657bbcf46bc8f73ca40cc5f6fc0")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__21703_SHARP_){
return cljs.core.zipmap(p1__21703_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__21704 = (i + (1));
var G__21705 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__21704;
ret = G__21705;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__21707 = arguments.length;
switch (G__21707) {
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

var G__21709 = (i + (1));
i = G__21709;
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

var G__21710_21713 = hoplon.core.node;
var G__21711_21714 = "string";
var G__21712_21715 = ((function (G__21710_21713,G__21711_21714){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__21710_21713,G__21711_21714))
;
goog.object.set(G__21710_21713,G__21711_21714,G__21712_21715);
goog.object.set(hoplon.core.INode,"number",true);

var G__21716_21720 = hoplon.core.node;
var G__21717_21721 = "number";
var G__21718_21722 = ((function (G__21716_21720,G__21717_21721){
return (function (this$){
var G__21719 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__21719) : hoplon.core.$text.call(null,G__21719));
});})(G__21716_21720,G__21717_21721))
;
goog.object.set(G__21716_21720,G__21717_21721,G__21718_21722);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21725_SHARP_,p2__21724_SHARP_){
if((p2__21724_SHARP_ == null)){
return p1__21725_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21725_SHARP_,p2__21724_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__21732 = new$__$1;
var vec__21734 = G__21732;
var seq__21735 = cljs.core.seq(vec__21734);
var first__21736 = cljs.core.first(seq__21735);
var seq__21735__$1 = cljs.core.next(seq__21735);
var x = first__21736;
var xs = seq__21735__$1;
var G__21733 = hoplon.core.child_vec(this$);
var vec__21737 = G__21733;
var seq__21738 = cljs.core.seq(vec__21737);
var first__21739 = cljs.core.first(seq__21738);
var seq__21738__$1 = cljs.core.next(seq__21738);
var k = first__21739;
var ks = seq__21738__$1;
var kids = vec__21737;
var G__21732__$1 = G__21732;
var G__21733__$1 = G__21733;
while(true){
var vec__21740 = G__21732__$1;
var seq__21741 = cljs.core.seq(vec__21740);
var first__21742 = cljs.core.first(seq__21741);
var seq__21741__$1 = cljs.core.next(seq__21741);
var x__$1 = first__21742;
var xs__$1 = seq__21741__$1;
var vec__21743 = G__21733__$1;
var seq__21744 = cljs.core.seq(vec__21743);
var first__21745 = cljs.core.first(seq__21744);
var seq__21744__$1 = cljs.core.next(seq__21744);
var k__$1 = first__21745;
var ks__$1 = seq__21744__$1;
var kids__$1 = vec__21743;
if(cljs.core.truth_((function (){var or__8762__auto__ = x__$1;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return k__$1;
}
})())){
var G__21746 = xs__$1;
var G__21747 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__21732__$1 = G__21746;
G__21733__$1 = G__21747;
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
var kids_21748 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_21748;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_21748,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_21751 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_21752 = cljs.core.count(cljs.core.deref(kids_21751));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_21751,i_21752,child__$1){
return (function (p1__21750_SHARP_,p2__21749_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_21751,cljs.core.assoc,i_21752,p2__21749_SHARP_);
});})(kids_21751,i_21752,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_21751,cljs.core.assoc,i_21752,child__$1);
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
return (function (p1__21753_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__21753_SHARP_));
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
return (function (p1__21754_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__21754_SHARP_], 0)));
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
return (function (p1__21755_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__21755_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_21756 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_21757 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__21758 = (function (){var and__8750__auto__ = attr_21757;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_21757),kk_21756);
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__21758)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_21757,cljs.core.assoc,kk_21756,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__21759_SHARP_){
return p1__21759_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__21760_SHARP_){
return p1__21760_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__21761_SHARP_){
return p1__21761_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__21762_SHARP_){
return p1__21762_SHARP_.hoplonKids;
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
var G__21768 = arguments.length;
switch (G__21768) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___21770 = arguments.length;
var i__10035__auto___21771 = (0);
while(true){
if((i__10035__auto___21771 < len__10034__auto___21770)){
args_arr__10057__auto__.push((arguments[i__10035__auto___21771]));

var G__21772 = (i__10035__auto___21771 + (1));
i__10035__auto___21771 = G__21772;
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

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21764){
var G__21765 = cljs.core.first(seq21764);
var seq21764__$1 = cljs.core.next(seq21764);
var G__21766 = cljs.core.first(seq21764__$1);
var seq21764__$2 = cljs.core.next(seq21764__$1);
var G__21767 = cljs.core.first(seq21764__$2);
var seq21764__$3 = cljs.core.next(seq21764__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21765,G__21766,G__21767,seq21764__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__21778 = arguments.length;
switch (G__21778) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___21780 = arguments.length;
var i__10035__auto___21781 = (0);
while(true){
if((i__10035__auto___21781 < len__10034__auto___21780)){
args_arr__10057__auto__.push((arguments[i__10035__auto___21781]));

var G__21782 = (i__10035__auto___21781 + (1));
i__10035__auto___21781 = G__21782;
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

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq21774){
var G__21775 = cljs.core.first(seq21774);
var seq21774__$1 = cljs.core.next(seq21774);
var G__21776 = cljs.core.first(seq21774__$1);
var seq21774__$2 = cljs.core.next(seq21774__$1);
var G__21777 = cljs.core.first(seq21774__$2);
var seq21774__$3 = cljs.core.next(seq21774__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21775,G__21776,G__21777,seq21774__$3);
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
return (function (p1__21785_SHARP_,p2__21784_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__21784_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__21784_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__21786_SHARP_){
return p1__21786_SHARP_.head;
}):(function (p1__21787_SHARP_){
return p1__21787_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__21788_SHARP_){
try{return cljs.core.vector_QMARK_(p1__21788_SHARP_);
}catch (e21789){if((e21789 instanceof Error)){
var _ = e21789;
return null;
} else {
throw e21789;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__21790_SHARP_){
try{return cljs.core.seq_QMARK_(p1__21790_SHARP_);
}catch (e21791){if((e21791 instanceof Error)){
var _ = e21791;
return null;
} else {
throw e21791;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var G__21793 = arguments.length;
switch (G__21793) {
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
}catch (e21794){if((e21794 instanceof Error)){
var _ = e21794;
return not_found;
} else {
throw e21794;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__21797 = arguments.length;
switch (G__21797) {
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
var G__21799 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__21800 = (0);
return setTimeout(G__21799,G__21800);
} else {
var temp__5276__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return v.push(f);
} else {
var G__21801_21819 = this$;
var G__21802_21820 = "_hoplonWhenDom";
var G__21803_21821 = [f];
goog.object.set(G__21801_21819,G__21802_21820,G__21803_21821);

var G__21804 = ((function (temp__5276__auto__){
return (function (){
var fexpr__21812 = ((function (temp__5276__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__21813 = ((function (temp__5276__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5276__auto__))
;
var G__21814 = (20);
return setTimeout(G__21813,G__21814);
} else {
var seq__21815_21822 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__21816_21823 = null;
var count__21817_21824 = (0);
var i__21818_21825 = (0);
while(true){
if((i__21818_21825 < count__21817_21824)){
var f_21826__$1 = chunk__21816_21823.cljs$core$IIndexed$_nth$arity$2(null,i__21818_21825);
(f_21826__$1.cljs$core$IFn$_invoke$arity$0 ? f_21826__$1.cljs$core$IFn$_invoke$arity$0() : f_21826__$1.call(null));

var G__21827 = seq__21815_21822;
var G__21828 = chunk__21816_21823;
var G__21829 = count__21817_21824;
var G__21830 = (i__21818_21825 + (1));
seq__21815_21822 = G__21827;
chunk__21816_21823 = G__21828;
count__21817_21824 = G__21829;
i__21818_21825 = G__21830;
continue;
} else {
var temp__5278__auto___21831 = cljs.core.seq(seq__21815_21822);
if(temp__5278__auto___21831){
var seq__21815_21832__$1 = temp__5278__auto___21831;
if(cljs.core.chunked_seq_QMARK_(seq__21815_21832__$1)){
var c__9688__auto___21833 = cljs.core.chunk_first(seq__21815_21832__$1);
var G__21834 = cljs.core.chunk_rest(seq__21815_21832__$1);
var G__21835 = c__9688__auto___21833;
var G__21836 = cljs.core.count(c__9688__auto___21833);
var G__21837 = (0);
seq__21815_21822 = G__21834;
chunk__21816_21823 = G__21835;
count__21817_21824 = G__21836;
i__21818_21825 = G__21837;
continue;
} else {
var f_21838__$1 = cljs.core.first(seq__21815_21832__$1);
(f_21838__$1.cljs$core$IFn$_invoke$arity$0 ? f_21838__$1.cljs$core$IFn$_invoke$arity$0() : f_21838__$1.call(null));

var G__21839 = cljs.core.next(seq__21815_21832__$1);
var G__21840 = null;
var G__21841 = (0);
var G__21842 = (0);
seq__21815_21822 = G__21839;
chunk__21816_21823 = G__21840;
count__21817_21824 = G__21841;
i__21818_21825 = G__21842;
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
return fexpr__21812();
});})(temp__5276__auto__))
;
var G__21805 = (0);
return setTimeout(G__21804,G__21805);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__21849 = args;
var vec__21850 = G__21849;
var seq__21851 = cljs.core.seq(vec__21850);
var first__21852 = cljs.core.first(seq__21851);
var seq__21851__$1 = cljs.core.next(seq__21851);
var arg = first__21852;
var args__$1 = seq__21851__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__21849__$1 = G__21849;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__21853 = G__21849__$1;
var seq__21854 = cljs.core.seq(vec__21853);
var first__21855 = cljs.core.first(seq__21854);
var seq__21854__$1 = cljs.core.next(seq__21854);
var arg__$1 = first__21855;
var args__$2 = seq__21854__$1;
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
var G__21856 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__21849__$1,attr__$2,kids__$2,vec__21853,seq__21854,first__21855,seq__21854__$1,arg__$1,args__$2,attr,kids,G__21849,vec__21850,seq__21851,first__21852,seq__21851__$1,arg,args__$1){
return (function (p1__21843_SHARP_,p2__21844_SHARP_,p3__21845_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__21843_SHARP_,p2__21844_SHARP_,p3__21845_SHARP_);
});})(attr__$1,kids__$1,G__21849__$1,attr__$2,kids__$2,vec__21853,seq__21854,first__21855,seq__21854__$1,arg__$1,args__$2,attr,kids,G__21849,vec__21850,seq__21851,first__21852,seq__21851__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__21857 = kids__$2;
var G__21858 = args__$2;
attr__$1 = G__21856;
kids__$1 = G__21857;
G__21849__$1 = G__21858;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__21859 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__21860 = kids__$2;
var G__21861 = cljs.core.rest(args__$2);
attr__$1 = G__21859;
kids__$1 = G__21860;
G__21849__$1 = G__21861;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__21862 = attr__$2;
var G__21863 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__21864 = args__$2;
attr__$1 = G__21862;
kids__$1 = G__21863;
G__21849__$1 = G__21864;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__21865 = attr__$2;
var G__21866 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__21867 = args__$2;
attr__$1 = G__21865;
kids__$1 = G__21866;
G__21849__$1 = G__21867;
continue;
} else {
var G__21868 = attr__$2;
var G__21869 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__21870 = args__$2;
attr__$1 = G__21868;
kids__$1 = G__21869;
G__21849__$1 = G__21870;
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
return cljs.core.reduce_kv((function (p1__21872_SHARP_,p2__21871_SHARP_,p3__21873_SHARP_){
hoplon.core._attr_BANG_(p2__21871_SHARP_,p1__21872_SHARP_,p3__21873_SHARP_);

return p1__21872_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__21874){
var vec__21875 = p__21874;
var seq__21876 = cljs.core.seq(vec__21875);
var first__21877 = cljs.core.first(seq__21876);
var seq__21876__$1 = cljs.core.next(seq__21876);
var child_cell = first__21877;
var _ = seq__21876__$1;
var kids = vec__21875;
var this$__$1 = this$;
var seq__21878_21882 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__21879_21883 = null;
var count__21880_21884 = (0);
var i__21881_21885 = (0);
while(true){
if((i__21881_21885 < count__21880_21884)){
var x_21886 = chunk__21879_21883.cljs$core$IIndexed$_nth$arity$2(null,i__21881_21885);
var temp__5278__auto___21887 = hoplon.core.__GT_node(x_21886);
if(cljs.core.truth_(temp__5278__auto___21887)){
var x_21888__$1 = temp__5278__auto___21887;
hoplon.core.append_child_BANG_(this$__$1,x_21888__$1);
} else {
}

var G__21889 = seq__21878_21882;
var G__21890 = chunk__21879_21883;
var G__21891 = count__21880_21884;
var G__21892 = (i__21881_21885 + (1));
seq__21878_21882 = G__21889;
chunk__21879_21883 = G__21890;
count__21880_21884 = G__21891;
i__21881_21885 = G__21892;
continue;
} else {
var temp__5278__auto___21893 = cljs.core.seq(seq__21878_21882);
if(temp__5278__auto___21893){
var seq__21878_21894__$1 = temp__5278__auto___21893;
if(cljs.core.chunked_seq_QMARK_(seq__21878_21894__$1)){
var c__9688__auto___21895 = cljs.core.chunk_first(seq__21878_21894__$1);
var G__21896 = cljs.core.chunk_rest(seq__21878_21894__$1);
var G__21897 = c__9688__auto___21895;
var G__21898 = cljs.core.count(c__9688__auto___21895);
var G__21899 = (0);
seq__21878_21882 = G__21896;
chunk__21879_21883 = G__21897;
count__21880_21884 = G__21898;
i__21881_21885 = G__21899;
continue;
} else {
var x_21900 = cljs.core.first(seq__21878_21894__$1);
var temp__5278__auto___21901__$1 = hoplon.core.__GT_node(x_21900);
if(cljs.core.truth_(temp__5278__auto___21901__$1)){
var x_21902__$1 = temp__5278__auto___21901__$1;
hoplon.core.append_child_BANG_(this$__$1,x_21902__$1);
} else {
}

var G__21903 = cljs.core.next(seq__21878_21894__$1);
var G__21904 = null;
var G__21905 = (0);
var G__21906 = (0);
seq__21878_21882 = G__21903;
chunk__21879_21883 = G__21904;
count__21880_21884 = G__21905;
i__21881_21885 = G__21906;
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
var G__21945__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__21908 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908,(1),null);
var G__21911 = this$;
hoplon.core.add_attributes_BANG_(G__21911,attr);

hoplon.core.add_children_BANG_(G__21911,kids);

return G__21911;
};
var G__21945 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__21946__i = 0, G__21946__a = new Array(arguments.length -  1);
while (G__21946__i < G__21946__a.length) {G__21946__a[G__21946__i] = arguments[G__21946__i + 1]; ++G__21946__i;}
  args = new cljs.core.IndexedSeq(G__21946__a,0,null);
} 
return G__21945__delegate.call(this,self__,args);};
G__21945.cljs$lang$maxFixedArity = 1;
G__21945.cljs$lang$applyTo = (function (arglist__21947){
var self__ = cljs.core.first(arglist__21947);
var args = cljs.core.rest(arglist__21947);
return G__21945__delegate(self__,args);
});
G__21945.cljs$core$IFn$_invoke$arity$variadic = G__21945__delegate;
return G__21945;
})()
;

Element.prototype.apply = (function (self__,args21907){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21907)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__21948__delegate = function (args){
var this$ = this;
var vec__21912 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912,(1),null);
var G__21915 = this$;
hoplon.core.add_attributes_BANG_(G__21915,attr);

hoplon.core.add_children_BANG_(G__21915,kids);

return G__21915;
};
var G__21948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21949__i = 0, G__21949__a = new Array(arguments.length -  0);
while (G__21949__i < G__21949__a.length) {G__21949__a[G__21949__i] = arguments[G__21949__i + 0]; ++G__21949__i;}
  args = new cljs.core.IndexedSeq(G__21949__a,0,null);
} 
return G__21948__delegate.call(this,args);};
G__21948.cljs$lang$maxFixedArity = 0;
G__21948.cljs$lang$applyTo = (function (arglist__21950){
var args = cljs.core.seq(arglist__21950);
return G__21948__delegate(args);
});
G__21948.cljs$core$IFn$_invoke$arity$variadic = G__21948__delegate;
return G__21948;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__21916 = cljs.core.seq(kvs);
var chunk__21918 = null;
var count__21919 = (0);
var i__21920 = (0);
while(true){
if((i__21920 < count__21919)){
var vec__21922 = chunk__21918.cljs$core$IIndexed$_nth$arity$2(null,i__21920);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,(1),null);
var k_21951__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_21951__$1);
} else {
e.setAttribute(k_21951__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21951__$1:v));
}

var G__21952 = seq__21916;
var G__21953 = chunk__21918;
var G__21954 = count__21919;
var G__21955 = (i__21920 + (1));
seq__21916 = G__21952;
chunk__21918 = G__21953;
count__21919 = G__21954;
i__21920 = G__21955;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__21916);
if(temp__5278__auto__){
var seq__21916__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21916__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__21916__$1);
var G__21956 = cljs.core.chunk_rest(seq__21916__$1);
var G__21957 = c__9688__auto__;
var G__21958 = cljs.core.count(c__9688__auto__);
var G__21959 = (0);
seq__21916 = G__21956;
chunk__21918 = G__21957;
count__21919 = G__21958;
i__21920 = G__21959;
continue;
} else {
var vec__21925 = cljs.core.first(seq__21916__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(1),null);
var k_21960__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_21960__$1);
} else {
e.setAttribute(k_21960__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21960__$1:v));
}

var G__21961 = cljs.core.next(seq__21916__$1);
var G__21962 = null;
var G__21963 = (0);
var G__21964 = (0);
seq__21916 = G__21961;
chunk__21918 = G__21962;
count__21919 = G__21963;
i__21920 = G__21964;
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
var seq__21928 = cljs.core.seq(kvs);
var chunk__21929 = null;
var count__21930 = (0);
var i__21931 = (0);
while(true){
if((i__21931 < count__21930)){
var vec__21932 = chunk__21929.cljs$core$IIndexed$_nth$arity$2(null,i__21931);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(1),null);
var G__21935_21965 = e.style;
var G__21936_21966 = cljs.core.name(k);
var G__21937_21967 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__21935_21965,G__21936_21966,G__21937_21967);

var G__21968 = seq__21928;
var G__21969 = chunk__21929;
var G__21970 = count__21930;
var G__21971 = (i__21931 + (1));
seq__21928 = G__21968;
chunk__21929 = G__21969;
count__21930 = G__21970;
i__21931 = G__21971;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__21928);
if(temp__5278__auto__){
var seq__21928__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21928__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__21928__$1);
var G__21972 = cljs.core.chunk_rest(seq__21928__$1);
var G__21973 = c__9688__auto__;
var G__21974 = cljs.core.count(c__9688__auto__);
var G__21975 = (0);
seq__21928 = G__21972;
chunk__21929 = G__21973;
count__21930 = G__21974;
i__21931 = G__21975;
continue;
} else {
var vec__21938 = cljs.core.first(seq__21928__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938,(1),null);
var G__21941_21976 = e.style;
var G__21942_21977 = cljs.core.name(k);
var G__21943_21978 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__21941_21976,G__21942_21977,G__21943_21978);

var G__21979 = cljs.core.next(seq__21928__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__21928 = G__21979;
chunk__21929 = G__21980;
count__21930 = G__21981;
i__21931 = G__21982;
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
}catch (e21944){if((e21944 instanceof Error)){
var _ = e21944;
return null;
} else {
throw e21944;

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
var G__21986__delegate = function (args){
var vec__21983 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__21986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21987__i = 0, G__21987__a = new Array(arguments.length -  0);
while (G__21987__i < G__21987__a.length) {G__21987__a[G__21987__i] = arguments[G__21987__i + 0]; ++G__21987__i;}
  args = new cljs.core.IndexedSeq(G__21987__a,0,null);
} 
return G__21986__delegate.call(this,args);};
G__21986.cljs$lang$maxFixedArity = 0;
G__21986.cljs$lang$applyTo = (function (arglist__21988){
var args = cljs.core.seq(arglist__21988);
return G__21986__delegate(args);
});
G__21986.cljs$core$IFn$_invoke$arity$variadic = G__21986__delegate;
return G__21986;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__21991__delegate = function (rest__21989_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__21989_SHARP_);
};
var G__21991 = function (var_args){
var rest__21989_SHARP_ = null;
if (arguments.length > 0) {
var G__21992__i = 0, G__21992__a = new Array(arguments.length -  0);
while (G__21992__i < G__21992__a.length) {G__21992__a[G__21992__i] = arguments[G__21992__i + 0]; ++G__21992__i;}
  rest__21989_SHARP_ = new cljs.core.IndexedSeq(G__21992__a,0,null);
} 
return G__21991__delegate.call(this,rest__21989_SHARP_);};
G__21991.cljs$lang$maxFixedArity = 0;
G__21991.cljs$lang$applyTo = (function (arglist__21993){
var rest__21989_SHARP_ = cljs.core.seq(arglist__21993);
return G__21991__delegate(rest__21989_SHARP_);
});
G__21991.cljs$core$IFn$_invoke$arity$variadic = G__21991__delegate;
return G__21991;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__21994__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e21990){if((e21990 instanceof Error)){
var _ = e21990;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e21990;

}
}};
var G__21994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21995__i = 0, G__21995__a = new Array(arguments.length -  0);
while (G__21995__i < G__21995__a.length) {G__21995__a[G__21995__i] = arguments[G__21995__i + 0]; ++G__21995__i;}
  args = new cljs.core.IndexedSeq(G__21995__a,0,null);
} 
return G__21994__delegate.call(this,args);};
G__21994.cljs$lang$maxFixedArity = 0;
G__21994.cljs$lang$applyTo = (function (arglist__21996){
var args = cljs.core.seq(arglist__21996);
return G__21994__delegate(args);
});
G__21994.cljs$core$IFn$_invoke$arity$variadic = G__21994__delegate;
return G__21994;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__10041__auto__ = [];
var len__10034__auto___21998 = arguments.length;
var i__10035__auto___21999 = (0);
while(true){
if((i__10035__auto___21999 < len__10034__auto___21998)){
args__10041__auto__.push((arguments[i__10035__auto___21999]));

var G__22000 = (i__10035__auto___21999 + (1));
i__10035__auto___21999 = G__22000;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq21997){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21997));
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
hoplon.core.$text = (function hoplon$core$$text(p1__22001_SHARP_){
return document.createTextNode(p1__22001_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__22002_SHARP_){
return document.createComment(p1__22002_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__22003 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__22004 = (0);
return setTimeout(G__22003,G__22004);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__22005_SHARP_){
var e = p1__22005_SHARP_.target;
if(cljs.core.truth_((function (){var or__8762__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__22005_SHARP_.preventDefault();
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
var G__22006 = elem;
var G__22007 = cljs.core.cst$kw$attr;
var G__22008 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__22006,G__22007,G__22008) : hoplon.core.do_BANG_.call(null,G__22006,G__22007,G__22008));
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
var items_seq = (function (){var fexpr__22013 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__22011,G__22012){
return (G__22011.cljs$core$IFn$_invoke$arity$1 ? G__22011.cljs$core$IFn$_invoke$arity$1(G__22012) : G__22011.call(null,G__22012));
});})(on_deck))
);
return (fexpr__22013.cljs$core$IFn$_invoke$arity$2 ? fexpr__22013.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__22013.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__22009_SHARP_){
var fexpr__22017 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__22016,G__22015,G__22014){
return (G__22014.cljs$core$IFn$_invoke$arity$2 ? G__22014.cljs$core$IFn$_invoke$arity$2(G__22015,G__22016) : G__22014.call(null,G__22015,G__22016));
});})(on_deck,items_seq))
);
return (fexpr__22017.cljs$core$IFn$_invoke$arity$3 ? fexpr__22017.cljs$core$IFn$_invoke$arity$3(p1__22009_SHARP_,items_seq,hoplon.core.safe_nth) : fexpr__22017.call(null,p1__22009_SHARP_,items_seq,hoplon.core.safe_nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__22010_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__22010_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__22010_SHARP_,cljs.core.rest);

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
var seq__22018 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__22019 = null;
var count__22020 = (0);
var i__22021 = (0);
while(true){
if((i__22021 < count__22020)){
var i = chunk__22019.cljs$core$IIndexed$_nth$arity$2(null,i__22021);
var e_22024 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__22022 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__22022) : tpl.call(null,G__22022));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_22024);

var G__22025 = seq__22018;
var G__22026 = chunk__22019;
var G__22027 = count__22020;
var G__22028 = (i__22021 + (1));
seq__22018 = G__22025;
chunk__22019 = G__22026;
count__22020 = G__22027;
i__22021 = G__22028;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__22018);
if(temp__5278__auto__){
var seq__22018__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22018__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__22018__$1);
var G__22029 = cljs.core.chunk_rest(seq__22018__$1);
var G__22030 = c__9688__auto__;
var G__22031 = cljs.core.count(c__9688__auto__);
var G__22032 = (0);
seq__22018 = G__22029;
chunk__22019 = G__22030;
count__22020 = G__22031;
i__22021 = G__22032;
continue;
} else {
var i = cljs.core.first(seq__22018__$1);
var e_22033 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__22023 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__22023) : tpl.call(null,G__22023));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_22033);

var G__22034 = cljs.core.next(seq__22018__$1);
var G__22035 = null;
var G__22036 = (0);
var G__22037 = (0);
seq__22018 = G__22034;
chunk__22019 = G__22035;
count__22020 = G__22036;
i__22021 = G__22037;
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
var e_22038 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_22038);

var G__22039 = (_ + (1));
_ = G__22039;
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
var len__10034__auto___22049 = arguments.length;
var i__10035__auto___22050 = (0);
while(true){
if((i__10035__auto___22050 < len__10034__auto___22049)){
args__10041__auto__.push((arguments[i__10035__auto___22050]));

var G__22051 = (i__10035__auto___22050 + (1));
i__10035__auto___22050 = G__22051;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__22041){
var vec__22042 = p__22041;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__22048 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__22042,default$){
return (function (G__22045,G__22047,G__22046){
var or__8762__auto__ = (function (){var and__8750__auto__ = (G__22045.cljs$core$IFn$_invoke$arity$1 ? G__22045.cljs$core$IFn$_invoke$arity$1(G__22046) : G__22045.call(null,G__22046));
if(cljs.core.truth_(and__8750__auto__)){
return G__22046;
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return G__22047;
}
});})(c,vec__22042,default$))
);
return (fexpr__22048.cljs$core$IFn$_invoke$arity$3 ? fexpr__22048.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__22048.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__22042,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__22042,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq22040){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22040));
});

