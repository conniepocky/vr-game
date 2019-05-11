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

var temp__5457__auto___21859 = (function (){var pred__21848 = cljs.core.keyword_identical_QMARK_;
var expr__21849 = self__.state;
if(cljs.core.truth_(pred__21848.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","success","manifold-cljs.deferred.default-impl/success",1668665878),expr__21849))){
return ((function (pred__21848,expr__21849,___$1){
return (function (){
return manifold_cljs.deferred.core.onSuccess.call(null,listener,self__.val);
});
;})(pred__21848,expr__21849,___$1))
} else {
if(cljs.core.truth_(pred__21848.call(null,new cljs.core.Keyword("manifold-cljs.deferred.default-impl","error","manifold-cljs.deferred.default-impl/error",-900136268),expr__21849))){
return ((function (pred__21848,expr__21849,___$1){
return (function (){
return manifold_cljs.deferred.core.onError.call(null,listener,self__.val);
});
;})(pred__21848,expr__21849,___$1))
} else {
manifold_cljs.impl.list.add.call(null,self__.listeners,listener);

return null;
}
}
})();
if(cljs.core.truth_(temp__5457__auto___21859)){
var f_21860 = temp__5457__auto___21859;
if(cljs.core.truth_(self__.executor)){
manifold_cljs.executor.execute.call(null,self__.executor,f_21860);
} else {
f_21860.call(null);
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
var temp__5457__auto___21861 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21861)){
var l__21833__auto___21862 = temp__5457__auto___21861;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onSuccess.call(null,l__21833__auto___21862,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21833__auto___21862,temp__5457__auto___21861,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onSuccess.call(null,l__21833__auto___21862,x);
}catch (e21852){if((e21852 instanceof Error)){
var e__21834__auto__ = e21852;
return manifold_cljs.impl.logging.error.call(null,e__21834__auto__,"error in deferred handler");
} else {
throw e21852;

}
}});})(l__21833__auto___21862,temp__5457__auto___21861,___$1))
);
}
}catch (e21851){if((e21851 instanceof Error)){
var e__21834__auto___21863 = e21851;
manifold_cljs.impl.logging.error.call(null,e__21834__auto___21863,"error in deferred handler");
} else {
throw e21851;

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
var temp__5457__auto___21864 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21864)){
var l__21833__auto___21865 = temp__5457__auto___21864;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onSuccess.call(null,l__21833__auto___21865,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21833__auto___21865,temp__5457__auto___21864,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onSuccess.call(null,l__21833__auto___21865,x);
}catch (e21854){if((e21854 instanceof Error)){
var e__21834__auto__ = e21854;
return manifold_cljs.impl.logging.error.call(null,e__21834__auto__,"error in deferred handler");
} else {
throw e21854;

}
}});})(l__21833__auto___21865,temp__5457__auto___21864,___$1))
);
}
}catch (e21853){if((e21853 instanceof Error)){
var e__21834__auto___21866 = e21853;
manifold_cljs.impl.logging.error.call(null,e__21834__auto___21866,"error in deferred handler");
} else {
throw e21853;

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
var temp__5457__auto___21867 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21867)){
var l__21833__auto___21868 = temp__5457__auto___21867;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onError.call(null,l__21833__auto___21868,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21833__auto___21868,temp__5457__auto___21867,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onError.call(null,l__21833__auto___21868,x);
}catch (e21856){if((e21856 instanceof Error)){
var e__21834__auto__ = e21856;
return manifold_cljs.impl.logging.error.call(null,e__21834__auto__,"error in deferred handler");
} else {
throw e21856;

}
}});})(l__21833__auto___21868,temp__5457__auto___21867,___$1))
);
}
}catch (e21855){if((e21855 instanceof Error)){
var e__21834__auto___21869 = e21855;
manifold_cljs.impl.logging.error.call(null,e__21834__auto___21869,"error in deferred handler");
} else {
throw e21855;

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
var temp__5457__auto___21870 = manifold_cljs.impl.queue.poll.call(null,self__.listeners);
if(cljs.core.truth_(temp__5457__auto___21870)){
var l__21833__auto___21871 = temp__5457__auto___21870;
try{if((self__.executor == null)){
manifold_cljs.deferred.core.onError.call(null,l__21833__auto___21871,x);
} else {
manifold_cljs.executor.execute.call(null,self__.executor,((function (l__21833__auto___21871,temp__5457__auto___21870,___$1){
return (function (){
try{return manifold_cljs.deferred.core.onError.call(null,l__21833__auto___21871,x);
}catch (e21858){if((e21858 instanceof Error)){
var e__21834__auto__ = e21858;
return manifold_cljs.impl.logging.error.call(null,e__21834__auto__,"error in deferred handler");
} else {
throw e21858;

}
}});})(l__21833__auto___21871,temp__5457__auto___21870,___$1))
);
}
}catch (e21857){if((e21857 instanceof Error)){
var e__21834__auto___21872 = e21857;
manifold_cljs.impl.logging.error.call(null,e__21834__auto___21872,"error in deferred handler");
} else {
throw e21857;

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

manifold_cljs.deferred.default_impl.Deferred.prototype.apply = (function (self__,args21847){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21847)));
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

manifold_cljs.deferred.default_impl.SuccessDeferred.prototype.apply = (function (self__,args21873){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21873)));
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

manifold_cljs.deferred.default_impl.ErrorDeferred.prototype.apply = (function (self__,args21874){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21874)));
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
var G__21876 = arguments.length;
switch (G__21876) {
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
var pred__21877 = cljs.core._EQ_;
var expr__21878 = val;
if(cljs.core.truth_(pred__21877.call(null,true,expr__21878))){
return manifold_cljs.deferred.default_impl.true_deferred_;
} else {
if(cljs.core.truth_(pred__21877.call(null,false,expr__21878))){
return manifold_cljs.deferred.default_impl.false_deferred_;
} else {
if(cljs.core.truth_(pred__21877.call(null,null,expr__21878))){
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
var G__21882 = arguments.length;
switch (G__21882) {
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

//# sourceMappingURL=default_impl.js.map?rel=1557580542894
