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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49764_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49764_SHARP_));
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
var seq__49765 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49766 = null;
var count__49767 = (0);
var i__49768 = (0);
while(true){
if((i__49768 < count__49767)){
var n = cljs.core._nth.call(null,chunk__49766,i__49768);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__49769 = seq__49765;
var G__49770 = chunk__49766;
var G__49771 = count__49767;
var G__49772 = (i__49768 + (1));
seq__49765 = G__49769;
chunk__49766 = G__49770;
count__49767 = G__49771;
i__49768 = G__49772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49765);
if(temp__5457__auto__){
var seq__49765__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49765__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49765__$1);
var G__49773 = cljs.core.chunk_rest.call(null,seq__49765__$1);
var G__49774 = c__4319__auto__;
var G__49775 = cljs.core.count.call(null,c__4319__auto__);
var G__49776 = (0);
seq__49765 = G__49773;
chunk__49766 = G__49774;
count__49767 = G__49775;
i__49768 = G__49776;
continue;
} else {
var n = cljs.core.first.call(null,seq__49765__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__49777 = cljs.core.next.call(null,seq__49765__$1);
var G__49778 = null;
var G__49779 = (0);
var G__49780 = (0);
seq__49765 = G__49777;
chunk__49766 = G__49778;
count__49767 = G__49779;
i__49768 = G__49780;
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
return cljs.core.some.call(null,(function (p__49781){
var vec__49782 = p__49781;
var _ = cljs.core.nth.call(null,vec__49782,(0),null);
var v = cljs.core.nth.call(null,vec__49782,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__49785){
var vec__49786 = p__49785;
var k = cljs.core.nth.call(null,vec__49786,(0),null);
var v = cljs.core.nth.call(null,vec__49786,(1),null);
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

var seq__49798_49806 = cljs.core.seq.call(null,deps);
var chunk__49799_49807 = null;
var count__49800_49808 = (0);
var i__49801_49809 = (0);
while(true){
if((i__49801_49809 < count__49800_49808)){
var dep_49810 = cljs.core._nth.call(null,chunk__49799_49807,i__49801_49809);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_49810;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49810));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49810,(depth + (1)),state);
} else {
}


var G__49811 = seq__49798_49806;
var G__49812 = chunk__49799_49807;
var G__49813 = count__49800_49808;
var G__49814 = (i__49801_49809 + (1));
seq__49798_49806 = G__49811;
chunk__49799_49807 = G__49812;
count__49800_49808 = G__49813;
i__49801_49809 = G__49814;
continue;
} else {
var temp__5457__auto___49815 = cljs.core.seq.call(null,seq__49798_49806);
if(temp__5457__auto___49815){
var seq__49798_49816__$1 = temp__5457__auto___49815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49798_49816__$1)){
var c__4319__auto___49817 = cljs.core.chunk_first.call(null,seq__49798_49816__$1);
var G__49818 = cljs.core.chunk_rest.call(null,seq__49798_49816__$1);
var G__49819 = c__4319__auto___49817;
var G__49820 = cljs.core.count.call(null,c__4319__auto___49817);
var G__49821 = (0);
seq__49798_49806 = G__49818;
chunk__49799_49807 = G__49819;
count__49800_49808 = G__49820;
i__49801_49809 = G__49821;
continue;
} else {
var dep_49822 = cljs.core.first.call(null,seq__49798_49816__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_49822;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49822));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49822,(depth + (1)),state);
} else {
}


var G__49823 = cljs.core.next.call(null,seq__49798_49816__$1);
var G__49824 = null;
var G__49825 = (0);
var G__49826 = (0);
seq__49798_49806 = G__49823;
chunk__49799_49807 = G__49824;
count__49800_49808 = G__49825;
i__49801_49809 = G__49826;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49802){
var vec__49803 = p__49802;
var seq__49804 = cljs.core.seq.call(null,vec__49803);
var first__49805 = cljs.core.first.call(null,seq__49804);
var seq__49804__$1 = cljs.core.next.call(null,seq__49804);
var x = first__49805;
var xs = seq__49804__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49803,seq__49804,first__49805,seq__49804__$1,x,xs,get_deps__$1){
return (function (p1__49789_SHARP_){
return clojure.set.difference.call(null,p1__49789_SHARP_,x);
});})(vec__49803,seq__49804,first__49805,seq__49804__$1,x,xs,get_deps__$1))
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
var seq__49827 = cljs.core.seq.call(null,provides);
var chunk__49828 = null;
var count__49829 = (0);
var i__49830 = (0);
while(true){
if((i__49830 < count__49829)){
var prov = cljs.core._nth.call(null,chunk__49828,i__49830);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49831_49839 = cljs.core.seq.call(null,requires);
var chunk__49832_49840 = null;
var count__49833_49841 = (0);
var i__49834_49842 = (0);
while(true){
if((i__49834_49842 < count__49833_49841)){
var req_49843 = cljs.core._nth.call(null,chunk__49832_49840,i__49834_49842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49843,prov);


var G__49844 = seq__49831_49839;
var G__49845 = chunk__49832_49840;
var G__49846 = count__49833_49841;
var G__49847 = (i__49834_49842 + (1));
seq__49831_49839 = G__49844;
chunk__49832_49840 = G__49845;
count__49833_49841 = G__49846;
i__49834_49842 = G__49847;
continue;
} else {
var temp__5457__auto___49848 = cljs.core.seq.call(null,seq__49831_49839);
if(temp__5457__auto___49848){
var seq__49831_49849__$1 = temp__5457__auto___49848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49831_49849__$1)){
var c__4319__auto___49850 = cljs.core.chunk_first.call(null,seq__49831_49849__$1);
var G__49851 = cljs.core.chunk_rest.call(null,seq__49831_49849__$1);
var G__49852 = c__4319__auto___49850;
var G__49853 = cljs.core.count.call(null,c__4319__auto___49850);
var G__49854 = (0);
seq__49831_49839 = G__49851;
chunk__49832_49840 = G__49852;
count__49833_49841 = G__49853;
i__49834_49842 = G__49854;
continue;
} else {
var req_49855 = cljs.core.first.call(null,seq__49831_49849__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49855,prov);


var G__49856 = cljs.core.next.call(null,seq__49831_49849__$1);
var G__49857 = null;
var G__49858 = (0);
var G__49859 = (0);
seq__49831_49839 = G__49856;
chunk__49832_49840 = G__49857;
count__49833_49841 = G__49858;
i__49834_49842 = G__49859;
continue;
}
} else {
}
}
break;
}


