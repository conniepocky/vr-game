// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29760_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29760_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29761 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29762 = null;
var count__29763 = (0);
var i__29764 = (0);
while(true){
if((i__29764 < count__29763)){
var n = cljs.core._nth.call(null,chunk__29762,i__29764);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29765 = seq__29761;
var G__29766 = chunk__29762;
var G__29767 = count__29763;
var G__29768 = (i__29764 + (1));
seq__29761 = G__29765;
chunk__29762 = G__29766;
count__29763 = G__29767;
i__29764 = G__29768;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29761);
if(temp__5457__auto__){
var seq__29761__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29761__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29761__$1);
var G__29769 = cljs.core.chunk_rest.call(null,seq__29761__$1);
var G__29770 = c__4319__auto__;
var G__29771 = cljs.core.count.call(null,c__4319__auto__);
var G__29772 = (0);
seq__29761 = G__29769;
chunk__29762 = G__29770;
count__29763 = G__29771;
i__29764 = G__29772;
continue;
} else {
var n = cljs.core.first.call(null,seq__29761__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29773 = cljs.core.next.call(null,seq__29761__$1);
var G__29774 = null;
var G__29775 = (0);
var G__29776 = (0);
seq__29761 = G__29773;
chunk__29762 = G__29774;
count__29763 = G__29775;
i__29764 = G__29776;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29777){
var vec__29778 = p__29777;
var _ = cljs.core.nth.call(null,vec__29778,(0),null);
var v = cljs.core.nth.call(null,vec__29778,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29781){
var vec__29782 = p__29781;
var k = cljs.core.nth.call(null,vec__29782,(0),null);
var v = cljs.core.nth.call(null,vec__29782,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29794_29802 = cljs.core.seq.call(null,deps);
var chunk__29795_29803 = null;
var count__29796_29804 = (0);
var i__29797_29805 = (0);
while(true){
if((i__29797_29805 < count__29796_29804)){
var dep_29806 = cljs.core._nth.call(null,chunk__29795_29803,i__29797_29805);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29806;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29806));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29806,(depth + (1)),state);
} else {
}


var G__29807 = seq__29794_29802;
var G__29808 = chunk__29795_29803;
var G__29809 = count__29796_29804;
var G__29810 = (i__29797_29805 + (1));
seq__29794_29802 = G__29807;
chunk__29795_29803 = G__29808;
count__29796_29804 = G__29809;
i__29797_29805 = G__29810;
continue;
} else {
var temp__5457__auto___29811 = cljs.core.seq.call(null,seq__29794_29802);
if(temp__5457__auto___29811){
var seq__29794_29812__$1 = temp__5457__auto___29811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29794_29812__$1)){
var c__4319__auto___29813 = cljs.core.chunk_first.call(null,seq__29794_29812__$1);
var G__29814 = cljs.core.chunk_rest.call(null,seq__29794_29812__$1);
var G__29815 = c__4319__auto___29813;
var G__29816 = cljs.core.count.call(null,c__4319__auto___29813);
var G__29817 = (0);
seq__29794_29802 = G__29814;
chunk__29795_29803 = G__29815;
count__29796_29804 = G__29816;
i__29797_29805 = G__29817;
continue;
} else {
var dep_29818 = cljs.core.first.call(null,seq__29794_29812__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29818;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29818));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29818,(depth + (1)),state);
} else {
}


var G__29819 = cljs.core.next.call(null,seq__29794_29812__$1);
var G__29820 = null;
var G__29821 = (0);
var G__29822 = (0);
seq__29794_29802 = G__29819;
chunk__29795_29803 = G__29820;
count__29796_29804 = G__29821;
i__29797_29805 = G__29822;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29798){
var vec__29799 = p__29798;
var seq__29800 = cljs.core.seq.call(null,vec__29799);
var first__29801 = cljs.core.first.call(null,seq__29800);
var seq__29800__$1 = cljs.core.next.call(null,seq__29800);
var x = first__29801;
var xs = seq__29800__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29799,seq__29800,first__29801,seq__29800__$1,x,xs,get_deps__$1){
return (function (p1__29785_SHARP_){
return clojure.set.difference.call(null,p1__29785_SHARP_,x);
});})(vec__29799,seq__29800,first__29801,seq__29800__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29823 = cljs.core.seq.call(null,provides);
var chunk__29824 = null;
var count__29825 = (0);
var i__29826 = (0);
while(true){
if((i__29826 < count__29825)){
var prov = cljs.core._nth.call(null,chunk__29824,i__29826);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29827_29835 = cljs.core.seq.call(null,requires);
var chunk__29828_29836 = null;
var count__29829_29837 = (0);
var i__29830_29838 = (0);
while(true){
if((i__29830_29838 < count__29829_29837)){
var req_29839 = cljs.core._nth.call(null,chunk__29828_29836,i__29830_29838);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29839,prov);


var G__29840 = seq__29827_29835;
var G__29841 = chunk__29828_29836;
var G__29842 = count__29829_29837;
var G__29843 = (i__29830_29838 + (1));
seq__29827_29835 = G__29840;
chunk__29828_29836 = G__29841;
count__29829_29837 = G__29842;
i__29830_29838 = G__29843;
continue;
} else {
var temp__5457__auto___29844 = cljs.core.seq.call(null,seq__29827_29835);
if(temp__5457__auto___29844){
var seq__29827_29845__$1 = temp__5457__auto___29844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29827_29845__$1)){
var c__4319__auto___29846 = cljs.core.chunk_first.call(null,seq__29827_29845__$1);
var G__29847 = cljs.core.chunk_rest.call(null,seq__29827_29845__$1);
var G__29848 = c__4319__auto___29846;
var G__29849 = cljs.core.count.call(null,c__4319__auto___29846);
var G__29850 = (0);
seq__29827_29835 = G__29847;
chunk__29828_29836 = G__29848;
count__29829_29837 = G__29849;
i__29830_29838 = G__29850;
continue;
} else {
var req_29851 = cljs.core.first.call(null,seq__29827_29845__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29851,prov);


var G__29852 = cljs.core.next.call(null,seq__29827_29845__$1);
var G__29853 = null;
var G__29854 = (0);
var G__29855 = (0);
seq__29827_29835 = G__29852;
chunk__29828_29836 = G__29853;
count__29829_29837 = G__29854;
i__29830_29838 = G__29855;
continue;
}
} else {
}
}
break;
}


