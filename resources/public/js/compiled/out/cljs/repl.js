// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37674){
var map__37675 = p__37674;
var map__37675__$1 = ((((!((map__37675 == null)))?(((((map__37675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37675):map__37675);
var m = map__37675__$1;
var n = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37677_37699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37678_37700 = null;
var count__37679_37701 = (0);
var i__37680_37702 = (0);
while(true){
if((i__37680_37702 < count__37679_37701)){
var f_37703 = cljs.core._nth.call(null,chunk__37678_37700,i__37680_37702);
cljs.core.println.call(null,"  ",f_37703);


var G__37704 = seq__37677_37699;
var G__37705 = chunk__37678_37700;
var G__37706 = count__37679_37701;
var G__37707 = (i__37680_37702 + (1));
seq__37677_37699 = G__37704;
chunk__37678_37700 = G__37705;
count__37679_37701 = G__37706;
i__37680_37702 = G__37707;
continue;
} else {
var temp__5457__auto___37708 = cljs.core.seq.call(null,seq__37677_37699);
if(temp__5457__auto___37708){
var seq__37677_37709__$1 = temp__5457__auto___37708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37677_37709__$1)){
var c__4319__auto___37710 = cljs.core.chunk_first.call(null,seq__37677_37709__$1);
var G__37711 = cljs.core.chunk_rest.call(null,seq__37677_37709__$1);
var G__37712 = c__4319__auto___37710;
var G__37713 = cljs.core.count.call(null,c__4319__auto___37710);
var G__37714 = (0);
seq__37677_37699 = G__37711;
chunk__37678_37700 = G__37712;
count__37679_37701 = G__37713;
i__37680_37702 = G__37714;
continue;
} else {
var f_37715 = cljs.core.first.call(null,seq__37677_37709__$1);
cljs.core.println.call(null,"  ",f_37715);


var G__37716 = cljs.core.next.call(null,seq__37677_37709__$1);
var G__37717 = null;
var G__37718 = (0);
var G__37719 = (0);
seq__37677_37699 = G__37716;
chunk__37678_37700 = G__37717;
count__37679_37701 = G__37718;
i__37680_37702 = G__37719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37720 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37720);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37720)))?cljs.core.second.call(null,arglists_37720):arglists_37720));
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
var seq__37681_37721 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37682_37722 = null;
var count__37683_37723 = (0);
var i__37684_37724 = (0);
while(true){
if((i__37684_37724 < count__37683_37723)){
var vec__37685_37725 = cljs.core._nth.call(null,chunk__37682_37722,i__37684_37724);
var name_37726 = cljs.core.nth.call(null,vec__37685_37725,(0),null);
var map__37688_37727 = cljs.core.nth.call(null,vec__37685_37725,(1),null);
var map__37688_37728__$1 = ((((!((map__37688_37727 == null)))?(((((map__37688_37727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37688_37727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37688_37727):map__37688_37727);
var doc_37729 = cljs.core.get.call(null,map__37688_37728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37730 = cljs.core.get.call(null,map__37688_37728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37726);

cljs.core.println.call(null," ",arglists_37730);

if(cljs.core.truth_(doc_37729)){
cljs.core.println.call(null," ",doc_37729);
} else {
}


var G__37731 = seq__37681_37721;
var G__37732 = chunk__37682_37722;
var G__37733 = count__37683_37723;
var G__37734 = (i__37684_37724 + (1));
seq__37681_37721 = G__37731;
chunk__37682_37722 = G__37732;
count__37683_37723 = G__37733;
i__37684_37724 = G__37734;
continue;
} else {
var temp__5457__auto___37735 = cljs.core.seq.call(null,seq__37681_37721);
if(temp__5457__auto___37735){
var seq__37681_37736__$1 = temp__5457__auto___37735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37681_37736__$1)){
var c__4319__auto___37737 = cljs.core.chunk_first.call(null,seq__37681_37736__$1);
var G__37738 = cljs.core.chunk_rest.call(null,seq__37681_37736__$1);
var G__37739 = c__4319__auto___37737;
var G__37740 = cljs.core.count.call(null,c__4319__auto___37737);
var G__37741 = (0);
seq__37681_37721 = G__37738;
chunk__37682_37722 = G__37739;
count__37683_37723 = G__37740;
i__37684_37724 = G__37741;
continue;
} else {
var vec__37690_37742 = cljs.core.first.call(null,seq__37681_37736__$1);
var name_37743 = cljs.core.nth.call(null,vec__37690_37742,(0),null);
var map__37693_37744 = cljs.core.nth.call(null,vec__37690_37742,(1),null);
var map__37693_37745__$1 = ((((!((map__37693_37744 == null)))?(((((map__37693_37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37693_37744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37693_37744):map__37693_37744);
var doc_37746 = cljs.core.get.call(null,map__37693_37745__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37747 = cljs.core.get.call(null,map__37693_37745__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37743);

cljs.core.println.call(null," ",arglists_37747);

if(cljs.core.truth_(doc_37746)){
cljs.core.println.call(null," ",doc_37746);
} else {
}


var G__37748 = cljs.core.next.call(null,seq__37681_37736__$1);
var G__37749 = null;
var G__37750 = (0);
var G__37751 = (0);
seq__37681_37721 = G__37748;
chunk__37682_37722 = G__37749;
count__37683_37723 = G__37750;
i__37684_37724 = G__37751;
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

var seq__37695 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37696 = null;
var count__37697 = (0);
var i__37698 = (0);
while(true){
if((i__37698 < count__37697)){
var role = cljs.core._nth.call(null,chunk__37696,i__37698);
var temp__5457__auto___37752__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37752__$1)){
var spec_37753 = temp__5457__auto___37752__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37753));
} else {
}


var G__37754 = seq__37695;
var G__37755 = chunk__37696;
var G__37756 = count__37697;
var G__37757 = (i__37698 + (1));
seq__37695 = G__37754;
chunk__37696 = G__37755;
count__37697 = G__37756;
i__37698 = G__37757;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__37695);
if(temp__5457__auto____$1){
var seq__37695__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37695__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37695__$1);
var G__37758 = cljs.core.chunk_rest.call(null,seq__37695__$1);
var G__37759 = c__4319__auto__;
var G__37760 = cljs.core.count.call(null,c__4319__auto__);
var G__37761 = (0);
seq__37695 = G__37758;
chunk__37696 = G__37759;
count__37697 = G__37760;
i__37698 = G__37761;
continue;
} else {
var role = cljs.core.first.call(null,seq__37695__$1);
var temp__5457__auto___37762__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37762__$2)){
var spec_37763 = temp__5457__auto___37762__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37763));
} else {
}


var G__37764 = cljs.core.next.call(null,seq__37695__$1);
var G__37765 = null;
var G__37766 = (0);
var G__37767 = (0);
seq__37695 = G__37764;
chunk__37696 = G__37765;
count__37697 = G__37766;
i__37698 = G__37767;
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

//# sourceMappingURL=repl.js.map?rel=1557582899477