var G__49860 = seq__49827;
var G__49861 = chunk__49828;
var G__49862 = count__49829;
var G__49863 = (i__49830 + (1));
seq__49827 = G__49860;
chunk__49828 = G__49861;
count__49829 = G__49862;
i__49830 = G__49863;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49827);
if(temp__5457__auto__){
var seq__49827__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49827__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49827__$1);
var G__49864 = cljs.core.chunk_rest.call(null,seq__49827__$1);
var G__49865 = c__4319__auto__;
var G__49866 = cljs.core.count.call(null,c__4319__auto__);
var G__49867 = (0);
seq__49827 = G__49864;
chunk__49828 = G__49865;
count__49829 = G__49866;
i__49830 = G__49867;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49827__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49835_49868 = cljs.core.seq.call(null,requires);
var chunk__49836_49869 = null;
var count__49837_49870 = (0);
var i__49838_49871 = (0);
while(true){
if((i__49838_49871 < count__49837_49870)){
var req_49872 = cljs.core._nth.call(null,chunk__49836_49869,i__49838_49871);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49872,prov);


var G__49873 = seq__49835_49868;
var G__49874 = chunk__49836_49869;
var G__49875 = count__49837_49870;
var G__49876 = (i__49838_49871 + (1));
seq__49835_49868 = G__49873;
chunk__49836_49869 = G__49874;
count__49837_49870 = G__49875;
i__49838_49871 = G__49876;
continue;
} else {
var temp__5457__auto___49877__$1 = cljs.core.seq.call(null,seq__49835_49868);
if(temp__5457__auto___49877__$1){
var seq__49835_49878__$1 = temp__5457__auto___49877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49835_49878__$1)){
var c__4319__auto___49879 = cljs.core.chunk_first.call(null,seq__49835_49878__$1);
var G__49880 = cljs.core.chunk_rest.call(null,seq__49835_49878__$1);
var G__49881 = c__4319__auto___49879;
var G__49882 = cljs.core.count.call(null,c__4319__auto___49879);
var G__49883 = (0);
seq__49835_49868 = G__49880;
chunk__49836_49869 = G__49881;
count__49837_49870 = G__49882;
i__49838_49871 = G__49883;
continue;
} else {
var req_49884 = cljs.core.first.call(null,seq__49835_49878__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49884,prov);


var G__49885 = cljs.core.next.call(null,seq__49835_49878__$1);
var G__49886 = null;
var G__49887 = (0);
var G__49888 = (0);
seq__49835_49868 = G__49885;
chunk__49836_49869 = G__49886;
count__49837_49870 = G__49887;
i__49838_49871 = G__49888;
continue;
}
} else {
}
}
break;
}


