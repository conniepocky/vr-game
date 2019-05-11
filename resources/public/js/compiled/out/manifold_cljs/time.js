// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.time');
goog.require('cljs.core');
goog.require('manifold_cljs.deferred.default_impl');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.deferred.core');
manifold_cljs.time.current_millis = (function manifold_cljs$time$current_millis(){
return (new Date()).getTime();
});
/**
 * Converts nanoseconds -> milliseconds
 */
manifold_cljs.time.nanoseconds = (function manifold_cljs$time$nanoseconds(n){
return (n / 1000000.0);
});
/**
 * Converts microseconds -> milliseconds
 */
manifold_cljs.time.microseconds = (function manifold_cljs$time$microseconds(n){
return (n / 1000.0);
});
/**
 * Converts milliseconds -> milliseconds
 */
manifold_cljs.time.milliseconds = (function manifold_cljs$time$milliseconds(n){
return n;
});
/**
 * Converts seconds -> milliseconds
 */
manifold_cljs.time.seconds = (function manifold_cljs$time$seconds(n){
return (n * 1000.0);
});
/**
 * Converts minutes -> milliseconds
 */
manifold_cljs.time.minutes = (function manifold_cljs$time$minutes(n){
return (n * 60000.0);
});
/**
 * Converts hours -> milliseconds
 */
manifold_cljs.time.hours = (function manifold_cljs$time$hours(n){
return (n * 3600000.0);
});
/**
 * Converts days -> milliseconds
 */
manifold_cljs.time.days = (function manifold_cljs$time$days(n){
return (n * 8.64E7);
});
/**
 * Converts frequency -> period in milliseconds
 */
manifold_cljs.time.hz = (function manifold_cljs$time$hz(n){
return (1000.0 / n);
});
/**
 * Schedules no-arg function `f` to be invoked in `interval` milliseconds.  Returns a deferred
 *   representing the returned value of the function.
 */
manifold_cljs.time.in$ = (function manifold_cljs$time$in(interval,f){
var d = manifold_cljs.deferred.default_impl.deferred.call(null,manifold_cljs.executor.executor.call(null));
var f__$1 = ((function (d){
return (function (){
try{return manifold_cljs.deferred.core.success.call(null,d,f.call(null));
}catch (e22111){if((e22111 instanceof Error)){
var e = e22111;
return manifold_cljs.deferred.core.error.call(null,d,e);
} else {
throw e22111;

}
}});})(d))
;
setTimeout(f__$1,interval);

return d;
});
/**
 * Schedules no-arg function `f` to be invoked every `period` milliseconds, after `initial-delay`
 *   milliseconds, which defaults to `0`.  Returns a zero-argument function which, when invoked,
 *   cancels the repeated invocation.
 * 
 *   If the invocation of `f` ever throws an exception, repeated invocation is automatically
 *   cancelled.
 */
manifold_cljs.time.every = (function manifold_cljs$time$every(var_args){
var G__22113 = arguments.length;
switch (G__22113) {
case 2:
return manifold_cljs.time.every.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.time.every.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.time.every.cljs$core$IFn$_invoke$arity$2 = (function (period_ms,f){
return manifold_cljs.time.every.call(null,period_ms,(0),f);
});

manifold_cljs.time.every.cljs$core$IFn$_invoke$arity$3 = (function (period_ms,initial_delay_ms,f){
var continue_QMARK_ = cljs.core.atom.call(null,true);
var stop_f = ((function (continue_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,continue_QMARK_,false);
});})(continue_QMARK_))
;
setTimeout(((function (continue_QMARK_,stop_f){
return (function manifold_cljs$time$this(){
if(cljs.core.truth_(cljs.core.deref.call(null,continue_QMARK_))){
f.call(null);

return setTimeout(manifold_cljs$time$this,period_ms);
} else {
return null;
}
});})(continue_QMARK_,stop_f))
,initial_delay_ms);

return stop_f;
});

manifold_cljs.time.every.cljs$lang$maxFixedArity = 3;

/**
 * Schedules no-arg function  `f` to be invoked at `timestamp`, which is the milliseconds
 * since the epoch.  Returns a deferred representing the returned value of the function.
 */
manifold_cljs.time.at = (function manifold_cljs$time$at(timestamp,f){
return manifold_cljs.time.in$.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (timestamp - manifold_cljs.time.current_millis.call(null));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),f);
});

//# sourceMappingURL=time.js.map?rel=1557582872219
