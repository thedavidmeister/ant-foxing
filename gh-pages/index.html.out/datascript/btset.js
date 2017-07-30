// Compiled by ClojureScript 1.9.655 {:static-fns true, :optimize-constants true}
goog.provide('datascript.btset');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.arrays');
datascript.btset.min_len = (16);
datascript.btset.max_len = (32);
datascript.btset.avg_len = (((32) + (16)) >>> (1));
datascript.btset.level_shift = (cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21588_SHARP_){
return (((32) & (1 << p1__21588_SHARP_)) != 0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function datascript$btset$path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function datascript$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.binary_search_l = (function datascript$btset$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null,mk,k)) < (0))){
var G__21589 = (m + (1));
var G__21590 = r__$1;
l = G__21589;
r__$1 = G__21590;
continue;
} else {
var G__21591 = l;
var G__21592 = (m - (1));
l = G__21591;
r__$1 = G__21592;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function datascript$btset$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null,mk,k)) > (0))){
var G__21593 = l;
var G__21594 = (m - (1));
l = G__21593;
r__$1 = G__21594;
continue;
} else {
var G__21595 = (m + (1));
var G__21596 = r__$1;
l = G__21595;
r__$1 = G__21596;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function datascript$btset$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l(cmp,arr,(arr_l - (1)),key);
if(((idx < arr_l)) && (((0) === (function (){var G__21599 = (arr[idx]);
var G__21600 = key;
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__21599,G__21600) : cmp.call(null,G__21599,G__21600));
})()))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function datascript$btset$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l(cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function datascript$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function datascript$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = datascript.arrays.make_array(((l1 + xs_l) + l2));
var l__21240__auto___21601 = (splice_from - cut_from);
var n__9121__auto___21602 = l__21240__auto___21601;
var i__21241__auto___21603 = (0);
while(true){
if((i__21241__auto___21603 < n__9121__auto___21602)){
(new_arr[(i__21241__auto___21603 + (0))] = (arr[(i__21241__auto___21603 + cut_from)]));

var G__21604 = (i__21241__auto___21603 + (1));
i__21241__auto___21603 = G__21604;
continue;
} else {
}
break;
}

var l__21240__auto___21605 = (xs_l - (0));
var n__9121__auto___21606 = l__21240__auto___21605;
var i__21241__auto___21607 = (0);
while(true){
if((i__21241__auto___21607 < n__9121__auto___21606)){
(new_arr[(i__21241__auto___21607 + l1)] = (xs[(i__21241__auto___21607 + (0))]));

var G__21608 = (i__21241__auto___21607 + (1));
i__21241__auto___21607 = G__21608;
continue;
} else {
}
break;
}

var l__21240__auto___21609 = (cut_to - splice_to);
var n__9121__auto___21610 = l__21240__auto___21609;
var i__21241__auto___21611 = (0);
while(true){
if((i__21241__auto___21611 < n__9121__auto___21610)){
(new_arr[(i__21241__auto___21611 + l1xs)] = (arr[(i__21241__auto___21611 + splice_to)]));

var G__21612 = (i__21241__auto___21611 + (1));
i__21241__auto___21611 = G__21612;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function datascript$btset$cut(var_args){
var G__21614 = arguments.length;
switch (G__21614) {
case 2:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datascript.btset.cut.cljs$lang$maxFixedArity = 3;

datascript.btset.splice = (function datascript$btset$splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice(arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function datascript$btset$insert(arr,idx,xs){
return datascript.btset.cut_n_splice(arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function datascript$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = datascript.arrays.make_array(r1_l);
var r2 = datascript.arrays.make_array(r2_l);
if((a1_l <= r1_l)){
var l__21240__auto___21616 = (a1_l - (0));
var n__9121__auto___21617 = l__21240__auto___21616;
var i__21241__auto___21618 = (0);
while(true){
if((i__21241__auto___21618 < n__9121__auto___21617)){
(r1[(i__21241__auto___21618 + (0))] = (a1[(i__21241__auto___21618 + (0))]));

var G__21619 = (i__21241__auto___21618 + (1));
i__21241__auto___21618 = G__21619;
continue;
} else {
}
break;
}

var l__21240__auto___21620 = ((r1_l - a1_l) - (0));
var n__9121__auto___21621 = l__21240__auto___21620;
var i__21241__auto___21622 = (0);
while(true){
if((i__21241__auto___21622 < n__9121__auto___21621)){
(r1[(i__21241__auto___21622 + a1_l)] = (a2[(i__21241__auto___21622 + (0))]));

var G__21623 = (i__21241__auto___21622 + (1));
i__21241__auto___21622 = G__21623;
continue;
} else {
}
break;
}

var l__21240__auto___21624 = (a2_l - (r1_l - a1_l));
var n__9121__auto___21625 = l__21240__auto___21624;
var i__21241__auto___21626 = (0);
while(true){
if((i__21241__auto___21626 < n__9121__auto___21625)){
(r2[(i__21241__auto___21626 + (0))] = (a2[(i__21241__auto___21626 + (r1_l - a1_l))]));

var G__21627 = (i__21241__auto___21626 + (1));
i__21241__auto___21626 = G__21627;
continue;
} else {
}
break;
}
} else {
var l__21240__auto___21628 = (r1_l - (0));
var n__9121__auto___21629 = l__21240__auto___21628;
var i__21241__auto___21630 = (0);
while(true){
if((i__21241__auto___21630 < n__9121__auto___21629)){
(r1[(i__21241__auto___21630 + (0))] = (a1[(i__21241__auto___21630 + (0))]));

var G__21631 = (i__21241__auto___21630 + (1));
i__21241__auto___21630 = G__21631;
continue;
} else {
}
break;
}

var l__21240__auto___21632 = (a1_l - r1_l);
var n__9121__auto___21633 = l__21240__auto___21632;
var i__21241__auto___21634 = (0);
while(true){
if((i__21241__auto___21634 < n__9121__auto___21633)){
(r2[(i__21241__auto___21634 + (0))] = (a1[(i__21241__auto___21634 + r1_l)]));

var G__21635 = (i__21241__auto___21634 + (1));
i__21241__auto___21634 = G__21635;
continue;
} else {
}
break;
}

var l__21240__auto___21636 = (a2_l - (0));
var n__9121__auto___21637 = l__21240__auto___21636;
var i__21241__auto___21638 = (0);
while(true){
if((i__21241__auto___21638 < n__9121__auto___21637)){
(r2[(i__21241__auto___21638 + (a1_l - r1_l))] = (a2[(i__21241__auto___21638 + (0))]));

var G__21639 = (i__21241__auto___21638 + (1));
i__21241__auto___21638 = G__21639;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
datascript.btset.eq_arr = (function datascript$btset$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__8087__auto__ = (len === (a2_to - a2_from));
if(and__8087__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === (function (){var G__21642 = (a1[(i + a1_from)]);
var G__21643 = (a2[(i + a2_from)]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__21642,G__21643) : cmp.call(null,G__21642,G__21643));
})()))){
return false;
} else {
var G__21644 = (i + (1));
i = G__21644;
continue;

}
}
break;
}
} else {
return and__8087__auto__;
}
});
datascript.btset.check_n_splice = (function datascript$btset$check_n_splice(cmp,arr,from,to,new_arr){
if(datascript.btset.eq_arr(cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return datascript.btset.splice(arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function datascript$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_21646 = (0);
while(true){
if((i_21646 < len)){
(arr[i_21646] = (function (){var G__21645 = (arr[i_21646]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21645) : f.call(null,G__21645));
})());

var G__21647 = (i_21646 + (1));
i_21646 = G__21647;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datascript.btset.arr_partition_approx = (function datascript$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.avg_len;
var len = arr.length;
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_21648 = (0);
while(true){
var rest_21649 = (len - pos_21648);
if((rest_21649 <= max_len)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,datascript.btset.cut.cljs$core$IFn$_invoke$arity$2(arr,pos_21648));
} else {
if((rest_21649 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(arr,pos_21648,(pos_21648 + chunk_len)));

var G__21650 = (pos_21648 + chunk_len);
pos_21648 = G__21650;
continue;
} else {
var piece_len_21651 = (rest_21649 >>> (1));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(arr,pos_21648,(pos_21648 + piece_len_21651)));

var G__21652 = (pos_21648 + piece_len_21651);
pos_21648 = G__21652;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array(cljs.core.persistent_BANG_(acc));
});
datascript.btset.sorted_arr_distinct_QMARK_ = (function datascript$btset$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null,e,p)))){
return false;
} else {
var G__21653 = (i + (1));
var G__21654 = e;
i = G__21653;
p = G__21654;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
datascript.btset.sorted_arr_distinct = (function datascript$btset$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(datascript.btset.sorted_arr_distinct_QMARK_(arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(acc));
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null,e,p)))){
var G__21655 = acc;
var G__21656 = (i + (1));
var G__21657 = e;
acc = G__21655;
i = G__21656;
p = G__21657;
continue;
} else {
var G__21658 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,e);
var G__21659 = (i + (1));
var G__21660 = e;
acc = G__21658;
i = G__21659;
p = G__21660;
continue;
}
}
break;
}
}
});
/**
 * Drop non-nil references and return array of arguments
 */
datascript.btset.return_array = (function datascript$btset$return_array(var_args){
var G__21662 = arguments.length;
switch (G__21662) {
case 1:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datascript.btset.return_array.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
datascript.btset.INode = function(){};

datascript.btset.node_lim_key = (function datascript$btset$node_lim_key(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lim_key$arity$1 == null)))){
return _.datascript$btset$INode$node_lim_key$arity$1(_);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_lim_key[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8819__auto__.call(null,_));
} else {
var m__8819__auto____$1 = (datascript.btset.node_lim_key["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8819__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INode.node-lim-key",_);
}
}
}
});

