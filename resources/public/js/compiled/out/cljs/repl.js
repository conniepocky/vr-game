// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31223){
var map__31224 = p__31223;
var map__31224__$1 = ((((!((map__31224 == null)))?(((((map__31224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31224):map__31224);
var m = map__31224__$1;
var n = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31226_31248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31227_31249 = null;
var count__31228_31250 = (0);
var i__31229_31251 = (0);
while(true){
if((i__31229_31251 < count__31228_31250)){
var f_31252 = cljs.core._nth.call(null,chunk__31227_31249,i__31229_31251);
cljs.core.println.call(null,"  ",f_31252);


var G__31253 = seq__31226_31248;
var G__31254 = chunk__31227_31249;
var G__31255 = count__31228_31250;
var G__31256 = (i__31229_31251 + (1));
seq__31226_31248 = G__31253;
chunk__31227_31249 = G__31254;
count__31228_31250 = G__31255;
i__31229_31251 = G__31256;
continue;
} else {
var temp__5457__auto___31257 = cljs.core.seq.call(null,seq__31226_31248);
if(temp__5457__auto___31257){
var seq__31226_31258__$1 = temp__5457__auto___31257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31226_31258__$1)){
var c__4319__auto___31259 = cljs.core.chunk_first.call(null,seq__31226_31258__$1);
var G__31260 = cljs.core.chunk_rest.call(null,seq__31226_31258__$1);
var G__31261 = c__4319__auto___31259;
var G__31262 = cljs.core.count.call(null,c__4319__auto___31259);
var G__31263 = (0);
seq__31226_31248 = G__31260;
chunk__31227_31249 = G__31261;
count__31228_31250 = G__31262;
i__31229_31251 = G__31263;
continue;
} else {
var f_31264 = cljs.core.first.call(null,seq__31226_31258__$1);
cljs.core.println.call(null,"  ",f_31264);


var G__31265 = cljs.core.next.call(null,seq__31226_31258__$1);
var G__31266 = null;
var G__31267 = (0);
var G__31268 = (0);
seq__31226_31248 = G__31265;
chunk__31227_31249 = G__31266;
count__31228_31250 = G__31267;
i__31229_31251 = G__31268;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31269 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31269);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31269)))?cljs.core.second.call(null,arglists_31269):arglists_31269));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31230_31270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31231_31271 = null;
var count__31232_31272 = (0);
var i__31233_31273 = (0);
while(true){
if((i__31233_31273 < count__31232_31272)){
var vec__31234_31274 = cljs.core._nth.call(null,chunk__31231_31271,i__31233_31273);
var name_31275 = cljs.core.nth.call(null,vec__31234_31274,(0),null);
var map__31237_31276 = cljs.core.nth.call(null,vec__31234_31274,(1),null);
var map__31237_31277__$1 = ((((!((map__31237_31276 == null)))?(((((map__31237_31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31237_31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31237_31276):map__31237_31276);
var doc_31278 = cljs.core.get.call(null,map__31237_31277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31279 = cljs.core.get.call(null,map__31237_31277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31275);

cljs.core.println.call(null," ",arglists_31279);

if(cljs.core.truth_(doc_31278)){
cljs.core.println.call(null," ",doc_31278);
} else {
}


var G__31280 = seq__31230_31270;
var G__31281 = chunk__31231_31271;
var G__31282 = count__31232_31272;
var G__31283 = (i__31233_31273 + (1));
seq__31230_31270 = G__31280;
chunk__31231_31271 = G__31281;
count__31232_31272 = G__31282;
i__31233_31273 = G__31283;
continue;
} else {
var temp__5457__auto___31284 = cljs.core.seq.call(null,seq__31230_31270);
if(temp__5457__auto___31284){
var seq__31230_31285__$1 = temp__5457__auto___31284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31230_31285__$1)){
var c__4319__auto___31286 = cljs.core.chunk_first.call(null,seq__31230_31285__$1);
var G__31287 = cljs.core.chunk_rest.call(null,seq__31230_31285__$1);
var G__31288 = c__4319__auto___31286;
var G__31289 = cljs.core.count.call(null,c__4319__auto___31286);
var G__31290 = (0);
seq__31230_31270 = G__31287;
chunk__31231_31271 = G__31288;
count__31232_31272 = G__31289;
i__31233_31273 = G__31290;
continue;
} else {
var vec__31239_31291 = cljs.core.first.call(null,seq__31230_31285__$1);
var name_31292 = cljs.core.nth.call(null,vec__31239_31291,(0),null);
var map__31242_31293 = cljs.core.nth.call(null,vec__31239_31291,(1),null);
var map__31242_31294__$1 = ((((!((map__31242_31293 == null)))?(((((map__31242_31293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31242_31293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242_31293):map__31242_31293);
var doc_31295 = cljs.core.get.call(null,map__31242_31294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31296 = cljs.core.get.call(null,map__31242_31294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31292);

cljs.core.println.call(null," ",arglists_31296);

if(cljs.core.truth_(doc_31295)){
cljs.core.println.call(null," ",doc_31295);
} else {
}


var G__31297 = cljs.core.next.call(null,seq__31230_31285__$1);
var G__31298 = null;
var G__31299 = (0);
var G__31300 = (0);
seq__31230_31270 = G__31297;
chunk__31231_31271 = G__31298;
count__31232_31272 = G__31299;
i__31233_31273 = G__31300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31244 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31245 = null;
var count__31246 = (0);
var i__31247 = (0);
while(true){
if((i__31247 < count__31246)){
var role = cljs.core._nth.call(null,chunk__31245,i__31247);
var temp__5457__auto___31301__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31301__$1)){
var spec_31302 = temp__5457__auto___31301__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31302));
} else {
}


var G__31303 = seq__31244;
var G__31304 = chunk__31245;
var G__31305 = count__31246;
var G__31306 = (i__31247 + (1));
seq__31244 = G__31303;
chunk__31245 = G__31304;
count__31246 = G__31305;
i__31247 = G__31306;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31244);
if(temp__5457__auto____$1){
var seq__31244__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31244__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31244__$1);
var G__31307 = cljs.core.chunk_rest.call(null,seq__31244__$1);
var G__31308 = c__4319__auto__;
var G__31309 = cljs.core.count.call(null,c__4319__auto__);
var G__31310 = (0);
seq__31244 = G__31307;
chunk__31245 = G__31308;
count__31246 = G__31309;
i__31247 = G__31310;
continue;
} else {
var role = cljs.core.first.call(null,seq__31244__$1);
var temp__5457__auto___31311__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31311__$2)){
var spec_31312 = temp__5457__auto___31311__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31312));
} else {
}


var G__31313 = cljs.core.next.call(null,seq__31244__$1);
var G__31314 = null;
var G__31315 = (0);
var G__31316 = (0);
seq__31244 = G__31313;
chunk__31245 = G__31314;
count__31246 = G__31315;
i__31247 = G__31316;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1557580561441
