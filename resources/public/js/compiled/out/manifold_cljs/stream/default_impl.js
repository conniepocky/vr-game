// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.stream.default_impl');
goog.require('cljs.core');
goog.require('manifold_cljs.deferred');
goog.require('manifold_cljs.impl.queue');
goog.require('manifold_cljs.impl.logging');
goog.require('manifold_cljs.utils');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.stream.core');
goog.require('manifold_cljs.stream.graph');

/**
* @constructor
*/
manifold_cljs.stream.default_impl.Production = (function (deferred,message,token){
this.deferred = deferred;
this.message = message;
this.token = token;
});

manifold_cljs.stream.default_impl.Production.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
});

manifold_cljs.stream.default_impl.Production.cljs$lang$type = true;

manifold_cljs.stream.default_impl.Production.cljs$lang$ctorStr = "manifold-cljs.stream.default-impl/Production";

manifold_cljs.stream.default_impl.Production.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.default-impl/Production");
});

/**
 * Positional factory function for manifold-cljs.stream.default-impl/Production.
 */
manifold_cljs.stream.default_impl.__GT_Production = (function manifold_cljs$stream$default_impl$__GT_Production(deferred,message,token){
return (new manifold_cljs.stream.default_impl.Production(deferred,message,token));
});


/**
* @constructor
*/
manifold_cljs.stream.default_impl.Consumption = (function (message,deferred,token){
this.message = message;
this.deferred = deferred;
this.token = token;
});

manifold_cljs.stream.default_impl.Consumption.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
});

manifold_cljs.stream.default_impl.Consumption.cljs$lang$type = true;

manifold_cljs.stream.default_impl.Consumption.cljs$lang$ctorStr = "manifold-cljs.stream.default-impl/Consumption";

manifold_cljs.stream.default_impl.Consumption.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.default-impl/Consumption");
});

/**
 * Positional factory function for manifold-cljs.stream.default-impl/Consumption.
 */
manifold_cljs.stream.default_impl.__GT_Consumption = (function manifold_cljs$stream$default_impl$__GT_Consumption(message,deferred,token){
return (new manifold_cljs.stream.default_impl.Consumption(message,deferred,token));
});


/**
* @constructor
*/
manifold_cljs.stream.default_impl.Producer = (function (message,deferred){
this.message = message;
this.deferred = deferred;
});

manifold_cljs.stream.default_impl.Producer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"deferred","deferred",-336429161,null)], null);
});

manifold_cljs.stream.default_impl.Producer.cljs$lang$type = true;

manifold_cljs.stream.default_impl.Producer.cljs$lang$ctorStr = "manifold-cljs.stream.default-impl/Producer";

manifold_cljs.stream.default_impl.Producer.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.default-impl/Producer");
});

/**
 * Positional factory function for manifold-cljs.stream.default-impl/Producer.
 */
manifold_cljs.stream.default_impl.__GT_Producer = (function manifold_cljs$stream$default_impl$__GT_Producer(message,deferred){
return (new manifold_cljs.stream.default_impl.Producer(message,deferred));
});


/**
* @constructor
*/
manifold_cljs.stream.default_impl.Consumer = (function (deferred,default_val){
this.deferred = deferred;
this.default_val = default_val;
});

manifold_cljs.stream.default_impl.Consumer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"default-val","default-val",-1543465360,null)], null);
});

manifold_cljs.stream.default_impl.Consumer.cljs$lang$type = true;

manifold_cljs.stream.default_impl.Consumer.cljs$lang$ctorStr = "manifold-cljs.stream.default-impl/Consumer";

manifold_cljs.stream.default_impl.Consumer.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.default-impl/Consumer");
});

/**
 * Positional factory function for manifold-cljs.stream.default-impl/Consumer.
 */
manifold_cljs.stream.default_impl.__GT_Consumer = (function manifold_cljs$stream$default_impl$__GT_Consumer(deferred,default_val){
return (new manifold_cljs.stream.default_impl.Consumer(deferred,default_val));
});


