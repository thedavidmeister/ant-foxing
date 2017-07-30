// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14139_SHARP_,p2__14140_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14139_SHARP_,p2__14140_SHARP_.getAttribute("static-id"),p2__14140_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__14142 = arguments.length;
switch (G__14142) {
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
var G__14143_14146 = init;
var G__14144_14147 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14143_14146,G__14144_14147) : f.call(null,G__14143_14146,G__14144_14147));

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
var vec__14148 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__14149 = cljs.core.seq(vec__14148);
var first__14150 = cljs.core.first(seq__14149);
var seq__14149__$1 = cljs.core.next(seq__14149);
var f = first__14150;
var more = seq__14149__$1;
var vec__14151 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14151,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14151,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("dcb51eebe6cc4701af2c7cfe4b62eba1")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__14154_SHARP_){
return cljs.core.zipmap(p1__14154_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__8099__auto__ = (function (){var and__8087__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8087__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var G__14155 = (i + (1));
var G__14156 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__14155;
ret = G__14156;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__14158 = arguments.length;
switch (G__14158) {
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

var G__14160 = (i + (1));
i = G__14160;
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core.node[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto__.call(null,this$));
} else {
var m__8819__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8819__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
var G__14161 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14161) : hoplon.core.$text.call(null,G__14161));
}));
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14164_SHARP_,p2__14163_SHARP_){
if((p2__14163_SHARP_ == null)){
return p1__14164_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14164_SHARP_,p2__14163_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__14171 = new$__$1;
var vec__14173 = G__14171;
var seq__14174 = cljs.core.seq(vec__14173);
var first__14175 = cljs.core.first(seq__14174);
var seq__14174__$1 = cljs.core.next(seq__14174);
var x = first__14175;
var xs = seq__14174__$1;
var G__14172 = hoplon.core.child_vec(this$);
var vec__14176 = G__14172;
var seq__14177 = cljs.core.seq(vec__14176);
var first__14178 = cljs.core.first(seq__14177);
var seq__14177__$1 = cljs.core.next(seq__14177);
var k = first__14178;
var ks = seq__14177__$1;
var kids = vec__14176;
var G__14171__$1 = G__14171;
var G__14172__$1 = G__14172;
while(true){
var vec__14179 = G__14171__$1;
var seq__14180 = cljs.core.seq(vec__14179);
var first__14181 = cljs.core.first(seq__14180);
var seq__14180__$1 = cljs.core.next(seq__14180);
var x__$1 = first__14181;
var xs__$1 = seq__14180__$1;
var vec__14182 = G__14172__$1;
var seq__14183 = cljs.core.seq(vec__14182);
var first__14184 = cljs.core.first(seq__14183);
var seq__14183__$1 = cljs.core.next(seq__14183);
var k__$1 = first__14184;
var ks__$1 = seq__14183__$1;
var kids__$1 = vec__14182;
if(cljs.core.truth_((function (){var or__8099__auto__ = x__$1;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return k__$1;
}
})())){
var G__14185 = xs__$1;
var G__14186 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__14171__$1 = G__14185;
G__14172__$1 = G__14186;
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
var kids_14187 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_14187;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14187,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_14190 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_14191 = cljs.core.count(cljs.core.deref(kids_14190));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_14190,i_14191,child__$1){
return (function (p1__14189_SHARP_,p2__14188_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14190,cljs.core.assoc,i_14191,p2__14188_SHARP_);
});})(kids_14190,i_14191,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14190,cljs.core.assoc,i_14191,child__$1);
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

