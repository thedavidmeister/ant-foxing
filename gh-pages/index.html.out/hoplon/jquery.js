// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__31168 = arguments.length;
switch (G__31168) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___31182 = arguments.length;
var i__10035__auto___31183 = (0);
while(true){
if((i__10035__auto___31183 < len__10034__auto___31182)){
args_arr__10057__auto__.push((arguments[i__10035__auto___31183]));

var G__31184 = (i__10035__auto___31183 + (1));
i__10035__auto___31183 = G__31184;
continue;
} else {
}
break;
}

var argseq__10058__auto__ = (new cljs.core.IndexedSeq(args_arr__10057__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10058__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__31169 = cljs.core.seq(kvs);
var chunk__31171 = null;
var count__31172 = (0);
var i__31173 = (0);
while(true){
if((i__31173 < count__31172)){
var vec__31175 = chunk__31171.cljs$core$IIndexed$_nth$arity$2(null,i__31173);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(1),null);
var k_31185__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_31185__$1);
} else {
e.attr(k_31185__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_31185__$1:v));
}

var G__31186 = seq__31169;
var G__31187 = chunk__31171;
var G__31188 = count__31172;
var G__31189 = (i__31173 + (1));
seq__31169 = G__31186;
chunk__31171 = G__31187;
count__31172 = G__31188;
i__31173 = G__31189;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__31169);
if(temp__5278__auto__){
var seq__31169__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31169__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__31169__$1);
var G__31190 = cljs.core.chunk_rest(seq__31169__$1);
var G__31191 = c__9688__auto__;
var G__31192 = cljs.core.count(c__9688__auto__);
var G__31193 = (0);
seq__31169 = G__31190;
chunk__31171 = G__31191;
count__31172 = G__31192;
i__31173 = G__31193;
continue;
} else {
var vec__31178 = cljs.core.first(seq__31169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31178,(1),null);
var k_31194__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_31194__$1);
} else {
e.attr(k_31194__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_31194__$1:v));
}

