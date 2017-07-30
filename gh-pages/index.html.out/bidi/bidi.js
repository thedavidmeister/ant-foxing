// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__27731 = string;
var G__27731__$1 = (((G__27731 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27731)].join(''));
var G__27731__$2 = (((G__27731__$1 == null))?null:encodeURIComponent(G__27731__$1));
if((G__27731__$2 == null)){
return null;
} else {
return G__27731__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__27732 = string;
var G__27732__$1 = (((G__27732 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27732)].join(''));
if((G__27732__$1 == null)){
return null;
} else {
return decodeURIComponent(G__27732__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

var G__27733_27739 = bidi.bidi.encode_parameter;
var G__27734_27740 = "string";
var G__27735_27741 = ((function (G__27733_27739,G__27734_27740){
return (function (s){
return s;
});})(G__27733_27739,G__27734_27740))
;
goog.object.set(G__27733_27739,G__27734_27740,G__27735_27741);

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

var G__27736_27742 = bidi.bidi.encode_parameter;
var G__27737_27743 = "number";
var G__27738_27744 = ((function (G__27736_27742,G__27737_27743){
return (function (s){
return s;
});})(G__27736_27742,G__27737_27743))
;
goog.object.set(G__27736_27742,G__27737_27743,G__27738_27744);

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(k__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace(k__$1))?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.param_key[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__9496__auto__.call(null,_,params));
} else {
var m__9496__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,params) : m__9496__auto____$1.call(null,_,params));
} else {
throw cljs.core.missing_protocol("PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__9496__auto__.call(null,_,s));
} else {
var m__9496__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__9496__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

var G__27748_27780 = bidi.bidi.segment_regex_group;
var G__27749_27781 = "string";
var G__27750_27782 = ((function (G__27748_27780,G__27749_27781){
return (function (this$){
return this$;
});})(G__27748_27780,G__27749_27781))
;
goog.object.set(G__27748_27780,G__27749_27781,G__27750_27782);

var G__27751_27783 = bidi.bidi.param_key;
var G__27752_27784 = "string";
var G__27753_27785 = ((function (G__27751_27783,G__27752_27784){
return (function (_){
return null;
});})(G__27751_27783,G__27752_27784))
;
goog.object.set(G__27751_27783,G__27752_27784,G__27753_27785);

var G__27754_27786 = bidi.bidi.transform_param;
var G__27755_27787 = "string";
var G__27756_27788 = ((function (G__27754_27786,G__27755_27787){
return (function (_){
return cljs.core.identity;
});})(G__27754_27786,G__27755_27787))
;
goog.object.set(G__27754_27786,G__27755_27787,G__27756_27788);

var G__27757_27789 = bidi.bidi.unmatch_segment;
var G__27758_27790 = "string";
var G__27759_27791 = ((function (G__27757_27789,G__27758_27790){
return (function (this$,_){
return this$;
});})(G__27757_27789,G__27758_27790))
;
goog.object.set(G__27757_27789,G__27758_27790,G__27759_27791);

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches(this$__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_(cljs.core.first(this$__$1),v))){
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter value of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (key "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("is not compatible with the route pattern "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No parameter found in params for key "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5276__auto__ = (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(params) : this$__$1.call(null,params));
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot form URI without a value given for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" parameter")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

var G__27760_27792 = bidi.bidi.segment_regex_group;
var G__27761_27793 = "function";
var G__27762_27794 = ((function (G__27760_27792,G__27761_27793){
return (function (this$){
var pred__27763 = cljs.core._EQ_;
var expr__27764 = this$;
if(cljs.core.truth_((pred__27763.cljs$core$IFn$_invoke$arity$2 ? pred__27763.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__27764) : pred__27763.call(null,cljs.core.keyword,expr__27764)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__27763.cljs$core$IFn$_invoke$arity$2 ? pred__27763.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__27764) : pred__27763.call(null,cljs.core.long$,expr__27764)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__27763.cljs$core$IFn$_invoke$arity$2 ? pred__27763.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__27764) : pred__27763.call(null,bidi.bidi.uuid,expr__27764)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((function (){var G__27766 = cljs.core.cst$kw$otherwise;
var G__27767 = expr__27764;
return (pred__27763.cljs$core$IFn$_invoke$arity$2 ? pred__27763.cljs$core$IFn$_invoke$arity$2(G__27766,G__27767) : pred__27763.call(null,G__27766,G__27767));
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unidentified function qualifier to pattern segment: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27764)].join('')));
}
}
}
}
});})(G__27760_27792,G__27761_27793))
;
goog.object.set(G__27760_27792,G__27761_27793,G__27762_27794);