datascript.btset.node_len = (function datascript$btset$node_len(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_len$arity$1 == null)))){
return _.datascript$btset$INode$node_len$arity$1(_);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_len[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8819__auto__.call(null,_));
} else {
var m__8819__auto____$1 = (datascript.btset.node_len["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8819__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INode.node-len",_);
}
}
}
});

datascript.btset.node_merge = (function datascript$btset$node_merge(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge$arity$2 == null)))){
return _.datascript$btset$INode$node_merge$arity$2(_,next);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_merge[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__8819__auto__.call(null,_,next));
} else {
var m__8819__auto____$1 = (datascript.btset.node_merge["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(_,next) : m__8819__auto____$1.call(null,_,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge",_);
}
}
}
});

datascript.btset.node_merge_n_split = (function datascript$btset$node_merge_n_split(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge_n_split$arity$2 == null)))){
return _.datascript$btset$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_merge_n_split[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__8819__auto__.call(null,_,next));
} else {
var m__8819__auto____$1 = (datascript.btset.node_merge_n_split["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$2(_,next) : m__8819__auto____$1.call(null,_,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge-n-split",_);
}
}
}
});

datascript.btset.node_lookup = (function datascript$btset$node_lookup(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lookup$arity$3 == null)))){
return _.datascript$btset$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_lookup[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__8819__auto__.call(null,_,cmp,key));
} else {
var m__8819__auto____$1 = (datascript.btset.node_lookup["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__8819__auto____$1.call(null,_,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-lookup",_);
}
}
}
});

