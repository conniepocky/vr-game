// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.stream.core');
goog.require('cljs.core');

/**
 * @interface
 */
manifold_cljs.stream.core.Sinkable = function(){};

/**
 * Provides a conversion mechanism to Manifold sinks.
 */
manifold_cljs.stream.core.to_sink = (function manifold_cljs$stream$core$to_sink(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$Sinkable$to_sink$arity$1 == null))))){
return _.manifold_cljs$stream$core$Sinkable$to_sink$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.to_sink[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.to_sink["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Sinkable.to-sink",_);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.stream.core.Sourceable = function(){};

/**
 * Provides a conversion mechanism to Manifold source.
 */
manifold_cljs.stream.core.to_source = (function manifold_cljs$stream$core$to_source(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$Sourceable$to_source$arity$1 == null))))){
return _.manifold_cljs$stream$core$Sourceable$to_source$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.to_source[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.to_source["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Sourceable.to-source",_);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.stream.core.IEventStream = function(){};

manifold_cljs.stream.core.description = (function manifold_cljs$stream$core$description(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventStream$description$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventStream$description$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.description[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.description["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.description",_);
}
}
}
});

manifold_cljs.stream.core.isSynchronous = (function manifold_cljs$stream$core$isSynchronous(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.isSynchronous[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.isSynchronous["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.isSynchronous",_);
}
}
}
});

manifold_cljs.stream.core.downstream = (function manifold_cljs$stream$core$downstream(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventStream$downstream$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventStream$downstream$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.downstream[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.downstream["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.downstream",_);
}
}
}
});

manifold_cljs.stream.core.weakHandle = (function manifold_cljs$stream$core$weakHandle(_,reference_queue){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 == null))))){
return _.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2(_,reference_queue);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.weakHandle[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,reference_queue);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.weakHandle["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,reference_queue);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.weakHandle",_);
}
}
}
});

manifold_cljs.stream.core.close = (function manifold_cljs$stream$core$close(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventStream$close$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventStream$close$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.close[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.close["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.close",_);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.stream.core.IEventSink = function(){};

manifold_cljs.stream.core.put = (function manifold_cljs$stream$core$put(var_args){
var G__22562 = arguments.length;
switch (G__22562) {
case 3:
return manifold_cljs.stream.core.put.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return manifold_cljs.stream.core.put.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.core.put.cljs$core$IFn$_invoke$arity$3 = (function (_,x,blocking_QMARK_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSink$put$arity$3 == null))))){
return _.manifold_cljs$stream$core$IEventSink$put$arity$3(_,x,blocking_QMARK_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.put[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,x,blocking_QMARK_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.put["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,x,blocking_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSink.put",_);
}
}
}
});

manifold_cljs.stream.core.put.cljs$core$IFn$_invoke$arity$5 = (function (_,x,blocking_QMARK_,timeout,timeout_val){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSink$put$arity$5 == null))))){
return _.manifold_cljs$stream$core$IEventSink$put$arity$5(_,x,blocking_QMARK_,timeout,timeout_val);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.put[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,x,blocking_QMARK_,timeout,timeout_val);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.put["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,x,blocking_QMARK_,timeout,timeout_val);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSink.put",_);
}
}
}
});

manifold_cljs.stream.core.put.cljs$lang$maxFixedArity = 5;


manifold_cljs.stream.core.markClosed = (function manifold_cljs$stream$core$markClosed(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSink$markClosed$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventSink$markClosed$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.markClosed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.markClosed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSink.markClosed",_);
}
}
}
});

manifold_cljs.stream.core.isClosed = (function manifold_cljs$stream$core$isClosed(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSink$isClosed$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventSink$isClosed$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.isClosed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.isClosed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSink.isClosed",_);
}
}
}
});

manifold_cljs.stream.core.onClosed = (function manifold_cljs$stream$core$onClosed(_,callback){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSink$onClosed$arity$2 == null))))){
return _.manifold_cljs$stream$core$IEventSink$onClosed$arity$2(_,callback);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.onClosed[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,callback);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.onClosed["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSink.onClosed",_);
}
}
}
});