var G__27768_27795 = bidi.bidi.transform_param;
var G__27769_27796 = "function";
var G__27770_27797 = ((function (G__27768_27795,G__27769_27796){
return (function (this$){
var pred__27771 = cljs.core._EQ_;
var expr__27772 = this$;
if(cljs.core.truth_((pred__27771.cljs$core$IFn$_invoke$arity$2 ? pred__27771.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__27772) : pred__27771.call(null,cljs.core.keyword,expr__27772)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__27771.cljs$core$IFn$_invoke$arity$2 ? pred__27771.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__27772) : pred__27771.call(null,cljs.core.long$,expr__27772)))){
return ((function (pred__27771,expr__27772,G__27768_27795,G__27769_27796){
return (function (p1__27746_SHARP_){
return Number(p1__27746_SHARP_);
});
;})(pred__27771,expr__27772,G__27768_27795,G__27769_27796))
} else {
if(cljs.core.truth_((pred__27771.cljs$core$IFn$_invoke$arity$2 ? pred__27771.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__27772) : pred__27771.call(null,bidi.bidi.uuid,expr__27772)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unrecognized function "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
});})(G__27768_27795,G__27769_27796))
;
goog.object.set(G__27768_27795,G__27769_27796,G__27770_27797);

var G__27774_27798 = bidi.bidi.matches_QMARK_;
var G__27775_27799 = "function";
var G__27776_27800 = ((function (G__27774_27798,G__27775_27799){
return (function (this$,s){
var pred__27777 = cljs.core._EQ_;
var expr__27778 = this$;
if(cljs.core.truth_((pred__27777.cljs$core$IFn$_invoke$arity$2 ? pred__27777.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__27778) : pred__27777.call(null,cljs.core.keyword,expr__27778)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__27777.cljs$core$IFn$_invoke$arity$2 ? pred__27777.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__27778) : pred__27777.call(null,cljs.core.long$,expr__27778)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__27777.cljs$core$IFn$_invoke$arity$2 ? pred__27777.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__27778) : pred__27777.call(null,bidi.bidi.uuid,expr__27778)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27778)].join('')));
}
}
}
});})(G__27774_27798,G__27775_27799))
;
goog.object.set(G__27774_27798,G__27775_27799,G__27776_27800);

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,env) : m__9496__auto__.call(null,_,env));
} else {
var m__9496__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,env) : m__9496__auto____$1.call(null,_,env));
} else {
throw cljs.core.missing_protocol("Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto__.call(null,_,m));
} else {
var m__9496__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto__.call(null,_,m));
} else {
var m__9496__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto__.call(null,_,m));
} else {
var m__9496__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__9496__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("file:///"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__27801,orig_env){
var vec__27802 = p__27801;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27802,(1),null);
var env = cljs.core.update.cljs$core$IFn$_invoke$arity$3(orig_env,cljs.core.cst$kw$remainder,bidi.bidi.just_path);
var temp__5278__auto__ = bidi.bidi.match_pattern(pattern,env);
if(cljs.core.truth_(temp__5278__auto__)){
var match_result = temp__5278__auto__;
return bidi.bidi.resolve_handler(matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5278__auto__ = cljs.core.last(cljs.core.re_matches(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(.*)")].join('')),cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5278__auto__)){
var path = temp__5278__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$remainder),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null)], 0));
} else {
return null;
}
});
goog.object.set(bidi.bidi.Pattern,"string",true);

var G__27808_27830 = bidi.bidi.match_pattern;
var G__27809_27831 = "string";
var G__27810_27832 = ((function (G__27808_27830,G__27809_27831){
return (function (this$,env){
return bidi.bidi.match_beginning([cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),env);
});})(G__27808_27830,G__27809_27831))
;
goog.object.set(G__27808_27830,G__27809_27831,G__27810_27832);