if(cljs.core.truth_((function (){var and__8087__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8087__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8087__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8087__auto__;
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
return (function (p1__14192_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14192_SHARP_));
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
return (function (p1__14193_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14193_SHARP_], 0)));
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
return (function (p1__14194_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14194_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14195 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14196 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14197 = (function (){var and__8087__auto__ = attr_14196;
if(cljs.core.truth_(and__8087__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_14196),kk_14195);
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14197)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14196,cljs.core.assoc,kk_14195,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14198_SHARP_){
return p1__14198_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14199_SHARP_){
return p1__14199_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14200_SHARP_){
return p1__14200_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14201_SHARP_){
return p1__14201_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8819__auto__.call(null,this$,kvs));
} else {
var m__8819__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8819__auto____$1.call(null,this$,kvs));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8819__auto__.call(null,this$,kvs));
} else {
var m__8819__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8819__auto____$1.call(null,this$,kvs));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8819__auto__.call(null,this$,child));
} else {
var m__8819__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8819__auto____$1.call(null,this$,child));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8819__auto__.call(null,this$,child));
} else {
var m__8819__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8819__auto____$1.call(null,this$,child));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8819__auto__.call(null,this$,new$,existing));
} else {
var m__8819__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8819__auto____$1.call(null,this$,new$,existing));
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8819__auto__.call(null,this$,new$,existing));
} else {
var m__8819__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8819__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__14207 = arguments.length;
switch (G__14207) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___14209 = arguments.length;
var i__9333__auto___14210 = (0);
while(true){
if((i__9333__auto___14210 < len__9332__auto___14209)){
args_arr__9355__auto__.push((arguments[i__9333__auto___14210]));

var G__14211 = (i__9333__auto___14210 + (1));
i__9333__auto___14210 = G__14211;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9356__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14203){
var G__14204 = cljs.core.first(seq14203);
var seq14203__$1 = cljs.core.next(seq14203);
var G__14205 = cljs.core.first(seq14203__$1);
var seq14203__$2 = cljs.core.next(seq14203__$1);
var G__14206 = cljs.core.first(seq14203__$2);
var seq14203__$3 = cljs.core.next(seq14203__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14204,G__14205,G__14206,seq14203__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14217 = arguments.length;
switch (G__14217) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___14219 = arguments.length;
var i__9333__auto___14220 = (0);
while(true){
if((i__9333__auto___14220 < len__9332__auto___14219)){
args_arr__9355__auto__.push((arguments[i__9333__auto___14220]));

var G__14221 = (i__9333__auto___14220 + (1));
i__9333__auto___14220 = G__14221;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9356__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14213){
var G__14214 = cljs.core.first(seq14213);
var seq14213__$1 = cljs.core.next(seq14213);
var G__14215 = cljs.core.first(seq14213__$1);
var seq14213__$2 = cljs.core.next(seq14213__$1);
var G__14216 = cljs.core.first(seq14213__$2);
var seq14213__$3 = cljs.core.next(seq14213__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14214,G__14215,G__14216,seq14213__$3);
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
var x__8818__auto__ = (((this$ == null))?null:this$);
var m__8819__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8819__auto__.call(null,this$,elem,value));
} else {
var m__8819__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8819__auto____$1.call(null,this$,elem,value));
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
return (function (p1__14224_SHARP_,p2__14223_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14223_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14223_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__14225_SHARP_){
return p1__14225_SHARP_.head;
}):(function (p1__14226_SHARP_){
return p1__14226_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14227_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14227_SHARP_);
}catch (e14228){if((e14228 instanceof Error)){
var _ = e14228;
return null;
} else {
throw e14228;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14229_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14229_SHARP_);
}catch (e14230){if((e14230 instanceof Error)){
var _ = e14230;
return null;
} else {
throw e14230;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var G__14232 = arguments.length;
switch (G__14232) {
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
}catch (e14233){if((e14233 instanceof Error)){
var _ = e14233;
return not_found;
} else {
throw e14233;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
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
var G__14238 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14239 = (0);
return setTimeout(G__14238,G__14239);
} else {
var temp__5276__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return v.push(f);
} else {
var G__14240_14258 = this$;
var G__14241_14259 = "_hoplonWhenDom";
var G__14242_14260 = [f];
goog.object.set(G__14240_14258,G__14241_14259,G__14242_14260);

var G__14243 = ((function (temp__5276__auto__){
return (function (){
var fexpr__14251 = cljs.core.with_meta(((function (temp__5276__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__14252 = ((function (temp__5276__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5276__auto__))
;
var G__14253 = (20);
return setTimeout(G__14252,G__14253);
} else {
var seq__14254_14261 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__14255_14262 = null;
var count__14256_14263 = (0);
var i__14257_14264 = (0);
while(true){
if((i__14257_14264 < count__14256_14263)){
var f_14265__$1 = chunk__14255_14262.cljs$core$IIndexed$_nth$arity$2(null,i__14257_14264);
(f_14265__$1.cljs$core$IFn$_invoke$arity$0 ? f_14265__$1.cljs$core$IFn$_invoke$arity$0() : f_14265__$1.call(null));

var G__14266 = seq__14254_14261;
var G__14267 = chunk__14255_14262;
var G__14268 = count__14256_14263;
var G__14269 = (i__14257_14264 + (1));
seq__14254_14261 = G__14266;
chunk__14255_14262 = G__14267;
count__14256_14263 = G__14268;
i__14257_14264 = G__14269;
continue;
} else {
var temp__5278__auto___14270 = cljs.core.seq(seq__14254_14261);
if(temp__5278__auto___14270){
var seq__14254_14271__$1 = temp__5278__auto___14270;
if(cljs.core.chunked_seq_QMARK_(seq__14254_14271__$1)){
var c__9011__auto___14272 = cljs.core.chunk_first(seq__14254_14271__$1);
var G__14273 = cljs.core.chunk_rest(seq__14254_14271__$1);
var G__14274 = c__9011__auto___14272;
var G__14275 = cljs.core.count(c__9011__auto___14272);
var G__14276 = (0);
seq__14254_14261 = G__14273;
chunk__14255_14262 = G__14274;
count__14256_14263 = G__14275;
i__14257_14264 = G__14276;
continue;
} else {
var f_14277__$1 = cljs.core.first(seq__14254_14271__$1);
(f_14277__$1.cljs$core$IFn$_invoke$arity$0 ? f_14277__$1.cljs$core$IFn$_invoke$arity$0() : f_14277__$1.call(null));

var G__14278 = cljs.core.next(seq__14254_14271__$1);
var G__14279 = null;
var G__14280 = (0);
var G__14281 = (0);
seq__14254_14261 = G__14278;
chunk__14255_14262 = G__14279;
count__14256_14263 = G__14280;
i__14257_14264 = G__14281;
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
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__14251.cljs$core$IFn$_invoke$arity$0 ? fexpr__14251.cljs$core$IFn$_invoke$arity$0() : fexpr__14251.call(null));
});})(temp__5276__auto__))
;
var G__14244 = (0);
return setTimeout(G__14243,G__14244);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14288 = args;
var vec__14289 = G__14288;
var seq__14290 = cljs.core.seq(vec__14289);
var first__14291 = cljs.core.first(seq__14290);
var seq__14290__$1 = cljs.core.next(seq__14290);
var arg = first__14291;
var args__$1 = seq__14290__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14288__$1 = G__14288;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14292 = G__14288__$1;
var seq__14293 = cljs.core.seq(vec__14292);
var first__14294 = cljs.core.first(seq__14293);
var seq__14293__$1 = cljs.core.next(seq__14293);
var arg__$1 = first__14294;
var args__$2 = seq__14293__$1;
if(cljs.core.not((function (){var or__8099__auto__ = arg__$1;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14295 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14288__$1,attr__$2,kids__$2,vec__14292,seq__14293,first__14294,seq__14293__$1,arg__$1,args__$2,attr,kids,G__14288,vec__14289,seq__14290,first__14291,seq__14290__$1,arg,args__$1){
return (function (p1__14282_SHARP_,p2__14283_SHARP_,p3__14284_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14282_SHARP_,p2__14283_SHARP_,p3__14284_SHARP_);
});})(attr__$1,kids__$1,G__14288__$1,attr__$2,kids__$2,vec__14292,seq__14293,first__14294,seq__14293__$1,arg__$1,args__$2,attr,kids,G__14288,vec__14289,seq__14290,first__14291,seq__14290__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14296 = kids__$2;
var G__14297 = args__$2;
attr__$1 = G__14295;
kids__$1 = G__14296;
G__14288__$1 = G__14297;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14298 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14299 = kids__$2;
var G__14300 = cljs.core.rest(args__$2);
attr__$1 = G__14298;
kids__$1 = G__14299;
G__14288__$1 = G__14300;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14301 = attr__$2;
var G__14302 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14303 = args__$2;
attr__$1 = G__14301;
kids__$1 = G__14302;
G__14288__$1 = G__14303;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14304 = attr__$2;
var G__14305 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14306 = args__$2;
attr__$1 = G__14304;
kids__$1 = G__14305;
G__14288__$1 = G__14306;
continue;
} else {
var G__14307 = attr__$2;
var G__14308 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14309 = args__$2;
attr__$1 = G__14307;
kids__$1 = G__14308;
G__14288__$1 = G__14309;
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
return cljs.core.reduce_kv((function (p1__14311_SHARP_,p2__14310_SHARP_,p3__14312_SHARP_){
hoplon.core._attr_BANG_(p2__14310_SHARP_,p1__14311_SHARP_,p3__14312_SHARP_);

return p1__14311_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14313){
var vec__14314 = p__14313;
var seq__14315 = cljs.core.seq(vec__14314);
var first__14316 = cljs.core.first(seq__14315);
var seq__14315__$1 = cljs.core.next(seq__14315);
var child_cell = first__14316;
var _ = seq__14315__$1;
var kids = vec__14314;
var this$__$1 = this$;
var seq__14317_14321 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__14318_14322 = null;
var count__14319_14323 = (0);
var i__14320_14324 = (0);
while(true){
if((i__14320_14324 < count__14319_14323)){
var x_14325 = chunk__14318_14322.cljs$core$IIndexed$_nth$arity$2(null,i__14320_14324);
var temp__5278__auto___14326 = hoplon.core.__GT_node(x_14325);
if(cljs.core.truth_(temp__5278__auto___14326)){
var x_14327__$1 = temp__5278__auto___14326;
hoplon.core.append_child_BANG_(this$__$1,x_14327__$1);
} else {
}

var G__14328 = seq__14317_14321;
var G__14329 = chunk__14318_14322;
var G__14330 = count__14319_14323;
var G__14331 = (i__14320_14324 + (1));
seq__14317_14321 = G__14328;
chunk__14318_14322 = G__14329;
count__14319_14323 = G__14330;
i__14320_14324 = G__14331;
continue;
} else {
var temp__5278__auto___14332 = cljs.core.seq(seq__14317_14321);
if(temp__5278__auto___14332){
var seq__14317_14333__$1 = temp__5278__auto___14332;
if(cljs.core.chunked_seq_QMARK_(seq__14317_14333__$1)){
var c__9011__auto___14334 = cljs.core.chunk_first(seq__14317_14333__$1);
var G__14335 = cljs.core.chunk_rest(seq__14317_14333__$1);
var G__14336 = c__9011__auto___14334;
var G__14337 = cljs.core.count(c__9011__auto___14334);
var G__14338 = (0);
seq__14317_14321 = G__14335;
chunk__14318_14322 = G__14336;
count__14319_14323 = G__14337;
i__14320_14324 = G__14338;
continue;
} else {
var x_14339 = cljs.core.first(seq__14317_14333__$1);
var temp__5278__auto___14340__$1 = hoplon.core.__GT_node(x_14339);
if(cljs.core.truth_(temp__5278__auto___14340__$1)){
var x_14341__$1 = temp__5278__auto___14340__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14341__$1);
} else {
}

var G__14342 = cljs.core.next(seq__14317_14333__$1);
var G__14343 = null;
var G__14344 = (0);
var G__14345 = (0);
seq__14317_14321 = G__14342;
chunk__14318_14322 = G__14343;
count__14319_14323 = G__14344;
i__14320_14324 = G__14345;
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
var G__14384__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14347 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(1),null);
var G__14350 = this$;
hoplon.core.add_attributes_BANG_(G__14350,attr);

hoplon.core.add_children_BANG_(G__14350,kids);

return G__14350;
};
var G__14384 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14385__i = 0, G__14385__a = new Array(arguments.length -  1);
while (G__14385__i < G__14385__a.length) {G__14385__a[G__14385__i] = arguments[G__14385__i + 1]; ++G__14385__i;}
  args = new cljs.core.IndexedSeq(G__14385__a,0,null);
} 
return G__14384__delegate.call(this,self__,args);};
G__14384.cljs$lang$maxFixedArity = 1;
G__14384.cljs$lang$applyTo = (function (arglist__14386){
var self__ = cljs.core.first(arglist__14386);
var args = cljs.core.rest(arglist__14386);
return G__14384__delegate(self__,args);
});
G__14384.cljs$core$IFn$_invoke$arity$variadic = G__14384__delegate;
return G__14384;
})()
;

Element.prototype.apply = (function (self__,args14346){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14346)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14387__delegate = function (args){
var this$ = this;
var vec__14351 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(1),null);
var G__14354 = this$;
hoplon.core.add_attributes_BANG_(G__14354,attr);

hoplon.core.add_children_BANG_(G__14354,kids);

return G__14354;
};
var G__14387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14388__i = 0, G__14388__a = new Array(arguments.length -  0);
while (G__14388__i < G__14388__a.length) {G__14388__a[G__14388__i] = arguments[G__14388__i + 0]; ++G__14388__i;}
  args = new cljs.core.IndexedSeq(G__14388__a,0,null);
} 
return G__14387__delegate.call(this,args);};
G__14387.cljs$lang$maxFixedArity = 0;
G__14387.cljs$lang$applyTo = (function (arglist__14389){
var args = cljs.core.seq(arglist__14389);
return G__14387__delegate(args);
});
G__14387.cljs$core$IFn$_invoke$arity$variadic = G__14387__delegate;
return G__14387;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14355 = cljs.core.seq(kvs);
var chunk__14357 = null;
var count__14358 = (0);
var i__14359 = (0);
while(true){
if((i__14359 < count__14358)){
var vec__14361 = chunk__14357.cljs$core$IIndexed$_nth$arity$2(null,i__14359);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14361,(1),null);
var k_14390__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14390__$1);
} else {
e.setAttribute(k_14390__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14390__$1:v));
}

var G__14391 = seq__14355;
var G__14392 = chunk__14357;
var G__14393 = count__14358;
var G__14394 = (i__14359 + (1));
seq__14355 = G__14391;
chunk__14357 = G__14392;
count__14358 = G__14393;
i__14359 = G__14394;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14355);
if(temp__5278__auto__){
var seq__14355__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14355__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14355__$1);
var G__14395 = cljs.core.chunk_rest(seq__14355__$1);
var G__14396 = c__9011__auto__;
var G__14397 = cljs.core.count(c__9011__auto__);
var G__14398 = (0);
seq__14355 = G__14395;
chunk__14357 = G__14396;
count__14358 = G__14397;
i__14359 = G__14398;
continue;
} else {
var vec__14364 = cljs.core.first(seq__14355__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(1),null);
var k_14399__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14399__$1);
} else {
e.setAttribute(k_14399__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14399__$1:v));
}

var G__14400 = cljs.core.next(seq__14355__$1);
var G__14401 = null;
var G__14402 = (0);
var G__14403 = (0);
seq__14355 = G__14400;
chunk__14357 = G__14401;
count__14358 = G__14402;
i__14359 = G__14403;
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
var seq__14367 = cljs.core.seq(kvs);
var chunk__14368 = null;
var count__14369 = (0);
var i__14370 = (0);
while(true){
if((i__14370 < count__14369)){
var vec__14371 = chunk__14368.cljs$core$IIndexed$_nth$arity$2(null,i__14370);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14371,(1),null);
var G__14374_14404 = e.style;
var G__14375_14405 = cljs.core.name(k);
var G__14376_14406 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14374_14404,G__14375_14405,G__14376_14406);

var G__14407 = seq__14367;
var G__14408 = chunk__14368;
var G__14409 = count__14369;
var G__14410 = (i__14370 + (1));
seq__14367 = G__14407;
chunk__14368 = G__14408;
count__14369 = G__14409;
i__14370 = G__14410;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14367);
if(temp__5278__auto__){
var seq__14367__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14367__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14367__$1);
var G__14411 = cljs.core.chunk_rest(seq__14367__$1);
var G__14412 = c__9011__auto__;
var G__14413 = cljs.core.count(c__9011__auto__);
var G__14414 = (0);
seq__14367 = G__14411;
chunk__14368 = G__14412;
count__14369 = G__14413;
i__14370 = G__14414;
continue;
} else {
var vec__14377 = cljs.core.first(seq__14367__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14377,(1),null);
var G__14380_14415 = e.style;
var G__14381_14416 = cljs.core.name(k);
var G__14382_14417 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14380_14415,G__14381_14416,G__14382_14417);

var G__14418 = cljs.core.next(seq__14367__$1);
var G__14419 = null;
var G__14420 = (0);
var G__14421 = (0);
seq__14367 = G__14418;
chunk__14368 = G__14419;
count__14369 = G__14420;
i__14370 = G__14421;
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
}catch (e14383){if((e14383 instanceof Error)){
var _ = e14383;
return null;
} else {
throw e14383;

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
var G__14425__delegate = function (args){
var vec__14422 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14422,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14422,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14426__i = 0, G__14426__a = new Array(arguments.length -  0);
while (G__14426__i < G__14426__a.length) {G__14426__a[G__14426__i] = arguments[G__14426__i + 0]; ++G__14426__i;}
  args = new cljs.core.IndexedSeq(G__14426__a,0,null);
} 
return G__14425__delegate.call(this,args);};
G__14425.cljs$lang$maxFixedArity = 0;
G__14425.cljs$lang$applyTo = (function (arglist__14427){
var args = cljs.core.seq(arglist__14427);
return G__14425__delegate(args);
});
G__14425.cljs$core$IFn$_invoke$arity$variadic = G__14425__delegate;
return G__14425;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14430__delegate = function (rest__14428_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__14428_SHARP_);
};
var G__14430 = function (var_args){
var rest__14428_SHARP_ = null;
if (arguments.length > 0) {
var G__14431__i = 0, G__14431__a = new Array(arguments.length -  0);
while (G__14431__i < G__14431__a.length) {G__14431__a[G__14431__i] = arguments[G__14431__i + 0]; ++G__14431__i;}
  rest__14428_SHARP_ = new cljs.core.IndexedSeq(G__14431__a,0,null);
} 
return G__14430__delegate.call(this,rest__14428_SHARP_);};
G__14430.cljs$lang$maxFixedArity = 0;
G__14430.cljs$lang$applyTo = (function (arglist__14432){
var rest__14428_SHARP_ = cljs.core.seq(arglist__14432);
return G__14430__delegate(rest__14428_SHARP_);
});
G__14430.cljs$core$IFn$_invoke$arity$variadic = G__14430__delegate;
return G__14430;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14433__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14429){if((e14429 instanceof Error)){
var _ = e14429;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14429;

}
}};
var G__14433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14434__i = 0, G__14434__a = new Array(arguments.length -  0);
while (G__14434__i < G__14434__a.length) {G__14434__a[G__14434__i] = arguments[G__14434__i + 0]; ++G__14434__i;}
  args = new cljs.core.IndexedSeq(G__14434__a,0,null);
} 
return G__14433__delegate.call(this,args);};
G__14433.cljs$lang$maxFixedArity = 0;
G__14433.cljs$lang$applyTo = (function (arglist__14435){
var args = cljs.core.seq(arglist__14435);
return G__14433__delegate(args);
});
G__14433.cljs$core$IFn$_invoke$arity$variadic = G__14433__delegate;
return G__14433;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14437 = arguments.length;
var i__9333__auto___14438 = (0);
while(true){
if((i__9333__auto___14438 < len__9332__auto___14437)){
args__9339__auto__.push((arguments[i__9333__auto___14438]));

var G__14439 = (i__9333__auto___14438 + (1));
i__9333__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14436){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14436));
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
hoplon.core.$text = (function hoplon$core$$text(p1__14440_SHARP_){
return document.createTextNode(p1__14440_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14441_SHARP_){
return document.createComment(p1__14441_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14442 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14443 = (0);
return setTimeout(G__14442,G__14443);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14444_SHARP_){
var e = p1__14444_SHARP_.target;
if(cljs.core.truth_((function (){var or__8099__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14444_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14445 = elem;
var G__14446 = cljs.core.cst$kw$attr;
var G__14447 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14445,G__14446,G__14447) : hoplon.core.do_BANG_.call(null,G__14445,G__14446,G__14447));
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
hoplon.core.on_BANG_ = (function (){var method_table__9131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__,hierarchy__9135__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9135__auto__,method_table__9131__auto__,prefer_table__9132__auto__,method_cache__9133__auto__,cached_hierarchy__9134__auto__));
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
var items_seq = (function (){var fexpr__14452 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__14450,G__14451){
return (G__14450.cljs$core$IFn$_invoke$arity$1 ? G__14450.cljs$core$IFn$_invoke$arity$1(G__14451) : G__14450.call(null,G__14451));
});})(on_deck))
);
return (fexpr__14452.cljs$core$IFn$_invoke$arity$2 ? fexpr__14452.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__14452.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14448_SHARP_){
var fexpr__14456 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__14454,G__14455,G__14453){
return (G__14453.cljs$core$IFn$_invoke$arity$2 ? G__14453.cljs$core$IFn$_invoke$arity$2(G__14454,G__14455) : G__14453.call(null,G__14454,G__14455));
});})(on_deck,items_seq))
);
return (fexpr__14456.cljs$core$IFn$_invoke$arity$3 ? fexpr__14456.cljs$core$IFn$_invoke$arity$3(items_seq,p1__14448_SHARP_,hoplon.core.safe_nth) : fexpr__14456.call(null,items_seq,p1__14448_SHARP_,hoplon.core.safe_nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14449_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__14449_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14449_SHARP_,cljs.core.rest);

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
var seq__14457 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14458 = null;
var count__14459 = (0);
var i__14460 = (0);
while(true){
if((i__14460 < count__14459)){
var i = chunk__14458.cljs$core$IIndexed$_nth$arity$2(null,i__14460);
var e_14463 = (function (){var or__8099__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var G__14461 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14461) : tpl.call(null,G__14461));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14463);

var G__14464 = seq__14457;
var G__14465 = chunk__14458;
var G__14466 = count__14459;
var G__14467 = (i__14460 + (1));
seq__14457 = G__14464;
chunk__14458 = G__14465;
count__14459 = G__14466;
i__14460 = G__14467;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14457);
if(temp__5278__auto__){
var seq__14457__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14457__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14457__$1);
var G__14468 = cljs.core.chunk_rest(seq__14457__$1);
var G__14469 = c__9011__auto__;
var G__14470 = cljs.core.count(c__9011__auto__);
var G__14471 = (0);
seq__14457 = G__14468;
chunk__14458 = G__14469;
count__14459 = G__14470;
i__14460 = G__14471;
continue;
} else {
var i = cljs.core.first(seq__14457__$1);
var e_14472 = (function (){var or__8099__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
var G__14462 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14462) : tpl.call(null,G__14462));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14472);

