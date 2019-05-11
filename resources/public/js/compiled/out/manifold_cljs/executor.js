// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.executor');
goog.require('cljs.core');
goog.require('goog.async.nextTick');

/**
 * @interface
 */
manifold_cljs.executor.Executor = function(){};

manifold_cljs.executor.execute = (function manifold_cljs$executor$execute(_,f){
if(((!((_ == null))) && (!((_.manifold_cljs$executor$Executor$execute$arity$2 == null))))){
return _.manifold_cljs$executor$Executor$execute$arity$2(_,f);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.executor.execute[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,f);
} else {
var m__4212__auto____$1 = (manifold_cljs.executor.execute["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"Executor.execute",_);
}
}
}
});

manifold_cljs.executor.sync_executor_instance = (function (){
if(typeof manifold_cljs.executor.t_manifold_cljs$executor21762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {manifold_cljs.executor.Executor}
 * @implements {cljs.core.IWithMeta}
*/
manifold_cljs.executor.t_manifold_cljs$executor21762 = (function (meta21763){
this.meta21763 = meta21763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.executor.t_manifold_cljs$executor21762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21764,meta21763__$1){
var self__ = this;
var _21764__$1 = this;
return (new manifold_cljs.executor.t_manifold_cljs$executor21762(meta21763__$1));
});

manifold_cljs.executor.t_manifold_cljs$executor21762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21764){
var self__ = this;
var _21764__$1 = this;
return self__.meta21763;
});

manifold_cljs.executor.t_manifold_cljs$executor21762.prototype.manifold_cljs$executor$Executor$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.executor.t_manifold_cljs$executor21762.prototype.manifold_cljs$executor$Executor$execute$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return f.call(null);
});

manifold_cljs.executor.t_manifold_cljs$executor21762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21763","meta21763",1620020134,null)], null);
});

manifold_cljs.executor.t_manifold_cljs$executor21762.cljs$lang$type = true;

manifold_cljs.executor.t_manifold_cljs$executor21762.cljs$lang$ctorStr = "manifold-cljs.executor/t_manifold_cljs$executor21762";

manifold_cljs.executor.t_manifold_cljs$executor21762.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.executor/t_manifold_cljs$executor21762");
});

/**
 * Positional factory function for manifold-cljs.executor/t_manifold_cljs$executor21762.
 */
manifold_cljs.executor.__GT_t_manifold_cljs$executor21762 = (function manifold_cljs$executor$__GT_t_manifold_cljs$executor21762(meta21763){
return (new manifold_cljs.executor.t_manifold_cljs$executor21762(meta21763));
});

}

return (new manifold_cljs.executor.t_manifold_cljs$executor21762(cljs.core.PersistentArrayMap.EMPTY));
})()
;
manifold_cljs.executor.sync_executor = (function manifold_cljs$executor$sync_executor(){
return manifold_cljs.executor.sync_executor_instance;
});
manifold_cljs.executor.timeout_executor = (function manifold_cljs$executor$timeout_executor(timeout_ms){
if(typeof manifold_cljs.executor.t_manifold_cljs$executor21765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {manifold_cljs.executor.Executor}
 * @implements {cljs.core.IWithMeta}
*/
manifold_cljs.executor.t_manifold_cljs$executor21765 = (function (timeout_ms,meta21766){
this.timeout_ms = timeout_ms;
this.meta21766 = meta21766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.executor.t_manifold_cljs$executor21765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21767,meta21766__$1){
var self__ = this;
var _21767__$1 = this;
return (new manifold_cljs.executor.t_manifold_cljs$executor21765(self__.timeout_ms,meta21766__$1));
});

manifold_cljs.executor.t_manifold_cljs$executor21765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21767){
var self__ = this;
var _21767__$1 = this;
return self__.meta21766;
});

manifold_cljs.executor.t_manifold_cljs$executor21765.prototype.manifold_cljs$executor$Executor$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.executor.t_manifold_cljs$executor21765.prototype.manifold_cljs$executor$Executor$execute$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return setTimeout(f,self__.timeout_ms);
});

manifold_cljs.executor.t_manifold_cljs$executor21765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"meta21766","meta21766",139785545,null)], null);
});

manifold_cljs.executor.t_manifold_cljs$executor21765.cljs$lang$type = true;

manifold_cljs.executor.t_manifold_cljs$executor21765.cljs$lang$ctorStr = "manifold-cljs.executor/t_manifold_cljs$executor21765";

manifold_cljs.executor.t_manifold_cljs$executor21765.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.executor/t_manifold_cljs$executor21765");
});

/**
 * Positional factory function for manifold-cljs.executor/t_manifold_cljs$executor21765.
 */
manifold_cljs.executor.__GT_t_manifold_cljs$executor21765 = (function manifold_cljs$executor$timeout_executor_$___GT_t_manifold_cljs$executor21765(timeout_ms__$1,meta21766){
return (new manifold_cljs.executor.t_manifold_cljs$executor21765(timeout_ms__$1,meta21766));
});

}