var G__29856 = seq__29823;
var G__29857 = chunk__29824;
var G__29858 = count__29825;
var G__29859 = (i__29826 + (1));
seq__29823 = G__29856;
chunk__29824 = G__29857;
count__29825 = G__29858;
i__29826 = G__29859;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29823);
if(temp__5457__auto__){
var seq__29823__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29823__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29823__$1);
var G__29860 = cljs.core.chunk_rest.call(null,seq__29823__$1);
var G__29861 = c__4319__auto__;
var G__29862 = cljs.core.count.call(null,c__4319__auto__);
var G__29863 = (0);
seq__29823 = G__29860;
chunk__29824 = G__29861;
count__29825 = G__29862;
i__29826 = G__29863;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29823__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29831_29864 = cljs.core.seq.call(null,requires);
var chunk__29832_29865 = null;
var count__29833_29866 = (0);
var i__29834_29867 = (0);
while(true){
if((i__29834_29867 < count__29833_29866)){
var req_29868 = cljs.core._nth.call(null,chunk__29832_29865,i__29834_29867);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29868,prov);


var G__29869 = seq__29831_29864;
var G__29870 = chunk__29832_29865;
var G__29871 = count__29833_29866;
var G__29872 = (i__29834_29867 + (1));
seq__29831_29864 = G__29869;
chunk__29832_29865 = G__29870;
count__29833_29866 = G__29871;
i__29834_29867 = G__29872;
continue;
} else {
var temp__5457__auto___29873__$1 = cljs.core.seq.call(null,seq__29831_29864);
if(temp__5457__auto___29873__$1){
var seq__29831_29874__$1 = temp__5457__auto___29873__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29831_29874__$1)){
var c__4319__auto___29875 = cljs.core.chunk_first.call(null,seq__29831_29874__$1);
var G__29876 = cljs.core.chunk_rest.call(null,seq__29831_29874__$1);
var G__29877 = c__4319__auto___29875;
var G__29878 = cljs.core.count.call(null,c__4319__auto___29875);
var G__29879 = (0);
seq__29831_29864 = G__29876;
chunk__29832_29865 = G__29877;
count__29833_29866 = G__29878;
i__29834_29867 = G__29879;
continue;
} else {
var req_29880 = cljs.core.first.call(null,seq__29831_29874__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29880,prov);


var G__29881 = cljs.core.next.call(null,seq__29831_29874__$1);
var G__29882 = null;
var G__29883 = (0);
var G__29884 = (0);
seq__29831_29864 = G__29881;
chunk__29832_29865 = G__29882;
count__29833_29866 = G__29883;
i__29834_29867 = G__29884;
continue;
}
} else {
}
}
break;
}


