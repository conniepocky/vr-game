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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35541_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35541_SHARP_));
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
var seq__35542 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35543 = null;
var count__35544 = (0);
var i__35545 = (0);
while(true){
if((i__35545 < count__35544)){
var n = cljs.core._nth.call(null,chunk__35543,i__35545);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35546 = seq__35542;
var G__35547 = chunk__35543;
var G__35548 = count__35544;
var G__35549 = (i__35545 + (1));
seq__35542 = G__35546;
chunk__35543 = G__35547;
count__35544 = G__35548;
i__35545 = G__35549;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35542);
if(temp__5457__auto__){
var seq__35542__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35542__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35542__$1);
var G__35550 = cljs.core.chunk_rest.call(null,seq__35542__$1);
var G__35551 = c__4319__auto__;
var G__35552 = cljs.core.count.call(null,c__4319__auto__);
var G__35553 = (0);
seq__35542 = G__35550;
chunk__35543 = G__35551;
count__35544 = G__35552;
i__35545 = G__35553;
continue;
} else {
var n = cljs.core.first.call(null,seq__35542__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35554 = cljs.core.next.call(null,seq__35542__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__35542 = G__35554;
chunk__35543 = G__35555;
count__35544 = G__35556;
i__35545 = G__35557;
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
return cljs.core.some.call(null,(function (p__35558){
var vec__35559 = p__35558;
var _ = cljs.core.nth.call(null,vec__35559,(0),null);
var v = cljs.core.nth.call(null,vec__35559,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__35562){
var vec__35563 = p__35562;
var k = cljs.core.nth.call(null,vec__35563,(0),null);
var v = cljs.core.nth.call(null,vec__35563,(1),null);
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

var seq__35575_35583 = cljs.core.seq.call(null,deps);
var chunk__35576_35584 = null;
var count__35577_35585 = (0);
var i__35578_35586 = (0);
while(true){
if((i__35578_35586 < count__35577_35585)){
var dep_35587 = cljs.core._nth.call(null,chunk__35576_35584,i__35578_35586);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_35587;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35587));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35587,(depth + (1)),state);
} else {
}


var G__35588 = seq__35575_35583;
var G__35589 = chunk__35576_35584;
var G__35590 = count__35577_35585;
var G__35591 = (i__35578_35586 + (1));
seq__35575_35583 = G__35588;
chunk__35576_35584 = G__35589;
count__35577_35585 = G__35590;
i__35578_35586 = G__35591;
continue;
} else {
var temp__5457__auto___35592 = cljs.core.seq.call(null,seq__35575_35583);
if(temp__5457__auto___35592){
var seq__35575_35593__$1 = temp__5457__auto___35592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35575_35593__$1)){
var c__4319__auto___35594 = cljs.core.chunk_first.call(null,seq__35575_35593__$1);
var G__35595 = cljs.core.chunk_rest.call(null,seq__35575_35593__$1);
var G__35596 = c__4319__auto___35594;
var G__35597 = cljs.core.count.call(null,c__4319__auto___35594);
var G__35598 = (0);
seq__35575_35583 = G__35595;
chunk__35576_35584 = G__35596;
count__35577_35585 = G__35597;
i__35578_35586 = G__35598;
continue;
} else {
var dep_35599 = cljs.core.first.call(null,seq__35575_35593__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_35599;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35599));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35599,(depth + (1)),state);
} else {
}


var G__35600 = cljs.core.next.call(null,seq__35575_35593__$1);
var G__35601 = null;
var G__35602 = (0);
var G__35603 = (0);
seq__35575_35583 = G__35600;
chunk__35576_35584 = G__35601;
count__35577_35585 = G__35602;
i__35578_35586 = G__35603;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35579){
var vec__35580 = p__35579;
var seq__35581 = cljs.core.seq.call(null,vec__35580);
var first__35582 = cljs.core.first.call(null,seq__35581);
var seq__35581__$1 = cljs.core.next.call(null,seq__35581);
var x = first__35582;
var xs = seq__35581__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35580,seq__35581,first__35582,seq__35581__$1,x,xs,get_deps__$1){
return (function (p1__35566_SHARP_){
return clojure.set.difference.call(null,p1__35566_SHARP_,x);
});})(vec__35580,seq__35581,first__35582,seq__35581__$1,x,xs,get_deps__$1))
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
var seq__35604 = cljs.core.seq.call(null,provides);
var chunk__35605 = null;
var count__35606 = (0);
var i__35607 = (0);
while(true){
if((i__35607 < count__35606)){
var prov = cljs.core._nth.call(null,chunk__35605,i__35607);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35608_35616 = cljs.core.seq.call(null,requires);
var chunk__35609_35617 = null;
var count__35610_35618 = (0);
var i__35611_35619 = (0);
while(true){
if((i__35611_35619 < count__35610_35618)){
var req_35620 = cljs.core._nth.call(null,chunk__35609_35617,i__35611_35619);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35620,prov);


var G__35621 = seq__35608_35616;
var G__35622 = chunk__35609_35617;
var G__35623 = count__35610_35618;
var G__35624 = (i__35611_35619 + (1));
seq__35608_35616 = G__35621;
chunk__35609_35617 = G__35622;
count__35610_35618 = G__35623;
i__35611_35619 = G__35624;
continue;
} else {
var temp__5457__auto___35625 = cljs.core.seq.call(null,seq__35608_35616);
if(temp__5457__auto___35625){
var seq__35608_35626__$1 = temp__5457__auto___35625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35608_35626__$1)){
var c__4319__auto___35627 = cljs.core.chunk_first.call(null,seq__35608_35626__$1);
var G__35628 = cljs.core.chunk_rest.call(null,seq__35608_35626__$1);
var G__35629 = c__4319__auto___35627;
var G__35630 = cljs.core.count.call(null,c__4319__auto___35627);
var G__35631 = (0);
seq__35608_35616 = G__35628;
chunk__35609_35617 = G__35629;
count__35610_35618 = G__35630;
i__35611_35619 = G__35631;
continue;
} else {
var req_35632 = cljs.core.first.call(null,seq__35608_35626__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35632,prov);


var G__35633 = cljs.core.next.call(null,seq__35608_35626__$1);
var G__35634 = null;
var G__35635 = (0);
var G__35636 = (0);
seq__35608_35616 = G__35633;
chunk__35609_35617 = G__35634;
count__35610_35618 = G__35635;
i__35611_35619 = G__35636;
continue;
}
} else {
}
}
break;
}


