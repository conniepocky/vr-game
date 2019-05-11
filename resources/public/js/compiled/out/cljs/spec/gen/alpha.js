// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36210 = arguments.length;
var i__4500__auto___36211 = (0);
while(true){
if((i__4500__auto___36211 < len__4499__auto___36210)){
args__4502__auto__.push((arguments[i__4500__auto___36211]));

var G__36212 = (i__4500__auto___36211 + (1));
i__4500__auto___36211 = G__36212;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36209){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36209));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36214 = arguments.length;
var i__4500__auto___36215 = (0);
while(true){
if((i__4500__auto___36215 < len__4499__auto___36214)){
args__4502__auto__.push((arguments[i__4500__auto___36215]));

var G__36216 = (i__4500__auto___36215 + (1));
i__4500__auto___36215 = G__36216;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36213){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36213));
});

var g_QMARK__36217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_36218 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36217){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__36217))
,null));
var mkg_36219 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36217,g_36218){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__36217,g_36218))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36217,g_36218,mkg_36219){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36217).call(null,x);
});})(g_QMARK__36217,g_36218,mkg_36219))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36217,g_36218,mkg_36219){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36219).call(null,gfn);
});})(g_QMARK__36217,g_36218,mkg_36219))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36217,g_36218,mkg_36219){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36218).call(null,generator);
});})(g_QMARK__36217,g_36218,mkg_36219))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21462__auto___36239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21462__auto___36239){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36240 = arguments.length;
var i__4500__auto___36241 = (0);
while(true){
if((i__4500__auto___36241 < len__4499__auto___36240)){
args__4502__auto__.push((arguments[i__4500__auto___36241]));

var G__36242 = (i__4500__auto___36241 + (1));
i__4500__auto___36241 = G__36242;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36239))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36239),args);
});})(g__21462__auto___36239))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21462__auto___36239){
return (function (seq36220){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36220));
});})(g__21462__auto___36239))
;


var g__21462__auto___36243 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21462__auto___36243){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36244 = arguments.length;
var i__4500__auto___36245 = (0);
while(true){
if((i__4500__auto___36245 < len__4499__auto___36244)){
args__4502__auto__.push((arguments[i__4500__auto___36245]));

var G__36246 = (i__4500__auto___36245 + (1));
i__4500__auto___36245 = G__36246;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36243))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36243),args);
});})(g__21462__auto___36243))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21462__auto___36243){
return (function (seq36221){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36221));
});})(g__21462__auto___36243))
;


var g__21462__auto___36247 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21462__auto___36247){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36248 = arguments.length;
var i__4500__auto___36249 = (0);
while(true){
if((i__4500__auto___36249 < len__4499__auto___36248)){
args__4502__auto__.push((arguments[i__4500__auto___36249]));

var G__36250 = (i__4500__auto___36249 + (1));
i__4500__auto___36249 = G__36250;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36247))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36247),args);
});})(g__21462__auto___36247))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21462__auto___36247){
return (function (seq36222){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36222));
});})(g__21462__auto___36247))
;


var g__21462__auto___36251 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21462__auto___36251){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36252 = arguments.length;
var i__4500__auto___36253 = (0);
while(true){
if((i__4500__auto___36253 < len__4499__auto___36252)){
args__4502__auto__.push((arguments[i__4500__auto___36253]));

var G__36254 = (i__4500__auto___36253 + (1));
i__4500__auto___36253 = G__36254;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36251))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36251),args);
});})(g__21462__auto___36251))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21462__auto___36251){
return (function (seq36223){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36223));
});})(g__21462__auto___36251))
;


var g__21462__auto___36255 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21462__auto___36255){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36256 = arguments.length;
var i__4500__auto___36257 = (0);
while(true){
if((i__4500__auto___36257 < len__4499__auto___36256)){
args__4502__auto__.push((arguments[i__4500__auto___36257]));

var G__36258 = (i__4500__auto___36257 + (1));
i__4500__auto___36257 = G__36258;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36255))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36255),args);
});})(g__21462__auto___36255))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21462__auto___36255){
return (function (seq36224){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36224));
});})(g__21462__auto___36255))
;


