// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.arrays');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
datascript.arrays.if_cljs = (function datascript$arrays$if_cljs(env,then,else$){
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))){
return then;
} else {
return else$;
}
});
datascript.arrays.make_array = (function datascript$arrays$make_array(size){
return (new Array(size));
});
datascript.arrays.into_array = (function datascript$arrays$into_array(aseq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){
a.push(x);

return a;
}),(new Array()),aseq);
});
datascript.arrays.aclone = (function datascript$arrays$aclone(from){
return from.slice((0));
});
datascript.arrays.aconcat = (function datascript$arrays$aconcat(a,b){
return a.concat(b);
});
datascript.arrays.amap = (function datascript$arrays$amap(f,arr){
return arr.map(f);
});
datascript.arrays.asort = (function datascript$arrays$asort(arr,cmp){
return arr.sort(cmp);
});
datascript.arrays.array_QMARK_ = (function datascript$arrays$array_QMARK_(x){
if((cljs.core._STAR_target_STAR_ === "nodejs")){
return Array.isArray(x);
} else {
return (x instanceof Array);
}
});