/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSource}
 * @implements {manifold_cljs.stream.core.IEventSink}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.default_impl.Stream = (function (permanent_QMARK_,description,producers,consumers,capacity,messages,executor,add_BANG_,__isDrained,__drainedCallbacks,__isClosed,__closedCallbacks){
this.permanent_QMARK_ = permanent_QMARK_;
this.description = description;
this.producers = producers;
this.consumers = consumers;
this.capacity = capacity;
this.messages = messages;
this.executor = executor;
this.add_BANG_ = add_BANG_;
this.__isDrained = __isDrained;
this.__drainedCallbacks = __drainedCallbacks;
this.__isClosed = __isClosed;
this.__closedCallbacks = __closedCallbacks;
});
manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (this__22524__auto__){
var self__ = this;
var this__22524__auto____$1 = this;
return manifold_cljs.stream.graph.downstream.call(null,this__22524__auto____$1);
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (this__22524__auto__,ref_queue__22525__auto__){
var self__ = this;
var this__22524__auto____$1 = this;
return this__22524__auto____$1;
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.permanent_QMARK_){
return null;
} else {
if(cljs.core.truth_(manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1))){
return null;
} else {
try{self__.add_BANG_.call(null);
}catch (e23418){if((e23418 instanceof Error)){
var e_23422 = e23418;
manifold_cljs.impl.logging.error.call(null,e_23422,"error in stream transformer");
} else {
throw e23418;

}
}
while(true){
var temp__5457__auto___23423 = manifold_cljs.impl.queue.poll.call(null,self__.consumers);
if(cljs.core.truth_(temp__5457__auto___23423)){
var c_23424 = temp__5457__auto___23423;
try{manifold_cljs.deferred.success_BANG_.call(null,c_23424.deferred,c_23424.default_val);
}catch (e23419){if((e23419 instanceof Error)){
var e_23425 = e23419;
manifold_cljs.impl.logging.error.call(null,e_23425,"error in callback");
} else {
throw e23419;

}
}
continue;
} else {
}
break;
}

manifold_cljs.stream.core.markClosed.call(null,this$__$1);

if(cljs.core.truth_(manifold_cljs.stream.core.drained_QMARK_.call(null,this$__$1))){
return manifold_cljs.stream.core.markDrained.call(null,this$__$1);
} else {
return null;
}
}
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var m = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pending-puts","pending-puts",1356605506),new cljs.core.Keyword(null,"drained?","drained?",-1635967677),new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),new cljs.core.Keyword(null,"permanent?","permanent?",-1339743927),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sink?","sink?",-1912805684),new cljs.core.Keyword(null,"closed?","closed?",-1408769040),new cljs.core.Keyword(null,"pending-takes","pending-takes",-90921390),new cljs.core.Keyword(null,"buffer-capacity","buffer-capacity",-1317571303),new cljs.core.Keyword(null,"source?","source?",1313100031)],[manifold_cljs.impl.queue.size.call(null,self__.producers),manifold_cljs.stream.core.drained_QMARK_.call(null,this$__$1),(cljs.core.truth_(self__.messages)?manifold_cljs.impl.queue.size.call(null,self__.messages):(0)),self__.permanent_QMARK_,"manifold",true,manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1),manifold_cljs.impl.queue.size.call(null,self__.consumers),self__.capacity,true]);
if(cljs.core.truth_(self__.description)){
return self__.description.call(null,m);
} else {
return m;
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 = (function (this__22526__auto__){
var self__ = this;
var this__22526__auto____$1 = this;
return self__.__isClosed;
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 = (function (this__22526__auto__,callback__22527__auto__){
var self__ = this;
var this__22526__auto____$1 = this;
if(cljs.core.truth_(self__.__isClosed)){
return callback__22527__auto__.call(null);
} else {
return self__.__closedCallbacks.push(callback__22527__auto__);
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$markClosed$arity$1 = (function (this__22526__auto__){
var self__ = this;
var this__22526__auto____$1 = this;
self__.__isClosed = true;

return manifold_cljs.utils.invoke_callbacks.call(null,self__.__closedCallbacks);
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$5 = (function (this$,msg,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking operations not supported!","\n","(not blocking?)"].join('')));
}

var acc = manifold_cljs.impl.queue.queue.call(null);
var result = (function (){try{if(cljs.core.truth_(manifold_cljs.stream.core.isClosed.call(null,this$__$1))){
return false;
} else {
return self__.add_BANG_.call(null,acc,msg);
}
}catch (e23420){if((e23420 instanceof Error)){
var e = e23420;
manifold_cljs.impl.logging.error.call(null,e,"error in stream transformer");

return false;
} else {
throw e23420;

}
}})();
var close_QMARK_ = cljs.core.reduced_QMARK_.call(null,result);
var result__$1 = ((close_QMARK_)?cljs.core.deref.call(null,result):result);
var val = (function (){var val = true;
while(true){
if(cljs.core.truth_(manifold_cljs.impl.queue.empty_QMARK_.call(null,acc))){
return val;
} else {
var x = manifold_cljs.impl.queue.pop.call(null,acc);
if((x instanceof manifold_cljs.stream.default_impl.Producer)){
manifold_cljs.impl.logging.warn.call(null,"excessive pending puts (> 16384), closing stream");

manifold_cljs.stream.core.close_BANG_.call(null,this$__$1);

return false;
} else {
if((x instanceof manifold_cljs.stream.default_impl.Production)){
var p = x;
manifold_cljs.deferred.success_BANG_.call(null,p.deferred,p.message,p.token);

var G__23426 = true;
val = G__23426;
continue;
} else {
manifold_cljs.deferred.timeout_BANG_.call(null,x,timeout,timeout_val);

var G__23427 = x;
val = G__23427;
continue;

}
}
}
break;
}
})();
if(((close_QMARK_) || (result__$1 === false))){
manifold_cljs.stream.core.close.call(null,this$__$1);

return manifold_cljs.deferred.success_deferred.call(null,false,self__.executor);
} else {
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,val))){
return val;
} else {
return manifold_cljs.deferred.success_deferred.call(null,val,self__.executor);

}
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$3 = (function (this$,msg,blocking_QMARK_){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.stream.core.put.call(null,this$__$1,msg,blocking_QMARK_,null,null);
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var and__3911__auto__ = manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = manifold_cljs.impl.queue.empty_QMARK_.call(null,self__.producers);
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (self__.messages == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return manifold_cljs.impl.queue.empty_QMARK_.call(null,self__.messages);
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 = (function (this__22528__auto__,callback__22529__auto__){
var self__ = this;
var this__22528__auto____$1 = this;
if(cljs.core.truth_(self__.__isDrained)){
return callback__22529__auto__.call(null);
} else {
return self__.__drainedCallbacks.push(callback__22529__auto__);
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$markDrained$arity$1 = (function (this__22528__auto__){
var self__ = this;
var this__22528__auto____$1 = this;
self__.__isDrained = true;

return manifold_cljs.utils.invoke_callbacks.call(null,self__.__drainedCallbacks);
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$connector$arity$2 = (function (this__22528__auto__,___22530__auto__){
var self__ = this;
var this__22528__auto____$1 = this;
return null;
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$5 = (function (this$,default_val,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking operations not supported!","\n","(not blocking?)"].join('')));
}

var result = (function (){var or__3922__auto__ = (function (){var temp__5457__auto__ = (function (){var and__3911__auto__ = self__.messages;
if(cljs.core.truth_(and__3911__auto__)){
return manifold_cljs.impl.queue.poll.call(null,self__.messages);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
if(cljs.core.truth_((function (){var and__3911__auto__ = manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__3911__auto__)){
return manifold_cljs.stream.core.drained_QMARK_.call(null,this$__$1);
} else {
return and__3911__auto__;
}
})())){
manifold_cljs.stream.core.markDrained.call(null,this$__$1);
} else {
}

var temp__5455__auto__ = manifold_cljs.impl.queue.poll.call(null,self__.producers);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
var temp__5455__auto____$1 = manifold_cljs.deferred.claim_BANG_.call(null,p.deferred);
if(cljs.core.truth_(temp__5455__auto____$1)){
var token = temp__5455__auto____$1;
manifold_cljs.impl.queue.offer.call(null,self__.messages,p.message);

return (new manifold_cljs.stream.default_impl.Consumption(msg,p.deferred,token));
} else {
return manifold_cljs.deferred.success_deferred.call(null,msg,self__.executor);
}
} else {
return manifold_cljs.deferred.success_deferred.call(null,msg,self__.executor);
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var p = manifold_cljs.impl.queue.poll.call(null,self__.producers);
while(true){
if(cljs.core.truth_(p)){
var temp__5455__auto__ = manifold_cljs.deferred.claim_BANG_.call(null,p.deferred);
if(cljs.core.truth_(temp__5455__auto__)){
var token = temp__5455__auto__;
var c = (new manifold_cljs.stream.default_impl.Consumption(p.message,p.deferred,token));
if(cljs.core.truth_((function (){var and__3911__auto__ = manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__3911__auto__)){
return manifold_cljs.stream.core.drained_QMARK_.call(null,this$__$1);
} else {
return and__3911__auto__;
}
})())){
manifold_cljs.stream.core.markDrained.call(null,this$__$1);
} else {
}

return c;
} else {
var G__23428 = manifold_cljs.impl.queue.poll.call(null,self__.producers);
p = G__23428;
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = (function (){var and__3911__auto__ = manifold_cljs.stream.core.closed_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__3911__auto__)){
return manifold_cljs.deferred.success_deferred.call(null,default_val,self__.executor);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = timeout;
if(cljs.core.truth_(and__3911__auto__)){
return (timeout <= (0));
} else {
return and__3911__auto__;
}
})())){
return manifold_cljs.deferred.success_deferred.call(null,timeout_val,self__.executor);
} else {
var d = manifold_cljs.deferred.deferred.call(null,self__.executor);
manifold_cljs.deferred.timeout_BANG_.call(null,d,timeout,timeout_val);

var c = (new manifold_cljs.stream.default_impl.Consumer(d,default_val));
if(cljs.core.truth_((function (){var and__3911__auto__ = (manifold_cljs.impl.queue.size.call(null,self__.consumers) < (16384));
if(and__3911__auto__){
return manifold_cljs.impl.queue.offer.call(null,self__.consumers,c);
} else {
return and__3911__auto__;
}
})())){
return d;
} else {
return c;
}
}
}
}
}
})();
if((result instanceof manifold_cljs.stream.default_impl.Consumer)){
manifold_cljs.impl.logging.warn.call(null,"excessive pending takes (> 16384), closing stream");

manifold_cljs.stream.core.close_BANG_.call(null,this$__$1);

return manifold_cljs.deferred.success_deferred.call(null,false,self__.executor);
} else {
if((result instanceof manifold_cljs.stream.default_impl.Consumption)){
var result__$1 = result;
try{manifold_cljs.deferred.success_BANG_.call(null,result__$1.deferred,true,result__$1.token);
}catch (e23421){if((e23421 instanceof Error)){
var e_23429 = e23421;
manifold_cljs.impl.logging.error.call(null,e_23429,"error in callback");
} else {
throw e23421;

}
}
var msg = result__$1.message;
return manifold_cljs.deferred.success_deferred.call(null,msg,self__.executor);
} else {
return result;

}
}
});

manifold_cljs.stream.default_impl.Stream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$3 = (function (this$,default_val,blocking_QMARK_){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.stream.core.take.call(null,this$__$1,default_val,blocking_QMARK_,null,null);
});

manifold_cljs.stream.default_impl.Stream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"permanent?","permanent?",300787600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"producers","producers",982166815,null),new cljs.core.Symbol(null,"consumers","consumers",1911148280,null),new cljs.core.Symbol(null,"capacity","capacity",1713221261,null),new cljs.core.Symbol(null,"messages","messages",1985966009,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"add!","add!",2046056845,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__isDrained","__isDrained",936831003,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"__drainedCallbacks","__drainedCallbacks",-1356008764,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__isClosed","__isClosed",-1600792678,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"__closedCallbacks","__closedCallbacks",224531125,null)], null);
});

manifold_cljs.stream.default_impl.Stream.cljs$lang$type = true;

manifold_cljs.stream.default_impl.Stream.cljs$lang$ctorStr = "manifold-cljs.stream.default-impl/Stream";

manifold_cljs.stream.default_impl.Stream.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.default-impl/Stream");
});

/**
 * Positional factory function for manifold-cljs.stream.default-impl/Stream.
 */
manifold_cljs.stream.default_impl.__GT_Stream = (function manifold_cljs$stream$default_impl$__GT_Stream(permanent_QMARK_,description,producers,consumers,capacity,messages,executor,add_BANG_,__isDrained,__drainedCallbacks,__isClosed,__closedCallbacks){
return (new manifold_cljs.stream.default_impl.Stream(permanent_QMARK_,description,producers,consumers,capacity,messages,executor,add_BANG_,__isDrained,__drainedCallbacks,__isClosed,__closedCallbacks));
});


manifold_cljs.stream.default_impl.__GT_Stream = (function manifold_cljs$stream$default_impl$__GT_Stream(permanent_QMARK_,description,producers,consumers,capacity,messages,executor,add_BANG_){
return (new manifold_cljs.stream.default_impl.Stream(permanent_QMARK_,description,producers,consumers,capacity,messages,executor,add_BANG_,false,manifold_cljs.impl.queue.queue.call(null),false,manifold_cljs.impl.queue.queue.call(null)));
});
manifold_cljs.stream.default_impl.add_BANG_ = (function manifold_cljs$stream$default_impl$add_BANG_(producers,consumers,messages,capacity,executor){
var capacity__$1 = cljs.core.long$.call(null,capacity);
var t_d = manifold_cljs.deferred.success_deferred.call(null,true,executor);
return ((function (capacity__$1,t_d){
return (function() {
var G__23431 = null;
var G__23431__0 = (function (){
return null;
});
var G__23431__1 = (function (_){
return manifold_cljs.deferred.success_deferred.call(null,false,executor);
});
var G__23431__2 = (function (acc,msg){
var G__23430 = acc;
manifold_cljs.impl.queue.offer.call(null,G__23430,(function (){var or__3922__auto__ = (function (){var c = manifold_cljs.impl.queue.poll.call(null,consumers);
while(true){
if(cljs.core.truth_(c)){
var temp__5455__auto__ = manifold_cljs.deferred.claim_BANG_.call(null,c.deferred);
if(cljs.core.truth_(temp__5455__auto__)){
var token = temp__5455__auto__;
return (new manifold_cljs.stream.default_impl.Production(c.deferred,msg,token));
} else {
var G__23432 = manifold_cljs.impl.queue.poll.call(null,consumers);
c = G__23432;
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = messages;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = (((manifold_cljs.impl.queue.size.call(null,messages) < capacity__$1))?manifold_cljs.impl.queue.offer.call(null,messages,msg):null);
if(cljs.core.truth_(and__3911__auto____$1)){
return t_d;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var d = manifold_cljs.deferred.deferred.call(null,executor);
var pr = (new manifold_cljs.stream.default_impl.Producer(msg,d));
if(cljs.core.truth_((function (){var and__3911__auto__ = (manifold_cljs.impl.queue.size.call(null,producers) < (16384));
if(and__3911__auto__){
return manifold_cljs.impl.queue.offer.call(null,producers,pr);
} else {
return and__3911__auto__;
}
})())){
return d;
} else {
return pr;
}
}
}
})());

return G__23430;
});
G__23431 = function(acc,msg){
switch(arguments.length){
case 0:
return G__23431__0.call(this);
case 1:
return G__23431__1.call(this,acc);
case 2:
return G__23431__2.call(this,acc,msg);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23431.cljs$core$IFn$_invoke$arity$0 = G__23431__0;
G__23431.cljs$core$IFn$_invoke$arity$1 = G__23431__1;
G__23431.cljs$core$IFn$_invoke$arity$2 = G__23431__2;
return G__23431;
})()
;})(capacity__$1,t_d))
});
manifold_cljs.stream.default_impl.stream = (function manifold_cljs$stream$default_impl$stream(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 0:
return manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return manifold_cljs.stream.default_impl.stream.call(null,(0),null,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$1 = (function (buffer_size){
return manifold_cljs.stream.default_impl.stream.call(null,buffer_size,null,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$2 = (function (buffer_size,xform){
return manifold_cljs.stream.default_impl.stream.call(null,buffer_size,xform,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.stream.default_impl.stream.cljs$core$IFn$_invoke$arity$3 = (function (buffer_size,xform,executor){
var consumers = manifold_cljs.impl.queue.queue.call(null);
var producers = manifold_cljs.impl.queue.queue.call(null);
var buffer_size__$1 = cljs.core.long$.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = cljs.core.long$.call(null,buffer_size);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
var messages = (((buffer_size__$1 > (0)))?manifold_cljs.impl.queue.queue.call(null):null);
var add_BANG_ = manifold_cljs.stream.default_impl.add_BANG_.call(null,producers,consumers,messages,buffer_size__$1,executor);
var add_BANG___$1 = (cljs.core.truth_(xform)?xform.call(null,add_BANG_):add_BANG_);
return manifold_cljs.stream.default_impl.__GT_Stream.call(null,false,null,producers,consumers,buffer_size__$1,messages,executor,add_BANG___$1);
});

manifold_cljs.stream.default_impl.stream.cljs$lang$maxFixedArity = 3;

manifold_cljs.stream.default_impl.stream_STAR_ = (function manifold_cljs$stream$default_impl$stream_STAR_(p__23436){
var map__23437 = p__23436;
var map__23437__$1 = ((((!((map__23437 == null)))?(((((map__23437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23437):map__23437);
var permanent_QMARK_ = cljs.core.get.call(null,map__23437__$1,new cljs.core.Keyword(null,"permanent?","permanent?",-1339743927),false);
var buffer_size = cljs.core.get.call(null,map__23437__$1,new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420));
var description = cljs.core.get.call(null,map__23437__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var executor = cljs.core.get.call(null,map__23437__$1,new cljs.core.Keyword(null,"executor","executor",1197215162),manifold_cljs.executor.executor.call(null));
var xform = cljs.core.get.call(null,map__23437__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
var consumers = manifold_cljs.impl.queue.queue.call(null);
var producers = manifold_cljs.impl.queue.queue.call(null);
var buffer_size__$1 = cljs.core.long$.call(null,(function (){var or__3922__auto__ = buffer_size;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})());
var messages = (cljs.core.truth_(buffer_size__$1)?manifold_cljs.impl.queue.queue.call(null):null);
var buffer_size__$2 = (cljs.core.truth_(buffer_size__$1)?cljs.core.long$.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = buffer_size__$1;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()):(0));
var add_BANG_ = manifold_cljs.stream.default_impl.add_BANG_.call(null,producers,consumers,messages,buffer_size__$2,executor);
var add_BANG___$1 = (cljs.core.truth_(xform)?xform.call(null,add_BANG_):add_BANG_);
return manifold_cljs.stream.default_impl.__GT_Stream.call(null,permanent_QMARK_,description,producers,consumers,buffer_size__$2,messages,executor,add_BANG___$1);
});

//# sourceMappingURL=default_impl.js.map?rel=1557582876081