var g__21462__auto___36259 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21462__auto___36259){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36260 = arguments.length;
var i__4500__auto___36261 = (0);
while(true){
if((i__4500__auto___36261 < len__4499__auto___36260)){
args__4502__auto__.push((arguments[i__4500__auto___36261]));

var G__36262 = (i__4500__auto___36261 + (1));
i__4500__auto___36261 = G__36262;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36259))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36259),args);
});})(g__21462__auto___36259))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21462__auto___36259){
return (function (seq36225){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36225));
});})(g__21462__auto___36259))
;


var g__21462__auto___36263 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21462__auto___36263){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36264 = arguments.length;
var i__4500__auto___36265 = (0);
while(true){
if((i__4500__auto___36265 < len__4499__auto___36264)){
args__4502__auto__.push((arguments[i__4500__auto___36265]));

var G__36266 = (i__4500__auto___36265 + (1));
i__4500__auto___36265 = G__36266;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36263))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36263),args);
});})(g__21462__auto___36263))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21462__auto___36263){
return (function (seq36226){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36226));
});})(g__21462__auto___36263))
;


var g__21462__auto___36267 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21462__auto___36267){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36268 = arguments.length;
var i__4500__auto___36269 = (0);
while(true){
if((i__4500__auto___36269 < len__4499__auto___36268)){
args__4502__auto__.push((arguments[i__4500__auto___36269]));

var G__36270 = (i__4500__auto___36269 + (1));
i__4500__auto___36269 = G__36270;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36267))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36267),args);
});})(g__21462__auto___36267))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21462__auto___36267){
return (function (seq36227){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36227));
});})(g__21462__auto___36267))
;


var g__21462__auto___36271 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21462__auto___36271){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36272 = arguments.length;
var i__4500__auto___36273 = (0);
while(true){
if((i__4500__auto___36273 < len__4499__auto___36272)){
args__4502__auto__.push((arguments[i__4500__auto___36273]));

var G__36274 = (i__4500__auto___36273 + (1));
i__4500__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36271))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36271){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36271),args);
});})(g__21462__auto___36271))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21462__auto___36271){
return (function (seq36228){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36228));
});})(g__21462__auto___36271))
;


var g__21462__auto___36275 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21462__auto___36275){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36276 = arguments.length;
var i__4500__auto___36277 = (0);
while(true){
if((i__4500__auto___36277 < len__4499__auto___36276)){
args__4502__auto__.push((arguments[i__4500__auto___36277]));

var G__36278 = (i__4500__auto___36277 + (1));
i__4500__auto___36277 = G__36278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36275))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36275){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36275),args);
});})(g__21462__auto___36275))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21462__auto___36275){
return (function (seq36229){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36229));
});})(g__21462__auto___36275))
;


var g__21462__auto___36279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21462__auto___36279){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36280 = arguments.length;
var i__4500__auto___36281 = (0);
while(true){
if((i__4500__auto___36281 < len__4499__auto___36280)){
args__4502__auto__.push((arguments[i__4500__auto___36281]));

var G__36282 = (i__4500__auto___36281 + (1));
i__4500__auto___36281 = G__36282;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36279))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36279){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36279),args);
});})(g__21462__auto___36279))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21462__auto___36279){
return (function (seq36230){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36230));
});})(g__21462__auto___36279))
;


var g__21462__auto___36283 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21462__auto___36283){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36284 = arguments.length;
var i__4500__auto___36285 = (0);
while(true){
if((i__4500__auto___36285 < len__4499__auto___36284)){
args__4502__auto__.push((arguments[i__4500__auto___36285]));

var G__36286 = (i__4500__auto___36285 + (1));
i__4500__auto___36285 = G__36286;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36283))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36283){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36283),args);
});})(g__21462__auto___36283))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21462__auto___36283){
return (function (seq36231){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36231));
});})(g__21462__auto___36283))
;


