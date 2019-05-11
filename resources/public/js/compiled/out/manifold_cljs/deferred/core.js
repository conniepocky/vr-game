// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.deferred.core');
goog.require('cljs.core');

/**
 * @interface
 */
manifold_cljs.deferred.core.IDeferred = function(){};

manifold_cljs.deferred.core.executor = (function manifold_cljs$deferred$core$executor(this$){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferred$executor$arity$1 == null))))){
return this$.manifold_cljs$deferred$core$IDeferred$executor$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.executor[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.executor["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferred.executor",this$);
}
}
}
});

manifold_cljs.deferred.core.realized = (function manifold_cljs$deferred$core$realized(this$){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferred$realized$arity$1 == null))))){
return this$.manifold_cljs$deferred$core$IDeferred$realized$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.realized[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.realized["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferred.realized",this$);
}
}
}
});

manifold_cljs.deferred.core.onRealized = (function manifold_cljs$deferred$core$onRealized(this$,on_success,on_error){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferred$onRealized$arity$3 == null))))){
return this$.manifold_cljs$deferred$core$IDeferred$onRealized$arity$3(this$,on_success,on_error);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.onRealized[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,on_success,on_error);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.onRealized["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,on_success,on_error);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferred.onRealized",this$);
}
}
}
});

manifold_cljs.deferred.core.successValue = (function manifold_cljs$deferred$core$successValue(this$,default$){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferred$successValue$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IDeferred$successValue$arity$2(this$,default$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.successValue[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,default$);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.successValue["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,default$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferred.successValue",this$);
}
}
}
});

manifold_cljs.deferred.core.errorValue = (function manifold_cljs$deferred$core$errorValue(this$,default$){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferred$errorValue$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IDeferred$errorValue$arity$2(this$,default$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.errorValue[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,default$);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.errorValue["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,default$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferred.errorValue",this$);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.deferred.core.IMutableDeferred = function(){};

manifold_cljs.deferred.core.success = (function manifold_cljs$deferred$core$success(var_args){
var G__21785 = arguments.length;
switch (G__21785) {
case 2:
return manifold_cljs.deferred.core.success.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.core.success.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.core.success.cljs$core$IFn$_invoke$arity$2 = (function (this$,x){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$success$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$success$arity$2(this$,x);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.success[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,x);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.success["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.success",this$);
}
}
}
});

manifold_cljs.deferred.core.success.cljs$core$IFn$_invoke$arity$3 = (function (this$,x,claim_token){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$success$arity$3 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$success$arity$3(this$,x,claim_token);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.success[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,x,claim_token);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.success["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,x,claim_token);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.success",this$);
}
}
}
});

manifold_cljs.deferred.core.success.cljs$lang$maxFixedArity = 3;


manifold_cljs.deferred.core.error = (function manifold_cljs$deferred$core$error(var_args){
var G__21787 = arguments.length;
switch (G__21787) {
case 2:
return manifold_cljs.deferred.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.core.error.cljs$core$IFn$_invoke$arity$2 = (function (this$,x){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$error$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$error$arity$2(this$,x);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.error[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,x);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.error["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.error",this$);
}
}
}
});

manifold_cljs.deferred.core.error.cljs$core$IFn$_invoke$arity$3 = (function (this$,x,claim_token){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$error$arity$3 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$error$arity$3(this$,x,claim_token);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.error[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,x,claim_token);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.error["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,x,claim_token);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.error",this$);
}
}
}
});

manifold_cljs.deferred.core.error.cljs$lang$maxFixedArity = 3;


manifold_cljs.deferred.core.claim = (function manifold_cljs$deferred$core$claim(this$){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$claim$arity$1 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$claim$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.claim[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.claim["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.claim",this$);
}
}
}
});

manifold_cljs.deferred.core.addListener = (function manifold_cljs$deferred$core$addListener(this$,listener){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$addListener$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$addListener$arity$2(this$,listener);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.addListener[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,listener);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.addListener["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.addListener",this$);
}
}
}
});

manifold_cljs.deferred.core.cancelListener = (function manifold_cljs$deferred$core$cancelListener(this$,listener){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IMutableDeferred$cancelListener$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IMutableDeferred$cancelListener$arity$2(this$,listener);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.cancelListener[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,listener);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.cancelListener["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableDeferred.cancelListener",this$);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.deferred.core.IDeferredListener = function(){};

manifold_cljs.deferred.core.onSuccess = (function manifold_cljs$deferred$core$onSuccess(this$,x){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferredListener$onSuccess$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IDeferredListener$onSuccess$arity$2(this$,x);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.onSuccess[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,x);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.onSuccess["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferredListener.onSuccess",this$);
}
}
}
});

manifold_cljs.deferred.core.onError = (function manifold_cljs$deferred$core$onError(this$,err){
if(((!((this$ == null))) && (!((this$.manifold_cljs$deferred$core$IDeferredListener$onError$arity$2 == null))))){
return this$.manifold_cljs$deferred$core$IDeferredListener$onError$arity$2(this$,err);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (manifold_cljs.deferred.core.onError[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,err);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.core.onError["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,err);
} else {
throw cljs.core.missing_protocol.call(null,"IDeferredListener.onError",this$);
}
}
}
});


/**
* @constructor
 * @implements {manifold_cljs.deferred.core.IDeferredListener}
*/
manifold_cljs.deferred.core.Listener = (function (on_success,on_error){
this.on_success = on_success;
this.on_error = on_error;
});
manifold_cljs.deferred.core.Listener.prototype.manifold_cljs$deferred$core$IDeferredListener$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.core.Listener.prototype.manifold_cljs$deferred$core$IDeferredListener$onSuccess$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.on_success.call(null,x);
});

manifold_cljs.deferred.core.Listener.prototype.manifold_cljs$deferred$core$IDeferredListener$onError$arity$2 = (function (_,err){
var self__ = this;
var ___$1 = this;
return self__.on_error.call(null,err);
});

manifold_cljs.deferred.core.Listener.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-success","on-success",-867531660,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

manifold_cljs.deferred.core.Listener.cljs$lang$type = true;

manifold_cljs.deferred.core.Listener.cljs$lang$ctorStr = "manifold-cljs.deferred.core/Listener";

manifold_cljs.deferred.core.Listener.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.deferred.core/Listener");
});

/**
 * Positional factory function for manifold-cljs.deferred.core/Listener.
 */
manifold_cljs.deferred.core.__GT_Listener = (function manifold_cljs$deferred$core$__GT_Listener(on_success,on_error){
return (new manifold_cljs.deferred.core.Listener(on_success,on_error));
});

/**
 * Creates a listener which can be registered or cancelled via `add-listener!` and `cancel-listener!`.
 */
manifold_cljs.deferred.core.listener = (function manifold_cljs$deferred$core$listener(var_args){
var G__21791 = arguments.length;
switch (G__21791) {
case 1:
return manifold_cljs.deferred.core.listener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.core.listener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.core.listener.cljs$core$IFn$_invoke$arity$1 = (function (on_success){
return manifold_cljs.deferred.core.listener.call(null,on_success,(function (_){
return null;
}));
});

manifold_cljs.deferred.core.listener.cljs$core$IFn$_invoke$arity$2 = (function (on_success,on_error){
return (new manifold_cljs.deferred.core.Listener(on_success,on_error));
});

manifold_cljs.deferred.core.listener.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1557582870888