var G__27811_27833 = bidi.bidi.unmatch_pattern;
var G__27812_27834 = "string";
var G__27813_27835 = ((function (G__27811_27833,G__27812_27834){
return (function (this$,_){
return this$;
});})(G__27811_27833,G__27812_27834))
;
goog.object.set(G__27811_27833,G__27812_27834,G__27813_27835);

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning([cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern(clojure.string.replace(p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

var G__27814_27836 = bidi.bidi.match_pattern;
var G__27815_27837 = "boolean";
var G__27816_27838 = ((function (G__27814_27836,G__27815_27837){
return (function (this$,env){
if(this$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,"");
} else {
return null;
}
});})(G__27814_27836,G__27815_27837))
;
goog.object.set(G__27814_27836,G__27815_27837,G__27816_27838);

var G__27817_27839 = bidi.bidi.unmatch_pattern;
var G__27818_27840 = "boolean";
var G__27819_27841 = ((function (G__27817_27839,G__27818_27840){
return (function (this$,_){
if(this$){
return "";
} else {
return null;
}
});})(G__27817_27839,G__27818_27840))
;
goog.object.set(G__27817_27839,G__27818_27840,G__27819_27841);

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5278__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(.*)")].join('');
var _PERCENT___$5 = cljs.core.re_pattern(_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches(_PERCENT___$5,cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next(_PERCENT___$6);
})();
if(temp__5278__auto__){
var groups = temp__5278__auto__;
var params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.param_key,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.transform_param,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.butlast(groups))))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remainder], null),cljs.core.last(groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__27805_SHARP_){
return bidi.bidi.unmatch_segment(p1__27805_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__27820){
var vec__27821 = p__27820;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27821,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__27824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__27824) : v.call(null,G__27824));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__27825){
var vec__27826 = p__27825;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__27829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__27829) : v.call(null,G__27829));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27806_SHARP_){
return bidi.bidi.match_pattern(p1__27806_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27807_SHARP_){
return bidi.bidi.match_pattern(p1__27807_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5278__auto__ = bidi.bidi.unresolve_handler(cljs.core.second(v),m);
if(cljs.core.truth_(temp__5278__auto__)){
var r = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern(cljs.core.first(v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

var G__27852_27867 = bidi.bidi.resolve_handler;
var G__27853_27868 = "null";
var G__27854_27869 = ((function (G__27852_27867,G__27853_27868){
return (function (this$,m){
return null;
});})(G__27852_27867,G__27853_27868))
;
goog.object.set(G__27852_27867,G__27853_27868,G__27854_27869);

var G__27855_27870 = bidi.bidi.unresolve_handler;
var G__27856_27871 = "null";
var G__27857_27872 = ((function (G__27855_27870,G__27856_27871){
return (function (this$,m){
return null;
});})(G__27855_27870,G__27856_27871))
;
goog.object.set(G__27855_27870,G__27856_27871,G__27857_27872);

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27842_SHARP_){
return bidi.bidi.match_pair(p1__27842_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27843_SHARP_){
return bidi.bidi.unmatch_pair(p1__27843_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler(cljs.core.deref(this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27846_SHARP_){
return bidi.bidi.match_pair(p1__27846_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27847_SHARP_){
return bidi.bidi.unmatch_pair(p1__27847_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27844_SHARP_){
return bidi.bidi.match_pair(p1__27844_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27845_SHARP_){
return bidi.bidi.unmatch_pair(p1__27845_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

var G__27858_27873 = bidi.bidi.unresolve_handler;
var G__27859_27874 = "string";
var G__27860_27875 = ((function (G__27858_27873,G__27859_27874){
return (function (_,___$1){
return null;
});})(G__27858_27873,G__27859_27874))
;
goog.object.set(G__27858_27873,G__27859_27874,G__27860_27875);

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

var G__27861_27876 = bidi.bidi.resolve_handler;
var G__27862_27877 = "function";
var G__27863_27878 = ((function (G__27861_27876,G__27862_27877){
return (function (this$,m){
return bidi.bidi.succeed(this$,m);
});})(G__27861_27876,G__27862_27877))
;
goog.object.set(G__27861_27876,G__27862_27877,G__27863_27878);

var G__27864_27879 = bidi.bidi.unresolve_handler;
var G__27865_27880 = "function";
var G__27866_27881 = ((function (G__27864_27879,G__27865_27880){
return (function (this$,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});})(G__27864_27879,G__27865_27880))
;
goog.object.set(G__27864_27879,G__27865_27880,G__27866_27881);

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27848_SHARP_){
return bidi.bidi.match_pair(p1__27848_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27849_SHARP_){
return bidi.bidi.unmatch_pair(p1__27849_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27850_SHARP_){
return bidi.bidi.match_pair(p1__27850_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27851_SHARP_){
return bidi.bidi.unmatch_pair(p1__27851_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_pair(route,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$remainder,path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route,route], 0))),cljs.core.cst$kw$route);
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__10041__auto__ = [];
var len__10034__auto___27888 = arguments.length;
var i__10035__auto___27889 = (0);
while(true){
if((i__10035__auto___27889 < len__10034__auto___27888)){
args__10041__auto__.push((arguments[i__10035__auto___27889]));

var G__27890 = (i__10035__auto___27889 + (1));
i__10035__auto___27889 = G__27890;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__27885){
var map__27886 = p__27885;
var map__27886__$1 = ((((!((map__27886 == null)))?((((map__27886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27886):map__27886);
var options = map__27886__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq27882){
var G__27883 = cljs.core.first(seq27882);
var seq27882__$1 = cljs.core.next(seq27882);
var G__27884 = cljs.core.first(seq27882__$1);
var seq27882__$2 = cljs.core.next(seq27882__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__27883,G__27884,seq27882__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__10041__auto__ = [];
var len__10034__auto___27897 = arguments.length;
var i__10035__auto___27898 = (0);
while(true){
if((i__10035__auto___27898 < len__10034__auto___27897)){
args__10041__auto__.push((arguments[i__10035__auto___27898]));

var G__27899 = (i__10035__auto___27898 + (1));
i__10035__auto___27898 = G__27899;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((2) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10042__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__27894){
var map__27895 = p__27894;
var map__27895__$1 = ((((!((map__27895 == null)))?((((map__27895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27895):map__27895);
var params = map__27895__$1;
if((handler == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair(route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$params,params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq27891){
var G__27892 = cljs.core.first(seq27891);
var seq27891__$1 = cljs.core.next(seq27891);
var G__27893 = cljs.core.first(seq27891__$1);
var seq27891__$2 = cljs.core.next(seq27891__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__27892,G__27893,seq27891__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null)))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.matches[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

var G__27900_27903 = bidi.bidi.matches;
var G__27901_27904 = "_";
var G__27902_27905 = ((function (G__27900_27903,G__27901_27904){
return (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
});})(G__27900_27903,G__27901_27904))
;
goog.object.set(G__27900_27903,G__27901_27904,G__27902_27905);

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
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
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k27907,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__27911 = k27907;
var G__27911__$1 = (((G__27911 instanceof cljs.core.Keyword))?G__27911.fqn:null);
switch (G__27911__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27907,else__9453__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#bidi.bidi.Route{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27906){
var self__ = this;
var G__27906__$1 = this;
return (new cljs.core.RecordIter((0),G__27906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__27912 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__27912(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27908,other27909){
var self__ = this;
var this27908__$1 = this;
return (!((other27909 == null))) && ((this27908__$1.constructor === other27909.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27908__$1.handler,other27909.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27908__$1.path,other27909.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27908__$1.__extmap,other27909.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$handler,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__27906){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__27913 = cljs.core.keyword_identical_QMARK_;
var expr__27914 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__27916 = cljs.core.cst$kw$handler;
var G__27917 = expr__27914;
return (pred__27913.cljs$core$IFn$_invoke$arity$2 ? pred__27913.cljs$core$IFn$_invoke$arity$2(G__27916,G__27917) : pred__27913.call(null,G__27916,G__27917));
})())){
return (new bidi.bidi.Route(G__27906,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27918 = cljs.core.cst$kw$path;
var G__27919 = expr__27914;
return (pred__27913.cljs$core$IFn$_invoke$arity$2 ? pred__27913.cljs$core$IFn$_invoke$arity$2(G__27918,G__27919) : pred__27913.call(null,G__27918,G__27919));
})())){
return (new bidi.bidi.Route(self__.handler,G__27906,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__27906),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__27906){
var self__ = this;
var this__9449__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__27906,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$path], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__27910){
return (new bidi.bidi.Route(cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__27910),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__27910),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27910,cljs.core.cst$kw$handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path], 0))),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.gather[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__9496__auto__.call(null,_,context));
} else {
var m__9496__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$2(_,context) : m__9496__auto____$1.call(null,_,context));
} else {
throw cljs.core.missing_protocol("RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__27922 = arguments.length;
switch (G__27922) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__27923,ctx){
var vec__27924 = p__27923;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27924,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9639__auto__ = ((function (vec__27924,pattern,matched){
return (function bidi$bidi$iter__27927(s__27928){
return (new cljs.core.LazySeq(null,((function (vec__27924,pattern,matched){
return (function (){
var s__27928__$1 = s__27928;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__27928__$1);
if(temp__5278__auto__){
var s__27928__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27928__$2)){
var c__9637__auto__ = cljs.core.chunk_first(s__27928__$2);
var size__9638__auto__ = cljs.core.count(c__9637__auto__);
var b__27930 = cljs.core.chunk_buffer(size__9638__auto__);
if((function (){var i__27929 = (0);
while(true){
if((i__27929 < size__9638__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9637__auto__,i__27929);
cljs.core.chunk_append(b__27930,bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__27932 = (i__27929 + (1));
i__27929 = G__27932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27930),bidi$bidi$iter__27927(cljs.core.chunk_rest(s__27928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27930),null);
}
} else {
var p = cljs.core.first(s__27928__$2);
return cljs.core.cons(bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__27927(cljs.core.rest(s__27928__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27924,pattern,matched))
,null,null));
});})(vec__27924,pattern,matched))
;
return iter__9639__auto__(bidi.bidi.matches(pattern));
})()], 0));
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__27933_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__27933_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__27934_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__27934_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__27935_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__27935_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__27936_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__27936_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__27937_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__27937_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

var G__27938_27941 = bidi.bidi.gather;
var G__27939_27942 = "_";
var G__27940_27943 = ((function (G__27938_27941,G__27939_27942){
return (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$handler,this$))], null);
});})(G__27938_27941,G__27939_27942))
;
goog.object.set(G__27938_27941,G__27939_27942,G__27940_27943);

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__9495__auto__ = (((_ == null))?null:_);
var m__9496__auto__ = (bidi.bidi.routes[goog.typeOf(x__9495__auto__)]);
if(!((m__9496__auto__ == null))){
return (m__9496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto__.call(null,_));
} else {
var m__9496__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__9496__auto____$1 == null))){
return (m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9496__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9496__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("RouteProvider.routes",_);
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
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
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
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k27946,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__27950 = k27946;
var G__27950__$1 = (((G__27950 instanceof cljs.core.Keyword))?G__27950.fqn:null);
switch (G__27950__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27946,else__9453__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#bidi.bidi.Alternates{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27945){
var self__ = this;
var G__27945__$1 = this;
return (new cljs.core.RecordIter((0),G__27945__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__27951 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__27951(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27947,other27948){
var self__ = this;
var this27947__$1 = this;
return (!((other27948 == null))) && ((this27947__$1.constructor === other27948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27947__$1.alts,other27948.alts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27947__$1.__extmap,other27948.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alts,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__27945){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__27952 = cljs.core.keyword_identical_QMARK_;
var expr__27953 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__27955 = cljs.core.cst$kw$alts;
var G__27956 = expr__27953;
return (pred__27952.cljs$core$IFn$_invoke$arity$2 ? pred__27952.cljs$core$IFn$_invoke$arity$2(G__27955,G__27956) : pred__27952.call(null,G__27955,G__27956));
})())){
return (new bidi.bidi.Alternates(G__27945,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__27945),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__27945){
var self__ = this;
var this__9449__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__27945,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__27944_SHARP_){
return bidi.bidi.match_pattern(p1__27944_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$alts], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__27949){
return (new bidi.bidi.Alternates(cljs.core.cst$kw$alts.cljs$core$IFn$_invoke$arity$1(G__27949),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27949,cljs.core.cst$kw$alts)),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__10041__auto__ = [];
var len__10034__auto___27959 = arguments.length;
var i__10035__auto___27960 = (0);
while(true){
if((i__10035__auto___27960 < len__10034__auto___27959)){
args__10041__auto__.push((arguments[i__10035__auto___27960]));

var G__27961 = (i__10035__auto___27960 + (1));
i__10035__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var argseq__10042__auto__ = ((((0) < args__10041__auto__.length))?(new cljs.core.IndexedSeq(args__10041__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__10042__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates(alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq27958){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27958));
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k27963,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__27967 = k27963;
var G__27967__$1 = (((G__27967 instanceof cljs.core.Keyword))?G__27967.fqn:null);
switch (G__27967__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27963,else__9453__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context,cljs.core.cst$kw$handler,self__.matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,self__.tag], 0)))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27962){
var self__ = this;
var G__27962__$1 = this;
return (new cljs.core.RecordIter((0),G__27962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matched,cljs.core.cst$kw$tag], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.matched,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag,self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(((cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m)))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__27968 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__27968(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27964,other27965){
var self__ = this;
var this27964__$1 = this;
return (!((other27965 == null))) && ((this27964__$1.constructor === other27965.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27964__$1.matched,other27965.matched)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27964__$1.tag,other27965.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27964__$1.__extmap,other27965.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$matched,null,cljs.core.cst$kw$tag,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__27962){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__27969 = cljs.core.keyword_identical_QMARK_;
var expr__27970 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__27972 = cljs.core.cst$kw$matched;
var G__27973 = expr__27970;
return (pred__27969.cljs$core$IFn$_invoke$arity$2 ? pred__27969.cljs$core$IFn$_invoke$arity$2(G__27972,G__27973) : pred__27969.call(null,G__27972,G__27973));
})())){
return (new bidi.bidi.TaggedMatch(G__27962,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27974 = cljs.core.cst$kw$tag;
var G__27975 = expr__27970;
return (pred__27969.cljs$core$IFn$_invoke$arity$2 ? pred__27969.cljs$core$IFn$_invoke$arity$2(G__27974,G__27975) : pred__27969.call(null,G__27974,G__27975));
})())){
return (new bidi.bidi.TaggedMatch(self__.matched,G__27962,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__27962),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__27962){
var self__ = this;
var this__9449__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__27962,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matched,cljs.core.cst$sym$tag], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__27966){
return (new bidi.bidi.TaggedMatch(cljs.core.cst$kw$matched.cljs$core$IFn$_invoke$arity$1(G__27966),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__27966),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27966,cljs.core.cst$kw$matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag], 0))),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch(matched,tag);
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k27978,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__27982 = k27978;
var G__27982__$1 = (((G__27982 instanceof cljs.core.Keyword))?G__27982.fqn:null);
switch (G__27982__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27978,else__9453__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27977){
var self__ = this;
var G__27977__$1 = this;
return (new cljs.core.RecordIter((0),G__27977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$handler], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.handler,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$id,self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__27983 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__27983(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27979,other27980){
var self__ = this;
var this27979__$1 = this;
return (!((other27980 == null))) && ((this27979__$1.constructor === other27980.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27979__$1.id,other27980.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27979__$1.handler,other27980.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27979__$1.__extmap,other27980.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,null,cljs.core.cst$kw$handler,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__27977){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__27984 = cljs.core.keyword_identical_QMARK_;
var expr__27985 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__27987 = cljs.core.cst$kw$id;
var G__27988 = expr__27985;
return (pred__27984.cljs$core$IFn$_invoke$arity$2 ? pred__27984.cljs$core$IFn$_invoke$arity$2(G__27987,G__27988) : pred__27984.call(null,G__27987,G__27988));
})())){
return (new bidi.bidi.IdentifiableHandler(G__27977,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27989 = cljs.core.cst$kw$handler;
var G__27990 = expr__27985;
return (pred__27984.cljs$core$IFn$_invoke$arity$2 ? pred__27984.cljs$core$IFn$_invoke$arity$2(G__27989,G__27990) : pred__27984.call(null,G__27989,G__27990));
})())){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__27977,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__27977),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__27977){
var self__ = this;
var this__9449__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__27977,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$handler], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__27981){
return (new bidi.bidi.IdentifiableHandler(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__27981),cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__27981),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27981,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler], 0))),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__27993 = arguments.length;
switch (G__27993) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler(k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler(null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9450__auto__,k__9451__auto__){
var self__ = this;
var this__9450__auto____$1 = this;
return this__9450__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9451__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9452__auto__,k27996,else__9453__auto__){
var self__ = this;
var this__9452__auto____$1 = this;
var G__28000 = k27996;
var G__28000__$1 = (((G__28000 instanceof cljs.core.Keyword))?G__28000.fqn:null);
switch (G__28000__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27996,else__9453__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather(self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9464__auto__,writer__9465__auto__,opts__9466__auto__){
var self__ = this;
var this__9464__auto____$1 = this;
var pr_pair__9467__auto__ = ((function (this__9464__auto____$1){
return (function (keyval__9468__auto__){
return cljs.core.pr_sequential_writer(writer__9465__auto__,cljs.core.pr_writer,""," ","",opts__9466__auto__,keyval__9468__auto__);
});})(this__9464__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9465__auto__,pr_pair__9467__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__9466__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27995){
var self__ = this;
var G__27995__$1 = this;
return (new cljs.core.RecordIter((0),G__27995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5278__auto__ = bidi.bidi.resolve_handler(self__.routes,m);
if(cljs.core.truth_(temp__5278__auto__)){
var m__$1 = temp__5278__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.context,m__$1], 0));
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler(self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9448__auto__){
var self__ = this;
var this__9448__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9445__auto__){
var self__ = this;
var this__9445__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9454__auto__){
var self__ = this;
var this__9454__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9446__auto__){
var self__ = this;
var this__9446__auto____$1 = this;
var h__9218__auto__ = self__.__hash;
if(!((h__9218__auto__ == null))){
return h__9218__auto__;
} else {
var h__9218__auto____$1 = (function (){var fexpr__28001 = ((function (h__9218__auto__,this__9446__auto____$1){
return (function (coll__9447__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll(coll__9447__auto__));
});})(h__9218__auto__,this__9446__auto____$1))
;
return fexpr__28001(this__9446__auto____$1);
})();
self__.__hash = h__9218__auto____$1;

return h__9218__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27997,other27998){
var self__ = this;
var this27997__$1 = this;
return (!((other27998 == null))) && ((this27997__$1.constructor === other27998.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27997__$1.routes,other27998.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27997__$1.context,other27998.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27997__$1.__extmap,other27998.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9459__auto__,k__9460__auto__){
var self__ = this;
var this__9459__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$context,null], null), null),k__9460__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9459__auto____$1),self__.__meta),k__9460__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9460__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9457__auto__,k__9458__auto__,G__27995){
var self__ = this;
var this__9457__auto____$1 = this;
var pred__28002 = cljs.core.keyword_identical_QMARK_;
var expr__28003 = k__9458__auto__;
if(cljs.core.truth_((function (){var G__28005 = cljs.core.cst$kw$routes;
var G__28006 = expr__28003;
return (pred__28002.cljs$core$IFn$_invoke$arity$2 ? pred__28002.cljs$core$IFn$_invoke$arity$2(G__28005,G__28006) : pred__28002.call(null,G__28005,G__28006));
})())){
return (new bidi.bidi.RoutesContext(G__27995,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28007 = cljs.core.cst$kw$context;
var G__28008 = expr__28003;
return (pred__28002.cljs$core$IFn$_invoke$arity$2 ? pred__28002.cljs$core$IFn$_invoke$arity$2(G__28007,G__28008) : pred__28002.call(null,G__28007,G__28008));
})())){
return (new bidi.bidi.RoutesContext(self__.routes,G__27995,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9458__auto__,G__27995),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9462__auto__){
var self__ = this;
var this__9462__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9449__auto__,G__27995){
var self__ = this;
var this__9449__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__27995,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9455__auto__,entry__9456__auto__){
var self__ = this;
var this__9455__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9456__auto__)){
return this__9455__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9456__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9455__auto____$1,entry__9456__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$context], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__9488__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__9488__auto__,writer__9489__auto__){
return cljs.core._write(writer__9489__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__27999){
return (new bidi.bidi.RoutesContext(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__27999),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__27999),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27999,cljs.core.cst$kw$routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0))),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext(routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});
