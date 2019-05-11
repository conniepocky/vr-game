// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.stream');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('manifold_cljs.stream.core');
goog.require('manifold_cljs.stream.default_impl');
goog.require('manifold_cljs.stream.graph');
goog.require('manifold_cljs.time');
goog.require('manifold_cljs.utils');
goog.require('manifold_cljs.deferred');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.impl.logging');
goog.require('manifold_cljs.stream.seq');
manifold_cljs.stream.sinkable_QMARK_ = (function manifold_cljs$stream$sinkable_QMARK_(x){
var or__3922__auto__ = ((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSink$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x):false)):cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x));
if(or__3922__auto__){
return or__3922__auto__;
} else {
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$Sinkable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.Sinkable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.Sinkable,x);
}
}
});
manifold_cljs.stream.sourceable_QMARK_ = (function manifold_cljs$stream$sourceable_QMARK_(x){
var or__3922__auto__ = ((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSource$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x):false)):cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x));
if(or__3922__auto__){
return or__3922__auto__;
} else {
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$Sourceable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.Sourceable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.Sourceable,x);
}
}
});
/**
 * Converts, if possible, the object to a Manifold sink, or `default-val` if it cannot.  If no
 * default value is given, an exception is thrown.
 */
manifold_cljs.stream.__GT_sink = (function manifold_cljs$stream$__GT_sink(var_args){
var G__23661 = arguments.length;
switch (G__23661) {
case 1:
return manifold_cljs.stream.__GT_sink.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.__GT_sink.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.__GT_sink.cljs$core$IFn$_invoke$arity$1 = (function (x){
var x_SINGLEQUOTE_ = manifold_cljs.stream.__GT_sink.call(null,x,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),x_SINGLEQUOTE_)){
throw (new Error(["cannot convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," to sink"].join('')));
} else {
return x_SINGLEQUOTE_;
}
});

manifold_cljs.stream.__GT_sink.cljs$core$IFn$_invoke$arity$2 = (function (x,default_val){
if(((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSink$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x):false)):cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x))){
return x;
} else {
if(cljs.core.truth_(manifold_cljs.stream.sinkable_QMARK_.call(null,x))){
return manifold_cljs.stream.core.to_sink.call(null,x);
} else {
return default_val;

}
}
});

manifold_cljs.stream.__GT_sink.cljs$lang$maxFixedArity = 2;

/**
 * Converts, if possible, the object to a Manifold source, or `default-val` if it cannot.  If no
 * default value is given, an exception is thrown.
 */
manifold_cljs.stream.__GT_source = (function manifold_cljs$stream$__GT_source(var_args){
var G__23665 = arguments.length;
switch (G__23665) {
case 1:
return manifold_cljs.stream.__GT_source.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.__GT_source.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.__GT_source.cljs$core$IFn$_invoke$arity$1 = (function (x){
var x_SINGLEQUOTE_ = manifold_cljs.stream.__GT_source.call(null,x,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),x_SINGLEQUOTE_)){
throw (new Error(["cannot convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," to source"].join('')));
} else {
return x_SINGLEQUOTE_;
}
});

manifold_cljs.stream.__GT_source.cljs$core$IFn$_invoke$arity$2 = (function (x,default_val){
if(((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSource$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x):false)):cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x))){
return x;
} else {
if(cljs.core.truth_(manifold_cljs.stream.sourceable_QMARK_.call(null,x))){
return manifold_cljs.stream.core.to_source.call(null,x);
} else {
if(cljs.core.truth_(manifold_cljs.stream.seq.seq_source_QMARK_.call(null,x))){
return manifold_cljs.stream.seq.to_source.call(null,x);
} else {
return default_val;

}
}
}
});

manifold_cljs.stream.__GT_source.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSink}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.SinkProxy = (function (sink){
this.sink = sink;
});
manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.description.call(null,self__.sink);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isSynchronous.call(null,self__.sink);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.downstream.call(null,self__.sink);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.close.call(null,self__.sink);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (_,ref_queue){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.weakHandle.call(null,self__.sink,ref_queue);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventSink$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventSink$put$arity$3 = (function (_,x,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.put.call(null,self__.sink,x,blocking_QMARK_);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventSink$put$arity$5 = (function (_,x,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.put.call(null,self__.sink,x,blocking_QMARK_,timeout,timeout_val);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isClosed.call(null,self__.sink);
});

manifold_cljs.stream.SinkProxy.prototype.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onClosed.call(null,self__.sink,callback);
});

manifold_cljs.stream.SinkProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sink","sink",1827367460,null)], null);
});

manifold_cljs.stream.SinkProxy.cljs$lang$type = true;

manifold_cljs.stream.SinkProxy.cljs$lang$ctorStr = "manifold-cljs.stream/SinkProxy";

manifold_cljs.stream.SinkProxy.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream/SinkProxy");
});

/**
 * Positional factory function for manifold-cljs.stream/SinkProxy.
 */
manifold_cljs.stream.__GT_SinkProxy = (function manifold_cljs$stream$__GT_SinkProxy(sink){
return (new manifold_cljs.stream.SinkProxy(sink));
});


/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSource}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.SourceProxy = (function (source){
this.source = source;
});
manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.description.call(null,self__.source);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isSynchronous.call(null,self__.source);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.downstream.call(null,self__.source);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.close.call(null,self__.source);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (_,ref_queue){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.weakHandle.call(null,self__.source,ref_queue);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$take$arity$3 = (function (_,default_val,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.take.call(null,self__.source,default_val,blocking_QMARK_);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$take$arity$5 = (function (_,default_val,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.take.call(null,self__.source,default_val,blocking_QMARK_,timeout,timeout_val);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isDrained.call(null,self__.source);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onDrained.call(null,self__.source,callback);
});

manifold_cljs.stream.SourceProxy.prototype.manifold_cljs$stream$core$IEventSource$connector$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (___$2,sink__$1,options){
return manifold_cljs.stream.connect.call(null,self__.source,sink__$1,options);
});
;})(___$1))
});

manifold_cljs.stream.SourceProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null)], null);
});

manifold_cljs.stream.SourceProxy.cljs$lang$type = true;

manifold_cljs.stream.SourceProxy.cljs$lang$ctorStr = "manifold-cljs.stream/SourceProxy";

manifold_cljs.stream.SourceProxy.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream/SourceProxy");
});

/**
 * Positional factory function for manifold-cljs.stream/SourceProxy.
 */
manifold_cljs.stream.__GT_SourceProxy = (function manifold_cljs$stream$__GT_SourceProxy(source){
return (new manifold_cljs.stream.SourceProxy(source));
});

/**
 * Returns a view of the stream which is only a source.
 */
manifold_cljs.stream.source_only = (function manifold_cljs$stream$source_only(s){
return (new manifold_cljs.stream.SourceProxy(s));
});
/**
 * Returns a view of the stream which is only a sink.
 */
manifold_cljs.stream.sink_only = (function manifold_cljs$stream$sink_only(s){
return (new manifold_cljs.stream.SinkProxy(s));
});
/**
 * Returns true if the object is a Manifold stream.
 */
manifold_cljs.stream.stream_QMARK_ = (function manifold_cljs$stream$stream_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventStream$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventStream,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventStream,x);
}
});
/**
 * Returns true if the object is a Manifold source.
 */
manifold_cljs.stream.source_QMARK_ = (function manifold_cljs$stream$source_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSource$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSource,x);
}
});
/**
 * Returns true if the object is a Manifold sink.
 */
manifold_cljs.stream.sink_QMARK_ = (function manifold_cljs$stream$sink_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$stream$core$IEventSink$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,x);
}
});
/**
 * Returns a description of the stream.
 */
manifold_cljs.stream.description = (function manifold_cljs$stream$description(x){
return manifold_cljs.stream.core.description.call(null,x);
});
/**
 * Returns all sinks downstream of the given source as a sequence of 2-tuples, with the
 * first element containing the connection's description, and the second element containing
 * the sink.
 */
manifold_cljs.stream.downstream = (function manifold_cljs$stream$downstream(x){
return manifold_cljs.stream.core.downstream.call(null,x);
});
/**
 * Returns a weak reference that can be used to construct topologies of streams.
 */
manifold_cljs.stream.weak_handle = (function manifold_cljs$stream$weak_handle(x){
return manifold_cljs.stream.core.weakHandle.call(null,x,null);
});
/**
 * Returns true if the underlying abstraction behaves synchronously, using thread blocking
 * to provide backpressure.
 */
manifold_cljs.stream.synchronous_QMARK_ = (function manifold_cljs$stream$synchronous_QMARK_(x){
return manifold_cljs.stream.core.isSynchronous.call(null,x);
});
/**
 * Closes a source or sink, so that it can't emit or accept any more messages.
 */
manifold_cljs.stream.close_BANG_ = (function manifold_cljs$stream$close_BANG_(sink){
return manifold_cljs.stream.core.close.call(null,sink);
});
/**
 * Returns true if the event sink is closed.
 */
manifold_cljs.stream.closed_QMARK_ = (function manifold_cljs$stream$closed_QMARK_(sink){
return manifold_cljs.stream.core.isClosed.call(null,sink);
});
/**
 * Registers a no-arg callback which is invoked when the sink is closed.
 */
manifold_cljs.stream.on_closed = (function manifold_cljs$stream$on_closed(sink,callback){
return manifold_cljs.stream.core.onClosed.call(null,sink,callback);
});
/**
 * Returns true if the event source is drained.
 */
manifold_cljs.stream.drained_QMARK_ = (function manifold_cljs$stream$drained_QMARK_(source){
return manifold_cljs.stream.core.isDrained.call(null,source);
});
/**
 * Registers a no-arg callback which is invoked when the source is drained.
 */
manifold_cljs.stream.on_drained = (function manifold_cljs$stream$on_drained(source,callback){
return manifold_cljs.stream.core.onDrained.call(null,source,callback);
});
/**
 * Puts a value into a sink, returning a deferred that yields `true` if it succeeds,
 * and `false` if it fails.  Guaranteed to be non-blocking.
 */
