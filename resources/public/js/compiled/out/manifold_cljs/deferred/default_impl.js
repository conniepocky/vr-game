// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.deferred.default_impl');
goog.require('cljs.core');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.impl.list');
goog.require('manifold_cljs.impl.queue');
goog.require('manifold_cljs.impl.logging');
goog.require('manifold_cljs.deferred.core');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {manifold_cljs.deferred.core.IMutableDeferred}
 * @implements {cljs.core.IDeref}
 * @implements {manifold_cljs.deferred.core.IDeferred}
*/
manifold_cljs.deferred.default_impl.Deferred = (function (val,state,claim_token,listeners,consumed_QMARK_,executor){
this.val = val;
this.state = state;
this.claim_token = claim_token;
this.listeners = listeners;
this.consumed_QMARK_ = consumed_QMARK_;
this.executor = executor;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$claim$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.keyword_identical_QMARK_.call(null,self__.state,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","unset","manifold-cljs.deferred.default-impl/unset",379770298))){
self__.state = new cljs.core.Keyword("manifold-cljs.deferred.default-impl","claimed","manifold-cljs.deferred.default-impl/claimed",-1323430614);

self__.claim_token = ({});
} else {
}

return self__.claim_token;
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$addListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
self__.consumed_QMARK_ = true;

var temp__5457__auto___21899 = (function (){var pred__21888 = cljs.core.keyword_identical_QMARK_;
var expr__21889 = self__.state;
if(cljs.core.truth_(pred__21888.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878),expr__21889))){
return ((function (pred__21888,expr__21889,___$1){
return (function (){
return manifold_cljs.deferred.core.onSuccess.call(null,listener,self__.val);
});
;})(pred__21888,expr__21889,___$1))
} else {
if(cljs.core.truth_(pred__21888.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268),expr__21889))){
return ((function (pred__21888,expr__21889,___$1){
return (function (){
return manifold_cljs.deferred.core.onError.call(null,listener,self__.val);
});
;})(pred__21888,expr__21889,___$1))
} else {
manifold_cljs.impl.list.add.call(null,self__.listeners,listener);

return null;
}
}
})();
if(cljs.core.truth_(temp__5457__auto___21899)){
var f_21900 = temp__5457__auto___21899;
if(cljs.core.truth_(self__.executor)){
manifold_cljs.executor.execute.call(null,self__.executor,f_21900);
} else {
f_21900.call(null);
}
} else {
}

return true;
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$cancelListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
var state__$1 = self__.state;
if(((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","unset","manifold-cljs.deferred.default-impl/unset",379770298),state__$1)) || (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","set","manifold-cljs.deferred.default-impl/set",-454887098),state__$1)))){
return manifold_cljs.impl.list.remove.call(null,self__.listeners,listener);
} else {
return false;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","unset","manifold-cljs.deferred.default-impl/unset",379770298),self__.state))?(function (){
self__.val = x;

self__.state = new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878);

return true;
})()
:null))){
while(true){
var temp__5457__auto___21901 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21901)){
var l__21834__auto___21902 = temp__5457__auto___21901;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onSuccess.call(null,l__21834__auto___21902,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21834__auto___21902,temp__5457__auto___21901,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onSuccess.call(null,l__21834__auto___21902,x);
}catch (e21892){if((e21892 instanceof Error)){
var e__21835__auto__ = e21892;
return manifold_cljs.impl.logging.error.call(null,e__21835__auto__,"error in deferred handler");
} else {
throw e21892;

}
}});})(l__21834__auto___21902,temp__5457__auto___21901,___$1))
);
}
}catch (e21891){if((e21891 instanceof Error)){
var e__21835__auto___21903 = e21891;
manifold_cljs.impl.logging.error.call(null,e__21835__auto___21903,"error in deferred handler");
} else {
throw e21891;

}
}
continue;
} else {
}
break;
}

return true;
} else {
return false;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(((((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","claimed","manifold-cljs.deferred.default-impl/claimed",-1323430614),self__.state)) && ((self__.claim_token === token))))?(function (){
self__.val = x;

self__.state = new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878);

return true;
})()
:null))){
while(true){
var temp__5457__auto___21904 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21904)){
var l__21834__auto___21905 = temp__5457__auto___21904;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onSuccess.call(null,l__21834__auto___21905,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21834__auto___21905,temp__5457__auto___21904,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onSuccess.call(null,l__21834__auto___21905,x);
}catch (e21894){if((e21894 instanceof Error)){
var e__21835__auto__ = e21894;
return manifold_cljs.impl.logging.error.call(null,e__21835__auto__,"error in deferred handler");
} else {
throw e21894;

}
}});})(l__21834__auto___21905,temp__5457__auto___21904,___$1))
);
}
}catch (e21893){if((e21893 instanceof Error)){
var e__21835__auto___21906 = e21893;
manifold_cljs.impl.logging.error.call(null,e__21835__auto___21906,"error in deferred handler");
} else {
throw e21893;

}
}
continue;
} else {
}
break;
}

