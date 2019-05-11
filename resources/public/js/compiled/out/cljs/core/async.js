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
var G__47793 = arguments.length;
switch (G__47793) {
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
if(typeof cljs.core.async.t_cljs$core$async47794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47794 = (function (f,blockable,meta47795){
this.f = f;
this.blockable = blockable;
this.meta47795 = meta47795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47796,meta47795__$1){
var self__ = this;
var _47796__$1 = this;
return (new cljs.core.async.t_cljs$core$async47794(self__.f,self__.blockable,meta47795__$1));
});

cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47796){
var self__ = this;
var _47796__$1 = this;
return self__.meta47795;
});

cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47795","meta47795",-1620565206,null)], null);
});

cljs.core.async.t_cljs$core$async47794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47794";

cljs.core.async.t_cljs$core$async47794.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47794");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47794.
 */
cljs.core.async.__GT_t_cljs$core$async47794 = (function cljs$core$async$__GT_t_cljs$core$async47794(f__$1,blockable__$1,meta47795){
return (new cljs.core.async.t_cljs$core$async47794(f__$1,blockable__$1,meta47795));
});

}

return (new cljs.core.async.t_cljs$core$async47794(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47800 = arguments.length;
switch (G__47800) {
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
var G__47803 = arguments.length;
switch (G__47803) {
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
var G__47806 = arguments.length;
switch (G__47806) {
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
var val_47808 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47808);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47808,ret){
return (function (){
return fn1.call(null,val_47808);
});})(val_47808,ret))
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
var G__47810 = arguments.length;
switch (G__47810) {
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
var n__4376__auto___47812 = n;
var x_47813 = (0);
while(true){
if((x_47813 < n__4376__auto___47812)){
(a[x_47813] = (0));

var G__47814 = (x_47813 + (1));
x_47813 = G__47814;
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

var G__47815 = (i + (1));
i = G__47815;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47816 = (function (flag,meta47817){
this.flag = flag;
this.meta47817 = meta47817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47818,meta47817__$1){
var self__ = this;
var _47818__$1 = this;
return (new cljs.core.async.t_cljs$core$async47816(self__.flag,meta47817__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47818){
var self__ = this;
var _47818__$1 = this;
return self__.meta47817;
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47817","meta47817",-675733815,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47816";

cljs.core.async.t_cljs$core$async47816.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47816");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47816.
 */
cljs.core.async.__GT_t_cljs$core$async47816 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47816(flag__$1,meta47817){
return (new cljs.core.async.t_cljs$core$async47816(flag__$1,meta47817));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47816(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47819 = (function (flag,cb,meta47820){
this.flag = flag;
this.cb = cb;
this.meta47820 = meta47820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47821,meta47820__$1){
var self__ = this;
var _47821__$1 = this;
return (new cljs.core.async.t_cljs$core$async47819(self__.flag,self__.cb,meta47820__$1));
});

cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47821){
var self__ = this;
var _47821__$1 = this;
return self__.meta47820;
});

cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47820","meta47820",1638199627,null)], null);
});

cljs.core.async.t_cljs$core$async47819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47819";

cljs.core.async.t_cljs$core$async47819.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async47819");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47819.
 */
cljs.core.async.__GT_t_cljs$core$async47819 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47819(flag__$1,cb__$1,meta47820){
return (new cljs.core.async.t_cljs$core$async47819(flag__$1,cb__$1,meta47820));
});

}

return (new cljs.core.async.t_cljs$core$async47819(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47822_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47822_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47823_SHARP_,port], null));
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
var G__47824 = (i + (1));
i = G__47824;
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
var len__4499__auto___47830 = arguments.length;
var i__4500__auto___47831 = (0);
while(true){
if((i__4500__auto___47831 < len__4499__auto___47830)){
args__4502__auto__.push((arguments[i__4500__auto___47831]));

var G__47832 = (i__4500__auto___47831 + (1));
i__4500__auto___47831 = G__47832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47827){
var map__47828 = p__47827;
var map__47828__$1 = ((((!((map__47828 == null)))?(((((map__47828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47828):map__47828);
var opts = map__47828__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47825){
var G__47826 = cljs.core.first.call(null,seq47825);
var seq47825__$1 = cljs.core.next.call(null,seq47825);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47826,seq47825__$1);
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
var G__47834 = arguments.length;
switch (G__47834) {
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
var c__30792__auto___47880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___47880){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___47880){
return (function (state_47858){
var state_val_47859 = (state_47858[(1)]);
if((state_val_47859 === (7))){
var inst_47854 = (state_47858[(2)]);
var state_47858__$1 = state_47858;
var statearr_47860_47881 = state_47858__$1;
(statearr_47860_47881[(2)] = inst_47854);

(statearr_47860_47881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (1))){
var state_47858__$1 = state_47858;
var statearr_47861_47882 = state_47858__$1;
(statearr_47861_47882[(2)] = null);

(statearr_47861_47882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (4))){
var inst_47837 = (state_47858[(7)]);
var inst_47837__$1 = (state_47858[(2)]);
var inst_47838 = (inst_47837__$1 == null);
var state_47858__$1 = (function (){var statearr_47862 = state_47858;
(statearr_47862[(7)] = inst_47837__$1);

return statearr_47862;
})();
if(cljs.core.truth_(inst_47838)){
var statearr_47863_47883 = state_47858__$1;
(statearr_47863_47883[(1)] = (5));

} else {
var statearr_47864_47884 = state_47858__$1;
(statearr_47864_47884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (13))){
var state_47858__$1 = state_47858;
var statearr_47865_47885 = state_47858__$1;
(statearr_47865_47885[(2)] = null);

(statearr_47865_47885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (6))){
var inst_47837 = (state_47858[(7)]);
var state_47858__$1 = state_47858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47858__$1,(11),to,inst_47837);
} else {
if((state_val_47859 === (3))){
var inst_47856 = (state_47858[(2)]);
var state_47858__$1 = state_47858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47858__$1,inst_47856);
} else {
if((state_val_47859 === (12))){
var state_47858__$1 = state_47858;
var statearr_47866_47886 = state_47858__$1;
(statearr_47866_47886[(2)] = null);

(statearr_47866_47886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (2))){
var state_47858__$1 = state_47858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47858__$1,(4),from);
} else {
if((state_val_47859 === (11))){
var inst_47847 = (state_47858[(2)]);
var state_47858__$1 = state_47858;
if(cljs.core.truth_(inst_47847)){
var statearr_47867_47887 = state_47858__$1;
(statearr_47867_47887[(1)] = (12));

} else {
var statearr_47868_47888 = state_47858__$1;
(statearr_47868_47888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (9))){
var state_47858__$1 = state_47858;
var statearr_47869_47889 = state_47858__$1;
(statearr_47869_47889[(2)] = null);

(statearr_47869_47889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (5))){
var state_47858__$1 = state_47858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47870_47890 = state_47858__$1;
(statearr_47870_47890[(1)] = (8));

} else {
var statearr_47871_47891 = state_47858__$1;
(statearr_47871_47891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (14))){
var inst_47852 = (state_47858[(2)]);
var state_47858__$1 = state_47858;
var statearr_47872_47892 = state_47858__$1;
(statearr_47872_47892[(2)] = inst_47852);

(statearr_47872_47892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (10))){
var inst_47844 = (state_47858[(2)]);
var state_47858__$1 = state_47858;
var statearr_47873_47893 = state_47858__$1;
(statearr_47873_47893[(2)] = inst_47844);

(statearr_47873_47893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47859 === (8))){
var inst_47841 = cljs.core.async.close_BANG_.call(null,to);
var state_47858__$1 = state_47858;
var statearr_47874_47894 = state_47858__$1;
(statearr_47874_47894[(2)] = inst_47841);

(statearr_47874_47894[(1)] = (10));


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
});})(c__30792__auto___47880))
;
return ((function (switch__30635__auto__,c__30792__auto___47880){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_47875 = [null,null,null,null,null,null,null,null];
(statearr_47875[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_47875[(1)] = (1));

return statearr_47875;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_47858){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_47858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e47876){if((e47876 instanceof Object)){
var ex__30639__auto__ = e47876;
var statearr_47877_47895 = state_47858;
(statearr_47877_47895[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47896 = state_47858;
state_47858 = G__47896;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_47858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_47858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___47880))
})();
var state__30794__auto__ = (function (){var statearr_47878 = f__30793__auto__.call(null);
(statearr_47878[(6)] = c__30792__auto___47880);

return statearr_47878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___47880))
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
var process__$1 = ((function (jobs,results){
return (function (p__47897){
var vec__47898 = p__47897;
var v = cljs.core.nth.call(null,vec__47898,(0),null);
var p = cljs.core.nth.call(null,vec__47898,(1),null);
var job = vec__47898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30792__auto___48069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results){
return (function (state_47905){
var state_val_47906 = (state_47905[(1)]);
if((state_val_47906 === (1))){
var state_47905__$1 = state_47905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47905__$1,(2),res,v);
} else {
if((state_val_47906 === (2))){
var inst_47902 = (state_47905[(2)]);
var inst_47903 = cljs.core.async.close_BANG_.call(null,res);
var state_47905__$1 = (function (){var statearr_47907 = state_47905;
(statearr_47907[(7)] = inst_47902);

return statearr_47907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47905__$1,inst_47903);
} else {
return null;
}
}
});})(c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results))
;
return ((function (switch__30635__auto__,c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_47908 = [null,null,null,null,null,null,null,null];
(statearr_47908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__);

(statearr_47908[(1)] = (1));

return statearr_47908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1 = (function (state_47905){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_47905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e47909){if((e47909 instanceof Object)){
var ex__30639__auto__ = e47909;
var statearr_47910_48070 = state_47905;
(statearr_47910_48070[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48071 = state_47905;
state_47905 = G__48071;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = function(state_47905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1.call(this,state_47905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results))
})();
var state__30794__auto__ = (function (){var statearr_47911 = f__30793__auto__.call(null);
(statearr_47911[(6)] = c__30792__auto___48069);

return statearr_47911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48069,res,vec__47898,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__47912){
var vec__47913 = p__47912;
var v = cljs.core.nth.call(null,vec__47913,(0),null);
var p = cljs.core.nth.call(null,vec__47913,(1),null);
var job = vec__47913;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___48072 = n;
var __48073 = (0);
while(true){
if((__48073 < n__4376__auto___48072)){
var G__47916_48074 = type;
var G__47916_48075__$1 = (((G__47916_48074 instanceof cljs.core.Keyword))?G__47916_48074.fqn:null);
switch (G__47916_48075__$1) {
case "compute":
var c__30792__auto___48077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48073,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (__48073,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function (state_47929){
var state_val_47930 = (state_47929[(1)]);
if((state_val_47930 === (1))){
var state_47929__$1 = state_47929;
var statearr_47931_48078 = state_47929__$1;
(statearr_47931_48078[(2)] = null);

(statearr_47931_48078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (2))){
var state_47929__$1 = state_47929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47929__$1,(4),jobs);
} else {
if((state_val_47930 === (3))){
var inst_47927 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47929__$1,inst_47927);
} else {
if((state_val_47930 === (4))){
var inst_47919 = (state_47929[(2)]);
var inst_47920 = process__$1.call(null,inst_47919);
var state_47929__$1 = state_47929;
if(cljs.core.truth_(inst_47920)){
var statearr_47932_48079 = state_47929__$1;
(statearr_47932_48079[(1)] = (5));

} else {
var statearr_47933_48080 = state_47929__$1;
(statearr_47933_48080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (5))){
var state_47929__$1 = state_47929;
var statearr_47934_48081 = state_47929__$1;
(statearr_47934_48081[(2)] = null);

(statearr_47934_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (6))){
var state_47929__$1 = state_47929;
var statearr_47935_48082 = state_47929__$1;
(statearr_47935_48082[(2)] = null);

(statearr_47935_48082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47930 === (7))){
var inst_47925 = (state_47929[(2)]);
var state_47929__$1 = state_47929;
var statearr_47936_48083 = state_47929__$1;
(statearr_47936_48083[(2)] = inst_47925);

(statearr_47936_48083[(1)] = (3));


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
});})(__48073,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
;
return ((function (__48073,switch__30635__auto__,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_47937 = [null,null,null,null,null,null,null];
(statearr_47937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__);

(statearr_47937[(1)] = (1));

return statearr_47937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1 = (function (state_47929){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_47929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e47938){if((e47938 instanceof Object)){
var ex__30639__auto__ = e47938;
var statearr_47939_48084 = state_47929;
(statearr_47939_48084[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48085 = state_47929;
state_47929 = G__48085;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = function(state_47929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1.call(this,state_47929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__;
})()
;})(__48073,switch__30635__auto__,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
})();
var state__30794__auto__ = (function (){var statearr_47940 = f__30793__auto__.call(null);
(statearr_47940[(6)] = c__30792__auto___48077);

return statearr_47940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(__48073,c__30792__auto___48077,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
);


break;
case "async":
var c__30792__auto___48086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48073,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (__48073,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function (state_47953){
var state_val_47954 = (state_47953[(1)]);
if((state_val_47954 === (1))){
var state_47953__$1 = state_47953;
var statearr_47955_48087 = state_47953__$1;
(statearr_47955_48087[(2)] = null);

(statearr_47955_48087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47954 === (2))){
var state_47953__$1 = state_47953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47953__$1,(4),jobs);
} else {
if((state_val_47954 === (3))){
var inst_47951 = (state_47953[(2)]);
var state_47953__$1 = state_47953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47953__$1,inst_47951);
} else {
if((state_val_47954 === (4))){
var inst_47943 = (state_47953[(2)]);
var inst_47944 = async.call(null,inst_47943);
var state_47953__$1 = state_47953;
if(cljs.core.truth_(inst_47944)){
var statearr_47956_48088 = state_47953__$1;
(statearr_47956_48088[(1)] = (5));

} else {
var statearr_47957_48089 = state_47953__$1;
(statearr_47957_48089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47954 === (5))){
var state_47953__$1 = state_47953;
var statearr_47958_48090 = state_47953__$1;
(statearr_47958_48090[(2)] = null);

(statearr_47958_48090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47954 === (6))){
var state_47953__$1 = state_47953;
var statearr_47959_48091 = state_47953__$1;
(statearr_47959_48091[(2)] = null);

(statearr_47959_48091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47954 === (7))){
var inst_47949 = (state_47953[(2)]);
var state_47953__$1 = state_47953;
var statearr_47960_48092 = state_47953__$1;
(statearr_47960_48092[(2)] = inst_47949);

(statearr_47960_48092[(1)] = (3));


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
});})(__48073,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
;
return ((function (__48073,switch__30635__auto__,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_47961 = [null,null,null,null,null,null,null];
(statearr_47961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__);

(statearr_47961[(1)] = (1));

return statearr_47961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1 = (function (state_47953){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_47953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e47962){if((e47962 instanceof Object)){
var ex__30639__auto__ = e47962;
var statearr_47963_48093 = state_47953;
(statearr_47963_48093[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48094 = state_47953;
state_47953 = G__48094;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = function(state_47953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1.call(this,state_47953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__;
})()
;})(__48073,switch__30635__auto__,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
})();
var state__30794__auto__ = (function (){var statearr_47964 = f__30793__auto__.call(null);
(statearr_47964[(6)] = c__30792__auto___48086);

return statearr_47964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(__48073,c__30792__auto___48086,G__47916_48074,G__47916_48075__$1,n__4376__auto___48072,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47916_48075__$1)].join('')));

}

var G__48095 = (__48073 + (1));
__48073 = G__48095;
continue;
} else {
}
break;
}

var c__30792__auto___48096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48096,jobs,results,process__$1,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48096,jobs,results,process__$1,async){
return (function (state_47986){
var state_val_47987 = (state_47986[(1)]);
if((state_val_47987 === (1))){
var state_47986__$1 = state_47986;
var statearr_47988_48097 = state_47986__$1;
(statearr_47988_48097[(2)] = null);

(statearr_47988_48097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (2))){
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47986__$1,(4),from);
} else {
if((state_val_47987 === (3))){
var inst_47984 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47986__$1,inst_47984);
} else {
if((state_val_47987 === (4))){
var inst_47967 = (state_47986[(7)]);
var inst_47967__$1 = (state_47986[(2)]);
var inst_47968 = (inst_47967__$1 == null);
var state_47986__$1 = (function (){var statearr_47989 = state_47986;
(statearr_47989[(7)] = inst_47967__$1);

return statearr_47989;
})();
if(cljs.core.truth_(inst_47968)){
var statearr_47990_48098 = state_47986__$1;
(statearr_47990_48098[(1)] = (5));

} else {
var statearr_47991_48099 = state_47986__$1;
(statearr_47991_48099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (5))){
var inst_47970 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47986__$1 = state_47986;
var statearr_47992_48100 = state_47986__$1;
(statearr_47992_48100[(2)] = inst_47970);

(statearr_47992_48100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (6))){
var inst_47972 = (state_47986[(8)]);
var inst_47967 = (state_47986[(7)]);
var inst_47972__$1 = cljs.core.async.chan.call(null,(1));
var inst_47973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47974 = [inst_47967,inst_47972__$1];
var inst_47975 = (new cljs.core.PersistentVector(null,2,(5),inst_47973,inst_47974,null));
var state_47986__$1 = (function (){var statearr_47993 = state_47986;
(statearr_47993[(8)] = inst_47972__$1);

return statearr_47993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47986__$1,(8),jobs,inst_47975);
} else {
if((state_val_47987 === (7))){
var inst_47982 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
var statearr_47994_48101 = state_47986__$1;
(statearr_47994_48101[(2)] = inst_47982);

(statearr_47994_48101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (8))){
var inst_47972 = (state_47986[(8)]);
var inst_47977 = (state_47986[(2)]);
var state_47986__$1 = (function (){var statearr_47995 = state_47986;
(statearr_47995[(9)] = inst_47977);

return statearr_47995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47986__$1,(9),results,inst_47972);
} else {
if((state_val_47987 === (9))){
var inst_47979 = (state_47986[(2)]);
var state_47986__$1 = (function (){var statearr_47996 = state_47986;
(statearr_47996[(10)] = inst_47979);

return statearr_47996;
})();
var statearr_47997_48102 = state_47986__$1;
(statearr_47997_48102[(2)] = null);

(statearr_47997_48102[(1)] = (2));


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
});})(c__30792__auto___48096,jobs,results,process__$1,async))
;
return ((function (switch__30635__auto__,c__30792__auto___48096,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_47998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__);

(statearr_47998[(1)] = (1));

return statearr_47998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1 = (function (state_47986){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_47986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e47999){if((e47999 instanceof Object)){
var ex__30639__auto__ = e47999;
var statearr_48000_48103 = state_47986;
(statearr_48000_48103[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48104 = state_47986;
state_47986 = G__48104;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = function(state_47986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1.call(this,state_47986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48096,jobs,results,process__$1,async))
})();
var state__30794__auto__ = (function (){var statearr_48001 = f__30793__auto__.call(null);
(statearr_48001[(6)] = c__30792__auto___48096);

return statearr_48001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48096,jobs,results,process__$1,async))
);


var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,jobs,results,process__$1,async){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,jobs,results,process__$1,async){
return (function (state_48039){
var state_val_48040 = (state_48039[(1)]);
if((state_val_48040 === (7))){
var inst_48035 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
var statearr_48041_48105 = state_48039__$1;
(statearr_48041_48105[(2)] = inst_48035);

(statearr_48041_48105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (20))){
var state_48039__$1 = state_48039;
var statearr_48042_48106 = state_48039__$1;
(statearr_48042_48106[(2)] = null);

(statearr_48042_48106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (1))){
var state_48039__$1 = state_48039;
var statearr_48043_48107 = state_48039__$1;
(statearr_48043_48107[(2)] = null);

(statearr_48043_48107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (4))){
var inst_48004 = (state_48039[(7)]);
var inst_48004__$1 = (state_48039[(2)]);
var inst_48005 = (inst_48004__$1 == null);
var state_48039__$1 = (function (){var statearr_48044 = state_48039;
(statearr_48044[(7)] = inst_48004__$1);

return statearr_48044;
})();
if(cljs.core.truth_(inst_48005)){
var statearr_48045_48108 = state_48039__$1;
(statearr_48045_48108[(1)] = (5));

} else {
var statearr_48046_48109 = state_48039__$1;
(statearr_48046_48109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (15))){
var inst_48017 = (state_48039[(8)]);
var state_48039__$1 = state_48039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48039__$1,(18),to,inst_48017);
} else {
if((state_val_48040 === (21))){
var inst_48030 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
var statearr_48047_48110 = state_48039__$1;
(statearr_48047_48110[(2)] = inst_48030);

(statearr_48047_48110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (13))){
var inst_48032 = (state_48039[(2)]);
var state_48039__$1 = (function (){var statearr_48048 = state_48039;
(statearr_48048[(9)] = inst_48032);

return statearr_48048;
})();
var statearr_48049_48111 = state_48039__$1;
(statearr_48049_48111[(2)] = null);

(statearr_48049_48111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (6))){
var inst_48004 = (state_48039[(7)]);
var state_48039__$1 = state_48039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48039__$1,(11),inst_48004);
} else {
if((state_val_48040 === (17))){
var inst_48025 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
if(cljs.core.truth_(inst_48025)){
var statearr_48050_48112 = state_48039__$1;
(statearr_48050_48112[(1)] = (19));

} else {
var statearr_48051_48113 = state_48039__$1;
(statearr_48051_48113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (3))){
var inst_48037 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48039__$1,inst_48037);
} else {
if((state_val_48040 === (12))){
var inst_48014 = (state_48039[(10)]);
var state_48039__$1 = state_48039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48039__$1,(14),inst_48014);
} else {
if((state_val_48040 === (2))){
var state_48039__$1 = state_48039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48039__$1,(4),results);
} else {
if((state_val_48040 === (19))){
var state_48039__$1 = state_48039;
var statearr_48052_48114 = state_48039__$1;
(statearr_48052_48114[(2)] = null);

(statearr_48052_48114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (11))){
var inst_48014 = (state_48039[(2)]);
var state_48039__$1 = (function (){var statearr_48053 = state_48039;
(statearr_48053[(10)] = inst_48014);

return statearr_48053;
})();
var statearr_48054_48115 = state_48039__$1;
(statearr_48054_48115[(2)] = null);

(statearr_48054_48115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (9))){
var state_48039__$1 = state_48039;
var statearr_48055_48116 = state_48039__$1;
(statearr_48055_48116[(2)] = null);

(statearr_48055_48116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (5))){
var state_48039__$1 = state_48039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48056_48117 = state_48039__$1;
(statearr_48056_48117[(1)] = (8));

} else {
var statearr_48057_48118 = state_48039__$1;
(statearr_48057_48118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (14))){
var inst_48019 = (state_48039[(11)]);
var inst_48017 = (state_48039[(8)]);
var inst_48017__$1 = (state_48039[(2)]);
var inst_48018 = (inst_48017__$1 == null);
var inst_48019__$1 = cljs.core.not.call(null,inst_48018);
var state_48039__$1 = (function (){var statearr_48058 = state_48039;
(statearr_48058[(11)] = inst_48019__$1);

(statearr_48058[(8)] = inst_48017__$1);

return statearr_48058;
})();
if(inst_48019__$1){
var statearr_48059_48119 = state_48039__$1;
(statearr_48059_48119[(1)] = (15));

} else {
var statearr_48060_48120 = state_48039__$1;
(statearr_48060_48120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (16))){
var inst_48019 = (state_48039[(11)]);
var state_48039__$1 = state_48039;
var statearr_48061_48121 = state_48039__$1;
(statearr_48061_48121[(2)] = inst_48019);

(statearr_48061_48121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (10))){
var inst_48011 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
var statearr_48062_48122 = state_48039__$1;
(statearr_48062_48122[(2)] = inst_48011);

(statearr_48062_48122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (18))){
var inst_48022 = (state_48039[(2)]);
var state_48039__$1 = state_48039;
var statearr_48063_48123 = state_48039__$1;
(statearr_48063_48123[(2)] = inst_48022);

(statearr_48063_48123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48040 === (8))){
var inst_48008 = cljs.core.async.close_BANG_.call(null,to);
var state_48039__$1 = state_48039;
var statearr_48064_48124 = state_48039__$1;
(statearr_48064_48124[(2)] = inst_48008);

(statearr_48064_48124[(1)] = (10));


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
});})(c__30792__auto__,jobs,results,process__$1,async))
;
return ((function (switch__30635__auto__,c__30792__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_48065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__);

(statearr_48065[(1)] = (1));

return statearr_48065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1 = (function (state_48039){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48066){if((e48066 instanceof Object)){
var ex__30639__auto__ = e48066;
var statearr_48067_48125 = state_48039;
(statearr_48067_48125[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48126 = state_48039;
state_48039 = G__48126;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__ = function(state_48039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1.call(this,state_48039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,jobs,results,process__$1,async))
})();
var state__30794__auto__ = (function (){var statearr_48068 = f__30793__auto__.call(null);
(statearr_48068[(6)] = c__30792__auto__);

return statearr_48068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,jobs,results,process__$1,async))
);

return c__30792__auto__;
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
var G__48128 = arguments.length;
switch (G__48128) {
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
var G__48131 = arguments.length;
switch (G__48131) {
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
var G__48134 = arguments.length;
switch (G__48134) {
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
var c__30792__auto___48183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48183,tc,fc){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48183,tc,fc){
return (function (state_48160){
var state_val_48161 = (state_48160[(1)]);
if((state_val_48161 === (7))){
var inst_48156 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48162_48184 = state_48160__$1;
(statearr_48162_48184[(2)] = inst_48156);

(statearr_48162_48184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (1))){
var state_48160__$1 = state_48160;
var statearr_48163_48185 = state_48160__$1;
(statearr_48163_48185[(2)] = null);

(statearr_48163_48185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (4))){
var inst_48137 = (state_48160[(7)]);
var inst_48137__$1 = (state_48160[(2)]);
var inst_48138 = (inst_48137__$1 == null);
var state_48160__$1 = (function (){var statearr_48164 = state_48160;
(statearr_48164[(7)] = inst_48137__$1);

return statearr_48164;
})();
if(cljs.core.truth_(inst_48138)){
var statearr_48165_48186 = state_48160__$1;
(statearr_48165_48186[(1)] = (5));

} else {
var statearr_48166_48187 = state_48160__$1;
(statearr_48166_48187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (13))){
var state_48160__$1 = state_48160;
var statearr_48167_48188 = state_48160__$1;
(statearr_48167_48188[(2)] = null);

(statearr_48167_48188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (6))){
var inst_48137 = (state_48160[(7)]);
var inst_48143 = p.call(null,inst_48137);
var state_48160__$1 = state_48160;
if(cljs.core.truth_(inst_48143)){
var statearr_48168_48189 = state_48160__$1;
(statearr_48168_48189[(1)] = (9));

} else {
var statearr_48169_48190 = state_48160__$1;
(statearr_48169_48190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (3))){
var inst_48158 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48160__$1,inst_48158);
} else {
if((state_val_48161 === (12))){
var state_48160__$1 = state_48160;
var statearr_48170_48191 = state_48160__$1;
(statearr_48170_48191[(2)] = null);

(statearr_48170_48191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (2))){
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48160__$1,(4),ch);
} else {
if((state_val_48161 === (11))){
var inst_48137 = (state_48160[(7)]);
var inst_48147 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48160__$1,(8),inst_48147,inst_48137);
} else {
if((state_val_48161 === (9))){
var state_48160__$1 = state_48160;
var statearr_48171_48192 = state_48160__$1;
(statearr_48171_48192[(2)] = tc);

(statearr_48171_48192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (5))){
var inst_48140 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48141 = cljs.core.async.close_BANG_.call(null,fc);
var state_48160__$1 = (function (){var statearr_48172 = state_48160;
(statearr_48172[(8)] = inst_48140);

return statearr_48172;
})();
var statearr_48173_48193 = state_48160__$1;
(statearr_48173_48193[(2)] = inst_48141);

(statearr_48173_48193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (14))){
var inst_48154 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48174_48194 = state_48160__$1;
(statearr_48174_48194[(2)] = inst_48154);

(statearr_48174_48194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (10))){
var state_48160__$1 = state_48160;
var statearr_48175_48195 = state_48160__$1;
(statearr_48175_48195[(2)] = fc);

(statearr_48175_48195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (8))){
var inst_48149 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
if(cljs.core.truth_(inst_48149)){
var statearr_48176_48196 = state_48160__$1;
(statearr_48176_48196[(1)] = (12));

} else {
var statearr_48177_48197 = state_48160__$1;
(statearr_48177_48197[(1)] = (13));

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
});})(c__30792__auto___48183,tc,fc))
;
return ((function (switch__30635__auto__,c__30792__auto___48183,tc,fc){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_48178 = [null,null,null,null,null,null,null,null,null];
(statearr_48178[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_48178[(1)] = (1));

return statearr_48178;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_48160){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48179){if((e48179 instanceof Object)){
var ex__30639__auto__ = e48179;
var statearr_48180_48198 = state_48160;
(statearr_48180_48198[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48199 = state_48160;
state_48160 = G__48199;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_48160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_48160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48183,tc,fc))
})();
var state__30794__auto__ = (function (){var statearr_48181 = f__30793__auto__.call(null);
(statearr_48181[(6)] = c__30792__auto___48183);

return statearr_48181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48183,tc,fc))
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__){
return (function (state_48220){
var state_val_48221 = (state_48220[(1)]);
if((state_val_48221 === (7))){
var inst_48216 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
var statearr_48222_48240 = state_48220__$1;
(statearr_48222_48240[(2)] = inst_48216);

(statearr_48222_48240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (1))){
var inst_48200 = init;
var state_48220__$1 = (function (){var statearr_48223 = state_48220;
(statearr_48223[(7)] = inst_48200);

return statearr_48223;
})();
var statearr_48224_48241 = state_48220__$1;
(statearr_48224_48241[(2)] = null);

(statearr_48224_48241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (4))){
var inst_48203 = (state_48220[(8)]);
var inst_48203__$1 = (state_48220[(2)]);
var inst_48204 = (inst_48203__$1 == null);
var state_48220__$1 = (function (){var statearr_48225 = state_48220;
(statearr_48225[(8)] = inst_48203__$1);

return statearr_48225;
})();
if(cljs.core.truth_(inst_48204)){
var statearr_48226_48242 = state_48220__$1;
(statearr_48226_48242[(1)] = (5));

} else {
var statearr_48227_48243 = state_48220__$1;
(statearr_48227_48243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (6))){
var inst_48200 = (state_48220[(7)]);
var inst_48203 = (state_48220[(8)]);
var inst_48207 = (state_48220[(9)]);
var inst_48207__$1 = f.call(null,inst_48200,inst_48203);
var inst_48208 = cljs.core.reduced_QMARK_.call(null,inst_48207__$1);
var state_48220__$1 = (function (){var statearr_48228 = state_48220;
(statearr_48228[(9)] = inst_48207__$1);

return statearr_48228;
})();
if(inst_48208){
var statearr_48229_48244 = state_48220__$1;
(statearr_48229_48244[(1)] = (8));

} else {
var statearr_48230_48245 = state_48220__$1;
(statearr_48230_48245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (3))){
var inst_48218 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48220__$1,inst_48218);
} else {
if((state_val_48221 === (2))){
var state_48220__$1 = state_48220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48220__$1,(4),ch);
} else {
if((state_val_48221 === (9))){
var inst_48207 = (state_48220[(9)]);
var inst_48200 = inst_48207;
var state_48220__$1 = (function (){var statearr_48231 = state_48220;
(statearr_48231[(7)] = inst_48200);

return statearr_48231;
})();
var statearr_48232_48246 = state_48220__$1;
(statearr_48232_48246[(2)] = null);

(statearr_48232_48246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (5))){
var inst_48200 = (state_48220[(7)]);
var state_48220__$1 = state_48220;
var statearr_48233_48247 = state_48220__$1;
(statearr_48233_48247[(2)] = inst_48200);

(statearr_48233_48247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (10))){
var inst_48214 = (state_48220[(2)]);
var state_48220__$1 = state_48220;
var statearr_48234_48248 = state_48220__$1;
(statearr_48234_48248[(2)] = inst_48214);

(statearr_48234_48248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48221 === (8))){
var inst_48207 = (state_48220[(9)]);
var inst_48210 = cljs.core.deref.call(null,inst_48207);
var state_48220__$1 = state_48220;
var statearr_48235_48249 = state_48220__$1;
(statearr_48235_48249[(2)] = inst_48210);

(statearr_48235_48249[(1)] = (10));


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
});})(c__30792__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30636__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30636__auto____0 = (function (){
var statearr_48236 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48236[(0)] = cljs$core$async$reduce_$_state_machine__30636__auto__);

(statearr_48236[(1)] = (1));

return statearr_48236;
});
var cljs$core$async$reduce_$_state_machine__30636__auto____1 = (function (state_48220){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48237){if((e48237 instanceof Object)){
var ex__30639__auto__ = e48237;
var statearr_48238_48250 = state_48220;
(statearr_48238_48250[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48251 = state_48220;
state_48220 = G__48251;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30636__auto__ = function(state_48220){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30636__auto____1.call(this,state_48220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30636__auto____0;
cljs$core$async$reduce_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30636__auto____1;
return cljs$core$async$reduce_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_48239 = f__30793__auto__.call(null);
(statearr_48239[(6)] = c__30792__auto__);

return statearr_48239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,f__$1){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,f__$1){
return (function (state_48257){
var state_val_48258 = (state_48257[(1)]);
if((state_val_48258 === (1))){
var inst_48252 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48257__$1,(2),inst_48252);
} else {
if((state_val_48258 === (2))){
var inst_48254 = (state_48257[(2)]);
var inst_48255 = f__$1.call(null,inst_48254);
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48257__$1,inst_48255);
} else {
return null;
}
}
});})(c__30792__auto__,f__$1))
;
return ((function (switch__30635__auto__,c__30792__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30636__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30636__auto____0 = (function (){
var statearr_48259 = [null,null,null,null,null,null,null];
(statearr_48259[(0)] = cljs$core$async$transduce_$_state_machine__30636__auto__);

(statearr_48259[(1)] = (1));

return statearr_48259;
});
var cljs$core$async$transduce_$_state_machine__30636__auto____1 = (function (state_48257){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48260){if((e48260 instanceof Object)){
var ex__30639__auto__ = e48260;
var statearr_48261_48263 = state_48257;
(statearr_48261_48263[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48264 = state_48257;
state_48257 = G__48264;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30636__auto__ = function(state_48257){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30636__auto____1.call(this,state_48257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30636__auto____0;
cljs$core$async$transduce_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30636__auto____1;
return cljs$core$async$transduce_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,f__$1))
})();
var state__30794__auto__ = (function (){var statearr_48262 = f__30793__auto__.call(null);
(statearr_48262[(6)] = c__30792__auto__);

return statearr_48262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,f__$1))
);

return c__30792__auto__;
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
var G__48266 = arguments.length;
switch (G__48266) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__){
return (function (state_48291){
var state_val_48292 = (state_48291[(1)]);
if((state_val_48292 === (7))){
var inst_48273 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48293_48314 = state_48291__$1;
(statearr_48293_48314[(2)] = inst_48273);

(statearr_48293_48314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (1))){
var inst_48267 = cljs.core.seq.call(null,coll);
var inst_48268 = inst_48267;
var state_48291__$1 = (function (){var statearr_48294 = state_48291;
(statearr_48294[(7)] = inst_48268);

return statearr_48294;
})();
var statearr_48295_48315 = state_48291__$1;
(statearr_48295_48315[(2)] = null);

(statearr_48295_48315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (4))){
var inst_48268 = (state_48291[(7)]);
var inst_48271 = cljs.core.first.call(null,inst_48268);
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48291__$1,(7),ch,inst_48271);
} else {
if((state_val_48292 === (13))){
var inst_48285 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48296_48316 = state_48291__$1;
(statearr_48296_48316[(2)] = inst_48285);

(statearr_48296_48316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (6))){
var inst_48276 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
if(cljs.core.truth_(inst_48276)){
var statearr_48297_48317 = state_48291__$1;
(statearr_48297_48317[(1)] = (8));

} else {
var statearr_48298_48318 = state_48291__$1;
(statearr_48298_48318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (3))){
var inst_48289 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48291__$1,inst_48289);
} else {
if((state_val_48292 === (12))){
var state_48291__$1 = state_48291;
var statearr_48299_48319 = state_48291__$1;
(statearr_48299_48319[(2)] = null);

(statearr_48299_48319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (2))){
var inst_48268 = (state_48291[(7)]);
var state_48291__$1 = state_48291;
if(cljs.core.truth_(inst_48268)){
var statearr_48300_48320 = state_48291__$1;
(statearr_48300_48320[(1)] = (4));

} else {
var statearr_48301_48321 = state_48291__$1;
(statearr_48301_48321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (11))){
var inst_48282 = cljs.core.async.close_BANG_.call(null,ch);
var state_48291__$1 = state_48291;
var statearr_48302_48322 = state_48291__$1;
(statearr_48302_48322[(2)] = inst_48282);

(statearr_48302_48322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (9))){
var state_48291__$1 = state_48291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48303_48323 = state_48291__$1;
(statearr_48303_48323[(1)] = (11));

} else {
var statearr_48304_48324 = state_48291__$1;
(statearr_48304_48324[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (5))){
var inst_48268 = (state_48291[(7)]);
var state_48291__$1 = state_48291;
var statearr_48305_48325 = state_48291__$1;
(statearr_48305_48325[(2)] = inst_48268);

(statearr_48305_48325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (10))){
var inst_48287 = (state_48291[(2)]);
var state_48291__$1 = state_48291;
var statearr_48306_48326 = state_48291__$1;
(statearr_48306_48326[(2)] = inst_48287);

(statearr_48306_48326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48292 === (8))){
var inst_48268 = (state_48291[(7)]);
var inst_48278 = cljs.core.next.call(null,inst_48268);
var inst_48268__$1 = inst_48278;
var state_48291__$1 = (function (){var statearr_48307 = state_48291;
(statearr_48307[(7)] = inst_48268__$1);

return statearr_48307;
})();
var statearr_48308_48327 = state_48291__$1;
(statearr_48308_48327[(2)] = null);

(statearr_48308_48327[(1)] = (2));


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
});})(c__30792__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_48309 = [null,null,null,null,null,null,null,null];
(statearr_48309[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_48309[(1)] = (1));

return statearr_48309;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_48291){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48310){if((e48310 instanceof Object)){
var ex__30639__auto__ = e48310;
var statearr_48311_48328 = state_48291;
(statearr_48311_48328[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48329 = state_48291;
state_48291 = G__48329;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_48291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_48291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_48312 = f__30793__auto__.call(null);
(statearr_48312[(6)] = c__30792__auto__);

return statearr_48312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async48330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48330 = (function (ch,cs,meta48331){
this.ch = ch;
this.cs = cs;
this.meta48331 = meta48331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48332,meta48331__$1){
var self__ = this;
var _48332__$1 = this;
return (new cljs.core.async.t_cljs$core$async48330(self__.ch,self__.cs,meta48331__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48332){
var self__ = this;
var _48332__$1 = this;
return self__.meta48331;
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48331","meta48331",651004841,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48330";

cljs.core.async.t_cljs$core$async48330.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48330");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48330.
 */
cljs.core.async.__GT_t_cljs$core$async48330 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48330(ch__$1,cs__$1,meta48331){
return (new cljs.core.async.t_cljs$core$async48330(ch__$1,cs__$1,meta48331));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48330(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30792__auto___48552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48552,cs,m,dchan,dctr,done){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48552,cs,m,dchan,dctr,done){
return (function (state_48467){
var state_val_48468 = (state_48467[(1)]);
if((state_val_48468 === (7))){
var inst_48463 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48469_48553 = state_48467__$1;
(statearr_48469_48553[(2)] = inst_48463);

(statearr_48469_48553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (20))){
var inst_48366 = (state_48467[(7)]);
var inst_48378 = cljs.core.first.call(null,inst_48366);
var inst_48379 = cljs.core.nth.call(null,inst_48378,(0),null);
var inst_48380 = cljs.core.nth.call(null,inst_48378,(1),null);
var state_48467__$1 = (function (){var statearr_48470 = state_48467;
(statearr_48470[(8)] = inst_48379);

return statearr_48470;
})();
if(cljs.core.truth_(inst_48380)){
var statearr_48471_48554 = state_48467__$1;
(statearr_48471_48554[(1)] = (22));

} else {
var statearr_48472_48555 = state_48467__$1;
(statearr_48472_48555[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (27))){
var inst_48410 = (state_48467[(9)]);
var inst_48415 = (state_48467[(10)]);
var inst_48408 = (state_48467[(11)]);
var inst_48335 = (state_48467[(12)]);
var inst_48415__$1 = cljs.core._nth.call(null,inst_48408,inst_48410);
var inst_48416 = cljs.core.async.put_BANG_.call(null,inst_48415__$1,inst_48335,done);
var state_48467__$1 = (function (){var statearr_48473 = state_48467;
(statearr_48473[(10)] = inst_48415__$1);

return statearr_48473;
})();
if(cljs.core.truth_(inst_48416)){
var statearr_48474_48556 = state_48467__$1;
(statearr_48474_48556[(1)] = (30));

} else {
var statearr_48475_48557 = state_48467__$1;
(statearr_48475_48557[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (1))){
var state_48467__$1 = state_48467;
var statearr_48476_48558 = state_48467__$1;
(statearr_48476_48558[(2)] = null);

(statearr_48476_48558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (24))){
var inst_48366 = (state_48467[(7)]);
var inst_48385 = (state_48467[(2)]);
var inst_48386 = cljs.core.next.call(null,inst_48366);
var inst_48344 = inst_48386;
var inst_48345 = null;
var inst_48346 = (0);
var inst_48347 = (0);
var state_48467__$1 = (function (){var statearr_48477 = state_48467;
(statearr_48477[(13)] = inst_48344);

(statearr_48477[(14)] = inst_48385);

(statearr_48477[(15)] = inst_48347);

(statearr_48477[(16)] = inst_48345);

(statearr_48477[(17)] = inst_48346);

return statearr_48477;
})();
var statearr_48478_48559 = state_48467__$1;
(statearr_48478_48559[(2)] = null);

(statearr_48478_48559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (39))){
var state_48467__$1 = state_48467;
var statearr_48482_48560 = state_48467__$1;
(statearr_48482_48560[(2)] = null);

(statearr_48482_48560[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (4))){
var inst_48335 = (state_48467[(12)]);
var inst_48335__$1 = (state_48467[(2)]);
var inst_48336 = (inst_48335__$1 == null);
var state_48467__$1 = (function (){var statearr_48483 = state_48467;
(statearr_48483[(12)] = inst_48335__$1);

return statearr_48483;
})();
if(cljs.core.truth_(inst_48336)){
var statearr_48484_48561 = state_48467__$1;
(statearr_48484_48561[(1)] = (5));

} else {
var statearr_48485_48562 = state_48467__$1;
(statearr_48485_48562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (15))){
var inst_48344 = (state_48467[(13)]);
var inst_48347 = (state_48467[(15)]);
var inst_48345 = (state_48467[(16)]);
var inst_48346 = (state_48467[(17)]);
var inst_48362 = (state_48467[(2)]);
var inst_48363 = (inst_48347 + (1));
var tmp48479 = inst_48344;
var tmp48480 = inst_48345;
var tmp48481 = inst_48346;
var inst_48344__$1 = tmp48479;
var inst_48345__$1 = tmp48480;
var inst_48346__$1 = tmp48481;
var inst_48347__$1 = inst_48363;
var state_48467__$1 = (function (){var statearr_48486 = state_48467;
(statearr_48486[(13)] = inst_48344__$1);

(statearr_48486[(15)] = inst_48347__$1);

(statearr_48486[(16)] = inst_48345__$1);

(statearr_48486[(18)] = inst_48362);

(statearr_48486[(17)] = inst_48346__$1);

return statearr_48486;
})();
var statearr_48487_48563 = state_48467__$1;
(statearr_48487_48563[(2)] = null);

(statearr_48487_48563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (21))){
var inst_48389 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48491_48564 = state_48467__$1;
(statearr_48491_48564[(2)] = inst_48389);

(statearr_48491_48564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (31))){
var inst_48415 = (state_48467[(10)]);
var inst_48419 = done.call(null,null);
var inst_48420 = cljs.core.async.untap_STAR_.call(null,m,inst_48415);
var state_48467__$1 = (function (){var statearr_48492 = state_48467;
(statearr_48492[(19)] = inst_48419);

return statearr_48492;
})();
var statearr_48493_48565 = state_48467__$1;
(statearr_48493_48565[(2)] = inst_48420);

(statearr_48493_48565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (32))){
var inst_48410 = (state_48467[(9)]);
var inst_48407 = (state_48467[(20)]);
var inst_48408 = (state_48467[(11)]);
var inst_48409 = (state_48467[(21)]);
var inst_48422 = (state_48467[(2)]);
var inst_48423 = (inst_48410 + (1));
var tmp48488 = inst_48407;
var tmp48489 = inst_48408;
var tmp48490 = inst_48409;
var inst_48407__$1 = tmp48488;
var inst_48408__$1 = tmp48489;
var inst_48409__$1 = tmp48490;
var inst_48410__$1 = inst_48423;
var state_48467__$1 = (function (){var statearr_48494 = state_48467;
(statearr_48494[(9)] = inst_48410__$1);

(statearr_48494[(22)] = inst_48422);

(statearr_48494[(20)] = inst_48407__$1);

(statearr_48494[(11)] = inst_48408__$1);

(statearr_48494[(21)] = inst_48409__$1);

return statearr_48494;
})();
var statearr_48495_48566 = state_48467__$1;
(statearr_48495_48566[(2)] = null);

(statearr_48495_48566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (40))){
var inst_48435 = (state_48467[(23)]);
var inst_48439 = done.call(null,null);
var inst_48440 = cljs.core.async.untap_STAR_.call(null,m,inst_48435);
var state_48467__$1 = (function (){var statearr_48496 = state_48467;
(statearr_48496[(24)] = inst_48439);

return statearr_48496;
})();
var statearr_48497_48567 = state_48467__$1;
(statearr_48497_48567[(2)] = inst_48440);

(statearr_48497_48567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (33))){
var inst_48426 = (state_48467[(25)]);
var inst_48428 = cljs.core.chunked_seq_QMARK_.call(null,inst_48426);
var state_48467__$1 = state_48467;
if(inst_48428){
var statearr_48498_48568 = state_48467__$1;
(statearr_48498_48568[(1)] = (36));

} else {
var statearr_48499_48569 = state_48467__$1;
(statearr_48499_48569[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (13))){
var inst_48356 = (state_48467[(26)]);
var inst_48359 = cljs.core.async.close_BANG_.call(null,inst_48356);
var state_48467__$1 = state_48467;
var statearr_48500_48570 = state_48467__$1;
(statearr_48500_48570[(2)] = inst_48359);

(statearr_48500_48570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (22))){
var inst_48379 = (state_48467[(8)]);
var inst_48382 = cljs.core.async.close_BANG_.call(null,inst_48379);
var state_48467__$1 = state_48467;
var statearr_48501_48571 = state_48467__$1;
(statearr_48501_48571[(2)] = inst_48382);

(statearr_48501_48571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (36))){
var inst_48426 = (state_48467[(25)]);
var inst_48430 = cljs.core.chunk_first.call(null,inst_48426);
var inst_48431 = cljs.core.chunk_rest.call(null,inst_48426);
var inst_48432 = cljs.core.count.call(null,inst_48430);
var inst_48407 = inst_48431;
var inst_48408 = inst_48430;
var inst_48409 = inst_48432;
var inst_48410 = (0);
var state_48467__$1 = (function (){var statearr_48502 = state_48467;
(statearr_48502[(9)] = inst_48410);

(statearr_48502[(20)] = inst_48407);

(statearr_48502[(11)] = inst_48408);

(statearr_48502[(21)] = inst_48409);

return statearr_48502;
})();
var statearr_48503_48572 = state_48467__$1;
(statearr_48503_48572[(2)] = null);

(statearr_48503_48572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (41))){
var inst_48426 = (state_48467[(25)]);
var inst_48442 = (state_48467[(2)]);
var inst_48443 = cljs.core.next.call(null,inst_48426);
var inst_48407 = inst_48443;
var inst_48408 = null;
var inst_48409 = (0);
var inst_48410 = (0);
var state_48467__$1 = (function (){var statearr_48504 = state_48467;
(statearr_48504[(9)] = inst_48410);

(statearr_48504[(27)] = inst_48442);

(statearr_48504[(20)] = inst_48407);

(statearr_48504[(11)] = inst_48408);

(statearr_48504[(21)] = inst_48409);

return statearr_48504;
})();
var statearr_48505_48573 = state_48467__$1;
(statearr_48505_48573[(2)] = null);

(statearr_48505_48573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (43))){
var state_48467__$1 = state_48467;
var statearr_48506_48574 = state_48467__$1;
(statearr_48506_48574[(2)] = null);

(statearr_48506_48574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (29))){
var inst_48451 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48507_48575 = state_48467__$1;
(statearr_48507_48575[(2)] = inst_48451);

(statearr_48507_48575[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (44))){
var inst_48460 = (state_48467[(2)]);
var state_48467__$1 = (function (){var statearr_48508 = state_48467;
(statearr_48508[(28)] = inst_48460);

return statearr_48508;
})();
var statearr_48509_48576 = state_48467__$1;
(statearr_48509_48576[(2)] = null);

(statearr_48509_48576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (6))){
var inst_48399 = (state_48467[(29)]);
var inst_48398 = cljs.core.deref.call(null,cs);
var inst_48399__$1 = cljs.core.keys.call(null,inst_48398);
var inst_48400 = cljs.core.count.call(null,inst_48399__$1);
var inst_48401 = cljs.core.reset_BANG_.call(null,dctr,inst_48400);
var inst_48406 = cljs.core.seq.call(null,inst_48399__$1);
var inst_48407 = inst_48406;
var inst_48408 = null;
var inst_48409 = (0);
var inst_48410 = (0);
var state_48467__$1 = (function (){var statearr_48510 = state_48467;
(statearr_48510[(9)] = inst_48410);

(statearr_48510[(30)] = inst_48401);

(statearr_48510[(20)] = inst_48407);

(statearr_48510[(11)] = inst_48408);

(statearr_48510[(29)] = inst_48399__$1);

(statearr_48510[(21)] = inst_48409);

return statearr_48510;
})();
var statearr_48511_48577 = state_48467__$1;
(statearr_48511_48577[(2)] = null);

(statearr_48511_48577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (28))){
var inst_48407 = (state_48467[(20)]);
var inst_48426 = (state_48467[(25)]);
var inst_48426__$1 = cljs.core.seq.call(null,inst_48407);
var state_48467__$1 = (function (){var statearr_48512 = state_48467;
(statearr_48512[(25)] = inst_48426__$1);

return statearr_48512;
})();
if(inst_48426__$1){
var statearr_48513_48578 = state_48467__$1;
(statearr_48513_48578[(1)] = (33));

} else {
var statearr_48514_48579 = state_48467__$1;
(statearr_48514_48579[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (25))){
var inst_48410 = (state_48467[(9)]);
var inst_48409 = (state_48467[(21)]);
var inst_48412 = (inst_48410 < inst_48409);
var inst_48413 = inst_48412;
var state_48467__$1 = state_48467;
if(cljs.core.truth_(inst_48413)){
var statearr_48515_48580 = state_48467__$1;
(statearr_48515_48580[(1)] = (27));

} else {
var statearr_48516_48581 = state_48467__$1;
(statearr_48516_48581[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (34))){
var state_48467__$1 = state_48467;
var statearr_48517_48582 = state_48467__$1;
(statearr_48517_48582[(2)] = null);

(statearr_48517_48582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (17))){
var state_48467__$1 = state_48467;
var statearr_48518_48583 = state_48467__$1;
(statearr_48518_48583[(2)] = null);

(statearr_48518_48583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (3))){
var inst_48465 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48467__$1,inst_48465);
} else {
if((state_val_48468 === (12))){
var inst_48394 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48519_48584 = state_48467__$1;
(statearr_48519_48584[(2)] = inst_48394);

(statearr_48519_48584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (2))){
var state_48467__$1 = state_48467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48467__$1,(4),ch);
} else {
if((state_val_48468 === (23))){
var state_48467__$1 = state_48467;
var statearr_48520_48585 = state_48467__$1;
(statearr_48520_48585[(2)] = null);

(statearr_48520_48585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (35))){
var inst_48449 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48521_48586 = state_48467__$1;
(statearr_48521_48586[(2)] = inst_48449);

(statearr_48521_48586[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (19))){
var inst_48366 = (state_48467[(7)]);
var inst_48370 = cljs.core.chunk_first.call(null,inst_48366);
var inst_48371 = cljs.core.chunk_rest.call(null,inst_48366);
var inst_48372 = cljs.core.count.call(null,inst_48370);
var inst_48344 = inst_48371;
var inst_48345 = inst_48370;
var inst_48346 = inst_48372;
var inst_48347 = (0);
var state_48467__$1 = (function (){var statearr_48522 = state_48467;
(statearr_48522[(13)] = inst_48344);

(statearr_48522[(15)] = inst_48347);

(statearr_48522[(16)] = inst_48345);

(statearr_48522[(17)] = inst_48346);

return statearr_48522;
})();
var statearr_48523_48587 = state_48467__$1;
(statearr_48523_48587[(2)] = null);

(statearr_48523_48587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (11))){
var inst_48344 = (state_48467[(13)]);
var inst_48366 = (state_48467[(7)]);
var inst_48366__$1 = cljs.core.seq.call(null,inst_48344);
var state_48467__$1 = (function (){var statearr_48524 = state_48467;
(statearr_48524[(7)] = inst_48366__$1);

return statearr_48524;
})();
if(inst_48366__$1){
var statearr_48525_48588 = state_48467__$1;
(statearr_48525_48588[(1)] = (16));

} else {
var statearr_48526_48589 = state_48467__$1;
(statearr_48526_48589[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (9))){
var inst_48396 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48527_48590 = state_48467__$1;
(statearr_48527_48590[(2)] = inst_48396);

(statearr_48527_48590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (5))){
var inst_48342 = cljs.core.deref.call(null,cs);
var inst_48343 = cljs.core.seq.call(null,inst_48342);
var inst_48344 = inst_48343;
var inst_48345 = null;
var inst_48346 = (0);
var inst_48347 = (0);
var state_48467__$1 = (function (){var statearr_48528 = state_48467;
(statearr_48528[(13)] = inst_48344);

(statearr_48528[(15)] = inst_48347);

(statearr_48528[(16)] = inst_48345);

(statearr_48528[(17)] = inst_48346);

return statearr_48528;
})();
var statearr_48529_48591 = state_48467__$1;
(statearr_48529_48591[(2)] = null);

(statearr_48529_48591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (14))){
var state_48467__$1 = state_48467;
var statearr_48530_48592 = state_48467__$1;
(statearr_48530_48592[(2)] = null);

(statearr_48530_48592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (45))){
var inst_48457 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48531_48593 = state_48467__$1;
(statearr_48531_48593[(2)] = inst_48457);

(statearr_48531_48593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (26))){
var inst_48399 = (state_48467[(29)]);
var inst_48453 = (state_48467[(2)]);
var inst_48454 = cljs.core.seq.call(null,inst_48399);
var state_48467__$1 = (function (){var statearr_48532 = state_48467;
(statearr_48532[(31)] = inst_48453);

return statearr_48532;
})();
if(inst_48454){
var statearr_48533_48594 = state_48467__$1;
(statearr_48533_48594[(1)] = (42));

} else {
var statearr_48534_48595 = state_48467__$1;
(statearr_48534_48595[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (16))){
var inst_48366 = (state_48467[(7)]);
var inst_48368 = cljs.core.chunked_seq_QMARK_.call(null,inst_48366);
var state_48467__$1 = state_48467;
if(inst_48368){
var statearr_48535_48596 = state_48467__$1;
(statearr_48535_48596[(1)] = (19));

} else {
var statearr_48536_48597 = state_48467__$1;
(statearr_48536_48597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (38))){
var inst_48446 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48537_48598 = state_48467__$1;
(statearr_48537_48598[(2)] = inst_48446);

(statearr_48537_48598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (30))){
var state_48467__$1 = state_48467;
var statearr_48538_48599 = state_48467__$1;
(statearr_48538_48599[(2)] = null);

(statearr_48538_48599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (10))){
var inst_48347 = (state_48467[(15)]);
var inst_48345 = (state_48467[(16)]);
var inst_48355 = cljs.core._nth.call(null,inst_48345,inst_48347);
var inst_48356 = cljs.core.nth.call(null,inst_48355,(0),null);
var inst_48357 = cljs.core.nth.call(null,inst_48355,(1),null);
var state_48467__$1 = (function (){var statearr_48539 = state_48467;
(statearr_48539[(26)] = inst_48356);

return statearr_48539;
})();
if(cljs.core.truth_(inst_48357)){
var statearr_48540_48600 = state_48467__$1;
(statearr_48540_48600[(1)] = (13));

} else {
var statearr_48541_48601 = state_48467__$1;
(statearr_48541_48601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (18))){
var inst_48392 = (state_48467[(2)]);
var state_48467__$1 = state_48467;
var statearr_48542_48602 = state_48467__$1;
(statearr_48542_48602[(2)] = inst_48392);

(statearr_48542_48602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (42))){
var state_48467__$1 = state_48467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48467__$1,(45),dchan);
} else {
if((state_val_48468 === (37))){
var inst_48435 = (state_48467[(23)]);
var inst_48335 = (state_48467[(12)]);
var inst_48426 = (state_48467[(25)]);
var inst_48435__$1 = cljs.core.first.call(null,inst_48426);
var inst_48436 = cljs.core.async.put_BANG_.call(null,inst_48435__$1,inst_48335,done);
var state_48467__$1 = (function (){var statearr_48543 = state_48467;
(statearr_48543[(23)] = inst_48435__$1);

return statearr_48543;
})();
if(cljs.core.truth_(inst_48436)){
var statearr_48544_48603 = state_48467__$1;
(statearr_48544_48603[(1)] = (39));

} else {
var statearr_48545_48604 = state_48467__$1;
(statearr_48545_48604[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48468 === (8))){
var inst_48347 = (state_48467[(15)]);
var inst_48346 = (state_48467[(17)]);
var inst_48349 = (inst_48347 < inst_48346);
var inst_48350 = inst_48349;
var state_48467__$1 = state_48467;
if(cljs.core.truth_(inst_48350)){
var statearr_48546_48605 = state_48467__$1;
(statearr_48546_48605[(1)] = (10));

} else {
var statearr_48547_48606 = state_48467__$1;
(statearr_48547_48606[(1)] = (11));

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
});})(c__30792__auto___48552,cs,m,dchan,dctr,done))
;
return ((function (switch__30635__auto__,c__30792__auto___48552,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30636__auto__ = null;
var cljs$core$async$mult_$_state_machine__30636__auto____0 = (function (){
var statearr_48548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48548[(0)] = cljs$core$async$mult_$_state_machine__30636__auto__);

(statearr_48548[(1)] = (1));

return statearr_48548;
});
var cljs$core$async$mult_$_state_machine__30636__auto____1 = (function (state_48467){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48549){if((e48549 instanceof Object)){
var ex__30639__auto__ = e48549;
var statearr_48550_48607 = state_48467;
(statearr_48550_48607[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48608 = state_48467;
state_48467 = G__48608;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30636__auto__ = function(state_48467){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30636__auto____1.call(this,state_48467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30636__auto____0;
cljs$core$async$mult_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30636__auto____1;
return cljs$core$async$mult_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48552,cs,m,dchan,dctr,done))
})();
var state__30794__auto__ = (function (){var statearr_48551 = f__30793__auto__.call(null);
(statearr_48551[(6)] = c__30792__auto___48552);

return statearr_48551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48552,cs,m,dchan,dctr,done))
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
var G__48610 = arguments.length;
switch (G__48610) {
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
var len__4499__auto___48622 = arguments.length;
var i__4500__auto___48623 = (0);
while(true){
if((i__4500__auto___48623 < len__4499__auto___48622)){
args__4502__auto__.push((arguments[i__4500__auto___48623]));

var G__48624 = (i__4500__auto___48623 + (1));
i__4500__auto___48623 = G__48624;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48616){
var map__48617 = p__48616;
var map__48617__$1 = ((((!((map__48617 == null)))?(((((map__48617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48617):map__48617);
var opts = map__48617__$1;
var statearr_48619_48625 = state;
(statearr_48619_48625[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__48617,map__48617__$1,opts){
return (function (val){
var statearr_48620_48626 = state;
(statearr_48620_48626[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48617,map__48617__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_48621_48627 = state;
(statearr_48621_48627[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48612){
var G__48613 = cljs.core.first.call(null,seq48612);
var seq48612__$1 = cljs.core.next.call(null,seq48612);
var G__48614 = cljs.core.first.call(null,seq48612__$1);
var seq48612__$2 = cljs.core.next.call(null,seq48612__$1);
var G__48615 = cljs.core.first.call(null,seq48612__$2);
var seq48612__$3 = cljs.core.next.call(null,seq48612__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48613,G__48614,G__48615,seq48612__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48628 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48629){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48629 = meta48629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48630,meta48629__$1){
var self__ = this;
var _48630__$1 = this;
return (new cljs.core.async.t_cljs$core$async48628(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48629__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48630){
var self__ = this;
var _48630__$1 = this;
return self__.meta48629;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48628.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48629","meta48629",-1023346390,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48628";

cljs.core.async.t_cljs$core$async48628.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48628");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48628.
 */
cljs.core.async.__GT_t_cljs$core$async48628 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48628(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48629){
return (new cljs.core.async.t_cljs$core$async48628(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48629));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48628(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30792__auto___48792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48732){
var state_val_48733 = (state_48732[(1)]);
if((state_val_48733 === (7))){
var inst_48647 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48734_48793 = state_48732__$1;
(statearr_48734_48793[(2)] = inst_48647);

(statearr_48734_48793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (20))){
var inst_48659 = (state_48732[(7)]);
var state_48732__$1 = state_48732;
var statearr_48735_48794 = state_48732__$1;
(statearr_48735_48794[(2)] = inst_48659);

(statearr_48735_48794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (27))){
var state_48732__$1 = state_48732;
var statearr_48736_48795 = state_48732__$1;
(statearr_48736_48795[(2)] = null);

(statearr_48736_48795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (1))){
var inst_48634 = (state_48732[(8)]);
var inst_48634__$1 = calc_state.call(null);
var inst_48636 = (inst_48634__$1 == null);
var inst_48637 = cljs.core.not.call(null,inst_48636);
var state_48732__$1 = (function (){var statearr_48737 = state_48732;
(statearr_48737[(8)] = inst_48634__$1);

return statearr_48737;
})();
if(inst_48637){
var statearr_48738_48796 = state_48732__$1;
(statearr_48738_48796[(1)] = (2));

} else {
var statearr_48739_48797 = state_48732__$1;
(statearr_48739_48797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (24))){
var inst_48683 = (state_48732[(9)]);
var inst_48692 = (state_48732[(10)]);
var inst_48706 = (state_48732[(11)]);
var inst_48706__$1 = inst_48683.call(null,inst_48692);
var state_48732__$1 = (function (){var statearr_48740 = state_48732;
(statearr_48740[(11)] = inst_48706__$1);

return statearr_48740;
})();
if(cljs.core.truth_(inst_48706__$1)){
var statearr_48741_48798 = state_48732__$1;
(statearr_48741_48798[(1)] = (29));

} else {
var statearr_48742_48799 = state_48732__$1;
(statearr_48742_48799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (4))){
var inst_48650 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48650)){
var statearr_48743_48800 = state_48732__$1;
(statearr_48743_48800[(1)] = (8));

} else {
var statearr_48744_48801 = state_48732__$1;
(statearr_48744_48801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (15))){
var inst_48677 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48677)){
var statearr_48745_48802 = state_48732__$1;
(statearr_48745_48802[(1)] = (19));

} else {
var statearr_48746_48803 = state_48732__$1;
(statearr_48746_48803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (21))){
var inst_48682 = (state_48732[(12)]);
var inst_48682__$1 = (state_48732[(2)]);
var inst_48683 = cljs.core.get.call(null,inst_48682__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48684 = cljs.core.get.call(null,inst_48682__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48685 = cljs.core.get.call(null,inst_48682__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48732__$1 = (function (){var statearr_48747 = state_48732;
(statearr_48747[(13)] = inst_48684);

(statearr_48747[(9)] = inst_48683);

(statearr_48747[(12)] = inst_48682__$1);

return statearr_48747;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48732__$1,(22),inst_48685);
} else {
if((state_val_48733 === (31))){
var inst_48714 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48714)){
var statearr_48748_48804 = state_48732__$1;
(statearr_48748_48804[(1)] = (32));

} else {
var statearr_48749_48805 = state_48732__$1;
(statearr_48749_48805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (32))){
var inst_48691 = (state_48732[(14)]);
var state_48732__$1 = state_48732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48732__$1,(35),out,inst_48691);
} else {
if((state_val_48733 === (33))){
var inst_48682 = (state_48732[(12)]);
var inst_48659 = inst_48682;
var state_48732__$1 = (function (){var statearr_48750 = state_48732;
(statearr_48750[(7)] = inst_48659);

return statearr_48750;
})();
var statearr_48751_48806 = state_48732__$1;
(statearr_48751_48806[(2)] = null);

(statearr_48751_48806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (13))){
var inst_48659 = (state_48732[(7)]);
var inst_48666 = inst_48659.cljs$lang$protocol_mask$partition0$;
var inst_48667 = (inst_48666 & (64));
var inst_48668 = inst_48659.cljs$core$ISeq$;
var inst_48669 = (cljs.core.PROTOCOL_SENTINEL === inst_48668);
var inst_48670 = ((inst_48667) || (inst_48669));
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48670)){
var statearr_48752_48807 = state_48732__$1;
(statearr_48752_48807[(1)] = (16));

} else {
var statearr_48753_48808 = state_48732__$1;
(statearr_48753_48808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (22))){
var inst_48691 = (state_48732[(14)]);
var inst_48692 = (state_48732[(10)]);
var inst_48690 = (state_48732[(2)]);
var inst_48691__$1 = cljs.core.nth.call(null,inst_48690,(0),null);
var inst_48692__$1 = cljs.core.nth.call(null,inst_48690,(1),null);
var inst_48693 = (inst_48691__$1 == null);
var inst_48694 = cljs.core._EQ_.call(null,inst_48692__$1,change);
var inst_48695 = ((inst_48693) || (inst_48694));
var state_48732__$1 = (function (){var statearr_48754 = state_48732;
(statearr_48754[(14)] = inst_48691__$1);

(statearr_48754[(10)] = inst_48692__$1);

return statearr_48754;
})();
if(cljs.core.truth_(inst_48695)){
var statearr_48755_48809 = state_48732__$1;
(statearr_48755_48809[(1)] = (23));

} else {
var statearr_48756_48810 = state_48732__$1;
(statearr_48756_48810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (36))){
var inst_48682 = (state_48732[(12)]);
var inst_48659 = inst_48682;
var state_48732__$1 = (function (){var statearr_48757 = state_48732;
(statearr_48757[(7)] = inst_48659);

return statearr_48757;
})();
var statearr_48758_48811 = state_48732__$1;
(statearr_48758_48811[(2)] = null);

(statearr_48758_48811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (29))){
var inst_48706 = (state_48732[(11)]);
var state_48732__$1 = state_48732;
var statearr_48759_48812 = state_48732__$1;
(statearr_48759_48812[(2)] = inst_48706);

(statearr_48759_48812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (6))){
var state_48732__$1 = state_48732;
var statearr_48760_48813 = state_48732__$1;
(statearr_48760_48813[(2)] = false);

(statearr_48760_48813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (28))){
var inst_48702 = (state_48732[(2)]);
var inst_48703 = calc_state.call(null);
var inst_48659 = inst_48703;
var state_48732__$1 = (function (){var statearr_48761 = state_48732;
(statearr_48761[(7)] = inst_48659);

(statearr_48761[(15)] = inst_48702);

return statearr_48761;
})();
var statearr_48762_48814 = state_48732__$1;
(statearr_48762_48814[(2)] = null);

(statearr_48762_48814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (25))){
var inst_48728 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48763_48815 = state_48732__$1;
(statearr_48763_48815[(2)] = inst_48728);

(statearr_48763_48815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (34))){
var inst_48726 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48764_48816 = state_48732__$1;
(statearr_48764_48816[(2)] = inst_48726);

(statearr_48764_48816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (17))){
var state_48732__$1 = state_48732;
var statearr_48765_48817 = state_48732__$1;
(statearr_48765_48817[(2)] = false);

(statearr_48765_48817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (3))){
var state_48732__$1 = state_48732;
var statearr_48766_48818 = state_48732__$1;
(statearr_48766_48818[(2)] = false);

(statearr_48766_48818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (12))){
var inst_48730 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48732__$1,inst_48730);
} else {
if((state_val_48733 === (2))){
var inst_48634 = (state_48732[(8)]);
var inst_48639 = inst_48634.cljs$lang$protocol_mask$partition0$;
var inst_48640 = (inst_48639 & (64));
var inst_48641 = inst_48634.cljs$core$ISeq$;
var inst_48642 = (cljs.core.PROTOCOL_SENTINEL === inst_48641);
var inst_48643 = ((inst_48640) || (inst_48642));
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48643)){
var statearr_48767_48819 = state_48732__$1;
(statearr_48767_48819[(1)] = (5));

} else {
var statearr_48768_48820 = state_48732__$1;
(statearr_48768_48820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (23))){
var inst_48691 = (state_48732[(14)]);
var inst_48697 = (inst_48691 == null);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48697)){
var statearr_48769_48821 = state_48732__$1;
(statearr_48769_48821[(1)] = (26));

} else {
var statearr_48770_48822 = state_48732__$1;
(statearr_48770_48822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (35))){
var inst_48717 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48717)){
var statearr_48771_48823 = state_48732__$1;
(statearr_48771_48823[(1)] = (36));

} else {
var statearr_48772_48824 = state_48732__$1;
(statearr_48772_48824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (19))){
var inst_48659 = (state_48732[(7)]);
var inst_48679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48659);
var state_48732__$1 = state_48732;
var statearr_48773_48825 = state_48732__$1;
(statearr_48773_48825[(2)] = inst_48679);

(statearr_48773_48825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (11))){
var inst_48659 = (state_48732[(7)]);
var inst_48663 = (inst_48659 == null);
var inst_48664 = cljs.core.not.call(null,inst_48663);
var state_48732__$1 = state_48732;
if(inst_48664){
var statearr_48774_48826 = state_48732__$1;
(statearr_48774_48826[(1)] = (13));

} else {
var statearr_48775_48827 = state_48732__$1;
(statearr_48775_48827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (9))){
var inst_48634 = (state_48732[(8)]);
var state_48732__$1 = state_48732;
var statearr_48776_48828 = state_48732__$1;
(statearr_48776_48828[(2)] = inst_48634);

(statearr_48776_48828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (5))){
var state_48732__$1 = state_48732;
var statearr_48777_48829 = state_48732__$1;
(statearr_48777_48829[(2)] = true);

(statearr_48777_48829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (14))){
var state_48732__$1 = state_48732;
var statearr_48778_48830 = state_48732__$1;
(statearr_48778_48830[(2)] = false);

(statearr_48778_48830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (26))){
var inst_48692 = (state_48732[(10)]);
var inst_48699 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48692);
var state_48732__$1 = state_48732;
var statearr_48779_48831 = state_48732__$1;
(statearr_48779_48831[(2)] = inst_48699);

(statearr_48779_48831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (16))){
var state_48732__$1 = state_48732;
var statearr_48780_48832 = state_48732__$1;
(statearr_48780_48832[(2)] = true);

(statearr_48780_48832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (38))){
var inst_48722 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48781_48833 = state_48732__$1;
(statearr_48781_48833[(2)] = inst_48722);

(statearr_48781_48833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (30))){
var inst_48684 = (state_48732[(13)]);
var inst_48683 = (state_48732[(9)]);
var inst_48692 = (state_48732[(10)]);
var inst_48709 = cljs.core.empty_QMARK_.call(null,inst_48683);
var inst_48710 = inst_48684.call(null,inst_48692);
var inst_48711 = cljs.core.not.call(null,inst_48710);
var inst_48712 = ((inst_48709) && (inst_48711));
var state_48732__$1 = state_48732;
var statearr_48782_48834 = state_48732__$1;
(statearr_48782_48834[(2)] = inst_48712);

(statearr_48782_48834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (10))){
var inst_48634 = (state_48732[(8)]);
var inst_48655 = (state_48732[(2)]);
var inst_48656 = cljs.core.get.call(null,inst_48655,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48657 = cljs.core.get.call(null,inst_48655,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48658 = cljs.core.get.call(null,inst_48655,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48659 = inst_48634;
var state_48732__$1 = (function (){var statearr_48783 = state_48732;
(statearr_48783[(16)] = inst_48656);

(statearr_48783[(17)] = inst_48657);

(statearr_48783[(7)] = inst_48659);

(statearr_48783[(18)] = inst_48658);

return statearr_48783;
})();
var statearr_48784_48835 = state_48732__$1;
(statearr_48784_48835[(2)] = null);

(statearr_48784_48835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (18))){
var inst_48674 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48785_48836 = state_48732__$1;
(statearr_48785_48836[(2)] = inst_48674);

(statearr_48785_48836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (37))){
var state_48732__$1 = state_48732;
var statearr_48786_48837 = state_48732__$1;
(statearr_48786_48837[(2)] = null);

(statearr_48786_48837[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (8))){
var inst_48634 = (state_48732[(8)]);
var inst_48652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48634);
var state_48732__$1 = state_48732;
var statearr_48787_48838 = state_48732__$1;
(statearr_48787_48838[(2)] = inst_48652);

(statearr_48787_48838[(1)] = (10));


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
});})(c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30635__auto__,c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30636__auto__ = null;
var cljs$core$async$mix_$_state_machine__30636__auto____0 = (function (){
var statearr_48788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48788[(0)] = cljs$core$async$mix_$_state_machine__30636__auto__);

(statearr_48788[(1)] = (1));

return statearr_48788;
});
var cljs$core$async$mix_$_state_machine__30636__auto____1 = (function (state_48732){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48789){if((e48789 instanceof Object)){
var ex__30639__auto__ = e48789;
var statearr_48790_48839 = state_48732;
(statearr_48790_48839[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48840 = state_48732;
state_48732 = G__48840;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30636__auto__ = function(state_48732){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30636__auto____1.call(this,state_48732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30636__auto____0;
cljs$core$async$mix_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30636__auto____1;
return cljs$core$async$mix_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30794__auto__ = (function (){var statearr_48791 = f__30793__auto__.call(null);
(statearr_48791[(6)] = c__30792__auto___48792);

return statearr_48791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48842 = arguments.length;
switch (G__48842) {
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
var G__48846 = arguments.length;
switch (G__48846) {
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
return (function (p1__48844_SHARP_){
if(cljs.core.truth_(p1__48844_SHARP_.call(null,topic))){
return p1__48844_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48844_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48848 = meta48848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48849,meta48848__$1){
var self__ = this;
var _48849__$1 = this;
return (new cljs.core.async.t_cljs$core$async48847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48848__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48849){
var self__ = this;
var _48849__$1 = this;
return self__.meta48848;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48848","meta48848",183539898,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48847";

cljs.core.async.t_cljs$core$async48847.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48847");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48847.
 */
cljs.core.async.__GT_t_cljs$core$async48847 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48848){
return (new cljs.core.async.t_cljs$core$async48847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48848));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30792__auto___48967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___48967,mults,ensure_mult,p){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___48967,mults,ensure_mult,p){
return (function (state_48921){
var state_val_48922 = (state_48921[(1)]);
if((state_val_48922 === (7))){
var inst_48917 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48923_48968 = state_48921__$1;
(statearr_48923_48968[(2)] = inst_48917);

(statearr_48923_48968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (20))){
var state_48921__$1 = state_48921;
var statearr_48924_48969 = state_48921__$1;
(statearr_48924_48969[(2)] = null);

(statearr_48924_48969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (1))){
var state_48921__$1 = state_48921;
var statearr_48925_48970 = state_48921__$1;
(statearr_48925_48970[(2)] = null);

(statearr_48925_48970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (24))){
var inst_48900 = (state_48921[(7)]);
var inst_48909 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48900);
var state_48921__$1 = state_48921;
var statearr_48926_48971 = state_48921__$1;
(statearr_48926_48971[(2)] = inst_48909);

(statearr_48926_48971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (4))){
var inst_48852 = (state_48921[(8)]);
var inst_48852__$1 = (state_48921[(2)]);
var inst_48853 = (inst_48852__$1 == null);
var state_48921__$1 = (function (){var statearr_48927 = state_48921;
(statearr_48927[(8)] = inst_48852__$1);

return statearr_48927;
})();
if(cljs.core.truth_(inst_48853)){
var statearr_48928_48972 = state_48921__$1;
(statearr_48928_48972[(1)] = (5));

} else {
var statearr_48929_48973 = state_48921__$1;
(statearr_48929_48973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (15))){
var inst_48894 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48930_48974 = state_48921__$1;
(statearr_48930_48974[(2)] = inst_48894);

(statearr_48930_48974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (21))){
var inst_48914 = (state_48921[(2)]);
var state_48921__$1 = (function (){var statearr_48931 = state_48921;
(statearr_48931[(9)] = inst_48914);

return statearr_48931;
})();
var statearr_48932_48975 = state_48921__$1;
(statearr_48932_48975[(2)] = null);

(statearr_48932_48975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (13))){
var inst_48876 = (state_48921[(10)]);
var inst_48878 = cljs.core.chunked_seq_QMARK_.call(null,inst_48876);
var state_48921__$1 = state_48921;
if(inst_48878){
var statearr_48933_48976 = state_48921__$1;
(statearr_48933_48976[(1)] = (16));

} else {
var statearr_48934_48977 = state_48921__$1;
(statearr_48934_48977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (22))){
var inst_48906 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
if(cljs.core.truth_(inst_48906)){
var statearr_48935_48978 = state_48921__$1;
(statearr_48935_48978[(1)] = (23));

} else {
var statearr_48936_48979 = state_48921__$1;
(statearr_48936_48979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (6))){
var inst_48902 = (state_48921[(11)]);
var inst_48852 = (state_48921[(8)]);
var inst_48900 = (state_48921[(7)]);
var inst_48900__$1 = topic_fn.call(null,inst_48852);
var inst_48901 = cljs.core.deref.call(null,mults);
var inst_48902__$1 = cljs.core.get.call(null,inst_48901,inst_48900__$1);
var state_48921__$1 = (function (){var statearr_48937 = state_48921;
(statearr_48937[(11)] = inst_48902__$1);

(statearr_48937[(7)] = inst_48900__$1);

return statearr_48937;
})();
if(cljs.core.truth_(inst_48902__$1)){
var statearr_48938_48980 = state_48921__$1;
(statearr_48938_48980[(1)] = (19));

} else {
var statearr_48939_48981 = state_48921__$1;
(statearr_48939_48981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (25))){
var inst_48911 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48940_48982 = state_48921__$1;
(statearr_48940_48982[(2)] = inst_48911);

(statearr_48940_48982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (17))){
var inst_48876 = (state_48921[(10)]);
var inst_48885 = cljs.core.first.call(null,inst_48876);
var inst_48886 = cljs.core.async.muxch_STAR_.call(null,inst_48885);
var inst_48887 = cljs.core.async.close_BANG_.call(null,inst_48886);
var inst_48888 = cljs.core.next.call(null,inst_48876);
var inst_48862 = inst_48888;
var inst_48863 = null;
var inst_48864 = (0);
var inst_48865 = (0);
var state_48921__$1 = (function (){var statearr_48941 = state_48921;
(statearr_48941[(12)] = inst_48887);

(statearr_48941[(13)] = inst_48864);

(statearr_48941[(14)] = inst_48863);

(statearr_48941[(15)] = inst_48862);

(statearr_48941[(16)] = inst_48865);

return statearr_48941;
})();
var statearr_48942_48983 = state_48921__$1;
(statearr_48942_48983[(2)] = null);

(statearr_48942_48983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (3))){
var inst_48919 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48921__$1,inst_48919);
} else {
if((state_val_48922 === (12))){
var inst_48896 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48943_48984 = state_48921__$1;
(statearr_48943_48984[(2)] = inst_48896);

(statearr_48943_48984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (2))){
var state_48921__$1 = state_48921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48921__$1,(4),ch);
} else {
if((state_val_48922 === (23))){
var state_48921__$1 = state_48921;
var statearr_48944_48985 = state_48921__$1;
(statearr_48944_48985[(2)] = null);

(statearr_48944_48985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (19))){
var inst_48902 = (state_48921[(11)]);
var inst_48852 = (state_48921[(8)]);
var inst_48904 = cljs.core.async.muxch_STAR_.call(null,inst_48902);
var state_48921__$1 = state_48921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48921__$1,(22),inst_48904,inst_48852);
} else {
if((state_val_48922 === (11))){
var inst_48876 = (state_48921[(10)]);
var inst_48862 = (state_48921[(15)]);
var inst_48876__$1 = cljs.core.seq.call(null,inst_48862);
var state_48921__$1 = (function (){var statearr_48945 = state_48921;
(statearr_48945[(10)] = inst_48876__$1);

return statearr_48945;
})();
if(inst_48876__$1){
var statearr_48946_48986 = state_48921__$1;
(statearr_48946_48986[(1)] = (13));

} else {
var statearr_48947_48987 = state_48921__$1;
(statearr_48947_48987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (9))){
var inst_48898 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48948_48988 = state_48921__$1;
(statearr_48948_48988[(2)] = inst_48898);

(statearr_48948_48988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (5))){
var inst_48859 = cljs.core.deref.call(null,mults);
var inst_48860 = cljs.core.vals.call(null,inst_48859);
var inst_48861 = cljs.core.seq.call(null,inst_48860);
var inst_48862 = inst_48861;
var inst_48863 = null;
var inst_48864 = (0);
var inst_48865 = (0);
var state_48921__$1 = (function (){var statearr_48949 = state_48921;
(statearr_48949[(13)] = inst_48864);

(statearr_48949[(14)] = inst_48863);

(statearr_48949[(15)] = inst_48862);

(statearr_48949[(16)] = inst_48865);

return statearr_48949;
})();
var statearr_48950_48989 = state_48921__$1;
(statearr_48950_48989[(2)] = null);

(statearr_48950_48989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (14))){
var state_48921__$1 = state_48921;
var statearr_48954_48990 = state_48921__$1;
(statearr_48954_48990[(2)] = null);

(statearr_48954_48990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (16))){
var inst_48876 = (state_48921[(10)]);
var inst_48880 = cljs.core.chunk_first.call(null,inst_48876);
var inst_48881 = cljs.core.chunk_rest.call(null,inst_48876);
var inst_48882 = cljs.core.count.call(null,inst_48880);
var inst_48862 = inst_48881;
var inst_48863 = inst_48880;
var inst_48864 = inst_48882;
var inst_48865 = (0);
var state_48921__$1 = (function (){var statearr_48955 = state_48921;
(statearr_48955[(13)] = inst_48864);

(statearr_48955[(14)] = inst_48863);

(statearr_48955[(15)] = inst_48862);

(statearr_48955[(16)] = inst_48865);

return statearr_48955;
})();
var statearr_48956_48991 = state_48921__$1;
(statearr_48956_48991[(2)] = null);

(statearr_48956_48991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (10))){
var inst_48864 = (state_48921[(13)]);
var inst_48863 = (state_48921[(14)]);
var inst_48862 = (state_48921[(15)]);
var inst_48865 = (state_48921[(16)]);
var inst_48870 = cljs.core._nth.call(null,inst_48863,inst_48865);
var inst_48871 = cljs.core.async.muxch_STAR_.call(null,inst_48870);
var inst_48872 = cljs.core.async.close_BANG_.call(null,inst_48871);
var inst_48873 = (inst_48865 + (1));
var tmp48951 = inst_48864;
var tmp48952 = inst_48863;
var tmp48953 = inst_48862;
var inst_48862__$1 = tmp48953;
var inst_48863__$1 = tmp48952;
var inst_48864__$1 = tmp48951;
var inst_48865__$1 = inst_48873;
var state_48921__$1 = (function (){var statearr_48957 = state_48921;
(statearr_48957[(17)] = inst_48872);

(statearr_48957[(13)] = inst_48864__$1);

(statearr_48957[(14)] = inst_48863__$1);

(statearr_48957[(15)] = inst_48862__$1);

(statearr_48957[(16)] = inst_48865__$1);

return statearr_48957;
})();
var statearr_48958_48992 = state_48921__$1;
(statearr_48958_48992[(2)] = null);

(statearr_48958_48992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (18))){
var inst_48891 = (state_48921[(2)]);
var state_48921__$1 = state_48921;
var statearr_48959_48993 = state_48921__$1;
(statearr_48959_48993[(2)] = inst_48891);

(statearr_48959_48993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48922 === (8))){
var inst_48864 = (state_48921[(13)]);
var inst_48865 = (state_48921[(16)]);
var inst_48867 = (inst_48865 < inst_48864);
var inst_48868 = inst_48867;
var state_48921__$1 = state_48921;
if(cljs.core.truth_(inst_48868)){
var statearr_48960_48994 = state_48921__$1;
(statearr_48960_48994[(1)] = (10));

} else {
var statearr_48961_48995 = state_48921__$1;
(statearr_48961_48995[(1)] = (11));

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
});})(c__30792__auto___48967,mults,ensure_mult,p))
;
return ((function (switch__30635__auto__,c__30792__auto___48967,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_48962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48962[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_48962[(1)] = (1));

return statearr_48962;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_48921){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_48921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e48963){if((e48963 instanceof Object)){
var ex__30639__auto__ = e48963;
var statearr_48964_48996 = state_48921;
(statearr_48964_48996[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48997 = state_48921;
state_48921 = G__48997;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_48921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_48921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___48967,mults,ensure_mult,p))
})();
var state__30794__auto__ = (function (){var statearr_48965 = f__30793__auto__.call(null);
(statearr_48965[(6)] = c__30792__auto___48967);

return statearr_48965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___48967,mults,ensure_mult,p))
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
var G__48999 = arguments.length;
switch (G__48999) {
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
var G__49002 = arguments.length;
switch (G__49002) {
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
var G__49005 = arguments.length;
switch (G__49005) {
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
var c__30792__auto___49072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49044){
var state_val_49045 = (state_49044[(1)]);
if((state_val_49045 === (7))){
var state_49044__$1 = state_49044;
var statearr_49046_49073 = state_49044__$1;
(statearr_49046_49073[(2)] = null);

(statearr_49046_49073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (1))){
var state_49044__$1 = state_49044;
var statearr_49047_49074 = state_49044__$1;
(statearr_49047_49074[(2)] = null);

(statearr_49047_49074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (4))){
var inst_49008 = (state_49044[(7)]);
var inst_49010 = (inst_49008 < cnt);
var state_49044__$1 = state_49044;
if(cljs.core.truth_(inst_49010)){
var statearr_49048_49075 = state_49044__$1;
(statearr_49048_49075[(1)] = (6));

} else {
var statearr_49049_49076 = state_49044__$1;
(statearr_49049_49076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (15))){
var inst_49040 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49050_49077 = state_49044__$1;
(statearr_49050_49077[(2)] = inst_49040);

(statearr_49050_49077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (13))){
var inst_49033 = cljs.core.async.close_BANG_.call(null,out);
var state_49044__$1 = state_49044;
var statearr_49051_49078 = state_49044__$1;
(statearr_49051_49078[(2)] = inst_49033);

(statearr_49051_49078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (6))){
var state_49044__$1 = state_49044;
var statearr_49052_49079 = state_49044__$1;
(statearr_49052_49079[(2)] = null);

(statearr_49052_49079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (3))){
var inst_49042 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49044__$1,inst_49042);
} else {
if((state_val_49045 === (12))){
var inst_49030 = (state_49044[(8)]);
var inst_49030__$1 = (state_49044[(2)]);
var inst_49031 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49030__$1);
var state_49044__$1 = (function (){var statearr_49053 = state_49044;
(statearr_49053[(8)] = inst_49030__$1);

return statearr_49053;
})();
if(cljs.core.truth_(inst_49031)){
var statearr_49054_49080 = state_49044__$1;
(statearr_49054_49080[(1)] = (13));

} else {
var statearr_49055_49081 = state_49044__$1;
(statearr_49055_49081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (2))){
var inst_49007 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49008 = (0);
var state_49044__$1 = (function (){var statearr_49056 = state_49044;
(statearr_49056[(9)] = inst_49007);

(statearr_49056[(7)] = inst_49008);

return statearr_49056;
})();
var statearr_49057_49082 = state_49044__$1;
(statearr_49057_49082[(2)] = null);

(statearr_49057_49082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (11))){
var inst_49008 = (state_49044[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49044,(10),Object,null,(9));
var inst_49017 = chs__$1.call(null,inst_49008);
var inst_49018 = done.call(null,inst_49008);
var inst_49019 = cljs.core.async.take_BANG_.call(null,inst_49017,inst_49018);
var state_49044__$1 = state_49044;
var statearr_49058_49083 = state_49044__$1;
(statearr_49058_49083[(2)] = inst_49019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (9))){
var inst_49008 = (state_49044[(7)]);
var inst_49021 = (state_49044[(2)]);
var inst_49022 = (inst_49008 + (1));
var inst_49008__$1 = inst_49022;
var state_49044__$1 = (function (){var statearr_49059 = state_49044;
(statearr_49059[(10)] = inst_49021);

(statearr_49059[(7)] = inst_49008__$1);

return statearr_49059;
})();
var statearr_49060_49084 = state_49044__$1;
(statearr_49060_49084[(2)] = null);

(statearr_49060_49084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (5))){
var inst_49028 = (state_49044[(2)]);
var state_49044__$1 = (function (){var statearr_49061 = state_49044;
(statearr_49061[(11)] = inst_49028);

return statearr_49061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49044__$1,(12),dchan);
} else {
if((state_val_49045 === (14))){
var inst_49030 = (state_49044[(8)]);
var inst_49035 = cljs.core.apply.call(null,f,inst_49030);
var state_49044__$1 = state_49044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49044__$1,(16),out,inst_49035);
} else {
if((state_val_49045 === (16))){
var inst_49037 = (state_49044[(2)]);
var state_49044__$1 = (function (){var statearr_49062 = state_49044;
(statearr_49062[(12)] = inst_49037);

return statearr_49062;
})();
var statearr_49063_49085 = state_49044__$1;
(statearr_49063_49085[(2)] = null);

(statearr_49063_49085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (10))){
var inst_49012 = (state_49044[(2)]);
var inst_49013 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49044__$1 = (function (){var statearr_49064 = state_49044;
(statearr_49064[(13)] = inst_49012);

return statearr_49064;
})();
var statearr_49065_49086 = state_49044__$1;
(statearr_49065_49086[(2)] = inst_49013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49045 === (8))){
var inst_49026 = (state_49044[(2)]);
var state_49044__$1 = state_49044;
var statearr_49066_49087 = state_49044__$1;
(statearr_49066_49087[(2)] = inst_49026);

(statearr_49066_49087[(1)] = (5));


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
});})(c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30635__auto__,c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49067[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49067[(1)] = (1));

return statearr_49067;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49044){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49068){if((e49068 instanceof Object)){
var ex__30639__auto__ = e49068;
var statearr_49069_49088 = state_49044;
(statearr_49069_49088[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49089 = state_49044;
state_49044 = G__49089;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30794__auto__ = (function (){var statearr_49070 = f__30793__auto__.call(null);
(statearr_49070[(6)] = c__30792__auto___49072);

return statearr_49070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49072,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__49092 = arguments.length;
switch (G__49092) {
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
var c__30792__auto___49146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49146,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49146,out){
return (function (state_49124){
var state_val_49125 = (state_49124[(1)]);
if((state_val_49125 === (7))){
var inst_49103 = (state_49124[(7)]);
var inst_49104 = (state_49124[(8)]);
var inst_49103__$1 = (state_49124[(2)]);
var inst_49104__$1 = cljs.core.nth.call(null,inst_49103__$1,(0),null);
var inst_49105 = cljs.core.nth.call(null,inst_49103__$1,(1),null);
var inst_49106 = (inst_49104__$1 == null);
var state_49124__$1 = (function (){var statearr_49126 = state_49124;
(statearr_49126[(7)] = inst_49103__$1);

(statearr_49126[(9)] = inst_49105);

(statearr_49126[(8)] = inst_49104__$1);

return statearr_49126;
})();
if(cljs.core.truth_(inst_49106)){
var statearr_49127_49147 = state_49124__$1;
(statearr_49127_49147[(1)] = (8));

} else {
var statearr_49128_49148 = state_49124__$1;
(statearr_49128_49148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (1))){
var inst_49093 = cljs.core.vec.call(null,chs);
var inst_49094 = inst_49093;
var state_49124__$1 = (function (){var statearr_49129 = state_49124;
(statearr_49129[(10)] = inst_49094);

return statearr_49129;
})();
var statearr_49130_49149 = state_49124__$1;
(statearr_49130_49149[(2)] = null);

(statearr_49130_49149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (4))){
var inst_49094 = (state_49124[(10)]);
var state_49124__$1 = state_49124;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49124__$1,(7),inst_49094);
} else {
if((state_val_49125 === (6))){
var inst_49120 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
var statearr_49131_49150 = state_49124__$1;
(statearr_49131_49150[(2)] = inst_49120);

(statearr_49131_49150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (3))){
var inst_49122 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49124__$1,inst_49122);
} else {
if((state_val_49125 === (2))){
var inst_49094 = (state_49124[(10)]);
var inst_49096 = cljs.core.count.call(null,inst_49094);
var inst_49097 = (inst_49096 > (0));
var state_49124__$1 = state_49124;
if(cljs.core.truth_(inst_49097)){
var statearr_49133_49151 = state_49124__$1;
(statearr_49133_49151[(1)] = (4));

} else {
var statearr_49134_49152 = state_49124__$1;
(statearr_49134_49152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (11))){
var inst_49094 = (state_49124[(10)]);
var inst_49113 = (state_49124[(2)]);
var tmp49132 = inst_49094;
var inst_49094__$1 = tmp49132;
var state_49124__$1 = (function (){var statearr_49135 = state_49124;
(statearr_49135[(11)] = inst_49113);

(statearr_49135[(10)] = inst_49094__$1);

return statearr_49135;
})();
var statearr_49136_49153 = state_49124__$1;
(statearr_49136_49153[(2)] = null);

(statearr_49136_49153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (9))){
var inst_49104 = (state_49124[(8)]);
var state_49124__$1 = state_49124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49124__$1,(11),out,inst_49104);
} else {
if((state_val_49125 === (5))){
var inst_49118 = cljs.core.async.close_BANG_.call(null,out);
var state_49124__$1 = state_49124;
var statearr_49137_49154 = state_49124__$1;
(statearr_49137_49154[(2)] = inst_49118);

(statearr_49137_49154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (10))){
var inst_49116 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
var statearr_49138_49155 = state_49124__$1;
(statearr_49138_49155[(2)] = inst_49116);

(statearr_49138_49155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (8))){
var inst_49103 = (state_49124[(7)]);
var inst_49105 = (state_49124[(9)]);
var inst_49104 = (state_49124[(8)]);
var inst_49094 = (state_49124[(10)]);
var inst_49108 = (function (){var cs = inst_49094;
var vec__49099 = inst_49103;
var v = inst_49104;
var c = inst_49105;
return ((function (cs,vec__49099,v,c,inst_49103,inst_49105,inst_49104,inst_49094,state_val_49125,c__30792__auto___49146,out){
return (function (p1__49090_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49090_SHARP_);
});
;})(cs,vec__49099,v,c,inst_49103,inst_49105,inst_49104,inst_49094,state_val_49125,c__30792__auto___49146,out))
})();
var inst_49109 = cljs.core.filterv.call(null,inst_49108,inst_49094);
var inst_49094__$1 = inst_49109;
var state_49124__$1 = (function (){var statearr_49139 = state_49124;
(statearr_49139[(10)] = inst_49094__$1);

return statearr_49139;
})();
var statearr_49140_49156 = state_49124__$1;
(statearr_49140_49156[(2)] = null);

(statearr_49140_49156[(1)] = (2));


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
});})(c__30792__auto___49146,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49146,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49141[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49141[(1)] = (1));

return statearr_49141;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49124){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49142){if((e49142 instanceof Object)){
var ex__30639__auto__ = e49142;
var statearr_49143_49157 = state_49124;
(statearr_49143_49157[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49158 = state_49124;
state_49124 = G__49158;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49146,out))
})();
var state__30794__auto__ = (function (){var statearr_49144 = f__30793__auto__.call(null);
(statearr_49144[(6)] = c__30792__auto___49146);

return statearr_49144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49146,out))
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
var G__49160 = arguments.length;
switch (G__49160) {
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
var c__30792__auto___49205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49205,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49205,out){
return (function (state_49184){
var state_val_49185 = (state_49184[(1)]);
if((state_val_49185 === (7))){
var inst_49166 = (state_49184[(7)]);
var inst_49166__$1 = (state_49184[(2)]);
var inst_49167 = (inst_49166__$1 == null);
var inst_49168 = cljs.core.not.call(null,inst_49167);
var state_49184__$1 = (function (){var statearr_49186 = state_49184;
(statearr_49186[(7)] = inst_49166__$1);

return statearr_49186;
})();
if(inst_49168){
var statearr_49187_49206 = state_49184__$1;
(statearr_49187_49206[(1)] = (8));

} else {
var statearr_49188_49207 = state_49184__$1;
(statearr_49188_49207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (1))){
var inst_49161 = (0);
var state_49184__$1 = (function (){var statearr_49189 = state_49184;
(statearr_49189[(8)] = inst_49161);

return statearr_49189;
})();
var statearr_49190_49208 = state_49184__$1;
(statearr_49190_49208[(2)] = null);

(statearr_49190_49208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (4))){
var state_49184__$1 = state_49184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49184__$1,(7),ch);
} else {
if((state_val_49185 === (6))){
var inst_49179 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
var statearr_49191_49209 = state_49184__$1;
(statearr_49191_49209[(2)] = inst_49179);

(statearr_49191_49209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (3))){
var inst_49181 = (state_49184[(2)]);
var inst_49182 = cljs.core.async.close_BANG_.call(null,out);
var state_49184__$1 = (function (){var statearr_49192 = state_49184;
(statearr_49192[(9)] = inst_49181);

return statearr_49192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49184__$1,inst_49182);
} else {
if((state_val_49185 === (2))){
var inst_49161 = (state_49184[(8)]);
var inst_49163 = (inst_49161 < n);
var state_49184__$1 = state_49184;
if(cljs.core.truth_(inst_49163)){
var statearr_49193_49210 = state_49184__$1;
(statearr_49193_49210[(1)] = (4));

} else {
var statearr_49194_49211 = state_49184__$1;
(statearr_49194_49211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (11))){
var inst_49161 = (state_49184[(8)]);
var inst_49171 = (state_49184[(2)]);
var inst_49172 = (inst_49161 + (1));
var inst_49161__$1 = inst_49172;
var state_49184__$1 = (function (){var statearr_49195 = state_49184;
(statearr_49195[(10)] = inst_49171);

(statearr_49195[(8)] = inst_49161__$1);

return statearr_49195;
})();
var statearr_49196_49212 = state_49184__$1;
(statearr_49196_49212[(2)] = null);

(statearr_49196_49212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (9))){
var state_49184__$1 = state_49184;
var statearr_49197_49213 = state_49184__$1;
(statearr_49197_49213[(2)] = null);

(statearr_49197_49213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (5))){
var state_49184__$1 = state_49184;
var statearr_49198_49214 = state_49184__$1;
(statearr_49198_49214[(2)] = null);

(statearr_49198_49214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (10))){
var inst_49176 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
var statearr_49199_49215 = state_49184__$1;
(statearr_49199_49215[(2)] = inst_49176);

(statearr_49199_49215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (8))){
var inst_49166 = (state_49184[(7)]);
var state_49184__$1 = state_49184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49184__$1,(11),out,inst_49166);
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
});})(c__30792__auto___49205,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49205,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49200[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49200[(1)] = (1));

return statearr_49200;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49184){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49201){if((e49201 instanceof Object)){
var ex__30639__auto__ = e49201;
var statearr_49202_49216 = state_49184;
(statearr_49202_49216[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49217 = state_49184;
state_49184 = G__49217;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49205,out))
})();
var state__30794__auto__ = (function (){var statearr_49203 = f__30793__auto__.call(null);
(statearr_49203[(6)] = c__30792__auto___49205);

return statearr_49203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49205,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49219 = (function (f,ch,meta49220){
this.f = f;
this.ch = ch;
this.meta49220 = meta49220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49221,meta49220__$1){
var self__ = this;
var _49221__$1 = this;
return (new cljs.core.async.t_cljs$core$async49219(self__.f,self__.ch,meta49220__$1));
});

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49221){
var self__ = this;
var _49221__$1 = this;
return self__.meta49220;
});

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49222 = (function (f,ch,meta49220,_,fn1,meta49223){
this.f = f;
this.ch = ch;
this.meta49220 = meta49220;
this._ = _;
this.fn1 = fn1;
this.meta49223 = meta49223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49224,meta49223__$1){
var self__ = this;
var _49224__$1 = this;
return (new cljs.core.async.t_cljs$core$async49222(self__.f,self__.ch,self__.meta49220,self__._,self__.fn1,meta49223__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49224){
var self__ = this;
var _49224__$1 = this;
return self__.meta49223;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49218_SHARP_){
return f1.call(null,(((p1__49218_SHARP_ == null))?null:self__.f.call(null,p1__49218_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49220","meta49220",-617794387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49219","cljs.core.async/t_cljs$core$async49219",875704987,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49223","meta49223",-248375142,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49222";

cljs.core.async.t_cljs$core$async49222.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49222");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49222.
 */
cljs.core.async.__GT_t_cljs$core$async49222 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49222(f__$1,ch__$1,meta49220__$1,___$2,fn1__$1,meta49223){
return (new cljs.core.async.t_cljs$core$async49222(f__$1,ch__$1,meta49220__$1,___$2,fn1__$1,meta49223));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49222(self__.f,self__.ch,self__.meta49220,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49220","meta49220",-617794387,null)], null);
});

cljs.core.async.t_cljs$core$async49219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49219";

cljs.core.async.t_cljs$core$async49219.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49219");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49219.
 */
cljs.core.async.__GT_t_cljs$core$async49219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49219(f__$1,ch__$1,meta49220){
return (new cljs.core.async.t_cljs$core$async49219(f__$1,ch__$1,meta49220));
});

}

return (new cljs.core.async.t_cljs$core$async49219(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49225 = (function (f,ch,meta49226){
this.f = f;
this.ch = ch;
this.meta49226 = meta49226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49227,meta49226__$1){
var self__ = this;
var _49227__$1 = this;
return (new cljs.core.async.t_cljs$core$async49225(self__.f,self__.ch,meta49226__$1));
});

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49227){
var self__ = this;
var _49227__$1 = this;
return self__.meta49226;
});

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49226","meta49226",-1516790380,null)], null);
});

cljs.core.async.t_cljs$core$async49225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49225";

cljs.core.async.t_cljs$core$async49225.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49225");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49225.
 */
cljs.core.async.__GT_t_cljs$core$async49225 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49225(f__$1,ch__$1,meta49226){
return (new cljs.core.async.t_cljs$core$async49225(f__$1,ch__$1,meta49226));
});

}

return (new cljs.core.async.t_cljs$core$async49225(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49228 = (function (p,ch,meta49229){
this.p = p;
this.ch = ch;
this.meta49229 = meta49229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49230,meta49229__$1){
var self__ = this;
var _49230__$1 = this;
return (new cljs.core.async.t_cljs$core$async49228(self__.p,self__.ch,meta49229__$1));
});

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49230){
var self__ = this;
var _49230__$1 = this;
return self__.meta49229;
});

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49229","meta49229",-1821812184,null)], null);
});

cljs.core.async.t_cljs$core$async49228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49228";

cljs.core.async.t_cljs$core$async49228.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49228");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49228.
 */
cljs.core.async.__GT_t_cljs$core$async49228 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49228(p__$1,ch__$1,meta49229){
return (new cljs.core.async.t_cljs$core$async49228(p__$1,ch__$1,meta49229));
});

}

return (new cljs.core.async.t_cljs$core$async49228(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49232 = arguments.length;
switch (G__49232) {
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
var c__30792__auto___49272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49272,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49272,out){
return (function (state_49253){
var state_val_49254 = (state_49253[(1)]);
if((state_val_49254 === (7))){
var inst_49249 = (state_49253[(2)]);
var state_49253__$1 = state_49253;
var statearr_49255_49273 = state_49253__$1;
(statearr_49255_49273[(2)] = inst_49249);

(statearr_49255_49273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (1))){
var state_49253__$1 = state_49253;
var statearr_49256_49274 = state_49253__$1;
(statearr_49256_49274[(2)] = null);

(statearr_49256_49274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (4))){
var inst_49235 = (state_49253[(7)]);
var inst_49235__$1 = (state_49253[(2)]);
var inst_49236 = (inst_49235__$1 == null);
var state_49253__$1 = (function (){var statearr_49257 = state_49253;
(statearr_49257[(7)] = inst_49235__$1);

return statearr_49257;
})();
if(cljs.core.truth_(inst_49236)){
var statearr_49258_49275 = state_49253__$1;
(statearr_49258_49275[(1)] = (5));

} else {
var statearr_49259_49276 = state_49253__$1;
(statearr_49259_49276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (6))){
var inst_49235 = (state_49253[(7)]);
var inst_49240 = p.call(null,inst_49235);
var state_49253__$1 = state_49253;
if(cljs.core.truth_(inst_49240)){
var statearr_49260_49277 = state_49253__$1;
(statearr_49260_49277[(1)] = (8));

} else {
var statearr_49261_49278 = state_49253__$1;
(statearr_49261_49278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (3))){
var inst_49251 = (state_49253[(2)]);
var state_49253__$1 = state_49253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49253__$1,inst_49251);
} else {
if((state_val_49254 === (2))){
var state_49253__$1 = state_49253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49253__$1,(4),ch);
} else {
if((state_val_49254 === (11))){
var inst_49243 = (state_49253[(2)]);
var state_49253__$1 = state_49253;
var statearr_49262_49279 = state_49253__$1;
(statearr_49262_49279[(2)] = inst_49243);

(statearr_49262_49279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (9))){
var state_49253__$1 = state_49253;
var statearr_49263_49280 = state_49253__$1;
(statearr_49263_49280[(2)] = null);

(statearr_49263_49280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (5))){
var inst_49238 = cljs.core.async.close_BANG_.call(null,out);
var state_49253__$1 = state_49253;
var statearr_49264_49281 = state_49253__$1;
(statearr_49264_49281[(2)] = inst_49238);

(statearr_49264_49281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (10))){
var inst_49246 = (state_49253[(2)]);
var state_49253__$1 = (function (){var statearr_49265 = state_49253;
(statearr_49265[(8)] = inst_49246);

return statearr_49265;
})();
var statearr_49266_49282 = state_49253__$1;
(statearr_49266_49282[(2)] = null);

(statearr_49266_49282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49254 === (8))){
var inst_49235 = (state_49253[(7)]);
var state_49253__$1 = state_49253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49253__$1,(11),out,inst_49235);
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
});})(c__30792__auto___49272,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49272,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49267 = [null,null,null,null,null,null,null,null,null];
(statearr_49267[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49267[(1)] = (1));

return statearr_49267;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49253){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49268){if((e49268 instanceof Object)){
var ex__30639__auto__ = e49268;
var statearr_49269_49283 = state_49253;
(statearr_49269_49283[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49284 = state_49253;
state_49253 = G__49284;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49272,out))
})();
var state__30794__auto__ = (function (){var statearr_49270 = f__30793__auto__.call(null);
(statearr_49270[(6)] = c__30792__auto___49272);

return statearr_49270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49272,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49286 = arguments.length;
switch (G__49286) {
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__){
return (function (state_49349){
var state_val_49350 = (state_49349[(1)]);
if((state_val_49350 === (7))){
var inst_49345 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49351_49389 = state_49349__$1;
(statearr_49351_49389[(2)] = inst_49345);

(statearr_49351_49389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (20))){
var inst_49315 = (state_49349[(7)]);
var inst_49326 = (state_49349[(2)]);
var inst_49327 = cljs.core.next.call(null,inst_49315);
var inst_49301 = inst_49327;
var inst_49302 = null;
var inst_49303 = (0);
var inst_49304 = (0);
var state_49349__$1 = (function (){var statearr_49352 = state_49349;
(statearr_49352[(8)] = inst_49301);

(statearr_49352[(9)] = inst_49302);

(statearr_49352[(10)] = inst_49304);

(statearr_49352[(11)] = inst_49326);

(statearr_49352[(12)] = inst_49303);

return statearr_49352;
})();
var statearr_49353_49390 = state_49349__$1;
(statearr_49353_49390[(2)] = null);

(statearr_49353_49390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (1))){
var state_49349__$1 = state_49349;
var statearr_49354_49391 = state_49349__$1;
(statearr_49354_49391[(2)] = null);

(statearr_49354_49391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (4))){
var inst_49290 = (state_49349[(13)]);
var inst_49290__$1 = (state_49349[(2)]);
var inst_49291 = (inst_49290__$1 == null);
var state_49349__$1 = (function (){var statearr_49355 = state_49349;
(statearr_49355[(13)] = inst_49290__$1);

return statearr_49355;
})();
if(cljs.core.truth_(inst_49291)){
var statearr_49356_49392 = state_49349__$1;
(statearr_49356_49392[(1)] = (5));

} else {
var statearr_49357_49393 = state_49349__$1;
(statearr_49357_49393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (15))){
var state_49349__$1 = state_49349;
var statearr_49361_49394 = state_49349__$1;
(statearr_49361_49394[(2)] = null);

(statearr_49361_49394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (21))){
var state_49349__$1 = state_49349;
var statearr_49362_49395 = state_49349__$1;
(statearr_49362_49395[(2)] = null);

(statearr_49362_49395[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (13))){
var inst_49301 = (state_49349[(8)]);
var inst_49302 = (state_49349[(9)]);
var inst_49304 = (state_49349[(10)]);
var inst_49303 = (state_49349[(12)]);
var inst_49311 = (state_49349[(2)]);
var inst_49312 = (inst_49304 + (1));
var tmp49358 = inst_49301;
var tmp49359 = inst_49302;
var tmp49360 = inst_49303;
var inst_49301__$1 = tmp49358;
var inst_49302__$1 = tmp49359;
var inst_49303__$1 = tmp49360;
var inst_49304__$1 = inst_49312;
var state_49349__$1 = (function (){var statearr_49363 = state_49349;
(statearr_49363[(8)] = inst_49301__$1);

(statearr_49363[(14)] = inst_49311);

(statearr_49363[(9)] = inst_49302__$1);

(statearr_49363[(10)] = inst_49304__$1);

(statearr_49363[(12)] = inst_49303__$1);

return statearr_49363;
})();
var statearr_49364_49396 = state_49349__$1;
(statearr_49364_49396[(2)] = null);

(statearr_49364_49396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (22))){
var state_49349__$1 = state_49349;
var statearr_49365_49397 = state_49349__$1;
(statearr_49365_49397[(2)] = null);

(statearr_49365_49397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (6))){
var inst_49290 = (state_49349[(13)]);
var inst_49299 = f.call(null,inst_49290);
var inst_49300 = cljs.core.seq.call(null,inst_49299);
var inst_49301 = inst_49300;
var inst_49302 = null;
var inst_49303 = (0);
var inst_49304 = (0);
var state_49349__$1 = (function (){var statearr_49366 = state_49349;
(statearr_49366[(8)] = inst_49301);

(statearr_49366[(9)] = inst_49302);

(statearr_49366[(10)] = inst_49304);

(statearr_49366[(12)] = inst_49303);

return statearr_49366;
})();
var statearr_49367_49398 = state_49349__$1;
(statearr_49367_49398[(2)] = null);

(statearr_49367_49398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (17))){
var inst_49315 = (state_49349[(7)]);
var inst_49319 = cljs.core.chunk_first.call(null,inst_49315);
var inst_49320 = cljs.core.chunk_rest.call(null,inst_49315);
var inst_49321 = cljs.core.count.call(null,inst_49319);
var inst_49301 = inst_49320;
var inst_49302 = inst_49319;
var inst_49303 = inst_49321;
var inst_49304 = (0);
var state_49349__$1 = (function (){var statearr_49368 = state_49349;
(statearr_49368[(8)] = inst_49301);

(statearr_49368[(9)] = inst_49302);

(statearr_49368[(10)] = inst_49304);

(statearr_49368[(12)] = inst_49303);

return statearr_49368;
})();
var statearr_49369_49399 = state_49349__$1;
(statearr_49369_49399[(2)] = null);

(statearr_49369_49399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (3))){
var inst_49347 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49349__$1,inst_49347);
} else {
if((state_val_49350 === (12))){
var inst_49335 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49370_49400 = state_49349__$1;
(statearr_49370_49400[(2)] = inst_49335);

(statearr_49370_49400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (2))){
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49349__$1,(4),in$);
} else {
if((state_val_49350 === (23))){
var inst_49343 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49371_49401 = state_49349__$1;
(statearr_49371_49401[(2)] = inst_49343);

(statearr_49371_49401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (19))){
var inst_49330 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49372_49402 = state_49349__$1;
(statearr_49372_49402[(2)] = inst_49330);

(statearr_49372_49402[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (11))){
var inst_49301 = (state_49349[(8)]);
var inst_49315 = (state_49349[(7)]);
var inst_49315__$1 = cljs.core.seq.call(null,inst_49301);
var state_49349__$1 = (function (){var statearr_49373 = state_49349;
(statearr_49373[(7)] = inst_49315__$1);

return statearr_49373;
})();
if(inst_49315__$1){
var statearr_49374_49403 = state_49349__$1;
(statearr_49374_49403[(1)] = (14));

} else {
var statearr_49375_49404 = state_49349__$1;
(statearr_49375_49404[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (9))){
var inst_49337 = (state_49349[(2)]);
var inst_49338 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49349__$1 = (function (){var statearr_49376 = state_49349;
(statearr_49376[(15)] = inst_49337);

return statearr_49376;
})();
if(cljs.core.truth_(inst_49338)){
var statearr_49377_49405 = state_49349__$1;
(statearr_49377_49405[(1)] = (21));

} else {
var statearr_49378_49406 = state_49349__$1;
(statearr_49378_49406[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (5))){
var inst_49293 = cljs.core.async.close_BANG_.call(null,out);
var state_49349__$1 = state_49349;
var statearr_49379_49407 = state_49349__$1;
(statearr_49379_49407[(2)] = inst_49293);

(statearr_49379_49407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (14))){
var inst_49315 = (state_49349[(7)]);
var inst_49317 = cljs.core.chunked_seq_QMARK_.call(null,inst_49315);
var state_49349__$1 = state_49349;
if(inst_49317){
var statearr_49380_49408 = state_49349__$1;
(statearr_49380_49408[(1)] = (17));

} else {
var statearr_49381_49409 = state_49349__$1;
(statearr_49381_49409[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (16))){
var inst_49333 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49382_49410 = state_49349__$1;
(statearr_49382_49410[(2)] = inst_49333);

(statearr_49382_49410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (10))){
var inst_49302 = (state_49349[(9)]);
var inst_49304 = (state_49349[(10)]);
var inst_49309 = cljs.core._nth.call(null,inst_49302,inst_49304);
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49349__$1,(13),out,inst_49309);
} else {
if((state_val_49350 === (18))){
var inst_49315 = (state_49349[(7)]);
var inst_49324 = cljs.core.first.call(null,inst_49315);
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49349__$1,(20),out,inst_49324);
} else {
if((state_val_49350 === (8))){
var inst_49304 = (state_49349[(10)]);
var inst_49303 = (state_49349[(12)]);
var inst_49306 = (inst_49304 < inst_49303);
var inst_49307 = inst_49306;
var state_49349__$1 = state_49349;
if(cljs.core.truth_(inst_49307)){
var statearr_49383_49411 = state_49349__$1;
(statearr_49383_49411[(1)] = (10));

} else {
var statearr_49384_49412 = state_49349__$1;
(statearr_49384_49412[(1)] = (11));

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
});})(c__30792__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____0 = (function (){
var statearr_49385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49385[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__);

(statearr_49385[(1)] = (1));

return statearr_49385;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____1 = (function (state_49349){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49386){if((e49386 instanceof Object)){
var ex__30639__auto__ = e49386;
var statearr_49387_49413 = state_49349;
(statearr_49387_49413[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49414 = state_49349;
state_49349 = G__49414;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__ = function(state_49349){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____1.call(this,state_49349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30636__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_49388 = f__30793__auto__.call(null);
(statearr_49388[(6)] = c__30792__auto__);

return statearr_49388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49416 = arguments.length;
switch (G__49416) {
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
var G__49419 = arguments.length;
switch (G__49419) {
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
var G__49422 = arguments.length;
switch (G__49422) {
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
var c__30792__auto___49469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49469,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49469,out){
return (function (state_49446){
var state_val_49447 = (state_49446[(1)]);
if((state_val_49447 === (7))){
var inst_49441 = (state_49446[(2)]);
var state_49446__$1 = state_49446;
var statearr_49448_49470 = state_49446__$1;
(statearr_49448_49470[(2)] = inst_49441);

(statearr_49448_49470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (1))){
var inst_49423 = null;
var state_49446__$1 = (function (){var statearr_49449 = state_49446;
(statearr_49449[(7)] = inst_49423);

return statearr_49449;
})();
var statearr_49450_49471 = state_49446__$1;
(statearr_49450_49471[(2)] = null);

(statearr_49450_49471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (4))){
var inst_49426 = (state_49446[(8)]);
var inst_49426__$1 = (state_49446[(2)]);
var inst_49427 = (inst_49426__$1 == null);
var inst_49428 = cljs.core.not.call(null,inst_49427);
var state_49446__$1 = (function (){var statearr_49451 = state_49446;
(statearr_49451[(8)] = inst_49426__$1);

return statearr_49451;
})();
if(inst_49428){
var statearr_49452_49472 = state_49446__$1;
(statearr_49452_49472[(1)] = (5));

} else {
var statearr_49453_49473 = state_49446__$1;
(statearr_49453_49473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (6))){
var state_49446__$1 = state_49446;
var statearr_49454_49474 = state_49446__$1;
(statearr_49454_49474[(2)] = null);

(statearr_49454_49474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (3))){
var inst_49443 = (state_49446[(2)]);
var inst_49444 = cljs.core.async.close_BANG_.call(null,out);
var state_49446__$1 = (function (){var statearr_49455 = state_49446;
(statearr_49455[(9)] = inst_49443);

return statearr_49455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49446__$1,inst_49444);
} else {
if((state_val_49447 === (2))){
var state_49446__$1 = state_49446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49446__$1,(4),ch);
} else {
if((state_val_49447 === (11))){
var inst_49426 = (state_49446[(8)]);
var inst_49435 = (state_49446[(2)]);
var inst_49423 = inst_49426;
var state_49446__$1 = (function (){var statearr_49456 = state_49446;
(statearr_49456[(10)] = inst_49435);

(statearr_49456[(7)] = inst_49423);

return statearr_49456;
})();
var statearr_49457_49475 = state_49446__$1;
(statearr_49457_49475[(2)] = null);

(statearr_49457_49475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (9))){
var inst_49426 = (state_49446[(8)]);
var state_49446__$1 = state_49446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49446__$1,(11),out,inst_49426);
} else {
if((state_val_49447 === (5))){
var inst_49426 = (state_49446[(8)]);
var inst_49423 = (state_49446[(7)]);
var inst_49430 = cljs.core._EQ_.call(null,inst_49426,inst_49423);
var state_49446__$1 = state_49446;
if(inst_49430){
var statearr_49459_49476 = state_49446__$1;
(statearr_49459_49476[(1)] = (8));

} else {
var statearr_49460_49477 = state_49446__$1;
(statearr_49460_49477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (10))){
var inst_49438 = (state_49446[(2)]);
var state_49446__$1 = state_49446;
var statearr_49461_49478 = state_49446__$1;
(statearr_49461_49478[(2)] = inst_49438);

(statearr_49461_49478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (8))){
var inst_49423 = (state_49446[(7)]);
var tmp49458 = inst_49423;
var inst_49423__$1 = tmp49458;
var state_49446__$1 = (function (){var statearr_49462 = state_49446;
(statearr_49462[(7)] = inst_49423__$1);

return statearr_49462;
})();
var statearr_49463_49479 = state_49446__$1;
(statearr_49463_49479[(2)] = null);

(statearr_49463_49479[(1)] = (2));


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
});})(c__30792__auto___49469,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49469,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49464[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49464[(1)] = (1));

return statearr_49464;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49446){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49465){if((e49465 instanceof Object)){
var ex__30639__auto__ = e49465;
var statearr_49466_49480 = state_49446;
(statearr_49466_49480[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49481 = state_49446;
state_49446 = G__49481;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49469,out))
})();
var state__30794__auto__ = (function (){var statearr_49467 = f__30793__auto__.call(null);
(statearr_49467[(6)] = c__30792__auto___49469);

return statearr_49467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49469,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49483 = arguments.length;
switch (G__49483) {
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
var c__30792__auto___49549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49549,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49549,out){
return (function (state_49521){
var state_val_49522 = (state_49521[(1)]);
if((state_val_49522 === (7))){
var inst_49517 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49523_49550 = state_49521__$1;
(statearr_49523_49550[(2)] = inst_49517);

(statearr_49523_49550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (1))){
var inst_49484 = (new Array(n));
var inst_49485 = inst_49484;
var inst_49486 = (0);
var state_49521__$1 = (function (){var statearr_49524 = state_49521;
(statearr_49524[(7)] = inst_49486);

(statearr_49524[(8)] = inst_49485);

return statearr_49524;
})();
var statearr_49525_49551 = state_49521__$1;
(statearr_49525_49551[(2)] = null);

(statearr_49525_49551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (4))){
var inst_49489 = (state_49521[(9)]);
var inst_49489__$1 = (state_49521[(2)]);
var inst_49490 = (inst_49489__$1 == null);
var inst_49491 = cljs.core.not.call(null,inst_49490);
var state_49521__$1 = (function (){var statearr_49526 = state_49521;
(statearr_49526[(9)] = inst_49489__$1);

return statearr_49526;
})();
if(inst_49491){
var statearr_49527_49552 = state_49521__$1;
(statearr_49527_49552[(1)] = (5));

} else {
var statearr_49528_49553 = state_49521__$1;
(statearr_49528_49553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (15))){
var inst_49511 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49529_49554 = state_49521__$1;
(statearr_49529_49554[(2)] = inst_49511);

(statearr_49529_49554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (13))){
var state_49521__$1 = state_49521;
var statearr_49530_49555 = state_49521__$1;
(statearr_49530_49555[(2)] = null);

(statearr_49530_49555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (6))){
var inst_49486 = (state_49521[(7)]);
var inst_49507 = (inst_49486 > (0));
var state_49521__$1 = state_49521;
if(cljs.core.truth_(inst_49507)){
var statearr_49531_49556 = state_49521__$1;
(statearr_49531_49556[(1)] = (12));

} else {
var statearr_49532_49557 = state_49521__$1;
(statearr_49532_49557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (3))){
var inst_49519 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49521__$1,inst_49519);
} else {
if((state_val_49522 === (12))){
var inst_49485 = (state_49521[(8)]);
var inst_49509 = cljs.core.vec.call(null,inst_49485);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49521__$1,(15),out,inst_49509);
} else {
if((state_val_49522 === (2))){
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49521__$1,(4),ch);
} else {
if((state_val_49522 === (11))){
var inst_49501 = (state_49521[(2)]);
var inst_49502 = (new Array(n));
var inst_49485 = inst_49502;
var inst_49486 = (0);
var state_49521__$1 = (function (){var statearr_49533 = state_49521;
(statearr_49533[(10)] = inst_49501);

(statearr_49533[(7)] = inst_49486);

(statearr_49533[(8)] = inst_49485);

return statearr_49533;
})();
var statearr_49534_49558 = state_49521__$1;
(statearr_49534_49558[(2)] = null);

(statearr_49534_49558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (9))){
var inst_49485 = (state_49521[(8)]);
var inst_49499 = cljs.core.vec.call(null,inst_49485);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49521__$1,(11),out,inst_49499);
} else {
if((state_val_49522 === (5))){
var inst_49489 = (state_49521[(9)]);
var inst_49494 = (state_49521[(11)]);
var inst_49486 = (state_49521[(7)]);
var inst_49485 = (state_49521[(8)]);
var inst_49493 = (inst_49485[inst_49486] = inst_49489);
var inst_49494__$1 = (inst_49486 + (1));
var inst_49495 = (inst_49494__$1 < n);
var state_49521__$1 = (function (){var statearr_49535 = state_49521;
(statearr_49535[(11)] = inst_49494__$1);

(statearr_49535[(12)] = inst_49493);

return statearr_49535;
})();
if(cljs.core.truth_(inst_49495)){
var statearr_49536_49559 = state_49521__$1;
(statearr_49536_49559[(1)] = (8));

} else {
var statearr_49537_49560 = state_49521__$1;
(statearr_49537_49560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (14))){
var inst_49514 = (state_49521[(2)]);
var inst_49515 = cljs.core.async.close_BANG_.call(null,out);
var state_49521__$1 = (function (){var statearr_49539 = state_49521;
(statearr_49539[(13)] = inst_49514);

return statearr_49539;
})();
var statearr_49540_49561 = state_49521__$1;
(statearr_49540_49561[(2)] = inst_49515);

(statearr_49540_49561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (10))){
var inst_49505 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49541_49562 = state_49521__$1;
(statearr_49541_49562[(2)] = inst_49505);

(statearr_49541_49562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (8))){
var inst_49494 = (state_49521[(11)]);
var inst_49485 = (state_49521[(8)]);
var tmp49538 = inst_49485;
var inst_49485__$1 = tmp49538;
var inst_49486 = inst_49494;
var state_49521__$1 = (function (){var statearr_49542 = state_49521;
(statearr_49542[(7)] = inst_49486);

(statearr_49542[(8)] = inst_49485__$1);

return statearr_49542;
})();
var statearr_49543_49563 = state_49521__$1;
(statearr_49543_49563[(2)] = null);

(statearr_49543_49563[(1)] = (2));


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
});})(c__30792__auto___49549,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49549,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49544[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49544[(1)] = (1));

return statearr_49544;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49521){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49545){if((e49545 instanceof Object)){
var ex__30639__auto__ = e49545;
var statearr_49546_49564 = state_49521;
(statearr_49546_49564[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49565 = state_49521;
state_49521 = G__49565;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49549,out))
})();
var state__30794__auto__ = (function (){var statearr_49547 = f__30793__auto__.call(null);
(statearr_49547[(6)] = c__30792__auto___49549);

return statearr_49547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49549,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49567 = arguments.length;
switch (G__49567) {
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
var c__30792__auto___49637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___49637,out){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___49637,out){
return (function (state_49609){
var state_val_49610 = (state_49609[(1)]);
if((state_val_49610 === (7))){
var inst_49605 = (state_49609[(2)]);
var state_49609__$1 = state_49609;
var statearr_49611_49638 = state_49609__$1;
(statearr_49611_49638[(2)] = inst_49605);

(statearr_49611_49638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (1))){
var inst_49568 = [];
var inst_49569 = inst_49568;
var inst_49570 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49609__$1 = (function (){var statearr_49612 = state_49609;
(statearr_49612[(7)] = inst_49569);

(statearr_49612[(8)] = inst_49570);

return statearr_49612;
})();
var statearr_49613_49639 = state_49609__$1;
(statearr_49613_49639[(2)] = null);

(statearr_49613_49639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (4))){
var inst_49573 = (state_49609[(9)]);
var inst_49573__$1 = (state_49609[(2)]);
var inst_49574 = (inst_49573__$1 == null);
var inst_49575 = cljs.core.not.call(null,inst_49574);
var state_49609__$1 = (function (){var statearr_49614 = state_49609;
(statearr_49614[(9)] = inst_49573__$1);

return statearr_49614;
})();
if(inst_49575){
var statearr_49615_49640 = state_49609__$1;
(statearr_49615_49640[(1)] = (5));

} else {
var statearr_49616_49641 = state_49609__$1;
(statearr_49616_49641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (15))){
var inst_49599 = (state_49609[(2)]);
var state_49609__$1 = state_49609;
var statearr_49617_49642 = state_49609__$1;
(statearr_49617_49642[(2)] = inst_49599);

(statearr_49617_49642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (13))){
var state_49609__$1 = state_49609;
var statearr_49618_49643 = state_49609__$1;
(statearr_49618_49643[(2)] = null);

(statearr_49618_49643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (6))){
var inst_49569 = (state_49609[(7)]);
var inst_49594 = inst_49569.length;
var inst_49595 = (inst_49594 > (0));
var state_49609__$1 = state_49609;
if(cljs.core.truth_(inst_49595)){
var statearr_49619_49644 = state_49609__$1;
(statearr_49619_49644[(1)] = (12));

} else {
var statearr_49620_49645 = state_49609__$1;
(statearr_49620_49645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (3))){
var inst_49607 = (state_49609[(2)]);
var state_49609__$1 = state_49609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49609__$1,inst_49607);
} else {
if((state_val_49610 === (12))){
var inst_49569 = (state_49609[(7)]);
var inst_49597 = cljs.core.vec.call(null,inst_49569);
var state_49609__$1 = state_49609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49609__$1,(15),out,inst_49597);
} else {
if((state_val_49610 === (2))){
var state_49609__$1 = state_49609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49609__$1,(4),ch);
} else {
if((state_val_49610 === (11))){
var inst_49577 = (state_49609[(10)]);
var inst_49573 = (state_49609[(9)]);
var inst_49587 = (state_49609[(2)]);
var inst_49588 = [];
var inst_49589 = inst_49588.push(inst_49573);
var inst_49569 = inst_49588;
var inst_49570 = inst_49577;
var state_49609__$1 = (function (){var statearr_49621 = state_49609;
(statearr_49621[(11)] = inst_49587);

(statearr_49621[(7)] = inst_49569);

(statearr_49621[(12)] = inst_49589);

(statearr_49621[(8)] = inst_49570);

return statearr_49621;
})();
var statearr_49622_49646 = state_49609__$1;
(statearr_49622_49646[(2)] = null);

(statearr_49622_49646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (9))){
var inst_49569 = (state_49609[(7)]);
var inst_49585 = cljs.core.vec.call(null,inst_49569);
var state_49609__$1 = state_49609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49609__$1,(11),out,inst_49585);
} else {
if((state_val_49610 === (5))){
var inst_49577 = (state_49609[(10)]);
var inst_49573 = (state_49609[(9)]);
var inst_49570 = (state_49609[(8)]);
var inst_49577__$1 = f.call(null,inst_49573);
var inst_49578 = cljs.core._EQ_.call(null,inst_49577__$1,inst_49570);
var inst_49579 = cljs.core.keyword_identical_QMARK_.call(null,inst_49570,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49580 = ((inst_49578) || (inst_49579));
var state_49609__$1 = (function (){var statearr_49623 = state_49609;
(statearr_49623[(10)] = inst_49577__$1);

return statearr_49623;
})();
if(cljs.core.truth_(inst_49580)){
var statearr_49624_49647 = state_49609__$1;
(statearr_49624_49647[(1)] = (8));

} else {
var statearr_49625_49648 = state_49609__$1;
(statearr_49625_49648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (14))){
var inst_49602 = (state_49609[(2)]);
var inst_49603 = cljs.core.async.close_BANG_.call(null,out);
var state_49609__$1 = (function (){var statearr_49627 = state_49609;
(statearr_49627[(13)] = inst_49602);

return statearr_49627;
})();
var statearr_49628_49649 = state_49609__$1;
(statearr_49628_49649[(2)] = inst_49603);

(statearr_49628_49649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (10))){
var inst_49592 = (state_49609[(2)]);
var state_49609__$1 = state_49609;
var statearr_49629_49650 = state_49609__$1;
(statearr_49629_49650[(2)] = inst_49592);

(statearr_49629_49650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49610 === (8))){
var inst_49577 = (state_49609[(10)]);
var inst_49569 = (state_49609[(7)]);
var inst_49573 = (state_49609[(9)]);
var inst_49582 = inst_49569.push(inst_49573);
var tmp49626 = inst_49569;
var inst_49569__$1 = tmp49626;
var inst_49570 = inst_49577;
var state_49609__$1 = (function (){var statearr_49630 = state_49609;
(statearr_49630[(14)] = inst_49582);

(statearr_49630[(7)] = inst_49569__$1);

(statearr_49630[(8)] = inst_49570);

return statearr_49630;
})();
var statearr_49631_49651 = state_49609__$1;
(statearr_49631_49651[(2)] = null);

(statearr_49631_49651[(1)] = (2));


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
});})(c__30792__auto___49637,out))
;
return ((function (switch__30635__auto__,c__30792__auto___49637,out){
return (function() {
var cljs$core$async$state_machine__30636__auto__ = null;
var cljs$core$async$state_machine__30636__auto____0 = (function (){
var statearr_49632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49632[(0)] = cljs$core$async$state_machine__30636__auto__);

(statearr_49632[(1)] = (1));

return statearr_49632;
});
var cljs$core$async$state_machine__30636__auto____1 = (function (state_49609){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_49609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e49633){if((e49633 instanceof Object)){
var ex__30639__auto__ = e49633;
var statearr_49634_49652 = state_49609;
(statearr_49634_49652[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49653 = state_49609;
state_49609 = G__49653;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
cljs$core$async$state_machine__30636__auto__ = function(state_49609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30636__auto____1.call(this,state_49609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30636__auto____0;
cljs$core$async$state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30636__auto____1;
return cljs$core$async$state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___49637,out))
})();
var state__30794__auto__ = (function (){var statearr_49635 = f__30793__auto__.call(null);
(statearr_49635[(6)] = c__30792__auto___49637);

return statearr_49635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___49637,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557588325583