manifold_cljs.stream.put_BANG_ = (function manifold_cljs$stream$put_BANG_(sink,x){
return manifold_cljs.stream.core.put.call(null,sink,x,false);
});
/**
 * Puts all values into the sink, returning a deferred that yields `true` if all puts
 * are successful, or `false` otherwise.  If the sink provides backpressure, will
 * pause. Guaranteed to be non-blocking.
 */
manifold_cljs.stream.put_all_BANG_ = (function manifold_cljs$stream$put_all_BANG_(sink,msgs){
var result__22143__auto__ = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto__){
return (function manifold_cljs$stream$put_all_BANG__$_this__22144__auto__(result__22143__auto____$1,var23673){
var msgs__$1 = var23673;
while(true){
var x23671 = (function (){try{if(cljs.core.empty_QMARK_.call(null,msgs__$1)){
return true;
} else {
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,sink,cljs.core.first.call(null,msgs__$1)),((function (msgs__$1,result__22143__auto__){
return (function (result){
if(cljs.core.truth_(result)){
return manifold_cljs.deferred.recur.call(null,cljs.core.rest.call(null,msgs__$1));
} else {
return false;
}
});})(msgs__$1,result__22143__auto__))
);
}
}catch (e23674){if((e23674 instanceof Error)){
var e__22145__auto__ = e23674;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23674;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23671))){
var d__22137__auto__ = x23671;
var val23672 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23672)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23671),((function (msgs__$1,err__22146__auto__,d__22137__auto__,val23672,x23671,result__22143__auto__){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$put_all_BANG__$_this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(msgs__$1,err__22146__auto__,d__22137__auto__,val23672,x23671,result__22143__auto__))
,((function (msgs__$1,err__22146__auto__,d__22137__auto__,val23672,x23671,result__22143__auto__){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(msgs__$1,err__22146__auto__,d__22137__auto__,val23672,x23671,result__22143__auto__))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23672 instanceof manifold_cljs.deferred.Recur)){
var val23672__$1 = cljs.core.deref.call(null,val23672);
var G__23675 = cljs.core.nth.call(null,val23672__$1,(0));
msgs__$1 = G__23675;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23672);
}
}
} else {
if((x23671 instanceof manifold_cljs.deferred.Recur)){
var G__23676 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23671),(0));
msgs__$1 = G__23676;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23671);

}
}
break;
}
});})(result__22143__auto__))
.call(null,result__22143__auto__,msgs);

return result__22143__auto__;
});
/**
 * Puts a value into a stream if the put can successfully be completed in `timeout`
 * milliseconds.  Returns a promiise that yields `true` if it succeeds, and `false`
 * if it fails or times out.  Guaranteed to be non-blocking.
 * 
 * A special `timeout-val` may be specified, if it is important to differentiate
 * between failure due to timeout and other failures.
 */
manifold_cljs.stream.try_put_BANG_ = (function manifold_cljs$stream$try_put_BANG_(var_args){
var G__23678 = arguments.length;
switch (G__23678) {
case 3:
return manifold_cljs.stream.try_put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return manifold_cljs.stream.try_put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.try_put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sink,x,timeout){
return manifold_cljs.stream.core.put.call(null,sink,x,false,timeout,false);
});

manifold_cljs.stream.try_put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sink,x,timeout,timeout_val){
return manifold_cljs.stream.core.put.call(null,sink,x,false,timeout,timeout_val);
});

manifold_cljs.stream.try_put_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Takes a value from a stream, returning a deferred that yields the value when it
 * is available, or `nil` if the take fails.  Guaranteed to be non-blocking.
 * 
 * A special `default-val` may be specified, if it is important to differentiate
 * between actual `nil` values and failures.
 */
manifold_cljs.stream.take_BANG_ = (function manifold_cljs$stream$take_BANG_(var_args){
var G__23681 = arguments.length;
switch (G__23681) {
case 1:
return manifold_cljs.stream.take_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.take_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (source){
return manifold_cljs.stream.core.take.call(null,source,null,false);
});

manifold_cljs.stream.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (source,default_val){
return manifold_cljs.stream.core.take.call(null,source,default_val,false);
});

manifold_cljs.stream.take_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Takes a value from a stream, returning a deferred that yields the value if it is
 * available within `timeout` milliseconds, or `nil` if it fails or times out.
 * Guaranteed to be non-blocking.
 * 
 * Special `timeout-val` and `default-val` values may be specified, if it is
 * important to differentiate between actual `nil` values and failures.
 */
manifold_cljs.stream.try_take_BANG_ = (function manifold_cljs$stream$try_take_BANG_(var_args){
var G__23684 = arguments.length;
switch (G__23684) {
case 2:
return manifold_cljs.stream.try_take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return manifold_cljs.stream.try_take_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.try_take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (source,timeout){
return manifold_cljs.stream.core.take.call(null,source,null,false,timeout,null);
});

manifold_cljs.stream.try_take_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (source,default_val,timeout,timeout_val){
return manifold_cljs.stream.core.take.call(null,source,default_val,false,timeout,timeout_val);
});

manifold_cljs.stream.try_take_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Connects a source to a sink, propagating all messages from the former into the latter.
 * 
 * Optionally takes a map of parameters:
 * 
 * |:---|:---
 * | `upstream?` | if closing the sink should always close the source, even if there are other sinks downstream of the source.  Defaults to `false`.  Note that if the sink is the only thing downstream of the source, the source will always be closed, unless it is permanent.
 * | `downstream?` | if closing the source will close the sink.  Defaults to `true`.
 * | `timeout` | if defined, the maximum time, in milliseconds, that will be spent trying to put a message into the sink before closing it.  Useful when there are multiple sinks downstream of a source, and you want to avoid a single backed up sink from blocking all the others.
 * | `description` | describes the connection, useful for traversing the stream topology via `downstream`.
 */
manifold_cljs.stream.connect = (function manifold_cljs$stream$connect(var_args){
var G__23687 = arguments.length;
switch (G__23687) {
case 2:
return manifold_cljs.stream.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.connect.cljs$core$IFn$_invoke$arity$2 = (function (source,sink){
return manifold_cljs.stream.connect.call(null,source,sink,null);
});

manifold_cljs.stream.connect.cljs$core$IFn$_invoke$arity$3 = (function (source,sink,options){
var source__$1 = manifold_cljs.stream.__GT_source.call(null,source);
var sink__$1 = manifold_cljs.stream.__GT_sink.call(null,sink);
var connector = manifold_cljs.stream.core.connector.call(null,source__$1,sink__$1);
if(cljs.core.truth_(connector)){
connector.call(null,source__$1,sink__$1,options);
} else {
manifold_cljs.stream.graph.connect.call(null,source__$1,sink__$1,options);
}

return null;
});

manifold_cljs.stream.connect.cljs$lang$maxFixedArity = 3;

/**
 * Returns a Manifold stream with a configurable `buffer-size`.  If a capacity is specified,
 * `put!` will yield `true` when the message is in the buffer.  Otherwise it will only yield
 * `true` once it has been consumed.
 * 
 * `xform` is an optional transducer, which will transform all messages that are enqueued
 * via `put!` before they are dequeued via `take!`.
 * 
 * `executor`, if defined, specifies which java.util.concurrent.Executor will be used to
 * handle the deferreds returned by `put!` and `take!`.
 */
manifold_cljs.stream.stream = (function manifold_cljs$stream$stream(var_args){
var G__23690 = arguments.length;
switch (G__23690) {
case 0:
return manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return manifold_cljs.stream.default_impl.stream.call(null);
});

manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$1 = (function (buffer_size){
return manifold_cljs.stream.default_impl.stream.call(null,buffer_size);
});

manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$2 = (function (buffer_size,xform){
return manifold_cljs.stream.default_impl.stream.call(null,buffer_size,xform);
});

manifold_cljs.stream.stream.cljs$core$IFn$_invoke$arity$3 = (function (buffer_size,xform,executor){
return manifold_cljs.stream.default_impl.stream.call(null,buffer_size,xform,executor);
});

manifold_cljs.stream.stream.cljs$lang$maxFixedArity = 3;

/**
 * An alternate way to build a stream, via a map of parameters.
 * 
 * |:---|:---
 * | `permanent?` | if `true`, the channel cannot be closed
 * | `buffer-size` | the number of messages that can accumulate in the channel before backpressure is applied
 * | `description` | the description of the channel, which is a single arg function that takes the base properties and returns an enriched map.
 * | `executor` | the `manifold-cljs.executor/Executor` that will execute all callbacks registered on the deferreds returns by `put!` and `take!`
 * | `xform` | a transducer which will transform all messages that are enqueued via `put!` before they are dequeued via `take!`.
 */
manifold_cljs.stream.stream_STAR_ = (function manifold_cljs$stream$stream_STAR_(options){
return manifold_cljs.stream.default_impl.stream_STAR_.call(null,options);
});

/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSource}
 * @implements {manifold_cljs.stream.core.IEventSink}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.SplicedStream = (function (sink,source){
this.sink = sink;
this.source = source;
});
manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3922__auto__ = manifold_cljs.stream.synchronous_QMARK_.call(null,self__.sink);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.stream.synchronous_QMARK_.call(null,self__.source);
}
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"splice",new cljs.core.Keyword(null,"sink","sink",186835933),manifold_cljs.stream.core.description.call(null,self__.sink),new cljs.core.Keyword(null,"source","source",-433931539),manifold_cljs.stream.core.description.call(null,self__.source)], null);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.downstream.call(null,self__.source);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
manifold_cljs.stream.core.close.call(null,self__.source);

return manifold_cljs.stream.core.close.call(null,self__.sink);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (_,ref_queue){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.weakHandle.call(null,self__.source,ref_queue);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSink$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$3 = (function (_,x,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.put.call(null,self__.sink,x,blocking_QMARK_);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$5 = (function (_,x,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.put.call(null,self__.sink,x,blocking_QMARK_,timeout,timeout_val);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isClosed.call(null,self__.sink);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onClosed.call(null,self__.sink,callback);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$3 = (function (_,default_val,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.take.call(null,self__.source,default_val,blocking_QMARK_);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$5 = (function (_,default_val,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.take.call(null,self__.source,default_val,blocking_QMARK_,timeout,timeout_val);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isDrained.call(null,self__.source);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onDrained.call(null,self__.source,callback);
});

manifold_cljs.stream.SplicedStream.prototype.manifold_cljs$stream$core$IEventSource$connector$arity$2 = (function (_,sink__$1){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.connector.call(null,self__.source,sink__$1);
});

manifold_cljs.stream.SplicedStream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sink","sink",1827367460,null),new cljs.core.Symbol(null,"source","source",1206599988,null)], null);
});

manifold_cljs.stream.SplicedStream.cljs$lang$type = true;

manifold_cljs.stream.SplicedStream.cljs$lang$ctorStr = "manifold-cljs.stream/SplicedStream";

manifold_cljs.stream.SplicedStream.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream/SplicedStream");
});

/**
 * Positional factory function for manifold-cljs.stream/SplicedStream.
 */
manifold_cljs.stream.__GT_SplicedStream = (function manifold_cljs$stream$__GT_SplicedStream(sink,source){
return (new manifold_cljs.stream.SplicedStream(sink,source));
});

/**
 * Splices together two halves of a stream, such that all messages enqueued via `put!` go
 * into `sink`, and all messages dequeued via `take!` come from `source`.
 */
manifold_cljs.stream.splice = (function manifold_cljs$stream$splice(sink,source){
return (new manifold_cljs.stream.SplicedStream(manifold_cljs.stream.__GT_sink.call(null,sink),manifold_cljs.stream.__GT_source.call(null,source)));
});

/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSink}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.Callback = (function (f,close_callback,downstream,constant_response){
this.f = f;
this.close_callback = close_callback;
this.downstream = downstream;
this.constant_response = constant_response;
});
manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.close_callback)){
return manifold_cljs.executor.execute_on_next_tick.call(null,self__.close_callback);
} else {
return null;
}
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (_,ref_queue){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.downstream)){
return manifold_cljs.stream.core.weakHandle.call(null,self__.downstream,ref_queue);
} else {
throw (new Error("No downstream!"));
}
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"callback"], null);
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.downstream)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manifold_cljs.stream.description.call(null,self__.downstream),self__.downstream], null)], null);
} else {
return null;
}
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventSink$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventSink$put$arity$3 = (function (this$,x,_){
var self__ = this;
var this$__$1 = this;
try{var rsp = self__.f.call(null,x);
if((self__.constant_response == null)){
return rsp;
} else {
return self__.constant_response;
}
}catch (e23692){if((e23692 instanceof Error)){
var e = e23692;
manifold_cljs.impl.logging.error.call(null,e,"error in stream handler");

manifold_cljs.stream.core.close.call(null,this$__$1);

return manifold_cljs.deferred.success_deferred.call(null,false);
} else {
throw e23692;

}
}});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventSink$put$arity$5 = (function (this$,x,default_val,_,___$1){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.stream.core.put.call(null,this$__$1,x,default_val);
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.downstream)){
return manifold_cljs.stream.core.isClosed.call(null,self__.downstream);
} else {
return false;
}
});

