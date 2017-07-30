// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14375 = e.target.readyState;
var fexpr__14374 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__14374.cljs$core$IFn$_invoke$arity$1 ? fexpr__14374.cljs$core$IFn$_invoke$arity$1(G__14375) : fexpr__14374.call(null,G__14375));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14377,handler){
var map__14378 = p__14377;
var map__14378__$1 = ((((!((map__14378 == null)))?((((map__14378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14378):map__14378);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14378__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14378__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14378,map__14378__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14376_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14376_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__14378,map__14378__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___14390 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___14390)){
var response_type_14391 = temp__5278__auto___14390;
this$__$1.responseType = cljs.core.name(response_type_14391);
} else {
}

var seq__14380_14392 = cljs.core.seq(headers);
var chunk__14381_14393 = null;
var count__14382_14394 = (0);
var i__14383_14395 = (0);
while(true){
if((i__14383_14395 < count__14382_14394)){
var vec__14384_14396 = chunk__14381_14393.cljs$core$IIndexed$_nth$arity$2(null,i__14383_14395);
var k_14397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384_14396,(0),null);
var v_14398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384_14396,(1),null);
this$__$1.setRequestHeader(k_14397,v_14398);

var G__14399 = seq__14380_14392;
var G__14400 = chunk__14381_14393;
var G__14401 = count__14382_14394;
var G__14402 = (i__14383_14395 + (1));
seq__14380_14392 = G__14399;
chunk__14381_14393 = G__14400;
count__14382_14394 = G__14401;
i__14383_14395 = G__14402;
continue;
} else {
var temp__5278__auto___14403 = cljs.core.seq(seq__14380_14392);
if(temp__5278__auto___14403){
var seq__14380_14404__$1 = temp__5278__auto___14403;
if(cljs.core.chunked_seq_QMARK_(seq__14380_14404__$1)){
var c__9688__auto___14405 = cljs.core.chunk_first(seq__14380_14404__$1);
var G__14406 = cljs.core.chunk_rest(seq__14380_14404__$1);
var G__14407 = c__9688__auto___14405;
var G__14408 = cljs.core.count(c__9688__auto___14405);
var G__14409 = (0);
seq__14380_14392 = G__14406;
chunk__14381_14393 = G__14407;
count__14382_14394 = G__14408;
i__14383_14395 = G__14409;
continue;
} else {
var vec__14387_14410 = cljs.core.first(seq__14380_14404__$1);
var k_14411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387_14410,(0),null);
var v_14412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387_14410,(1),null);
this$__$1.setRequestHeader(k_14411,v_14412);

var G__14413 = cljs.core.next(seq__14380_14404__$1);
var G__14414 = null;
var G__14415 = (0);
var G__14416 = (0);
seq__14380_14392 = G__14413;
chunk__14381_14393 = G__14414;
count__14382_14394 = G__14415;
i__14383_14395 = G__14416;
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