var G__49889 = cljs.core.next.call(null,seq__49827__$1);
var G__49890 = null;
var G__49891 = (0);
var G__49892 = (0);
seq__49827 = G__49889;
chunk__49828 = G__49890;
count__49829 = G__49891;
i__49830 = G__49892;
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
var seq__49893_49897 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49894_49898 = null;
var count__49895_49899 = (0);
var i__49896_49900 = (0);
while(true){
if((i__49896_49900 < count__49895_49899)){
var ns_49901 = cljs.core._nth.call(null,chunk__49894_49898,i__49896_49900);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49901);


var G__49902 = seq__49893_49897;
var G__49903 = chunk__49894_49898;
var G__49904 = count__49895_49899;
var G__49905 = (i__49896_49900 + (1));
seq__49893_49897 = G__49902;
chunk__49894_49898 = G__49903;
count__49895_49899 = G__49904;
i__49896_49900 = G__49905;
continue;
} else {
var temp__5457__auto___49906 = cljs.core.seq.call(null,seq__49893_49897);
if(temp__5457__auto___49906){
var seq__49893_49907__$1 = temp__5457__auto___49906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49893_49907__$1)){
var c__4319__auto___49908 = cljs.core.chunk_first.call(null,seq__49893_49907__$1);
var G__49909 = cljs.core.chunk_rest.call(null,seq__49893_49907__$1);
var G__49910 = c__4319__auto___49908;
var G__49911 = cljs.core.count.call(null,c__4319__auto___49908);
var G__49912 = (0);
seq__49893_49897 = G__49909;
chunk__49894_49898 = G__49910;
count__49895_49899 = G__49911;
i__49896_49900 = G__49912;
continue;
} else {
var ns_49913 = cljs.core.first.call(null,seq__49893_49907__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49913);


var G__49914 = cljs.core.next.call(null,seq__49893_49907__$1);
var G__49915 = null;
var G__49916 = (0);
var G__49917 = (0);
seq__49893_49897 = G__49914;
chunk__49894_49898 = G__49915;
count__49895_49899 = G__49916;
i__49896_49900 = G__49917;
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
var G__49918__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49919__i = 0, G__49919__a = new Array(arguments.length -  0);
while (G__49919__i < G__49919__a.length) {G__49919__a[G__49919__i] = arguments[G__49919__i + 0]; ++G__49919__i;}
  args = new cljs.core.IndexedSeq(G__49919__a,0,null);
} 
return G__49918__delegate.call(this,args);};
G__49918.cljs$lang$maxFixedArity = 0;
G__49918.cljs$lang$applyTo = (function (arglist__49920){
var args = cljs.core.seq(arglist__49920);
return G__49918__delegate(args);
});
G__49918.cljs$core$IFn$_invoke$arity$variadic = G__49918__delegate;
return G__49918;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49921_SHARP_,p2__49922_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49921_SHARP_)].join('')),p2__49922_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49923_SHARP_,p2__49924_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49923_SHARP_)].join(''),p2__49924_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49925 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49925.addCallback(((function (G__49925){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49925))
);

G__49925.addErrback(((function (G__49925){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49925))
);

return G__49925;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49926){if((e49926 instanceof Error)){
var e = e49926;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49926;

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
}catch (e49927){if((e49927 instanceof Error)){
var e = e49927;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49927;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49928 = cljs.core._EQ_;
var expr__49929 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49928.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49929))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49928.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49929))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49928.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49929))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49928,expr__49929){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49928,expr__49929))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49931,callback){
var map__49932 = p__49931;
var map__49932__$1 = ((((!((map__49932 == null)))?(((((map__49932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49932):map__49932);
var file_msg = map__49932__$1;
var request_url = cljs.core.get.call(null,map__49932__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49932,map__49932__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49932,map__49932__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__){
return (function (state_49970){
var state_val_49971 = (state_49970[(1)]);
if((state_val_49971 === (7))){
var inst_49966 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_49972_49998 = state_49970__$1;
(statearr_49972_49998[(2)] = inst_49966);

(statearr_49972_49998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (1))){
var state_49970__$1 = state_49970;
var statearr_49973_49999 = state_49970__$1;
(statearr_49973_49999[(2)] = null);

(statearr_49973_49999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (4))){
var inst_49936 = (state_49970[(7)]);
var inst_49936__$1 = (state_49970[(2)]);
var state_49970__$1 = (function (){var statearr_49974 = state_49970;
(statearr_49974[(7)] = inst_49936__$1);

return statearr_49974;
})();
if(cljs.core.truth_(inst_49936__$1)){
var statearr_49975_50000 = state_49970__$1;
(statearr_49975_50000[(1)] = (5));

} else {
var statearr_49976_50001 = state_49970__$1;
(statearr_49976_50001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (15))){
var inst_49949 = (state_49970[(8)]);
var inst_49951 = (state_49970[(9)]);
var inst_49953 = inst_49951.call(null,inst_49949);
var state_49970__$1 = state_49970;
var statearr_49977_50002 = state_49970__$1;
(statearr_49977_50002[(2)] = inst_49953);

(statearr_49977_50002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (13))){
var inst_49960 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_49978_50003 = state_49970__$1;
(statearr_49978_50003[(2)] = inst_49960);

(statearr_49978_50003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (6))){
var state_49970__$1 = state_49970;
var statearr_49979_50004 = state_49970__$1;
(statearr_49979_50004[(2)] = null);

(statearr_49979_50004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (17))){
var inst_49957 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_49980_50005 = state_49970__$1;
(statearr_49980_50005[(2)] = inst_49957);

(statearr_49980_50005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (3))){
var inst_49968 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49970__$1,inst_49968);
} else {
if((state_val_49971 === (12))){
var state_49970__$1 = state_49970;
var statearr_49981_50006 = state_49970__$1;
(statearr_49981_50006[(2)] = null);

(statearr_49981_50006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (2))){
var state_49970__$1 = state_49970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49970__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49971 === (11))){
var inst_49941 = (state_49970[(10)]);
var inst_49947 = figwheel.client.file_reloading.blocking_load.call(null,inst_49941);
var state_49970__$1 = state_49970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49970__$1,(14),inst_49947);
} else {
if((state_val_49971 === (9))){
var inst_49941 = (state_49970[(10)]);
var state_49970__$1 = state_49970;
if(cljs.core.truth_(inst_49941)){
var statearr_49982_50007 = state_49970__$1;
(statearr_49982_50007[(1)] = (11));

} else {
var statearr_49983_50008 = state_49970__$1;
(statearr_49983_50008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (5))){
var inst_49942 = (state_49970[(11)]);
var inst_49936 = (state_49970[(7)]);
var inst_49941 = cljs.core.nth.call(null,inst_49936,(0),null);
var inst_49942__$1 = cljs.core.nth.call(null,inst_49936,(1),null);
var state_49970__$1 = (function (){var statearr_49984 = state_49970;
(statearr_49984[(11)] = inst_49942__$1);

(statearr_49984[(10)] = inst_49941);

return statearr_49984;
})();
if(cljs.core.truth_(inst_49942__$1)){
var statearr_49985_50009 = state_49970__$1;
(statearr_49985_50009[(1)] = (8));

} else {
var statearr_49986_50010 = state_49970__$1;
(statearr_49986_50010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (14))){
var inst_49941 = (state_49970[(10)]);
var inst_49951 = (state_49970[(9)]);
var inst_49949 = (state_49970[(2)]);
var inst_49950 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49951__$1 = cljs.core.get.call(null,inst_49950,inst_49941);
var state_49970__$1 = (function (){var statearr_49987 = state_49970;
(statearr_49987[(8)] = inst_49949);

(statearr_49987[(9)] = inst_49951__$1);

return statearr_49987;
})();
if(cljs.core.truth_(inst_49951__$1)){
var statearr_49988_50011 = state_49970__$1;
(statearr_49988_50011[(1)] = (15));

} else {
var statearr_49989_50012 = state_49970__$1;
(statearr_49989_50012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (16))){
var inst_49949 = (state_49970[(8)]);
var inst_49955 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49949);
var state_49970__$1 = state_49970;
var statearr_49990_50013 = state_49970__$1;
(statearr_49990_50013[(2)] = inst_49955);

(statearr_49990_50013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (10))){
var inst_49962 = (state_49970[(2)]);
var state_49970__$1 = (function (){var statearr_49991 = state_49970;
(statearr_49991[(12)] = inst_49962);

return statearr_49991;
})();
var statearr_49992_50014 = state_49970__$1;
(statearr_49992_50014[(2)] = null);

(statearr_49992_50014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49971 === (8))){
var inst_49942 = (state_49970[(11)]);
var inst_49944 = eval(inst_49942);
var state_49970__$1 = state_49970;
var statearr_49993_50015 = state_49970__$1;
(statearr_49993_50015[(2)] = inst_49944);

(statearr_49993_50015[(1)] = (10));


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
});})(c__30792__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30636__auto__ = null;
var figwheel$client$file_reloading$state_machine__30636__auto____0 = (function (){
var statearr_49994 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49994[(0)] = figwheel$client$file_reloading$state_machine__30636__auto__);

(statearr_49994[(1)] = (1));

return statearr_49994;
});
var figwheel$client$file_reloading$state_machine__30636__auto____1 = (function (state_49970){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49995){if((e49995 instanceof Object)){
var ex__30639__auto__ = e49995;
var statearr_49996_50016 = state_49970;
(statearr_49996_50016[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50017 = state_49970;
state_49970 = G__50017;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30636__auto__ = function(state_49970){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30636__auto____1.call(this,state_49970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30636__auto____0;
figwheel$client$file_reloading$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30636__auto____1;
return figwheel$client$file_reloading$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_49997 = f__30793__auto__.call(null);
(statearr_49997[(6)] = c__30792__auto__);

return statearr_49997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50019 = arguments.length;
switch (G__50019) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50021,callback){
var map__50022 = p__50021;
var map__50022__$1 = ((((!((map__50022 == null)))?(((((map__50022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50022):map__50022);
var file_msg = map__50022__$1;
var namespace = cljs.core.get.call(null,map__50022__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50022,map__50022__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50022,map__50022__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50024){
var map__50025 = p__50024;
var map__50025__$1 = ((((!((map__50025 == null)))?(((((map__50025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50025):map__50025);
var file_msg = map__50025__$1;
var namespace = cljs.core.get.call(null,map__50025__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50027){
var map__50028 = p__50027;
var map__50028__$1 = ((((!((map__50028 == null)))?(((((map__50028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50028):map__50028);
var file_msg = map__50028__$1;
var namespace = cljs.core.get.call(null,map__50028__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50030,callback){
var map__50031 = p__50030;
var map__50031__$1 = ((((!((map__50031 == null)))?(((((map__50031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50031):map__50031);
var file_msg = map__50031__$1;
var request_url = cljs.core.get.call(null,map__50031__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50031__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30792__auto___50081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___50081,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___50081,out){
return (function (state_50066){
var state_val_50067 = (state_50066[(1)]);
if((state_val_50067 === (1))){
var inst_50040 = cljs.core.seq.call(null,files);
var inst_50041 = cljs.core.first.call(null,inst_50040);
var inst_50042 = cljs.core.next.call(null,inst_50040);
var inst_50043 = files;
var state_50066__$1 = (function (){var statearr_50068 = state_50066;
(statearr_50068[(7)] = inst_50042);

(statearr_50068[(8)] = inst_50043);

(statearr_50068[(9)] = inst_50041);

return statearr_50068;
})();
var statearr_50069_50082 = state_50066__$1;
(statearr_50069_50082[(2)] = null);

(statearr_50069_50082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (2))){
var inst_50043 = (state_50066[(8)]);
var inst_50049 = (state_50066[(10)]);
var inst_50048 = cljs.core.seq.call(null,inst_50043);
var inst_50049__$1 = cljs.core.first.call(null,inst_50048);
var inst_50050 = cljs.core.next.call(null,inst_50048);
var inst_50051 = (inst_50049__$1 == null);
var inst_50052 = cljs.core.not.call(null,inst_50051);
var state_50066__$1 = (function (){var statearr_50070 = state_50066;
(statearr_50070[(11)] = inst_50050);

(statearr_50070[(10)] = inst_50049__$1);

return statearr_50070;
})();
if(inst_50052){
var statearr_50071_50083 = state_50066__$1;
(statearr_50071_50083[(1)] = (4));

} else {
var statearr_50072_50084 = state_50066__$1;
(statearr_50072_50084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (3))){
var inst_50064 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50066__$1,inst_50064);
} else {
if((state_val_50067 === (4))){
var inst_50049 = (state_50066[(10)]);
var inst_50054 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50049);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50066__$1,(7),inst_50054);
} else {
if((state_val_50067 === (5))){
var inst_50060 = cljs.core.async.close_BANG_.call(null,out);
var state_50066__$1 = state_50066;
var statearr_50073_50085 = state_50066__$1;
(statearr_50073_50085[(2)] = inst_50060);

(statearr_50073_50085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (6))){
var inst_50062 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50074_50086 = state_50066__$1;
(statearr_50074_50086[(2)] = inst_50062);

(statearr_50074_50086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (7))){
var inst_50050 = (state_50066[(11)]);
var inst_50056 = (state_50066[(2)]);
var inst_50057 = cljs.core.async.put_BANG_.call(null,out,inst_50056);
var inst_50043 = inst_50050;
var state_50066__$1 = (function (){var statearr_50075 = state_50066;
(statearr_50075[(12)] = inst_50057);

(statearr_50075[(8)] = inst_50043);

return statearr_50075;
})();
var statearr_50076_50087 = state_50066__$1;
(statearr_50076_50087[(2)] = null);

(statearr_50076_50087[(1)] = (2));


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
});})(c__30792__auto___50081,out))
;
return ((function (switch__30635__auto__,c__30792__auto___50081,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0 = (function (){
var statearr_50077 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50077[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__);

(statearr_50077[(1)] = (1));

return statearr_50077;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1 = (function (state_50066){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_50066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e50078){if((e50078 instanceof Object)){
var ex__30639__auto__ = e50078;
var statearr_50079_50088 = state_50066;
(statearr_50079_50088[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50089 = state_50066;
state_50066 = G__50089;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__ = function(state_50066){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1.call(this,state_50066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___50081,out))
})();
var state__30794__auto__ = (function (){var statearr_50080 = f__30793__auto__.call(null);
(statearr_50080[(6)] = c__30792__auto___50081);

return statearr_50080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___50081,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50090,opts){
var map__50091 = p__50090;
var map__50091__$1 = ((((!((map__50091 == null)))?(((((map__50091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50091):map__50091);
var eval_body = cljs.core.get.call(null,map__50091__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e50093){var e = e50093;
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
return (function (p1__50094_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50094_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__50095){
var vec__50096 = p__50095;
var k = cljs.core.nth.call(null,vec__50096,(0),null);
var v = cljs.core.nth.call(null,vec__50096,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50099){
var vec__50100 = p__50099;
var k = cljs.core.nth.call(null,vec__50100,(0),null);
var v = cljs.core.nth.call(null,vec__50100,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50106,p__50107){
var map__50108 = p__50106;
var map__50108__$1 = ((((!((map__50108 == null)))?(((((map__50108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50108):map__50108);
var opts = map__50108__$1;
var before_jsload = cljs.core.get.call(null,map__50108__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50108__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50108__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50109 = p__50107;
var map__50109__$1 = ((((!((map__50109 == null)))?(((((map__50109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50109):map__50109);
var msg = map__50109__$1;
var files = cljs.core.get.call(null,map__50109__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50109__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50109__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50263){
var state_val_50264 = (state_50263[(1)]);
if((state_val_50264 === (7))){
var inst_50125 = (state_50263[(7)]);
var inst_50126 = (state_50263[(8)]);
var inst_50123 = (state_50263[(9)]);
var inst_50124 = (state_50263[(10)]);
var inst_50131 = cljs.core._nth.call(null,inst_50124,inst_50126);
var inst_50132 = figwheel.client.file_reloading.eval_body.call(null,inst_50131,opts);
var inst_50133 = (inst_50126 + (1));
var tmp50265 = inst_50125;
var tmp50266 = inst_50123;
var tmp50267 = inst_50124;
var inst_50123__$1 = tmp50266;
var inst_50124__$1 = tmp50267;
var inst_50125__$1 = tmp50265;
var inst_50126__$1 = inst_50133;
var state_50263__$1 = (function (){var statearr_50268 = state_50263;
(statearr_50268[(7)] = inst_50125__$1);

(statearr_50268[(8)] = inst_50126__$1);

(statearr_50268[(9)] = inst_50123__$1);

(statearr_50268[(11)] = inst_50132);

(statearr_50268[(10)] = inst_50124__$1);

return statearr_50268;
})();
var statearr_50269_50352 = state_50263__$1;
(statearr_50269_50352[(2)] = null);

(statearr_50269_50352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (20))){
var inst_50166 = (state_50263[(12)]);
var inst_50174 = figwheel.client.file_reloading.sort_files.call(null,inst_50166);
var state_50263__$1 = state_50263;
var statearr_50270_50353 = state_50263__$1;
(statearr_50270_50353[(2)] = inst_50174);

(statearr_50270_50353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (27))){
var state_50263__$1 = state_50263;
var statearr_50271_50354 = state_50263__$1;
(statearr_50271_50354[(2)] = null);

(statearr_50271_50354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (1))){
var inst_50115 = (state_50263[(13)]);
var inst_50112 = before_jsload.call(null,files);
var inst_50113 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50114 = (function (){return ((function (inst_50115,inst_50112,inst_50113,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50103_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50103_SHARP_);
});
;})(inst_50115,inst_50112,inst_50113,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50115__$1 = cljs.core.filter.call(null,inst_50114,files);
var inst_50116 = cljs.core.not_empty.call(null,inst_50115__$1);
var state_50263__$1 = (function (){var statearr_50272 = state_50263;
(statearr_50272[(14)] = inst_50113);

(statearr_50272[(13)] = inst_50115__$1);

(statearr_50272[(15)] = inst_50112);

return statearr_50272;
})();
if(cljs.core.truth_(inst_50116)){
var statearr_50273_50355 = state_50263__$1;
(statearr_50273_50355[(1)] = (2));

} else {
var statearr_50274_50356 = state_50263__$1;
(statearr_50274_50356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (24))){
var state_50263__$1 = state_50263;
var statearr_50275_50357 = state_50263__$1;
(statearr_50275_50357[(2)] = null);

(statearr_50275_50357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (39))){
var inst_50216 = (state_50263[(16)]);
var state_50263__$1 = state_50263;
var statearr_50276_50358 = state_50263__$1;
(statearr_50276_50358[(2)] = inst_50216);

(statearr_50276_50358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (46))){
var inst_50258 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50277_50359 = state_50263__$1;
(statearr_50277_50359[(2)] = inst_50258);

(statearr_50277_50359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (4))){
var inst_50160 = (state_50263[(2)]);
var inst_50161 = cljs.core.List.EMPTY;
var inst_50162 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50161);
var inst_50163 = (function (){return ((function (inst_50160,inst_50161,inst_50162,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50104_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50104_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50104_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50104_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_50160,inst_50161,inst_50162,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50164 = cljs.core.filter.call(null,inst_50163,files);
var inst_50165 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50166 = cljs.core.concat.call(null,inst_50164,inst_50165);
var state_50263__$1 = (function (){var statearr_50278 = state_50263;
(statearr_50278[(12)] = inst_50166);

(statearr_50278[(17)] = inst_50160);

(statearr_50278[(18)] = inst_50162);

return statearr_50278;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50279_50360 = state_50263__$1;
(statearr_50279_50360[(1)] = (16));

} else {
var statearr_50280_50361 = state_50263__$1;
(statearr_50280_50361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (15))){
var inst_50150 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50281_50362 = state_50263__$1;
(statearr_50281_50362[(2)] = inst_50150);

(statearr_50281_50362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (21))){
var inst_50176 = (state_50263[(19)]);
var inst_50176__$1 = (state_50263[(2)]);
var inst_50177 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50176__$1);
var state_50263__$1 = (function (){var statearr_50282 = state_50263;
(statearr_50282[(19)] = inst_50176__$1);

return statearr_50282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50263__$1,(22),inst_50177);
} else {
if((state_val_50264 === (31))){
var inst_50261 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50263__$1,inst_50261);
} else {
if((state_val_50264 === (32))){
var inst_50216 = (state_50263[(16)]);
var inst_50221 = inst_50216.cljs$lang$protocol_mask$partition0$;
var inst_50222 = (inst_50221 & (64));
var inst_50223 = inst_50216.cljs$core$ISeq$;
var inst_50224 = (cljs.core.PROTOCOL_SENTINEL === inst_50223);
var inst_50225 = ((inst_50222) || (inst_50224));
var state_50263__$1 = state_50263;
if(cljs.core.truth_(inst_50225)){
var statearr_50283_50363 = state_50263__$1;
(statearr_50283_50363[(1)] = (35));

} else {
var statearr_50284_50364 = state_50263__$1;
(statearr_50284_50364[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (40))){
var inst_50238 = (state_50263[(20)]);
var inst_50237 = (state_50263[(2)]);
var inst_50238__$1 = cljs.core.get.call(null,inst_50237,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50239 = cljs.core.get.call(null,inst_50237,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50240 = cljs.core.not_empty.call(null,inst_50238__$1);
var state_50263__$1 = (function (){var statearr_50285 = state_50263;
(statearr_50285[(20)] = inst_50238__$1);

(statearr_50285[(21)] = inst_50239);

return statearr_50285;
})();
if(cljs.core.truth_(inst_50240)){
var statearr_50286_50365 = state_50263__$1;
(statearr_50286_50365[(1)] = (41));

} else {
var statearr_50287_50366 = state_50263__$1;
(statearr_50287_50366[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (33))){
var state_50263__$1 = state_50263;
var statearr_50288_50367 = state_50263__$1;
(statearr_50288_50367[(2)] = false);

(statearr_50288_50367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (13))){
var inst_50136 = (state_50263[(22)]);
var inst_50140 = cljs.core.chunk_first.call(null,inst_50136);
var inst_50141 = cljs.core.chunk_rest.call(null,inst_50136);
var inst_50142 = cljs.core.count.call(null,inst_50140);
var inst_50123 = inst_50141;
var inst_50124 = inst_50140;
var inst_50125 = inst_50142;
var inst_50126 = (0);
var state_50263__$1 = (function (){var statearr_50289 = state_50263;
(statearr_50289[(7)] = inst_50125);

(statearr_50289[(8)] = inst_50126);

(statearr_50289[(9)] = inst_50123);

(statearr_50289[(10)] = inst_50124);

return statearr_50289;
})();
var statearr_50290_50368 = state_50263__$1;
(statearr_50290_50368[(2)] = null);

(statearr_50290_50368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (22))){
var inst_50179 = (state_50263[(23)]);
var inst_50184 = (state_50263[(24)]);
var inst_50180 = (state_50263[(25)]);
var inst_50176 = (state_50263[(19)]);
var inst_50179__$1 = (state_50263[(2)]);
var inst_50180__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50179__$1);
var inst_50181 = (function (){var all_files = inst_50176;
var res_SINGLEQUOTE_ = inst_50179__$1;
var res = inst_50180__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50179,inst_50184,inst_50180,inst_50176,inst_50179__$1,inst_50180__$1,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50105_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50105_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50179,inst_50184,inst_50180,inst_50176,inst_50179__$1,inst_50180__$1,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50182 = cljs.core.filter.call(null,inst_50181,inst_50179__$1);
var inst_50183 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50184__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50183);
var inst_50185 = cljs.core.not_empty.call(null,inst_50184__$1);
var state_50263__$1 = (function (){var statearr_50291 = state_50263;
(statearr_50291[(26)] = inst_50182);

(statearr_50291[(23)] = inst_50179__$1);

(statearr_50291[(24)] = inst_50184__$1);

(statearr_50291[(25)] = inst_50180__$1);

return statearr_50291;
})();
if(cljs.core.truth_(inst_50185)){
var statearr_50292_50369 = state_50263__$1;
(statearr_50292_50369[(1)] = (23));

} else {
var statearr_50293_50370 = state_50263__$1;
(statearr_50293_50370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (36))){
var state_50263__$1 = state_50263;
var statearr_50294_50371 = state_50263__$1;
(statearr_50294_50371[(2)] = false);

(statearr_50294_50371[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (41))){
var inst_50238 = (state_50263[(20)]);
var inst_50242 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50243 = cljs.core.map.call(null,inst_50242,inst_50238);
var inst_50244 = cljs.core.pr_str.call(null,inst_50243);
var inst_50245 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50244)].join('');
var inst_50246 = figwheel.client.utils.log.call(null,inst_50245);
var state_50263__$1 = state_50263;
var statearr_50295_50372 = state_50263__$1;
(statearr_50295_50372[(2)] = inst_50246);

(statearr_50295_50372[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (43))){
var inst_50239 = (state_50263[(21)]);
var inst_50249 = (state_50263[(2)]);
var inst_50250 = cljs.core.not_empty.call(null,inst_50239);
var state_50263__$1 = (function (){var statearr_50296 = state_50263;
(statearr_50296[(27)] = inst_50249);

return statearr_50296;
})();
if(cljs.core.truth_(inst_50250)){
var statearr_50297_50373 = state_50263__$1;
(statearr_50297_50373[(1)] = (44));

} else {
var statearr_50298_50374 = state_50263__$1;
(statearr_50298_50374[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (29))){
var inst_50182 = (state_50263[(26)]);
var inst_50179 = (state_50263[(23)]);
var inst_50184 = (state_50263[(24)]);
var inst_50216 = (state_50263[(16)]);
var inst_50180 = (state_50263[(25)]);
var inst_50176 = (state_50263[(19)]);
var inst_50212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50215 = (function (){var all_files = inst_50176;
var res_SINGLEQUOTE_ = inst_50179;
var res = inst_50180;
var files_not_loaded = inst_50182;
var dependencies_that_loaded = inst_50184;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50216,inst_50180,inst_50176,inst_50212,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50214){
var map__50299 = p__50214;
var map__50299__$1 = ((((!((map__50299 == null)))?(((((map__50299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50299):map__50299);
var namespace = cljs.core.get.call(null,map__50299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50216,inst_50180,inst_50176,inst_50212,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50216__$1 = cljs.core.group_by.call(null,inst_50215,inst_50182);
var inst_50218 = (inst_50216__$1 == null);
var inst_50219 = cljs.core.not.call(null,inst_50218);
var state_50263__$1 = (function (){var statearr_50301 = state_50263;
(statearr_50301[(28)] = inst_50212);

(statearr_50301[(16)] = inst_50216__$1);

return statearr_50301;
})();
if(inst_50219){
var statearr_50302_50375 = state_50263__$1;
(statearr_50302_50375[(1)] = (32));

} else {
var statearr_50303_50376 = state_50263__$1;
(statearr_50303_50376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (44))){
var inst_50239 = (state_50263[(21)]);
var inst_50252 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50239);
var inst_50253 = cljs.core.pr_str.call(null,inst_50252);
var inst_50254 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50253)].join('');
var inst_50255 = figwheel.client.utils.log.call(null,inst_50254);
var state_50263__$1 = state_50263;
var statearr_50304_50377 = state_50263__$1;
(statearr_50304_50377[(2)] = inst_50255);

(statearr_50304_50377[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (6))){
var inst_50157 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50305_50378 = state_50263__$1;
(statearr_50305_50378[(2)] = inst_50157);

(statearr_50305_50378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (28))){
var inst_50182 = (state_50263[(26)]);
var inst_50209 = (state_50263[(2)]);
var inst_50210 = cljs.core.not_empty.call(null,inst_50182);
var state_50263__$1 = (function (){var statearr_50306 = state_50263;
(statearr_50306[(29)] = inst_50209);

return statearr_50306;
})();
if(cljs.core.truth_(inst_50210)){
var statearr_50307_50379 = state_50263__$1;
(statearr_50307_50379[(1)] = (29));

} else {
var statearr_50308_50380 = state_50263__$1;
(statearr_50308_50380[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (25))){
var inst_50180 = (state_50263[(25)]);
var inst_50196 = (state_50263[(2)]);
var inst_50197 = cljs.core.not_empty.call(null,inst_50180);
var state_50263__$1 = (function (){var statearr_50309 = state_50263;
(statearr_50309[(30)] = inst_50196);

return statearr_50309;
})();
if(cljs.core.truth_(inst_50197)){
var statearr_50310_50381 = state_50263__$1;
(statearr_50310_50381[(1)] = (26));

} else {
var statearr_50311_50382 = state_50263__$1;
(statearr_50311_50382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (34))){
var inst_50232 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
if(cljs.core.truth_(inst_50232)){
var statearr_50312_50383 = state_50263__$1;
(statearr_50312_50383[(1)] = (38));

} else {
var statearr_50313_50384 = state_50263__$1;
(statearr_50313_50384[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (17))){
var state_50263__$1 = state_50263;
var statearr_50314_50385 = state_50263__$1;
(statearr_50314_50385[(2)] = recompile_dependents);

(statearr_50314_50385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (3))){
var state_50263__$1 = state_50263;
var statearr_50315_50386 = state_50263__$1;
(statearr_50315_50386[(2)] = null);

(statearr_50315_50386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (12))){
var inst_50153 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50316_50387 = state_50263__$1;
(statearr_50316_50387[(2)] = inst_50153);

(statearr_50316_50387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (2))){
var inst_50115 = (state_50263[(13)]);
var inst_50122 = cljs.core.seq.call(null,inst_50115);
var inst_50123 = inst_50122;
var inst_50124 = null;
var inst_50125 = (0);
var inst_50126 = (0);
var state_50263__$1 = (function (){var statearr_50317 = state_50263;
(statearr_50317[(7)] = inst_50125);

(statearr_50317[(8)] = inst_50126);

(statearr_50317[(9)] = inst_50123);

(statearr_50317[(10)] = inst_50124);

return statearr_50317;
})();
var statearr_50318_50388 = state_50263__$1;
(statearr_50318_50388[(2)] = null);

(statearr_50318_50388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (23))){
var inst_50182 = (state_50263[(26)]);
var inst_50179 = (state_50263[(23)]);
var inst_50184 = (state_50263[(24)]);
var inst_50180 = (state_50263[(25)]);
var inst_50176 = (state_50263[(19)]);
var inst_50187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50189 = (function (){var all_files = inst_50176;
var res_SINGLEQUOTE_ = inst_50179;
var res = inst_50180;
var files_not_loaded = inst_50182;
var dependencies_that_loaded = inst_50184;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50187,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50188){
var map__50319 = p__50188;
var map__50319__$1 = ((((!((map__50319 == null)))?(((((map__50319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50319):map__50319);
var request_url = cljs.core.get.call(null,map__50319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50187,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50190 = cljs.core.reverse.call(null,inst_50184);
var inst_50191 = cljs.core.map.call(null,inst_50189,inst_50190);
var inst_50192 = cljs.core.pr_str.call(null,inst_50191);
var inst_50193 = figwheel.client.utils.log.call(null,inst_50192);
var state_50263__$1 = (function (){var statearr_50321 = state_50263;
(statearr_50321[(31)] = inst_50187);

return statearr_50321;
})();
var statearr_50322_50389 = state_50263__$1;
(statearr_50322_50389[(2)] = inst_50193);

(statearr_50322_50389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (35))){
var state_50263__$1 = state_50263;
var statearr_50323_50390 = state_50263__$1;
(statearr_50323_50390[(2)] = true);

(statearr_50323_50390[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (19))){
var inst_50166 = (state_50263[(12)]);
var inst_50172 = figwheel.client.file_reloading.expand_files.call(null,inst_50166);
var state_50263__$1 = state_50263;
var statearr_50324_50391 = state_50263__$1;
(statearr_50324_50391[(2)] = inst_50172);

(statearr_50324_50391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (11))){
var state_50263__$1 = state_50263;
var statearr_50325_50392 = state_50263__$1;
(statearr_50325_50392[(2)] = null);

(statearr_50325_50392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (9))){
var inst_50155 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50326_50393 = state_50263__$1;
(statearr_50326_50393[(2)] = inst_50155);

(statearr_50326_50393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (5))){
var inst_50125 = (state_50263[(7)]);
var inst_50126 = (state_50263[(8)]);
var inst_50128 = (inst_50126 < inst_50125);
var inst_50129 = inst_50128;
var state_50263__$1 = state_50263;
if(cljs.core.truth_(inst_50129)){
var statearr_50327_50394 = state_50263__$1;
(statearr_50327_50394[(1)] = (7));

} else {
var statearr_50328_50395 = state_50263__$1;
(statearr_50328_50395[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (14))){
var inst_50136 = (state_50263[(22)]);
var inst_50145 = cljs.core.first.call(null,inst_50136);
var inst_50146 = figwheel.client.file_reloading.eval_body.call(null,inst_50145,opts);
var inst_50147 = cljs.core.next.call(null,inst_50136);
var inst_50123 = inst_50147;
var inst_50124 = null;
var inst_50125 = (0);
var inst_50126 = (0);
var state_50263__$1 = (function (){var statearr_50329 = state_50263;
(statearr_50329[(7)] = inst_50125);

(statearr_50329[(32)] = inst_50146);

(statearr_50329[(8)] = inst_50126);

(statearr_50329[(9)] = inst_50123);

(statearr_50329[(10)] = inst_50124);

return statearr_50329;
})();
var statearr_50330_50396 = state_50263__$1;
(statearr_50330_50396[(2)] = null);

(statearr_50330_50396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (45))){
var state_50263__$1 = state_50263;
var statearr_50331_50397 = state_50263__$1;
(statearr_50331_50397[(2)] = null);

(statearr_50331_50397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (26))){
var inst_50182 = (state_50263[(26)]);
var inst_50179 = (state_50263[(23)]);
var inst_50184 = (state_50263[(24)]);
var inst_50180 = (state_50263[(25)]);
var inst_50176 = (state_50263[(19)]);
var inst_50199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50201 = (function (){var all_files = inst_50176;
var res_SINGLEQUOTE_ = inst_50179;
var res = inst_50180;
var files_not_loaded = inst_50182;
var dependencies_that_loaded = inst_50184;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50199,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50200){
var map__50332 = p__50200;
var map__50332__$1 = ((((!((map__50332 == null)))?(((((map__50332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50332):map__50332);
var namespace = cljs.core.get.call(null,map__50332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50199,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50202 = cljs.core.map.call(null,inst_50201,inst_50180);
var inst_50203 = cljs.core.pr_str.call(null,inst_50202);
var inst_50204 = figwheel.client.utils.log.call(null,inst_50203);
var inst_50205 = (function (){var all_files = inst_50176;
var res_SINGLEQUOTE_ = inst_50179;
var res = inst_50180;
var files_not_loaded = inst_50182;
var dependencies_that_loaded = inst_50184;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50199,inst_50201,inst_50202,inst_50203,inst_50204,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50182,inst_50179,inst_50184,inst_50180,inst_50176,inst_50199,inst_50201,inst_50202,inst_50203,inst_50204,state_val_50264,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50206 = setTimeout(inst_50205,(10));
var state_50263__$1 = (function (){var statearr_50334 = state_50263;
(statearr_50334[(33)] = inst_50199);

(statearr_50334[(34)] = inst_50204);

return statearr_50334;
})();
var statearr_50335_50398 = state_50263__$1;
(statearr_50335_50398[(2)] = inst_50206);

(statearr_50335_50398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (16))){
var state_50263__$1 = state_50263;
var statearr_50336_50399 = state_50263__$1;
(statearr_50336_50399[(2)] = reload_dependents);

(statearr_50336_50399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (38))){
var inst_50216 = (state_50263[(16)]);
var inst_50234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50216);
var state_50263__$1 = state_50263;
var statearr_50337_50400 = state_50263__$1;
(statearr_50337_50400[(2)] = inst_50234);

(statearr_50337_50400[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (30))){
var state_50263__$1 = state_50263;
var statearr_50338_50401 = state_50263__$1;
(statearr_50338_50401[(2)] = null);

(statearr_50338_50401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (10))){
var inst_50136 = (state_50263[(22)]);
var inst_50138 = cljs.core.chunked_seq_QMARK_.call(null,inst_50136);
var state_50263__$1 = state_50263;
if(inst_50138){
var statearr_50339_50402 = state_50263__$1;
(statearr_50339_50402[(1)] = (13));

} else {
var statearr_50340_50403 = state_50263__$1;
(statearr_50340_50403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (18))){
var inst_50170 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
if(cljs.core.truth_(inst_50170)){
var statearr_50341_50404 = state_50263__$1;
(statearr_50341_50404[(1)] = (19));

} else {
var statearr_50342_50405 = state_50263__$1;
(statearr_50342_50405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (42))){
var state_50263__$1 = state_50263;
var statearr_50343_50406 = state_50263__$1;
(statearr_50343_50406[(2)] = null);

(statearr_50343_50406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (37))){
var inst_50229 = (state_50263[(2)]);
var state_50263__$1 = state_50263;
var statearr_50344_50407 = state_50263__$1;
(statearr_50344_50407[(2)] = inst_50229);

(statearr_50344_50407[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50264 === (8))){
var inst_50123 = (state_50263[(9)]);
var inst_50136 = (state_50263[(22)]);
var inst_50136__$1 = cljs.core.seq.call(null,inst_50123);
var state_50263__$1 = (function (){var statearr_50345 = state_50263;
(statearr_50345[(22)] = inst_50136__$1);

return statearr_50345;
})();
if(inst_50136__$1){
var statearr_50346_50408 = state_50263__$1;
(statearr_50346_50408[(1)] = (10));

} else {
var statearr_50347_50409 = state_50263__$1;
(statearr_50347_50409[(1)] = (11));

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
});})(c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30635__auto__,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0 = (function (){
var statearr_50348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50348[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__);

(statearr_50348[(1)] = (1));

return statearr_50348;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1 = (function (state_50263){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_50263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e50349){if((e50349 instanceof Object)){
var ex__30639__auto__ = e50349;
var statearr_50350_50410 = state_50263;
(statearr_50350_50410[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50411 = state_50263;
state_50263 = G__50411;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__ = function(state_50263){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1.call(this,state_50263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30794__auto__ = (function (){var statearr_50351 = f__30793__auto__.call(null);
(statearr_50351[(6)] = c__30792__auto__);

return statearr_50351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,map__50108,map__50108__$1,opts,before_jsload,on_jsload,reload_dependents,map__50109,map__50109__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30792__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50414,link){
var map__50415 = p__50414;
var map__50415__$1 = ((((!((map__50415 == null)))?(((((map__50415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50415):map__50415);
var file = cljs.core.get.call(null,map__50415__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__50415,map__50415__$1,file){
return (function (p1__50412_SHARP_,p2__50413_SHARP_){
if(cljs.core._EQ_.call(null,p1__50412_SHARP_,p2__50413_SHARP_)){
return p1__50412_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__50415,map__50415__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50418){
var map__50419 = p__50418;
var map__50419__$1 = ((((!((map__50419 == null)))?(((((map__50419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50419):map__50419);
var match_length = cljs.core.get.call(null,map__50419__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50419__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50417_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50417_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50421_SHARP_,p2__50422_SHARP_){
return cljs.core.assoc.call(null,p1__50421_SHARP_,cljs.core.get.call(null,p2__50422_SHARP_,key),p2__50422_SHARP_);
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
var loaded_f_datas_50423 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50423);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50423);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50424,p__50425){
var map__50426 = p__50424;
var map__50426__$1 = ((((!((map__50426 == null)))?(((((map__50426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50426):map__50426);
var on_cssload = cljs.core.get.call(null,map__50426__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50427 = p__50425;
var map__50427__$1 = ((((!((map__50427 == null)))?(((((map__50427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50427):map__50427);
var files_msg = map__50427__$1;
var files = cljs.core.get.call(null,map__50427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1557588326472