var G__31195 = cljs.core.next(seq__31169__$1);
var G__31196 = null;
var G__31197 = (0);
var G__31198 = (0);
seq__31169 = G__31195;
chunk__31171 = G__31196;
count__31172 = G__31197;
i__31173 = G__31198;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq31164){
var G__31165 = cljs.core.first(seq31164);
var seq31164__$1 = cljs.core.next(seq31164);
var G__31166 = cljs.core.first(seq31164__$1);
var seq31164__$2 = cljs.core.next(seq31164__$1);
var G__31167 = cljs.core.first(seq31164__$2);
var seq31164__$3 = cljs.core.next(seq31164__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31165,G__31166,G__31167,seq31164__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__31204 = arguments.length;
switch (G__31204) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10057__auto__ = [];
var len__10034__auto___31216 = arguments.length;
var i__10035__auto___31217 = (0);
while(true){
if((i__10035__auto___31217 < len__10034__auto___31216)){
args_arr__10057__auto__.push((arguments[i__10035__auto___31217]));

var G__31218 = (i__10035__auto___31217 + (1));
i__10035__auto___31217 = G__31218;
continue;
} else {
}
break;
}

var argseq__10058__auto__ = (new cljs.core.IndexedSeq(args_arr__10057__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10058__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__31205 = cljs.core.seq(kvs);
var chunk__31206 = null;
var count__31207 = (0);
var i__31208 = (0);
while(true){
if((i__31208 < count__31207)){
var vec__31209 = chunk__31206.cljs$core$IIndexed$_nth$arity$2(null,i__31208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31209,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__31219 = seq__31205;
var G__31220 = chunk__31206;
var G__31221 = count__31207;
var G__31222 = (i__31208 + (1));
seq__31205 = G__31219;
chunk__31206 = G__31220;
count__31207 = G__31221;
i__31208 = G__31222;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__31205);
if(temp__5278__auto__){
var seq__31205__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31205__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__31205__$1);
var G__31223 = cljs.core.chunk_rest(seq__31205__$1);
var G__31224 = c__9688__auto__;
var G__31225 = cljs.core.count(c__9688__auto__);
var G__31226 = (0);
seq__31205 = G__31223;
chunk__31206 = G__31224;
count__31207 = G__31225;
i__31208 = G__31226;
continue;
} else {
var vec__31212 = cljs.core.first(seq__31205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__31227 = cljs.core.next(seq__31205__$1);
var G__31228 = null;
var G__31229 = (0);
var G__31230 = (0);
seq__31205 = G__31227;
chunk__31206 = G__31228;
count__31207 = G__31229;
i__31208 = G__31230;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
var G__31202 = cljs.core.first(seq31200__$1);
var seq31200__$2 = cljs.core.next(seq31200__$1);
var G__31203 = cljs.core.first(seq31200__$2);
var seq31200__$3 = cljs.core.next(seq31200__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31201,G__31202,G__31203,seq31200__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__31232 = arguments.length;
switch (G__31232) {
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
var G__31235 = arguments.length;
switch (G__31235) {
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
var G__31237 = elem;
var G__31238 = cljs.core.cst$kw$attr;
var G__31239 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__31237,G__31238,G__31239) : hoplon.core.do_BANG_.call(null,G__31237,G__31238,G__31239));
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
var G__31240__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__31240 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__31241__i = 0, G__31241__a = new Array(arguments.length -  2);
while (G__31241__i < G__31241__a.length) {G__31241__a[G__31241__i] = arguments[G__31241__i + 2]; ++G__31241__i;}
  args = new cljs.core.IndexedSeq(G__31241__a,0,null);
} 
return G__31240__delegate.call(this,elem,_,args);};
G__31240.cljs$lang$maxFixedArity = 2;
G__31240.cljs$lang$applyTo = (function (arglist__31242){
var elem = cljs.core.first(arglist__31242);
arglist__31242 = cljs.core.next(arglist__31242);
var _ = cljs.core.first(arglist__31242);
var args = cljs.core.rest(arglist__31242);
return G__31240__delegate(elem,_,args);
});
G__31240.cljs$core$IFn$_invoke$arity$variadic = G__31240__delegate;
return G__31240;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__31243 = cljs.core.seq(clmap);
var chunk__31244 = null;
var count__31245 = (0);
var i__31246 = (0);
while(true){
if((i__31246 < count__31245)){
var vec__31247 = chunk__31244.cljs$core$IIndexed$_nth$arity$2(null,i__31246);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__31253 = seq__31243;
var G__31254 = chunk__31244;
var G__31255 = count__31245;
var G__31256 = (i__31246 + (1));
seq__31243 = G__31253;
chunk__31244 = G__31254;
count__31245 = G__31255;
i__31246 = G__31256;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__31243);
if(temp__5278__auto__){
var seq__31243__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31243__$1)){
var c__9688__auto__ = cljs.core.chunk_first(seq__31243__$1);
var G__31257 = cljs.core.chunk_rest(seq__31243__$1);
var G__31258 = c__9688__auto__;
var G__31259 = cljs.core.count(c__9688__auto__);
var G__31260 = (0);
seq__31243 = G__31257;
chunk__31244 = G__31258;
count__31245 = G__31259;
i__31246 = G__31260;
continue;
} else {
var vec__31250 = cljs.core.first(seq__31243__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31250,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__31261 = cljs.core.next(seq__31243__$1);
var G__31262 = null;
var G__31263 = (0);
var G__31264 = (0);
seq__31243 = G__31261;
chunk__31244 = G__31262;
count__31245 = G__31263;
i__31246 = G__31264;
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
var G__31265 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__31266 = (0);
return setTimeout(G__31265,G__31266);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__31267_31273 = elem;
var G__31268_31274 = cljs.core.cst$kw$focus;
var G__31269_31275 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__31267_31273,G__31268_31274,G__31269_31275) : hoplon.core.do_BANG_.call(null,G__31267_31273,G__31268_31274,G__31269_31275));

var G__31270 = elem;
var G__31271 = cljs.core.cst$kw$select;
var G__31272 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__31270,G__31271,G__31272) : hoplon.core.do_BANG_.call(null,G__31270,G__31271,G__31272));
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
return (function (){var G__31276 = this$__$1.target;
return jQuery(G__31276);
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