manifold_cljs.stream.Callback.prototype.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.downstream)){
return manifold_cljs.stream.core.onClosed.call(null,self__.downstream,callback);
} else {
return null;
}
});

manifold_cljs.stream.Callback.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"close-callback","close-callback",-2003246795,null),new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.Symbol(null,"constant-response","constant-response",1064070431,null)], null);
});

manifold_cljs.stream.Callback.cljs$lang$type = true;

manifold_cljs.stream.Callback.cljs$lang$ctorStr = "manifold-cljs.stream/Callback";

manifold_cljs.stream.Callback.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream/Callback");
});

/**
 * Positional factory function for manifold-cljs.stream/Callback.
 */
manifold_cljs.stream.__GT_Callback = (function manifold_cljs$stream$__GT_Callback(f,close_callback,downstream,constant_response){
return (new manifold_cljs.stream.Callback(f,close_callback,downstream,constant_response));
});

var result_23693 = manifold_cljs.deferred.success_deferred.call(null,true);
/**
 * Feeds all messages from `source` into `callback`.
 * 
 *   Messages will be processed as quickly as the callback can be executed. Returns
 *   a deferred which yields `true` when `source` is exhausted.
 */
manifold_cljs.stream.consume = ((function (result_23693){
return (function manifold_cljs$stream$consume(callback,source){
var complete = manifold_cljs.deferred.deferred.call(null);
manifold_cljs.stream.connect.call(null,source,(new manifold_cljs.stream.Callback(callback,((function (complete,result_23693){
return (function (){
return manifold_cljs.deferred.success_BANG_.call(null,complete,true);
});})(complete,result_23693))
,null,result_23693)),null);

return complete;
});})(result_23693))
;
/**
 * Feeds all messages from `source` into `callback`, which must return a deferred yielding
 * `true` or `false`.  If the returned value yields `false`, the consumption will be cancelled.
 * 
 * Messages will be processed only as quickly as the deferred values are realized. Returns a
 * deferred which yields `true` when `source` is exhausted or `callback` yields `false`.
 */
manifold_cljs.stream.consume_async = (function manifold_cljs$stream$consume_async(callback,source){
var complete = manifold_cljs.deferred.deferred.call(null);
var callback__$1 = ((function (complete){
return (function (p1__23694_SHARP_){
return manifold_cljs.deferred.chain.call(null,p1__23694_SHARP_,callback,((function (complete){
return (function (result){
if(result === false){
manifold_cljs.deferred.success_BANG_.call(null,complete,true);
} else {
}

return result;
});})(complete))
);
});})(complete))
;
manifold_cljs.stream.connect.call(null,source,(new manifold_cljs.stream.Callback(callback__$1,((function (complete,callback__$1){
return (function (){
return manifold_cljs.deferred.success_BANG_.call(null,complete,true);
});})(complete,callback__$1))
,null,null)),null);

return complete;
});
/**
 * Feeds all messages from `src` into `callback`, with the understanding that they will
 * eventually be propagated into `dst` in some form.  The return value of `callback`
 * should be a deferred yielding either `true` or `false`. When `false`,  the downstream
 * sink is assumed to be closed, and the connection is severed.
 * 
 * Returns a deferred which yields `true` when `src` is exhausted or `callback` yields `false`.
 */
