// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('math.geometric.sequence');
goog.require('cljs.core');
goog.require('cljs.core.constants');
math.geometric.sequence.nth = (function math$geometric$sequence$nth(var_args){
var G__30899 = arguments.length;
switch (G__30899) {
case 2:
return math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$2 = (function (r,n){
return math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$3((1),r,n);
});

math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$3 = (function (a,r,n){
if(typeof a === 'number'){
} else {
throw (new Error("Assert failed: (number? a)"));
}

if(typeof r === 'number'){
} else {
throw (new Error("Assert failed: (number? r)"));
}

if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return (a * Math.pow(r,(n - (1))));
});

math.geometric.sequence.nth.cljs$lang$maxFixedArity = 3;

math.geometric.sequence.at_nth = (function math$geometric$sequence$at_nth(var_args){
var G__30902 = arguments.length;
switch (G__30902) {
case 2:
return math.geometric.sequence.at_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return math.geometric.sequence.at_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

math.geometric.sequence.at_nth.cljs$core$IFn$_invoke$arity$2 = (function (r,n){
return math.geometric.sequence.at_nth.cljs$core$IFn$_invoke$arity$3((1),r,n);
});

math.geometric.sequence.at_nth.cljs$core$IFn$_invoke$arity$3 = (function (a,r,n){
return (a * (math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$3(a,r,n) - math.geometric.sequence.nth.cljs$core$IFn$_invoke$arity$3(a,r,(n + (1)))));
});

math.geometric.sequence.at_nth.cljs$lang$maxFixedArity = 3;