var G__29885 = cljs.core.next.call(null,seq__29823__$1);
var G__29886 = null;
var G__29887 = (0);
var G__29888 = (0);
seq__29823 = G__29885;
chunk__29824 = G__29886;
count__29825 = G__29887;
i__29826 = G__29888;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29889_29893 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29890_29894 = null;
var count__29891_29895 = (0);
var i__29892_29896 = (0);
while(true){
if((i__29892_29896 < count__29891_29895)){
var ns_29897 = cljs.core._nth.call(null,chunk__29890_29894,i__29892_29896);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29897);


var G__29898 = seq__29889_29893;
var G__29899 = chunk__29890_29894;
var G__29900 = count__29891_29895;
var G__29901 = (i__29892_29896 + (1));
seq__29889_29893 = G__29898;
chunk__29890_29894 = G__29899;
count__29891_29895 = G__29900;
i__29892_29896 = G__29901;
continue;
} else {
var temp__5457__auto___29902 = cljs.core.seq.call(null,seq__29889_29893);
if(temp__5457__auto___29902){
var seq__29889_29903__$1 = temp__5457__auto___29902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29889_29903__$1)){
var c__4319__auto___29904 = cljs.core.chunk_first.call(null,seq__29889_29903__$1);
var G__29905 = cljs.core.chunk_rest.call(null,seq__29889_29903__$1);
var G__29906 = c__4319__auto___29904;
var G__29907 = cljs.core.count.call(null,c__4319__auto___29904);
var G__29908 = (0);
seq__29889_29893 = G__29905;
chunk__29890_29894 = G__29906;
count__29891_29895 = G__29907;
i__29892_29896 = G__29908;
continue;
} else {
var ns_29909 = cljs.core.first.call(null,seq__29889_29903__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29909);


var G__29910 = cljs.core.next.call(null,seq__29889_29903__$1);
var G__29911 = null;
var G__29912 = (0);
var G__29913 = (0);
seq__29889_29893 = G__29910;
chunk__29890_29894 = G__29911;
count__29891_29895 = G__29912;
i__29892_29896 = G__29913;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29914__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29915__i = 0, G__29915__a = new Array(arguments.length -  0);
while (G__29915__i < G__29915__a.length) {G__29915__a[G__29915__i] = arguments[G__29915__i + 0]; ++G__29915__i;}
  args = new cljs.core.IndexedSeq(G__29915__a,0,null);
} 
return G__29914__delegate.call(this,args);};
G__29914.cljs$lang$maxFixedArity = 0;
G__29914.cljs$lang$applyTo = (function (arglist__29916){
var args = cljs.core.seq(arglist__29916);
return G__29914__delegate(args);
});
G__29914.cljs$core$IFn$_invoke$arity$variadic = G__29914__delegate;
return G__29914;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29917_SHARP_,p2__29918_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29917_SHARP_)].join('')),p2__29918_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29919_SHARP_,p2__29920_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29919_SHARP_)].join(''),p2__29920_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29921 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29921.addCallback(((function (G__29921){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29921))
);

G__29921.addErrback(((function (G__29921){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29921))
);

return G__29921;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29922){if((e29922 instanceof Error)){
var e = e29922;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29922;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29923){if((e29923 instanceof Error)){
var e = e29923;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29923;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29924 = cljs.core._EQ_;
var expr__29925 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29924.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29925))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29924.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29925))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29924.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29925))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29924,expr__29925){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29924,expr__29925))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29927,callback){
var map__29928 = p__29927;
var map__29928__$1 = ((((!((map__29928 == null)))?(((((map__29928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var file_msg = map__29928__$1;
var request_url = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29928,map__29928__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29928,map__29928__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__){
return (function (state_29966){
var state_val_29967 = (state_29966[(1)]);
if((state_val_29967 === (7))){
var inst_29962 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
var statearr_29968_29994 = state_29966__$1;
(statearr_29968_29994[(2)] = inst_29962);

(statearr_29968_29994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (1))){
var state_29966__$1 = state_29966;
var statearr_29969_29995 = state_29966__$1;
(statearr_29969_29995[(2)] = null);

(statearr_29969_29995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (4))){
var inst_29932 = (state_29966[(7)]);
var inst_29932__$1 = (state_29966[(2)]);
var state_29966__$1 = (function (){var statearr_29970 = state_29966;
(statearr_29970[(7)] = inst_29932__$1);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29932__$1)){
var statearr_29971_29996 = state_29966__$1;
(statearr_29971_29996[(1)] = (5));

} else {
var statearr_29972_29997 = state_29966__$1;
(statearr_29972_29997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (15))){
var inst_29947 = (state_29966[(8)]);
var inst_29945 = (state_29966[(9)]);
var inst_29949 = inst_29947.call(null,inst_29945);
var state_29966__$1 = state_29966;
var statearr_29973_29998 = state_29966__$1;
(statearr_29973_29998[(2)] = inst_29949);

(statearr_29973_29998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (13))){
var inst_29956 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
var statearr_29974_29999 = state_29966__$1;
(statearr_29974_29999[(2)] = inst_29956);

(statearr_29974_29999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (6))){
var state_29966__$1 = state_29966;
var statearr_29975_30000 = state_29966__$1;
(statearr_29975_30000[(2)] = null);

(statearr_29975_30000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (17))){
var inst_29953 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
var statearr_29976_30001 = state_29966__$1;
(statearr_29976_30001[(2)] = inst_29953);

(statearr_29976_30001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (3))){
var inst_29964 = (state_29966[(2)]);
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29966__$1,inst_29964);
} else {
if((state_val_29967 === (12))){
var state_29966__$1 = state_29966;
var statearr_29977_30002 = state_29966__$1;
(statearr_29977_30002[(2)] = null);

(statearr_29977_30002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (2))){
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29966__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29967 === (11))){
var inst_29937 = (state_29966[(10)]);
var inst_29943 = figwheel.client.file_reloading.blocking_load.call(null,inst_29937);
var state_29966__$1 = state_29966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29966__$1,(14),inst_29943);
} else {
if((state_val_29967 === (9))){
var inst_29937 = (state_29966[(10)]);
var state_29966__$1 = state_29966;
if(cljs.core.truth_(inst_29937)){
var statearr_29978_30003 = state_29966__$1;
(statearr_29978_30003[(1)] = (11));

} else {
var statearr_29979_30004 = state_29966__$1;
(statearr_29979_30004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (5))){
var inst_29938 = (state_29966[(11)]);
var inst_29932 = (state_29966[(7)]);
var inst_29937 = cljs.core.nth.call(null,inst_29932,(0),null);
var inst_29938__$1 = cljs.core.nth.call(null,inst_29932,(1),null);
var state_29966__$1 = (function (){var statearr_29980 = state_29966;
(statearr_29980[(11)] = inst_29938__$1);

(statearr_29980[(10)] = inst_29937);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29938__$1)){
var statearr_29981_30005 = state_29966__$1;
(statearr_29981_30005[(1)] = (8));

} else {
var statearr_29982_30006 = state_29966__$1;
(statearr_29982_30006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (14))){
var inst_29947 = (state_29966[(8)]);
var inst_29937 = (state_29966[(10)]);
var inst_29945 = (state_29966[(2)]);
var inst_29946 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29947__$1 = cljs.core.get.call(null,inst_29946,inst_29937);
var state_29966__$1 = (function (){var statearr_29983 = state_29966;
(statearr_29983[(8)] = inst_29947__$1);

(statearr_29983[(9)] = inst_29945);

return statearr_29983;
})();
if(cljs.core.truth_(inst_29947__$1)){
var statearr_29984_30007 = state_29966__$1;
(statearr_29984_30007[(1)] = (15));

} else {
var statearr_29985_30008 = state_29966__$1;
(statearr_29985_30008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (16))){
var inst_29945 = (state_29966[(9)]);
var inst_29951 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29945);
var state_29966__$1 = state_29966;
var statearr_29986_30009 = state_29966__$1;
(statearr_29986_30009[(2)] = inst_29951);

(statearr_29986_30009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (10))){
var inst_29958 = (state_29966[(2)]);
var state_29966__$1 = (function (){var statearr_29987 = state_29966;
(statearr_29987[(12)] = inst_29958);

return statearr_29987;
})();
var statearr_29988_30010 = state_29966__$1;
(statearr_29988_30010[(2)] = null);

(statearr_29988_30010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29967 === (8))){
var inst_29938 = (state_29966[(11)]);
var inst_29940 = eval(inst_29938);
var state_29966__$1 = state_29966;
var statearr_29989_30011 = state_29966__$1;
(statearr_29989_30011[(2)] = inst_29940);

(statearr_29989_30011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27562__auto__ = null;
var figwheel$client$file_reloading$state_machine__27562__auto____0 = (function (){
var statearr_29990 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29990[(0)] = figwheel$client$file_reloading$state_machine__27562__auto__);

(statearr_29990[(1)] = (1));

return statearr_29990;
});
var figwheel$client$file_reloading$state_machine__27562__auto____1 = (function (state_29966){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29991){if((e29991 instanceof Object)){
var ex__27565__auto__ = e29991;
var statearr_29992_30012 = state_29966;
(statearr_29992_30012[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30013 = state_29966;
state_29966 = G__30013;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27562__auto__ = function(state_29966){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27562__auto____1.call(this,state_29966);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27562__auto____0;
figwheel$client$file_reloading$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27562__auto____1;
return figwheel$client$file_reloading$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__))
})();
var state__27653__auto__ = (function (){var statearr_29993 = f__27652__auto__.call(null);
(statearr_29993[(6)] = c__27651__auto__);

return statearr_29993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__))
);

return c__27651__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30015 = arguments.length;
switch (G__30015) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30017,callback){
var map__30018 = p__30017;
var map__30018__$1 = ((((!((map__30018 == null)))?(((((map__30018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30018):map__30018);
var file_msg = map__30018__$1;
var namespace = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30018,map__30018__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30018,map__30018__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30020){
var map__30021 = p__30020;
var map__30021__$1 = ((((!((map__30021 == null)))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var file_msg = map__30021__$1;
var namespace = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30023){
var map__30024 = p__30023;
var map__30024__$1 = ((((!((map__30024 == null)))?(((((map__30024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30024):map__30024);
var file_msg = map__30024__$1;
var namespace = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30026,callback){
var map__30027 = p__30026;
var map__30027__$1 = ((((!((map__30027 == null)))?(((((map__30027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30027):map__30027);
var file_msg = map__30027__$1;
var request_url = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27651__auto___30077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___30077,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___30077,out){
return (function (state_30062){
var state_val_30063 = (state_30062[(1)]);
if((state_val_30063 === (1))){
var inst_30036 = cljs.core.seq.call(null,files);
var inst_30037 = cljs.core.first.call(null,inst_30036);
var inst_30038 = cljs.core.next.call(null,inst_30036);
var inst_30039 = files;
var state_30062__$1 = (function (){var statearr_30064 = state_30062;
(statearr_30064[(7)] = inst_30038);

(statearr_30064[(8)] = inst_30039);

(statearr_30064[(9)] = inst_30037);

return statearr_30064;
})();
var statearr_30065_30078 = state_30062__$1;
(statearr_30065_30078[(2)] = null);

(statearr_30065_30078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (2))){
var inst_30045 = (state_30062[(10)]);
var inst_30039 = (state_30062[(8)]);
var inst_30044 = cljs.core.seq.call(null,inst_30039);
var inst_30045__$1 = cljs.core.first.call(null,inst_30044);
var inst_30046 = cljs.core.next.call(null,inst_30044);
var inst_30047 = (inst_30045__$1 == null);
var inst_30048 = cljs.core.not.call(null,inst_30047);
var state_30062__$1 = (function (){var statearr_30066 = state_30062;
(statearr_30066[(10)] = inst_30045__$1);

(statearr_30066[(11)] = inst_30046);

return statearr_30066;
})();
if(inst_30048){
var statearr_30067_30079 = state_30062__$1;
(statearr_30067_30079[(1)] = (4));

} else {
var statearr_30068_30080 = state_30062__$1;
(statearr_30068_30080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (3))){
var inst_30060 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30062__$1,inst_30060);
} else {
if((state_val_30063 === (4))){
var inst_30045 = (state_30062[(10)]);
var inst_30050 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30045);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30062__$1,(7),inst_30050);
} else {
if((state_val_30063 === (5))){
var inst_30056 = cljs.core.async.close_BANG_.call(null,out);
var state_30062__$1 = state_30062;
var statearr_30069_30081 = state_30062__$1;
(statearr_30069_30081[(2)] = inst_30056);

(statearr_30069_30081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (6))){
var inst_30058 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
var statearr_30070_30082 = state_30062__$1;
(statearr_30070_30082[(2)] = inst_30058);

(statearr_30070_30082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (7))){
var inst_30046 = (state_30062[(11)]);
var inst_30052 = (state_30062[(2)]);
var inst_30053 = cljs.core.async.put_BANG_.call(null,out,inst_30052);
var inst_30039 = inst_30046;
var state_30062__$1 = (function (){var statearr_30071 = state_30062;
(statearr_30071[(12)] = inst_30053);

(statearr_30071[(8)] = inst_30039);

return statearr_30071;
})();
var statearr_30072_30083 = state_30062__$1;
(statearr_30072_30083[(2)] = null);

(statearr_30072_30083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27651__auto___30077,out))
;
return ((function (switch__27561__auto__,c__27651__auto___30077,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____0 = (function (){
var statearr_30073 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30073[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__);

(statearr_30073[(1)] = (1));

return statearr_30073;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____1 = (function (state_30062){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_30062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e30074){if((e30074 instanceof Object)){
var ex__27565__auto__ = e30074;
var statearr_30075_30084 = state_30062;
(statearr_30075_30084[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30085 = state_30062;
state_30062 = G__30085;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__ = function(state_30062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____1.call(this,state_30062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___30077,out))
})();
var state__27653__auto__ = (function (){var statearr_30076 = f__27652__auto__.call(null);
(statearr_30076[(6)] = c__27651__auto___30077);

return statearr_30076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___30077,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30086,opts){
var map__30087 = p__30086;
var map__30087__$1 = ((((!((map__30087 == null)))?(((((map__30087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);
var eval_body = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30089){var e = e30089;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30090_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30090_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30091){
var vec__30092 = p__30091;
var k = cljs.core.nth.call(null,vec__30092,(0),null);
var v = cljs.core.nth.call(null,vec__30092,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30095){
var vec__30096 = p__30095;
var k = cljs.core.nth.call(null,vec__30096,(0),null);
var v = cljs.core.nth.call(null,vec__30096,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30102,p__30103){
var map__30104 = p__30102;
var map__30104__$1 = ((((!((map__30104 == null)))?(((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var opts = map__30104__$1;
var before_jsload = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30105 = p__30103;
var map__30105__$1 = ((((!((map__30105 == null)))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);
var msg = map__30105__$1;
var files = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30259){
var state_val_30260 = (state_30259[(1)]);
if((state_val_30260 === (7))){
var inst_30121 = (state_30259[(7)]);
var inst_30122 = (state_30259[(8)]);
var inst_30119 = (state_30259[(9)]);
var inst_30120 = (state_30259[(10)]);
var inst_30127 = cljs.core._nth.call(null,inst_30120,inst_30122);
var inst_30128 = figwheel.client.file_reloading.eval_body.call(null,inst_30127,opts);
var inst_30129 = (inst_30122 + (1));
var tmp30261 = inst_30121;
var tmp30262 = inst_30119;
var tmp30263 = inst_30120;
var inst_30119__$1 = tmp30262;
var inst_30120__$1 = tmp30263;
var inst_30121__$1 = tmp30261;
var inst_30122__$1 = inst_30129;
var state_30259__$1 = (function (){var statearr_30264 = state_30259;
(statearr_30264[(7)] = inst_30121__$1);

(statearr_30264[(8)] = inst_30122__$1);

(statearr_30264[(11)] = inst_30128);

(statearr_30264[(9)] = inst_30119__$1);

(statearr_30264[(10)] = inst_30120__$1);

return statearr_30264;
})();
var statearr_30265_30348 = state_30259__$1;
(statearr_30265_30348[(2)] = null);

(statearr_30265_30348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (20))){
var inst_30162 = (state_30259[(12)]);
var inst_30170 = figwheel.client.file_reloading.sort_files.call(null,inst_30162);
var state_30259__$1 = state_30259;
var statearr_30266_30349 = state_30259__$1;
(statearr_30266_30349[(2)] = inst_30170);

(statearr_30266_30349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (27))){
var state_30259__$1 = state_30259;
var statearr_30267_30350 = state_30259__$1;
(statearr_30267_30350[(2)] = null);

(statearr_30267_30350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (1))){
var inst_30111 = (state_30259[(13)]);
var inst_30108 = before_jsload.call(null,files);
var inst_30109 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30110 = (function (){return ((function (inst_30111,inst_30108,inst_30109,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30099_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30099_SHARP_);
});
;})(inst_30111,inst_30108,inst_30109,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30111__$1 = cljs.core.filter.call(null,inst_30110,files);
var inst_30112 = cljs.core.not_empty.call(null,inst_30111__$1);
var state_30259__$1 = (function (){var statearr_30268 = state_30259;
(statearr_30268[(14)] = inst_30108);

(statearr_30268[(13)] = inst_30111__$1);

(statearr_30268[(15)] = inst_30109);

return statearr_30268;
})();
if(cljs.core.truth_(inst_30112)){
var statearr_30269_30351 = state_30259__$1;
(statearr_30269_30351[(1)] = (2));

} else {
var statearr_30270_30352 = state_30259__$1;
(statearr_30270_30352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (24))){
var state_30259__$1 = state_30259;
var statearr_30271_30353 = state_30259__$1;
(statearr_30271_30353[(2)] = null);

(statearr_30271_30353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (39))){
var inst_30212 = (state_30259[(16)]);
var state_30259__$1 = state_30259;
var statearr_30272_30354 = state_30259__$1;
(statearr_30272_30354[(2)] = inst_30212);

(statearr_30272_30354[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (46))){
var inst_30254 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30273_30355 = state_30259__$1;
(statearr_30273_30355[(2)] = inst_30254);

(statearr_30273_30355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (4))){
var inst_30156 = (state_30259[(2)]);
var inst_30157 = cljs.core.List.EMPTY;
var inst_30158 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30157);
var inst_30159 = (function (){return ((function (inst_30156,inst_30157,inst_30158,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30100_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30100_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30100_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30100_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30156,inst_30157,inst_30158,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30160 = cljs.core.filter.call(null,inst_30159,files);
var inst_30161 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30162 = cljs.core.concat.call(null,inst_30160,inst_30161);
var state_30259__$1 = (function (){var statearr_30274 = state_30259;
(statearr_30274[(17)] = inst_30158);

(statearr_30274[(18)] = inst_30156);

(statearr_30274[(12)] = inst_30162);

return statearr_30274;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30275_30356 = state_30259__$1;
(statearr_30275_30356[(1)] = (16));

} else {
var statearr_30276_30357 = state_30259__$1;
(statearr_30276_30357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (15))){
var inst_30146 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30277_30358 = state_30259__$1;
(statearr_30277_30358[(2)] = inst_30146);

(statearr_30277_30358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (21))){
var inst_30172 = (state_30259[(19)]);
var inst_30172__$1 = (state_30259[(2)]);
var inst_30173 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30172__$1);
var state_30259__$1 = (function (){var statearr_30278 = state_30259;
(statearr_30278[(19)] = inst_30172__$1);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(22),inst_30173);
} else {
if((state_val_30260 === (31))){
var inst_30257 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30259__$1,inst_30257);
} else {
if((state_val_30260 === (32))){
var inst_30212 = (state_30259[(16)]);
var inst_30217 = inst_30212.cljs$lang$protocol_mask$partition0$;
var inst_30218 = (inst_30217 & (64));
var inst_30219 = inst_30212.cljs$core$ISeq$;
var inst_30220 = (cljs.core.PROTOCOL_SENTINEL === inst_30219);
var inst_30221 = ((inst_30218) || (inst_30220));
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30221)){
var statearr_30279_30359 = state_30259__$1;
(statearr_30279_30359[(1)] = (35));

} else {
var statearr_30280_30360 = state_30259__$1;
(statearr_30280_30360[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (40))){
var inst_30234 = (state_30259[(20)]);
var inst_30233 = (state_30259[(2)]);
var inst_30234__$1 = cljs.core.get.call(null,inst_30233,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30235 = cljs.core.get.call(null,inst_30233,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30236 = cljs.core.not_empty.call(null,inst_30234__$1);
var state_30259__$1 = (function (){var statearr_30281 = state_30259;
(statearr_30281[(21)] = inst_30235);

(statearr_30281[(20)] = inst_30234__$1);

return statearr_30281;
})();
if(cljs.core.truth_(inst_30236)){
var statearr_30282_30361 = state_30259__$1;
(statearr_30282_30361[(1)] = (41));

} else {
var statearr_30283_30362 = state_30259__$1;
(statearr_30283_30362[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (33))){
var state_30259__$1 = state_30259;
var statearr_30284_30363 = state_30259__$1;
(statearr_30284_30363[(2)] = false);

(statearr_30284_30363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (13))){
var inst_30132 = (state_30259[(22)]);
var inst_30136 = cljs.core.chunk_first.call(null,inst_30132);
var inst_30137 = cljs.core.chunk_rest.call(null,inst_30132);
var inst_30138 = cljs.core.count.call(null,inst_30136);
var inst_30119 = inst_30137;
var inst_30120 = inst_30136;
var inst_30121 = inst_30138;
var inst_30122 = (0);
var state_30259__$1 = (function (){var statearr_30285 = state_30259;
(statearr_30285[(7)] = inst_30121);

(statearr_30285[(8)] = inst_30122);

(statearr_30285[(9)] = inst_30119);

(statearr_30285[(10)] = inst_30120);

return statearr_30285;
})();
var statearr_30286_30364 = state_30259__$1;
(statearr_30286_30364[(2)] = null);

(statearr_30286_30364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (22))){
var inst_30180 = (state_30259[(23)]);
var inst_30175 = (state_30259[(24)]);
var inst_30172 = (state_30259[(19)]);
var inst_30176 = (state_30259[(25)]);
var inst_30175__$1 = (state_30259[(2)]);
var inst_30176__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30175__$1);
var inst_30177 = (function (){var all_files = inst_30172;
var res_SINGLEQUOTE_ = inst_30175__$1;
var res = inst_30176__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30180,inst_30175,inst_30172,inst_30176,inst_30175__$1,inst_30176__$1,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30101_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30101_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30180,inst_30175,inst_30172,inst_30176,inst_30175__$1,inst_30176__$1,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30178 = cljs.core.filter.call(null,inst_30177,inst_30175__$1);
var inst_30179 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30180__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30179);
var inst_30181 = cljs.core.not_empty.call(null,inst_30180__$1);
var state_30259__$1 = (function (){var statearr_30287 = state_30259;
(statearr_30287[(23)] = inst_30180__$1);

(statearr_30287[(24)] = inst_30175__$1);

(statearr_30287[(26)] = inst_30178);

(statearr_30287[(25)] = inst_30176__$1);

return statearr_30287;
})();
if(cljs.core.truth_(inst_30181)){
var statearr_30288_30365 = state_30259__$1;
(statearr_30288_30365[(1)] = (23));

} else {
var statearr_30289_30366 = state_30259__$1;
(statearr_30289_30366[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (36))){
var state_30259__$1 = state_30259;
var statearr_30290_30367 = state_30259__$1;
(statearr_30290_30367[(2)] = false);

(statearr_30290_30367[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (41))){
var inst_30234 = (state_30259[(20)]);
var inst_30238 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30239 = cljs.core.map.call(null,inst_30238,inst_30234);
var inst_30240 = cljs.core.pr_str.call(null,inst_30239);
var inst_30241 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30240)].join('');
var inst_30242 = figwheel.client.utils.log.call(null,inst_30241);
var state_30259__$1 = state_30259;
var statearr_30291_30368 = state_30259__$1;
(statearr_30291_30368[(2)] = inst_30242);

(statearr_30291_30368[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (43))){
var inst_30235 = (state_30259[(21)]);
var inst_30245 = (state_30259[(2)]);
var inst_30246 = cljs.core.not_empty.call(null,inst_30235);
var state_30259__$1 = (function (){var statearr_30292 = state_30259;
(statearr_30292[(27)] = inst_30245);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30246)){
var statearr_30293_30369 = state_30259__$1;
(statearr_30293_30369[(1)] = (44));

} else {
var statearr_30294_30370 = state_30259__$1;
(statearr_30294_30370[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (29))){
var inst_30212 = (state_30259[(16)]);
var inst_30180 = (state_30259[(23)]);
var inst_30175 = (state_30259[(24)]);
var inst_30172 = (state_30259[(19)]);
var inst_30178 = (state_30259[(26)]);
var inst_30176 = (state_30259[(25)]);
var inst_30208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30211 = (function (){var all_files = inst_30172;
var res_SINGLEQUOTE_ = inst_30175;
var res = inst_30176;
var files_not_loaded = inst_30178;
var dependencies_that_loaded = inst_30180;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30212,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30208,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30210){
var map__30295 = p__30210;
var map__30295__$1 = ((((!((map__30295 == null)))?(((((map__30295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30295):map__30295);
var namespace = cljs.core.get.call(null,map__30295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30212,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30208,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30212__$1 = cljs.core.group_by.call(null,inst_30211,inst_30178);
var inst_30214 = (inst_30212__$1 == null);
var inst_30215 = cljs.core.not.call(null,inst_30214);
var state_30259__$1 = (function (){var statearr_30297 = state_30259;
(statearr_30297[(16)] = inst_30212__$1);

(statearr_30297[(28)] = inst_30208);

return statearr_30297;
})();
if(inst_30215){
var statearr_30298_30371 = state_30259__$1;
(statearr_30298_30371[(1)] = (32));

} else {
var statearr_30299_30372 = state_30259__$1;
(statearr_30299_30372[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (44))){
var inst_30235 = (state_30259[(21)]);
var inst_30248 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30235);
var inst_30249 = cljs.core.pr_str.call(null,inst_30248);
var inst_30250 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30249)].join('');
var inst_30251 = figwheel.client.utils.log.call(null,inst_30250);
var state_30259__$1 = state_30259;
var statearr_30300_30373 = state_30259__$1;
(statearr_30300_30373[(2)] = inst_30251);

(statearr_30300_30373[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (6))){
var inst_30153 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30301_30374 = state_30259__$1;
(statearr_30301_30374[(2)] = inst_30153);

(statearr_30301_30374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (28))){
var inst_30178 = (state_30259[(26)]);
var inst_30205 = (state_30259[(2)]);
var inst_30206 = cljs.core.not_empty.call(null,inst_30178);
var state_30259__$1 = (function (){var statearr_30302 = state_30259;
(statearr_30302[(29)] = inst_30205);

return statearr_30302;
})();
if(cljs.core.truth_(inst_30206)){
var statearr_30303_30375 = state_30259__$1;
(statearr_30303_30375[(1)] = (29));

} else {
var statearr_30304_30376 = state_30259__$1;
(statearr_30304_30376[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (25))){
var inst_30176 = (state_30259[(25)]);
var inst_30192 = (state_30259[(2)]);
var inst_30193 = cljs.core.not_empty.call(null,inst_30176);
var state_30259__$1 = (function (){var statearr_30305 = state_30259;
(statearr_30305[(30)] = inst_30192);

return statearr_30305;
})();
if(cljs.core.truth_(inst_30193)){
var statearr_30306_30377 = state_30259__$1;
(statearr_30306_30377[(1)] = (26));

} else {
var statearr_30307_30378 = state_30259__$1;
(statearr_30307_30378[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (34))){
var inst_30228 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30228)){
var statearr_30308_30379 = state_30259__$1;
(statearr_30308_30379[(1)] = (38));

} else {
var statearr_30309_30380 = state_30259__$1;
(statearr_30309_30380[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (17))){
var state_30259__$1 = state_30259;
var statearr_30310_30381 = state_30259__$1;
(statearr_30310_30381[(2)] = recompile_dependents);

(statearr_30310_30381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (3))){
var state_30259__$1 = state_30259;
var statearr_30311_30382 = state_30259__$1;
(statearr_30311_30382[(2)] = null);

(statearr_30311_30382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (12))){
var inst_30149 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30312_30383 = state_30259__$1;
(statearr_30312_30383[(2)] = inst_30149);

(statearr_30312_30383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (2))){
var inst_30111 = (state_30259[(13)]);
var inst_30118 = cljs.core.seq.call(null,inst_30111);
var inst_30119 = inst_30118;
var inst_30120 = null;
var inst_30121 = (0);
var inst_30122 = (0);
var state_30259__$1 = (function (){var statearr_30313 = state_30259;
(statearr_30313[(7)] = inst_30121);

(statearr_30313[(8)] = inst_30122);

(statearr_30313[(9)] = inst_30119);

(statearr_30313[(10)] = inst_30120);

return statearr_30313;
})();
var statearr_30314_30384 = state_30259__$1;
(statearr_30314_30384[(2)] = null);

(statearr_30314_30384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (23))){
var inst_30180 = (state_30259[(23)]);
var inst_30175 = (state_30259[(24)]);
var inst_30172 = (state_30259[(19)]);
var inst_30178 = (state_30259[(26)]);
var inst_30176 = (state_30259[(25)]);
var inst_30183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30185 = (function (){var all_files = inst_30172;
var res_SINGLEQUOTE_ = inst_30175;
var res = inst_30176;
var files_not_loaded = inst_30178;
var dependencies_that_loaded = inst_30180;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30183,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30184){
var map__30315 = p__30184;
var map__30315__$1 = ((((!((map__30315 == null)))?(((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var request_url = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30183,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30186 = cljs.core.reverse.call(null,inst_30180);
var inst_30187 = cljs.core.map.call(null,inst_30185,inst_30186);
var inst_30188 = cljs.core.pr_str.call(null,inst_30187);
var inst_30189 = figwheel.client.utils.log.call(null,inst_30188);
var state_30259__$1 = (function (){var statearr_30317 = state_30259;
(statearr_30317[(31)] = inst_30183);

return statearr_30317;
})();
var statearr_30318_30385 = state_30259__$1;
(statearr_30318_30385[(2)] = inst_30189);

(statearr_30318_30385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (35))){
var state_30259__$1 = state_30259;
var statearr_30319_30386 = state_30259__$1;
(statearr_30319_30386[(2)] = true);

(statearr_30319_30386[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (19))){
var inst_30162 = (state_30259[(12)]);
var inst_30168 = figwheel.client.file_reloading.expand_files.call(null,inst_30162);
var state_30259__$1 = state_30259;
var statearr_30320_30387 = state_30259__$1;
(statearr_30320_30387[(2)] = inst_30168);

(statearr_30320_30387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (11))){
var state_30259__$1 = state_30259;
var statearr_30321_30388 = state_30259__$1;
(statearr_30321_30388[(2)] = null);

(statearr_30321_30388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (9))){
var inst_30151 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30322_30389 = state_30259__$1;
(statearr_30322_30389[(2)] = inst_30151);

(statearr_30322_30389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (5))){
var inst_30121 = (state_30259[(7)]);
var inst_30122 = (state_30259[(8)]);
var inst_30124 = (inst_30122 < inst_30121);
var inst_30125 = inst_30124;
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30125)){
var statearr_30323_30390 = state_30259__$1;
(statearr_30323_30390[(1)] = (7));

} else {
var statearr_30324_30391 = state_30259__$1;
(statearr_30324_30391[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (14))){
var inst_30132 = (state_30259[(22)]);
var inst_30141 = cljs.core.first.call(null,inst_30132);
var inst_30142 = figwheel.client.file_reloading.eval_body.call(null,inst_30141,opts);
var inst_30143 = cljs.core.next.call(null,inst_30132);
var inst_30119 = inst_30143;
var inst_30120 = null;
var inst_30121 = (0);
var inst_30122 = (0);
var state_30259__$1 = (function (){var statearr_30325 = state_30259;
(statearr_30325[(7)] = inst_30121);

(statearr_30325[(8)] = inst_30122);

(statearr_30325[(32)] = inst_30142);

(statearr_30325[(9)] = inst_30119);

(statearr_30325[(10)] = inst_30120);

return statearr_30325;
})();
var statearr_30326_30392 = state_30259__$1;
(statearr_30326_30392[(2)] = null);

(statearr_30326_30392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (45))){
var state_30259__$1 = state_30259;
var statearr_30327_30393 = state_30259__$1;
(statearr_30327_30393[(2)] = null);

(statearr_30327_30393[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (26))){
var inst_30180 = (state_30259[(23)]);
var inst_30175 = (state_30259[(24)]);
var inst_30172 = (state_30259[(19)]);
var inst_30178 = (state_30259[(26)]);
var inst_30176 = (state_30259[(25)]);
var inst_30195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30197 = (function (){var all_files = inst_30172;
var res_SINGLEQUOTE_ = inst_30175;
var res = inst_30176;
var files_not_loaded = inst_30178;
var dependencies_that_loaded = inst_30180;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30195,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30196){
var map__30328 = p__30196;
var map__30328__$1 = ((((!((map__30328 == null)))?(((((map__30328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30328):map__30328);
var namespace = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30195,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30198 = cljs.core.map.call(null,inst_30197,inst_30176);
var inst_30199 = cljs.core.pr_str.call(null,inst_30198);
var inst_30200 = figwheel.client.utils.log.call(null,inst_30199);
var inst_30201 = (function (){var all_files = inst_30172;
var res_SINGLEQUOTE_ = inst_30175;
var res = inst_30176;
var files_not_loaded = inst_30178;
var dependencies_that_loaded = inst_30180;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30195,inst_30197,inst_30198,inst_30199,inst_30200,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30180,inst_30175,inst_30172,inst_30178,inst_30176,inst_30195,inst_30197,inst_30198,inst_30199,inst_30200,state_val_30260,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30202 = setTimeout(inst_30201,(10));
var state_30259__$1 = (function (){var statearr_30330 = state_30259;
(statearr_30330[(33)] = inst_30200);

(statearr_30330[(34)] = inst_30195);

return statearr_30330;
})();
var statearr_30331_30394 = state_30259__$1;
(statearr_30331_30394[(2)] = inst_30202);

(statearr_30331_30394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (16))){
var state_30259__$1 = state_30259;
var statearr_30332_30395 = state_30259__$1;
(statearr_30332_30395[(2)] = reload_dependents);

(statearr_30332_30395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (38))){
var inst_30212 = (state_30259[(16)]);
var inst_30230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30212);
var state_30259__$1 = state_30259;
var statearr_30333_30396 = state_30259__$1;
(statearr_30333_30396[(2)] = inst_30230);

(statearr_30333_30396[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (30))){
var state_30259__$1 = state_30259;
var statearr_30334_30397 = state_30259__$1;
(statearr_30334_30397[(2)] = null);

(statearr_30334_30397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (10))){
var inst_30132 = (state_30259[(22)]);
var inst_30134 = cljs.core.chunked_seq_QMARK_.call(null,inst_30132);
var state_30259__$1 = state_30259;
if(inst_30134){
var statearr_30335_30398 = state_30259__$1;
(statearr_30335_30398[(1)] = (13));

} else {
var statearr_30336_30399 = state_30259__$1;
(statearr_30336_30399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (18))){
var inst_30166 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30166)){
var statearr_30337_30400 = state_30259__$1;
(statearr_30337_30400[(1)] = (19));

} else {
var statearr_30338_30401 = state_30259__$1;
(statearr_30338_30401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (42))){
var state_30259__$1 = state_30259;
var statearr_30339_30402 = state_30259__$1;
(statearr_30339_30402[(2)] = null);

(statearr_30339_30402[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (37))){
var inst_30225 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30340_30403 = state_30259__$1;
(statearr_30340_30403[(2)] = inst_30225);

(statearr_30340_30403[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (8))){
var inst_30119 = (state_30259[(9)]);
var inst_30132 = (state_30259[(22)]);
var inst_30132__$1 = cljs.core.seq.call(null,inst_30119);
var state_30259__$1 = (function (){var statearr_30341 = state_30259;
(statearr_30341[(22)] = inst_30132__$1);

return statearr_30341;
})();
if(inst_30132__$1){
var statearr_30342_30404 = state_30259__$1;
(statearr_30342_30404[(1)] = (10));

} else {
var statearr_30343_30405 = state_30259__$1;
(statearr_30343_30405[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27561__auto__,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____0 = (function (){
var statearr_30344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30344[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__);

(statearr_30344[(1)] = (1));

return statearr_30344;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____1 = (function (state_30259){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_30259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e30345){if((e30345 instanceof Object)){
var ex__27565__auto__ = e30345;
var statearr_30346_30406 = state_30259;
(statearr_30346_30406[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30407 = state_30259;
state_30259 = G__30407;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__ = function(state_30259){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____1.call(this,state_30259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27653__auto__ = (function (){var statearr_30347 = f__27652__auto__.call(null);
(statearr_30347[(6)] = c__27651__auto__);

return statearr_30347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__,map__30104,map__30104__$1,opts,before_jsload,on_jsload,reload_dependents,map__30105,map__30105__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27651__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30410,link){
var map__30411 = p__30410;
var map__30411__$1 = ((((!((map__30411 == null)))?(((((map__30411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30411):map__30411);
var file = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30411,map__30411__$1,file){
return (function (p1__30408_SHARP_,p2__30409_SHARP_){
if(cljs.core._EQ_.call(null,p1__30408_SHARP_,p2__30409_SHARP_)){
return p1__30408_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30411,map__30411__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30414){
var map__30415 = p__30414;
var map__30415__$1 = ((((!((map__30415 == null)))?(((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var match_length = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30413_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30413_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30417_SHARP_,p2__30418_SHARP_){
return cljs.core.assoc.call(null,p1__30417_SHARP_,cljs.core.get.call(null,p2__30418_SHARP_,key),p2__30418_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30419 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30419);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30419);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30420,p__30421){
var map__30422 = p__30420;
var map__30422__$1 = ((((!((map__30422 == null)))?(((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30422):map__30422);
var on_cssload = cljs.core.get.call(null,map__30422__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30423 = p__30421;
var map__30423__$1 = ((((!((map__30423 == null)))?(((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var files_msg = map__30423__$1;
var files = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1557580559363