manifold_cljs.stream.connect_via = (function manifold_cljs$stream$connect_via(var_args){
var G__23696 = arguments.length;
switch (G__23696) {
case 3:
return manifold_cljs.stream.connect_via.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return manifold_cljs.stream.connect_via.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.connect_via.cljs$core$IFn$_invoke$arity$3 = (function (src,callback,dst){
return manifold_cljs.stream.connect_via.call(null,src,callback,dst,null);
});

manifold_cljs.stream.connect_via.cljs$core$IFn$_invoke$arity$4 = (function (src,callback,dst,options){
var dst__$1 = manifold_cljs.stream.__GT_sink.call(null,dst);
var complete = manifold_cljs.deferred.deferred.call(null);
var close_callback = ((function (dst__$1,complete){
return (function (){
manifold_cljs.stream.close_BANG_.call(null,dst__$1);

return manifold_cljs.deferred.success_BANG_.call(null,complete,true);
});})(dst__$1,complete))
;
manifold_cljs.stream.connect.call(null,src,(new manifold_cljs.stream.Callback(callback,close_callback,dst__$1,null)),options);

return complete;
});

manifold_cljs.stream.connect_via.cljs$lang$maxFixedArity = 4;

manifold_cljs.stream.connect_via_proxy = (function manifold_cljs$stream$connect_via_proxy(var_args){
var G__23700 = arguments.length;
switch (G__23700) {
case 3:
return manifold_cljs.stream.connect_via_proxy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return manifold_cljs.stream.connect_via_proxy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.connect_via_proxy.cljs$core$IFn$_invoke$arity$3 = (function (src,proxy,dst){
return manifold_cljs.stream.connect_via_proxy.call(null,src,proxy,dst,null);
});

manifold_cljs.stream.connect_via_proxy.cljs$core$IFn$_invoke$arity$4 = (function (src,proxy,dst,options){
var dst__$1 = manifold_cljs.stream.__GT_sink.call(null,dst);
var proxy__$1 = manifold_cljs.stream.__GT_sink.call(null,proxy);
var complete = manifold_cljs.deferred.deferred.call(null);
var close_callback = ((function (dst__$1,proxy__$1,complete){
return (function (){
manifold_cljs.stream.close_BANG_.call(null,proxy__$1);

return manifold_cljs.deferred.success_BANG_.call(null,complete,true);
});})(dst__$1,proxy__$1,complete))
;
manifold_cljs.stream.connect.call(null,src,(new manifold_cljs.stream.Callback(((function (dst__$1,proxy__$1,complete,close_callback){
return (function (p1__23698_SHARP_){
return manifold_cljs.stream.put_BANG_.call(null,proxy__$1,p1__23698_SHARP_);
});})(dst__$1,proxy__$1,complete,close_callback))
,close_callback,dst__$1,null)),options);

return complete;
});

manifold_cljs.stream.connect_via_proxy.cljs$lang$maxFixedArity = 4;

/**
 * Takes all messages from `src` and puts them into `dst`, and returns a deferred that
 * yields `true` once `src` is drained or `dst` is closed.  If `src` is closed or drained,
 * `dst` will not be closed.
 */
manifold_cljs.stream.drain_into = (function manifold_cljs$stream$drain_into(src,dst){
var dst__$1 = manifold_cljs.stream.__GT_sink.call(null,dst);
var complete = manifold_cljs.deferred.deferred.call(null);
manifold_cljs.stream.connect.call(null,src,(new manifold_cljs.stream.Callback(((function (dst__$1,complete){
return (function (p1__23702_SHARP_){
return manifold_cljs.stream.put_BANG_.call(null,dst__$1,p1__23702_SHARP_);
});})(dst__$1,complete))
,((function (dst__$1,complete){
return (function (){
return manifold_cljs.deferred.success_BANG_.call(null,complete,true);
});})(dst__$1,complete))
,dst__$1,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"drain-into"], null));

return complete;
});
manifold_cljs.stream.periodically_ = (function manifold_cljs$stream$periodically_(stream,period,initial_delay,f){
var cancel = cljs.core.atom.call(null,null);
return cljs.core.reset_BANG_.call(null,cancel,manifold_cljs.time.every.call(null,period,initial_delay,((function (cancel){
return (function (){
try{var d = (cljs.core.truth_(manifold_cljs.stream.closed_QMARK_.call(null,stream))?manifold_cljs.deferred.success_deferred.call(null,false):manifold_cljs.stream.put_BANG_.call(null,stream,f.call(null)));
if(cljs.core.realized_QMARK_.call(null,d)){
if(cljs.core.truth_(cljs.core.deref.call(null,d))){
return null;
} else {
cljs.core.deref.call(null,cancel).call(null);

return manifold_cljs.stream.close_BANG_.call(null,stream);
}
} else {
cljs.core.deref.call(null,cancel).call(null);

return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,d,((function (d,cancel){
return (function (x){
if(cljs.core.not.call(null,x)){
return manifold_cljs.stream.close_BANG_.call(null,stream);
} else {
return manifold_cljs.stream.periodically_.call(null,stream,period,(period - cljs.core.rem.call(null,manifold_cljs.time.current_millis.call(null),period)),f);
}
});})(d,cancel))
);
}
}catch (e23703){if((e23703 instanceof Error)){
var e = e23703;
cljs.core.deref.call(null,cancel).call(null);

manifold_cljs.stream.close_BANG_.call(null,stream);

return manifold_cljs.impl.logging.error.call(null,e,"error in 'periodically' callback");
} else {
throw e23703;

}
}});})(cancel))
));
});
/**
 * Creates a stream which emits the result of invoking `(f)` every `period` milliseconds.
 */
manifold_cljs.stream.periodically = (function manifold_cljs$stream$periodically(var_args){
var G__23705 = arguments.length;
switch (G__23705) {
case 3:
return manifold_cljs.stream.periodically.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return manifold_cljs.stream.periodically.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.periodically.cljs$core$IFn$_invoke$arity$3 = (function (period,initial_delay,f){
var s = manifold_cljs.stream.stream.call(null,(1));
manifold_cljs.stream.periodically_.call(null,s,period,initial_delay,f);

return manifold_cljs.stream.source_only.call(null,s);
});

manifold_cljs.stream.periodically.cljs$core$IFn$_invoke$arity$2 = (function (period,f){
return manifold_cljs.stream.periodically.call(null,period,(period - cljs.core.rem.call(null,manifold_cljs.time.current_millis.call(null),period)),f);
});

manifold_cljs.stream.periodically.cljs$lang$maxFixedArity = 3;

/**
 * Takes a transducer `xform` and returns a source which applies it to source `s`. A buffer-size
 * may optionally be defined for the output source.
 */
manifold_cljs.stream.transform = (function manifold_cljs$stream$transform(var_args){
var G__23708 = arguments.length;
switch (G__23708) {
case 2:
return manifold_cljs.stream.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.transform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.transform.cljs$core$IFn$_invoke$arity$2 = (function (xform,s){
return manifold_cljs.stream.transform.call(null,xform,(0),s);
});

manifold_cljs.stream.transform.cljs$core$IFn$_invoke$arity$3 = (function (xform,buffer_size,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null,buffer_size,xform);
manifold_cljs.stream.connect.call(null,s,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"transducer"], null)], null));

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.transform.cljs$lang$maxFixedArity = 3;

/**
 * Equivalent to Clojure's `map`, but for streams instead of sequences.
 */
manifold_cljs.stream.map = (function manifold_cljs$stream$map(var_args){
var G__23715 = arguments.length;
switch (G__23715) {
case 2:
return manifold_cljs.stream.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___23717 = arguments.length;
var i__4500__auto___23718 = (0);
while(true){
if((i__4500__auto___23718 < len__4499__auto___23717)){
args_arr__4514__auto__.push((arguments[i__4500__auto___23718]));

var G__23719 = (i__4500__auto___23718 + (1));
i__4500__auto___23718 = G__23719;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return manifold_cljs.stream.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

manifold_cljs.stream.map.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via.call(null,s,((function (s_SINGLEQUOTE_){
return (function (msg){
return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,f.call(null,msg));
});})(s_SINGLEQUOTE_))
,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"map"], null)], null));

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,s,rest){
return manifold_cljs.stream.map.call(null,(function (p1__23710_SHARP_){
return cljs.core.apply.call(null,f,p1__23710_SHARP_);
}),cljs.core.apply.call(null,manifold_cljs.stream.zip,s,rest));
});

/** @this {Function} */
manifold_cljs.stream.map.cljs$lang$applyTo = (function (seq23712){
var G__23713 = cljs.core.first.call(null,seq23712);
var seq23712__$1 = cljs.core.next.call(null,seq23712);
var G__23714 = cljs.core.first.call(null,seq23712__$1);
var seq23712__$2 = cljs.core.next.call(null,seq23712__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23713,G__23714,seq23712__$2);
});

manifold_cljs.stream.map.cljs$lang$maxFixedArity = (2);

/**
 * Takes a stream of potentially deferred values, and returns a stream of realized values.
 */
manifold_cljs.stream.realize_each = (function manifold_cljs$stream$realize_each(s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via.call(null,s,((function (s_SINGLEQUOTE_){
return (function (msg){
return manifold_cljs.deferred.catch_SINGLEQUOTE_.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,msg,((function (s_SINGLEQUOTE_){
return (function (p1__23720_SHARP_){
return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,p1__23720_SHARP_);
});})(s_SINGLEQUOTE_))
),((function (s_SINGLEQUOTE_){
return (function (e){
manifold_cljs.impl.logging.error.call(null,e,"deferred realized as error, closing stream");

manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);

return false;
});})(s_SINGLEQUOTE_))
);
});})(s_SINGLEQUOTE_))
,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"realize-each"], null)], null));

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});
var some_drained_QMARK__23740 = cljs.core.partial.call(null,cljs.core.some,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("manifold-cljs.stream","drained","manifold-cljs.stream/drained",690040425),null], null), null));
/**
 * Takes n-many streams, and returns a single stream which will emit n-tuples representing
 *   a message from each stream.
 */
manifold_cljs.stream.zip = ((function (some_drained_QMARK__23740){
return (function manifold_cljs$stream$zip(var_args){
var G__23726 = arguments.length;
switch (G__23726) {
case 1:
return manifold_cljs.stream.zip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___23742 = arguments.length;
var i__4500__auto___23743 = (0);
while(true){
if((i__4500__auto___23743 < len__4499__auto___23742)){
args_arr__4514__auto__.push((arguments[i__4500__auto___23743]));

var G__23744 = (i__4500__auto___23743 + (1));
i__4500__auto___23743 = G__23744;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return manifold_cljs.stream.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});})(some_drained_QMARK__23740))
;

manifold_cljs.stream.zip.cljs$core$IFn$_invoke$arity$1 = ((function (some_drained_QMARK__23740){
return (function (a){
return manifold_cljs.stream.map.call(null,cljs.core.vector,a);
});})(some_drained_QMARK__23740))
;

manifold_cljs.stream.zip.cljs$core$IFn$_invoke$arity$variadic = ((function (some_drained_QMARK__23740){
return (function (a,rest){
var srcs = cljs.core.list_STAR_.call(null,a,rest);
var intermediates = cljs.core.repeatedly.call(null,cljs.core.count.call(null,srcs),manifold_cljs.stream.stream);
var dst = manifold_cljs.stream.stream.call(null);
var seq__23727_23745 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,srcs,intermediates));
var chunk__23728_23746 = null;
var count__23729_23747 = (0);
var i__23730_23748 = (0);
while(true){
if((i__23730_23748 < count__23729_23747)){
var vec__23731_23749 = cljs.core._nth.call(null,chunk__23728_23746,i__23730_23748);
var a_23750__$1 = cljs.core.nth.call(null,vec__23731_23749,(0),null);
var b_23751 = cljs.core.nth.call(null,vec__23731_23749,(1),null);
manifold_cljs.stream.connect_via.call(null,a_23750__$1,((function (seq__23727_23745,chunk__23728_23746,count__23729_23747,i__23730_23748,vec__23731_23749,a_23750__$1,b_23751,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (p1__23721_SHARP_){
return manifold_cljs.stream.put_BANG_.call(null,b_23751,p1__23721_SHARP_);
});})(seq__23727_23745,chunk__23728_23746,count__23729_23747,i__23730_23748,vec__23731_23749,a_23750__$1,b_23751,srcs,intermediates,dst,some_drained_QMARK__23740))
,b_23751,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"zip"], null)], null));


var G__23752 = seq__23727_23745;
var G__23753 = chunk__23728_23746;
var G__23754 = count__23729_23747;
var G__23755 = (i__23730_23748 + (1));
seq__23727_23745 = G__23752;
chunk__23728_23746 = G__23753;
count__23729_23747 = G__23754;
i__23730_23748 = G__23755;
continue;
} else {
var temp__5457__auto___23756 = cljs.core.seq.call(null,seq__23727_23745);
if(temp__5457__auto___23756){
var seq__23727_23757__$1 = temp__5457__auto___23756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23727_23757__$1)){
var c__4319__auto___23758 = cljs.core.chunk_first.call(null,seq__23727_23757__$1);
var G__23759 = cljs.core.chunk_rest.call(null,seq__23727_23757__$1);
var G__23760 = c__4319__auto___23758;
var G__23761 = cljs.core.count.call(null,c__4319__auto___23758);
var G__23762 = (0);
seq__23727_23745 = G__23759;
chunk__23728_23746 = G__23760;
count__23729_23747 = G__23761;
i__23730_23748 = G__23762;
continue;
} else {
var vec__23734_23763 = cljs.core.first.call(null,seq__23727_23757__$1);
var a_23764__$1 = cljs.core.nth.call(null,vec__23734_23763,(0),null);
var b_23765 = cljs.core.nth.call(null,vec__23734_23763,(1),null);
manifold_cljs.stream.connect_via.call(null,a_23764__$1,((function (seq__23727_23745,chunk__23728_23746,count__23729_23747,i__23730_23748,vec__23734_23763,a_23764__$1,b_23765,seq__23727_23757__$1,temp__5457__auto___23756,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (p1__23721_SHARP_){
return manifold_cljs.stream.put_BANG_.call(null,b_23765,p1__23721_SHARP_);
});})(seq__23727_23745,chunk__23728_23746,count__23729_23747,i__23730_23748,vec__23734_23763,a_23764__$1,b_23765,seq__23727_23757__$1,temp__5457__auto___23756,srcs,intermediates,dst,some_drained_QMARK__23740))
,b_23765,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"zip"], null)], null));


