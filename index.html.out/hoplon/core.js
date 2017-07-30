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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21736_SHARP_,p2__21737_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21736_SHARP_,p2__21737_SHARP_.getAttribute("static-id"),p2__21737_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__21739 = arguments.length;
switch (G__21739) {
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
var G__21740_21743 = init;
var G__21741_21744 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21740_21743,G__21741_21744) : f.call(null,G__21740_21743,G__21741_21744));

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
var vec__21745 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__21746 = cljs.core.seq(vec__21745);
var first__21747 = cljs.core.first(seq__21746);
var seq__21746__$1 = cljs.core.next(seq__21746);
var f = first__21747;
var more = seq__21746__$1;
var vec__21748 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21748,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21748,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("f743c1ab5d7046138433770d82bb488c")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__21751_SHARP_){
return cljs.core.zipmap(p1__21751_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__21752 = (i + (1));
var G__21753 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__21752;
ret = G__21753;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__21755 = arguments.length;
switch (G__21755) {
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

var G__21757 = (i + (1));
i = G__21757;
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

var G__21758_21761 = hoplon.core.node;
var G__21759_21762 = "string";
var G__21760_21763 = ((function (G__21758_21761,G__21759_21762){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__21758_21761,G__21759_21762))
;
goog.object.set(G__21758_21761,G__21759_21762,G__21760_21763);
goog.object.set(hoplon.core.INode,"number",true);

var G__21764_21768 = hoplon.core.node;
var G__21765_21769 = "number";
var G__21766_21770 = ((function (G__21764_21768,G__21765_21769){
return (function (this$){
var G__21767 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__21767) : hoplon.core.$text.call(null,G__21767));
});})(G__21764_21768,G__21765_21769))
;
goog.object.set(G__21764_21768,G__21765_21769,G__21766_21770);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21773_SHARP_,p2__21772_SHARP_){
if((p2__21772_SHARP_ == null)){
return p1__21773_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21773_SHARP_,p2__21772_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__21780 = new$__$1;
var vec__21782 = G__21780;
var seq__21783 = cljs.core.seq(vec__21782);
var first__21784 = cljs.core.first(seq__21783);
var seq__21783__$1 = cljs.core.next(seq__21783);
var x = first__21784;
var xs = seq__21783__$1;
var G__21781 = hoplon.core.child_vec(this$);
var vec__21785 = G__21781;
var seq__21786 = cljs.core.seq(vec__21785);
var first__21787 = cljs.core.first(seq__21786);
var seq__21786__$1 = cljs.core.next(seq__21786);
var k = first__21787;
var ks = seq__21786__$1;
var kids = vec__21785;
var G__21780__$1 = G__21780;
var G__21781__$1 = G__21781;
while(true){
var vec__21788 = G__21780__$1;
var seq__21789 = cljs.core.seq(vec__21788);
var first__21790 = cljs.core.first(seq__21789);
var seq__21789__$1 = cljs.core.next(seq__21789);
var x__$1 = first__21790;
var xs__$1 = seq__21789__$1;
var vec__21791 = G__21781__$1;
var seq__21792 = cljs.core.seq(vec__21791);
var first__21793 = cljs.core.first(seq__21792);
var seq__21792__$1 = cljs.core.next(seq__21792);
var k__$1 = first__21793;
var ks__$1 = seq__21792__$1;
var kids__$1 = vec__21791;
if(cljs.core.truth_((function (){var or__8762__auto__ = x__$1;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return k__$1;
}
})())){
var G__21794 = xs__$1;
var G__21795 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__21780__$1 = G__21794;
G__21781__$1 = G__21795;
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
var kids_21796 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_21796;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_21796,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_21799 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_21800 = cljs.core.count(cljs.core.deref(kids_21799));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_21799,i_21800,child__$1){
return (function (p1__21798_SHARP_,p2__21797_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_21799,cljs.core.assoc,i_21800,p2__21797_SHARP_);
});})(kids_21799,i_21800,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_21799,cljs.core.assoc,i_21800,child__$1);
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
return (function (p1__21801_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__21801_SHARP_));
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
return (function (p1__21802_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__21802_SHARP_], 0)));
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
return (function (p1__21803_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__21803_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_21804 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_21805 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__21806 = (function (){var and__8750__auto__ = attr_21805;
if(cljs.core.truth_(and__8750__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_21805),kk_21804);
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__21806)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_21805,cljs.core.assoc,kk_21804,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__21807_SHARP_){
return p1__21807_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__21808_SHARP_){
return p1__21808_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__21809_SHARP_){
return p1__21809_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__21810_SHARP_){
return p1__21810_SHARP_.hoplonKids;
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
var G__21816 = arguments.length;
switch (G__21816) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___21818 = arguments.length;
var i__10035__auto___21819 = (0);
while(true){
if((i__10035__auto___21819 < len__10034__auto___21818)){
args_arr__10057__auto__.push((arguments[i__10035__auto___21819]));

var G__21820 = (i__10035__auto___21819 + (1));
i__10035__auto___21819 = G__21820;
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

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21812){
var G__21813 = cljs.core.first(seq21812);
var seq21812__$1 = cljs.core.next(seq21812);
var G__21814 = cljs.core.first(seq21812__$1);
var seq21812__$2 = cljs.core.next(seq21812__$1);
var G__21815 = cljs.core.first(seq21812__$2);
var seq21812__$3 = cljs.core.next(seq21812__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21813,G__21814,G__21815,seq21812__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__21826 = arguments.length;
switch (G__21826) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___21828 = arguments.length;
var i__10035__auto___21829 = (0);
while(true){
if((i__10035__auto___21829 < len__10034__auto___21828)){
args_arr__10057__auto__.push((arguments[i__10035__auto___21829]));

var G__21830 = (i__10035__auto___21829 + (1));
i__10035__auto___21829 = G__21830;
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

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq21822){
var G__21823 = cljs.core.first(seq21822);
var seq21822__$1 = cljs.core.next(seq21822);
var G__21824 = cljs.core.first(seq21822__$1);
var seq21822__$2 = cljs.core.next(seq21822__$1);
var G__21825 = cljs.core.first(seq21822__$2);
var seq21822__$3 = cljs.core.next(seq21822__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21823,G__21824,G__21825,seq21822__$3);
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
return (function (p1__21833_SHARP_,p2__21832_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__21832_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__21832_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__21834_SHARP_){
return p1__21834_SHARP_.head;
}):(function (p1__21835_SHARP_){
return p1__21835_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__21836_SHARP_){
try{return cljs.core.vector_QMARK_(p1__21836_SHARP_);
}catch (e21837){if((e21837 instanceof Error)){
var _ = e21837;
return null;
} else {
throw e21837;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__21838_SHARP_){
try{return cljs.core.seq_QMARK_(p1__21838_SHARP_);
}catch (e21839){if((e21839 instanceof Error)){
var _ = e21839;
return null;
} else {
throw e21839;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var G__21841 = arguments.length;
switch (G__21841) {
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
}catch (e21842){if((e21842 instanceof Error)){
var _ = e21842;
return not_found;
} else {
throw e21842;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__21845 = arguments.length;
switch (G__21845) {
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
var G__21847 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__21848 = (0);
return setTimeout(G__21847,G__21848);
} else {
var temp__5276__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return v.push(f);
} else {
var G__21849_21867 = this$;
var G__21850_21868 = "_hoplonWhenDom";
var G__21851_21869 = [f];
goog.object.set(G__21849_21867,G__21850_21868,G__21851_21869);

var G__21852 = ((function (temp__5276__auto__){
return (function (){
var fexpr__21860 = ((function (temp__5276__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__21861 = ((function (temp__5276__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5276__auto__))
;
var G__21862 = (20);
return setTimeout(G__21861,G__21862);
} else {
var seq__21863_21870 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__21864_21871 = null;
var count__21865_21872 = (0);
var i__21866_21873 = (0);
while(true){
if((i__21866_21873 < count__21865_21872)){
var f_21874__$1 = chunk__21864_21871.cljs$core$IIndexed$_nth$arity$2(null,i__21866_21873);
(f_21874__$1.cljs$core$IFn$_invoke$arity$0 ? f_21874__$1.cljs$core$IFn$_invoke$arity$0() : f_21874__$1.call(null));

var G__21875 = seq__21863_21870;
var G__21876 = chunk__21864_21871;
var G__21877 = count__21865_21872;
var G__21878 = (i__21866_21873 + (1));
seq__21863_21870 = G__21875;
chunk__21864_21871 = G__21876;
count__21865_21872 = G__21877;
i__21866_21873 = G__21878;
continue;
} else {
var temp__5278__auto___21879 = cljs.core.seq(seq__21863_21870);
if(temp__5278__auto___21879){
var seq__21863_21880__$1 = temp__5278__auto___21879;
if(cljs.core.chunked_seq_QMARK_(seq__21863_21880__$1)){
var c__9688__auto___21881 = cljs.core.chunk_first(seq__21863_21880__$1);
var G__21882 = cljs.core.chunk_rest(seq__21863_21880__$1);
var G__21883 = c__9688__auto___21881;
var G__21884 = cljs.core.count(c__9688__auto___21881);
var G__21885 = (0);
seq__21863_21870 = G__21882;
chunk__21864_21871 = G__21883;
count__21865_21872 = G__21884;
i__21866_21873 = G__21885;
continue;
} else {
var f_21886__$1 = cljs.core.first(seq__21863_21880__$1);
(f_21886__$1.cljs$core$IFn$_invoke$arity$0 ? f_21886__$1.cljs$core$IFn$_invoke$arity$0() : f_21886__$1.call(null));

var G__21887 = cljs.core.next(seq__21863_21880__$1);
var G__21888 = null;
var G__21889 = (0);
var G__21890 = (0);
seq__21863_21870 = G__21887;
chunk__21864_21871 = G__21888;
count__21865_21872 = G__21889;
i__21866_21873 = G__21890;
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
return fexpr__21860();
});})(temp__5276__auto__))
;
var G__21853 = (0);
return setTimeout(G__21852,G__21853);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__21897 = args;
var vec__21898 = G__21897;
var seq__21899 = cljs.core.seq(vec__21898);
var first__21900 = cljs.core.first(seq__21899);
var seq__21899__$1 = cljs.core.next(seq__21899);
var arg = first__21900;
var args__$1 = seq__21899__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__21897__$1 = G__21897;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__21901 = G__21897__$1;
var seq__21902 = cljs.core.seq(vec__21901);
var first__21903 = cljs.core.first(seq__21902);
var seq__21902__$1 = cljs.core.next(seq__21902);
var arg__$1 = first__21903;
var args__$2 = seq__21902__$1;
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
var G__21904 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__21897__$1,attr__$2,kids__$2,vec__21901,seq__21902,first__21903,seq__21902__$1,arg__$1,args__$2,attr,kids,G__21897,vec__21898,seq__21899,first__21900,seq__21899__$1,arg,args__$1){
return (function (p1__21891_SHARP_,p2__21892_SHARP_,p3__21893_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__21891_SHARP_,p2__21892_SHARP_,p3__21893_SHARP_);
});})(attr__$1,kids__$1,G__21897__$1,attr__$2,kids__$2,vec__21901,seq__21902,first__21903,seq__21902__$1,arg__$1,args__$2,attr,kids,G__21897,vec__21898,seq__21899,first__21900,seq__21899__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__21905 = kids__$2;
var G__21906 = args__$2;
attr__$1 = G__21904;
kids__$1 = G__21905;
G__21897__$1 = G__21906;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__21907 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__21908 = kids__$2;
var G__21909 = cljs.core.rest(args__$2);
attr__$1 = G__21907;
kids__$1 = G__21908;
G__21897__$1 = G__21909;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__21910 = attr__$2;
var G__21911 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__21912 = args__$2;
attr__$1 = G__21910;
kids__$1 = G__21911;
G__21897__$1 = G__21912;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__21913 = attr__$2;
var G__21914 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__21915 = args__$2;
attr__$1 = G__21913;
kids__$1 = G__21914;
G__21897__$1 = G__21915;
continue;
} else {
var G__21916 = attr__$2;
var G__21917 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__21918 = args__$2;
attr__$1 = G__21916;
kids__$1 = G__21917;
G__21897__$1 = G__21918;
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
return cljs.core.reduce_kv((function (p1__21920_SHARP_,p2__21919_SHARP_,p3__21921_SHARP_){
hoplon.core._attr_BANG_(p2__21919_SHARP_,p1__21920_SHARP_,p3__21921_SHARP_);

return p1__21920_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__21922){
var vec__21923 = p__21922;
var seq__21924 = cljs.core.seq(vec__21923);
var first__21925 = cljs.core.first(seq__21924);
var seq__21924__$1 = cljs.core.next(seq__21924);
var child_cell = first__21925;
var _ = seq__21924__$1;
var kids = vec__21923;
var this$__$1 = this$;
var seq__21926_21930 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__21927_21931 = null;
var count__21928_21932 = (0);
var i__21929_21933 = (0);
while(true){
if((i__21929_21933 < count__21928_21932)){
var x_21934 = chunk__21927_21931.cljs$core$IIndexed$_nth$arity$2(null,i__21929_21933);
var temp__5278__auto___21935 = hoplon.core.__GT_node(x_21934);
if(cljs.core.truth_(temp__5278__auto___21935)){
var x_21936__$1 = temp__5278__auto___21935;
hoplon.core.append_child_BANG_(this$__$1,x_21936__$1);
} else {
}

var G__21937 = seq__21926_21930;
var G__21938 = chunk__21927_21931;
var G__21939 = count__21928_21932;
var G__21940 = (i__21929_21933 + (1));
seq__21926_21930 = G__21937;
chunk__21927_21931 = G__21938;
count__21928_21932 = G__21939;
i__21929_21933 = G__21940;
continue;
} else {
var temp__5278__auto___21941 = cljs.core.seq(seq__21926_21930);
if(temp__5278__auto___21941){
var seq__21926_21942__$1 = temp__5278__auto___21941;
if(cljs.core.chunked_seq_QMARK_(seq__21926_21942__$1)){
var c__9688__auto___21943 = cljs.core.chunk_first(seq__21926_21942__$1);
var G__21944 = cljs.core.chunk_rest(seq__21926_21942__$1);
var G__21945 = c__9688__auto___21943;
var G__21946 = cljs.core.count(c__9688__auto___21943);
var G__21947 = (0);
seq__21926_21930 = G__21944;
chunk__21927_21931 = G__21945;
count__21928_21932 = G__21946;
i__21929_21933 = G__21947;
continue;
} else {
var x_21948 = cljs.core.first(seq__21926_21942__$1);
var temp__5278__auto___21949__$1 = hoplon.core.__GT_node(x_21948);
if(cljs.core.truth_(temp__5278__auto___21949__$1)){
var x_21950__$1 = temp__5278__auto___21949__$1;
hoplon.core.append_child_BANG_(this$__$1,x_21950__$1);
} else {
}

var G__21951 = cljs.core.next(seq__21926_21942__$1);
var G__21952 = null;
var G__21953 = (0);
var G__21954 = (0);
seq__21926_21930 = G__21951;
chunk__21927_21931 = G__21952;
count__21928_21932 = G__21953;
i__21929_21933 = G__21954;
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
var G__21993__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__21956 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21956,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21956,(1),null);
var G__21959 = this$;
hoplon.core.add_attributes_BANG_(G__21959,attr);

hoplon.core.add_children_BANG_(G__21959,kids);

return G__21959;
};
var G__21993 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__21994__i = 0, G__21994__a = new Array(arguments.length -  1);
while (G__21994__i < G__21994__a.length) {G__21994__a[G__21994__i] = arguments[G__21994__i + 1]; ++G__21994__i;}
  args = new cljs.core.IndexedSeq(G__21994__a,0,null);
} 
return G__21993__delegate.call(this,self__,args);};
G__21993.cljs$lang$maxFixedArity = 1;
G__21993.cljs$lang$applyTo = (function (arglist__21995){
var self__ = cljs.core.first(arglist__21995);
var args = cljs.core.rest(arglist__21995);
return G__21993__delegate(self__,args);
});
G__21993.cljs$core$IFn$_invoke$arity$variadic = G__21993__delegate;
return G__21993;
})()
;

Element.prototype.apply = (function (self__,args21955){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21955)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__21996__delegate = function (args){
var this$ = this;
var vec__21960 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(1),null);
var G__21963 = this$;
hoplon.core.add_attributes_BANG_(G__21963,attr);

hoplon.core.add_children_BANG_(G__21963,kids);

return G__21963;
};
var G__21996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21997__i = 0, G__21997__a = new Array(arguments.length -  0);
while (G__21997__i < G__21997__a.length) {G__21997__a[G__21997__i] = arguments[G__21997__i + 0]; ++G__21997__i;}
  args = new cljs.core.IndexedSeq(G__21997__a,0,null);
} 
return G__21996__delegate.call(this,args);};
G__21996.cljs$lang$maxFixedArity = 0;
G__21996.cljs$lang$applyTo = (function (arglist__21998){
var args = cljs.core.seq(arglist__21998);
return G__21996__delegate(args);
});
G__21996.cljs$core$IFn$_invoke$arity$variadic = G__21996__delegate;
return G__21996;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__21964 = cljs.core.seq(kvs);
var chunk__21966 = null;
var count__21967 = (0);
var i__21968 = (0);
while(true){
if((i__21968 < count__21967)){
var vec__21970 = chunk__21966.cljs$core$IIndexed$_nth$arity$2(null,i__21968);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,(1),null);
var k_21999__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_21999__$1);
} else {
e.setAttribute(k_21999__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21999__$1:v));
}

var G__22000 = seq__21964;
var G__22001 = chunk__21966;
var G__22002 = count__21967;
var G__22003 = (i__21968 + (1));
seq__21964 = G__22000;
chunk__21966 = G__22001;
count__21967 = G__22002;
i__21968 = G__22003;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__21964);
if(temp__5278__auto__){
var seq__21964__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21964__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__21964__$1);
var G__22004 = cljs.core.chunk_rest(seq__21964__$1);
var G__22005 = c__9688__auto__;
var G__22006 = cljs.core.count(c__9688__auto__);
var G__22007 = (0);
seq__21964 = G__22004;
chunk__21966 = G__22005;
count__21967 = G__22006;
i__21968 = G__22007;
continue;
} else {
var vec__21973 = cljs.core.first(seq__21964__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(1),null);
var k_22008__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_22008__$1);
} else {
e.setAttribute(k_22008__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_22008__$1:v));
}

var G__22009 = cljs.core.next(seq__21964__$1);
var G__22010 = null;
var G__22011 = (0);
var G__22012 = (0);
seq__21964 = G__22009;
chunk__21966 = G__22010;
count__21967 = G__22011;
i__21968 = G__22012;
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
var seq__21976 = cljs.core.seq(kvs);
var chunk__21977 = null;
var count__21978 = (0);
var i__21979 = (0);
while(true){
if((i__21979 < count__21978)){
var vec__21980 = chunk__21977.cljs$core$IIndexed$_nth$arity$2(null,i__21979);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21980,(1),null);
var G__21983_22013 = e.style;
var G__21984_22014 = cljs.core.name(k);
var G__21985_22015 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__21983_22013,G__21984_22014,G__21985_22015);

var G__22016 = seq__21976;
var G__22017 = chunk__21977;
var G__22018 = count__21978;
var G__22019 = (i__21979 + (1));
seq__21976 = G__22016;
chunk__21977 = G__22017;
count__21978 = G__22018;
i__21979 = G__22019;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__21976);
if(temp__5278__auto__){
var seq__21976__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21976__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__21976__$1);
var G__22020 = cljs.core.chunk_rest(seq__21976__$1);
var G__22021 = c__9688__auto__;
var G__22022 = cljs.core.count(c__9688__auto__);
var G__22023 = (0);
seq__21976 = G__22020;
chunk__21977 = G__22021;
count__21978 = G__22022;
i__21979 = G__22023;
continue;
} else {
var vec__21986 = cljs.core.first(seq__21976__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(1),null);
var G__21989_22024 = e.style;
var G__21990_22025 = cljs.core.name(k);
var G__21991_22026 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__21989_22024,G__21990_22025,G__21991_22026);

var G__22027 = cljs.core.next(seq__21976__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__21976 = G__22027;
chunk__21977 = G__22028;
count__21978 = G__22029;
i__21979 = G__22030;
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
}catch (e21992){if((e21992 instanceof Error)){
var _ = e21992;
return null;
} else {
throw e21992;

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
var G__22034__delegate = function (args){
var vec__22031 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__22034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22035__i = 0, G__22035__a = new Array(arguments.length -  0);
while (G__22035__i < G__22035__a.length) {G__22035__a[G__22035__i] = arguments[G__22035__i + 0]; ++G__22035__i;}
  args = new cljs.core.IndexedSeq(G__22035__a,0,null);
} 
return G__22034__delegate.call(this,args);};
G__22034.cljs$lang$maxFixedArity = 0;
G__22034.cljs$lang$applyTo = (function (arglist__22036){
var args = cljs.core.seq(arglist__22036);
return G__22034__delegate(args);
});
G__22034.cljs$core$IFn$_invoke$arity$variadic = G__22034__delegate;
return G__22034;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__22039__delegate = function (rest__22037_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__22037_SHARP_);
};
var G__22039 = function (var_args){
var rest__22037_SHARP_ = null;
if (arguments.length > 0) {
var G__22040__i = 0, G__22040__a = new Array(arguments.length -  0);
while (G__22040__i < G__22040__a.length) {G__22040__a[G__22040__i] = arguments[G__22040__i + 0]; ++G__22040__i;}
  rest__22037_SHARP_ = new cljs.core.IndexedSeq(G__22040__a,0,null);
} 
return G__22039__delegate.call(this,rest__22037_SHARP_);};
G__22039.cljs$lang$maxFixedArity = 0;
G__22039.cljs$lang$applyTo = (function (arglist__22041){
var rest__22037_SHARP_ = cljs.core.seq(arglist__22041);
return G__22039__delegate(rest__22037_SHARP_);
});
G__22039.cljs$core$IFn$_invoke$arity$variadic = G__22039__delegate;
return G__22039;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__22042__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e22038){if((e22038 instanceof Error)){
var _ = e22038;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e22038;

}
}};
var G__22042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22043__i = 0, G__22043__a = new Array(arguments.length -  0);
while (G__22043__i < G__22043__a.length) {G__22043__a[G__22043__i] = arguments[G__22043__i + 0]; ++G__22043__i;}
  args = new cljs.core.IndexedSeq(G__22043__a,0,null);
} 
return G__22042__delegate.call(this,args);};
G__22042.cljs$lang$maxFixedArity = 0;
G__22042.cljs$lang$applyTo = (function (arglist__22044){
var args = cljs.core.seq(arglist__22044);
return G__22042__delegate(args);
});
G__22042.cljs$core$IFn$_invoke$arity$variadic = G__22042__delegate;
return G__22042;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__10041__auto__ = [];
var len__10034__auto___22046 = arguments.length;
var i__10035__auto___22047 = (0);
while(true){
if((i__10035__auto___22047 < len__10034__auto___22046)){
args__10041__auto__.push((arguments[i__10035__auto___22047]));

var G__22048 = (i__10035__auto___22047 + (1));
i__10035__auto___22047 = G__22048;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq22045){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22045));
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
hoplon.core.$text = (function hoplon$core$$text(p1__22049_SHARP_){
return document.createTextNode(p1__22049_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__22050_SHARP_){
return document.createComment(p1__22050_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__22051 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__22052 = (0);
return setTimeout(G__22051,G__22052);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__22053_SHARP_){
var e = p1__22053_SHARP_.target;
if(cljs.core.truth_((function (){var or__8762__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__22053_SHARP_.preventDefault();
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
var G__22054 = elem;
var G__22055 = cljs.core.cst$kw$attr;
var G__22056 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__22054,G__22055,G__22056) : hoplon.core.do_BANG_.call(null,G__22054,G__22055,G__22056));
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
var items_seq = (function (){var fexpr__22061 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__22059,G__22060){
return (G__22059.cljs$core$IFn$_invoke$arity$1 ? G__22059.cljs$core$IFn$_invoke$arity$1(G__22060) : G__22059.call(null,G__22060));
});})(on_deck))
);
return (fexpr__22061.cljs$core$IFn$_invoke$arity$2 ? fexpr__22061.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__22061.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__22057_SHARP_){
var fexpr__22065 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__22063,G__22064,G__22062){
return (G__22062.cljs$core$IFn$_invoke$arity$2 ? G__22062.cljs$core$IFn$_invoke$arity$2(G__22063,G__22064) : G__22062.call(null,G__22063,G__22064));
});})(on_deck,items_seq))
);
return (fexpr__22065.cljs$core$IFn$_invoke$arity$3 ? fexpr__22065.cljs$core$IFn$_invoke$arity$3(items_seq,p1__22057_SHARP_,hoplon.core.safe_nth) : fexpr__22065.call(null,items_seq,p1__22057_SHARP_,hoplon.core.safe_nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__22058_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__22058_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__22058_SHARP_,cljs.core.rest);

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
var seq__22066 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__22067 = null;
var count__22068 = (0);
var i__22069 = (0);
while(true){
if((i__22069 < count__22068)){
var i = chunk__22067.cljs$core$IIndexed$_nth$arity$2(null,i__22069);
var e_22072 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__22070 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__22070) : tpl.call(null,G__22070));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_22072);

var G__22073 = seq__22066;
var G__22074 = chunk__22067;
var G__22075 = count__22068;
var G__22076 = (i__22069 + (1));
seq__22066 = G__22073;
chunk__22067 = G__22074;
count__22068 = G__22075;
i__22069 = G__22076;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__22066);
if(temp__5278__auto__){
var seq__22066__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22066__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__22066__$1);
var G__22077 = cljs.core.chunk_rest(seq__22066__$1);
var G__22078 = c__9688__auto__;
var G__22079 = cljs.core.count(c__9688__auto__);
var G__22080 = (0);
seq__22066 = G__22077;
chunk__22067 = G__22078;
count__22068 = G__22079;
i__22069 = G__22080;
continue;
} else {
var i = cljs.core.first(seq__22066__$1);
var e_22081 = (function (){var or__8762__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
var G__22071 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__22071) : tpl.call(null,G__22071));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_22081);

var G__22082 = cljs.core.next(seq__22066__$1);
var G__22083 = null;
var G__22084 = (0);
var G__22085 = (0);
seq__22066 = G__22082;
chunk__22067 = G__22083;
count__22068 = G__22084;
i__22069 = G__22085;
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
var e_22086 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_22086);

var G__22087 = (_ + (1));
_ = G__22087;
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
var len__10034__auto___22097 = arguments.length;
var i__10035__auto___22098 = (0);
while(true){
if((i__10035__auto___22098 < len__10034__auto___22097)){
args__10041__auto__.push((arguments[i__10035__auto___22098]));

var G__22099 = (i__10035__auto___22098 + (1));
i__10035__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__22089){
var vec__22090 = p__22089;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22090,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__22096 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__22090,default$){
return (function (G__22093,G__22095,G__22094){
var or__8762__auto__ = (function (){var and__8750__auto__ = (G__22093.cljs$core$IFn$_invoke$arity$1 ? G__22093.cljs$core$IFn$_invoke$arity$1(G__22094) : G__22093.call(null,G__22094));
if(cljs.core.truth_(and__8750__auto__)){
return G__22094;
} else {
return and__8750__auto__;
}
})();
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return G__22095;
}
});})(c,vec__22090,default$))
);
return (fexpr__22096.cljs$core$IFn$_invoke$arity$3 ? fexpr__22096.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__22096.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__22090,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__22090,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq22088){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22088));
});