datascript.btset.node_conj = (function datascript$btset$node_conj(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_conj$arity$3 == null)))){
return _.datascript$btset$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_conj[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__8819__auto__.call(null,_,cmp,key));
} else {
var m__8819__auto____$1 = (datascript.btset.node_conj["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__8819__auto____$1.call(null,_,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-conj",_);
}
}
}
});

datascript.btset.node_disj = (function datascript$btset$node_disj(_,cmp,key,root_QMARK_,left,right){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_disj$arity$6 == null)))){
return _.datascript$btset$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__8818__auto__ = (((_ == null))?null:_);
var m__8819__auto__ = (datascript.btset.node_disj[goog.typeOf(x__8818__auto__)]);
if(!((m__8819__auto__ == null))){
return (m__8819__auto__.cljs$core$IFn$_invoke$arity$6 ? m__8819__auto__.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__8819__auto__.call(null,_,cmp,key,root_QMARK_,left,right));
} else {
var m__8819__auto____$1 = (datascript.btset.node_disj["_"]);
if(!((m__8819__auto____$1 == null))){
return (m__8819__auto____$1.cljs$core$IFn$_invoke$arity$6 ? m__8819__auto____$1.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__8819__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right));
} else {
throw cljs.core.missing_protocol("INode.node-disj",_);
}
}
}
});