var G__23766 = cljs.core.next.call(null,seq__23727_23757__$1);
var G__23767 = null;
var G__23768 = (0);
var G__23769 = (0);
seq__23727_23745 = G__23766;
chunk__23728_23746 = G__23767;
count__23729_23747 = G__23768;
i__23730_23748 = G__23769;
continue;
}
} else {
}
}
break;
}

var result__22143__auto___23770 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function manifold_cljs$stream$this__22144__auto__(result__22143__auto____$1){
while(true){
var x23737 = (function (){try{return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,cljs.core.apply.call(null,manifold_cljs.deferred.zip,cljs.core.map.call(null,((function (result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (p1__23722_SHARP_){
return manifold_cljs.stream.take_BANG_.call(null,p1__23722_SHARP_,new cljs.core.Keyword("manifold-cljs.stream","drained","manifold-cljs.stream/drained",690040425));
});})(result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
,intermediates)),((function (result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (msgs){
if(cljs.core.truth_(some_drained_QMARK__23740.call(null,msgs))){
manifold_cljs.stream.close_BANG_.call(null,dst);

return false;
} else {
return manifold_cljs.stream.put_BANG_.call(null,dst,msgs);
}
});})(result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
,((function (result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (result){
if(cljs.core.truth_(result)){
return manifold_cljs.deferred.recur.call(null);
} else {
return null;
}
});})(result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
);
}catch (e23739){if((e23739 instanceof Error)){
var e__22145__auto__ = e23739;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23739;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23737))){
var d__22137__auto__ = x23737;
var val23738 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23738)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23737),((function (err__22146__auto__,d__22137__auto__,val23738,x23737,result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(err__22146__auto__,d__22137__auto__,val23738,x23737,result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
,((function (err__22146__auto__,d__22137__auto__,val23738,x23737,result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(err__22146__auto__,d__22137__auto__,val23738,x23737,result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23738 instanceof manifold_cljs.deferred.Recur)){
var val23738__$1 = cljs.core.deref.call(null,val23738);
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23738);
}
}
} else {
if((x23737 instanceof manifold_cljs.deferred.Recur)){
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23737);

}
}
break;
}
});})(result__22143__auto___23770,srcs,intermediates,dst,some_drained_QMARK__23740))
.call(null,result__22143__auto___23770);


return manifold_cljs.stream.source_only.call(null,dst);
});})(some_drained_QMARK__23740))
;

/** @this {Function} */
manifold_cljs.stream.zip.cljs$lang$applyTo = ((function (some_drained_QMARK__23740){
return (function (seq23724){
var G__23725 = cljs.core.first.call(null,seq23724);
var seq23724__$1 = cljs.core.next.call(null,seq23724);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23725,seq23724__$1);
});})(some_drained_QMARK__23740))
;

manifold_cljs.stream.zip.cljs$lang$maxFixedArity = (1);

/**
 * Equivalent to Clojure's `filter`, but for streams instead of sequences.
 */
manifold_cljs.stream.filter = (function manifold_cljs$stream$filter(pred,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via.call(null,s,((function (s_SINGLEQUOTE_){
return (function (msg){
if(cljs.core.truth_(pred.call(null,msg))){
return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msg);
} else {
return manifold_cljs.deferred.success_deferred.call(null,true);
}
});})(s_SINGLEQUOTE_))
,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"filter"], null)], null));

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});
/**
 * Equivalent to Clojure's `reductions`, but for streams instead of sequences.
 */
manifold_cljs.stream.reductions = (function manifold_cljs$stream$reductions(var_args){
var G__23772 = arguments.length;
switch (G__23772) {
case 2:
return manifold_cljs.stream.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.reductions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
return manifold_cljs.stream.reductions.call(null,f,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),s);
});

manifold_cljs.stream.reductions.cljs$core$IFn$_invoke$arity$3 = (function (f,initial_value,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
var val = cljs.core.atom.call(null,initial_value);
manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),initial_value))?true:manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,initial_value)),((function (s_SINGLEQUOTE_,val){
return (function (_){
return manifold_cljs.stream.connect_via.call(null,s,((function (s_SINGLEQUOTE_,val){
return (function (msg){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),cljs.core.deref.call(null,val))){
cljs.core.reset_BANG_.call(null,val,msg);

return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msg);
} else {
return manifold_cljs.deferred.catch_SINGLEQUOTE_.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,msg,cljs.core.partial.call(null,f,cljs.core.deref.call(null,val)),((function (s_SINGLEQUOTE_,val){
return (function (x){
cljs.core.reset_BANG_.call(null,val,x);

return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,x);
});})(s_SINGLEQUOTE_,val))
),((function (s_SINGLEQUOTE_,val){
return (function (e){
manifold_cljs.impl.logging.error.call(null,e,"error in reductions");

manifold_cljs.stream.close_BANG_.call(null,s);

return false;
});})(s_SINGLEQUOTE_,val))
);
}
});})(s_SINGLEQUOTE_,val))
,s_SINGLEQUOTE_);
});})(s_SINGLEQUOTE_,val))
);

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.reductions.cljs$lang$maxFixedArity = 3;

/**
 * Equivalent to Clojure's `reduce`, but returns a deferred representing the return value.
 * 
 * The deferred will be realized once the stream is closed or if the accumulator
 * functions returns a `reduced` value.
 */
manifold_cljs.stream.reduce = (function manifold_cljs$stream$reduce(var_args){
var G__23775 = arguments.length;
switch (G__23775) {
case 2:
return manifold_cljs.stream.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
return manifold_cljs.stream.reduce.call(null,f,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),s);
});

manifold_cljs.stream.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,initial_value,s){
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),initial_value))?manifold_cljs.stream.take_BANG_.call(null,s,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)):initial_value),(function (initial_value__$1){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),initial_value__$1)){
return f.call(null);
} else {
var result__22143__auto__ = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto__){
return (function manifold_cljs$stream$this__22144__auto__(result__22143__auto____$1,var23778){
var val = var23778;
while(true){
var x23776 = (function (){try{return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.take_BANG_.call(null,s,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)),((function (val,result__22143__auto__){
return (function (x){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),x)){
return val;
} else {
var r = f.call(null,val,x);
if(cljs.core.reduced_QMARK_.call(null,r)){
return cljs.core.deref.call(null,r);
} else {
return manifold_cljs.deferred.recur.call(null,r);
}
}
});})(val,result__22143__auto__))
);
}catch (e23779){if((e23779 instanceof Error)){
var e__22145__auto__ = e23779;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23779;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23776))){
var d__22137__auto__ = x23776;
var val23777 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23777)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23776),((function (val,err__22146__auto__,d__22137__auto__,val23777,x23776,result__22143__auto__){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(val,err__22146__auto__,d__22137__auto__,val23777,x23776,result__22143__auto__))
,((function (val,err__22146__auto__,d__22137__auto__,val23777,x23776,result__22143__auto__){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(val,err__22146__auto__,d__22137__auto__,val23777,x23776,result__22143__auto__))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23777 instanceof manifold_cljs.deferred.Recur)){
var val23777__$1 = cljs.core.deref.call(null,val23777);
var G__23781 = cljs.core.nth.call(null,val23777__$1,(0));
val = G__23781;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23777);
}
}
} else {
if((x23776 instanceof manifold_cljs.deferred.Recur)){
var G__23782 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23776),(0));
val = G__23782;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23776);

}
}
break;
}
});})(result__22143__auto__))
.call(null,result__22143__auto__,initial_value__$1);

return result__22143__auto__;
}
}));
});

manifold_cljs.stream.reduce.cljs$lang$maxFixedArity = 3;

/**
 * Equivalent to Clojure's `mapcat`, but for streams instead of sequences.
 */
manifold_cljs.stream.mapcat = (function manifold_cljs$stream$mapcat(var_args){
var G__23788 = arguments.length;
switch (G__23788) {
case 2:
return manifold_cljs.stream.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___23794 = arguments.length;
var i__4500__auto___23795 = (0);
while(true){
if((i__4500__auto___23795 < len__4499__auto___23794)){
args_arr__4514__auto__.push((arguments[i__4500__auto___23795]));

var G__23796 = (i__4500__auto___23795 + (1));
i__4500__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return manifold_cljs.stream.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

manifold_cljs.stream.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via.call(null,s,((function (s_SINGLEQUOTE_){
return (function (msg){
var result__22143__auto__ = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto__,s_SINGLEQUOTE_){
return (function manifold_cljs$stream$this__22144__auto__(result__22143__auto____$1,var23791){
var s__$1 = var23791;
while(true){
var x23789 = (function (){try{if(cljs.core.empty_QMARK_.call(null,s__$1)){
return null;
} else {
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,cljs.core.first.call(null,s__$1)),((function (s__$1,result__22143__auto__,s_SINGLEQUOTE_){
return (function (_){
return manifold_cljs.deferred.recur.call(null,cljs.core.rest.call(null,s__$1));
});})(s__$1,result__22143__auto__,s_SINGLEQUOTE_))
);
}
}catch (e23792){if((e23792 instanceof Error)){
var e__22145__auto__ = e23792;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23792;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23789))){
var d__22137__auto__ = x23789;
var val23790 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23790)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23789),((function (s__$1,err__22146__auto__,d__22137__auto__,val23790,x23789,result__22143__auto__,s_SINGLEQUOTE_){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(s__$1,err__22146__auto__,d__22137__auto__,val23790,x23789,result__22143__auto__,s_SINGLEQUOTE_))
,((function (s__$1,err__22146__auto__,d__22137__auto__,val23790,x23789,result__22143__auto__,s_SINGLEQUOTE_){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(s__$1,err__22146__auto__,d__22137__auto__,val23790,x23789,result__22143__auto__,s_SINGLEQUOTE_))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23790 instanceof manifold_cljs.deferred.Recur)){
var val23790__$1 = cljs.core.deref.call(null,val23790);
var G__23797 = cljs.core.nth.call(null,val23790__$1,(0));
s__$1 = G__23797;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23790);
}
}
} else {
if((x23789 instanceof manifold_cljs.deferred.Recur)){
var G__23798 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23789),(0));
s__$1 = G__23798;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23789);

}
}
break;
}
});})(result__22143__auto__,s_SINGLEQUOTE_))
.call(null,result__22143__auto__,f.call(null,msg));

return result__22143__auto__;
});})(s_SINGLEQUOTE_))
,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"mapcat"], null)], null));

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,s,rest){
return manifold_cljs.stream.mapcat.call(null,(function (p1__23783_SHARP_){
return cljs.core.apply.call(null,f,p1__23783_SHARP_);
}),cljs.core.apply.call(null,manifold_cljs.stream.zip,s,rest));
});

