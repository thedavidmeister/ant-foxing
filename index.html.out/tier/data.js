// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('tier.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
tier.data.default_ratio = 0.3;
tier.data.default_tier = (1);
/**
 * Parse a currency tier from user input
 */
tier.data.parse_tier = (function tier$data$parse_tier(i){
var _PERCENT_ = (function (){var n = parseInt(i,(10));
if(cljs.core.truth_(wheel.math.number.nan_QMARK_(n))){
return tier.data.default_tier;
} else {
return n;
}
})();
if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
