// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14342 = e.target.readyState;
var fexpr__14341 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__14341.cljs$core$IFn$_invoke$arity$1 ? fexpr__14341.cljs$core$IFn$_invoke$arity$1(G__14342) : fexpr__14341.call(null,G__14342));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14344,handler){
var map__14345 = p__14344;
var map__14345__$1 = ((((!((map__14345 == null)))?((((map__14345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14345):map__14345);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14345__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14345__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14345,map__14345__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14343_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14343_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__14345,map__14345__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___14357 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___14357)){
var response_type_14358 = temp__5278__auto___14357;
this$__$1.responseType = cljs.core.name(response_type_14358);
} else {
}

var seq__14347_14359 = cljs.core.seq(headers);
var chunk__14348_14360 = null;
var count__14349_14361 = (0);
var i__14350_14362 = (0);
while(true){
if((i__14350_14362 < count__14349_14361)){
var vec__14351_14363 = chunk__14348_14360.cljs$core$IIndexed$_nth$arity$2(null,i__14350_14362);
var k_14364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351_14363,(0),null);
var v_14365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351_14363,(1),null);
this$__$1.setRequestHeader(k_14364,v_14365);

var G__14366 = seq__14347_14359;
var G__14367 = chunk__14348_14360;
var G__14368 = count__14349_14361;
var G__14369 = (i__14350_14362 + (1));
seq__14347_14359 = G__14366;
chunk__14348_14360 = G__14367;
count__14349_14361 = G__14368;
i__14350_14362 = G__14369;
continue;
} else {
var temp__5278__auto___14370 = cljs.core.seq(seq__14347_14359);
if(temp__5278__auto___14370){
var seq__14347_14371__$1 = temp__5278__auto___14370;
if(cljs.core.chunked_seq_QMARK_(seq__14347_14371__$1)){
var c__9688__auto___14372 = cljs.core.chunk_first(seq__14347_14371__$1);
var G__14373 = cljs.core.chunk_rest(seq__14347_14371__$1);
var G__14374 = c__9688__auto___14372;
var G__14375 = cljs.core.count(c__9688__auto___14372);
var G__14376 = (0);
seq__14347_14359 = G__14373;
chunk__14348_14360 = G__14374;
count__14349_14361 = G__14375;
i__14350_14362 = G__14376;
continue;
} else {
var vec__14354_14377 = cljs.core.first(seq__14347_14371__$1);
var k_14378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14354_14377,(0),null);
var v_14379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14354_14377,(1),null);
this$__$1.setRequestHeader(k_14378,v_14379);

var G__14380 = cljs.core.next(seq__14347_14371__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14347_14359 = G__14380;
chunk__14348_14360 = G__14381;
count__14349_14361 = G__14382;
i__14350_14362 = G__14383;
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
