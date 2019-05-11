// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o23999 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23999["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24000 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24000["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24001 = temp__5455__auto____$2;
return (o24001["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24002 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24002["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24003 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24003["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24004 = temp__5455__auto____$2;
return (o24004["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24005 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24005["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24006 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24006["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24007 = temp__5455__auto____$2;
return (o24007["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24008 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24008["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24009 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24009["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24010 = temp__5455__auto____$2;
return (o24010["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24011 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24011["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24012 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24012["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24013 = temp__5455__auto____$2;
return (o24013["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24014 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24014["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24015 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24015["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24016 = temp__5455__auto____$2;
return (o24016["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o24017 = temp__5455__auto__;
var temp__5455__auto____$1 = (o24017["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o24018 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o24018["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o24019 = temp__5455__auto____$2;
return (o24019["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24021 = arguments.length;
var i__4500__auto___24022 = (0);
while(true){
if((i__4500__auto___24022 < len__4499__auto___24021)){
args__4502__auto__.push((arguments[i__4500__auto___24022]));

var G__24023 = (i__4500__auto___24022 + (1));
i__4500__auto___24022 = G__24023;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq24020){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24020));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24025 = arguments.length;
var i__4500__auto___24026 = (0);
while(true){
if((i__4500__auto___24026 < len__4499__auto___24025)){
args__4502__auto__.push((arguments[i__4500__auto___24026]));

var G__24027 = (i__4500__auto___24026 + (1));
i__4500__auto___24026 = G__24027;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq24024){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24024));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24029 = arguments.length;
var i__4500__auto___24030 = (0);
while(true){
if((i__4500__auto___24030 < len__4499__auto___24029)){
args__4502__auto__.push((arguments[i__4500__auto___24030]));

var G__24031 = (i__4500__auto___24030 + (1));
i__4500__auto___24030 = G__24031;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq24028){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24028));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24033 = arguments.length;
var i__4500__auto___24034 = (0);
while(true){
if((i__4500__auto___24034 < len__4499__auto___24033)){
args__4502__auto__.push((arguments[i__4500__auto___24034]));

var G__24035 = (i__4500__auto___24034 + (1));
i__4500__auto___24034 = G__24035;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24032){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24032));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24037 = arguments.length;
var i__4500__auto___24038 = (0);
while(true){
if((i__4500__auto___24038 < len__4499__auto___24037)){
args__4502__auto__.push((arguments[i__4500__auto___24038]));

var G__24039 = (i__4500__auto___24038 + (1));
i__4500__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq24036){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24036));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24041 = arguments.length;
var i__4500__auto___24042 = (0);
while(true){
if((i__4500__auto___24042 < len__4499__auto___24041)){
args__4502__auto__.push((arguments[i__4500__auto___24042]));

var G__24043 = (i__4500__auto___24042 + (1));
i__4500__auto___24042 = G__24043;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq24040){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24040));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24045 = arguments.length;
var i__4500__auto___24046 = (0);
while(true){
if((i__4500__auto___24046 < len__4499__auto___24045)){
args__4502__auto__.push((arguments[i__4500__auto___24046]));

var G__24047 = (i__4500__auto___24046 + (1));
i__4500__auto___24046 = G__24047;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq24044){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24044));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24055 = arguments.length;
var i__4500__auto___24056 = (0);
while(true){
if((i__4500__auto___24056 < len__4499__auto___24055)){
args__4502__auto__.push((arguments[i__4500__auto___24056]));

var G__24057 = (i__4500__auto___24056 + (1));
i__4500__auto___24056 = G__24057;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24051){
var vec__24052 = p__24051;
var state_override = cljs.core.nth.call(null,vec__24052,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24052,state_override){
return (function (p1__24048_SHARP_){
return cljs.core.merge.call(null,p1__24048_SHARP_,state_override);
});})(vec__24052,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq24049){
var G__24050 = cljs.core.first.call(null,seq24049);
var seq24049__$1 = cljs.core.next.call(null,seq24049);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24050,seq24049__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24059 = arguments.length;
var i__4500__auto___24060 = (0);
while(true){
if((i__4500__auto___24060 < len__4499__auto___24059)){
args__4502__auto__.push((arguments[i__4500__auto___24060]));

var G__24061 = (i__4500__auto___24060 + (1));
i__4500__auto___24060 = G__24061;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq24058){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24058));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24064 = arguments.length;
var i__4500__auto___24065 = (0);
while(true){
if((i__4500__auto___24065 < len__4499__auto___24064)){
args__4502__auto__.push((arguments[i__4500__auto___24065]));

var G__24066 = (i__4500__auto___24065 + (1));
i__4500__auto___24065 = G__24066;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24062){
var G__24063 = cljs.core.first.call(null,seq24062);
var seq24062__$1 = cljs.core.next.call(null,seq24062);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24063,seq24062__$1);
});


//# sourceMappingURL=format.js.map?rel=1557582877832