/**
 * @interface
 */
manifold_cljs.stream.core.IEventSource = function(){};

manifold_cljs.stream.core.take = (function manifold_cljs$stream$core$take(var_args){
var G__22565 = arguments.length;
switch (G__22565) {
case 3:
return manifold_cljs.stream.core.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return manifold_cljs.stream.core.take.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.stream.core.take.cljs$core$IFn$_invoke$arity$3 = (function (_,default_val,blocking_QMARK_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$take$arity$3 == null))))){
return _.manifold_cljs$stream$core$IEventSource$take$arity$3(_,default_val,blocking_QMARK_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.take[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,default_val,blocking_QMARK_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.take["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,default_val,blocking_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.take",_);
}
}
}
});

manifold_cljs.stream.core.take.cljs$core$IFn$_invoke$arity$5 = (function (_,default_val,blocking_QMARK_,timeout,timeout_val){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$take$arity$5 == null))))){
return _.manifold_cljs$stream$core$IEventSource$take$arity$5(_,default_val,blocking_QMARK_,timeout,timeout_val);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.take[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,default_val,blocking_QMARK_,timeout,timeout_val);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.take["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,default_val,blocking_QMARK_,timeout,timeout_val);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.take",_);
}
}
}
});

manifold_cljs.stream.core.take.cljs$lang$maxFixedArity = 5;


manifold_cljs.stream.core.markDrained = (function manifold_cljs$stream$core$markDrained(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$markDrained$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventSource$markDrained$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.markDrained[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.markDrained["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.markDrained",_);
}
}
}
});

manifold_cljs.stream.core.isDrained = (function manifold_cljs$stream$core$isDrained(_){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 == null))))){
return _.manifold_cljs$stream$core$IEventSource$isDrained$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.isDrained[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.isDrained["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.isDrained",_);
}
}
}
});

manifold_cljs.stream.core.onDrained = (function manifold_cljs$stream$core$onDrained(_,callback){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 == null))))){
return _.manifold_cljs$stream$core$IEventSource$onDrained$arity$2(_,callback);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.onDrained[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,callback);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.onDrained["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.onDrained",_);
}
}
}
});

manifold_cljs.stream.core.connector = (function manifold_cljs$stream$core$connector(_,sink){
if(((!((_ == null))) && (!((_.manifold_cljs$stream$core$IEventSource$connector$arity$2 == null))))){
return _.manifold_cljs$stream$core$IEventSource$connector$arity$2(_,sink);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.stream.core.connector[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,sink);
} else {
var m__4212__auto____$1 = (manifold_cljs.stream.core.connector["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,sink);
} else {
throw cljs.core.missing_protocol.call(null,"IEventSource.connector",_);
}
}
}
});

/**
 * Closes an event sink, so that it can't accept any more messages.
 */
manifold_cljs.stream.core.close_BANG_ = (function manifold_cljs$stream$core$close_BANG_(sink){
return manifold_cljs.stream.core.close.call(null,sink);
});
/**
 * Returns true if the event sink is closed.
 */
manifold_cljs.stream.core.closed_QMARK_ = (function manifold_cljs$stream$core$closed_QMARK_(sink){
return manifold_cljs.stream.core.isClosed.call(null,sink);
});
/**
 * Returns true if the event source is drained.
 */
manifold_cljs.stream.core.drained_QMARK_ = (function manifold_cljs$stream$core$drained_QMARK_(source){
return manifold_cljs.stream.core.isDrained.call(null,source);
});
/**
 * Returns a weak reference that can be used to construct topologies of streams.
 */
manifold_cljs.stream.core.weak_handle = (function manifold_cljs$stream$core$weak_handle(x){
return manifold_cljs.stream.core.weakHandle.call(null,x,null);
});
/**
 * Returns true if the underlying abstraction behaves synchronously, using thread blocking
 * to provide backpressure.
 */
manifold_cljs.stream.core.synchronous_QMARK_ = (function manifold_cljs$stream$core$synchronous_QMARK_(x){
return manifold_cljs.stream.core.isSynchronous.call(null,x);
});

//# sourceMappingURL=core.js.map?rel=1557582873104