var G__35637 = seq__35604;
var G__35638 = chunk__35605;
var G__35639 = count__35606;
var G__35640 = (i__35607 + (1));
seq__35604 = G__35637;
chunk__35605 = G__35638;
count__35606 = G__35639;
i__35607 = G__35640;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35604);
if(temp__5457__auto__){
var seq__35604__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35604__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35604__$1);
var G__35641 = cljs.core.chunk_rest.call(null,seq__35604__$1);
var G__35642 = c__4319__auto__;
var G__35643 = cljs.core.count.call(null,c__4319__auto__);
var G__35644 = (0);
seq__35604 = G__35641;
chunk__35605 = G__35642;
count__35606 = G__35643;
i__35607 = G__35644;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35604__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35612_35645 = cljs.core.seq.call(null,requires);
var chunk__35613_35646 = null;
var count__35614_35647 = (0);
var i__35615_35648 = (0);
while(true){
if((i__35615_35648 < count__35614_35647)){
var req_35649 = cljs.core._nth.call(null,chunk__35613_35646,i__35615_35648);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35649,prov);


var G__35650 = seq__35612_35645;
var G__35651 = chunk__35613_35646;
var G__35652 = count__35614_35647;
var G__35653 = (i__35615_35648 + (1));
seq__35612_35645 = G__35650;
chunk__35613_35646 = G__35651;
count__35614_35647 = G__35652;
i__35615_35648 = G__35653;
continue;
} else {
var temp__5457__auto___35654__$1 = cljs.core.seq.call(null,seq__35612_35645);
if(temp__5457__auto___35654__$1){
var seq__35612_35655__$1 = temp__5457__auto___35654__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35612_35655__$1)){
var c__4319__auto___35656 = cljs.core.chunk_first.call(null,seq__35612_35655__$1);
var G__35657 = cljs.core.chunk_rest.call(null,seq__35612_35655__$1);
var G__35658 = c__4319__auto___35656;
var G__35659 = cljs.core.count.call(null,c__4319__auto___35656);
var G__35660 = (0);
seq__35612_35645 = G__35657;
chunk__35613_35646 = G__35658;
count__35614_35647 = G__35659;
i__35615_35648 = G__35660;
continue;
} else {
var req_35661 = cljs.core.first.call(null,seq__35612_35655__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35661,prov);


var G__35662 = cljs.core.next.call(null,seq__35612_35655__$1);
var G__35663 = null;
var G__35664 = (0);
var G__35665 = (0);
seq__35612_35645 = G__35662;
chunk__35613_35646 = G__35663;
count__35614_35647 = G__35664;
i__35615_35648 = G__35665;
continue;
}
} else {
}
}
break;
}


