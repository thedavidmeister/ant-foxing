// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__16269 = e.target.readyState;
var fexpr__16268 = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null));
return (fexpr__16268.cljs$core$IFn$_invoke$arity$1 ? fexpr__16268.cljs$core$IFn$_invoke$arity$1(G__16269) : fexpr__16268.call(null,G__16269));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__16271,handler){
var map__16272 = p__16271;
var map__16272__$1 = ((((!((map__16272 == null)))?((((map__16272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16272):map__16272);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16272__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16272__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__16272,map__16272__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__16270_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__16270_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__16272,map__16272__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___16284 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___16284)){
var response_type_16285 = temp__5278__auto___16284;
this$__$1.responseType = cljs.core.name(response_type_16285);
} else {
}

var seq__16274_16286 = cljs.core.seq(headers);
var chunk__16275_16287 = null;
var count__16276_16288 = (0);
var i__16277_16289 = (0);
while(true){
if((i__16277_16289 < count__16276_16288)){
var vec__16278_16290 = chunk__16275_16287.cljs$core$IIndexed$_nth$arity$2(null,i__16277_16289);
var k_16291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278_16290,(0),null);
var v_16292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278_16290,(1),null);
this$__$1.setRequestHeader(k_16291,v_16292);

var G__16293 = seq__16274_16286;
var G__16294 = chunk__16275_16287;
var G__16295 = count__16276_16288;
var G__16296 = (i__16277_16289 + (1));
seq__16274_16286 = G__16293;
chunk__16275_16287 = G__16294;
count__16276_16288 = G__16295;
i__16277_16289 = G__16296;
continue;
} else {
var temp__5278__auto___16297 = cljs.core.seq(seq__16274_16286);
if(temp__5278__auto___16297){
var seq__16274_16298__$1 = temp__5278__auto___16297;
if(cljs.core.chunked_seq_QMARK_(seq__16274_16298__$1)){
var c__9011__auto___16299 = cljs.core.chunk_first(seq__16274_16298__$1);
var G__16300 = cljs.core.chunk_rest(seq__16274_16298__$1);
var G__16301 = c__9011__auto___16299;
var G__16302 = cljs.core.count(c__9011__auto___16299);
var G__16303 = (0);
seq__16274_16286 = G__16300;
chunk__16275_16287 = G__16301;
count__16276_16288 = G__16302;
i__16277_16289 = G__16303;
continue;
} else {
var vec__16281_16304 = cljs.core.first(seq__16274_16298__$1);
var k_16305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16281_16304,(0),null);
var v_16306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16281_16304,(1),null);
this$__$1.setRequestHeader(k_16305,v_16306);

var G__16307 = cljs.core.next(seq__16274_16298__$1);
var G__16308 = null;
var G__16309 = (0);
var G__16310 = (0);
seq__16274_16286 = G__16307;
chunk__16275_16287 = G__16308;
count__16276_16288 = G__16309;
i__16277_16289 = G__16310;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8099__auto__ = body;
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
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