return true;
} else {
throw cljs.core.ex_info.call(null,(((self__.claim_token === token))?"deferred isn't claimed":"invalid claim-token"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"claim-token","claim-token",-411355139),self__.claim_token], null));
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","unset","manifold-cljs.deferred.default-impl/unset",379770298),self__.state))?(function (){
self__.val = x;

self__.state = new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268);

return true;
})()
:null))){
while(true){
var temp__5457__auto___21907 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21907)){
var l__21834__auto___21908 = temp__5457__auto___21907;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onError.call(null,l__21834__auto___21908,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21834__auto___21908,temp__5457__auto___21907,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onError.call(null,l__21834__auto___21908,x);
}catch (e21896){if((e21896 instanceof Error)){
var e__21835__auto__ = e21896;
return manifold_cljs.impl.logging.error.call(null,e__21835__auto__,"error in deferred handler");
} else {
throw e21896;

}
}});})(l__21834__auto___21908,temp__5457__auto___21907,___$1))
);
}
}catch (e21895){if((e21895 instanceof Error)){
var e__21835__auto___21909 = e21895;
manifold_cljs.impl.logging.error.call(null,e__21835__auto___21909,"error in deferred handler");
} else {
throw e21895;

}
}
continue;
} else {
}
break;
}

return true;
} else {
return false;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(((((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","claimed","manifold-cljs.deferred.default-impl/claimed",-1323430614),self__.state)) && ((self__.claim_token === token))))?(function (){
self__.val = x;

self__.state = new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268);

return true;
})()
:null))){
while(true){
var temp__5457__auto___21910 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21910)){
var l__21834__auto___21911 = temp__5457__auto___21910;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onError.call(null,l__21834__auto___21911,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21834__auto___21911,temp__5457__auto___21910,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onError.call(null,l__21834__auto___21911,x);
}catch (e21898){if((e21898 instanceof Error)){
var e__21835__auto__ = e21898;
return manifold_cljs.impl.logging.error.call(null,e__21835__auto__,"error in deferred handler");
} else {
throw e21898;

}
}});})(l__21834__auto___21911,temp__5457__auto___21910,___$1))
);
}
}catch (e21897){if((e21897 instanceof Error)){
var e__21835__auto___21912 = e21897;
manifold_cljs.impl.logging.error.call(null,e__21835__auto___21912,"error in deferred handler");
} else {
throw e21897;

}
}
continue;
} else {
}
break;
}

return true;
} else {
throw cljs.core.ex_info.call(null,(((self__.claim_token === token))?"deferred isn't claimed":"invalid claim-token"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"claim-token","claim-token",-411355139),self__.claim_token], null));
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
if(cljs.core.truth_(manifold_cljs.deferred.core.success.call(null,this$,x))){
return this$;
} else {
return null;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.apply = (function (self__,args21887){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21887)));
});

manifold_cljs.deferred.default_impl.Deferred.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(manifold_cljs.deferred.core.success.call(null,this$,x))){
return this$;
} else {
return null;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$executor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.executor;
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$realized$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var state__$1 = self__.state;
return ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878),state__$1)) || (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268),state__$1)));
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$onRealized$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.deferred.core.addListener.call(null,this$__$1,manifold_cljs.deferred.core.listener.call(null,on_success,on_error));
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$successValue$arity$2 = (function (this$,default_value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878),self__.state)){
self__.consumed_QMARK_ = true;

return self__.val;
} else {
return default_value;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.manifold_cljs$deferred$core$IDeferred$errorValue$arity$2 = (function (this$,default_value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268),self__.state)){
self__.consumed_QMARK_ = true;

return self__.val;
} else {
return default_value;
}
});

manifold_cljs.deferred.default_impl.Deferred.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.deferred.core.realized.call(null,this$__$1);
});

manifold_cljs.deferred.default_impl.Deferred.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.consumed_QMARK_ = true;

if(cljs.core.keyword_identical_QMARK_.call(null,self__.state,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878))){
return self__.val;
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,self__.state,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268))){
if((self__.val instanceof Error)){
throw self__.val;
} else {
throw cljs.core.ex_info.call(null,"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),self__.val], null));
}
} else {
throw cljs.core.ex_info.call(null,"invalid state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),self__.state], null));
}
}
});