var G__14473 = cljs.core.next(seq__14457__$1);
var G__14474 = null;
var G__14475 = (0);
var G__14476 = (0);
seq__14457 = G__14473;
chunk__14458 = G__14474;
count__14459 = G__14475;
i__14460 = G__14476;
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
var n__9121__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9121__auto__)){
var e_14477 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14477);

var G__14478 = (_ + (1));
_ = G__14478;
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
var args__9339__auto__ = [];
var len__9332__auto___14488 = arguments.length;
var i__9333__auto___14489 = (0);
while(true){
if((i__9333__auto___14489 < len__9332__auto___14488)){
args__9339__auto__.push((arguments[i__9333__auto___14489]));

var G__14490 = (i__9333__auto___14489 + (1));
i__9333__auto___14489 = G__14490;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((0) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9340__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14480){
var vec__14481 = p__14480;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14481,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__14487 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__14481,default$){
return (function (G__14484,G__14486,G__14485){
var or__8099__auto__ = (function (){var and__8087__auto__ = (G__14484.cljs$core$IFn$_invoke$arity$1 ? G__14484.cljs$core$IFn$_invoke$arity$1(G__14485) : G__14484.call(null,G__14485));
if(cljs.core.truth_(and__8087__auto__)){
return G__14485;
} else {
return and__8087__auto__;
}
})();
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return G__14486;
}
});})(c,vec__14481,default$))
);
return (fexpr__14487.cljs$core$IFn$_invoke$arity$3 ? fexpr__14487.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__14487.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__14481,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__14481,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14479){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14479));
});

