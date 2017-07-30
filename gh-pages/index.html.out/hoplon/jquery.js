// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14498 = arguments.length;
switch (G__14498) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___14512 = arguments.length;
var i__9333__auto___14513 = (0);
while(true){
if((i__9333__auto___14513 < len__9332__auto___14512)){
args_arr__9355__auto__.push((arguments[i__9333__auto___14513]));

var G__14514 = (i__9333__auto___14513 + (1));
i__9333__auto___14513 = G__14514;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9356__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14499 = cljs.core.seq(kvs);
var chunk__14501 = null;
var count__14502 = (0);
var i__14503 = (0);
while(true){
if((i__14503 < count__14502)){
var vec__14505 = chunk__14501.cljs$core$IIndexed$_nth$arity$2(null,i__14503);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(1),null);
var k_14515__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14515__$1);
} else {
e.attr(k_14515__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14515__$1:v));
}

var G__14516 = seq__14499;
var G__14517 = chunk__14501;
var G__14518 = count__14502;
var G__14519 = (i__14503 + (1));
seq__14499 = G__14516;
chunk__14501 = G__14517;
count__14502 = G__14518;
i__14503 = G__14519;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14499);
if(temp__5278__auto__){
var seq__14499__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14499__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14499__$1);
var G__14520 = cljs.core.chunk_rest(seq__14499__$1);
var G__14521 = c__9011__auto__;
var G__14522 = cljs.core.count(c__9011__auto__);
var G__14523 = (0);
seq__14499 = G__14520;
chunk__14501 = G__14521;
count__14502 = G__14522;
i__14503 = G__14523;
continue;
} else {
var vec__14508 = cljs.core.first(seq__14499__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(1),null);
var k_14524__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14524__$1);
} else {
e.attr(k_14524__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14524__$1:v));
}

