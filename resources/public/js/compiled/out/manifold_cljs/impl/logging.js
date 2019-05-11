// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.impl.logging');
goog.require('cljs.core');
manifold_cljs.impl.logging.error = (function manifold_cljs$impl$logging$error(var_args){
var G__21796 = arguments.length;
switch (G__21796) {
case 1:
return manifold_cljs.impl.logging.error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.impl.logging.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.impl.logging.error.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return cljs.core.println.call(null,"ERROR:",msg);
});

manifold_cljs.impl.logging.error.cljs$core$IFn$_invoke$arity$2 = (function (err,msg){
return cljs.core.println.call(null,"ERROR:",err,msg);
});

manifold_cljs.impl.logging.error.cljs$lang$maxFixedArity = 2;

manifold_cljs.impl.logging.warn = (function manifold_cljs$impl$logging$warn(msg){
return cljs.core.println.call(null,"WARN:",msg);
});

//# sourceMappingURL=logging.js.map?rel=1557582870919