/** @this {Function} */
manifold_cljs.stream.mapcat.cljs$lang$applyTo = (function (seq23785){
var G__23786 = cljs.core.first.call(null,seq23785);
var seq23785__$1 = cljs.core.next.call(null,seq23785);
var G__23787 = cljs.core.first.call(null,seq23785__$1);
var seq23785__$2 = cljs.core.next.call(null,seq23785__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23786,G__23787,seq23785__$2);
});

manifold_cljs.stream.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Equivalent to Clojure's `partition-by`, but returns a stream of streams.  This means that
 * if a sub-stream is not completely consumed, the next sub-stream will never be emitted.
 * 
 * Use with caution.  If you're not totally sure you want a stream of streams, use
 * `(transform (partition-by f))` instead.
 */
manifold_cljs.stream.lazily_partition_by = (function manifold_cljs$stream$lazily_partition_by(f,s){
var in$ = manifold_cljs.stream.stream.call(null);
var out = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via_proxy.call(null,s,in$,out,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"lazily-partition-by"], null)], null));

var result__22143__auto___23805 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto___23805,in$,out){
return (function manifold_cljs$stream$lazily_partition_by_$_this__22144__auto__(result__22143__auto____$1,var23801,var23802){
var prev = var23801;
var s_SINGLEQUOTE_ = var23802;
while(true){
var x23799 = (function (){try{return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.take_BANG_.call(null,in$,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)),((function (prev,s_SINGLEQUOTE_,result__22143__auto___23805,in$,out){
return (function (msg){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),msg)){
if(cljs.core.truth_(s_SINGLEQUOTE_)){
manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);
} else {
}

return manifold_cljs.stream.close_BANG_.call(null,out);
} else {
var curr = (function (){try{return f.call(null,msg);
}catch (e23804){if((e23804 instanceof Error)){
var e = e23804;
manifold_cljs.stream.close_BANG_.call(null,in$);

manifold_cljs.stream.close_BANG_.call(null,out);

manifold_cljs.impl.logging.error.call(null,e,"error in lazily-partition-by");

return new cljs.core.Keyword("manifold-cljs.stream","error","manifold-cljs.stream/error",-2108585929);
} else {
throw e23804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","error","manifold-cljs.stream/error",-2108585929),curr)){
return null;
} else {
if(cljs.core._EQ_.call(null,prev,curr)){
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msg),((function (prev,s_SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out){
return (function (_){
return manifold_cljs.deferred.recur.call(null,curr,s_SINGLEQUOTE_);
});})(prev,s_SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out))
);
} else {
var s_SINGLEQUOTE__SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
if(cljs.core.truth_(s_SINGLEQUOTE_)){
manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);
} else {
}

return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,out,s_SINGLEQUOTE__SINGLEQUOTE_),((function (prev,s_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out){
return (function (_){
return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE__SINGLEQUOTE_,msg);
});})(prev,s_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out))
,((function (prev,s_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out){
return (function (_){
return manifold_cljs.deferred.recur.call(null,curr,s_SINGLEQUOTE__SINGLEQUOTE_);
});})(prev,s_SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_,curr,result__22143__auto___23805,in$,out))
);
}
}
}
});})(prev,s_SINGLEQUOTE_,result__22143__auto___23805,in$,out))
);
}catch (e23803){if((e23803 instanceof Error)){
var e__22145__auto__ = e23803;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23803;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23799))){
var d__22137__auto__ = x23799;
var val23800 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23800)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23799),((function (prev,s_SINGLEQUOTE_,err__22146__auto__,d__22137__auto__,val23800,x23799,result__22143__auto___23805,in$,out){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$lazily_partition_by_$_this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(prev,s_SINGLEQUOTE_,err__22146__auto__,d__22137__auto__,val23800,x23799,result__22143__auto___23805,in$,out))
,((function (prev,s_SINGLEQUOTE_,err__22146__auto__,d__22137__auto__,val23800,x23799,result__22143__auto___23805,in$,out){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(prev,s_SINGLEQUOTE_,err__22146__auto__,d__22137__auto__,val23800,x23799,result__22143__auto___23805,in$,out))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23800 instanceof manifold_cljs.deferred.Recur)){
var val23800__$1 = cljs.core.deref.call(null,val23800);
var G__23806 = cljs.core.nth.call(null,val23800__$1,(0));
var G__23807 = cljs.core.nth.call(null,val23800__$1,(1));
prev = G__23806;
s_SINGLEQUOTE_ = G__23807;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23800);
}
}
} else {
if((x23799 instanceof manifold_cljs.deferred.Recur)){
var G__23808 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23799),(0));
var G__23809 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23799),(1));
prev = G__23808;
s_SINGLEQUOTE_ = G__23809;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23799);

}
}
break;
}
});})(result__22143__auto___23805,in$,out))
.call(null,result__22143__auto___23805,new cljs.core.Keyword("manifold-cljs.stream","x","manifold-cljs.stream/x",-1320606944),null);


return manifold_cljs.stream.source_only.call(null,out);
});
/**
 * Takes a stream of streams, and flattens it into a single stream.
 */
manifold_cljs.stream.concat = (function manifold_cljs$stream$concat(s){
var in$ = manifold_cljs.stream.stream.call(null);
var out = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via_proxy.call(null,s,in$,out,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"concat"], null)], null));

var result__22143__auto___23817 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto___23817,in$,out){
return (function manifold_cljs$stream$concat_$_this__22144__auto__(result__22143__auto____$1){
while(true){
var x23810 = (function (){try{return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.take_BANG_.call(null,in$,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)),((function (result__22143__auto___23817,in$,out){
return (function (s_SINGLEQUOTE_){
if(cljs.core.truth_(manifold_cljs.stream.closed_QMARK_.call(null,out))){
return manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),s_SINGLEQUOTE_)){
manifold_cljs.stream.close_BANG_.call(null,out);

return s_SINGLEQUOTE_;
} else {
var result__22143__auto____$2 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto____$2,result__22143__auto___23817,in$,out){
return (function manifold_cljs$stream$concat_$_this__22144__auto___$_this__22144__auto__(result__22143__auto____$3){
while(true){
var x23813 = (function (){try{return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.take_BANG_.call(null,s_SINGLEQUOTE_,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)),((function (result__22143__auto____$2,result__22143__auto___23817,in$,out){
return (function (msg){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),msg)){
return msg;
} else {
return manifold_cljs.stream.put_BANG_.call(null,out,msg);
}
});})(result__22143__auto____$2,result__22143__auto___23817,in$,out))
,((function (result__22143__auto____$2,result__22143__auto___23817,in$,out){
return (function (result){
var G__23816 = result;
if(cljs.core._EQ_.call(null,false,G__23816)){
manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);

return manifold_cljs.stream.close_BANG_.call(null,in$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),G__23816)){
return null;
} else {
return manifold_cljs.deferred.recur.call(null);

}
}
});})(result__22143__auto____$2,result__22143__auto___23817,in$,out))
);
}catch (e23815){if((e23815 instanceof Error)){
var e__22145__auto__ = e23815;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$3,e__22145__auto__);

return null;
} else {
throw e23815;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23813))){
var d__22137__auto__ = x23813;
var val23814 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23814)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23813),((function (err__22146__auto__,d__22137__auto__,val23814,x23813,result__22143__auto____$2,result__22143__auto___23817,in$,out){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$concat_$_this__22144__auto___$_this__22144__auto__,result__22143__auto____$3,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$3,x__22147__auto__);
}
});})(err__22146__auto__,d__22137__auto__,val23814,x23813,result__22143__auto____$2,result__22143__auto___23817,in$,out))
,((function (err__22146__auto__,d__22137__auto__,val23814,x23813,result__22143__auto____$2,result__22143__auto___23817,in$,out){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$3,err__22146__auto____$1);
});})(err__22146__auto__,d__22137__auto__,val23814,x23813,result__22143__auto____$2,result__22143__auto___23817,in$,out))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$3,err__22146__auto__);
}
} else {
if((val23814 instanceof manifold_cljs.deferred.Recur)){
var val23814__$1 = cljs.core.deref.call(null,val23814);
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$3,val23814);
}
}
} else {
if((x23813 instanceof manifold_cljs.deferred.Recur)){
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$3,x23813);

}
}
break;
}
});})(result__22143__auto____$2,result__22143__auto___23817,in$,out))
.call(null,result__22143__auto____$2);

return result__22143__auto____$2;

}
}
});})(result__22143__auto___23817,in$,out))
,((function (result__22143__auto___23817,in$,out){
return (function (result){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),result)){
return null;
} else {
return manifold_cljs.deferred.recur.call(null);
}
});})(result__22143__auto___23817,in$,out))
);
}catch (e23812){if((e23812 instanceof Error)){
var e__22145__auto__ = e23812;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23812;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23810))){
var d__22137__auto__ = x23810;
var val23811 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23811)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23810),((function (err__22146__auto__,d__22137__auto__,val23811,x23810,result__22143__auto___23817,in$,out){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$concat_$_this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(err__22146__auto__,d__22137__auto__,val23811,x23810,result__22143__auto___23817,in$,out))
,((function (err__22146__auto__,d__22137__auto__,val23811,x23810,result__22143__auto___23817,in$,out){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(err__22146__auto__,d__22137__auto__,val23811,x23810,result__22143__auto___23817,in$,out))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23811 instanceof manifold_cljs.deferred.Recur)){
var val23811__$1 = cljs.core.deref.call(null,val23811);
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23811);
}
}
} else {
if((x23810 instanceof manifold_cljs.deferred.Recur)){
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23810);

}
}
break;
}
});})(result__22143__auto___23817,in$,out))
.call(null,result__22143__auto___23817);


