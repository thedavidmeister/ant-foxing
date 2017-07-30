// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__30202 = e.target.readyState;
var fexpr__30201 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__30201.cljs$core$IFn$_invoke$arity$1 ? fexpr__30201.cljs$core$IFn$_invoke$arity$1(G__30202) : fexpr__30201.call(null,G__30202));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30204,handler){
var map__30205 = p__30204;
var map__30205__$1 = ((((!((map__30205 == null)))?((((map__30205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30205):map__30205);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30205__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__30205,map__30205__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__30203_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__30203_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__30205,map__30205__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___30217 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___30217)){
var response_type_30218 = temp__5278__auto___30217;
this$__$1.responseType = cljs.core.name(response_type_30218);
} else {
}

var seq__30207_30219 = cljs.core.seq(headers);
var chunk__30208_30220 = null;
var count__30209_30221 = (0);
var i__30210_30222 = (0);
while(true){
if((i__30210_30222 < count__30209_30221)){
var vec__30211_30223 = chunk__30208_30220.cljs$core$IIndexed$_nth$arity$2(null,i__30210_30222);
var k_30224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30211_30223,(0),null);
var v_30225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30211_30223,(1),null);
this$__$1.setRequestHeader(k_30224,v_30225);

var G__30226 = seq__30207_30219;
var G__30227 = chunk__30208_30220;
var G__30228 = count__30209_30221;
var G__30229 = (i__30210_30222 + (1));
seq__30207_30219 = G__30226;
chunk__30208_30220 = G__30227;
count__30209_30221 = G__30228;
i__30210_30222 = G__30229;
continue;
} else {
var temp__5278__auto___30230 = cljs.core.seq(seq__30207_30219);
if(temp__5278__auto___30230){
var seq__30207_30231__$1 = temp__5278__auto___30230;
if(cljs.core.chunked_seq_QMARK_(seq__30207_30231__$1)){
var c__9688__auto___30232 = cljs.core.chunk_first(seq__30207_30231__$1);
var G__30233 = cljs.core.chunk_rest(seq__30207_30231__$1);
var G__30234 = c__9688__auto___30232;
var G__30235 = cljs.core.count(c__9688__auto___30232);
var G__30236 = (0);
seq__30207_30219 = G__30233;
chunk__30208_30220 = G__30234;
count__30209_30221 = G__30235;
i__30210_30222 = G__30236;
continue;
} else {
var vec__30214_30237 = cljs.core.first(seq__30207_30231__$1);
var k_30238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30214_30237,(0),null);
var v_30239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30214_30237,(1),null);
this$__$1.setRequestHeader(k_30238,v_30239);

var G__30240 = cljs.core.next(seq__30207_30231__$1);
var G__30241 = null;
var G__30242 = (0);
var G__30243 = (0);
seq__30207_30219 = G__30240;
chunk__30208_30220 = G__30241;
count__30209_30221 = G__30242;
i__30210_30222 = G__30243;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8762__auto__ = body;
if(cljs.core.truth_(or__8762__auto__)){
return or__8762__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