manifold_cljs.deferred.default_impl.Deferred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"claim-token","claim-token",1229176388,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),cljs.core.with_meta(new cljs.core.Symbol(null,"consumed?","consumed?",74717038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null);
});

manifold_cljs.deferred.default_impl.Deferred.cljs$lang$type = true;

manifold_cljs.deferred.default_impl.Deferred.cljs$lang$ctorStr = "manifold-cljs.deferred.default-impl/Deferred";

manifold_cljs.deferred.default_impl.Deferred.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.deferred.default-impl/Deferred");
});

/**
 * Positional factory function for manifold-cljs.deferred.default-impl/Deferred.
 */
manifold_cljs.deferred.default_impl.__GT_Deferred = (function manifold_cljs$deferred$default_impl$__GT_Deferred(val,state,claim_token,listeners,consumed_QMARK_,executor){
return (new manifold_cljs.deferred.default_impl.Deferred(val,state,claim_token,listeners,consumed_QMARK_,executor));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {manifold_cljs.deferred.core.IMutableDeferred}
 * @implements {cljs.core.IDeref}
 * @implements {manifold_cljs.deferred.core.IDeferred}
*/
manifold_cljs.deferred.default_impl.SuccessDeferred = (function (val,executor){
this.val = val;
this.executor = executor;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$claim$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$addListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
if((self__.executor == null)){
manifold_cljs.deferred.core.onSuccess.call(null,listener,self__.val);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (___$1){
return (function (){
return manifold_cljs.deferred.core.onSuccess.call(null,listener,self__.val);
});})(___$1))
);
}

return true;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$cancelListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return null;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.apply = (function (self__,args21913){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21913)));
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return null;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$executor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.executor;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$realized$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$onRealized$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.executor)){
return manifold_cljs.executor.execute.call(null,self__.executor,((function (this$__$1){
return (function (){
return on_success.call(null,self__.val);
});})(this$__$1))
);
} else {
return on_success.call(null,self__.val);
}
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$successValue$arity$2 = (function (_,default_value){
var self__ = this;
var ___$1 = this;
return self__.val;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.manifold_cljs$deferred$core$IDeferred$errorValue$arity$2 = (function (_,default_value){
var self__ = this;
var ___$1 = this;
return default_value;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.deferred.core.realized.call(null,this$__$1);
});

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

manifold_cljs.deferred.default_impl.SuccessDeferred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null);
});

manifold_cljs.deferred.default_impl.SuccessDeferred.cljs$lang$type = true;

manifold_cljs.deferred.default_impl.SuccessDeferred.cljs$lang$ctorStr = "manifold-cljs.deferred.default-impl/SuccessDeferred";

manifold_cljs.deferred.default_impl.SuccessDeferred.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.deferred.default-impl/SuccessDeferred");
});

/**
 * Positional factory function for manifold-cljs.deferred.default-impl/SuccessDeferred.
 */