var G__35666 = cljs.core.next.call(null,seq__35604__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35604 = G__35666;
chunk__35605 = G__35667;
count__35606 = G__35668;
i__35607 = G__35669;
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
var seq__35670_35674 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35671_35675 = null;
var count__35672_35676 = (0);
var i__35673_35677 = (0);
while(true){
if((i__35673_35677 < count__35672_35676)){
var ns_35678 = cljs.core._nth.call(null,chunk__35671_35675,i__35673_35677);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35678);


var G__35679 = seq__35670_35674;
var G__35680 = chunk__35671_35675;
var G__35681 = count__35672_35676;
var G__35682 = (i__35673_35677 + (1));
seq__35670_35674 = G__35679;
chunk__35671_35675 = G__35680;
count__35672_35676 = G__35681;
i__35673_35677 = G__35682;
continue;
} else {
var temp__5457__auto___35683 = cljs.core.seq.call(null,seq__35670_35674);
if(temp__5457__auto___35683){
var seq__35670_35684__$1 = temp__5457__auto___35683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35670_35684__$1)){
var c__4319__auto___35685 = cljs.core.chunk_first.call(null,seq__35670_35684__$1);
var G__35686 = cljs.core.chunk_rest.call(null,seq__35670_35684__$1);
var G__35687 = c__4319__auto___35685;
var G__35688 = cljs.core.count.call(null,c__4319__auto___35685);
var G__35689 = (0);
seq__35670_35674 = G__35686;
chunk__35671_35675 = G__35687;
count__35672_35676 = G__35688;
i__35673_35677 = G__35689;
continue;
} else {
var ns_35690 = cljs.core.first.call(null,seq__35670_35684__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35690);


var G__35691 = cljs.core.next.call(null,seq__35670_35684__$1);
var G__35692 = null;
var G__35693 = (0);
var G__35694 = (0);
seq__35670_35674 = G__35691;
chunk__35671_35675 = G__35692;
count__35672_35676 = G__35693;
i__35673_35677 = G__35694;
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
var G__35695__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35696__i = 0, G__35696__a = new Array(arguments.length -  0);
while (G__35696__i < G__35696__a.length) {G__35696__a[G__35696__i] = arguments[G__35696__i + 0]; ++G__35696__i;}
  args = new cljs.core.IndexedSeq(G__35696__a,0,null);
} 
return G__35695__delegate.call(this,args);};
G__35695.cljs$lang$maxFixedArity = 0;
G__35695.cljs$lang$applyTo = (function (arglist__35697){
var args = cljs.core.seq(arglist__35697);
return G__35695__delegate(args);
});
G__35695.cljs$core$IFn$_invoke$arity$variadic = G__35695__delegate;
return G__35695;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35698_SHARP_,p2__35699_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35698_SHARP_)].join('')),p2__35699_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35700_SHARP_,p2__35701_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35700_SHARP_)].join(''),p2__35701_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35702 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35702.addCallback(((function (G__35702){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35702))
);

G__35702.addErrback(((function (G__35702){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35702))
);

return G__35702;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35703){if((e35703 instanceof Error)){
var e = e35703;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35703;

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
}catch (e35704){if((e35704 instanceof Error)){
var e = e35704;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35704;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35705 = cljs.core._EQ_;
var expr__35706 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35705.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35706))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35705.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35706))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35705.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35706))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35705,expr__35706){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35705,expr__35706))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35708,callback){
var map__35709 = p__35708;
var map__35709__$1 = ((((!((map__35709 == null)))?(((((map__35709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35709):map__35709);
var file_msg = map__35709__$1;
var request_url = cljs.core.get.call(null,map__35709__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35709,map__35709__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35709,map__35709__$1,file_msg,request_url))
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
return (function (state_35747){
var state_val_35748 = (state_35747[(1)]);
if((state_val_35748 === (7))){
var inst_35743 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35749_35775 = state_35747__$1;
(statearr_35749_35775[(2)] = inst_35743);

(statearr_35749_35775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (1))){
var state_35747__$1 = state_35747;
var statearr_35750_35776 = state_35747__$1;
(statearr_35750_35776[(2)] = null);

(statearr_35750_35776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (4))){
var inst_35713 = (state_35747[(7)]);
var inst_35713__$1 = (state_35747[(2)]);
var state_35747__$1 = (function (){var statearr_35751 = state_35747;
(statearr_35751[(7)] = inst_35713__$1);

return statearr_35751;
})();
if(cljs.core.truth_(inst_35713__$1)){
var statearr_35752_35777 = state_35747__$1;
(statearr_35752_35777[(1)] = (5));

} else {
var statearr_35753_35778 = state_35747__$1;
(statearr_35753_35778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (15))){
var inst_35728 = (state_35747[(8)]);
var inst_35726 = (state_35747[(9)]);
var inst_35730 = inst_35728.call(null,inst_35726);
var state_35747__$1 = state_35747;
var statearr_35754_35779 = state_35747__$1;
(statearr_35754_35779[(2)] = inst_35730);

(statearr_35754_35779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (13))){
var inst_35737 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35755_35780 = state_35747__$1;
(statearr_35755_35780[(2)] = inst_35737);

(statearr_35755_35780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (6))){
var state_35747__$1 = state_35747;
var statearr_35756_35781 = state_35747__$1;
(statearr_35756_35781[(2)] = null);

(statearr_35756_35781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (17))){
var inst_35734 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35757_35782 = state_35747__$1;
(statearr_35757_35782[(2)] = inst_35734);

(statearr_35757_35782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (3))){
var inst_35745 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35747__$1,inst_35745);
} else {
if((state_val_35748 === (12))){
var state_35747__$1 = state_35747;
var statearr_35758_35783 = state_35747__$1;
(statearr_35758_35783[(2)] = null);

(statearr_35758_35783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (2))){
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35747__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35748 === (11))){
var inst_35718 = (state_35747[(10)]);
var inst_35724 = figwheel.client.file_reloading.blocking_load.call(null,inst_35718);
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35747__$1,(14),inst_35724);
} else {
if((state_val_35748 === (9))){
var inst_35718 = (state_35747[(10)]);
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35718)){
var statearr_35759_35784 = state_35747__$1;
(statearr_35759_35784[(1)] = (11));

} else {
var statearr_35760_35785 = state_35747__$1;
(statearr_35760_35785[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (5))){
var inst_35719 = (state_35747[(11)]);
var inst_35713 = (state_35747[(7)]);
var inst_35718 = cljs.core.nth.call(null,inst_35713,(0),null);
var inst_35719__$1 = cljs.core.nth.call(null,inst_35713,(1),null);
var state_35747__$1 = (function (){var statearr_35761 = state_35747;
(statearr_35761[(11)] = inst_35719__$1);

(statearr_35761[(10)] = inst_35718);

return statearr_35761;
})();
if(cljs.core.truth_(inst_35719__$1)){
var statearr_35762_35786 = state_35747__$1;
(statearr_35762_35786[(1)] = (8));

} else {
var statearr_35763_35787 = state_35747__$1;
(statearr_35763_35787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (14))){
var inst_35728 = (state_35747[(8)]);
var inst_35718 = (state_35747[(10)]);
var inst_35726 = (state_35747[(2)]);
var inst_35727 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35728__$1 = cljs.core.get.call(null,inst_35727,inst_35718);
var state_35747__$1 = (function (){var statearr_35764 = state_35747;
(statearr_35764[(8)] = inst_35728__$1);

(statearr_35764[(9)] = inst_35726);

return statearr_35764;
})();
if(cljs.core.truth_(inst_35728__$1)){
var statearr_35765_35788 = state_35747__$1;
(statearr_35765_35788[(1)] = (15));

} else {
var statearr_35766_35789 = state_35747__$1;
(statearr_35766_35789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (16))){
var inst_35726 = (state_35747[(9)]);
var inst_35732 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35726);
var state_35747__$1 = state_35747;
var statearr_35767_35790 = state_35747__$1;
(statearr_35767_35790[(2)] = inst_35732);

(statearr_35767_35790[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (10))){
var inst_35739 = (state_35747[(2)]);
var state_35747__$1 = (function (){var statearr_35768 = state_35747;
(statearr_35768[(12)] = inst_35739);

return statearr_35768;
})();
var statearr_35769_35791 = state_35747__$1;
(statearr_35769_35791[(2)] = null);

(statearr_35769_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (8))){
var inst_35719 = (state_35747[(11)]);
var inst_35721 = eval(inst_35719);
var state_35747__$1 = state_35747;
var statearr_35770_35792 = state_35747__$1;
(statearr_35770_35792[(2)] = inst_35721);

(statearr_35770_35792[(1)] = (10));


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
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = figwheel$client$file_reloading$state_machine__30636__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
});
var figwheel$client$file_reloading$state_machine__30636__auto____1 = (function (state_35747){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_35747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e35772){if((e35772 instanceof Object)){
var ex__30639__auto__ = e35772;
var statearr_35773_35793 = state_35747;
(statearr_35773_35793[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35794 = state_35747;
state_35747 = G__35794;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30636__auto__ = function(state_35747){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30636__auto____1.call(this,state_35747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30636__auto____0;
figwheel$client$file_reloading$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30636__auto____1;
return figwheel$client$file_reloading$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_35774 = f__30793__auto__.call(null);
(statearr_35774[(6)] = c__30792__auto__);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35796 = arguments.length;
switch (G__35796) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35798,callback){
var map__35799 = p__35798;
var map__35799__$1 = ((((!((map__35799 == null)))?(((((map__35799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35799):map__35799);
var file_msg = map__35799__$1;
var namespace = cljs.core.get.call(null,map__35799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35799,map__35799__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35799,map__35799__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35801){
var map__35802 = p__35801;
var map__35802__$1 = ((((!((map__35802 == null)))?(((((map__35802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35802):map__35802);
var file_msg = map__35802__$1;
var namespace = cljs.core.get.call(null,map__35802__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35804){
var map__35805 = p__35804;
var map__35805__$1 = ((((!((map__35805 == null)))?(((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var file_msg = map__35805__$1;
var namespace = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35807,callback){
var map__35808 = p__35807;
var map__35808__$1 = ((((!((map__35808 == null)))?(((((map__35808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35808):map__35808);
var file_msg = map__35808__$1;
var request_url = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30792__auto___35858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___35858,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___35858,out){
return (function (state_35843){
var state_val_35844 = (state_35843[(1)]);
if((state_val_35844 === (1))){
var inst_35817 = cljs.core.seq.call(null,files);
var inst_35818 = cljs.core.first.call(null,inst_35817);
var inst_35819 = cljs.core.next.call(null,inst_35817);
var inst_35820 = files;
var state_35843__$1 = (function (){var statearr_35845 = state_35843;
(statearr_35845[(7)] = inst_35819);

(statearr_35845[(8)] = inst_35818);

(statearr_35845[(9)] = inst_35820);

return statearr_35845;
})();
var statearr_35846_35859 = state_35843__$1;
(statearr_35846_35859[(2)] = null);

(statearr_35846_35859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (2))){
var inst_35826 = (state_35843[(10)]);
var inst_35820 = (state_35843[(9)]);
var inst_35825 = cljs.core.seq.call(null,inst_35820);
var inst_35826__$1 = cljs.core.first.call(null,inst_35825);
var inst_35827 = cljs.core.next.call(null,inst_35825);
var inst_35828 = (inst_35826__$1 == null);
var inst_35829 = cljs.core.not.call(null,inst_35828);
var state_35843__$1 = (function (){var statearr_35847 = state_35843;
(statearr_35847[(10)] = inst_35826__$1);

(statearr_35847[(11)] = inst_35827);

return statearr_35847;
})();
if(inst_35829){
var statearr_35848_35860 = state_35843__$1;
(statearr_35848_35860[(1)] = (4));

} else {
var statearr_35849_35861 = state_35843__$1;
(statearr_35849_35861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (3))){
var inst_35841 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35843__$1,inst_35841);
} else {
if((state_val_35844 === (4))){
var inst_35826 = (state_35843[(10)]);
var inst_35831 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35826);
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35843__$1,(7),inst_35831);
} else {
if((state_val_35844 === (5))){
var inst_35837 = cljs.core.async.close_BANG_.call(null,out);
var state_35843__$1 = state_35843;
var statearr_35850_35862 = state_35843__$1;
(statearr_35850_35862[(2)] = inst_35837);

(statearr_35850_35862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (6))){
var inst_35839 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
var statearr_35851_35863 = state_35843__$1;
(statearr_35851_35863[(2)] = inst_35839);

(statearr_35851_35863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (7))){
var inst_35827 = (state_35843[(11)]);
var inst_35833 = (state_35843[(2)]);
var inst_35834 = cljs.core.async.put_BANG_.call(null,out,inst_35833);
var inst_35820 = inst_35827;
var state_35843__$1 = (function (){var statearr_35852 = state_35843;
(statearr_35852[(12)] = inst_35834);

(statearr_35852[(9)] = inst_35820);

return statearr_35852;
})();
var statearr_35853_35864 = state_35843__$1;
(statearr_35853_35864[(2)] = null);

(statearr_35853_35864[(1)] = (2));


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
});})(c__30792__auto___35858,out))
;
return ((function (switch__30635__auto__,c__30792__auto___35858,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0 = (function (){
var statearr_35854 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35854[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__);

(statearr_35854[(1)] = (1));

return statearr_35854;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1 = (function (state_35843){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_35843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e35855){if((e35855 instanceof Object)){
var ex__30639__auto__ = e35855;
var statearr_35856_35865 = state_35843;
(statearr_35856_35865[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35866 = state_35843;
state_35843 = G__35866;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__ = function(state_35843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1.call(this,state_35843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___35858,out))
})();
var state__30794__auto__ = (function (){var statearr_35857 = f__30793__auto__.call(null);
(statearr_35857[(6)] = c__30792__auto___35858);

return statearr_35857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___35858,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35867,opts){
var map__35868 = p__35867;
var map__35868__$1 = ((((!((map__35868 == null)))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35868):map__35868);
var eval_body = cljs.core.get.call(null,map__35868__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35870){var e = e35870;
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
return (function (p1__35871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35871_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35872){
var vec__35873 = p__35872;
var k = cljs.core.nth.call(null,vec__35873,(0),null);
var v = cljs.core.nth.call(null,vec__35873,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35876){
var vec__35877 = p__35876;
var k = cljs.core.nth.call(null,vec__35877,(0),null);
var v = cljs.core.nth.call(null,vec__35877,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35883,p__35884){
var map__35885 = p__35883;
var map__35885__$1 = ((((!((map__35885 == null)))?(((((map__35885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35885):map__35885);
var opts = map__35885__$1;
var before_jsload = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35886 = p__35884;
var map__35886__$1 = ((((!((map__35886 == null)))?(((((map__35886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35886):map__35886);
var msg = map__35886__$1;
var files = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36040){
var state_val_36041 = (state_36040[(1)]);
if((state_val_36041 === (7))){
var inst_35901 = (state_36040[(7)]);
var inst_35903 = (state_36040[(8)]);
var inst_35900 = (state_36040[(9)]);
var inst_35902 = (state_36040[(10)]);
var inst_35908 = cljs.core._nth.call(null,inst_35901,inst_35903);
var inst_35909 = figwheel.client.file_reloading.eval_body.call(null,inst_35908,opts);
var inst_35910 = (inst_35903 + (1));
var tmp36042 = inst_35901;
var tmp36043 = inst_35900;
var tmp36044 = inst_35902;
var inst_35900__$1 = tmp36043;
var inst_35901__$1 = tmp36042;
var inst_35902__$1 = tmp36044;
var inst_35903__$1 = inst_35910;
var state_36040__$1 = (function (){var statearr_36045 = state_36040;
(statearr_36045[(7)] = inst_35901__$1);

(statearr_36045[(11)] = inst_35909);

(statearr_36045[(8)] = inst_35903__$1);

(statearr_36045[(9)] = inst_35900__$1);

(statearr_36045[(10)] = inst_35902__$1);

return statearr_36045;
})();
var statearr_36046_36129 = state_36040__$1;
(statearr_36046_36129[(2)] = null);

(statearr_36046_36129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (20))){
var inst_35943 = (state_36040[(12)]);
var inst_35951 = figwheel.client.file_reloading.sort_files.call(null,inst_35943);
var state_36040__$1 = state_36040;
var statearr_36047_36130 = state_36040__$1;
(statearr_36047_36130[(2)] = inst_35951);

(statearr_36047_36130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (27))){
var state_36040__$1 = state_36040;
var statearr_36048_36131 = state_36040__$1;
(statearr_36048_36131[(2)] = null);

(statearr_36048_36131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (1))){
var inst_35892 = (state_36040[(13)]);
var inst_35889 = before_jsload.call(null,files);
var inst_35890 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35891 = (function (){return ((function (inst_35892,inst_35889,inst_35890,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35880_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35880_SHARP_);
});
;})(inst_35892,inst_35889,inst_35890,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35892__$1 = cljs.core.filter.call(null,inst_35891,files);
var inst_35893 = cljs.core.not_empty.call(null,inst_35892__$1);
var state_36040__$1 = (function (){var statearr_36049 = state_36040;
(statearr_36049[(13)] = inst_35892__$1);

(statearr_36049[(14)] = inst_35889);

(statearr_36049[(15)] = inst_35890);

return statearr_36049;
})();
if(cljs.core.truth_(inst_35893)){
var statearr_36050_36132 = state_36040__$1;
(statearr_36050_36132[(1)] = (2));

} else {
var statearr_36051_36133 = state_36040__$1;
(statearr_36051_36133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (24))){
var state_36040__$1 = state_36040;
var statearr_36052_36134 = state_36040__$1;
(statearr_36052_36134[(2)] = null);

(statearr_36052_36134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (39))){
var inst_35993 = (state_36040[(16)]);
var state_36040__$1 = state_36040;
var statearr_36053_36135 = state_36040__$1;
(statearr_36053_36135[(2)] = inst_35993);

(statearr_36053_36135[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (46))){
var inst_36035 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36054_36136 = state_36040__$1;
(statearr_36054_36136[(2)] = inst_36035);

(statearr_36054_36136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (4))){
var inst_35937 = (state_36040[(2)]);
var inst_35938 = cljs.core.List.EMPTY;
var inst_35939 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35938);
var inst_35940 = (function (){return ((function (inst_35937,inst_35938,inst_35939,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35881_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35881_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35881_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35881_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_35937,inst_35938,inst_35939,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35941 = cljs.core.filter.call(null,inst_35940,files);
var inst_35942 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35943 = cljs.core.concat.call(null,inst_35941,inst_35942);
var state_36040__$1 = (function (){var statearr_36055 = state_36040;
(statearr_36055[(12)] = inst_35943);

(statearr_36055[(17)] = inst_35937);

(statearr_36055[(18)] = inst_35939);

return statearr_36055;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36056_36137 = state_36040__$1;
(statearr_36056_36137[(1)] = (16));

} else {
var statearr_36057_36138 = state_36040__$1;
(statearr_36057_36138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (15))){
var inst_35927 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36058_36139 = state_36040__$1;
(statearr_36058_36139[(2)] = inst_35927);

(statearr_36058_36139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (21))){
var inst_35953 = (state_36040[(19)]);
var inst_35953__$1 = (state_36040[(2)]);
var inst_35954 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35953__$1);
var state_36040__$1 = (function (){var statearr_36059 = state_36040;
(statearr_36059[(19)] = inst_35953__$1);

return statearr_36059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36040__$1,(22),inst_35954);
} else {
if((state_val_36041 === (31))){
var inst_36038 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36040__$1,inst_36038);
} else {
if((state_val_36041 === (32))){
var inst_35993 = (state_36040[(16)]);
var inst_35998 = inst_35993.cljs$lang$protocol_mask$partition0$;
var inst_35999 = (inst_35998 & (64));
var inst_36000 = inst_35993.cljs$core$ISeq$;
var inst_36001 = (cljs.core.PROTOCOL_SENTINEL === inst_36000);
var inst_36002 = ((inst_35999) || (inst_36001));
var state_36040__$1 = state_36040;
if(cljs.core.truth_(inst_36002)){
var statearr_36060_36140 = state_36040__$1;
(statearr_36060_36140[(1)] = (35));

} else {
var statearr_36061_36141 = state_36040__$1;
(statearr_36061_36141[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (40))){
var inst_36015 = (state_36040[(20)]);
var inst_36014 = (state_36040[(2)]);
var inst_36015__$1 = cljs.core.get.call(null,inst_36014,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36016 = cljs.core.get.call(null,inst_36014,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36017 = cljs.core.not_empty.call(null,inst_36015__$1);
var state_36040__$1 = (function (){var statearr_36062 = state_36040;
(statearr_36062[(21)] = inst_36016);

(statearr_36062[(20)] = inst_36015__$1);

return statearr_36062;
})();
if(cljs.core.truth_(inst_36017)){
var statearr_36063_36142 = state_36040__$1;
(statearr_36063_36142[(1)] = (41));

} else {
var statearr_36064_36143 = state_36040__$1;
(statearr_36064_36143[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (33))){
var state_36040__$1 = state_36040;
var statearr_36065_36144 = state_36040__$1;
(statearr_36065_36144[(2)] = false);

(statearr_36065_36144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (13))){
var inst_35913 = (state_36040[(22)]);
var inst_35917 = cljs.core.chunk_first.call(null,inst_35913);
var inst_35918 = cljs.core.chunk_rest.call(null,inst_35913);
var inst_35919 = cljs.core.count.call(null,inst_35917);
var inst_35900 = inst_35918;
var inst_35901 = inst_35917;
var inst_35902 = inst_35919;
var inst_35903 = (0);
var state_36040__$1 = (function (){var statearr_36066 = state_36040;
(statearr_36066[(7)] = inst_35901);

(statearr_36066[(8)] = inst_35903);

(statearr_36066[(9)] = inst_35900);

(statearr_36066[(10)] = inst_35902);

return statearr_36066;
})();
var statearr_36067_36145 = state_36040__$1;
(statearr_36067_36145[(2)] = null);

(statearr_36067_36145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (22))){
var inst_35956 = (state_36040[(23)]);
var inst_35961 = (state_36040[(24)]);
var inst_35957 = (state_36040[(25)]);
var inst_35953 = (state_36040[(19)]);
var inst_35956__$1 = (state_36040[(2)]);
var inst_35957__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35956__$1);
var inst_35958 = (function (){var all_files = inst_35953;
var res_SINGLEQUOTE_ = inst_35956__$1;
var res = inst_35957__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35956,inst_35961,inst_35957,inst_35953,inst_35956__$1,inst_35957__$1,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35882_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35882_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35956,inst_35961,inst_35957,inst_35953,inst_35956__$1,inst_35957__$1,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35959 = cljs.core.filter.call(null,inst_35958,inst_35956__$1);
var inst_35960 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35961__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35960);
var inst_35962 = cljs.core.not_empty.call(null,inst_35961__$1);
var state_36040__$1 = (function (){var statearr_36068 = state_36040;
(statearr_36068[(23)] = inst_35956__$1);

(statearr_36068[(24)] = inst_35961__$1);

(statearr_36068[(26)] = inst_35959);

(statearr_36068[(25)] = inst_35957__$1);

return statearr_36068;
})();
if(cljs.core.truth_(inst_35962)){
var statearr_36069_36146 = state_36040__$1;
(statearr_36069_36146[(1)] = (23));

} else {
var statearr_36070_36147 = state_36040__$1;
(statearr_36070_36147[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (36))){
var state_36040__$1 = state_36040;
var statearr_36071_36148 = state_36040__$1;
(statearr_36071_36148[(2)] = false);

(statearr_36071_36148[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (41))){
var inst_36015 = (state_36040[(20)]);
var inst_36019 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36020 = cljs.core.map.call(null,inst_36019,inst_36015);
var inst_36021 = cljs.core.pr_str.call(null,inst_36020);
var inst_36022 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36021)].join('');
var inst_36023 = figwheel.client.utils.log.call(null,inst_36022);
var state_36040__$1 = state_36040;
var statearr_36072_36149 = state_36040__$1;
(statearr_36072_36149[(2)] = inst_36023);

(statearr_36072_36149[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (43))){
var inst_36016 = (state_36040[(21)]);
var inst_36026 = (state_36040[(2)]);
var inst_36027 = cljs.core.not_empty.call(null,inst_36016);
var state_36040__$1 = (function (){var statearr_36073 = state_36040;
(statearr_36073[(27)] = inst_36026);

return statearr_36073;
})();
if(cljs.core.truth_(inst_36027)){
var statearr_36074_36150 = state_36040__$1;
(statearr_36074_36150[(1)] = (44));

} else {
var statearr_36075_36151 = state_36040__$1;
(statearr_36075_36151[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (29))){
var inst_35956 = (state_36040[(23)]);
var inst_35961 = (state_36040[(24)]);
var inst_35993 = (state_36040[(16)]);
var inst_35959 = (state_36040[(26)]);
var inst_35957 = (state_36040[(25)]);
var inst_35953 = (state_36040[(19)]);
var inst_35989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35992 = (function (){var all_files = inst_35953;
var res_SINGLEQUOTE_ = inst_35956;
var res = inst_35957;
var files_not_loaded = inst_35959;
var dependencies_that_loaded = inst_35961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35993,inst_35959,inst_35957,inst_35953,inst_35989,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35991){
var map__36076 = p__35991;
var map__36076__$1 = ((((!((map__36076 == null)))?(((((map__36076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36076):map__36076);
var namespace = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35993,inst_35959,inst_35957,inst_35953,inst_35989,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35993__$1 = cljs.core.group_by.call(null,inst_35992,inst_35959);
var inst_35995 = (inst_35993__$1 == null);
var inst_35996 = cljs.core.not.call(null,inst_35995);
var state_36040__$1 = (function (){var statearr_36078 = state_36040;
(statearr_36078[(28)] = inst_35989);

(statearr_36078[(16)] = inst_35993__$1);

return statearr_36078;
})();
if(inst_35996){
var statearr_36079_36152 = state_36040__$1;
(statearr_36079_36152[(1)] = (32));

} else {
var statearr_36080_36153 = state_36040__$1;
(statearr_36080_36153[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (44))){
var inst_36016 = (state_36040[(21)]);
var inst_36029 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36016);
var inst_36030 = cljs.core.pr_str.call(null,inst_36029);
var inst_36031 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36030)].join('');
var inst_36032 = figwheel.client.utils.log.call(null,inst_36031);
var state_36040__$1 = state_36040;
var statearr_36081_36154 = state_36040__$1;
(statearr_36081_36154[(2)] = inst_36032);

(statearr_36081_36154[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (6))){
var inst_35934 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36082_36155 = state_36040__$1;
(statearr_36082_36155[(2)] = inst_35934);

(statearr_36082_36155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (28))){
var inst_35959 = (state_36040[(26)]);
var inst_35986 = (state_36040[(2)]);
var inst_35987 = cljs.core.not_empty.call(null,inst_35959);
var state_36040__$1 = (function (){var statearr_36083 = state_36040;
(statearr_36083[(29)] = inst_35986);

return statearr_36083;
})();
if(cljs.core.truth_(inst_35987)){
var statearr_36084_36156 = state_36040__$1;
(statearr_36084_36156[(1)] = (29));

} else {
var statearr_36085_36157 = state_36040__$1;
(statearr_36085_36157[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (25))){
var inst_35957 = (state_36040[(25)]);
var inst_35973 = (state_36040[(2)]);
var inst_35974 = cljs.core.not_empty.call(null,inst_35957);
var state_36040__$1 = (function (){var statearr_36086 = state_36040;
(statearr_36086[(30)] = inst_35973);

return statearr_36086;
})();
if(cljs.core.truth_(inst_35974)){
var statearr_36087_36158 = state_36040__$1;
(statearr_36087_36158[(1)] = (26));

} else {
var statearr_36088_36159 = state_36040__$1;
(statearr_36088_36159[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (34))){
var inst_36009 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
if(cljs.core.truth_(inst_36009)){
var statearr_36089_36160 = state_36040__$1;
(statearr_36089_36160[(1)] = (38));

} else {
var statearr_36090_36161 = state_36040__$1;
(statearr_36090_36161[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (17))){
var state_36040__$1 = state_36040;
var statearr_36091_36162 = state_36040__$1;
(statearr_36091_36162[(2)] = recompile_dependents);

(statearr_36091_36162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (3))){
var state_36040__$1 = state_36040;
var statearr_36092_36163 = state_36040__$1;
(statearr_36092_36163[(2)] = null);

(statearr_36092_36163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (12))){
var inst_35930 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36093_36164 = state_36040__$1;
(statearr_36093_36164[(2)] = inst_35930);

(statearr_36093_36164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (2))){
var inst_35892 = (state_36040[(13)]);
var inst_35899 = cljs.core.seq.call(null,inst_35892);
var inst_35900 = inst_35899;
var inst_35901 = null;
var inst_35902 = (0);
var inst_35903 = (0);
var state_36040__$1 = (function (){var statearr_36094 = state_36040;
(statearr_36094[(7)] = inst_35901);

(statearr_36094[(8)] = inst_35903);

(statearr_36094[(9)] = inst_35900);

(statearr_36094[(10)] = inst_35902);

return statearr_36094;
})();
var statearr_36095_36165 = state_36040__$1;
(statearr_36095_36165[(2)] = null);

(statearr_36095_36165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (23))){
var inst_35956 = (state_36040[(23)]);
var inst_35961 = (state_36040[(24)]);
var inst_35959 = (state_36040[(26)]);
var inst_35957 = (state_36040[(25)]);
var inst_35953 = (state_36040[(19)]);
var inst_35964 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35966 = (function (){var all_files = inst_35953;
var res_SINGLEQUOTE_ = inst_35956;
var res = inst_35957;
var files_not_loaded = inst_35959;
var dependencies_that_loaded = inst_35961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35964,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35965){
var map__36096 = p__35965;
var map__36096__$1 = ((((!((map__36096 == null)))?(((((map__36096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36096):map__36096);
var request_url = cljs.core.get.call(null,map__36096__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35964,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35967 = cljs.core.reverse.call(null,inst_35961);
var inst_35968 = cljs.core.map.call(null,inst_35966,inst_35967);
var inst_35969 = cljs.core.pr_str.call(null,inst_35968);
var inst_35970 = figwheel.client.utils.log.call(null,inst_35969);
var state_36040__$1 = (function (){var statearr_36098 = state_36040;
(statearr_36098[(31)] = inst_35964);

return statearr_36098;
})();
var statearr_36099_36166 = state_36040__$1;
(statearr_36099_36166[(2)] = inst_35970);

(statearr_36099_36166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (35))){
var state_36040__$1 = state_36040;
var statearr_36100_36167 = state_36040__$1;
(statearr_36100_36167[(2)] = true);

(statearr_36100_36167[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (19))){
var inst_35943 = (state_36040[(12)]);
var inst_35949 = figwheel.client.file_reloading.expand_files.call(null,inst_35943);
var state_36040__$1 = state_36040;
var statearr_36101_36168 = state_36040__$1;
(statearr_36101_36168[(2)] = inst_35949);

(statearr_36101_36168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (11))){
var state_36040__$1 = state_36040;
var statearr_36102_36169 = state_36040__$1;
(statearr_36102_36169[(2)] = null);

(statearr_36102_36169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (9))){
var inst_35932 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36103_36170 = state_36040__$1;
(statearr_36103_36170[(2)] = inst_35932);

(statearr_36103_36170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (5))){
var inst_35903 = (state_36040[(8)]);
var inst_35902 = (state_36040[(10)]);
var inst_35905 = (inst_35903 < inst_35902);
var inst_35906 = inst_35905;
var state_36040__$1 = state_36040;
if(cljs.core.truth_(inst_35906)){
var statearr_36104_36171 = state_36040__$1;
(statearr_36104_36171[(1)] = (7));

} else {
var statearr_36105_36172 = state_36040__$1;
(statearr_36105_36172[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (14))){
var inst_35913 = (state_36040[(22)]);
var inst_35922 = cljs.core.first.call(null,inst_35913);
var inst_35923 = figwheel.client.file_reloading.eval_body.call(null,inst_35922,opts);
var inst_35924 = cljs.core.next.call(null,inst_35913);
var inst_35900 = inst_35924;
var inst_35901 = null;
var inst_35902 = (0);
var inst_35903 = (0);
var state_36040__$1 = (function (){var statearr_36106 = state_36040;
(statearr_36106[(7)] = inst_35901);

(statearr_36106[(8)] = inst_35903);

(statearr_36106[(32)] = inst_35923);

(statearr_36106[(9)] = inst_35900);

(statearr_36106[(10)] = inst_35902);

return statearr_36106;
})();
var statearr_36107_36173 = state_36040__$1;
(statearr_36107_36173[(2)] = null);

(statearr_36107_36173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (45))){
var state_36040__$1 = state_36040;
var statearr_36108_36174 = state_36040__$1;
(statearr_36108_36174[(2)] = null);

(statearr_36108_36174[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (26))){
var inst_35956 = (state_36040[(23)]);
var inst_35961 = (state_36040[(24)]);
var inst_35959 = (state_36040[(26)]);
var inst_35957 = (state_36040[(25)]);
var inst_35953 = (state_36040[(19)]);
var inst_35976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35978 = (function (){var all_files = inst_35953;
var res_SINGLEQUOTE_ = inst_35956;
var res = inst_35957;
var files_not_loaded = inst_35959;
var dependencies_that_loaded = inst_35961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35976,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35977){
var map__36109 = p__35977;
var map__36109__$1 = ((((!((map__36109 == null)))?(((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36109):map__36109);
var namespace = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35976,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35979 = cljs.core.map.call(null,inst_35978,inst_35957);
var inst_35980 = cljs.core.pr_str.call(null,inst_35979);
var inst_35981 = figwheel.client.utils.log.call(null,inst_35980);
var inst_35982 = (function (){var all_files = inst_35953;
var res_SINGLEQUOTE_ = inst_35956;
var res = inst_35957;
var files_not_loaded = inst_35959;
var dependencies_that_loaded = inst_35961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35976,inst_35978,inst_35979,inst_35980,inst_35981,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35961,inst_35959,inst_35957,inst_35953,inst_35976,inst_35978,inst_35979,inst_35980,inst_35981,state_val_36041,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35983 = setTimeout(inst_35982,(10));
var state_36040__$1 = (function (){var statearr_36111 = state_36040;
(statearr_36111[(33)] = inst_35976);

(statearr_36111[(34)] = inst_35981);

return statearr_36111;
})();
var statearr_36112_36175 = state_36040__$1;
(statearr_36112_36175[(2)] = inst_35983);

(statearr_36112_36175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (16))){
var state_36040__$1 = state_36040;
var statearr_36113_36176 = state_36040__$1;
(statearr_36113_36176[(2)] = reload_dependents);

(statearr_36113_36176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (38))){
var inst_35993 = (state_36040[(16)]);
var inst_36011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35993);
var state_36040__$1 = state_36040;
var statearr_36114_36177 = state_36040__$1;
(statearr_36114_36177[(2)] = inst_36011);

(statearr_36114_36177[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (30))){
var state_36040__$1 = state_36040;
var statearr_36115_36178 = state_36040__$1;
(statearr_36115_36178[(2)] = null);

(statearr_36115_36178[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (10))){
var inst_35913 = (state_36040[(22)]);
var inst_35915 = cljs.core.chunked_seq_QMARK_.call(null,inst_35913);
var state_36040__$1 = state_36040;
if(inst_35915){
var statearr_36116_36179 = state_36040__$1;
(statearr_36116_36179[(1)] = (13));

} else {
var statearr_36117_36180 = state_36040__$1;
(statearr_36117_36180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (18))){
var inst_35947 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
if(cljs.core.truth_(inst_35947)){
var statearr_36118_36181 = state_36040__$1;
(statearr_36118_36181[(1)] = (19));

} else {
var statearr_36119_36182 = state_36040__$1;
(statearr_36119_36182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (42))){
var state_36040__$1 = state_36040;
var statearr_36120_36183 = state_36040__$1;
(statearr_36120_36183[(2)] = null);

(statearr_36120_36183[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (37))){
var inst_36006 = (state_36040[(2)]);
var state_36040__$1 = state_36040;
var statearr_36121_36184 = state_36040__$1;
(statearr_36121_36184[(2)] = inst_36006);

(statearr_36121_36184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36041 === (8))){
var inst_35913 = (state_36040[(22)]);
var inst_35900 = (state_36040[(9)]);
var inst_35913__$1 = cljs.core.seq.call(null,inst_35900);
var state_36040__$1 = (function (){var statearr_36122 = state_36040;
(statearr_36122[(22)] = inst_35913__$1);

return statearr_36122;
})();
if(inst_35913__$1){
var statearr_36123_36185 = state_36040__$1;
(statearr_36123_36185[(1)] = (10));

} else {
var statearr_36124_36186 = state_36040__$1;
(statearr_36124_36186[(1)] = (11));

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
});})(c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30635__auto__,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1 = (function (state_36040){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_36040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__30639__auto__ = e36126;
var statearr_36127_36187 = state_36040;
(statearr_36127_36187[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36188 = state_36040;
state_36040 = G__36188;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__ = function(state_36040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1.call(this,state_36040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30794__auto__ = (function (){var statearr_36128 = f__30793__auto__.call(null);
(statearr_36128[(6)] = c__30792__auto__);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,map__35885,map__35885__$1,opts,before_jsload,on_jsload,reload_dependents,map__35886,map__35886__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30792__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36191,link){
var map__36192 = p__36191;
var map__36192__$1 = ((((!((map__36192 == null)))?(((((map__36192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36192):map__36192);
var file = cljs.core.get.call(null,map__36192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__36192,map__36192__$1,file){
return (function (p1__36189_SHARP_,p2__36190_SHARP_){
if(cljs.core._EQ_.call(null,p1__36189_SHARP_,p2__36190_SHARP_)){
return p1__36189_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__36192,map__36192__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36195){
var map__36196 = p__36195;
var map__36196__$1 = ((((!((map__36196 == null)))?(((((map__36196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36196):map__36196);
var match_length = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36194_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36194_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36198_SHARP_,p2__36199_SHARP_){
return cljs.core.assoc.call(null,p1__36198_SHARP_,cljs.core.get.call(null,p2__36199_SHARP_,key),p2__36199_SHARP_);
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
var loaded_f_datas_36200 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36200);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36200);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36201,p__36202){
var map__36203 = p__36201;
var map__36203__$1 = ((((!((map__36203 == null)))?(((((map__36203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36203):map__36203);
var on_cssload = cljs.core.get.call(null,map__36203__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36204 = p__36202;
var map__36204__$1 = ((((!((map__36204 == null)))?(((((map__36204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36204):map__36204);
var files_msg = map__36204__$1;
var files = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1557582896124
