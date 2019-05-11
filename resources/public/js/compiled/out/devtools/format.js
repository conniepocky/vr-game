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
var o45291 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45291["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45292 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45292["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45293 = temp__5455__auto____$2;
return (o45293["make_template"]);
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
var o45294 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45294["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45295 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45295["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45296 = temp__5455__auto____$2;
return (o45296["make_group"]);
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
var o45297 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45297["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45298 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45298["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45299 = temp__5455__auto____$2;
return (o45299["make_reference"]);
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
var o45300 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45300["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45301 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45301["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45302 = temp__5455__auto____$2;
return (o45302["make_surrogate"]);
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
var o45303 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45303["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45304 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45304["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45305 = temp__5455__auto____$2;
return (o45305["render_markup"]);
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
var o45306 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45306["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45307 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45307["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45308 = temp__5455__auto____$2;
return (o45308["_LT_header_GT_"]);
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
var o45309 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45309["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45310 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45310["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45311 = temp__5455__auto____$2;
return (o45311["_LT_standard_body_GT_"]);
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
var len__4499__auto___45313 = arguments.length;
var i__4500__auto___45314 = (0);
while(true){
if((i__4500__auto___45314 < len__4499__auto___45313)){
args__4502__auto__.push((arguments[i__4500__auto___45314]));

var G__45315 = (i__4500__auto___45314 + (1));
i__4500__auto___45314 = G__45315;
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
devtools.format.render_markup.cljs$lang$applyTo = (function (seq45312){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45312));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45317 = arguments.length;
var i__4500__auto___45318 = (0);
while(true){
if((i__4500__auto___45318 < len__4499__auto___45317)){
args__4502__auto__.push((arguments[i__4500__auto___45318]));

var G__45319 = (i__4500__auto___45318 + (1));
i__4500__auto___45318 = G__45319;
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
devtools.format.make_template.cljs$lang$applyTo = (function (seq45316){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45316));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45321 = arguments.length;
var i__4500__auto___45322 = (0);
while(true){
if((i__4500__auto___45322 < len__4499__auto___45321)){
args__4502__auto__.push((arguments[i__4500__auto___45322]));

var G__45323 = (i__4500__auto___45322 + (1));
i__4500__auto___45322 = G__45323;
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
devtools.format.make_group.cljs$lang$applyTo = (function (seq45320){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45320));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45325 = arguments.length;
var i__4500__auto___45326 = (0);
while(true){
if((i__4500__auto___45326 < len__4499__auto___45325)){
args__4502__auto__.push((arguments[i__4500__auto___45326]));

var G__45327 = (i__4500__auto___45326 + (1));
i__4500__auto___45326 = G__45327;
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
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq45324){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45324));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45329 = arguments.length;
var i__4500__auto___45330 = (0);
while(true){
if((i__4500__auto___45330 < len__4499__auto___45329)){
args__4502__auto__.push((arguments[i__4500__auto___45330]));

var G__45331 = (i__4500__auto___45330 + (1));
i__4500__auto___45330 = G__45331;
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
devtools.format.template.cljs$lang$applyTo = (function (seq45328){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45328));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45333 = arguments.length;
var i__4500__auto___45334 = (0);
while(true){
if((i__4500__auto___45334 < len__4499__auto___45333)){
args__4502__auto__.push((arguments[i__4500__auto___45334]));

var G__45335 = (i__4500__auto___45334 + (1));
i__4500__auto___45334 = G__45335;
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
devtools.format.group.cljs$lang$applyTo = (function (seq45332){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45332));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45337 = arguments.length;
var i__4500__auto___45338 = (0);
while(true){
if((i__4500__auto___45338 < len__4499__auto___45337)){
args__4502__auto__.push((arguments[i__4500__auto___45338]));

var G__45339 = (i__4500__auto___45338 + (1));
i__4500__auto___45338 = G__45339;
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
devtools.format.surrogate.cljs$lang$applyTo = (function (seq45336){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45336));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45347 = arguments.length;
var i__4500__auto___45348 = (0);
while(true){
if((i__4500__auto___45348 < len__4499__auto___45347)){
args__4502__auto__.push((arguments[i__4500__auto___45348]));

var G__45349 = (i__4500__auto___45348 + (1));
i__4500__auto___45348 = G__45349;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45343){
var vec__45344 = p__45343;
var state_override = cljs.core.nth.call(null,vec__45344,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__45344,state_override){
return (function (p1__45340_SHARP_){
return cljs.core.merge.call(null,p1__45340_SHARP_,state_override);
});})(vec__45344,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq45341){
var G__45342 = cljs.core.first.call(null,seq45341);
var seq45341__$1 = cljs.core.next.call(null,seq45341);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45342,seq45341__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45351 = arguments.length;
var i__4500__auto___45352 = (0);
while(true){
if((i__4500__auto___45352 < len__4499__auto___45351)){
args__4502__auto__.push((arguments[i__4500__auto___45352]));

var G__45353 = (i__4500__auto___45352 + (1));
i__4500__auto___45352 = G__45353;
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
devtools.format.build_header.cljs$lang$applyTo = (function (seq45350){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45350));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45356 = arguments.length;
var i__4500__auto___45357 = (0);
while(true){
if((i__4500__auto___45357 < len__4499__auto___45356)){
args__4502__auto__.push((arguments[i__4500__auto___45357]));

var G__45358 = (i__4500__auto___45357 + (1));
i__4500__auto___45357 = G__45358;
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq45354){
var G__45355 = cljs.core.first.call(null,seq45354);
var seq45354__$1 = cljs.core.next.call(null,seq45354);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45355,seq45354__$1);
});


//# sourceMappingURL=format.js.map?rel=1557588314597