datascript.btset.rotate = (function datascript$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1(node);
} else {
if((datascript.btset.node_len(node) > (16))){
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3(left,node,right);
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = left;
if(cljs.core.truth_(and__8087__auto__)){
return (datascript.btset.node_len(left) <= (16));
} else {
return and__8087__auto__;
}
})())){
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2(datascript.btset.node_merge(left,node),right);
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = right;
if(cljs.core.truth_(and__8087__auto__)){
return (datascript.btset.node_len(right) <= (16));
} else {
return and__8087__auto__;
}
})())){
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2(left,datascript.btset.node_merge(node,right));
} else {
if(cljs.core.truth_((function (){var and__8087__auto__ = left;
if(cljs.core.truth_(and__8087__auto__)){
return ((right == null)) || ((datascript.btset.node_len(left) < datascript.btset.node_len(right)));
} else {
return and__8087__auto__;
}
})())){
var nodes = datascript.btset.node_merge_n_split(left,node);
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = datascript.btset.node_merge_n_split(node,right);
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3(left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
});
datascript.btset.Node.prototype.datascript$btset$INode$ = cljs.core.PROTOCOL_SENTINEL;

datascript.btset.Node.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast(self__.keys);
});

datascript.btset.Node.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Node(datascript.arrays.aconcat(self__.keys,next.keys),datascript.arrays.aconcat(self__.pointers,next.pointers)));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split(self__.keys,next.keys);
var ps = datascript.btset.merge_n_split(self__.pointers,next.pointers);
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return datascript.btset.node_lookup((self__.pointers[idx]),cmp,key);
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l(cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = datascript.btset.node_conj((self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice(cmp,self__.keys,idx,(idx + (1)),datascript.arrays.amap(datascript.btset.node_lim_key,nodes));
var new_pointers = datascript.btset.splice(self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= (32))){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new datascript.btset.Node(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(new_keys,(0),middle),datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.cljs$core$IFn$_invoke$arity$2(new_keys,middle),datascript.btset.cut.cljs$core$IFn$_invoke$arity$2(new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = datascript.btset.node_disj(child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice(cmp,self__.keys,left_idx,right_idx,datascript.arrays.amap(datascript.btset.node_lim_key,disjned));
var new_pointers = datascript.btset.splice(self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate((new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$pointers], null);
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function datascript$btset$__GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Leaf = (function (keys){
this.keys = keys;
});
datascript.btset.Leaf.prototype.datascript$btset$INode$ = cljs.core.PROTOCOL_SENTINEL;

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast(self__.keys);
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Leaf(datascript.arrays.aconcat(self__.keys,next.keys)));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split(self__.keys,next.keys);
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((new datascript.btset.Leaf((ks[(0)]))),(new datascript.btset.Leaf((ks[(1)]))));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l(cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (((0) === (function (){var G__21666 = key;
var G__21667 = (self__.keys[idx]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__21666,G__21667) : cmp.call(null,G__21666,G__21667));
})()))){
return null;
} else {
if((keys_l === (32))){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new datascript.btset.Leaf(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(self__.keys,(0),middle))),(new datascript.btset.Leaf(datascript.btset.cut_n_splice(self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.Leaf(datascript.btset.cut_n_splice(self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.Leaf(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.Leaf(datascript.btset.splice(self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice(self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate((new datascript.btset.Leaf(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys], null);
});

datascript.btset.Leaf.cljs$lang$type = true;

datascript.btset.Leaf.cljs$lang$ctorStr = "datascript.btset/Leaf";

datascript.btset.Leaf.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.btset/Leaf");
});

datascript.btset.__GT_Leaf = (function datascript$btset$__GT_Leaf(keys){
return (new datascript.btset.Leaf(keys));
});

datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
return null;
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
return null;
});
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
return null;
});
datascript.btset.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {datascript.btset.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return datascript.btset.node_lookup(self__.root,self__.comparator,k);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__8099__auto__ = datascript.btset.node_lookup(self__.root,self__.comparator,k);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return not_found;
}
});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq(this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq((datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.btset_iter.call(null,this$__$1)));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__8541__auto__ = self__.__hash;
if(!((h__8541__auto__ == null))){
return h__8541__auto__;
} else {
var h__8541__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
self__.__hash = h__8541__auto____$1;

return h__8541__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((self__.cnt === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (this$__$1){
return (function (p1__21668_SHARP_){
return cljs.core.contains_QMARK_(this$__$1,p1__21668_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),self__.comparator,self__.meta,null));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.btset_disj.cljs$core$IFn$_invoke$arity$3 ? datascript.btset.btset_disj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : datascript.btset.btset_disj.call(null,this$__$1,key,self__.comparator));
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__5276__auto__ = (datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.btset_iter.call(null,this$__$1));
if(cljs.core.truth_(temp__5276__auto__)){
var i = temp__5276__auto__;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(i,f);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__5276__auto__ = (datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.btset_iter.call(null,this$__$1));
if(cljs.core.truth_(temp__5276__auto__)){
var i = temp__5276__auto__;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(i,f,start);
} else {
return start;
}
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.btset_conj.cljs$core$IFn$_invoke$arity$3 ? datascript.btset.btset_conj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : datascript.btset.btset_conj.call(null,this$__$1,key,self__.comparator));
});

datascript.btset.BTSet.prototype.call = (function() {
var G__21671 = null;
var G__21671__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21671__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21671 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21671__2.call(this,self__,k);
case 3:
return G__21671__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21671.cljs$core$IFn$_invoke$arity$2 = G__21671__2;
G__21671.cljs$core$IFn$_invoke$arity$3 = G__21671__3;
return G__21671;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args21670){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21670)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

datascript.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$root,cljs.core.cst$sym$shift,cljs.core.cst$sym$cnt,cljs.core.cst$sym$comparator,cljs.core.cst$sym$meta,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function datascript$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function datascript$btset$alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
datascript.btset.keys_for = (function datascript$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__21672 = (level - datascript.btset.level_shift);
var G__21673 = (node.pointers[datascript.btset.path_get(path,level)]);
level = G__21672;
node = G__21673;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
var roots = datascript.btset.node_conj(set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset(set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset(set,(new datascript.btset.Node(datascript.arrays.amap(datascript.btset.node_lim_key,roots),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
var new_roots = datascript.btset.node_disj(set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && (((1) === new_root.pointers.length))){
return datascript.btset.alter_btset(set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset(set,new_root,set.shift,(set.cnt - (1)));
}
}
});
datascript.btset._next_path = (function datascript$btset$_next_path(node,path,level){
var idx = datascript.btset.path_get(path,level);
if((level > (0))){
var sub_path = (function (){var G__21674 = (node.pointers[idx]);
var G__21675 = path;
var G__21676 = (level - datascript.btset.level_shift);
return (datascript.btset._next_path.cljs$core$IFn$_invoke$arity$3 ? datascript.btset._next_path.cljs$core$IFn$_invoke$arity$3(G__21674,G__21675,G__21676) : datascript.btset._next_path.call(null,G__21674,G__21675,G__21676));
})();
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set((0),level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set(sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set((0),(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datascript.btset.next_path = (function datascript$btset$next_path(set,path){
return datascript.btset._next_path(set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datascript.btset._rpath = (function datascript$btset$_rpath(node,level){
var node__$1 = node;
var path = (0);
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__21677 = datascript.btset.alast(node__$1.pointers);
var G__21678 = datascript.btset.path_set(path,level__$1,(node__$1.pointers.length - (1)));
var G__21679 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__21677;
path = G__21678;
level__$1 = G__21679;
continue;
} else {
return datascript.btset.path_set(path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function datascript$btset$_prev_path(node,path,level){
var idx = datascript.btset.path_get(path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = (function (){var G__21680 = (node.pointers[idx]);
var G__21681 = path;
var G__21682 = sub_level;
return (datascript.btset._prev_path.cljs$core$IFn$_invoke$arity$3 ? datascript.btset._prev_path.cljs$core$IFn$_invoke$arity$3(G__21680,G__21681,G__21682) : datascript.btset._prev_path.call(null,G__21680,G__21681,G__21682));
})();
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath((node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set(sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set(sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set((0),(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datascript.btset.prev_path = (function datascript$btset$prev_path(set,path){
return datascript.btset._prev_path(set.root,path,set.shift);
});
datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return null;
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
return null;
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
return null;
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
return null;
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
return null;
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
return null;
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var G__21684 = arguments.length;
switch (G__21684) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
return null;
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
return null;
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;

datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return null;
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
return null;
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
return null;
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
return null;
});
/**
 * Iterator that represents whole set
 */
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
if((datascript.btset.node_len(set.root) > (0))){
var left = (0);
var right = (datascript.btset._rpath(set.root,set.shift) + (1));
return (datascript.btset.iter.cljs$core$IFn$_invoke$arity$3 ? datascript.btset.iter.cljs$core$IFn$_invoke$arity$3(set,left,right) : datascript.btset.iter.call(null,set,left,right));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
datascript.btset.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_first.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_first.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_first.call(null,this$__$1));
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__8099__auto__ = (datascript.btset.iter_next.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_next.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_next.call(null,this$__$1));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_next.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_next.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_next.call(null,this$__$1));
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_chunk.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_chunk.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_chunk.call(null,this$__$1));
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__8099__auto__ = this$__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_chunked_next.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_chunked_next.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_chunked_next.call(null,this$__$1));
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 ? datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f) : datascript.btset.iter_reduce.call(null,this$__$1,f));
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 ? datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start) : datascript.btset.iter_reduce.call(null,this$__$1,f,start));
});

datascript.btset.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.iter_rseq.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.iter_rseq.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.iter_rseq.call(null,this$__$1));
});

datascript.btset.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$set,cljs.core.with_meta(cljs.core.cst$sym$left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.cst$sym$keys,cljs.core.with_meta(cljs.core.cst$sym$idx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

datascript.btset.Iter.cljs$lang$type = true;

datascript.btset.Iter.cljs$lang$ctorStr = "datascript.btset/Iter";

datascript.btset.Iter.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.btset/Iter");
});

datascript.btset.__GT_Iter = (function datascript$btset$__GT_Iter(set,left,right,keys,idx){
return (new datascript.btset.Iter(set,left,right,keys,idx));
});

datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return (new datascript.btset.Iter(set,left,right,datascript.btset.keys_for(set,left),datascript.btset.path_get(left,(0))));
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
if(cljs.core.truth_(iter.keys)){
return (iter.keys[iter.idx]);
} else {
return null;
}
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
if(cljs.core.truth_(keys)){
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
return (new datascript.btset.Iter(set,(left + (1)),right,keys,(idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path(set,left);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter(set,left__$1,right);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var end_idx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((left | datascript.btset.path_mask),(right | datascript.btset.path_mask)))?(right & datascript.btset.path_mask):keys.length);
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$3(keys,idx,end_idx);
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var left__$1 = datascript.btset.next_path(set,(left + ((keys.length - idx) - (1))));
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter(set,left__$1,right);
} else {
return null;
}
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
if(cljs.core.truth_(iter.keys)){
var G__21686 = set;
var G__21687 = datascript.btset.prev_path(set,left);
var G__21688 = datascript.btset.prev_path(set,right);
return (datascript.btset.riter.cljs$core$IFn$_invoke$arity$3 ? datascript.btset.riter.cljs$core$IFn$_invoke$arity$3(G__21686,G__21687,G__21688) : datascript.btset.riter.call(null,G__21686,G__21687,G__21688));
} else {
return null;
}
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var G__21690 = arguments.length;
switch (G__21690) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
if((iter.keys == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var first = datascript.btset.iter_first(iter);
var temp__5276__auto__ = datascript.btset.iter_next(iter);
if(cljs.core.truth_(temp__5276__auto__)){
var next = temp__5276__auto__;
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3(next,f,first);
} else {
return first;
}
}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
var set = iter.set;
var right = iter.right;
var left = iter.left;
var keys = iter.keys;
var idx = iter.idx;
var acc = start;
while(true){
if((keys == null)){
return acc;
} else {
var new_acc = (function (){var G__21691 = acc;
var G__21692 = (keys[idx]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21691,G__21692) : f.call(null,G__21691,G__21692));
})();
if(cljs.core.reduced_QMARK_(new_acc)){
return cljs.core.deref(new_acc);
} else {
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
var G__21694 = (left + (1));
var G__21695 = keys;
var G__21696 = (idx + (1));
var G__21697 = new_acc;
left = G__21694;
keys = G__21695;
idx = G__21696;
acc = G__21697;
continue;
} else {
return new_acc;
}
} else {
var new_left = datascript.btset.next_path(set,left);
if((!(((-1) === new_left))) && ((new_left < right))){
var G__21698 = new_left;
var G__21699 = datascript.btset.keys_for(set,new_left);
var G__21700 = datascript.btset.path_get(new_left,(0));
var G__21701 = new_acc;
left = G__21698;
keys = G__21699;
idx = G__21700;
acc = G__21701;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
*/
datascript.btset.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.btset.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.riter_first.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.riter_first.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.riter_first.call(null,this$__$1));
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__8099__auto__ = (datascript.btset.riter_next.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.riter_next.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.riter_next.call(null,this$__$1));
if(cljs.core.truth_(or__8099__auto__)){
return or__8099__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.riter_next.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.riter_next.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.riter_next.call(null,this$__$1));
});

datascript.btset.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.btset.riter_rseq.cljs$core$IFn$_invoke$arity$1 ? datascript.btset.riter_rseq.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.btset.riter_rseq.call(null,this$__$1));
});

datascript.btset.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$set,cljs.core.with_meta(cljs.core.cst$sym$left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.cst$sym$keys,cljs.core.with_meta(cljs.core.cst$sym$idx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

datascript.btset.ReverseIter.cljs$lang$type = true;

datascript.btset.ReverseIter.cljs$lang$ctorStr = "datascript.btset/ReverseIter";

datascript.btset.ReverseIter.cljs$lang$ctorPrWriter = (function (this__8756__auto__,writer__8757__auto__,opt__8758__auto__){
return cljs.core._write(writer__8757__auto__,"datascript.btset/ReverseIter");
});

datascript.btset.__GT_ReverseIter = (function datascript$btset$__GT_ReverseIter(set,left,right,keys,idx){
return (new datascript.btset.ReverseIter(set,left,right,keys,idx));
});

datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return (new datascript.btset.ReverseIter(set,left,right,datascript.btset.keys_for(set,right),datascript.btset.path_get(right,(0))));
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
if(cljs.core.truth_(riter.keys)){
return (riter.keys[riter.idx]);
} else {
return null;
}
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
var set = ri.set;
var left = ri.left;
var right = ri.right;
var keys = ri.keys;
var idx = ri.idx;
if(cljs.core.truth_(keys)){
if(((idx - (1)) >= (0))){
if(((right - (1)) > left)){
return (new datascript.btset.ReverseIter(set,left,(right - (1)),keys,(idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path(set,right);
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),right__$1)) && ((right__$1 > left))){
return datascript.btset.riter(set,left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
var set = riter.set;
var left = riter.left;
var right = riter.right;
if(cljs.core.truth_(cljs.core.keys)){
var new_left = (((left === (-1)))?(0):datascript.btset.next_path(set,left));
var new_right = datascript.btset.next_path(set,right);
var new_right__$1 = (((new_right === (-1)))?(right + (1)):new_right);
return datascript.btset.iter(set,new_left,new_right__$1);
} else {
return null;
}
});
datascript.btset._distance = (function datascript$btset$_distance(node,left,right,level){
var idx_l = datascript.btset.path_get(left,level);
var idx_r = datascript.btset.path_get(right,level);
if((level > (0))){
if((idx_l === idx_r)){
var G__21702 = (node.pointers[idx_l]);
var G__21703 = left;
var G__21704 = right;
var G__21705 = (level - datascript.btset.level_shift);
return (datascript.btset._distance.cljs$core$IFn$_invoke$arity$4 ? datascript.btset._distance.cljs$core$IFn$_invoke$arity$4(G__21702,G__21703,G__21704,G__21705) : datascript.btset._distance.call(null,G__21702,G__21703,G__21704,G__21705));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__21706 = (level__$1 - datascript.btset.level_shift);
var G__21707 = (res * datascript.btset.avg_len);
level__$1 = G__21706;
res = G__21707;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datascript.btset.distance = (function datascript$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datascript.btset.next_path(set,path_l) === path_r)){
return (1);
} else {
return datascript.btset._distance(set.root,path_l,path_r,set.shift);

}
}
}
});
datascript.btset.est_count = (function datascript$btset$est_count(iter){
return datascript.btset.distance(iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datascript.btset._seek = (function datascript$btset$_seek(set,key){
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_l(set.comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set(path,(0),idx);
}
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_l(set.comparator,keys,(keys_l - (2)),key);
var G__21708 = (node.pointers[idx]);
var G__21709 = datascript.btset.path_set(path,level,idx);
var G__21710 = (level - datascript.btset.level_shift);
node = G__21708;
path = G__21709;
level = G__21710;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datascript.btset._rseek = (function datascript$btset$_rseek(set,key){
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_r(set.comparator,keys,(keys_l - (1)),key);
return datascript.btset.path_set(path,(0),idx);
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_r(set.comparator,keys,(keys_l - (2)),key);
var G__21711 = (node.pointers[idx]);
var G__21712 = datascript.btset.path_set(path,level,idx);
var G__21713 = (level - datascript.btset.level_shift);
node = G__21711;
path = G__21712;
level = G__21713;
continue;
}
break;
}
});
datascript.btset._slice = (function datascript$btset$_slice(set,key_from,key_to){
var path = datascript.btset._seek(set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek(set,key_to);
if((till_path > path)){
return (new datascript.btset.Iter(set,path,till_path,datascript.btset.keys_for(set,path),datascript.btset.path_get(path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datascript.btset.slice = (function datascript$btset$slice(var_args){
var G__21715 = arguments.length;
switch (G__21715) {
case 2:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(set,key,key);
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return datascript.btset._slice(set,key_from,key_to);
});

datascript.btset.slice.cljs$lang$maxFixedArity = 3;

datascript.btset._btset_from_sorted_arr = (function datascript$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace((function (p1__21717_SHARP_){
return (new datascript.btset.Leaf(p1__21717_SHARP_));
}),datascript.btset.arr_partition_approx((16),(32),arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__21719 = cljs.core.count(current_level);
switch (G__21719) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,null));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first(current_level),shift,arr.length,cmp,null,null));

break;
default:
var G__21721 = datascript.btset.arr_map_inplace(((function (current_level,shift,G__21719,leafs){
return (function (p1__21718_SHARP_){
return (new datascript.btset.Node(datascript.arrays.amap(datascript.btset.node_lim_key,p1__21718_SHARP_),p1__21718_SHARP_));
});})(current_level,shift,G__21719,leafs))
,datascript.btset.arr_partition_approx((16),(32),current_level));
var G__21722 = (shift + datascript.btset.level_shift);
current_level = G__21721;
shift = G__21722;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function datascript$btset$_btset_from_seq(seq,cmp){
var arr = datascript.btset.sorted_arr_distinct(datascript.arrays.asort(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(seq),cmp),cmp);
return datascript.btset._btset_from_sorted_arr(arr,cmp);
});
datascript.btset.btset_by = (function datascript$btset$btset_by(var_args){
var G__21726 = arguments.length;
switch (G__21726) {
case 1:
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___21728 = arguments.length;
var i__9333__auto___21729 = (0);
while(true){
if((i__9333__auto___21729 < len__9332__auto___21728)){
args_arr__9355__auto__.push((arguments[i__9333__auto___21729]));

var G__21730 = (i__9333__auto___21729 + (1));
i__9333__auto___21729 = G__21730;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((1)),(0),null));
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9356__auto__);

}
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,null));
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datascript.btset._btset_from_seq(keys,cmp);
});

datascript.btset.btset_by.cljs$lang$applyTo = (function (seq21724){
var G__21725 = cljs.core.first(seq21724);
var seq21724__$1 = cljs.core.next(seq21724);
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__21725,seq21724__$1);
});

datascript.btset.btset_by.cljs$lang$maxFixedArity = (1);

datascript.btset.btset = (function datascript$btset$btset(var_args){
var G__21733 = arguments.length;
switch (G__21733) {
case 0:
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__9355__auto__ = [];
var len__9332__auto___21735 = arguments.length;
var i__9333__auto___21736 = (0);
while(true){
if((i__9333__auto___21736 < len__9332__auto___21735)){
args_arr__9355__auto__.push((arguments[i__9333__auto___21736]));

var G__21737 = (i__9333__auto___21736 + (1));
i__9333__auto___21736 = G__21737;
continue;
} else {
}
break;
}

var argseq__9356__auto__ = (new cljs.core.IndexedSeq(args_arr__9355__auto__.slice((0)),(0),null));
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__9356__auto__);

}
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datascript.btset._btset_from_seq(keys,cljs.core.compare);
});

datascript.btset.btset.cljs$lang$applyTo = (function (seq21732){
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21732));
});

datascript.btset.btset.cljs$lang$maxFixedArity = (0);

