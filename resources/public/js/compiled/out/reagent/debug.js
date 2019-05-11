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
var G__22042__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22043__i = 0, G__22043__a = new Array(arguments.length -  0);
while (G__22043__i < G__22043__a.length) {G__22043__a[G__22043__i] = arguments[G__22043__i + 0]; ++G__22043__i;}
  args = new cljs.core.IndexedSeq(G__22043__a,0,null);
} 
return G__22042__delegate.call(this,args);};
G__22042.cljs$lang$maxFixedArity = 0;
G__22042.cljs$lang$applyTo = (function (arglist__22044){
var args = cljs.core.seq(arglist__22044);
return G__22042__delegate(args);
});
G__22042.cljs$core$IFn$_invoke$arity$variadic = G__22042__delegate;
return G__22042;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22045__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22046__i = 0, G__22046__a = new Array(arguments.length -  0);
while (G__22046__i < G__22046__a.length) {G__22046__a[G__22046__i] = arguments[G__22046__i + 0]; ++G__22046__i;}
  args = new cljs.core.IndexedSeq(G__22046__a,0,null);
} 
return G__22045__delegate.call(this,args);};
G__22045.cljs$lang$maxFixedArity = 0;
G__22045.cljs$lang$applyTo = (function (arglist__22047){
var args = cljs.core.seq(arglist__22047);
return G__22045__delegate(args);
});
G__22045.cljs$core$IFn$_invoke$arity$variadic = G__22045__delegate;
return G__22045;
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

//# sourceMappingURL=debug.js.map?rel=1557582871565