return (new manifold_cljs.executor.t_manifold_cljs$executor21765(timeout_ms,cljs.core.PersistentArrayMap.EMPTY));
});
manifold_cljs.executor.next_tick_executor_instance = ((typeof process !== 'undefined')?(function (){
if(typeof manifold_cljs.executor.t_manifold_cljs$executor21768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {manifold_cljs.executor.Executor}
 * @implements {cljs.core.IWithMeta}
*/
manifold_cljs.executor.t_manifold_cljs$executor21768 = (function (meta21769){
this.meta21769 = meta21769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.executor.t_manifold_cljs$executor21768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21770,meta21769__$1){
var self__ = this;
var _21770__$1 = this;
return (new manifold_cljs.executor.t_manifold_cljs$executor21768(meta21769__$1));
});

manifold_cljs.executor.t_manifold_cljs$executor21768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21770){
var self__ = this;
var _21770__$1 = this;
return self__.meta21769;
});

manifold_cljs.executor.t_manifold_cljs$executor21768.prototype.manifold_cljs$executor$Executor$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.executor.t_manifold_cljs$executor21768.prototype.manifold_cljs$executor$Executor$execute$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return process.nextTick(f);
});

manifold_cljs.executor.t_manifold_cljs$executor21768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21769","meta21769",1551113676,null)], null);
});

manifold_cljs.executor.t_manifold_cljs$executor21768.cljs$lang$type = true;

manifold_cljs.executor.t_manifold_cljs$executor21768.cljs$lang$ctorStr = "manifold-cljs.executor/t_manifold_cljs$executor21768";

manifold_cljs.executor.t_manifold_cljs$executor21768.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.executor/t_manifold_cljs$executor21768");
});

/**
 * Positional factory function for manifold-cljs.executor/t_manifold_cljs$executor21768.
 */
manifold_cljs.executor.__GT_t_manifold_cljs$executor21768 = (function manifold_cljs$executor$__GT_t_manifold_cljs$executor21768(meta21769){
return (new manifold_cljs.executor.t_manifold_cljs$executor21768(meta21769));
});

}

return (new manifold_cljs.executor.t_manifold_cljs$executor21768(cljs.core.PersistentArrayMap.EMPTY));
})()
:(function (){
if(typeof manifold_cljs.executor.t_manifold_cljs$executor21771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {manifold_cljs.executor.Executor}
 * @implements {cljs.core.IWithMeta}
*/
manifold_cljs.executor.t_manifold_cljs$executor21771 = (function (meta21772){
this.meta21772 = meta21772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.executor.t_manifold_cljs$executor21771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21773,meta21772__$1){
var self__ = this;
var _21773__$1 = this;
return (new manifold_cljs.executor.t_manifold_cljs$executor21771(meta21772__$1));
});

manifold_cljs.executor.t_manifold_cljs$executor21771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21773){
var self__ = this;
var _21773__$1 = this;
return self__.meta21772;
});

manifold_cljs.executor.t_manifold_cljs$executor21771.prototype.manifold_cljs$executor$Executor$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.executor.t_manifold_cljs$executor21771.prototype.manifold_cljs$executor$Executor$execute$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return goog.async.nextTick(f);
});

manifold_cljs.executor.t_manifold_cljs$executor21771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21772","meta21772",-1725532137,null)], null);
});

manifold_cljs.executor.t_manifold_cljs$executor21771.cljs$lang$type = true;

manifold_cljs.executor.t_manifold_cljs$executor21771.cljs$lang$ctorStr = "manifold-cljs.executor/t_manifold_cljs$executor21771";

manifold_cljs.executor.t_manifold_cljs$executor21771.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.executor/t_manifold_cljs$executor21771");
});

/**
 * Positional factory function for manifold-cljs.executor/t_manifold_cljs$executor21771.
 */
manifold_cljs.executor.__GT_t_manifold_cljs$executor21771 = (function manifold_cljs$executor$__GT_t_manifold_cljs$executor21771(meta21772){
return (new manifold_cljs.executor.t_manifold_cljs$executor21771(meta21772));
});

}