var G__14525 = cljs.core.next(seq__14499__$1);
var G__14526 = null;
var G__14527 = (0);
var G__14528 = (0);
seq__14499 = G__14525;
chunk__14501 = G__14526;
count__14502 = G__14527;
i__14503 = G__14528;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14494){
var G__14495 = cljs.core.first(seq14494);
var seq14494__$1 = cljs.core.next(seq14494);
var G__14496 = cljs.core.first(seq14494__$1);
var seq14494__$2 = cljs.core.next(seq14494__$1);
var G__14497 = cljs.core.first(seq14494__$2);
var seq14494__$3 = cljs.core.next(seq14494__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14495,G__14496,G__14497,seq14494__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14534 = arguments.length;
switch (G__14534) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___14546 = arguments.length;
var i__9333__auto___14547 = (0);
while(true){
if((i__9333__auto___14547 < len__9332__auto___14546)){
args_arr__9355__auto__.push((arguments[i__9333__auto___14547]));

var G__14548 = (i__9333__auto___14547 + (1));
i__9333__auto___14547 = G__14548;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9356__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14535 = cljs.core.seq(kvs);
var chunk__14536 = null;
var count__14537 = (0);
var i__14538 = (0);
while(true){
if((i__14538 < count__14537)){
var vec__14539 = chunk__14536.cljs$core$IIndexed$_nth$arity$2(null,i__14538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14549 = seq__14535;
var G__14550 = chunk__14536;
var G__14551 = count__14537;
var G__14552 = (i__14538 + (1));
seq__14535 = G__14549;
chunk__14536 = G__14550;
count__14537 = G__14551;
i__14538 = G__14552;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14535);
if(temp__5278__auto__){
var seq__14535__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14535__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14535__$1);
var G__14553 = cljs.core.chunk_rest(seq__14535__$1);
var G__14554 = c__9011__auto__;
var G__14555 = cljs.core.count(c__9011__auto__);
var G__14556 = (0);
seq__14535 = G__14553;
chunk__14536 = G__14554;
count__14537 = G__14555;
i__14538 = G__14556;
continue;
} else {
var vec__14542 = cljs.core.first(seq__14535__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14557 = cljs.core.next(seq__14535__$1);
var G__14558 = null;
var G__14559 = (0);
var G__14560 = (0);
seq__14535 = G__14557;
chunk__14536 = G__14558;
count__14537 = G__14559;
i__14538 = G__14560;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14530){
var G__14531 = cljs.core.first(seq14530);
var seq14530__$1 = cljs.core.next(seq14530);
var G__14532 = cljs.core.first(seq14530__$1);
var seq14530__$2 = cljs.core.next(seq14530__$1);
var G__14533 = cljs.core.first(seq14530__$2);
var seq14530__$3 = cljs.core.next(seq14530__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14531,G__14532,G__14533,seq14530__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__14562 = arguments.length;
switch (G__14562) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__14565 = arguments.length;
switch (G__14565) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14567 = elem;
var G__14568 = cljs.core.cst$kw$attr;
var G__14569 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14567,G__14568,G__14569) : hoplon.core.do_BANG_.call(null,G__14567,G__14568,G__14569));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__14570__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14570 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14571__i = 0, G__14571__a = new Array(arguments.length -  2);
while (G__14571__i < G__14571__a.length) {G__14571__a[G__14571__i] = arguments[G__14571__i + 2]; ++G__14571__i;}
  args = new cljs.core.IndexedSeq(G__14571__a,0,null);
} 
return G__14570__delegate.call(this,elem,_,args);};
G__14570.cljs$lang$maxFixedArity = 2;
G__14570.cljs$lang$applyTo = (function (arglist__14572){
var elem = cljs.core.first(arglist__14572);
arglist__14572 = cljs.core.next(arglist__14572);
var _ = cljs.core.first(arglist__14572);
var args = cljs.core.rest(arglist__14572);
return G__14570__delegate(elem,_,args);
});
G__14570.cljs$core$IFn$_invoke$arity$variadic = G__14570__delegate;
return G__14570;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14573 = cljs.core.seq(clmap);
var chunk__14574 = null;
var count__14575 = (0);
var i__14576 = (0);
while(true){
if((i__14576 < count__14575)){
var vec__14577 = chunk__14574.cljs$core$IIndexed$_nth$arity$2(null,i__14576);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14583 = seq__14573;
var G__14584 = chunk__14574;
var G__14585 = count__14575;
var G__14586 = (i__14576 + (1));
seq__14573 = G__14583;
chunk__14574 = G__14584;
count__14575 = G__14585;
i__14576 = G__14586;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__14573);
if(temp__5278__auto__){
var seq__14573__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14573__$1)){
var c__9011__auto__ = cljs.core.chunk_first(seq__14573__$1);
var G__14587 = cljs.core.chunk_rest(seq__14573__$1);
var G__14588 = c__9011__auto__;
var G__14589 = cljs.core.count(c__9011__auto__);
var G__14590 = (0);
seq__14573 = G__14587;
chunk__14574 = G__14588;
count__14575 = G__14589;
i__14576 = G__14590;
continue;
} else {
var vec__14580 = cljs.core.first(seq__14573__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14591 = cljs.core.next(seq__14573__$1);
var G__14592 = null;
var G__14593 = (0);
var G__14594 = (0);
seq__14573 = G__14591;
chunk__14574 = G__14592;
count__14575 = G__14593;
i__14576 = G__14594;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__14595 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14596 = (0);
return setTimeout(G__14595,G__14596);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14597_14603 = elem;
var G__14598_14604 = cljs.core.cst$kw$focus;
var G__14599_14605 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14597_14603,G__14598_14604,G__14599_14605) : hoplon.core.do_BANG_.call(null,G__14597_14603,G__14598_14604,G__14599_14605));

var G__14600 = elem;
var G__14601 = cljs.core.cst$kw$select;
var G__14602 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14600,G__14601,G__14602) : hoplon.core.do_BANG_.call(null,G__14600,G__14601,G__14602));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__14606 = this$__$1.target;
return jQuery(G__14606);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