var g__21462__auto___36287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21462__auto___36287){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36288 = arguments.length;
var i__4500__auto___36289 = (0);
while(true){
if((i__4500__auto___36289 < len__4499__auto___36288)){
args__4502__auto__.push((arguments[i__4500__auto___36289]));

var G__36290 = (i__4500__auto___36289 + (1));
i__4500__auto___36289 = G__36290;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36287))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36287){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36287),args);
});})(g__21462__auto___36287))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21462__auto___36287){
return (function (seq36232){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36232));
});})(g__21462__auto___36287))
;


var g__21462__auto___36291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21462__auto___36291){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36292 = arguments.length;
var i__4500__auto___36293 = (0);
while(true){
if((i__4500__auto___36293 < len__4499__auto___36292)){
args__4502__auto__.push((arguments[i__4500__auto___36293]));

var G__36294 = (i__4500__auto___36293 + (1));
i__4500__auto___36293 = G__36294;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36291))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36291){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36291),args);
});})(g__21462__auto___36291))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21462__auto___36291){
return (function (seq36233){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36233));
});})(g__21462__auto___36291))
;


var g__21462__auto___36295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21462__auto___36295){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36296 = arguments.length;
var i__4500__auto___36297 = (0);
while(true){
if((i__4500__auto___36297 < len__4499__auto___36296)){
args__4502__auto__.push((arguments[i__4500__auto___36297]));

var G__36298 = (i__4500__auto___36297 + (1));
i__4500__auto___36297 = G__36298;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36295))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36295),args);
});})(g__21462__auto___36295))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21462__auto___36295){
return (function (seq36234){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36234));
});})(g__21462__auto___36295))
;


var g__21462__auto___36299 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21462__auto___36299){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36300 = arguments.length;
var i__4500__auto___36301 = (0);
while(true){
if((i__4500__auto___36301 < len__4499__auto___36300)){
args__4502__auto__.push((arguments[i__4500__auto___36301]));

var G__36302 = (i__4500__auto___36301 + (1));
i__4500__auto___36301 = G__36302;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36299))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36299),args);
});})(g__21462__auto___36299))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21462__auto___36299){
return (function (seq36235){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36235));
});})(g__21462__auto___36299))
;


var g__21462__auto___36303 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21462__auto___36303){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36304 = arguments.length;
var i__4500__auto___36305 = (0);
while(true){
if((i__4500__auto___36305 < len__4499__auto___36304)){
args__4502__auto__.push((arguments[i__4500__auto___36305]));

var G__36306 = (i__4500__auto___36305 + (1));
i__4500__auto___36305 = G__36306;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36303))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36303),args);
});})(g__21462__auto___36303))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21462__auto___36303){
return (function (seq36236){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36236));
});})(g__21462__auto___36303))
;


var g__21462__auto___36307 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21462__auto___36307){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36308 = arguments.length;
var i__4500__auto___36309 = (0);
while(true){
if((i__4500__auto___36309 < len__4499__auto___36308)){
args__4502__auto__.push((arguments[i__4500__auto___36309]));

var G__36310 = (i__4500__auto___36309 + (1));
i__4500__auto___36309 = G__36310;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36307))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36307),args);
});})(g__21462__auto___36307))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21462__auto___36307){
return (function (seq36237){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36237));
});})(g__21462__auto___36307))
;


var g__21462__auto___36311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21462__auto___36311){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36312 = arguments.length;
var i__4500__auto___36313 = (0);
while(true){
if((i__4500__auto___36313 < len__4499__auto___36312)){
args__4502__auto__.push((arguments[i__4500__auto___36313]));

var G__36314 = (i__4500__auto___36313 + (1));
i__4500__auto___36313 = G__36314;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21462__auto___36311))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21462__auto___36311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21462__auto___36311),args);
});})(g__21462__auto___36311))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21462__auto___36311){
return (function (seq36238){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36238));
});})(g__21462__auto___36311))
;