return (new manifold_cljs.executor.t_manifold_cljs$executor21771(cljs.core.PersistentArrayMap.EMPTY));
})()
);
manifold_cljs.executor.batched_executor = (function manifold_cljs$executor$batched_executor(underlying_executor,batch_size){
var buffer = [];
var running_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var queued_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var enqueue = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function manifold_cljs$executor$batched_executor_$_enqueue(){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,queued_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,running_QMARK_);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
cljs.core.vreset_BANG_.call(null,queued_QMARK_,true);

return manifold_cljs.executor.execute.call(null,underlying_executor,process);
}
});})(buffer,running_QMARK_,queued_QMARK_))
;
var process = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function manifold_cljs$executor$batched_executor_$_process(){
cljs.core.vreset_BANG_.call(null,running_QMARK_,true);

cljs.core.vreset_BANG_.call(null,queued_QMARK_,false);

var i_21777 = (0);
while(true){
var temp__5457__auto___21778 = buffer.pop();
if(cljs.core.truth_(temp__5457__auto___21778)){
var f_21779 = temp__5457__auto___21778;
f_21779.call(null);

if((i_21777 < batch_size)){
var G__21780 = (i_21777 + (1));
i_21777 = G__21780;
continue;
} else {
}
} else {
}
break;
}

cljs.core.vreset_BANG_.call(null,running_QMARK_,false);

if((buffer.length > (0))){
return enqueue.call(null);
} else {
return null;
}
});})(buffer,running_QMARK_,queued_QMARK_))
;
if(typeof manifold_cljs.executor.t_manifold_cljs$executor21774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {manifold_cljs.executor.Executor}
 * @implements {cljs.core.IWithMeta}
*/
manifold_cljs.executor.t_manifold_cljs$executor21774 = (function (underlying_executor,batch_size,buffer,running_QMARK_,queued_QMARK_,enqueue,process,meta21775){
this.underlying_executor = underlying_executor;
this.batch_size = batch_size;
this.buffer = buffer;
this.running_QMARK_ = running_QMARK_;
this.queued_QMARK_ = queued_QMARK_;
this.enqueue = enqueue;
this.process = process;
this.meta21775 = meta21775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.executor.t_manifold_cljs$executor21774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function (_21776,meta21775__$1){
var self__ = this;
var _21776__$1 = this;
return (new manifold_cljs.executor.t_manifold_cljs$executor21774(self__.underlying_executor,self__.batch_size,self__.buffer,self__.running_QMARK_,self__.queued_QMARK_,self__.enqueue,self__.process,meta21775__$1));
});})(buffer,running_QMARK_,queued_QMARK_))
;

manifold_cljs.executor.t_manifold_cljs$executor21774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function (_21776){
var self__ = this;
var _21776__$1 = this;
return self__.meta21775;
});})(buffer,running_QMARK_,queued_QMARK_))
;

manifold_cljs.executor.t_manifold_cljs$executor21774.prototype.manifold_cljs$executor$Executor$ = cljs.core.PROTOCOL_SENTINEL;

manifold_cljs.executor.t_manifold_cljs$executor21774.prototype.manifold_cljs$executor$Executor$execute$arity$2 = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function (_,f){
var self__ = this;
var ___$1 = this;
self__.buffer.unshift(f);

return self__.enqueue.call(null);
});})(buffer,running_QMARK_,queued_QMARK_))
;

manifold_cljs.executor.t_manifold_cljs$executor21774.getBasis = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"underlying-executor","underlying-executor",-1057724544,null),new cljs.core.Symbol(null,"batch-size","batch-size",-1450795034,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"running?","running?",1382646764,null),new cljs.core.Symbol(null,"queued?","queued?",2042335476,null),new cljs.core.Symbol(null,"enqueue","enqueue",1377000435,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"meta21775","meta21775",1937646635,null)], null);
});})(buffer,running_QMARK_,queued_QMARK_))
;

manifold_cljs.executor.t_manifold_cljs$executor21774.cljs$lang$type = true;

manifold_cljs.executor.t_manifold_cljs$executor21774.cljs$lang$ctorStr = "manifold-cljs.executor/t_manifold_cljs$executor21774";

manifold_cljs.executor.t_manifold_cljs$executor21774.cljs$lang$ctorPrWriter = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.executor/t_manifold_cljs$executor21774");
});})(buffer,running_QMARK_,queued_QMARK_))
;

/**
 * Positional factory function for manifold-cljs.executor/t_manifold_cljs$executor21774.
 */
manifold_cljs.executor.__GT_t_manifold_cljs$executor21774 = ((function (buffer,running_QMARK_,queued_QMARK_){
return (function manifold_cljs$executor$batched_executor_$___GT_t_manifold_cljs$executor21774(underlying_executor__$1,batch_size__$1,buffer__$1,running_QMARK___$1,queued_QMARK___$1,enqueue__$1,process__$1,meta21775){
return (new manifold_cljs.executor.t_manifold_cljs$executor21774(underlying_executor__$1,batch_size__$1,buffer__$1,running_QMARK___$1,queued_QMARK___$1,enqueue__$1,process__$1,meta21775));
});})(buffer,running_QMARK_,queued_QMARK_))
;

}

return (new manifold_cljs.executor.t_manifold_cljs$executor21774(underlying_executor,batch_size,buffer,running_QMARK_,queued_QMARK_,enqueue,process,cljs.core.PersistentArrayMap.EMPTY));
});
manifold_cljs.executor.execute_on_next_tick = (function manifold_cljs$executor$execute_on_next_tick(f){
return manifold_cljs.executor.execute.call(null,manifold_cljs.executor.next_tick_executor_instance,f);
});
manifold_cljs.executor.next_tick_executor = (function manifold_cljs$executor$next_tick_executor(){
return manifold_cljs.executor.next_tick_executor_instance;
});
manifold_cljs.executor.default_executor = manifold_cljs.executor.batched_executor.call(null,manifold_cljs.executor.next_tick_executor_instance,(1024));
manifold_cljs.executor.current_executor = manifold_cljs.executor.default_executor;
manifold_cljs.executor.executor = (function manifold_cljs$executor$executor(){
return manifold_cljs.executor.current_executor;
});

//# sourceMappingURL=executor.js.map?rel=1557580542261