manifold_cljs.deferred.default_impl.__GT_SuccessDeferred = (function manifold_cljs$deferred$default_impl$__GT_SuccessDeferred(val,executor){
return (new manifold_cljs.deferred.default_impl.SuccessDeferred(val,executor));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {manifold_cljs.deferred.core.IMutableDeferred}
 * @implements {cljs.core.IDeref}
 * @implements {manifold_cljs.deferred.core.IDeferred}
*/
manifold_cljs.deferred.default_impl.ErrorDeferred = (function (error,consumed_QMARK_,executor){
this.error = error;
this.consumed_QMARK_ = consumed_QMARK_;
this.executor = executor;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$claim$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$addListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
self__.consumed_QMARK_ = true;

manifold_cljs.deferred.core.onError.call(null,listener,self__.error);

return true;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$cancelListener$arity$2 = (function (_,listener){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$success$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IMutableDeferred$error$arity$3 = (function (_,x,token){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return null;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.apply = (function (self__,args21914){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21914)));
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return null;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$executor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.executor;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$realized$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$onRealized$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
self__.consumed_QMARK_ = true;

if((self__.executor == null)){
return on_error.call(null,self__.error);
} else {
return manifold_cljs.executor.execute.call(null,self__.executor,((function (this$__$1){
return (function (){
return on_error.call(null,self__.error);
});})(this$__$1))
);
}
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$successValue$arity$2 = (function (_,default_value){
var self__ = this;
var ___$1 = this;
return default_value;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.manifold_cljs$deferred$core$IDeferred$errorValue$arity$2 = (function (_,default_value){
var self__ = this;
var ___$1 = this;
self__.consumed_QMARK_ = true;

return self__.error;
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.deferred.core.realized.call(null,this$__$1);
});

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.consumed_QMARK_ = true;

if((self__.error instanceof Error)){
throw self__.error;
} else {
throw cljs.core.ex_info.call(null,"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),self__.error], null));
}
});

manifold_cljs.deferred.default_impl.ErrorDeferred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null),cljs.core.with_meta(new cljs.core.Symbol(null,"consumed?","consumed?",74717038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null);
});

manifold_cljs.deferred.default_impl.ErrorDeferred.cljs$lang$type = true;

manifold_cljs.deferred.default_impl.ErrorDeferred.cljs$lang$ctorStr = "manifold-cljs.deferred.default-impl/ErrorDeferred";

manifold_cljs.deferred.default_impl.ErrorDeferred.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.deferred.default-impl/ErrorDeferred");
});

/**
 * Positional factory function for manifold-cljs.deferred.default-impl/ErrorDeferred.
 */
manifold_cljs.deferred.default_impl.__GT_ErrorDeferred = (function manifold_cljs$deferred$default_impl$__GT_ErrorDeferred(error,consumed_QMARK_,executor){
return (new manifold_cljs.deferred.default_impl.ErrorDeferred(error,consumed_QMARK_,executor));
});

manifold_cljs.deferred.default_impl.true_deferred_ = (new manifold_cljs.deferred.default_impl.SuccessDeferred(true,manifold_cljs.executor.default_executor));
manifold_cljs.deferred.default_impl.false_deferred_ = (new manifold_cljs.deferred.default_impl.SuccessDeferred(false,manifold_cljs.executor.default_executor));
manifold_cljs.deferred.default_impl.nil_deferred_ = (new manifold_cljs.deferred.default_impl.SuccessDeferred(null,manifold_cljs.executor.default_executor));
/**
 * A deferred which already contains a realized value
 */
manifold_cljs.deferred.default_impl.success_deferred = (function manifold_cljs$deferred$default_impl$success_deferred(var_args){
var G__21916 = arguments.length;
switch (G__21916) {
case 1:
return manifold_cljs.deferred.default_impl.success_deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.default_impl.success_deferred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.default_impl.success_deferred.cljs$core$IFn$_invoke$arity$1 = (function (val){
return manifold_cljs.deferred.default_impl.success_deferred.call(null,val,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.deferred.default_impl.success_deferred.cljs$core$IFn$_invoke$arity$2 = (function (val,executor){
if((executor === manifold_cljs.executor.default_executor)){
var pred__21917 = cljs.core._EQ_;
var expr__21918 = val;
if(cljs.core.truth_(pred__21917.call(null,true,expr__21918))){
return manifold_cljs.deferred.default_impl.true_deferred_;
} else {
if(cljs.core.truth_(pred__21917.call(null,false,expr__21918))){
return manifold_cljs.deferred.default_impl.false_deferred_;
} else {
if(cljs.core.truth_(pred__21917.call(null,null,expr__21918))){
return manifold_cljs.deferred.default_impl.nil_deferred_;
} else {
return (new manifold_cljs.deferred.default_impl.SuccessDeferred(val,executor));
}
}
}
} else {
return (new manifold_cljs.deferred.default_impl.SuccessDeferred(val,executor));
}
});

manifold_cljs.deferred.default_impl.success_deferred.cljs$lang$maxFixedArity = 2;

/**
 * A deferred which already contains a realized error
 */
manifold_cljs.deferred.default_impl.error_deferred = (function manifold_cljs$deferred$default_impl$error_deferred(var_args){
var G__21922 = arguments.length;
switch (G__21922) {
case 1:
return manifold_cljs.deferred.default_impl.error_deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.default_impl.error_deferred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.default_impl.error_deferred.cljs$core$IFn$_invoke$arity$1 = (function (error){
return (new manifold_cljs.deferred.default_impl.ErrorDeferred(error,false,manifold_cljs.executor.executor.call(null)));
});

manifold_cljs.deferred.default_impl.error_deferred.cljs$core$IFn$_invoke$arity$2 = (function (error,executor){
return (new manifold_cljs.deferred.default_impl.ErrorDeferred(error,false,executor));
});

manifold_cljs.deferred.default_impl.error_deferred.cljs$lang$maxFixedArity = 2;

manifold_cljs.deferred.default_impl.deferred = (function manifold_cljs$deferred$default_impl$deferred(executor){
return (new manifold_cljs.deferred.default_impl.Deferred(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","unset","manifold-cljs.deferred.default-impl/unset",379770298),null,manifold_cljs.impl.list.list.call(null),false,executor));
});

//# sourceMappingURL=default_impl.js.map?rel=1557582871442