var g__21475__auto___36336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21475__auto___36336){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36337 = arguments.length;
var i__4500__auto___36338 = (0);
while(true){
if((i__4500__auto___36338 < len__4499__auto___36337)){
args__4502__auto__.push((arguments[i__4500__auto___36338]));

var G__36339 = (i__4500__auto___36338 + (1));
i__4500__auto___36338 = G__36339;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36336))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36336){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36336);
});})(g__21475__auto___36336))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21475__auto___36336){
return (function (seq36315){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36315));
});})(g__21475__auto___36336))
;


var g__21475__auto___36340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21475__auto___36340){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36341 = arguments.length;
var i__4500__auto___36342 = (0);
while(true){
if((i__4500__auto___36342 < len__4499__auto___36341)){
args__4502__auto__.push((arguments[i__4500__auto___36342]));

var G__36343 = (i__4500__auto___36342 + (1));
i__4500__auto___36342 = G__36343;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36340))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36340){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36340);
});})(g__21475__auto___36340))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21475__auto___36340){
return (function (seq36316){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36316));
});})(g__21475__auto___36340))
;


var g__21475__auto___36344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21475__auto___36344){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36345 = arguments.length;
var i__4500__auto___36346 = (0);
while(true){
if((i__4500__auto___36346 < len__4499__auto___36345)){
args__4502__auto__.push((arguments[i__4500__auto___36346]));

var G__36347 = (i__4500__auto___36346 + (1));
i__4500__auto___36346 = G__36347;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36344))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36344){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36344);
});})(g__21475__auto___36344))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21475__auto___36344){
return (function (seq36317){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36317));
});})(g__21475__auto___36344))
;


var g__21475__auto___36348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21475__auto___36348){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36349 = arguments.length;
var i__4500__auto___36350 = (0);
while(true){
if((i__4500__auto___36350 < len__4499__auto___36349)){
args__4502__auto__.push((arguments[i__4500__auto___36350]));

var G__36351 = (i__4500__auto___36350 + (1));
i__4500__auto___36350 = G__36351;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36348))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36348){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36348);
});})(g__21475__auto___36348))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21475__auto___36348){
return (function (seq36318){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36318));
});})(g__21475__auto___36348))
;


var g__21475__auto___36352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21475__auto___36352){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36353 = arguments.length;
var i__4500__auto___36354 = (0);
while(true){
if((i__4500__auto___36354 < len__4499__auto___36353)){
args__4502__auto__.push((arguments[i__4500__auto___36354]));

var G__36355 = (i__4500__auto___36354 + (1));
i__4500__auto___36354 = G__36355;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36352))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36352){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36352);
});})(g__21475__auto___36352))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21475__auto___36352){
return (function (seq36319){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36319));
});})(g__21475__auto___36352))
;


var g__21475__auto___36356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21475__auto___36356){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36357 = arguments.length;
var i__4500__auto___36358 = (0);
while(true){
if((i__4500__auto___36358 < len__4499__auto___36357)){
args__4502__auto__.push((arguments[i__4500__auto___36358]));

var G__36359 = (i__4500__auto___36358 + (1));
i__4500__auto___36358 = G__36359;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36356))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36356){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36356);
});})(g__21475__auto___36356))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21475__auto___36356){
return (function (seq36320){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36320));
});})(g__21475__auto___36356))
;


var g__21475__auto___36360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21475__auto___36360){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36361 = arguments.length;
var i__4500__auto___36362 = (0);
while(true){
if((i__4500__auto___36362 < len__4499__auto___36361)){
args__4502__auto__.push((arguments[i__4500__auto___36362]));

var G__36363 = (i__4500__auto___36362 + (1));
i__4500__auto___36362 = G__36363;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36360))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36360){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36360);
});})(g__21475__auto___36360))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21475__auto___36360){
return (function (seq36321){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36321));
});})(g__21475__auto___36360))
;


