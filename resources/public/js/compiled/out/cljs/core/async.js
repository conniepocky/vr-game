// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27711 = arguments.length;
switch (G__27711) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27712 = (function (f,blockable,meta27713){
this.f = f;
this.blockable = blockable;
this.meta27713 = meta27713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27714,meta27713__$1){
var self__ = this;
var _27714__$1 = this;
return (new cljs.core.async.t_cljs$core$async27712(self__.f,self__.blockable,meta27713__$1));
});

cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27714){
var self__ = this;
var _27714__$1 = this;
return self__.meta27713;
});

cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27713","meta27713",1076740491,null)], null);
});

cljs.core.async.t_cljs$core$async27712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27712";

cljs.core.async.t_cljs$core$async27712.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27712");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27712.
 */
cljs.core.async.__GT_t_cljs$core$async27712 = (function cljs$core$async$__GT_t_cljs$core$async27712(f__$1,blockable__$1,meta27713){
return (new cljs.core.async.t_cljs$core$async27712(f__$1,blockable__$1,meta27713));
});

}

return (new cljs.core.async.t_cljs$core$async27712(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27718 = arguments.length;
switch (G__27718) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27721 = arguments.length;
switch (G__27721) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27724 = arguments.length;
switch (G__27724) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27726 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27726);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27726,ret){
return (function (){
return fn1.call(null,val_27726);
});})(val_27726,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27728 = arguments.length;
switch (G__27728) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27730 = n;
var x_27731 = (0);
while(true){
if((x_27731 < n__4376__auto___27730)){
(a[x_27731] = (0));

var G__27732 = (x_27731 + (1));
x_27731 = G__27732;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27733 = (i + (1));
i = G__27733;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27734 = (function (flag,meta27735){
this.flag = flag;
this.meta27735 = meta27735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27736,meta27735__$1){
var self__ = this;
var _27736__$1 = this;
return (new cljs.core.async.t_cljs$core$async27734(self__.flag,meta27735__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27736){
var self__ = this;
var _27736__$1 = this;
return self__.meta27735;
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27735","meta27735",1196055216,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27734";

cljs.core.async.t_cljs$core$async27734.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27734");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27734.
 */
cljs.core.async.__GT_t_cljs$core$async27734 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27734(flag__$1,meta27735){
return (new cljs.core.async.t_cljs$core$async27734(flag__$1,meta27735));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27734(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27737 = (function (flag,cb,meta27738){
this.flag = flag;
this.cb = cb;
this.meta27738 = meta27738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27739,meta27738__$1){
var self__ = this;
var _27739__$1 = this;
return (new cljs.core.async.t_cljs$core$async27737(self__.flag,self__.cb,meta27738__$1));
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27739){
var self__ = this;
var _27739__$1 = this;
return self__.meta27738;
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27738","meta27738",-1373350215,null)], null);
});

cljs.core.async.t_cljs$core$async27737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27737";

cljs.core.async.t_cljs$core$async27737.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27737.
 */
cljs.core.async.__GT_t_cljs$core$async27737 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27737(flag__$1,cb__$1,meta27738){
return (new cljs.core.async.t_cljs$core$async27737(flag__$1,cb__$1,meta27738));
});

}

return (new cljs.core.async.t_cljs$core$async27737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27740_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27741_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27742 = (i + (1));
i = G__27742;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27748 = arguments.length;
var i__4500__auto___27749 = (0);
while(true){
if((i__4500__auto___27749 < len__4499__auto___27748)){
args__4502__auto__.push((arguments[i__4500__auto___27749]));

var G__27750 = (i__4500__auto___27749 + (1));
i__4500__auto___27749 = G__27750;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27745){
var map__27746 = p__27745;
var map__27746__$1 = ((((!((map__27746 == null)))?(((((map__27746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27746):map__27746);
var opts = map__27746__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27743){
var G__27744 = cljs.core.first.call(null,seq27743);
var seq27743__$1 = cljs.core.next.call(null,seq27743);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27744,seq27743__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27752 = arguments.length;
switch (G__27752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27651__auto___27798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___27798){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___27798){
return (function (state_27776){
var state_val_27777 = (state_27776[(1)]);
if((state_val_27777 === (7))){
var inst_27772 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27778_27799 = state_27776__$1;
(statearr_27778_27799[(2)] = inst_27772);

(statearr_27778_27799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (1))){
var state_27776__$1 = state_27776;
var statearr_27779_27800 = state_27776__$1;
(statearr_27779_27800[(2)] = null);

(statearr_27779_27800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (4))){
var inst_27755 = (state_27776[(7)]);
var inst_27755__$1 = (state_27776[(2)]);
var inst_27756 = (inst_27755__$1 == null);
var state_27776__$1 = (function (){var statearr_27780 = state_27776;
(statearr_27780[(7)] = inst_27755__$1);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27756)){
var statearr_27781_27801 = state_27776__$1;
(statearr_27781_27801[(1)] = (5));

} else {
var statearr_27782_27802 = state_27776__$1;
(statearr_27782_27802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (13))){
var state_27776__$1 = state_27776;
var statearr_27783_27803 = state_27776__$1;
(statearr_27783_27803[(2)] = null);

(statearr_27783_27803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (6))){
var inst_27755 = (state_27776[(7)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27776__$1,(11),to,inst_27755);
} else {
if((state_val_27777 === (3))){
var inst_27774 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27776__$1,inst_27774);
} else {
if((state_val_27777 === (12))){
var state_27776__$1 = state_27776;
var statearr_27784_27804 = state_27776__$1;
(statearr_27784_27804[(2)] = null);

(statearr_27784_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (2))){
var state_27776__$1 = state_27776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27776__$1,(4),from);
} else {
if((state_val_27777 === (11))){
var inst_27765 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
if(cljs.core.truth_(inst_27765)){
var statearr_27785_27805 = state_27776__$1;
(statearr_27785_27805[(1)] = (12));

} else {
var statearr_27786_27806 = state_27776__$1;
(statearr_27786_27806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (9))){
var state_27776__$1 = state_27776;
var statearr_27787_27807 = state_27776__$1;
(statearr_27787_27807[(2)] = null);

(statearr_27787_27807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (5))){
var state_27776__$1 = state_27776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27788_27808 = state_27776__$1;
(statearr_27788_27808[(1)] = (8));

} else {
var statearr_27789_27809 = state_27776__$1;
(statearr_27789_27809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (14))){
var inst_27770 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27790_27810 = state_27776__$1;
(statearr_27790_27810[(2)] = inst_27770);

(statearr_27790_27810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (10))){
var inst_27762 = (state_27776[(2)]);
var state_27776__$1 = state_27776;
var statearr_27791_27811 = state_27776__$1;
(statearr_27791_27811[(2)] = inst_27762);

(statearr_27791_27811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27777 === (8))){
var inst_27759 = cljs.core.async.close_BANG_.call(null,to);
var state_27776__$1 = state_27776;
var statearr_27792_27812 = state_27776__$1;
(statearr_27792_27812[(2)] = inst_27759);

(statearr_27792_27812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___27798))
;
return ((function (switch__27561__auto__,c__27651__auto___27798){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_27793 = [null,null,null,null,null,null,null,null];
(statearr_27793[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_27793[(1)] = (1));

return statearr_27793;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_27776){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object)){
var ex__27565__auto__ = e27794;
var statearr_27795_27813 = state_27776;
(statearr_27795_27813[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27814 = state_27776;
state_27776 = G__27814;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_27776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_27776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___27798))
})();
var state__27653__auto__ = (function (){var statearr_27796 = f__27652__auto__.call(null);
(statearr_27796[(6)] = c__27651__auto___27798);

return statearr_27796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___27798))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27815){
var vec__27816 = p__27815;
var v = cljs.core.nth.call(null,vec__27816,(0),null);
var p = cljs.core.nth.call(null,vec__27816,(1),null);
var job = vec__27816;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27651__auto___27987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results){
return (function (state_27823){
var state_val_27824 = (state_27823[(1)]);
if((state_val_27824 === (1))){
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27823__$1,(2),res,v);
} else {
if((state_val_27824 === (2))){
var inst_27820 = (state_27823[(2)]);
var inst_27821 = cljs.core.async.close_BANG_.call(null,res);
var state_27823__$1 = (function (){var statearr_27825 = state_27823;
(statearr_27825[(7)] = inst_27820);

return statearr_27825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27823__$1,inst_27821);
} else {
return null;
}
}
});})(c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results))
;
return ((function (switch__27561__auto__,c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_27826 = [null,null,null,null,null,null,null,null];
(statearr_27826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__);

(statearr_27826[(1)] = (1));

return statearr_27826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1 = (function (state_27823){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27827){if((e27827 instanceof Object)){
var ex__27565__auto__ = e27827;
var statearr_27828_27988 = state_27823;
(statearr_27828_27988[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27989 = state_27823;
state_27823 = G__27989;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = function(state_27823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1.call(this,state_27823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results))
})();
var state__27653__auto__ = (function (){var statearr_27829 = f__27652__auto__.call(null);
(statearr_27829[(6)] = c__27651__auto___27987);

return statearr_27829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___27987,res,vec__27816,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27830){
var vec__27831 = p__27830;
var v = cljs.core.nth.call(null,vec__27831,(0),null);
var p = cljs.core.nth.call(null,vec__27831,(1),null);
var job = vec__27831;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27990 = n;
var __27991 = (0);
while(true){
if((__27991 < n__4376__auto___27990)){
var G__27834_27992 = type;
var G__27834_27993__$1 = (((G__27834_27992 instanceof cljs.core.Keyword))?G__27834_27992.fqn:null);
switch (G__27834_27993__$1) {
case "compute":
var c__27651__auto___27995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27991,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (__27991,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function (state_27847){
var state_val_27848 = (state_27847[(1)]);
if((state_val_27848 === (1))){
var state_27847__$1 = state_27847;
var statearr_27849_27996 = state_27847__$1;
(statearr_27849_27996[(2)] = null);

(statearr_27849_27996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (2))){
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,(4),jobs);
} else {
if((state_val_27848 === (3))){
var inst_27845 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27847__$1,inst_27845);
} else {
if((state_val_27848 === (4))){
var inst_27837 = (state_27847[(2)]);
var inst_27838 = process.call(null,inst_27837);
var state_27847__$1 = state_27847;
if(cljs.core.truth_(inst_27838)){
var statearr_27850_27997 = state_27847__$1;
(statearr_27850_27997[(1)] = (5));

} else {
var statearr_27851_27998 = state_27847__$1;
(statearr_27851_27998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (5))){
var state_27847__$1 = state_27847;
var statearr_27852_27999 = state_27847__$1;
(statearr_27852_27999[(2)] = null);

(statearr_27852_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (6))){
var state_27847__$1 = state_27847;
var statearr_27853_28000 = state_27847__$1;
(statearr_27853_28000[(2)] = null);

(statearr_27853_28000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (7))){
var inst_27843 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27854_28001 = state_27847__$1;
(statearr_27854_28001[(2)] = inst_27843);

(statearr_27854_28001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27991,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
;
return ((function (__27991,switch__27561__auto__,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_27855 = [null,null,null,null,null,null,null];
(statearr_27855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__);

(statearr_27855[(1)] = (1));

return statearr_27855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1 = (function (state_27847){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27856){if((e27856 instanceof Object)){
var ex__27565__auto__ = e27856;
var statearr_27857_28002 = state_27847;
(statearr_27857_28002[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28003 = state_27847;
state_27847 = G__28003;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = function(state_27847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1.call(this,state_27847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__;
})()
;})(__27991,switch__27561__auto__,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
})();
var state__27653__auto__ = (function (){var statearr_27858 = f__27652__auto__.call(null);
(statearr_27858[(6)] = c__27651__auto___27995);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(__27991,c__27651__auto___27995,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
);


break;
case "async":
var c__27651__auto___28004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27991,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (__27991,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function (state_27871){
var state_val_27872 = (state_27871[(1)]);
if((state_val_27872 === (1))){
var state_27871__$1 = state_27871;
var statearr_27873_28005 = state_27871__$1;
(statearr_27873_28005[(2)] = null);

(statearr_27873_28005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (2))){
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(4),jobs);
} else {
if((state_val_27872 === (3))){
var inst_27869 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27871__$1,inst_27869);
} else {
if((state_val_27872 === (4))){
var inst_27861 = (state_27871[(2)]);
var inst_27862 = async.call(null,inst_27861);
var state_27871__$1 = state_27871;
if(cljs.core.truth_(inst_27862)){
var statearr_27874_28006 = state_27871__$1;
(statearr_27874_28006[(1)] = (5));

} else {
var statearr_27875_28007 = state_27871__$1;
(statearr_27875_28007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (5))){
var state_27871__$1 = state_27871;
var statearr_27876_28008 = state_27871__$1;
(statearr_27876_28008[(2)] = null);

(statearr_27876_28008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (6))){
var state_27871__$1 = state_27871;
var statearr_27877_28009 = state_27871__$1;
(statearr_27877_28009[(2)] = null);

(statearr_27877_28009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (7))){
var inst_27867 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27878_28010 = state_27871__$1;
(statearr_27878_28010[(2)] = inst_27867);

(statearr_27878_28010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27991,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
;
return ((function (__27991,switch__27561__auto__,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_27879 = [null,null,null,null,null,null,null];
(statearr_27879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__);

(statearr_27879[(1)] = (1));

return statearr_27879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1 = (function (state_27871){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27880){if((e27880 instanceof Object)){
var ex__27565__auto__ = e27880;
var statearr_27881_28011 = state_27871;
(statearr_27881_28011[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27871;
state_27871 = G__28012;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = function(state_27871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1.call(this,state_27871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__;
})()
;})(__27991,switch__27561__auto__,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
})();
var state__27653__auto__ = (function (){var statearr_27882 = f__27652__auto__.call(null);
(statearr_27882[(6)] = c__27651__auto___28004);

return statearr_27882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(__27991,c__27651__auto___28004,G__27834_27992,G__27834_27993__$1,n__4376__auto___27990,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27834_27993__$1)].join('')));

}

var G__28013 = (__27991 + (1));
__27991 = G__28013;
continue;
} else {
}
break;
}

var c__27651__auto___28014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28014,jobs,results,process,async){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28014,jobs,results,process,async){
return (function (state_27904){
var state_val_27905 = (state_27904[(1)]);
if((state_val_27905 === (1))){
var state_27904__$1 = state_27904;
var statearr_27906_28015 = state_27904__$1;
(statearr_27906_28015[(2)] = null);

(statearr_27906_28015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (2))){
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27904__$1,(4),from);
} else {
if((state_val_27905 === (3))){
var inst_27902 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27904__$1,inst_27902);
} else {
if((state_val_27905 === (4))){
var inst_27885 = (state_27904[(7)]);
var inst_27885__$1 = (state_27904[(2)]);
var inst_27886 = (inst_27885__$1 == null);
var state_27904__$1 = (function (){var statearr_27907 = state_27904;
(statearr_27907[(7)] = inst_27885__$1);

return statearr_27907;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_27908_28016 = state_27904__$1;
(statearr_27908_28016[(1)] = (5));

} else {
var statearr_27909_28017 = state_27904__$1;
(statearr_27909_28017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (5))){
var inst_27888 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27904__$1 = state_27904;
var statearr_27910_28018 = state_27904__$1;
(statearr_27910_28018[(2)] = inst_27888);

(statearr_27910_28018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (6))){
var inst_27890 = (state_27904[(8)]);
var inst_27885 = (state_27904[(7)]);
var inst_27890__$1 = cljs.core.async.chan.call(null,(1));
var inst_27891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27892 = [inst_27885,inst_27890__$1];
var inst_27893 = (new cljs.core.PersistentVector(null,2,(5),inst_27891,inst_27892,null));
var state_27904__$1 = (function (){var statearr_27911 = state_27904;
(statearr_27911[(8)] = inst_27890__$1);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27904__$1,(8),jobs,inst_27893);
} else {
if((state_val_27905 === (7))){
var inst_27900 = (state_27904[(2)]);
var state_27904__$1 = state_27904;
var statearr_27912_28019 = state_27904__$1;
(statearr_27912_28019[(2)] = inst_27900);

(statearr_27912_28019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27905 === (8))){
var inst_27890 = (state_27904[(8)]);
var inst_27895 = (state_27904[(2)]);
var state_27904__$1 = (function (){var statearr_27913 = state_27904;
(statearr_27913[(9)] = inst_27895);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27904__$1,(9),results,inst_27890);
} else {
if((state_val_27905 === (9))){
var inst_27897 = (state_27904[(2)]);
var state_27904__$1 = (function (){var statearr_27914 = state_27904;
(statearr_27914[(10)] = inst_27897);

return statearr_27914;
})();
var statearr_27915_28020 = state_27904__$1;
(statearr_27915_28020[(2)] = null);

(statearr_27915_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28014,jobs,results,process,async))
;
return ((function (switch__27561__auto__,c__27651__auto___28014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1 = (function (state_27904){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__27565__auto__ = e27917;
var statearr_27918_28021 = state_27904;
(statearr_27918_28021[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28022 = state_27904;
state_27904 = G__28022;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = function(state_27904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1.call(this,state_27904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28014,jobs,results,process,async))
})();
var state__27653__auto__ = (function (){var statearr_27919 = f__27652__auto__.call(null);
(statearr_27919[(6)] = c__27651__auto___28014);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28014,jobs,results,process,async))
);


var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__,jobs,results,process,async){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__,jobs,results,process,async){
return (function (state_27957){
var state_val_27958 = (state_27957[(1)]);
if((state_val_27958 === (7))){
var inst_27953 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27959_28023 = state_27957__$1;
(statearr_27959_28023[(2)] = inst_27953);

(statearr_27959_28023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (20))){
var state_27957__$1 = state_27957;
var statearr_27960_28024 = state_27957__$1;
(statearr_27960_28024[(2)] = null);

(statearr_27960_28024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (1))){
var state_27957__$1 = state_27957;
var statearr_27961_28025 = state_27957__$1;
(statearr_27961_28025[(2)] = null);

(statearr_27961_28025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (4))){
var inst_27922 = (state_27957[(7)]);
var inst_27922__$1 = (state_27957[(2)]);
var inst_27923 = (inst_27922__$1 == null);
var state_27957__$1 = (function (){var statearr_27962 = state_27957;
(statearr_27962[(7)] = inst_27922__$1);

return statearr_27962;
})();
if(cljs.core.truth_(inst_27923)){
var statearr_27963_28026 = state_27957__$1;
(statearr_27963_28026[(1)] = (5));

} else {
var statearr_27964_28027 = state_27957__$1;
(statearr_27964_28027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (15))){
var inst_27935 = (state_27957[(8)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27957__$1,(18),to,inst_27935);
} else {
if((state_val_27958 === (21))){
var inst_27948 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27965_28028 = state_27957__$1;
(statearr_27965_28028[(2)] = inst_27948);

(statearr_27965_28028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (13))){
var inst_27950 = (state_27957[(2)]);
var state_27957__$1 = (function (){var statearr_27966 = state_27957;
(statearr_27966[(9)] = inst_27950);

return statearr_27966;
})();
var statearr_27967_28029 = state_27957__$1;
(statearr_27967_28029[(2)] = null);

(statearr_27967_28029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (6))){
var inst_27922 = (state_27957[(7)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(11),inst_27922);
} else {
if((state_val_27958 === (17))){
var inst_27943 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
if(cljs.core.truth_(inst_27943)){
var statearr_27968_28030 = state_27957__$1;
(statearr_27968_28030[(1)] = (19));

} else {
var statearr_27969_28031 = state_27957__$1;
(statearr_27969_28031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (3))){
var inst_27955 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27957__$1,inst_27955);
} else {
if((state_val_27958 === (12))){
var inst_27932 = (state_27957[(10)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(14),inst_27932);
} else {
if((state_val_27958 === (2))){
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(4),results);
} else {
if((state_val_27958 === (19))){
var state_27957__$1 = state_27957;
var statearr_27970_28032 = state_27957__$1;
(statearr_27970_28032[(2)] = null);

(statearr_27970_28032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (11))){
var inst_27932 = (state_27957[(2)]);
var state_27957__$1 = (function (){var statearr_27971 = state_27957;
(statearr_27971[(10)] = inst_27932);

return statearr_27971;
})();
var statearr_27972_28033 = state_27957__$1;
(statearr_27972_28033[(2)] = null);

(statearr_27972_28033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (9))){
var state_27957__$1 = state_27957;
var statearr_27973_28034 = state_27957__$1;
(statearr_27973_28034[(2)] = null);

(statearr_27973_28034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (5))){
var state_27957__$1 = state_27957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27974_28035 = state_27957__$1;
(statearr_27974_28035[(1)] = (8));

} else {
var statearr_27975_28036 = state_27957__$1;
(statearr_27975_28036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (14))){
var inst_27937 = (state_27957[(11)]);
var inst_27935 = (state_27957[(8)]);
var inst_27935__$1 = (state_27957[(2)]);
var inst_27936 = (inst_27935__$1 == null);
var inst_27937__$1 = cljs.core.not.call(null,inst_27936);
var state_27957__$1 = (function (){var statearr_27976 = state_27957;
(statearr_27976[(11)] = inst_27937__$1);

(statearr_27976[(8)] = inst_27935__$1);

return statearr_27976;
})();
if(inst_27937__$1){
var statearr_27977_28037 = state_27957__$1;
(statearr_27977_28037[(1)] = (15));

} else {
var statearr_27978_28038 = state_27957__$1;
(statearr_27978_28038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (16))){
var inst_27937 = (state_27957[(11)]);
var state_27957__$1 = state_27957;
var statearr_27979_28039 = state_27957__$1;
(statearr_27979_28039[(2)] = inst_27937);

(statearr_27979_28039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (10))){
var inst_27929 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27980_28040 = state_27957__$1;
(statearr_27980_28040[(2)] = inst_27929);

(statearr_27980_28040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (18))){
var inst_27940 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27981_28041 = state_27957__$1;
(statearr_27981_28041[(2)] = inst_27940);

(statearr_27981_28041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (8))){
var inst_27926 = cljs.core.async.close_BANG_.call(null,to);
var state_27957__$1 = state_27957;
var statearr_27982_28042 = state_27957__$1;
(statearr_27982_28042[(2)] = inst_27926);

(statearr_27982_28042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__,jobs,results,process,async))
;
return ((function (switch__27561__auto__,c__27651__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1 = (function (state_27957){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_27957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__27565__auto__ = e27984;
var statearr_27985_28043 = state_27957;
(statearr_27985_28043[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28044 = state_27957;
state_27957 = G__28044;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__ = function(state_27957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1.call(this,state_27957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__,jobs,results,process,async))
})();
var state__27653__auto__ = (function (){var statearr_27986 = f__27652__auto__.call(null);
(statearr_27986[(6)] = c__27651__auto__);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__,jobs,results,process,async))
);

return c__27651__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28046 = arguments.length;
switch (G__28046) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28049 = arguments.length;
switch (G__28049) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28052 = arguments.length;
switch (G__28052) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27651__auto___28101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28101,tc,fc){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28101,tc,fc){
return (function (state_28078){
var state_val_28079 = (state_28078[(1)]);
if((state_val_28079 === (7))){
var inst_28074 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28080_28102 = state_28078__$1;
(statearr_28080_28102[(2)] = inst_28074);

(statearr_28080_28102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (1))){
var state_28078__$1 = state_28078;
var statearr_28081_28103 = state_28078__$1;
(statearr_28081_28103[(2)] = null);

(statearr_28081_28103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (4))){
var inst_28055 = (state_28078[(7)]);
var inst_28055__$1 = (state_28078[(2)]);
var inst_28056 = (inst_28055__$1 == null);
var state_28078__$1 = (function (){var statearr_28082 = state_28078;
(statearr_28082[(7)] = inst_28055__$1);

return statearr_28082;
})();
if(cljs.core.truth_(inst_28056)){
var statearr_28083_28104 = state_28078__$1;
(statearr_28083_28104[(1)] = (5));

} else {
var statearr_28084_28105 = state_28078__$1;
(statearr_28084_28105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (13))){
var state_28078__$1 = state_28078;
var statearr_28085_28106 = state_28078__$1;
(statearr_28085_28106[(2)] = null);

(statearr_28085_28106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (6))){
var inst_28055 = (state_28078[(7)]);
var inst_28061 = p.call(null,inst_28055);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28061)){
var statearr_28086_28107 = state_28078__$1;
(statearr_28086_28107[(1)] = (9));

} else {
var statearr_28087_28108 = state_28078__$1;
(statearr_28087_28108[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (3))){
var inst_28076 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28078__$1,inst_28076);
} else {
if((state_val_28079 === (12))){
var state_28078__$1 = state_28078;
var statearr_28088_28109 = state_28078__$1;
(statearr_28088_28109[(2)] = null);

(statearr_28088_28109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (2))){
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(4),ch);
} else {
if((state_val_28079 === (11))){
var inst_28055 = (state_28078[(7)]);
var inst_28065 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28078__$1,(8),inst_28065,inst_28055);
} else {
if((state_val_28079 === (9))){
var state_28078__$1 = state_28078;
var statearr_28089_28110 = state_28078__$1;
(statearr_28089_28110[(2)] = tc);

(statearr_28089_28110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (5))){
var inst_28058 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28059 = cljs.core.async.close_BANG_.call(null,fc);
var state_28078__$1 = (function (){var statearr_28090 = state_28078;
(statearr_28090[(8)] = inst_28058);

return statearr_28090;
})();
var statearr_28091_28111 = state_28078__$1;
(statearr_28091_28111[(2)] = inst_28059);

(statearr_28091_28111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (14))){
var inst_28072 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28092_28112 = state_28078__$1;
(statearr_28092_28112[(2)] = inst_28072);

(statearr_28092_28112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (10))){
var state_28078__$1 = state_28078;
var statearr_28093_28113 = state_28078__$1;
(statearr_28093_28113[(2)] = fc);

(statearr_28093_28113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (8))){
var inst_28067 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28067)){
var statearr_28094_28114 = state_28078__$1;
(statearr_28094_28114[(1)] = (12));

} else {
var statearr_28095_28115 = state_28078__$1;
(statearr_28095_28115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28101,tc,fc))
;
return ((function (switch__27561__auto__,c__27651__auto___28101,tc,fc){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_28096 = [null,null,null,null,null,null,null,null,null];
(statearr_28096[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_28096[(1)] = (1));

return statearr_28096;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_28078){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28097){if((e28097 instanceof Object)){
var ex__27565__auto__ = e28097;
var statearr_28098_28116 = state_28078;
(statearr_28098_28116[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28117 = state_28078;
state_28078 = G__28117;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_28078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_28078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28101,tc,fc))
})();
var state__27653__auto__ = (function (){var statearr_28099 = f__27652__auto__.call(null);
(statearr_28099[(6)] = c__27651__auto___28101);

return statearr_28099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28101,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__){
return (function (state_28138){
var state_val_28139 = (state_28138[(1)]);
if((state_val_28139 === (7))){
var inst_28134 = (state_28138[(2)]);
var state_28138__$1 = state_28138;
var statearr_28140_28158 = state_28138__$1;
(statearr_28140_28158[(2)] = inst_28134);

(statearr_28140_28158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (1))){
var inst_28118 = init;
var state_28138__$1 = (function (){var statearr_28141 = state_28138;
(statearr_28141[(7)] = inst_28118);

return statearr_28141;
})();
var statearr_28142_28159 = state_28138__$1;
(statearr_28142_28159[(2)] = null);

(statearr_28142_28159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (4))){
var inst_28121 = (state_28138[(8)]);
var inst_28121__$1 = (state_28138[(2)]);
var inst_28122 = (inst_28121__$1 == null);
var state_28138__$1 = (function (){var statearr_28143 = state_28138;
(statearr_28143[(8)] = inst_28121__$1);

return statearr_28143;
})();
if(cljs.core.truth_(inst_28122)){
var statearr_28144_28160 = state_28138__$1;
(statearr_28144_28160[(1)] = (5));

} else {
var statearr_28145_28161 = state_28138__$1;
(statearr_28145_28161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (6))){
var inst_28118 = (state_28138[(7)]);
var inst_28121 = (state_28138[(8)]);
var inst_28125 = (state_28138[(9)]);
var inst_28125__$1 = f.call(null,inst_28118,inst_28121);
var inst_28126 = cljs.core.reduced_QMARK_.call(null,inst_28125__$1);
var state_28138__$1 = (function (){var statearr_28146 = state_28138;
(statearr_28146[(9)] = inst_28125__$1);

return statearr_28146;
})();
if(inst_28126){
var statearr_28147_28162 = state_28138__$1;
(statearr_28147_28162[(1)] = (8));

} else {
var statearr_28148_28163 = state_28138__$1;
(statearr_28148_28163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (3))){
var inst_28136 = (state_28138[(2)]);
var state_28138__$1 = state_28138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28138__$1,inst_28136);
} else {
if((state_val_28139 === (2))){
var state_28138__$1 = state_28138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28138__$1,(4),ch);
} else {
if((state_val_28139 === (9))){
var inst_28125 = (state_28138[(9)]);
var inst_28118 = inst_28125;
var state_28138__$1 = (function (){var statearr_28149 = state_28138;
(statearr_28149[(7)] = inst_28118);

return statearr_28149;
})();
var statearr_28150_28164 = state_28138__$1;
(statearr_28150_28164[(2)] = null);

(statearr_28150_28164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (5))){
var inst_28118 = (state_28138[(7)]);
var state_28138__$1 = state_28138;
var statearr_28151_28165 = state_28138__$1;
(statearr_28151_28165[(2)] = inst_28118);

(statearr_28151_28165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (10))){
var inst_28132 = (state_28138[(2)]);
var state_28138__$1 = state_28138;
var statearr_28152_28166 = state_28138__$1;
(statearr_28152_28166[(2)] = inst_28132);

(statearr_28152_28166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28139 === (8))){
var inst_28125 = (state_28138[(9)]);
var inst_28128 = cljs.core.deref.call(null,inst_28125);
var state_28138__$1 = state_28138;
var statearr_28153_28167 = state_28138__$1;
(statearr_28153_28167[(2)] = inst_28128);

(statearr_28153_28167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27562__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27562__auto____0 = (function (){
var statearr_28154 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28154[(0)] = cljs$core$async$reduce_$_state_machine__27562__auto__);

(statearr_28154[(1)] = (1));

return statearr_28154;
});
var cljs$core$async$reduce_$_state_machine__27562__auto____1 = (function (state_28138){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28155){if((e28155 instanceof Object)){
var ex__27565__auto__ = e28155;
var statearr_28156_28168 = state_28138;
(statearr_28156_28168[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28169 = state_28138;
state_28138 = G__28169;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27562__auto__ = function(state_28138){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27562__auto____1.call(this,state_28138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27562__auto____0;
cljs$core$async$reduce_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27562__auto____1;
return cljs$core$async$reduce_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__))
})();
var state__27653__auto__ = (function (){var statearr_28157 = f__27652__auto__.call(null);
(statearr_28157[(6)] = c__27651__auto__);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__))
);

return c__27651__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__,f__$1){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__,f__$1){
return (function (state_28175){
var state_val_28176 = (state_28175[(1)]);
if((state_val_28176 === (1))){
var inst_28170 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(2),inst_28170);
} else {
if((state_val_28176 === (2))){
var inst_28172 = (state_28175[(2)]);
var inst_28173 = f__$1.call(null,inst_28172);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28175__$1,inst_28173);
} else {
return null;
}
}
});})(c__27651__auto__,f__$1))
;
return ((function (switch__27561__auto__,c__27651__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27562__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27562__auto____0 = (function (){
var statearr_28177 = [null,null,null,null,null,null,null];
(statearr_28177[(0)] = cljs$core$async$transduce_$_state_machine__27562__auto__);

(statearr_28177[(1)] = (1));

return statearr_28177;
});
var cljs$core$async$transduce_$_state_machine__27562__auto____1 = (function (state_28175){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28178){if((e28178 instanceof Object)){
var ex__27565__auto__ = e28178;
var statearr_28179_28181 = state_28175;
(statearr_28179_28181[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28182 = state_28175;
state_28175 = G__28182;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27562__auto__ = function(state_28175){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27562__auto____1.call(this,state_28175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27562__auto____0;
cljs$core$async$transduce_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27562__auto____1;
return cljs$core$async$transduce_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__,f__$1))
})();
var state__27653__auto__ = (function (){var statearr_28180 = f__27652__auto__.call(null);
(statearr_28180[(6)] = c__27651__auto__);

return statearr_28180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__,f__$1))
);

return c__27651__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28184 = arguments.length;
switch (G__28184) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (7))){
var inst_28191 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28211_28232 = state_28209__$1;
(statearr_28211_28232[(2)] = inst_28191);

(statearr_28211_28232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (1))){
var inst_28185 = cljs.core.seq.call(null,coll);
var inst_28186 = inst_28185;
var state_28209__$1 = (function (){var statearr_28212 = state_28209;
(statearr_28212[(7)] = inst_28186);

return statearr_28212;
})();
var statearr_28213_28233 = state_28209__$1;
(statearr_28213_28233[(2)] = null);

(statearr_28213_28233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (4))){
var inst_28186 = (state_28209[(7)]);
var inst_28189 = cljs.core.first.call(null,inst_28186);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28209__$1,(7),ch,inst_28189);
} else {
if((state_val_28210 === (13))){
var inst_28203 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28214_28234 = state_28209__$1;
(statearr_28214_28234[(2)] = inst_28203);

(statearr_28214_28234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var inst_28194 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28194)){
var statearr_28215_28235 = state_28209__$1;
(statearr_28215_28235[(1)] = (8));

} else {
var statearr_28216_28236 = state_28209__$1;
(statearr_28216_28236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (3))){
var inst_28207 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (12))){
var state_28209__$1 = state_28209;
var statearr_28217_28237 = state_28209__$1;
(statearr_28217_28237[(2)] = null);

(statearr_28217_28237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (2))){
var inst_28186 = (state_28209[(7)]);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28186)){
var statearr_28218_28238 = state_28209__$1;
(statearr_28218_28238[(1)] = (4));

} else {
var statearr_28219_28239 = state_28209__$1;
(statearr_28219_28239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (11))){
var inst_28200 = cljs.core.async.close_BANG_.call(null,ch);
var state_28209__$1 = state_28209;
var statearr_28220_28240 = state_28209__$1;
(statearr_28220_28240[(2)] = inst_28200);

(statearr_28220_28240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (9))){
var state_28209__$1 = state_28209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28221_28241 = state_28209__$1;
(statearr_28221_28241[(1)] = (11));

} else {
var statearr_28222_28242 = state_28209__$1;
(statearr_28222_28242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (5))){
var inst_28186 = (state_28209[(7)]);
var state_28209__$1 = state_28209;
var statearr_28223_28243 = state_28209__$1;
(statearr_28223_28243[(2)] = inst_28186);

(statearr_28223_28243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (10))){
var inst_28205 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28224_28244 = state_28209__$1;
(statearr_28224_28244[(2)] = inst_28205);

(statearr_28224_28244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (8))){
var inst_28186 = (state_28209[(7)]);
var inst_28196 = cljs.core.next.call(null,inst_28186);
var inst_28186__$1 = inst_28196;
var state_28209__$1 = (function (){var statearr_28225 = state_28209;
(statearr_28225[(7)] = inst_28186__$1);

return statearr_28225;
})();
var statearr_28226_28245 = state_28209__$1;
(statearr_28226_28245[(2)] = null);

(statearr_28226_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_28227 = [null,null,null,null,null,null,null,null];
(statearr_28227[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_28227[(1)] = (1));

return statearr_28227;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_28209){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28228){if((e28228 instanceof Object)){
var ex__27565__auto__ = e28228;
var statearr_28229_28246 = state_28209;
(statearr_28229_28246[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28247 = state_28209;
state_28209 = G__28247;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__))
})();
var state__27653__auto__ = (function (){var statearr_28230 = f__27652__auto__.call(null);
(statearr_28230[(6)] = c__27651__auto__);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__))
);

return c__27651__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28248 = (function (ch,cs,meta28249){
this.ch = ch;
this.cs = cs;
this.meta28249 = meta28249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28250,meta28249__$1){
var self__ = this;
var _28250__$1 = this;
return (new cljs.core.async.t_cljs$core$async28248(self__.ch,self__.cs,meta28249__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28250){
var self__ = this;
var _28250__$1 = this;
return self__.meta28249;
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28249","meta28249",-527225542,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28248";

cljs.core.async.t_cljs$core$async28248.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28248");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28248.
 */
cljs.core.async.__GT_t_cljs$core$async28248 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28248(ch__$1,cs__$1,meta28249){
return (new cljs.core.async.t_cljs$core$async28248(ch__$1,cs__$1,meta28249));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28248(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27651__auto___28470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28470,cs,m,dchan,dctr,done){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28470,cs,m,dchan,dctr,done){
return (function (state_28385){
var state_val_28386 = (state_28385[(1)]);
if((state_val_28386 === (7))){
var inst_28381 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28387_28471 = state_28385__$1;
(statearr_28387_28471[(2)] = inst_28381);

(statearr_28387_28471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (20))){
var inst_28284 = (state_28385[(7)]);
var inst_28296 = cljs.core.first.call(null,inst_28284);
var inst_28297 = cljs.core.nth.call(null,inst_28296,(0),null);
var inst_28298 = cljs.core.nth.call(null,inst_28296,(1),null);
var state_28385__$1 = (function (){var statearr_28388 = state_28385;
(statearr_28388[(8)] = inst_28297);

return statearr_28388;
})();
if(cljs.core.truth_(inst_28298)){
var statearr_28389_28472 = state_28385__$1;
(statearr_28389_28472[(1)] = (22));

} else {
var statearr_28390_28473 = state_28385__$1;
(statearr_28390_28473[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (27))){
var inst_28253 = (state_28385[(9)]);
var inst_28326 = (state_28385[(10)]);
var inst_28333 = (state_28385[(11)]);
var inst_28328 = (state_28385[(12)]);
var inst_28333__$1 = cljs.core._nth.call(null,inst_28326,inst_28328);
var inst_28334 = cljs.core.async.put_BANG_.call(null,inst_28333__$1,inst_28253,done);
var state_28385__$1 = (function (){var statearr_28391 = state_28385;
(statearr_28391[(11)] = inst_28333__$1);

return statearr_28391;
})();
if(cljs.core.truth_(inst_28334)){
var statearr_28392_28474 = state_28385__$1;
(statearr_28392_28474[(1)] = (30));

} else {
var statearr_28393_28475 = state_28385__$1;
(statearr_28393_28475[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (1))){
var state_28385__$1 = state_28385;
var statearr_28394_28476 = state_28385__$1;
(statearr_28394_28476[(2)] = null);

(statearr_28394_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (24))){
var inst_28284 = (state_28385[(7)]);
var inst_28303 = (state_28385[(2)]);
var inst_28304 = cljs.core.next.call(null,inst_28284);
var inst_28262 = inst_28304;
var inst_28263 = null;
var inst_28264 = (0);
var inst_28265 = (0);
var state_28385__$1 = (function (){var statearr_28395 = state_28385;
(statearr_28395[(13)] = inst_28303);

(statearr_28395[(14)] = inst_28265);

(statearr_28395[(15)] = inst_28262);

(statearr_28395[(16)] = inst_28263);

(statearr_28395[(17)] = inst_28264);

return statearr_28395;
})();
var statearr_28396_28477 = state_28385__$1;
(statearr_28396_28477[(2)] = null);

(statearr_28396_28477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (39))){
var state_28385__$1 = state_28385;
var statearr_28400_28478 = state_28385__$1;
(statearr_28400_28478[(2)] = null);

(statearr_28400_28478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (4))){
var inst_28253 = (state_28385[(9)]);
var inst_28253__$1 = (state_28385[(2)]);
var inst_28254 = (inst_28253__$1 == null);
var state_28385__$1 = (function (){var statearr_28401 = state_28385;
(statearr_28401[(9)] = inst_28253__$1);

return statearr_28401;
})();
if(cljs.core.truth_(inst_28254)){
var statearr_28402_28479 = state_28385__$1;
(statearr_28402_28479[(1)] = (5));

} else {
var statearr_28403_28480 = state_28385__$1;
(statearr_28403_28480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (15))){
var inst_28265 = (state_28385[(14)]);
var inst_28262 = (state_28385[(15)]);
var inst_28263 = (state_28385[(16)]);
var inst_28264 = (state_28385[(17)]);
var inst_28280 = (state_28385[(2)]);
var inst_28281 = (inst_28265 + (1));
var tmp28397 = inst_28262;
var tmp28398 = inst_28263;
var tmp28399 = inst_28264;
var inst_28262__$1 = tmp28397;
var inst_28263__$1 = tmp28398;
var inst_28264__$1 = tmp28399;
var inst_28265__$1 = inst_28281;
var state_28385__$1 = (function (){var statearr_28404 = state_28385;
(statearr_28404[(18)] = inst_28280);

(statearr_28404[(14)] = inst_28265__$1);

(statearr_28404[(15)] = inst_28262__$1);

(statearr_28404[(16)] = inst_28263__$1);

(statearr_28404[(17)] = inst_28264__$1);

return statearr_28404;
})();
var statearr_28405_28481 = state_28385__$1;
(statearr_28405_28481[(2)] = null);

(statearr_28405_28481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (21))){
var inst_28307 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28409_28482 = state_28385__$1;
(statearr_28409_28482[(2)] = inst_28307);

(statearr_28409_28482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (31))){
var inst_28333 = (state_28385[(11)]);
var inst_28337 = done.call(null,null);
var inst_28338 = cljs.core.async.untap_STAR_.call(null,m,inst_28333);
var state_28385__$1 = (function (){var statearr_28410 = state_28385;
(statearr_28410[(19)] = inst_28337);

return statearr_28410;
})();
var statearr_28411_28483 = state_28385__$1;
(statearr_28411_28483[(2)] = inst_28338);

(statearr_28411_28483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (32))){
var inst_28327 = (state_28385[(20)]);
var inst_28326 = (state_28385[(10)]);
var inst_28325 = (state_28385[(21)]);
var inst_28328 = (state_28385[(12)]);
var inst_28340 = (state_28385[(2)]);
var inst_28341 = (inst_28328 + (1));
var tmp28406 = inst_28327;
var tmp28407 = inst_28326;
var tmp28408 = inst_28325;
var inst_28325__$1 = tmp28408;
var inst_28326__$1 = tmp28407;
var inst_28327__$1 = tmp28406;
var inst_28328__$1 = inst_28341;
var state_28385__$1 = (function (){var statearr_28412 = state_28385;
(statearr_28412[(20)] = inst_28327__$1);

(statearr_28412[(10)] = inst_28326__$1);

(statearr_28412[(21)] = inst_28325__$1);

(statearr_28412[(12)] = inst_28328__$1);

(statearr_28412[(22)] = inst_28340);

return statearr_28412;
})();
var statearr_28413_28484 = state_28385__$1;
(statearr_28413_28484[(2)] = null);

(statearr_28413_28484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (40))){
var inst_28353 = (state_28385[(23)]);
var inst_28357 = done.call(null,null);
var inst_28358 = cljs.core.async.untap_STAR_.call(null,m,inst_28353);
var state_28385__$1 = (function (){var statearr_28414 = state_28385;
(statearr_28414[(24)] = inst_28357);

return statearr_28414;
})();
var statearr_28415_28485 = state_28385__$1;
(statearr_28415_28485[(2)] = inst_28358);

(statearr_28415_28485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (33))){
var inst_28344 = (state_28385[(25)]);
var inst_28346 = cljs.core.chunked_seq_QMARK_.call(null,inst_28344);
var state_28385__$1 = state_28385;
if(inst_28346){
var statearr_28416_28486 = state_28385__$1;
(statearr_28416_28486[(1)] = (36));

} else {
var statearr_28417_28487 = state_28385__$1;
(statearr_28417_28487[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (13))){
var inst_28274 = (state_28385[(26)]);
var inst_28277 = cljs.core.async.close_BANG_.call(null,inst_28274);
var state_28385__$1 = state_28385;
var statearr_28418_28488 = state_28385__$1;
(statearr_28418_28488[(2)] = inst_28277);

(statearr_28418_28488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (22))){
var inst_28297 = (state_28385[(8)]);
var inst_28300 = cljs.core.async.close_BANG_.call(null,inst_28297);
var state_28385__$1 = state_28385;
var statearr_28419_28489 = state_28385__$1;
(statearr_28419_28489[(2)] = inst_28300);

(statearr_28419_28489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (36))){
var inst_28344 = (state_28385[(25)]);
var inst_28348 = cljs.core.chunk_first.call(null,inst_28344);
var inst_28349 = cljs.core.chunk_rest.call(null,inst_28344);
var inst_28350 = cljs.core.count.call(null,inst_28348);
var inst_28325 = inst_28349;
var inst_28326 = inst_28348;
var inst_28327 = inst_28350;
var inst_28328 = (0);
var state_28385__$1 = (function (){var statearr_28420 = state_28385;
(statearr_28420[(20)] = inst_28327);

(statearr_28420[(10)] = inst_28326);

(statearr_28420[(21)] = inst_28325);

(statearr_28420[(12)] = inst_28328);

return statearr_28420;
})();
var statearr_28421_28490 = state_28385__$1;
(statearr_28421_28490[(2)] = null);

(statearr_28421_28490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (41))){
var inst_28344 = (state_28385[(25)]);
var inst_28360 = (state_28385[(2)]);
var inst_28361 = cljs.core.next.call(null,inst_28344);
var inst_28325 = inst_28361;
var inst_28326 = null;
var inst_28327 = (0);
var inst_28328 = (0);
var state_28385__$1 = (function (){var statearr_28422 = state_28385;
(statearr_28422[(20)] = inst_28327);

(statearr_28422[(10)] = inst_28326);

(statearr_28422[(27)] = inst_28360);

(statearr_28422[(21)] = inst_28325);

(statearr_28422[(12)] = inst_28328);

return statearr_28422;
})();
var statearr_28423_28491 = state_28385__$1;
(statearr_28423_28491[(2)] = null);

(statearr_28423_28491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (43))){
var state_28385__$1 = state_28385;
var statearr_28424_28492 = state_28385__$1;
(statearr_28424_28492[(2)] = null);

(statearr_28424_28492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (29))){
var inst_28369 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28425_28493 = state_28385__$1;
(statearr_28425_28493[(2)] = inst_28369);

(statearr_28425_28493[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (44))){
var inst_28378 = (state_28385[(2)]);
var state_28385__$1 = (function (){var statearr_28426 = state_28385;
(statearr_28426[(28)] = inst_28378);

return statearr_28426;
})();
var statearr_28427_28494 = state_28385__$1;
(statearr_28427_28494[(2)] = null);

(statearr_28427_28494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (6))){
var inst_28317 = (state_28385[(29)]);
var inst_28316 = cljs.core.deref.call(null,cs);
var inst_28317__$1 = cljs.core.keys.call(null,inst_28316);
var inst_28318 = cljs.core.count.call(null,inst_28317__$1);
var inst_28319 = cljs.core.reset_BANG_.call(null,dctr,inst_28318);
var inst_28324 = cljs.core.seq.call(null,inst_28317__$1);
var inst_28325 = inst_28324;
var inst_28326 = null;
var inst_28327 = (0);
var inst_28328 = (0);
var state_28385__$1 = (function (){var statearr_28428 = state_28385;
(statearr_28428[(29)] = inst_28317__$1);

(statearr_28428[(20)] = inst_28327);

(statearr_28428[(10)] = inst_28326);

(statearr_28428[(21)] = inst_28325);

(statearr_28428[(30)] = inst_28319);

(statearr_28428[(12)] = inst_28328);

return statearr_28428;
})();
var statearr_28429_28495 = state_28385__$1;
(statearr_28429_28495[(2)] = null);

(statearr_28429_28495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (28))){
var inst_28344 = (state_28385[(25)]);
var inst_28325 = (state_28385[(21)]);
var inst_28344__$1 = cljs.core.seq.call(null,inst_28325);
var state_28385__$1 = (function (){var statearr_28430 = state_28385;
(statearr_28430[(25)] = inst_28344__$1);

return statearr_28430;
})();
if(inst_28344__$1){
var statearr_28431_28496 = state_28385__$1;
(statearr_28431_28496[(1)] = (33));

} else {
var statearr_28432_28497 = state_28385__$1;
(statearr_28432_28497[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (25))){
var inst_28327 = (state_28385[(20)]);
var inst_28328 = (state_28385[(12)]);
var inst_28330 = (inst_28328 < inst_28327);
var inst_28331 = inst_28330;
var state_28385__$1 = state_28385;
if(cljs.core.truth_(inst_28331)){
var statearr_28433_28498 = state_28385__$1;
(statearr_28433_28498[(1)] = (27));

} else {
var statearr_28434_28499 = state_28385__$1;
(statearr_28434_28499[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (34))){
var state_28385__$1 = state_28385;
var statearr_28435_28500 = state_28385__$1;
(statearr_28435_28500[(2)] = null);

(statearr_28435_28500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (17))){
var state_28385__$1 = state_28385;
var statearr_28436_28501 = state_28385__$1;
(statearr_28436_28501[(2)] = null);

(statearr_28436_28501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (3))){
var inst_28383 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28385__$1,inst_28383);
} else {
if((state_val_28386 === (12))){
var inst_28312 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28437_28502 = state_28385__$1;
(statearr_28437_28502[(2)] = inst_28312);

(statearr_28437_28502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (2))){
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28385__$1,(4),ch);
} else {
if((state_val_28386 === (23))){
var state_28385__$1 = state_28385;
var statearr_28438_28503 = state_28385__$1;
(statearr_28438_28503[(2)] = null);

(statearr_28438_28503[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (35))){
var inst_28367 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28439_28504 = state_28385__$1;
(statearr_28439_28504[(2)] = inst_28367);

(statearr_28439_28504[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (19))){
var inst_28284 = (state_28385[(7)]);
var inst_28288 = cljs.core.chunk_first.call(null,inst_28284);
var inst_28289 = cljs.core.chunk_rest.call(null,inst_28284);
var inst_28290 = cljs.core.count.call(null,inst_28288);
var inst_28262 = inst_28289;
var inst_28263 = inst_28288;
var inst_28264 = inst_28290;
var inst_28265 = (0);
var state_28385__$1 = (function (){var statearr_28440 = state_28385;
(statearr_28440[(14)] = inst_28265);

(statearr_28440[(15)] = inst_28262);

(statearr_28440[(16)] = inst_28263);

(statearr_28440[(17)] = inst_28264);

return statearr_28440;
})();
var statearr_28441_28505 = state_28385__$1;
(statearr_28441_28505[(2)] = null);

(statearr_28441_28505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (11))){
var inst_28284 = (state_28385[(7)]);
var inst_28262 = (state_28385[(15)]);
var inst_28284__$1 = cljs.core.seq.call(null,inst_28262);
var state_28385__$1 = (function (){var statearr_28442 = state_28385;
(statearr_28442[(7)] = inst_28284__$1);

return statearr_28442;
})();
if(inst_28284__$1){
var statearr_28443_28506 = state_28385__$1;
(statearr_28443_28506[(1)] = (16));

} else {
var statearr_28444_28507 = state_28385__$1;
(statearr_28444_28507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (9))){
var inst_28314 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28445_28508 = state_28385__$1;
(statearr_28445_28508[(2)] = inst_28314);

(statearr_28445_28508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (5))){
var inst_28260 = cljs.core.deref.call(null,cs);
var inst_28261 = cljs.core.seq.call(null,inst_28260);
var inst_28262 = inst_28261;
var inst_28263 = null;
var inst_28264 = (0);
var inst_28265 = (0);
var state_28385__$1 = (function (){var statearr_28446 = state_28385;
(statearr_28446[(14)] = inst_28265);

(statearr_28446[(15)] = inst_28262);

(statearr_28446[(16)] = inst_28263);

(statearr_28446[(17)] = inst_28264);

return statearr_28446;
})();
var statearr_28447_28509 = state_28385__$1;
(statearr_28447_28509[(2)] = null);

(statearr_28447_28509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (14))){
var state_28385__$1 = state_28385;
var statearr_28448_28510 = state_28385__$1;
(statearr_28448_28510[(2)] = null);

(statearr_28448_28510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (45))){
var inst_28375 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28449_28511 = state_28385__$1;
(statearr_28449_28511[(2)] = inst_28375);

(statearr_28449_28511[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (26))){
var inst_28317 = (state_28385[(29)]);
var inst_28371 = (state_28385[(2)]);
var inst_28372 = cljs.core.seq.call(null,inst_28317);
var state_28385__$1 = (function (){var statearr_28450 = state_28385;
(statearr_28450[(31)] = inst_28371);

return statearr_28450;
})();
if(inst_28372){
var statearr_28451_28512 = state_28385__$1;
(statearr_28451_28512[(1)] = (42));

} else {
var statearr_28452_28513 = state_28385__$1;
(statearr_28452_28513[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (16))){
var inst_28284 = (state_28385[(7)]);
var inst_28286 = cljs.core.chunked_seq_QMARK_.call(null,inst_28284);
var state_28385__$1 = state_28385;
if(inst_28286){
var statearr_28453_28514 = state_28385__$1;
(statearr_28453_28514[(1)] = (19));

} else {
var statearr_28454_28515 = state_28385__$1;
(statearr_28454_28515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (38))){
var inst_28364 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28455_28516 = state_28385__$1;
(statearr_28455_28516[(2)] = inst_28364);

(statearr_28455_28516[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (30))){
var state_28385__$1 = state_28385;
var statearr_28456_28517 = state_28385__$1;
(statearr_28456_28517[(2)] = null);

(statearr_28456_28517[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (10))){
var inst_28265 = (state_28385[(14)]);
var inst_28263 = (state_28385[(16)]);
var inst_28273 = cljs.core._nth.call(null,inst_28263,inst_28265);
var inst_28274 = cljs.core.nth.call(null,inst_28273,(0),null);
var inst_28275 = cljs.core.nth.call(null,inst_28273,(1),null);
var state_28385__$1 = (function (){var statearr_28457 = state_28385;
(statearr_28457[(26)] = inst_28274);

return statearr_28457;
})();
if(cljs.core.truth_(inst_28275)){
var statearr_28458_28518 = state_28385__$1;
(statearr_28458_28518[(1)] = (13));

} else {
var statearr_28459_28519 = state_28385__$1;
(statearr_28459_28519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (18))){
var inst_28310 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28460_28520 = state_28385__$1;
(statearr_28460_28520[(2)] = inst_28310);

(statearr_28460_28520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (42))){
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28385__$1,(45),dchan);
} else {
if((state_val_28386 === (37))){
var inst_28344 = (state_28385[(25)]);
var inst_28253 = (state_28385[(9)]);
var inst_28353 = (state_28385[(23)]);
var inst_28353__$1 = cljs.core.first.call(null,inst_28344);
var inst_28354 = cljs.core.async.put_BANG_.call(null,inst_28353__$1,inst_28253,done);
var state_28385__$1 = (function (){var statearr_28461 = state_28385;
(statearr_28461[(23)] = inst_28353__$1);

return statearr_28461;
})();
if(cljs.core.truth_(inst_28354)){
var statearr_28462_28521 = state_28385__$1;
(statearr_28462_28521[(1)] = (39));

} else {
var statearr_28463_28522 = state_28385__$1;
(statearr_28463_28522[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (8))){
var inst_28265 = (state_28385[(14)]);
var inst_28264 = (state_28385[(17)]);
var inst_28267 = (inst_28265 < inst_28264);
var inst_28268 = inst_28267;
var state_28385__$1 = state_28385;
if(cljs.core.truth_(inst_28268)){
var statearr_28464_28523 = state_28385__$1;
(statearr_28464_28523[(1)] = (10));

} else {
var statearr_28465_28524 = state_28385__$1;
(statearr_28465_28524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28470,cs,m,dchan,dctr,done))
;
return ((function (switch__27561__auto__,c__27651__auto___28470,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27562__auto__ = null;
var cljs$core$async$mult_$_state_machine__27562__auto____0 = (function (){
var statearr_28466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28466[(0)] = cljs$core$async$mult_$_state_machine__27562__auto__);

(statearr_28466[(1)] = (1));

return statearr_28466;
});
var cljs$core$async$mult_$_state_machine__27562__auto____1 = (function (state_28385){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28467){if((e28467 instanceof Object)){
var ex__27565__auto__ = e28467;
var statearr_28468_28525 = state_28385;
(statearr_28468_28525[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28526 = state_28385;
state_28385 = G__28526;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27562__auto__ = function(state_28385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27562__auto____1.call(this,state_28385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27562__auto____0;
cljs$core$async$mult_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27562__auto____1;
return cljs$core$async$mult_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28470,cs,m,dchan,dctr,done))
})();
var state__27653__auto__ = (function (){var statearr_28469 = f__27652__auto__.call(null);
(statearr_28469[(6)] = c__27651__auto___28470);

return statearr_28469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28470,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28528 = arguments.length;
switch (G__28528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28540 = arguments.length;
var i__4500__auto___28541 = (0);
while(true){
if((i__4500__auto___28541 < len__4499__auto___28540)){
args__4502__auto__.push((arguments[i__4500__auto___28541]));

var G__28542 = (i__4500__auto___28541 + (1));
i__4500__auto___28541 = G__28542;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28534){
var map__28535 = p__28534;
var map__28535__$1 = ((((!((map__28535 == null)))?(((((map__28535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28535):map__28535);
var opts = map__28535__$1;
var statearr_28537_28543 = state;
(statearr_28537_28543[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28535,map__28535__$1,opts){
return (function (val){
var statearr_28538_28544 = state;
(statearr_28538_28544[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28535,map__28535__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28539_28545 = state;
(statearr_28539_28545[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28530){
var G__28531 = cljs.core.first.call(null,seq28530);
var seq28530__$1 = cljs.core.next.call(null,seq28530);
var G__28532 = cljs.core.first.call(null,seq28530__$1);
var seq28530__$2 = cljs.core.next.call(null,seq28530__$1);
var G__28533 = cljs.core.first.call(null,seq28530__$2);
var seq28530__$3 = cljs.core.next.call(null,seq28530__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28531,G__28532,G__28533,seq28530__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28546 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28547){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28547 = meta28547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28548,meta28547__$1){
var self__ = this;
var _28548__$1 = this;
return (new cljs.core.async.t_cljs$core$async28546(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28548){
var self__ = this;
var _28548__$1 = this;
return self__.meta28547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28547","meta28547",342077377,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28546";

cljs.core.async.t_cljs$core$async28546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28546.
 */
cljs.core.async.__GT_t_cljs$core$async28546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28546(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28547){
return (new cljs.core.async.t_cljs$core$async28546(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28546(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27651__auto___28710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28650){
var state_val_28651 = (state_28650[(1)]);
if((state_val_28651 === (7))){
var inst_28565 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28652_28711 = state_28650__$1;
(statearr_28652_28711[(2)] = inst_28565);

(statearr_28652_28711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (20))){
var inst_28577 = (state_28650[(7)]);
var state_28650__$1 = state_28650;
var statearr_28653_28712 = state_28650__$1;
(statearr_28653_28712[(2)] = inst_28577);

(statearr_28653_28712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (27))){
var state_28650__$1 = state_28650;
var statearr_28654_28713 = state_28650__$1;
(statearr_28654_28713[(2)] = null);

(statearr_28654_28713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (1))){
var inst_28552 = (state_28650[(8)]);
var inst_28552__$1 = calc_state.call(null);
var inst_28554 = (inst_28552__$1 == null);
var inst_28555 = cljs.core.not.call(null,inst_28554);
var state_28650__$1 = (function (){var statearr_28655 = state_28650;
(statearr_28655[(8)] = inst_28552__$1);

return statearr_28655;
})();
if(inst_28555){
var statearr_28656_28714 = state_28650__$1;
(statearr_28656_28714[(1)] = (2));

} else {
var statearr_28657_28715 = state_28650__$1;
(statearr_28657_28715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (24))){
var inst_28610 = (state_28650[(9)]);
var inst_28624 = (state_28650[(10)]);
var inst_28601 = (state_28650[(11)]);
var inst_28624__$1 = inst_28601.call(null,inst_28610);
var state_28650__$1 = (function (){var statearr_28658 = state_28650;
(statearr_28658[(10)] = inst_28624__$1);

return statearr_28658;
})();
if(cljs.core.truth_(inst_28624__$1)){
var statearr_28659_28716 = state_28650__$1;
(statearr_28659_28716[(1)] = (29));

} else {
var statearr_28660_28717 = state_28650__$1;
(statearr_28660_28717[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (4))){
var inst_28568 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28568)){
var statearr_28661_28718 = state_28650__$1;
(statearr_28661_28718[(1)] = (8));

} else {
var statearr_28662_28719 = state_28650__$1;
(statearr_28662_28719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (15))){
var inst_28595 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28595)){
var statearr_28663_28720 = state_28650__$1;
(statearr_28663_28720[(1)] = (19));

} else {
var statearr_28664_28721 = state_28650__$1;
(statearr_28664_28721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (21))){
var inst_28600 = (state_28650[(12)]);
var inst_28600__$1 = (state_28650[(2)]);
var inst_28601 = cljs.core.get.call(null,inst_28600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28602 = cljs.core.get.call(null,inst_28600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28603 = cljs.core.get.call(null,inst_28600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28650__$1 = (function (){var statearr_28665 = state_28650;
(statearr_28665[(12)] = inst_28600__$1);

(statearr_28665[(13)] = inst_28602);

(statearr_28665[(11)] = inst_28601);

return statearr_28665;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28650__$1,(22),inst_28603);
} else {
if((state_val_28651 === (31))){
var inst_28632 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28632)){
var statearr_28666_28722 = state_28650__$1;
(statearr_28666_28722[(1)] = (32));

} else {
var statearr_28667_28723 = state_28650__$1;
(statearr_28667_28723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (32))){
var inst_28609 = (state_28650[(14)]);
var state_28650__$1 = state_28650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28650__$1,(35),out,inst_28609);
} else {
if((state_val_28651 === (33))){
var inst_28600 = (state_28650[(12)]);
var inst_28577 = inst_28600;
var state_28650__$1 = (function (){var statearr_28668 = state_28650;
(statearr_28668[(7)] = inst_28577);

return statearr_28668;
})();
var statearr_28669_28724 = state_28650__$1;
(statearr_28669_28724[(2)] = null);

(statearr_28669_28724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (13))){
var inst_28577 = (state_28650[(7)]);
var inst_28584 = inst_28577.cljs$lang$protocol_mask$partition0$;
var inst_28585 = (inst_28584 & (64));
var inst_28586 = inst_28577.cljs$core$ISeq$;
var inst_28587 = (cljs.core.PROTOCOL_SENTINEL === inst_28586);
var inst_28588 = ((inst_28585) || (inst_28587));
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28588)){
var statearr_28670_28725 = state_28650__$1;
(statearr_28670_28725[(1)] = (16));

} else {
var statearr_28671_28726 = state_28650__$1;
(statearr_28671_28726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (22))){
var inst_28609 = (state_28650[(14)]);
var inst_28610 = (state_28650[(9)]);
var inst_28608 = (state_28650[(2)]);
var inst_28609__$1 = cljs.core.nth.call(null,inst_28608,(0),null);
var inst_28610__$1 = cljs.core.nth.call(null,inst_28608,(1),null);
var inst_28611 = (inst_28609__$1 == null);
var inst_28612 = cljs.core._EQ_.call(null,inst_28610__$1,change);
var inst_28613 = ((inst_28611) || (inst_28612));
var state_28650__$1 = (function (){var statearr_28672 = state_28650;
(statearr_28672[(14)] = inst_28609__$1);

(statearr_28672[(9)] = inst_28610__$1);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28613)){
var statearr_28673_28727 = state_28650__$1;
(statearr_28673_28727[(1)] = (23));

} else {
var statearr_28674_28728 = state_28650__$1;
(statearr_28674_28728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (36))){
var inst_28600 = (state_28650[(12)]);
var inst_28577 = inst_28600;
var state_28650__$1 = (function (){var statearr_28675 = state_28650;
(statearr_28675[(7)] = inst_28577);

return statearr_28675;
})();
var statearr_28676_28729 = state_28650__$1;
(statearr_28676_28729[(2)] = null);

(statearr_28676_28729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (29))){
var inst_28624 = (state_28650[(10)]);
var state_28650__$1 = state_28650;
var statearr_28677_28730 = state_28650__$1;
(statearr_28677_28730[(2)] = inst_28624);

(statearr_28677_28730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (6))){
var state_28650__$1 = state_28650;
var statearr_28678_28731 = state_28650__$1;
(statearr_28678_28731[(2)] = false);

(statearr_28678_28731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (28))){
var inst_28620 = (state_28650[(2)]);
var inst_28621 = calc_state.call(null);
var inst_28577 = inst_28621;
var state_28650__$1 = (function (){var statearr_28679 = state_28650;
(statearr_28679[(15)] = inst_28620);

(statearr_28679[(7)] = inst_28577);

return statearr_28679;
})();
var statearr_28680_28732 = state_28650__$1;
(statearr_28680_28732[(2)] = null);

(statearr_28680_28732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (25))){
var inst_28646 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28681_28733 = state_28650__$1;
(statearr_28681_28733[(2)] = inst_28646);

(statearr_28681_28733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (34))){
var inst_28644 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28682_28734 = state_28650__$1;
(statearr_28682_28734[(2)] = inst_28644);

(statearr_28682_28734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (17))){
var state_28650__$1 = state_28650;
var statearr_28683_28735 = state_28650__$1;
(statearr_28683_28735[(2)] = false);

(statearr_28683_28735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (3))){
var state_28650__$1 = state_28650;
var statearr_28684_28736 = state_28650__$1;
(statearr_28684_28736[(2)] = false);

(statearr_28684_28736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (12))){
var inst_28648 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28650__$1,inst_28648);
} else {
if((state_val_28651 === (2))){
var inst_28552 = (state_28650[(8)]);
var inst_28557 = inst_28552.cljs$lang$protocol_mask$partition0$;
var inst_28558 = (inst_28557 & (64));
var inst_28559 = inst_28552.cljs$core$ISeq$;
var inst_28560 = (cljs.core.PROTOCOL_SENTINEL === inst_28559);
var inst_28561 = ((inst_28558) || (inst_28560));
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28561)){
var statearr_28685_28737 = state_28650__$1;
(statearr_28685_28737[(1)] = (5));

} else {
var statearr_28686_28738 = state_28650__$1;
(statearr_28686_28738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (23))){
var inst_28609 = (state_28650[(14)]);
var inst_28615 = (inst_28609 == null);
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28615)){
var statearr_28687_28739 = state_28650__$1;
(statearr_28687_28739[(1)] = (26));

} else {
var statearr_28688_28740 = state_28650__$1;
(statearr_28688_28740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (35))){
var inst_28635 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
if(cljs.core.truth_(inst_28635)){
var statearr_28689_28741 = state_28650__$1;
(statearr_28689_28741[(1)] = (36));

} else {
var statearr_28690_28742 = state_28650__$1;
(statearr_28690_28742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (19))){
var inst_28577 = (state_28650[(7)]);
var inst_28597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28577);
var state_28650__$1 = state_28650;
var statearr_28691_28743 = state_28650__$1;
(statearr_28691_28743[(2)] = inst_28597);

(statearr_28691_28743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (11))){
var inst_28577 = (state_28650[(7)]);
var inst_28581 = (inst_28577 == null);
var inst_28582 = cljs.core.not.call(null,inst_28581);
var state_28650__$1 = state_28650;
if(inst_28582){
var statearr_28692_28744 = state_28650__$1;
(statearr_28692_28744[(1)] = (13));

} else {
var statearr_28693_28745 = state_28650__$1;
(statearr_28693_28745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (9))){
var inst_28552 = (state_28650[(8)]);
var state_28650__$1 = state_28650;
var statearr_28694_28746 = state_28650__$1;
(statearr_28694_28746[(2)] = inst_28552);

(statearr_28694_28746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (5))){
var state_28650__$1 = state_28650;
var statearr_28695_28747 = state_28650__$1;
(statearr_28695_28747[(2)] = true);

(statearr_28695_28747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (14))){
var state_28650__$1 = state_28650;
var statearr_28696_28748 = state_28650__$1;
(statearr_28696_28748[(2)] = false);

(statearr_28696_28748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (26))){
var inst_28610 = (state_28650[(9)]);
var inst_28617 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28610);
var state_28650__$1 = state_28650;
var statearr_28697_28749 = state_28650__$1;
(statearr_28697_28749[(2)] = inst_28617);

(statearr_28697_28749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (16))){
var state_28650__$1 = state_28650;
var statearr_28698_28750 = state_28650__$1;
(statearr_28698_28750[(2)] = true);

(statearr_28698_28750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (38))){
var inst_28640 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28699_28751 = state_28650__$1;
(statearr_28699_28751[(2)] = inst_28640);

(statearr_28699_28751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (30))){
var inst_28610 = (state_28650[(9)]);
var inst_28602 = (state_28650[(13)]);
var inst_28601 = (state_28650[(11)]);
var inst_28627 = cljs.core.empty_QMARK_.call(null,inst_28601);
var inst_28628 = inst_28602.call(null,inst_28610);
var inst_28629 = cljs.core.not.call(null,inst_28628);
var inst_28630 = ((inst_28627) && (inst_28629));
var state_28650__$1 = state_28650;
var statearr_28700_28752 = state_28650__$1;
(statearr_28700_28752[(2)] = inst_28630);

(statearr_28700_28752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (10))){
var inst_28552 = (state_28650[(8)]);
var inst_28573 = (state_28650[(2)]);
var inst_28574 = cljs.core.get.call(null,inst_28573,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28575 = cljs.core.get.call(null,inst_28573,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28576 = cljs.core.get.call(null,inst_28573,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28577 = inst_28552;
var state_28650__$1 = (function (){var statearr_28701 = state_28650;
(statearr_28701[(16)] = inst_28576);

(statearr_28701[(17)] = inst_28574);

(statearr_28701[(7)] = inst_28577);

(statearr_28701[(18)] = inst_28575);

return statearr_28701;
})();
var statearr_28702_28753 = state_28650__$1;
(statearr_28702_28753[(2)] = null);

(statearr_28702_28753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (18))){
var inst_28592 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28703_28754 = state_28650__$1;
(statearr_28703_28754[(2)] = inst_28592);

(statearr_28703_28754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (37))){
var state_28650__$1 = state_28650;
var statearr_28704_28755 = state_28650__$1;
(statearr_28704_28755[(2)] = null);

(statearr_28704_28755[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (8))){
var inst_28552 = (state_28650[(8)]);
var inst_28570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28552);
var state_28650__$1 = state_28650;
var statearr_28705_28756 = state_28650__$1;
(statearr_28705_28756[(2)] = inst_28570);

(statearr_28705_28756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27561__auto__,c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27562__auto__ = null;
var cljs$core$async$mix_$_state_machine__27562__auto____0 = (function (){
var statearr_28706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28706[(0)] = cljs$core$async$mix_$_state_machine__27562__auto__);

(statearr_28706[(1)] = (1));

return statearr_28706;
});
var cljs$core$async$mix_$_state_machine__27562__auto____1 = (function (state_28650){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28707){if((e28707 instanceof Object)){
var ex__27565__auto__ = e28707;
var statearr_28708_28757 = state_28650;
(statearr_28708_28757[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28758 = state_28650;
state_28650 = G__28758;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27562__auto__ = function(state_28650){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27562__auto____1.call(this,state_28650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27562__auto____0;
cljs$core$async$mix_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27562__auto____1;
return cljs$core$async$mix_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27653__auto__ = (function (){var statearr_28709 = f__27652__auto__.call(null);
(statearr_28709[(6)] = c__27651__auto___28710);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28760 = arguments.length;
switch (G__28760) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28764 = arguments.length;
switch (G__28764) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28762_SHARP_){
if(cljs.core.truth_(p1__28762_SHARP_.call(null,topic))){
return p1__28762_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28765 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28766){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t_cljs$core$async28765(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28766__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28765";

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28765");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28765.
 */
cljs.core.async.__GT_t_cljs$core$async28765 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28765(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28766){
return (new cljs.core.async.t_cljs$core$async28765(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28766));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28765(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27651__auto___28885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28885,mults,ensure_mult,p){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28885,mults,ensure_mult,p){
return (function (state_28839){
var state_val_28840 = (state_28839[(1)]);
if((state_val_28840 === (7))){
var inst_28835 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28841_28886 = state_28839__$1;
(statearr_28841_28886[(2)] = inst_28835);

(statearr_28841_28886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (20))){
var state_28839__$1 = state_28839;
var statearr_28842_28887 = state_28839__$1;
(statearr_28842_28887[(2)] = null);

(statearr_28842_28887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (1))){
var state_28839__$1 = state_28839;
var statearr_28843_28888 = state_28839__$1;
(statearr_28843_28888[(2)] = null);

(statearr_28843_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (24))){
var inst_28818 = (state_28839[(7)]);
var inst_28827 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28818);
var state_28839__$1 = state_28839;
var statearr_28844_28889 = state_28839__$1;
(statearr_28844_28889[(2)] = inst_28827);

(statearr_28844_28889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (4))){
var inst_28770 = (state_28839[(8)]);
var inst_28770__$1 = (state_28839[(2)]);
var inst_28771 = (inst_28770__$1 == null);
var state_28839__$1 = (function (){var statearr_28845 = state_28839;
(statearr_28845[(8)] = inst_28770__$1);

return statearr_28845;
})();
if(cljs.core.truth_(inst_28771)){
var statearr_28846_28890 = state_28839__$1;
(statearr_28846_28890[(1)] = (5));

} else {
var statearr_28847_28891 = state_28839__$1;
(statearr_28847_28891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (15))){
var inst_28812 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28848_28892 = state_28839__$1;
(statearr_28848_28892[(2)] = inst_28812);

(statearr_28848_28892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (21))){
var inst_28832 = (state_28839[(2)]);
var state_28839__$1 = (function (){var statearr_28849 = state_28839;
(statearr_28849[(9)] = inst_28832);

return statearr_28849;
})();
var statearr_28850_28893 = state_28839__$1;
(statearr_28850_28893[(2)] = null);

(statearr_28850_28893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (13))){
var inst_28794 = (state_28839[(10)]);
var inst_28796 = cljs.core.chunked_seq_QMARK_.call(null,inst_28794);
var state_28839__$1 = state_28839;
if(inst_28796){
var statearr_28851_28894 = state_28839__$1;
(statearr_28851_28894[(1)] = (16));

} else {
var statearr_28852_28895 = state_28839__$1;
(statearr_28852_28895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (22))){
var inst_28824 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
if(cljs.core.truth_(inst_28824)){
var statearr_28853_28896 = state_28839__$1;
(statearr_28853_28896[(1)] = (23));

} else {
var statearr_28854_28897 = state_28839__$1;
(statearr_28854_28897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (6))){
var inst_28770 = (state_28839[(8)]);
var inst_28818 = (state_28839[(7)]);
var inst_28820 = (state_28839[(11)]);
var inst_28818__$1 = topic_fn.call(null,inst_28770);
var inst_28819 = cljs.core.deref.call(null,mults);
var inst_28820__$1 = cljs.core.get.call(null,inst_28819,inst_28818__$1);
var state_28839__$1 = (function (){var statearr_28855 = state_28839;
(statearr_28855[(7)] = inst_28818__$1);

(statearr_28855[(11)] = inst_28820__$1);

return statearr_28855;
})();
if(cljs.core.truth_(inst_28820__$1)){
var statearr_28856_28898 = state_28839__$1;
(statearr_28856_28898[(1)] = (19));

} else {
var statearr_28857_28899 = state_28839__$1;
(statearr_28857_28899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (25))){
var inst_28829 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28858_28900 = state_28839__$1;
(statearr_28858_28900[(2)] = inst_28829);

(statearr_28858_28900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (17))){
var inst_28794 = (state_28839[(10)]);
var inst_28803 = cljs.core.first.call(null,inst_28794);
var inst_28804 = cljs.core.async.muxch_STAR_.call(null,inst_28803);
var inst_28805 = cljs.core.async.close_BANG_.call(null,inst_28804);
var inst_28806 = cljs.core.next.call(null,inst_28794);
var inst_28780 = inst_28806;
var inst_28781 = null;
var inst_28782 = (0);
var inst_28783 = (0);
var state_28839__$1 = (function (){var statearr_28859 = state_28839;
(statearr_28859[(12)] = inst_28780);

(statearr_28859[(13)] = inst_28782);

(statearr_28859[(14)] = inst_28805);

(statearr_28859[(15)] = inst_28783);

(statearr_28859[(16)] = inst_28781);

return statearr_28859;
})();
var statearr_28860_28901 = state_28839__$1;
(statearr_28860_28901[(2)] = null);

(statearr_28860_28901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (3))){
var inst_28837 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28839__$1,inst_28837);
} else {
if((state_val_28840 === (12))){
var inst_28814 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28861_28902 = state_28839__$1;
(statearr_28861_28902[(2)] = inst_28814);

(statearr_28861_28902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (2))){
var state_28839__$1 = state_28839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28839__$1,(4),ch);
} else {
if((state_val_28840 === (23))){
var state_28839__$1 = state_28839;
var statearr_28862_28903 = state_28839__$1;
(statearr_28862_28903[(2)] = null);

(statearr_28862_28903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (19))){
var inst_28770 = (state_28839[(8)]);
var inst_28820 = (state_28839[(11)]);
var inst_28822 = cljs.core.async.muxch_STAR_.call(null,inst_28820);
var state_28839__$1 = state_28839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28839__$1,(22),inst_28822,inst_28770);
} else {
if((state_val_28840 === (11))){
var inst_28780 = (state_28839[(12)]);
var inst_28794 = (state_28839[(10)]);
var inst_28794__$1 = cljs.core.seq.call(null,inst_28780);
var state_28839__$1 = (function (){var statearr_28863 = state_28839;
(statearr_28863[(10)] = inst_28794__$1);

return statearr_28863;
})();
if(inst_28794__$1){
var statearr_28864_28904 = state_28839__$1;
(statearr_28864_28904[(1)] = (13));

} else {
var statearr_28865_28905 = state_28839__$1;
(statearr_28865_28905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (9))){
var inst_28816 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28866_28906 = state_28839__$1;
(statearr_28866_28906[(2)] = inst_28816);

(statearr_28866_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (5))){
var inst_28777 = cljs.core.deref.call(null,mults);
var inst_28778 = cljs.core.vals.call(null,inst_28777);
var inst_28779 = cljs.core.seq.call(null,inst_28778);
var inst_28780 = inst_28779;
var inst_28781 = null;
var inst_28782 = (0);
var inst_28783 = (0);
var state_28839__$1 = (function (){var statearr_28867 = state_28839;
(statearr_28867[(12)] = inst_28780);

(statearr_28867[(13)] = inst_28782);

(statearr_28867[(15)] = inst_28783);

(statearr_28867[(16)] = inst_28781);

return statearr_28867;
})();
var statearr_28868_28907 = state_28839__$1;
(statearr_28868_28907[(2)] = null);

(statearr_28868_28907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (14))){
var state_28839__$1 = state_28839;
var statearr_28872_28908 = state_28839__$1;
(statearr_28872_28908[(2)] = null);

(statearr_28872_28908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (16))){
var inst_28794 = (state_28839[(10)]);
var inst_28798 = cljs.core.chunk_first.call(null,inst_28794);
var inst_28799 = cljs.core.chunk_rest.call(null,inst_28794);
var inst_28800 = cljs.core.count.call(null,inst_28798);
var inst_28780 = inst_28799;
var inst_28781 = inst_28798;
var inst_28782 = inst_28800;
var inst_28783 = (0);
var state_28839__$1 = (function (){var statearr_28873 = state_28839;
(statearr_28873[(12)] = inst_28780);

(statearr_28873[(13)] = inst_28782);

(statearr_28873[(15)] = inst_28783);

(statearr_28873[(16)] = inst_28781);

return statearr_28873;
})();
var statearr_28874_28909 = state_28839__$1;
(statearr_28874_28909[(2)] = null);

(statearr_28874_28909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (10))){
var inst_28780 = (state_28839[(12)]);
var inst_28782 = (state_28839[(13)]);
var inst_28783 = (state_28839[(15)]);
var inst_28781 = (state_28839[(16)]);
var inst_28788 = cljs.core._nth.call(null,inst_28781,inst_28783);
var inst_28789 = cljs.core.async.muxch_STAR_.call(null,inst_28788);
var inst_28790 = cljs.core.async.close_BANG_.call(null,inst_28789);
var inst_28791 = (inst_28783 + (1));
var tmp28869 = inst_28780;
var tmp28870 = inst_28782;
var tmp28871 = inst_28781;
var inst_28780__$1 = tmp28869;
var inst_28781__$1 = tmp28871;
var inst_28782__$1 = tmp28870;
var inst_28783__$1 = inst_28791;
var state_28839__$1 = (function (){var statearr_28875 = state_28839;
(statearr_28875[(17)] = inst_28790);

(statearr_28875[(12)] = inst_28780__$1);

(statearr_28875[(13)] = inst_28782__$1);

(statearr_28875[(15)] = inst_28783__$1);

(statearr_28875[(16)] = inst_28781__$1);

return statearr_28875;
})();
var statearr_28876_28910 = state_28839__$1;
(statearr_28876_28910[(2)] = null);

(statearr_28876_28910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (18))){
var inst_28809 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28877_28911 = state_28839__$1;
(statearr_28877_28911[(2)] = inst_28809);

(statearr_28877_28911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (8))){
var inst_28782 = (state_28839[(13)]);
var inst_28783 = (state_28839[(15)]);
var inst_28785 = (inst_28783 < inst_28782);
var inst_28786 = inst_28785;
var state_28839__$1 = state_28839;
if(cljs.core.truth_(inst_28786)){
var statearr_28878_28912 = state_28839__$1;
(statearr_28878_28912[(1)] = (10));

} else {
var statearr_28879_28913 = state_28839__$1;
(statearr_28879_28913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28885,mults,ensure_mult,p))
;
return ((function (switch__27561__auto__,c__27651__auto___28885,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_28880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28880[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_28880[(1)] = (1));

return statearr_28880;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_28839){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28881){if((e28881 instanceof Object)){
var ex__27565__auto__ = e28881;
var statearr_28882_28914 = state_28839;
(statearr_28882_28914[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28839;
state_28839 = G__28915;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_28839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_28839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28885,mults,ensure_mult,p))
})();
var state__27653__auto__ = (function (){var statearr_28883 = f__27652__auto__.call(null);
(statearr_28883[(6)] = c__27651__auto___28885);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28885,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28917 = arguments.length;
switch (G__28917) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28920 = arguments.length;
switch (G__28920) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28923 = arguments.length;
switch (G__28923) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27651__auto___28990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (7))){
var state_28962__$1 = state_28962;
var statearr_28964_28991 = state_28962__$1;
(statearr_28964_28991[(2)] = null);

(statearr_28964_28991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (1))){
var state_28962__$1 = state_28962;
var statearr_28965_28992 = state_28962__$1;
(statearr_28965_28992[(2)] = null);

(statearr_28965_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (4))){
var inst_28926 = (state_28962[(7)]);
var inst_28928 = (inst_28926 < cnt);
var state_28962__$1 = state_28962;
if(cljs.core.truth_(inst_28928)){
var statearr_28966_28993 = state_28962__$1;
(statearr_28966_28993[(1)] = (6));

} else {
var statearr_28967_28994 = state_28962__$1;
(statearr_28967_28994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (15))){
var inst_28958 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28968_28995 = state_28962__$1;
(statearr_28968_28995[(2)] = inst_28958);

(statearr_28968_28995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (13))){
var inst_28951 = cljs.core.async.close_BANG_.call(null,out);
var state_28962__$1 = state_28962;
var statearr_28969_28996 = state_28962__$1;
(statearr_28969_28996[(2)] = inst_28951);

(statearr_28969_28996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (6))){
var state_28962__$1 = state_28962;
var statearr_28970_28997 = state_28962__$1;
(statearr_28970_28997[(2)] = null);

(statearr_28970_28997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (3))){
var inst_28960 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
if((state_val_28963 === (12))){
var inst_28948 = (state_28962[(8)]);
var inst_28948__$1 = (state_28962[(2)]);
var inst_28949 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28948__$1);
var state_28962__$1 = (function (){var statearr_28971 = state_28962;
(statearr_28971[(8)] = inst_28948__$1);

return statearr_28971;
})();
if(cljs.core.truth_(inst_28949)){
var statearr_28972_28998 = state_28962__$1;
(statearr_28972_28998[(1)] = (13));

} else {
var statearr_28973_28999 = state_28962__$1;
(statearr_28973_28999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (2))){
var inst_28925 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28926 = (0);
var state_28962__$1 = (function (){var statearr_28974 = state_28962;
(statearr_28974[(9)] = inst_28925);

(statearr_28974[(7)] = inst_28926);

return statearr_28974;
})();
var statearr_28975_29000 = state_28962__$1;
(statearr_28975_29000[(2)] = null);

(statearr_28975_29000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (11))){
var inst_28926 = (state_28962[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28962,(10),Object,null,(9));
var inst_28935 = chs__$1.call(null,inst_28926);
var inst_28936 = done.call(null,inst_28926);
var inst_28937 = cljs.core.async.take_BANG_.call(null,inst_28935,inst_28936);
var state_28962__$1 = state_28962;
var statearr_28976_29001 = state_28962__$1;
(statearr_28976_29001[(2)] = inst_28937);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (9))){
var inst_28926 = (state_28962[(7)]);
var inst_28939 = (state_28962[(2)]);
var inst_28940 = (inst_28926 + (1));
var inst_28926__$1 = inst_28940;
var state_28962__$1 = (function (){var statearr_28977 = state_28962;
(statearr_28977[(10)] = inst_28939);

(statearr_28977[(7)] = inst_28926__$1);

return statearr_28977;
})();
var statearr_28978_29002 = state_28962__$1;
(statearr_28978_29002[(2)] = null);

(statearr_28978_29002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (5))){
var inst_28946 = (state_28962[(2)]);
var state_28962__$1 = (function (){var statearr_28979 = state_28962;
(statearr_28979[(11)] = inst_28946);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(12),dchan);
} else {
if((state_val_28963 === (14))){
var inst_28948 = (state_28962[(8)]);
var inst_28953 = cljs.core.apply.call(null,f,inst_28948);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28962__$1,(16),out,inst_28953);
} else {
if((state_val_28963 === (16))){
var inst_28955 = (state_28962[(2)]);
var state_28962__$1 = (function (){var statearr_28980 = state_28962;
(statearr_28980[(12)] = inst_28955);

return statearr_28980;
})();
var statearr_28981_29003 = state_28962__$1;
(statearr_28981_29003[(2)] = null);

(statearr_28981_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (10))){
var inst_28930 = (state_28962[(2)]);
var inst_28931 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28962__$1 = (function (){var statearr_28982 = state_28962;
(statearr_28982[(13)] = inst_28930);

return statearr_28982;
})();
var statearr_28983_29004 = state_28962__$1;
(statearr_28983_29004[(2)] = inst_28931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (8))){
var inst_28944 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28984_29005 = state_28962__$1;
(statearr_28984_29005[(2)] = inst_28944);

(statearr_28984_29005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27561__auto__,c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_28962){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e28986){if((e28986 instanceof Object)){
var ex__27565__auto__ = e28986;
var statearr_28987_29006 = state_28962;
(statearr_28987_29006[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29007 = state_28962;
state_28962 = G__29007;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27653__auto__ = (function (){var statearr_28988 = f__27652__auto__.call(null);
(statearr_28988[(6)] = c__27651__auto___28990);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___28990,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29010 = arguments.length;
switch (G__29010) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29064,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29064,out){
return (function (state_29042){
var state_val_29043 = (state_29042[(1)]);
if((state_val_29043 === (7))){
var inst_29021 = (state_29042[(7)]);
var inst_29022 = (state_29042[(8)]);
var inst_29021__$1 = (state_29042[(2)]);
var inst_29022__$1 = cljs.core.nth.call(null,inst_29021__$1,(0),null);
var inst_29023 = cljs.core.nth.call(null,inst_29021__$1,(1),null);
var inst_29024 = (inst_29022__$1 == null);
var state_29042__$1 = (function (){var statearr_29044 = state_29042;
(statearr_29044[(7)] = inst_29021__$1);

(statearr_29044[(8)] = inst_29022__$1);

(statearr_29044[(9)] = inst_29023);

return statearr_29044;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29045_29065 = state_29042__$1;
(statearr_29045_29065[(1)] = (8));

} else {
var statearr_29046_29066 = state_29042__$1;
(statearr_29046_29066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (1))){
var inst_29011 = cljs.core.vec.call(null,chs);
var inst_29012 = inst_29011;
var state_29042__$1 = (function (){var statearr_29047 = state_29042;
(statearr_29047[(10)] = inst_29012);

return statearr_29047;
})();
var statearr_29048_29067 = state_29042__$1;
(statearr_29048_29067[(2)] = null);

(statearr_29048_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (4))){
var inst_29012 = (state_29042[(10)]);
var state_29042__$1 = state_29042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29042__$1,(7),inst_29012);
} else {
if((state_val_29043 === (6))){
var inst_29038 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29049_29068 = state_29042__$1;
(statearr_29049_29068[(2)] = inst_29038);

(statearr_29049_29068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (3))){
var inst_29040 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29042__$1,inst_29040);
} else {
if((state_val_29043 === (2))){
var inst_29012 = (state_29042[(10)]);
var inst_29014 = cljs.core.count.call(null,inst_29012);
var inst_29015 = (inst_29014 > (0));
var state_29042__$1 = state_29042;
if(cljs.core.truth_(inst_29015)){
var statearr_29051_29069 = state_29042__$1;
(statearr_29051_29069[(1)] = (4));

} else {
var statearr_29052_29070 = state_29042__$1;
(statearr_29052_29070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (11))){
var inst_29012 = (state_29042[(10)]);
var inst_29031 = (state_29042[(2)]);
var tmp29050 = inst_29012;
var inst_29012__$1 = tmp29050;
var state_29042__$1 = (function (){var statearr_29053 = state_29042;
(statearr_29053[(11)] = inst_29031);

(statearr_29053[(10)] = inst_29012__$1);

return statearr_29053;
})();
var statearr_29054_29071 = state_29042__$1;
(statearr_29054_29071[(2)] = null);

(statearr_29054_29071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (9))){
var inst_29022 = (state_29042[(8)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29042__$1,(11),out,inst_29022);
} else {
if((state_val_29043 === (5))){
var inst_29036 = cljs.core.async.close_BANG_.call(null,out);
var state_29042__$1 = state_29042;
var statearr_29055_29072 = state_29042__$1;
(statearr_29055_29072[(2)] = inst_29036);

(statearr_29055_29072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (10))){
var inst_29034 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29056_29073 = state_29042__$1;
(statearr_29056_29073[(2)] = inst_29034);

(statearr_29056_29073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (8))){
var inst_29021 = (state_29042[(7)]);
var inst_29022 = (state_29042[(8)]);
var inst_29023 = (state_29042[(9)]);
var inst_29012 = (state_29042[(10)]);
var inst_29026 = (function (){var cs = inst_29012;
var vec__29017 = inst_29021;
var v = inst_29022;
var c = inst_29023;
return ((function (cs,vec__29017,v,c,inst_29021,inst_29022,inst_29023,inst_29012,state_val_29043,c__27651__auto___29064,out){
return (function (p1__29008_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29008_SHARP_);
});
;})(cs,vec__29017,v,c,inst_29021,inst_29022,inst_29023,inst_29012,state_val_29043,c__27651__auto___29064,out))
})();
var inst_29027 = cljs.core.filterv.call(null,inst_29026,inst_29012);
var inst_29012__$1 = inst_29027;
var state_29042__$1 = (function (){var statearr_29057 = state_29042;
(statearr_29057[(10)] = inst_29012__$1);

return statearr_29057;
})();
var statearr_29058_29074 = state_29042__$1;
(statearr_29058_29074[(2)] = null);

(statearr_29058_29074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29064,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29064,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29059 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29059[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29059[(1)] = (1));

return statearr_29059;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29042){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29060){if((e29060 instanceof Object)){
var ex__27565__auto__ = e29060;
var statearr_29061_29075 = state_29042;
(statearr_29061_29075[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29042;
state_29042 = G__29076;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29064,out))
})();
var state__27653__auto__ = (function (){var statearr_29062 = f__27652__auto__.call(null);
(statearr_29062[(6)] = c__27651__auto___29064);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29064,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29078 = arguments.length;
switch (G__29078) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29123,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29123,out){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (7))){
var inst_29084 = (state_29102[(7)]);
var inst_29084__$1 = (state_29102[(2)]);
var inst_29085 = (inst_29084__$1 == null);
var inst_29086 = cljs.core.not.call(null,inst_29085);
var state_29102__$1 = (function (){var statearr_29104 = state_29102;
(statearr_29104[(7)] = inst_29084__$1);

return statearr_29104;
})();
if(inst_29086){
var statearr_29105_29124 = state_29102__$1;
(statearr_29105_29124[(1)] = (8));

} else {
var statearr_29106_29125 = state_29102__$1;
(statearr_29106_29125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (1))){
var inst_29079 = (0);
var state_29102__$1 = (function (){var statearr_29107 = state_29102;
(statearr_29107[(8)] = inst_29079);

return statearr_29107;
})();
var statearr_29108_29126 = state_29102__$1;
(statearr_29108_29126[(2)] = null);

(statearr_29108_29126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (4))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(7),ch);
} else {
if((state_val_29103 === (6))){
var inst_29097 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29109_29127 = state_29102__$1;
(statearr_29109_29127[(2)] = inst_29097);

(statearr_29109_29127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (3))){
var inst_29099 = (state_29102[(2)]);
var inst_29100 = cljs.core.async.close_BANG_.call(null,out);
var state_29102__$1 = (function (){var statearr_29110 = state_29102;
(statearr_29110[(9)] = inst_29099);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (2))){
var inst_29079 = (state_29102[(8)]);
var inst_29081 = (inst_29079 < n);
var state_29102__$1 = state_29102;
if(cljs.core.truth_(inst_29081)){
var statearr_29111_29128 = state_29102__$1;
(statearr_29111_29128[(1)] = (4));

} else {
var statearr_29112_29129 = state_29102__$1;
(statearr_29112_29129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (11))){
var inst_29079 = (state_29102[(8)]);
var inst_29089 = (state_29102[(2)]);
var inst_29090 = (inst_29079 + (1));
var inst_29079__$1 = inst_29090;
var state_29102__$1 = (function (){var statearr_29113 = state_29102;
(statearr_29113[(10)] = inst_29089);

(statearr_29113[(8)] = inst_29079__$1);

return statearr_29113;
})();
var statearr_29114_29130 = state_29102__$1;
(statearr_29114_29130[(2)] = null);

(statearr_29114_29130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (9))){
var state_29102__$1 = state_29102;
var statearr_29115_29131 = state_29102__$1;
(statearr_29115_29131[(2)] = null);

(statearr_29115_29131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (5))){
var state_29102__$1 = state_29102;
var statearr_29116_29132 = state_29102__$1;
(statearr_29116_29132[(2)] = null);

(statearr_29116_29132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (10))){
var inst_29094 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29117_29133 = state_29102__$1;
(statearr_29117_29133[(2)] = inst_29094);

(statearr_29117_29133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (8))){
var inst_29084 = (state_29102[(7)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29102__$1,(11),out,inst_29084);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29123,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29123,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29118[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29118[(1)] = (1));

return statearr_29118;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29102){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29119){if((e29119 instanceof Object)){
var ex__27565__auto__ = e29119;
var statearr_29120_29134 = state_29102;
(statearr_29120_29134[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29102;
state_29102 = G__29135;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29123,out))
})();
var state__27653__auto__ = (function (){var statearr_29121 = f__27652__auto__.call(null);
(statearr_29121[(6)] = c__27651__auto___29123);

return statearr_29121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29123,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29137 = (function (f,ch,meta29138){
this.f = f;
this.ch = ch;
this.meta29138 = meta29138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29139,meta29138__$1){
var self__ = this;
var _29139__$1 = this;
return (new cljs.core.async.t_cljs$core$async29137(self__.f,self__.ch,meta29138__$1));
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29139){
var self__ = this;
var _29139__$1 = this;
return self__.meta29138;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29140 = (function (f,ch,meta29138,_,fn1,meta29141){
this.f = f;
this.ch = ch;
this.meta29138 = meta29138;
this._ = _;
this.fn1 = fn1;
this.meta29141 = meta29141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29142,meta29141__$1){
var self__ = this;
var _29142__$1 = this;
return (new cljs.core.async.t_cljs$core$async29140(self__.f,self__.ch,self__.meta29138,self__._,self__.fn1,meta29141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29142){
var self__ = this;
var _29142__$1 = this;
return self__.meta29141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29136_SHARP_){
return f1.call(null,(((p1__29136_SHARP_ == null))?null:self__.f.call(null,p1__29136_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29138","meta29138",-1389139266,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29137","cljs.core.async/t_cljs$core$async29137",370633647,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29141","meta29141",-427324562,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29140";

cljs.core.async.t_cljs$core$async29140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29140");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29140.
 */
cljs.core.async.__GT_t_cljs$core$async29140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29140(f__$1,ch__$1,meta29138__$1,___$2,fn1__$1,meta29141){
return (new cljs.core.async.t_cljs$core$async29140(f__$1,ch__$1,meta29138__$1,___$2,fn1__$1,meta29141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29140(self__.f,self__.ch,self__.meta29138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29138","meta29138",-1389139266,null)], null);
});

cljs.core.async.t_cljs$core$async29137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29137";

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29137");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29137.
 */
cljs.core.async.__GT_t_cljs$core$async29137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29137(f__$1,ch__$1,meta29138){
return (new cljs.core.async.t_cljs$core$async29137(f__$1,ch__$1,meta29138));
});

}

return (new cljs.core.async.t_cljs$core$async29137(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29143 = (function (f,ch,meta29144){
this.f = f;
this.ch = ch;
this.meta29144 = meta29144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29145,meta29144__$1){
var self__ = this;
var _29145__$1 = this;
return (new cljs.core.async.t_cljs$core$async29143(self__.f,self__.ch,meta29144__$1));
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29145){
var self__ = this;
var _29145__$1 = this;
return self__.meta29144;
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29144","meta29144",1079442081,null)], null);
});

cljs.core.async.t_cljs$core$async29143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29143";

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29143");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29143.
 */
cljs.core.async.__GT_t_cljs$core$async29143 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29143(f__$1,ch__$1,meta29144){
return (new cljs.core.async.t_cljs$core$async29143(f__$1,ch__$1,meta29144));
});

}

return (new cljs.core.async.t_cljs$core$async29143(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29146 = (function (p,ch,meta29147){
this.p = p;
this.ch = ch;
this.meta29147 = meta29147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29148,meta29147__$1){
var self__ = this;
var _29148__$1 = this;
return (new cljs.core.async.t_cljs$core$async29146(self__.p,self__.ch,meta29147__$1));
});

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29148){
var self__ = this;
var _29148__$1 = this;
return self__.meta29147;
});

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29147","meta29147",-1316074527,null)], null);
});

cljs.core.async.t_cljs$core$async29146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29146";

cljs.core.async.t_cljs$core$async29146.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29146");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29146.
 */
cljs.core.async.__GT_t_cljs$core$async29146 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29146(p__$1,ch__$1,meta29147){
return (new cljs.core.async.t_cljs$core$async29146(p__$1,ch__$1,meta29147));
});

}

return (new cljs.core.async.t_cljs$core$async29146(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29150 = arguments.length;
switch (G__29150) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29190,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29190,out){
return (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (7))){
var inst_29167 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29173_29191 = state_29171__$1;
(statearr_29173_29191[(2)] = inst_29167);

(statearr_29173_29191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (1))){
var state_29171__$1 = state_29171;
var statearr_29174_29192 = state_29171__$1;
(statearr_29174_29192[(2)] = null);

(statearr_29174_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (4))){
var inst_29153 = (state_29171[(7)]);
var inst_29153__$1 = (state_29171[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var state_29171__$1 = (function (){var statearr_29175 = state_29171;
(statearr_29175[(7)] = inst_29153__$1);

return statearr_29175;
})();
if(cljs.core.truth_(inst_29154)){
var statearr_29176_29193 = state_29171__$1;
(statearr_29176_29193[(1)] = (5));

} else {
var statearr_29177_29194 = state_29171__$1;
(statearr_29177_29194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (6))){
var inst_29153 = (state_29171[(7)]);
var inst_29158 = p.call(null,inst_29153);
var state_29171__$1 = state_29171;
if(cljs.core.truth_(inst_29158)){
var statearr_29178_29195 = state_29171__$1;
(statearr_29178_29195[(1)] = (8));

} else {
var statearr_29179_29196 = state_29171__$1;
(statearr_29179_29196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (3))){
var inst_29169 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else {
if((state_val_29172 === (2))){
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29171__$1,(4),ch);
} else {
if((state_val_29172 === (11))){
var inst_29161 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29180_29197 = state_29171__$1;
(statearr_29180_29197[(2)] = inst_29161);

(statearr_29180_29197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (9))){
var state_29171__$1 = state_29171;
var statearr_29181_29198 = state_29171__$1;
(statearr_29181_29198[(2)] = null);

(statearr_29181_29198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (5))){
var inst_29156 = cljs.core.async.close_BANG_.call(null,out);
var state_29171__$1 = state_29171;
var statearr_29182_29199 = state_29171__$1;
(statearr_29182_29199[(2)] = inst_29156);

(statearr_29182_29199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (10))){
var inst_29164 = (state_29171[(2)]);
var state_29171__$1 = (function (){var statearr_29183 = state_29171;
(statearr_29183[(8)] = inst_29164);

return statearr_29183;
})();
var statearr_29184_29200 = state_29171__$1;
(statearr_29184_29200[(2)] = null);

(statearr_29184_29200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (8))){
var inst_29153 = (state_29171[(7)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(11),out,inst_29153);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29190,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29190,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29185 = [null,null,null,null,null,null,null,null,null];
(statearr_29185[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29185[(1)] = (1));

return statearr_29185;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29171){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29186){if((e29186 instanceof Object)){
var ex__27565__auto__ = e29186;
var statearr_29187_29201 = state_29171;
(statearr_29187_29201[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29202 = state_29171;
state_29171 = G__29202;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29190,out))
})();
var state__27653__auto__ = (function (){var statearr_29188 = f__27652__auto__.call(null);
(statearr_29188[(6)] = c__27651__auto___29190);

return statearr_29188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29190,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29204 = arguments.length;
switch (G__29204) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__){
return (function (state_29267){
var state_val_29268 = (state_29267[(1)]);
if((state_val_29268 === (7))){
var inst_29263 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29269_29307 = state_29267__$1;
(statearr_29269_29307[(2)] = inst_29263);

(statearr_29269_29307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (20))){
var inst_29233 = (state_29267[(7)]);
var inst_29244 = (state_29267[(2)]);
var inst_29245 = cljs.core.next.call(null,inst_29233);
var inst_29219 = inst_29245;
var inst_29220 = null;
var inst_29221 = (0);
var inst_29222 = (0);
var state_29267__$1 = (function (){var statearr_29270 = state_29267;
(statearr_29270[(8)] = inst_29244);

(statearr_29270[(9)] = inst_29219);

(statearr_29270[(10)] = inst_29220);

(statearr_29270[(11)] = inst_29222);

(statearr_29270[(12)] = inst_29221);

return statearr_29270;
})();
var statearr_29271_29308 = state_29267__$1;
(statearr_29271_29308[(2)] = null);

(statearr_29271_29308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (1))){
var state_29267__$1 = state_29267;
var statearr_29272_29309 = state_29267__$1;
(statearr_29272_29309[(2)] = null);

(statearr_29272_29309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (4))){
var inst_29208 = (state_29267[(13)]);
var inst_29208__$1 = (state_29267[(2)]);
var inst_29209 = (inst_29208__$1 == null);
var state_29267__$1 = (function (){var statearr_29273 = state_29267;
(statearr_29273[(13)] = inst_29208__$1);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29209)){
var statearr_29274_29310 = state_29267__$1;
(statearr_29274_29310[(1)] = (5));

} else {
var statearr_29275_29311 = state_29267__$1;
(statearr_29275_29311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (15))){
var state_29267__$1 = state_29267;
var statearr_29279_29312 = state_29267__$1;
(statearr_29279_29312[(2)] = null);

(statearr_29279_29312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (21))){
var state_29267__$1 = state_29267;
var statearr_29280_29313 = state_29267__$1;
(statearr_29280_29313[(2)] = null);

(statearr_29280_29313[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (13))){
var inst_29219 = (state_29267[(9)]);
var inst_29220 = (state_29267[(10)]);
var inst_29222 = (state_29267[(11)]);
var inst_29221 = (state_29267[(12)]);
var inst_29229 = (state_29267[(2)]);
var inst_29230 = (inst_29222 + (1));
var tmp29276 = inst_29219;
var tmp29277 = inst_29220;
var tmp29278 = inst_29221;
var inst_29219__$1 = tmp29276;
var inst_29220__$1 = tmp29277;
var inst_29221__$1 = tmp29278;
var inst_29222__$1 = inst_29230;
var state_29267__$1 = (function (){var statearr_29281 = state_29267;
(statearr_29281[(9)] = inst_29219__$1);

(statearr_29281[(10)] = inst_29220__$1);

(statearr_29281[(14)] = inst_29229);

(statearr_29281[(11)] = inst_29222__$1);

(statearr_29281[(12)] = inst_29221__$1);

return statearr_29281;
})();
var statearr_29282_29314 = state_29267__$1;
(statearr_29282_29314[(2)] = null);

(statearr_29282_29314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (22))){
var state_29267__$1 = state_29267;
var statearr_29283_29315 = state_29267__$1;
(statearr_29283_29315[(2)] = null);

(statearr_29283_29315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (6))){
var inst_29208 = (state_29267[(13)]);
var inst_29217 = f.call(null,inst_29208);
var inst_29218 = cljs.core.seq.call(null,inst_29217);
var inst_29219 = inst_29218;
var inst_29220 = null;
var inst_29221 = (0);
var inst_29222 = (0);
var state_29267__$1 = (function (){var statearr_29284 = state_29267;
(statearr_29284[(9)] = inst_29219);

(statearr_29284[(10)] = inst_29220);

(statearr_29284[(11)] = inst_29222);

(statearr_29284[(12)] = inst_29221);

return statearr_29284;
})();
var statearr_29285_29316 = state_29267__$1;
(statearr_29285_29316[(2)] = null);

(statearr_29285_29316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (17))){
var inst_29233 = (state_29267[(7)]);
var inst_29237 = cljs.core.chunk_first.call(null,inst_29233);
var inst_29238 = cljs.core.chunk_rest.call(null,inst_29233);
var inst_29239 = cljs.core.count.call(null,inst_29237);
var inst_29219 = inst_29238;
var inst_29220 = inst_29237;
var inst_29221 = inst_29239;
var inst_29222 = (0);
var state_29267__$1 = (function (){var statearr_29286 = state_29267;
(statearr_29286[(9)] = inst_29219);

(statearr_29286[(10)] = inst_29220);

(statearr_29286[(11)] = inst_29222);

(statearr_29286[(12)] = inst_29221);

return statearr_29286;
})();
var statearr_29287_29317 = state_29267__$1;
(statearr_29287_29317[(2)] = null);

(statearr_29287_29317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (3))){
var inst_29265 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29267__$1,inst_29265);
} else {
if((state_val_29268 === (12))){
var inst_29253 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29288_29318 = state_29267__$1;
(statearr_29288_29318[(2)] = inst_29253);

(statearr_29288_29318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (2))){
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29267__$1,(4),in$);
} else {
if((state_val_29268 === (23))){
var inst_29261 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29289_29319 = state_29267__$1;
(statearr_29289_29319[(2)] = inst_29261);

(statearr_29289_29319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (19))){
var inst_29248 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29290_29320 = state_29267__$1;
(statearr_29290_29320[(2)] = inst_29248);

(statearr_29290_29320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (11))){
var inst_29219 = (state_29267[(9)]);
var inst_29233 = (state_29267[(7)]);
var inst_29233__$1 = cljs.core.seq.call(null,inst_29219);
var state_29267__$1 = (function (){var statearr_29291 = state_29267;
(statearr_29291[(7)] = inst_29233__$1);

return statearr_29291;
})();
if(inst_29233__$1){
var statearr_29292_29321 = state_29267__$1;
(statearr_29292_29321[(1)] = (14));

} else {
var statearr_29293_29322 = state_29267__$1;
(statearr_29293_29322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (9))){
var inst_29255 = (state_29267[(2)]);
var inst_29256 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29267__$1 = (function (){var statearr_29294 = state_29267;
(statearr_29294[(15)] = inst_29255);

return statearr_29294;
})();
if(cljs.core.truth_(inst_29256)){
var statearr_29295_29323 = state_29267__$1;
(statearr_29295_29323[(1)] = (21));

} else {
var statearr_29296_29324 = state_29267__$1;
(statearr_29296_29324[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (5))){
var inst_29211 = cljs.core.async.close_BANG_.call(null,out);
var state_29267__$1 = state_29267;
var statearr_29297_29325 = state_29267__$1;
(statearr_29297_29325[(2)] = inst_29211);

(statearr_29297_29325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (14))){
var inst_29233 = (state_29267[(7)]);
var inst_29235 = cljs.core.chunked_seq_QMARK_.call(null,inst_29233);
var state_29267__$1 = state_29267;
if(inst_29235){
var statearr_29298_29326 = state_29267__$1;
(statearr_29298_29326[(1)] = (17));

} else {
var statearr_29299_29327 = state_29267__$1;
(statearr_29299_29327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (16))){
var inst_29251 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29300_29328 = state_29267__$1;
(statearr_29300_29328[(2)] = inst_29251);

(statearr_29300_29328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (10))){
var inst_29220 = (state_29267[(10)]);
var inst_29222 = (state_29267[(11)]);
var inst_29227 = cljs.core._nth.call(null,inst_29220,inst_29222);
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29267__$1,(13),out,inst_29227);
} else {
if((state_val_29268 === (18))){
var inst_29233 = (state_29267[(7)]);
var inst_29242 = cljs.core.first.call(null,inst_29233);
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29267__$1,(20),out,inst_29242);
} else {
if((state_val_29268 === (8))){
var inst_29222 = (state_29267[(11)]);
var inst_29221 = (state_29267[(12)]);
var inst_29224 = (inst_29222 < inst_29221);
var inst_29225 = inst_29224;
var state_29267__$1 = state_29267;
if(cljs.core.truth_(inst_29225)){
var statearr_29301_29329 = state_29267__$1;
(statearr_29301_29329[(1)] = (10));

} else {
var statearr_29302_29330 = state_29267__$1;
(statearr_29302_29330[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____0 = (function (){
var statearr_29303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29303[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__);

(statearr_29303[(1)] = (1));

return statearr_29303;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____1 = (function (state_29267){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29304){if((e29304 instanceof Object)){
var ex__27565__auto__ = e29304;
var statearr_29305_29331 = state_29267;
(statearr_29305_29331[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29332 = state_29267;
state_29267 = G__29332;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__ = function(state_29267){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____1.call(this,state_29267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27562__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__))
})();
var state__27653__auto__ = (function (){var statearr_29306 = f__27652__auto__.call(null);
(statearr_29306[(6)] = c__27651__auto__);

return statearr_29306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__))
);

return c__27651__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29334 = arguments.length;
switch (G__29334) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29337 = arguments.length;
switch (G__29337) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29340 = arguments.length;
switch (G__29340) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29387,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29387,out){
return (function (state_29364){
var state_val_29365 = (state_29364[(1)]);
if((state_val_29365 === (7))){
var inst_29359 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29366_29388 = state_29364__$1;
(statearr_29366_29388[(2)] = inst_29359);

(statearr_29366_29388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (1))){
var inst_29341 = null;
var state_29364__$1 = (function (){var statearr_29367 = state_29364;
(statearr_29367[(7)] = inst_29341);

return statearr_29367;
})();
var statearr_29368_29389 = state_29364__$1;
(statearr_29368_29389[(2)] = null);

(statearr_29368_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (4))){
var inst_29344 = (state_29364[(8)]);
var inst_29344__$1 = (state_29364[(2)]);
var inst_29345 = (inst_29344__$1 == null);
var inst_29346 = cljs.core.not.call(null,inst_29345);
var state_29364__$1 = (function (){var statearr_29369 = state_29364;
(statearr_29369[(8)] = inst_29344__$1);

return statearr_29369;
})();
if(inst_29346){
var statearr_29370_29390 = state_29364__$1;
(statearr_29370_29390[(1)] = (5));

} else {
var statearr_29371_29391 = state_29364__$1;
(statearr_29371_29391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (6))){
var state_29364__$1 = state_29364;
var statearr_29372_29392 = state_29364__$1;
(statearr_29372_29392[(2)] = null);

(statearr_29372_29392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (3))){
var inst_29361 = (state_29364[(2)]);
var inst_29362 = cljs.core.async.close_BANG_.call(null,out);
var state_29364__$1 = (function (){var statearr_29373 = state_29364;
(statearr_29373[(9)] = inst_29361);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29364__$1,inst_29362);
} else {
if((state_val_29365 === (2))){
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29364__$1,(4),ch);
} else {
if((state_val_29365 === (11))){
var inst_29344 = (state_29364[(8)]);
var inst_29353 = (state_29364[(2)]);
var inst_29341 = inst_29344;
var state_29364__$1 = (function (){var statearr_29374 = state_29364;
(statearr_29374[(7)] = inst_29341);

(statearr_29374[(10)] = inst_29353);

return statearr_29374;
})();
var statearr_29375_29393 = state_29364__$1;
(statearr_29375_29393[(2)] = null);

(statearr_29375_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (9))){
var inst_29344 = (state_29364[(8)]);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29364__$1,(11),out,inst_29344);
} else {
if((state_val_29365 === (5))){
var inst_29341 = (state_29364[(7)]);
var inst_29344 = (state_29364[(8)]);
var inst_29348 = cljs.core._EQ_.call(null,inst_29344,inst_29341);
var state_29364__$1 = state_29364;
if(inst_29348){
var statearr_29377_29394 = state_29364__$1;
(statearr_29377_29394[(1)] = (8));

} else {
var statearr_29378_29395 = state_29364__$1;
(statearr_29378_29395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (10))){
var inst_29356 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29379_29396 = state_29364__$1;
(statearr_29379_29396[(2)] = inst_29356);

(statearr_29379_29396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (8))){
var inst_29341 = (state_29364[(7)]);
var tmp29376 = inst_29341;
var inst_29341__$1 = tmp29376;
var state_29364__$1 = (function (){var statearr_29380 = state_29364;
(statearr_29380[(7)] = inst_29341__$1);

return statearr_29380;
})();
var statearr_29381_29397 = state_29364__$1;
(statearr_29381_29397[(2)] = null);

(statearr_29381_29397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29387,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29387,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29364){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__27565__auto__ = e29383;
var statearr_29384_29398 = state_29364;
(statearr_29384_29398[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29399 = state_29364;
state_29364 = G__29399;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29387,out))
})();
var state__27653__auto__ = (function (){var statearr_29385 = f__27652__auto__.call(null);
(statearr_29385[(6)] = c__27651__auto___29387);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29387,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29401 = arguments.length;
switch (G__29401) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29467,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29467,out){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29441_29468 = state_29439__$1;
(statearr_29441_29468[(2)] = inst_29435);

(statearr_29441_29468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var inst_29402 = (new Array(n));
var inst_29403 = inst_29402;
var inst_29404 = (0);
var state_29439__$1 = (function (){var statearr_29442 = state_29439;
(statearr_29442[(7)] = inst_29404);

(statearr_29442[(8)] = inst_29403);

return statearr_29442;
})();
var statearr_29443_29469 = state_29439__$1;
(statearr_29443_29469[(2)] = null);

(statearr_29443_29469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29407 = (state_29439[(9)]);
var inst_29407__$1 = (state_29439[(2)]);
var inst_29408 = (inst_29407__$1 == null);
var inst_29409 = cljs.core.not.call(null,inst_29408);
var state_29439__$1 = (function (){var statearr_29444 = state_29439;
(statearr_29444[(9)] = inst_29407__$1);

return statearr_29444;
})();
if(inst_29409){
var statearr_29445_29470 = state_29439__$1;
(statearr_29445_29470[(1)] = (5));

} else {
var statearr_29446_29471 = state_29439__$1;
(statearr_29446_29471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (15))){
var inst_29429 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29447_29472 = state_29439__$1;
(statearr_29447_29472[(2)] = inst_29429);

(statearr_29447_29472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (13))){
var state_29439__$1 = state_29439;
var statearr_29448_29473 = state_29439__$1;
(statearr_29448_29473[(2)] = null);

(statearr_29448_29473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29404 = (state_29439[(7)]);
var inst_29425 = (inst_29404 > (0));
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29425)){
var statearr_29449_29474 = state_29439__$1;
(statearr_29449_29474[(1)] = (12));

} else {
var statearr_29450_29475 = state_29439__$1;
(statearr_29450_29475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (12))){
var inst_29403 = (state_29439[(8)]);
var inst_29427 = cljs.core.vec.call(null,inst_29403);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(15),out,inst_29427);
} else {
if((state_val_29440 === (2))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else {
if((state_val_29440 === (11))){
var inst_29419 = (state_29439[(2)]);
var inst_29420 = (new Array(n));
var inst_29403 = inst_29420;
var inst_29404 = (0);
var state_29439__$1 = (function (){var statearr_29451 = state_29439;
(statearr_29451[(7)] = inst_29404);

(statearr_29451[(8)] = inst_29403);

(statearr_29451[(10)] = inst_29419);

return statearr_29451;
})();
var statearr_29452_29476 = state_29439__$1;
(statearr_29452_29476[(2)] = null);

(statearr_29452_29476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var inst_29403 = (state_29439[(8)]);
var inst_29417 = cljs.core.vec.call(null,inst_29403);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(11),out,inst_29417);
} else {
if((state_val_29440 === (5))){
var inst_29407 = (state_29439[(9)]);
var inst_29404 = (state_29439[(7)]);
var inst_29403 = (state_29439[(8)]);
var inst_29412 = (state_29439[(11)]);
var inst_29411 = (inst_29403[inst_29404] = inst_29407);
var inst_29412__$1 = (inst_29404 + (1));
var inst_29413 = (inst_29412__$1 < n);
var state_29439__$1 = (function (){var statearr_29453 = state_29439;
(statearr_29453[(12)] = inst_29411);

(statearr_29453[(11)] = inst_29412__$1);

return statearr_29453;
})();
if(cljs.core.truth_(inst_29413)){
var statearr_29454_29477 = state_29439__$1;
(statearr_29454_29477[(1)] = (8));

} else {
var statearr_29455_29478 = state_29439__$1;
(statearr_29455_29478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (14))){
var inst_29432 = (state_29439[(2)]);
var inst_29433 = cljs.core.async.close_BANG_.call(null,out);
var state_29439__$1 = (function (){var statearr_29457 = state_29439;
(statearr_29457[(13)] = inst_29432);

return statearr_29457;
})();
var statearr_29458_29479 = state_29439__$1;
(statearr_29458_29479[(2)] = inst_29433);

(statearr_29458_29479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (10))){
var inst_29423 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29459_29480 = state_29439__$1;
(statearr_29459_29480[(2)] = inst_29423);

(statearr_29459_29480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29403 = (state_29439[(8)]);
var inst_29412 = (state_29439[(11)]);
var tmp29456 = inst_29403;
var inst_29403__$1 = tmp29456;
var inst_29404 = inst_29412;
var state_29439__$1 = (function (){var statearr_29460 = state_29439;
(statearr_29460[(7)] = inst_29404);

(statearr_29460[(8)] = inst_29403__$1);

return statearr_29460;
})();
var statearr_29461_29481 = state_29439__$1;
(statearr_29461_29481[(2)] = null);

(statearr_29461_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29467,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29467,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29462[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29462[(1)] = (1));

return statearr_29462;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29439){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29463){if((e29463 instanceof Object)){
var ex__27565__auto__ = e29463;
var statearr_29464_29482 = state_29439;
(statearr_29464_29482[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29483 = state_29439;
state_29439 = G__29483;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29467,out))
})();
var state__27653__auto__ = (function (){var statearr_29465 = f__27652__auto__.call(null);
(statearr_29465[(6)] = c__27651__auto___29467);

return statearr_29465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29467,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29485 = arguments.length;
switch (G__29485) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27651__auto___29555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___29555,out){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___29555,out){
return (function (state_29527){
var state_val_29528 = (state_29527[(1)]);
if((state_val_29528 === (7))){
var inst_29523 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29529_29556 = state_29527__$1;
(statearr_29529_29556[(2)] = inst_29523);

(statearr_29529_29556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (1))){
var inst_29486 = [];
var inst_29487 = inst_29486;
var inst_29488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29527__$1 = (function (){var statearr_29530 = state_29527;
(statearr_29530[(7)] = inst_29487);

(statearr_29530[(8)] = inst_29488);

return statearr_29530;
})();
var statearr_29531_29557 = state_29527__$1;
(statearr_29531_29557[(2)] = null);

(statearr_29531_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (4))){
var inst_29491 = (state_29527[(9)]);
var inst_29491__$1 = (state_29527[(2)]);
var inst_29492 = (inst_29491__$1 == null);
var inst_29493 = cljs.core.not.call(null,inst_29492);
var state_29527__$1 = (function (){var statearr_29532 = state_29527;
(statearr_29532[(9)] = inst_29491__$1);

return statearr_29532;
})();
if(inst_29493){
var statearr_29533_29558 = state_29527__$1;
(statearr_29533_29558[(1)] = (5));

} else {
var statearr_29534_29559 = state_29527__$1;
(statearr_29534_29559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (15))){
var inst_29517 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29535_29560 = state_29527__$1;
(statearr_29535_29560[(2)] = inst_29517);

(statearr_29535_29560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (13))){
var state_29527__$1 = state_29527;
var statearr_29536_29561 = state_29527__$1;
(statearr_29536_29561[(2)] = null);

(statearr_29536_29561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (6))){
var inst_29487 = (state_29527[(7)]);
var inst_29512 = inst_29487.length;
var inst_29513 = (inst_29512 > (0));
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29513)){
var statearr_29537_29562 = state_29527__$1;
(statearr_29537_29562[(1)] = (12));

} else {
var statearr_29538_29563 = state_29527__$1;
(statearr_29538_29563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (3))){
var inst_29525 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29527__$1,inst_29525);
} else {
if((state_val_29528 === (12))){
var inst_29487 = (state_29527[(7)]);
var inst_29515 = cljs.core.vec.call(null,inst_29487);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29527__$1,(15),out,inst_29515);
} else {
if((state_val_29528 === (2))){
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(4),ch);
} else {
if((state_val_29528 === (11))){
var inst_29491 = (state_29527[(9)]);
var inst_29495 = (state_29527[(10)]);
var inst_29505 = (state_29527[(2)]);
var inst_29506 = [];
var inst_29507 = inst_29506.push(inst_29491);
var inst_29487 = inst_29506;
var inst_29488 = inst_29495;
var state_29527__$1 = (function (){var statearr_29539 = state_29527;
(statearr_29539[(11)] = inst_29505);

(statearr_29539[(12)] = inst_29507);

(statearr_29539[(7)] = inst_29487);

(statearr_29539[(8)] = inst_29488);

return statearr_29539;
})();
var statearr_29540_29564 = state_29527__$1;
(statearr_29540_29564[(2)] = null);

(statearr_29540_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (9))){
var inst_29487 = (state_29527[(7)]);
var inst_29503 = cljs.core.vec.call(null,inst_29487);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29527__$1,(11),out,inst_29503);
} else {
if((state_val_29528 === (5))){
var inst_29491 = (state_29527[(9)]);
var inst_29488 = (state_29527[(8)]);
var inst_29495 = (state_29527[(10)]);
var inst_29495__$1 = f.call(null,inst_29491);
var inst_29496 = cljs.core._EQ_.call(null,inst_29495__$1,inst_29488);
var inst_29497 = cljs.core.keyword_identical_QMARK_.call(null,inst_29488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29498 = ((inst_29496) || (inst_29497));
var state_29527__$1 = (function (){var statearr_29541 = state_29527;
(statearr_29541[(10)] = inst_29495__$1);

return statearr_29541;
})();
if(cljs.core.truth_(inst_29498)){
var statearr_29542_29565 = state_29527__$1;
(statearr_29542_29565[(1)] = (8));

} else {
var statearr_29543_29566 = state_29527__$1;
(statearr_29543_29566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (14))){
var inst_29520 = (state_29527[(2)]);
var inst_29521 = cljs.core.async.close_BANG_.call(null,out);
var state_29527__$1 = (function (){var statearr_29545 = state_29527;
(statearr_29545[(13)] = inst_29520);

return statearr_29545;
})();
var statearr_29546_29567 = state_29527__$1;
(statearr_29546_29567[(2)] = inst_29521);

(statearr_29546_29567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (10))){
var inst_29510 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29547_29568 = state_29527__$1;
(statearr_29547_29568[(2)] = inst_29510);

(statearr_29547_29568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (8))){
var inst_29487 = (state_29527[(7)]);
var inst_29491 = (state_29527[(9)]);
var inst_29495 = (state_29527[(10)]);
var inst_29500 = inst_29487.push(inst_29491);
var tmp29544 = inst_29487;
var inst_29487__$1 = tmp29544;
var inst_29488 = inst_29495;
var state_29527__$1 = (function (){var statearr_29548 = state_29527;
(statearr_29548[(14)] = inst_29500);

(statearr_29548[(7)] = inst_29487__$1);

(statearr_29548[(8)] = inst_29488);

return statearr_29548;
})();
var statearr_29549_29569 = state_29527__$1;
(statearr_29549_29569[(2)] = null);

(statearr_29549_29569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27651__auto___29555,out))
;
return ((function (switch__27561__auto__,c__27651__auto___29555,out){
return (function() {
var cljs$core$async$state_machine__27562__auto__ = null;
var cljs$core$async$state_machine__27562__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = cljs$core$async$state_machine__27562__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var cljs$core$async$state_machine__27562__auto____1 = (function (state_29527){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_29527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e29551){if((e29551 instanceof Object)){
var ex__27565__auto__ = e29551;
var statearr_29552_29570 = state_29527;
(statearr_29552_29570[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29571 = state_29527;
state_29527 = G__29571;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
cljs$core$async$state_machine__27562__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27562__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27562__auto____0;
cljs$core$async$state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27562__auto____1;
return cljs$core$async$state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___29555,out))
})();
var state__27653__auto__ = (function (){var statearr_29553 = f__27652__auto__.call(null);
(statearr_29553[(6)] = c__27651__auto___29555);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___29555,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557580558323