return manifold_cljs.stream.source_only.call(null,out);
});

/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSource}
 * @implements {manifold_cljs.stream.core.IEventSink}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.BufferedStream = (function (buf,limit,metric,description_fn,buffer_size,last_put,buf_PLUS_){
this.buf = buf;
this.limit = limit;
this.metric = metric;
this.description_fn = description_fn;
this.buffer_size = buffer_size;
this.last_put = last_put;
this.buf_PLUS_ = buf_PLUS_;
});
manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return manifold_cljs.stream.graph.downstream.call(null,this$__$1);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.close.call(null,self__.buf);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.description_fn.call(null,cljs.core.merge.call(null,manifold_cljs.stream.description.call(null,self__.buf),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),cljs.core.deref.call(null,self__.buffer_size),new cljs.core.Keyword(null,"buffer-capacity","buffer-capacity",-1317571303),self__.limit], null)));
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (this$,ref_queue){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSink$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$3 = (function (_,x,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking puts not supported!","\n","(not blocking?)"].join('')));
}

var size = self__.metric.call(null,x);
var val = manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.core.put.call(null,self__.buf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,x], null),blocking_QMARK_),((function (size,___$1){
return (function (result){
if(cljs.core.truth_(result)){
self__.buf_PLUS_.call(null,size);

return cljs.core.deref.call(null,self__.last_put);
} else {
return false;
}
});})(size,___$1))
);
return val;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSink$put$arity$5 = (function (_,x,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking puts not supported!","\n","(not blocking?)"].join('')));
}

var size = self__.metric.call(null,x);
var val = manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.core.put.call(null,self__.buf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,x], null),blocking_QMARK_,timeout,new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479)),((function (size,___$1){
return (function (result){
if(cljs.core.keyword_identical_QMARK_.call(null,result,new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479))){
return timeout_val;
} else {
if(result === false){
return false;
} else {
self__.buf_PLUS_.call(null,size);

return cljs.core.deref.call(null,self__.last_put);

}
}
});})(size,___$1))
);
return val;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isClosed.call(null,self__.buf);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onClosed.call(null,self__.buf,callback);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$3 = (function (_,default_val,blocking_QMARK_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking takes not supported!","\n","(not blocking?)"].join('')));
}

var val = manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.core.take.call(null,self__.buf,default_val,blocking_QMARK_),((function (___$1){
return (function (x){
if(cljs.core.keyword_identical_QMARK_.call(null,default_val,x)){
return x;
} else {
var vec__23818 = x;
var size = cljs.core.nth.call(null,vec__23818,(0),null);
var msg = cljs.core.nth.call(null,vec__23818,(1),null);
self__.buf_PLUS_.call(null,(- size));

return msg;
}
});})(___$1))
);
return val;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$take$arity$5 = (function (_,default_val,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,blocking_QMARK_)){
} else {
throw (new Error(["Assert failed: ","Blocking takes not supported!","\n","(not blocking?)"].join('')));
}

var val = manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.core.take.call(null,self__.buf,default_val,blocking_QMARK_,timeout,new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479)),((function (___$1){
return (function (x){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479),x)){
return timeout_val;
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,default_val,x)){
return x;
} else {
var vec__23821 = x;
var size = cljs.core.nth.call(null,vec__23821,(0),null);
var msg = cljs.core.nth.call(null,vec__23821,(1),null);
self__.buf_PLUS_.call(null,(- size));

return msg;

}
}
});})(___$1))
);
return val;
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.isDrained.call(null,self__.buf);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 = (function (_,callback){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.onDrained.call(null,self__.buf,callback);
});

manifold_cljs.stream.BufferedStream.prototype.manifold_cljs$stream$core$IEventSource$connector$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return manifold_cljs.stream.core.connector.call(null,self__.buf,sink);
});

manifold_cljs.stream.BufferedStream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Symbol(null,"metric","metric",2049329604,null),new cljs.core.Symbol(null,"description-fn","description-fn",132551692,null),new cljs.core.Symbol(null,"buffer-size","buffer-size",-1607315349,null),new cljs.core.Symbol(null,"last-put","last-put",-755205313,null),new cljs.core.Symbol(null,"buf+","buf+",19677065,null)], null);
});

manifold_cljs.stream.BufferedStream.cljs$lang$type = true;

manifold_cljs.stream.BufferedStream.cljs$lang$ctorStr = "manifold-cljs.stream/BufferedStream";

manifold_cljs.stream.BufferedStream.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream/BufferedStream");
});

/**
 * Positional factory function for manifold-cljs.stream/BufferedStream.
 */
manifold_cljs.stream.__GT_BufferedStream = (function manifold_cljs$stream$__GT_BufferedStream(buf,limit,metric,description_fn,buffer_size,last_put,buf_PLUS_){
return (new manifold_cljs.stream.BufferedStream(buf,limit,metric,description_fn,buffer_size,last_put,buf_PLUS_));
});

/**
 * A stream which will buffer at most `limit` data, where the size of each message
 * is defined by `(metric message)`.
 */
manifold_cljs.stream.buffered_stream = (function manifold_cljs$stream$buffered_stream(var_args){
var G__23825 = arguments.length;
switch (G__23825) {
case 1:
return manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$1 = (function (buffer_size){
return manifold_cljs.stream.buffered_stream.call(null,cljs.core.constantly.call(null,(1)),buffer_size);
});

manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$2 = (function (metric,limit){
return manifold_cljs.stream.buffered_stream.call(null,metric,limit,cljs.core.identity);
});

manifold_cljs.stream.buffered_stream.cljs$core$IFn$_invoke$arity$3 = (function (metric,limit,description){
var buf = manifold_cljs.stream.stream.call(null,manifold_cljs.utils.integer_max_value);
var buffer_size = cljs.core.atom.call(null,(0));
var last_put = cljs.core.atom.call(null,manifold_cljs.deferred.success_deferred.call(null,true));
var buf_PLUS_ = ((function (buf,buffer_size,last_put){
return (function (n){
var buf_SINGLEQUOTE_ = cljs.core.swap_BANG_.call(null,buffer_size,cljs.core._PLUS_,n);
var buf__$1 = (buf_SINGLEQUOTE_ - n);
if((((buf_SINGLEQUOTE_ <= limit)) && ((limit < buf__$1)))){
return manifold_cljs.deferred.success_BANG_.call(null,cljs.core.deref.call(null,last_put),true);
} else {
if((((buf__$1 <= limit)) && ((limit < buf_SINGLEQUOTE_)))){
var last_put_SINGLEQUOTE_ = cljs.core.deref.call(null,last_put);
cljs.core.reset_BANG_.call(null,last_put,manifold_cljs.deferred.deferred.call(null));

return manifold_cljs.deferred.success_BANG_.call(null,last_put_SINGLEQUOTE_,true);
} else {
return null;
}
}
});})(buf,buffer_size,last_put))
;
return (new manifold_cljs.stream.BufferedStream(buf,limit,metric,description,buffer_size,last_put,buf_PLUS_));
});

manifold_cljs.stream.buffered_stream.cljs$lang$maxFixedArity = 3;

/**
 * Takes a stream, and returns a stream which is a buffered view of that stream.  The buffer
 * size may either be measured in messages, or if a `metric` is defined, by the sum of `metric`
 * mapped over all messages currently buffered.
 */
manifold_cljs.stream.buffer = (function manifold_cljs$stream$buffer(var_args){
var G__23828 = arguments.length;
switch (G__23828) {
case 2:
return manifold_cljs.stream.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.buffer.cljs$core$IFn$_invoke$arity$2 = (function (limit,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.buffered_stream.call(null,limit);
manifold_cljs.stream.connect.call(null,s,s_SINGLEQUOTE_);

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.buffer.cljs$core$IFn$_invoke$arity$3 = (function (metric,limit,s){
var s_SINGLEQUOTE_ = manifold_cljs.stream.buffered_stream.call(null,metric,limit);
manifold_cljs.stream.connect.call(null,s,s_SINGLEQUOTE_);

return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.buffer.cljs$lang$maxFixedArity = 3;

/**
 * Batches messages, either into groups of fixed size, or according to upper bounds on size and
 * latency, in milliseconds.  By default, each message is of size `1`, but a custom `metric` function that
 * returns the size of each message may be defined.
 */
manifold_cljs.stream.batch = (function manifold_cljs$stream$batch(var_args){
var G__23831 = arguments.length;
switch (G__23831) {
case 2:
return manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$2 = (function (batch_size,s){
return manifold_cljs.stream.batch.call(null,cljs.core.constantly.call(null,(1)),batch_size,null,s);
});

manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$3 = (function (max_size,max_latency,s){
return manifold_cljs.stream.batch.call(null,cljs.core.constantly.call(null,(1)),max_size,max_latency,s);
});

manifold_cljs.stream.batch.cljs$core$IFn$_invoke$arity$4 = (function (metric,max_size,max_latency,s){
if((max_size > (0))){
} else {
throw (new Error("Assert failed: (pos? max-size)"));
}

var buf = manifold_cljs.stream.stream.call(null);
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
manifold_cljs.stream.connect_via_proxy.call(null,s,buf,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"batch"], null)], null));

manifold_cljs.stream.on_closed.call(null,s_SINGLEQUOTE_,((function (buf,s_SINGLEQUOTE_){
return (function (){
return manifold_cljs.stream.close_BANG_.call(null,buf);
});})(buf,s_SINGLEQUOTE_))
);

var result__22143__auto___23843 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function manifold_cljs$stream$this__22144__auto__(result__22143__auto____$1,var23834,var23835,var23836,var23837){
var msgs = var23834;
var size = var23835;
var earliest_message = var23836;
var last_message = var23837;
while(true){
var x23832 = (function (){try{if((((size === max_size)) || ((((max_size < size)) && ((cljs.core.count.call(null,msgs) === (1))))))){
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msgs),((function (msgs,size,earliest_message,last_message,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (_){
return manifold_cljs.deferred.recur.call(null,cljs.core.PersistentVector.EMPTY,(0),(-1),(-1));
});})(msgs,size,earliest_message,last_message,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
);
} else {
if((size > max_size)){
var msg = cljs.core.peek.call(null,msgs);
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,cljs.core.pop.call(null,msgs)),((function (msgs,size,earliest_message,last_message,msg,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (_){
return manifold_cljs.deferred.recur.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null),metric.call(null,msg),last_message,last_message);
});})(msgs,size,earliest_message,last_message,msg,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
);
} else {
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,(((((max_latency == null)) || ((earliest_message < (0))) || (cljs.core.empty_QMARK_.call(null,msgs))))?manifold_cljs.stream.take_BANG_.call(null,buf,new cljs.core.Keyword("manifold-cljs.stream","empty","manifold-cljs.stream/empty",-416244243)):manifold_cljs.stream.try_take_BANG_.call(null,buf,new cljs.core.Keyword("manifold-cljs.stream","empty","manifold-cljs.stream/empty",-416244243),(max_latency - (manifold_cljs.time.current_millis.call(null) - earliest_message)),new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479))),((function (msgs,size,earliest_message,last_message,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (msg){
var pred__23839 = cljs.core.keyword_identical_QMARK_;
var expr__23840 = msg;
if(cljs.core.truth_(pred__23839.call(null,new cljs.core.Keyword("manifold-cljs.stream","empty","manifold-cljs.stream/empty",-416244243),expr__23840))){
if(cljs.core.empty_QMARK_.call(null,msgs)){
} else {
manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msgs);
}

return manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);
} else {
if(cljs.core.truth_(pred__23839.call(null,new cljs.core.Keyword("manifold-cljs.stream","timeout","manifold-cljs.stream/timeout",-1410493479),expr__23840))){
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,((cljs.core.empty_QMARK_.call(null,msgs))?null:manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msgs)),((function (msgs,size,earliest_message,last_message,pred__23839,expr__23840,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (_){
return manifold_cljs.deferred.recur.call(null,cljs.core.PersistentVector.EMPTY,(0),(-1),(-1));
});})(msgs,size,earliest_message,last_message,pred__23839,expr__23840,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
);
} else {
var time = manifold_cljs.time.current_millis.call(null);
return manifold_cljs.deferred.recur.call(null,cljs.core.conj.call(null,msgs,msg),(size + metric.call(null,msg)),(((earliest_message < (0)))?time:earliest_message),time);
}
}
});})(msgs,size,earliest_message,last_message,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
);

}
}
}catch (e23838){if((e23838 instanceof Error)){
var e__22145__auto__ = e23838;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23838;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23832))){
var d__22137__auto__ = x23832;
var val23833 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23833)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23832),((function (msgs,size,earliest_message,last_message,err__22146__auto__,d__22137__auto__,val23833,x23832,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(msgs,size,earliest_message,last_message,err__22146__auto__,d__22137__auto__,val23833,x23832,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
,((function (msgs,size,earliest_message,last_message,err__22146__auto__,d__22137__auto__,val23833,x23832,result__22143__auto___23843,buf,s_SINGLEQUOTE_){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(msgs,size,earliest_message,last_message,err__22146__auto__,d__22137__auto__,val23833,x23832,result__22143__auto___23843,buf,s_SINGLEQUOTE_))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23833 instanceof manifold_cljs.deferred.Recur)){
var val23833__$1 = cljs.core.deref.call(null,val23833);
var G__23844 = cljs.core.nth.call(null,val23833__$1,(0));
var G__23845 = cljs.core.nth.call(null,val23833__$1,(1));
var G__23846 = cljs.core.nth.call(null,val23833__$1,(2));
var G__23847 = cljs.core.nth.call(null,val23833__$1,(3));
msgs = G__23844;
size = G__23845;
earliest_message = G__23846;
last_message = G__23847;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23833);
}
}
} else {
if((x23832 instanceof manifold_cljs.deferred.Recur)){
var G__23848 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23832),(0));
var G__23849 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23832),(1));
var G__23850 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23832),(2));
var G__23851 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23832),(3));
msgs = G__23848;
size = G__23849;
earliest_message = G__23850;
last_message = G__23851;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23832);

}
}
break;
}
});})(result__22143__auto___23843,buf,s_SINGLEQUOTE_))
.call(null,result__22143__auto___23843,cljs.core.PersistentVector.EMPTY,(0),(-1),(-1));


