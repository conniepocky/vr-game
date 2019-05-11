// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22002__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22003__i = 0, G__22003__a = new Array(arguments.length -  0);
while (G__22003__i < G__22003__a.length) {G__22003__a[G__22003__i] = arguments[G__22003__i + 0]; ++G__22003__i;}
  args = new cljs.core.IndexedSeq(G__22003__a,0,null);
} 
return G__22002__delegate.call(this,args);};
G__22002.cljs$lang$maxFixedArity = 0;
G__22002.cljs$lang$applyTo = (function (arglist__22004){
var args = cljs.core.seq(arglist__22004);
return G__22002__delegate(args);
});
G__22002.cljs$core$IFn$_invoke$arity$variadic = G__22002__delegate;
return G__22002;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22005__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22006__i = 0, G__22006__a = new Array(arguments.length -  0);
while (G__22006__i < G__22006__a.length) {G__22006__a[G__22006__i] = arguments[G__22006__i + 0]; ++G__22006__i;}
  args = new cljs.core.IndexedSeq(G__22006__a,0,null);
} 
return G__22005__delegate.call(this,args);};
G__22005.cljs$lang$maxFixedArity = 0;
G__22005.cljs$lang$applyTo = (function (arglist__22007){
var args = cljs.core.seq(arglist__22007);
return G__22005__delegate(args);
});
G__22005.cljs$core$IFn$_invoke$arity$variadic = G__22005__delegate;
return G__22005;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1557580543074