var g__21475__auto___36364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21475__auto___36364){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36365 = arguments.length;
var i__4500__auto___36366 = (0);
while(true){
if((i__4500__auto___36366 < len__4499__auto___36365)){
args__4502__auto__.push((arguments[i__4500__auto___36366]));

var G__36367 = (i__4500__auto___36366 + (1));
i__4500__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36364))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36364){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36364);
});})(g__21475__auto___36364))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21475__auto___36364){
return (function (seq36322){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36322));
});})(g__21475__auto___36364))
;


var g__21475__auto___36368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21475__auto___36368){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36369 = arguments.length;
var i__4500__auto___36370 = (0);
while(true){
if((i__4500__auto___36370 < len__4499__auto___36369)){
args__4502__auto__.push((arguments[i__4500__auto___36370]));

var G__36371 = (i__4500__auto___36370 + (1));
i__4500__auto___36370 = G__36371;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36368))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36368){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36368);
});})(g__21475__auto___36368))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21475__auto___36368){
return (function (seq36323){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36323));
});})(g__21475__auto___36368))
;


var g__21475__auto___36372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21475__auto___36372){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36373 = arguments.length;
var i__4500__auto___36374 = (0);
while(true){
if((i__4500__auto___36374 < len__4499__auto___36373)){
args__4502__auto__.push((arguments[i__4500__auto___36374]));

var G__36375 = (i__4500__auto___36374 + (1));
i__4500__auto___36374 = G__36375;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36372))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36372){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36372);
});})(g__21475__auto___36372))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21475__auto___36372){
return (function (seq36324){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36324));
});})(g__21475__auto___36372))
;


var g__21475__auto___36376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21475__auto___36376){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36377 = arguments.length;
var i__4500__auto___36378 = (0);
while(true){
if((i__4500__auto___36378 < len__4499__auto___36377)){
args__4502__auto__.push((arguments[i__4500__auto___36378]));

var G__36379 = (i__4500__auto___36378 + (1));
i__4500__auto___36378 = G__36379;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36376))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36376){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36376);
});})(g__21475__auto___36376))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21475__auto___36376){
return (function (seq36325){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36325));
});})(g__21475__auto___36376))
;


var g__21475__auto___36380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21475__auto___36380){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36381 = arguments.length;
var i__4500__auto___36382 = (0);
while(true){
if((i__4500__auto___36382 < len__4499__auto___36381)){
args__4502__auto__.push((arguments[i__4500__auto___36382]));

var G__36383 = (i__4500__auto___36382 + (1));
i__4500__auto___36382 = G__36383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36380))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36380){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36380);
});})(g__21475__auto___36380))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21475__auto___36380){
return (function (seq36326){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36326));
});})(g__21475__auto___36380))
;


var g__21475__auto___36384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21475__auto___36384){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36385 = arguments.length;
var i__4500__auto___36386 = (0);
while(true){
if((i__4500__auto___36386 < len__4499__auto___36385)){
args__4502__auto__.push((arguments[i__4500__auto___36386]));

var G__36387 = (i__4500__auto___36386 + (1));
i__4500__auto___36386 = G__36387;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36384))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36384){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36384);
});})(g__21475__auto___36384))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21475__auto___36384){
return (function (seq36327){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36327));
});})(g__21475__auto___36384))
;


var g__21475__auto___36388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21475__auto___36388){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36389 = arguments.length;
var i__4500__auto___36390 = (0);
while(true){
if((i__4500__auto___36390 < len__4499__auto___36389)){
args__4502__auto__.push((arguments[i__4500__auto___36390]));

var G__36391 = (i__4500__auto___36390 + (1));
i__4500__auto___36390 = G__36391;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36388))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36388){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36388);
});})(g__21475__auto___36388))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21475__auto___36388){
return (function (seq36328){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36328));
});})(g__21475__auto___36388))
;


var g__21475__auto___36392 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21475__auto___36392){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36393 = arguments.length;
var i__4500__auto___36394 = (0);
while(true){
if((i__4500__auto___36394 < len__4499__auto___36393)){
args__4502__auto__.push((arguments[i__4500__auto___36394]));

var G__36395 = (i__4500__auto___36394 + (1));
i__4500__auto___36394 = G__36395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36392))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36392){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36392);
});})(g__21475__auto___36392))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21475__auto___36392){
return (function (seq36329){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36329));
});})(g__21475__auto___36392))
;