return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.batch.cljs$lang$maxFixedArity = 4;

/**
 * Limits the `max-rate` that messages are emitted, per second.
 * 
 * The `max-backlog` dictates how much "memory" the throttling mechanism has, or how many
 * messages it will emit immediately after a long interval without any messages.  By default,
 * this is set to one second's worth.
 */
manifold_cljs.stream.throttle = (function manifold_cljs$stream$throttle(var_args){
var G__23853 = arguments.length;
switch (G__23853) {
case 2:
return manifold_cljs.stream.throttle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.stream.throttle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.throttle.cljs$core$IFn$_invoke$arity$2 = (function (max_rate,s){
return manifold_cljs.stream.throttle.call(null,max_rate,max_rate,s);
});

manifold_cljs.stream.throttle.cljs$core$IFn$_invoke$arity$3 = (function (max_rate,max_backlog,s){
var buf = manifold_cljs.stream.stream.call(null);
var s_SINGLEQUOTE_ = manifold_cljs.stream.stream.call(null);
var period = ((1000) / max_rate);
manifold_cljs.stream.connect_via_proxy.call(null,s,buf,s_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),"throttle"], null)], null));

manifold_cljs.stream.on_closed.call(null,s_SINGLEQUOTE_,((function (buf,s_SINGLEQUOTE_,period){
return (function (){
return manifold_cljs.stream.close_BANG_.call(null,buf);
});})(buf,s_SINGLEQUOTE_,period))
);

var result__22143__auto___23860 = manifold_cljs.deferred.deferred.call(null);
((function (result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function manifold_cljs$stream$this__22144__auto__(result__22143__auto____$1,var23856,var23857){
var backlog = var23856;
var read_start = var23857;
while(true){
var x23854 = (function (){try{return manifold_cljs.deferred.chain.call(null,manifold_cljs.stream.take_BANG_.call(null,buf,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037)),((function (backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function (msg){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream","none","manifold-cljs.stream/none",-1697743037),msg)){
manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);

return false;
} else {
return manifold_cljs.stream.put_BANG_.call(null,s_SINGLEQUOTE_,msg);
}
});})(backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
,((function (backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function (result){
if(cljs.core.truth_(result)){
var elapsed = (manifold_cljs.time.current_millis.call(null) - read_start);
var backlog_SINGLEQUOTE_ = (function (){var x__4009__auto__ = (backlog + ((elapsed / period) - (1)));
var y__4010__auto__ = max_backlog;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
if(((1) <= backlog_SINGLEQUOTE_)){
return (backlog_SINGLEQUOTE_ - 1.0);
} else {
return manifold_cljs.deferred.timeout_BANG_.call(null,manifold_cljs.deferred.deferred.call(null),(period - elapsed),0.0);
}
} else {
return null;
}
});})(backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
,((function (backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function (backlog__$1){
if(cljs.core.truth_(backlog__$1)){
return manifold_cljs.deferred.recur.call(null,backlog__$1,manifold_cljs.time.current_millis.call(null));
} else {
return manifold_cljs.stream.close_BANG_.call(null,s_SINGLEQUOTE_);
}
});})(backlog,read_start,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
);
}catch (e23858){if((e23858 instanceof Error)){
var e__22145__auto__ = e23858;
manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,e__22145__auto__);

return null;
} else {
throw e23858;

}
}})();
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x23854))){
var d__22137__auto__ = x23854;
var val23855 = manifold_cljs.deferred.success_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val23855)){
var err__22146__auto__ = manifold_cljs.deferred.error_value.call(null,d__22137__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err__22146__auto__)){
return manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x23854),((function (backlog,read_start,err__22146__auto__,d__22137__auto__,val23855,x23854,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function (x__22147__auto__){
if((x__22147__auto__ instanceof manifold_cljs.deferred.Recur)){
return cljs.core.apply.call(null,manifold_cljs$stream$this__22144__auto__,result__22143__auto____$1,cljs.core.deref.call(null,x__22147__auto__));
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x__22147__auto__);
}
});})(backlog,read_start,err__22146__auto__,d__22137__auto__,val23855,x23854,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
,((function (backlog,read_start,err__22146__auto__,d__22137__auto__,val23855,x23854,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period){
return (function (err__22146__auto____$1){
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto____$1);
});})(backlog,read_start,err__22146__auto__,d__22137__auto__,val23855,x23854,result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,result__22143__auto____$1,err__22146__auto__);
}
} else {
if((val23855 instanceof manifold_cljs.deferred.Recur)){
var val23855__$1 = cljs.core.deref.call(null,val23855);
var G__23861 = cljs.core.nth.call(null,val23855__$1,(0));
var G__23862 = cljs.core.nth.call(null,val23855__$1,(1));
backlog = G__23861;
read_start = G__23862;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,val23855);
}
}
} else {
if((x23854 instanceof manifold_cljs.deferred.Recur)){
var G__23863 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23854),(0));
var G__23864 = cljs.core.nth.call(null,cljs.core.deref.call(null,x23854),(1));
backlog = G__23863;
read_start = G__23864;
continue;
} else {
return manifold_cljs.deferred.success_BANG_.call(null,result__22143__auto____$1,x23854);

}
}
break;
}
});})(result__22143__auto___23860,buf,s_SINGLEQUOTE_,period))
.call(null,result__22143__auto___23860,0.0,manifold_cljs.time.current_millis.call(null));


return manifold_cljs.stream.source_only.call(null,s_SINGLEQUOTE_);
});

manifold_cljs.stream.throttle.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stream.js.map?rel=1557582877284
