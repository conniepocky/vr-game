// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.stream.seq');
goog.require('cljs.core');
goog.require('manifold_cljs.impl.logging');
goog.require('manifold_cljs.deferred');
goog.require('manifold_cljs.utils');
goog.require('manifold_cljs.stream.core');
goog.require('manifold_cljs.stream.graph');
goog.require('manifold_cljs.time');

/**
* @constructor
 * @implements {manifold_cljs.stream.core.IEventSource}
 * @implements {manifold_cljs.stream.core.IEventStream}
*/
manifold_cljs.stream.seq.SeqSource = (function (s_ref,__isDrained,__drainedCallbacks){
this.s_ref = s_ref;
this.__isDrained = __isDrained;
this.__drainedCallbacks = __drainedCallbacks;
});
manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$downstream$arity$1 = (function (this__22291__auto__){
var self__ = this;
var this__22291__auto____$1 = this;
return manifold_cljs.stream.graph.downstream.call(null,this__22291__auto____$1);
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$weakHandle$arity$2 = (function (this__22291__auto__,ref_queue__22292__auto__){
var self__ = this;
var this__22291__auto____$1 = this;
return this__22291__auto____$1;
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$isSynchronous$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventStream$description$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"seq",new cljs.core.Keyword(null,"drained?","drained?",-1635967677),manifold_cljs.stream.core.drained_QMARK_.call(null,this$__$1)], null),(function (){var s = cljs.core.deref.call(null,self__.s_ref);
if(cljs.core.counted_QMARK_.call(null,s)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count.call(null,s)], null);
} else {
return null;
}
})());
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$isDrained$arity$1 = (function (this__22295__auto__){
var self__ = this;
var this__22295__auto____$1 = this;
return self__.__isDrained;
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$onDrained$arity$2 = (function (this__22295__auto__,callback__22296__auto__){
var self__ = this;
var this__22295__auto____$1 = this;
if(cljs.core.truth_(self__.__isDrained)){
return callback__22296__auto__.call(null);
} else {
return self__.__drainedCallbacks.push(callback__22296__auto__);
}
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$markDrained$arity$1 = (function (this__22295__auto__){
var self__ = this;
var this__22295__auto____$1 = this;
self__.__isDrained = true;

return manifold_cljs.utils.invoke_callbacks.call(null,self__.__drainedCallbacks);
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$connector$arity$2 = (function (this__22295__auto__,___22297__auto__){
var self__ = this;
var this__22295__auto____$1 = this;
return null;
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$take$arity$3 = (function (this$,default_val,blocking_QMARK_){
var self__ = this;
var this$__$1 = this;
var s = cljs.core.deref.call(null,self__.s_ref);
var v = (function (){try{if(cljs.core.empty_QMARK_.call(null,s)){
manifold_cljs.stream.core.markDrained.call(null,this$__$1);

return default_val;
} else {
var x = cljs.core.first.call(null,s);
cljs.core.swap_BANG_.call(null,self__.s_ref,cljs.core.rest);

return x;
}
}catch (e22805){if((e22805 instanceof Error)){
var e = e22805;
manifold_cljs.impl.logging.error.call(null,e,"error in seq stream");

manifold_cljs.stream.core.markDrained.call(null,this$__$1);

return default_val;
} else {
throw e22805;

}
}})();
return manifold_cljs.deferred.success_deferred.call(null,v);
});

manifold_cljs.stream.seq.SeqSource.prototype.manifold_cljs$stream$core$IEventSource$take$arity$5 = (function (this$,default_val,blocking_QMARK_,timeout,timeout_val){
var self__ = this;
var this$__$1 = this;
if((timeout == null)){
return manifold_cljs.stream.core.take.call(null,this$__$1,blocking_QMARK_,default_val);
} else {
return manifold_cljs.deferred.timeout_BANG_.call(null,manifold_cljs.stream.core.take.call(null,this$__$1,false,default_val),timeout,timeout_val);
}
});

manifold_cljs.stream.seq.SeqSource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s-ref","s-ref",1734966769,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__isDrained","__isDrained",936831003,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"__drainedCallbacks","__drainedCallbacks",-1356008764,null)], null);
});

manifold_cljs.stream.seq.SeqSource.cljs$lang$type = true;

manifold_cljs.stream.seq.SeqSource.cljs$lang$ctorStr = "manifold-cljs.stream.seq/SeqSource";

manifold_cljs.stream.seq.SeqSource.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.seq/SeqSource");
});

/**
 * Positional factory function for manifold-cljs.stream.seq/SeqSource.
 */
manifold_cljs.stream.seq.__GT_SeqSource = (function manifold_cljs$stream$seq$__GT_SeqSource(s_ref,__isDrained,__drainedCallbacks){
return (new manifold_cljs.stream.seq.SeqSource(s_ref,__isDrained,__drainedCallbacks));
});


manifold_cljs.stream.seq.__GT_SeqSource = (function manifold_cljs$stream$seq$__GT_SeqSource(s_ref){
return (new manifold_cljs.stream.seq.SeqSource(s_ref,false,manifold_cljs.impl.queue.queue.call(null)));
});
manifold_cljs.stream.seq.seq_source_QMARK_ = (function manifold_cljs$stream$seq$seq_source_QMARK_(s){
return ((cljs.core.seq_QMARK_.call(null,s)) || (cljs.core.seqable_QMARK_.call(null,s)));
});
manifold_cljs.stream.seq.to_source = (function manifold_cljs$stream$seq$to_source(s){
var s_SINGLEQUOTE_ = ((cljs.core.seq_QMARK_.call(null,s))?s:((cljs.core.seqable_QMARK_.call(null,s))?cljs.core.seq.call(null,s):(function(){throw cljs.core.ex_info.call(null,["Can't create a SeqSource from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,s))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null))})()
));
return manifold_cljs.stream.seq.__GT_SeqSource.call(null,cljs.core.atom.call(null,s_SINGLEQUOTE_));
});

//# sourceMappingURL=seq.js.map?rel=1557580546049