var g__21475__auto___36396 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21475__auto___36396){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36397 = arguments.length;
var i__4500__auto___36398 = (0);
while(true){
if((i__4500__auto___36398 < len__4499__auto___36397)){
args__4502__auto__.push((arguments[i__4500__auto___36398]));

var G__36399 = (i__4500__auto___36398 + (1));
i__4500__auto___36398 = G__36399;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36396))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36396){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36396);
});})(g__21475__auto___36396))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21475__auto___36396){
return (function (seq36330){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36330));
});})(g__21475__auto___36396))
;


var g__21475__auto___36400 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21475__auto___36400){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36401 = arguments.length;
var i__4500__auto___36402 = (0);
while(true){
if((i__4500__auto___36402 < len__4499__auto___36401)){
args__4502__auto__.push((arguments[i__4500__auto___36402]));

var G__36403 = (i__4500__auto___36402 + (1));
i__4500__auto___36402 = G__36403;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36400))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36400){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36400);
});})(g__21475__auto___36400))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21475__auto___36400){
return (function (seq36331){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36331));
});})(g__21475__auto___36400))
;


var g__21475__auto___36404 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21475__auto___36404){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36405 = arguments.length;
var i__4500__auto___36406 = (0);
while(true){
if((i__4500__auto___36406 < len__4499__auto___36405)){
args__4502__auto__.push((arguments[i__4500__auto___36406]));

var G__36407 = (i__4500__auto___36406 + (1));
i__4500__auto___36406 = G__36407;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36404))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36404){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36404);
});})(g__21475__auto___36404))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21475__auto___36404){
return (function (seq36332){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36332));
});})(g__21475__auto___36404))
;


var g__21475__auto___36408 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21475__auto___36408){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36409 = arguments.length;
var i__4500__auto___36410 = (0);
while(true){
if((i__4500__auto___36410 < len__4499__auto___36409)){
args__4502__auto__.push((arguments[i__4500__auto___36410]));

var G__36411 = (i__4500__auto___36410 + (1));
i__4500__auto___36410 = G__36411;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36408))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36408){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36408);
});})(g__21475__auto___36408))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21475__auto___36408){
return (function (seq36333){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36333));
});})(g__21475__auto___36408))
;


var g__21475__auto___36412 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21475__auto___36412){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36413 = arguments.length;
var i__4500__auto___36414 = (0);
while(true){
if((i__4500__auto___36414 < len__4499__auto___36413)){
args__4502__auto__.push((arguments[i__4500__auto___36414]));

var G__36415 = (i__4500__auto___36414 + (1));
i__4500__auto___36414 = G__36415;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36412))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36412){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36412);
});})(g__21475__auto___36412))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21475__auto___36412){
return (function (seq36334){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36334));
});})(g__21475__auto___36412))
;


var g__21475__auto___36416 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21475__auto___36416){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36417 = arguments.length;
var i__4500__auto___36418 = (0);
while(true){
if((i__4500__auto___36418 < len__4499__auto___36417)){
args__4502__auto__.push((arguments[i__4500__auto___36418]));

var G__36419 = (i__4500__auto___36418 + (1));
i__4500__auto___36418 = G__36419;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__21475__auto___36416))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21475__auto___36416){
return (function (args){
return cljs.core.deref.call(null,g__21475__auto___36416);
});})(g__21475__auto___36416))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21475__auto___36416){
return (function (seq36335){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36335));
});})(g__21475__auto___36416))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36422 = arguments.length;
var i__4500__auto___36423 = (0);
while(true){
if((i__4500__auto___36423 < len__4499__auto___36422)){
args__4502__auto__.push((arguments[i__4500__auto___36423]));

var G__36424 = (i__4500__auto___36423 + (1));
i__4500__auto___36423 = G__36424;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36420_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36420_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36421){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36421));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36425_SHARP_){
return (new Date(p1__36425_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1557582896614
