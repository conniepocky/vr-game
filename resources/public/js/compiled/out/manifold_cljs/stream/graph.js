// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.stream.graph');
goog.require('cljs.core');
goog.require('org.weakmap');
goog.require('manifold_cljs.deferred');
goog.require('manifold_cljs.utils');
goog.require('manifold_cljs.stream.core');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.impl.list');
goog.require('manifold_cljs.impl.queue');
goog.require('manifold_cljs.impl.logging');
manifold_cljs.stream.graph.handle__GT_downstreams = (new WeakMap());

/**
* @constructor
*/
manifold_cljs.stream.graph.Downstream = (function (timeout,upstream_QMARK_,downstream_QMARK_,sink,description){
this.timeout = timeout;
this.upstream_QMARK_ = upstream_QMARK_;
this.downstream_QMARK_ = downstream_QMARK_;
this.sink = sink;
this.description = description;
});

manifold_cljs.stream.graph.Downstream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"upstream?","upstream?",-1119953066,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream?","downstream?",1142951339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"sink","sink",1827367460,null),new cljs.core.Symbol(null,"description","description",211970983,null)], null);
});

manifold_cljs.stream.graph.Downstream.cljs$lang$type = true;

manifold_cljs.stream.graph.Downstream.cljs$lang$ctorStr = "manifold-cljs.stream.graph/Downstream";

manifold_cljs.stream.graph.Downstream.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.graph/Downstream");
});

/**
 * Positional factory function for manifold-cljs.stream.graph/Downstream.
 */
manifold_cljs.stream.graph.__GT_Downstream = (function manifold_cljs$stream$graph$__GT_Downstream(timeout,upstream_QMARK_,downstream_QMARK_,sink,description){
return (new manifold_cljs.stream.graph.Downstream(timeout,upstream_QMARK_,downstream_QMARK_,sink,description));
});


/**
* @constructor
*/
manifold_cljs.stream.graph.AsyncPut = (function (deferred,dsts,dst,upstream_QMARK_){
this.deferred = deferred;
this.dsts = dsts;
this.dst = dst;
this.upstream_QMARK_ = upstream_QMARK_;
});

manifold_cljs.stream.graph.AsyncPut.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"dsts","dsts",-637312784,null),new cljs.core.Symbol(null,"dst","dst",-1809752821,null),cljs.core.with_meta(new cljs.core.Symbol(null,"upstream?","upstream?",-1119953066,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
});

manifold_cljs.stream.graph.AsyncPut.cljs$lang$type = true;

manifold_cljs.stream.graph.AsyncPut.cljs$lang$ctorStr = "manifold-cljs.stream.graph/AsyncPut";

manifold_cljs.stream.graph.AsyncPut.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.stream.graph/AsyncPut");
});

/**
 * Positional factory function for manifold-cljs.stream.graph/AsyncPut.
 */
manifold_cljs.stream.graph.__GT_AsyncPut = (function manifold_cljs$stream$graph$__GT_AsyncPut(deferred,dsts,dst,upstream_QMARK_){
return (new manifold_cljs.stream.graph.AsyncPut(deferred,dsts,dst,upstream_QMARK_));
});

manifold_cljs.stream.graph.downstream = (function manifold_cljs$stream$graph$downstream(source){
var temp__5457__auto__ = manifold_cljs.stream.core.weak_handle.call(null,source);
if(cljs.core.truth_(temp__5457__auto__)){
var handle = temp__5457__auto__;
var temp__5457__auto____$1 = manifold_cljs.stream.graph.handle__GT_downstreams.get(handle);
if(cljs.core.truth_(temp__5457__auto____$1)){
var l = temp__5457__auto____$1;
return cljs.core.map.call(null,((function (l,temp__5457__auto____$1,handle,temp__5457__auto__){
return (function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.description,d.sink], null);
});})(l,temp__5457__auto____$1,handle,temp__5457__auto__))
,l);
} else {
return null;
}
} else {
return null;
}
});
manifold_cljs.stream.graph.async_send = (function manifold_cljs$stream$graph$async_send(d,msg,dsts){
var sink = d.sink;
var x = (((d.timeout === (-1)))?manifold_cljs.stream.core.put.call(null,sink,msg,false):manifold_cljs.stream.core.put.call(null,sink,msg,false,d.timeout,(cljs.core.truth_(d.downstream_QMARK_)?sink:false)));
return (new manifold_cljs.stream.graph.AsyncPut(x,dsts,d,d.upstream_QMARK_));
});
manifold_cljs.stream.graph.handle_async_put = (function manifold_cljs$stream$graph$handle_async_put(x,val,source){
var d = x.deferred;
var val__$1 = ((((!((val == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === val.manifold_cljs$stream$core$IEventSink$))))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,val):false)):cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,val)))?(function (){
manifold_cljs.stream.core.close_BANG_.call(null,val);

return false;
})()
:val);
if(val__$1 === false){
var l = x.dsts;
manifold_cljs.impl.list.remove.call(null,l,x.dst);

if(cljs.core.truth_((function (){var or__3922__auto__ = x.upstream_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((0) === manifold_cljs.impl.list.size.call(null,l));
}
})())){
manifold_cljs.stream.core.close_BANG_.call(null,source);

return manifold_cljs.stream.graph.handle__GT_downstreams.delete(manifold_cljs.stream.core.weak_handle.call(null,source));
} else {
return null;
}
} else {
return null;
}
});
manifold_cljs.stream.graph.handle_async_error = (function manifold_cljs$stream$graph$handle_async_error(x,err,source){
var G__22341_22342 = x.dst;
var G__22341_22343__$1 = (((G__22341_22342 == null))?null:G__22341_22342.sink);
if((G__22341_22343__$1 == null)){
} else {
manifold_cljs.stream.core.close_BANG_.call(null,G__22341_22343__$1);
}

manifold_cljs.impl.logging.error.call(null,err,"error in message propagation");

var l = x.dsts;
manifold_cljs.impl.list.remove.call(null,l,x.dst);

if(cljs.core.truth_((function (){var or__3922__auto__ = x.upstream_QMARK_();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((0) === manifold_cljs.impl.list.size.call(null,l));
}
})())){
manifold_cljs.stream.core.close_BANG_.call(null,source);

return manifold_cljs.stream.graph.handle__GT_downstreams.delete(manifold_cljs.stream.core.weak_handle.call(null,source));
} else {
return null;
}
});
manifold_cljs.stream.graph.async_connect = (function manifold_cljs$stream$graph$async_connect(source,dsts){
var sync_sinks = manifold_cljs.impl.queue.queue.call(null);
var deferreds = manifold_cljs.impl.queue.queue.call(null);
var sync_propagate = ((function (sync_sinks,deferreds){
return (function manifold_cljs$stream$graph$async_connect_$_this(recur_point,msg){
while(true){
var d = manifold_cljs.impl.queue.poll.call(null,sync_sinks);
if((d == null)){
return recur_point;
} else {
var x = manifold_cljs.stream.graph.async_send.call(null,d,msg,dsts);
var d__$1 = x.deferred;
var val = manifold_cljs.deferred.success_value.call(null,d__$1,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883));
if(cljs.core.keyword_identical_QMARK_.call(null,val,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883))){
return manifold_cljs.deferred.on_realized.call(null,d__$1,((function (x,d__$1,val,d,sync_sinks,deferreds){
return (function (v){
manifold_cljs.stream.graph.handle_async_put.call(null,x,v,source);

return cljs.core.trampoline.call(null,((function (x,d__$1,val,d,sync_sinks,deferreds){
return (function (){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,recur_point,msg);
});})(x,d__$1,val,d,sync_sinks,deferreds))
);
});})(x,d__$1,val,d,sync_sinks,deferreds))
,((function (x,d__$1,val,d,sync_sinks,deferreds){
return (function (e){
manifold_cljs.stream.graph.handle_async_error.call(null,x,e,source);

return cljs.core.trampoline.call(null,((function (x,d__$1,val,d,sync_sinks,deferreds){
return (function (){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,recur_point,msg);
});})(x,d__$1,val,d,sync_sinks,deferreds))
);
});})(x,d__$1,val,d,sync_sinks,deferreds))
);
} else {
manifold_cljs.stream.graph.handle_async_put.call(null,x,val,source);

continue;
}
}
break;
}
});})(sync_sinks,deferreds))
;
var async_propagate = ((function (sync_sinks,deferreds,sync_propagate){
return (function manifold_cljs$stream$graph$async_connect_$_this(recur_point,msg){
while(true){
var x = manifold_cljs.impl.queue.poll.call(null,deferreds);
if((x == null)){
if(cljs.core.truth_(manifold_cljs.impl.queue.empty_QMARK_.call(null,sync_sinks))){
return recur_point;
} else {
return ((function (x,sync_sinks,deferreds,sync_propagate){
return (function (){
return sync_propagate.call(null,recur_point,msg);
});
;})(x,sync_sinks,deferreds,sync_propagate))
}
} else {
var d = x.deferred;
var val = manifold_cljs.deferred.success_value.call(null,d,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883));
if(cljs.core.keyword_identical_QMARK_.call(null,val,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883))){
return manifold_cljs.deferred.on_realized.call(null,d,((function (d,val,x,sync_sinks,deferreds,sync_propagate){
return (function (val__$1){
manifold_cljs.stream.graph.handle_async_put.call(null,x,val__$1,source);

return cljs.core.trampoline.call(null,((function (d,val,x,sync_sinks,deferreds,sync_propagate){
return (function (){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,recur_point,msg);
});})(d,val,x,sync_sinks,deferreds,sync_propagate))
);
});})(d,val,x,sync_sinks,deferreds,sync_propagate))
,((function (d,val,x,sync_sinks,deferreds,sync_propagate){
return (function (e){
manifold_cljs.stream.graph.handle_async_error.call(null,x,e,source);

return cljs.core.trampoline.call(null,((function (d,val,x,sync_sinks,deferreds,sync_propagate){
return (function (){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,recur_point,msg);
});})(d,val,x,sync_sinks,deferreds,sync_propagate))
);
});})(d,val,x,sync_sinks,deferreds,sync_propagate))
);
} else {
manifold_cljs.stream.graph.handle_async_put.call(null,x,val,source);

continue;
}
}
break;
}
});})(sync_sinks,deferreds,sync_propagate))
;
var err_callback = ((function (sync_sinks,deferreds,sync_propagate,async_propagate){
return (function (err){
manifold_cljs.impl.logging.error.call(null,err,"error in source of 'connect'");

return manifold_cljs.stream.graph.handle__GT_downstreams.delete(manifold_cljs.stream.core.weak_handle.call(null,source));
});})(sync_sinks,deferreds,sync_propagate,async_propagate))
;
return cljs.core.trampoline.call(null,((function (sync_sinks,deferreds,sync_propagate,async_propagate,err_callback){
return (function() {
var manifold_cljs$stream$graph$async_connect_$_this = null;
var manifold_cljs$stream$graph$async_connect_$_this__0 = (function (){
var d = manifold_cljs.stream.core.take.call(null,source,new cljs.core.Keyword("manifold-cljs.stream.graph","drained","manifold-cljs.stream.graph/drained",-33095479),false);
if(cljs.core.truth_(manifold_cljs.deferred.realized_QMARK_.call(null,d))){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,cljs.core.deref.call(null,d));
} else {
return manifold_cljs.deferred.on_realized.call(null,d,((function (d,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback){
return (function (msg){
return cljs.core.trampoline.call(null,((function (d,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback){
return (function (){
return manifold_cljs$stream$graph$async_connect_$_this.call(null,msg);
});})(d,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback))
);
});})(d,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback))
,err_callback);
}
});
var manifold_cljs$stream$graph$async_connect_$_this__1 = (function (msg){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream.graph","drained","manifold-cljs.stream.graph/drained",-33095479),msg)){
manifold_cljs.stream.graph.handle__GT_downstreams.delete(manifold_cljs.stream.core.weak_handle.call(null,source));

var seq__22344 = cljs.core.seq.call(null,dsts);
var chunk__22345 = null;
var count__22346 = (0);
var i__22347 = (0);
while(true){
if((i__22347 < count__22346)){
var d = cljs.core._nth.call(null,chunk__22345,i__22347);
if(cljs.core.truth_(d.downstream_QMARK_)){
manifold_cljs.stream.core.close_BANG_.call(null,d.sink);
} else {
}


var G__22352 = seq__22344;
var G__22353 = chunk__22345;
var G__22354 = count__22346;
var G__22355 = (i__22347 + (1));
seq__22344 = G__22352;
chunk__22345 = G__22353;
count__22346 = G__22354;
i__22347 = G__22355;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22344);
if(temp__5457__auto__){
var seq__22344__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22344__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22344__$1);
var G__22356 = cljs.core.chunk_rest.call(null,seq__22344__$1);
var G__22357 = c__4319__auto__;
var G__22358 = cljs.core.count.call(null,c__4319__auto__);
var G__22359 = (0);
seq__22344 = G__22356;
chunk__22345 = G__22357;
count__22346 = G__22358;
i__22347 = G__22359;
continue;
} else {
var d = cljs.core.first.call(null,seq__22344__$1);
if(cljs.core.truth_(d.downstream_QMARK_)){
manifold_cljs.stream.core.close_BANG_.call(null,d.sink);
} else {
}


var G__22360 = cljs.core.next.call(null,seq__22344__$1);
var G__22361 = null;
var G__22362 = (0);
var G__22363 = (0);
seq__22344 = G__22360;
chunk__22345 = G__22361;
count__22346 = G__22362;
i__22347 = G__22363;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(((1) === manifold_cljs.impl.list.size.call(null,dsts))){
var dst = cljs.core.first.call(null,dsts);
var x = manifold_cljs.stream.graph.async_send.call(null,dst,msg,dsts);
var d = x.deferred;
var val = manifold_cljs.deferred.success_value.call(null,d,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.stream.graph","none","manifold-cljs.stream.graph/none",1605406883),val)){
return manifold_cljs.deferred.on_realized.call(null,d,((function (dst,x,d,val,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback){
return (function (val__$1){
manifold_cljs.stream.graph.handle_async_put.call(null,x,val__$1,source);

return cljs.core.trampoline.call(null,manifold_cljs$stream$graph$async_connect_$_this);
});})(dst,x,d,val,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback))
,((function (dst,x,d,val,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback){
return (function (e){
manifold_cljs.stream.graph.handle_async_error.call(null,x,e,source);

return cljs.core.trampoline.call(null,manifold_cljs$stream$graph$async_connect_$_this);
});})(dst,x,d,val,sync_sinks,deferreds,sync_propagate,async_propagate,err_callback))
);
} else {
manifold_cljs.stream.graph.handle_async_put.call(null,x,val,source);

return manifold_cljs$stream$graph$async_connect_$_this;
}
} else {
if(cljs.core.empty_QMARK_.call(null,dsts)){
manifold_cljs.stream.core.close_BANG_.call(null,source);

return manifold_cljs.stream.graph.handle__GT_downstreams.delete(manifold_cljs.stream.core.weak_handle.call(null,source));
} else {
var seq__22348_22364 = cljs.core.seq.call(null,dsts);
var chunk__22349_22365 = null;
var count__22350_22366 = (0);
var i__22351_22367 = (0);
while(true){
if((i__22351_22367 < count__22350_22366)){
var d_22368 = cljs.core._nth.call(null,chunk__22349_22365,i__22351_22367);
if(cljs.core.truth_(manifold_cljs.stream.core.synchronous_QMARK_.call(null,d_22368.sink))){
manifold_cljs.impl.list.add.call(null,sync_sinks,d_22368);
} else {
manifold_cljs.impl.list.add.call(null,deferreds,manifold_cljs.stream.graph.async_send.call(null,d_22368,msg,dsts));
}


var G__22369 = seq__22348_22364;
var G__22370 = chunk__22349_22365;
var G__22371 = count__22350_22366;
var G__22372 = (i__22351_22367 + (1));
seq__22348_22364 = G__22369;
chunk__22349_22365 = G__22370;
count__22350_22366 = G__22371;
i__22351_22367 = G__22372;
continue;
} else {
var temp__5457__auto___22373 = cljs.core.seq.call(null,seq__22348_22364);
if(temp__5457__auto___22373){
var seq__22348_22374__$1 = temp__5457__auto___22373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22348_22374__$1)){
var c__4319__auto___22375 = cljs.core.chunk_first.call(null,seq__22348_22374__$1);
var G__22376 = cljs.core.chunk_rest.call(null,seq__22348_22374__$1);
var G__22377 = c__4319__auto___22375;
var G__22378 = cljs.core.count.call(null,c__4319__auto___22375);
var G__22379 = (0);
seq__22348_22364 = G__22376;
chunk__22349_22365 = G__22377;
count__22350_22366 = G__22378;
i__22351_22367 = G__22379;
continue;
} else {
var d_22380 = cljs.core.first.call(null,seq__22348_22374__$1);
if(cljs.core.truth_(manifold_cljs.stream.core.synchronous_QMARK_.call(null,d_22380.sink))){
manifold_cljs.impl.list.add.call(null,sync_sinks,d_22380);
} else {
manifold_cljs.impl.list.add.call(null,deferreds,manifold_cljs.stream.graph.async_send.call(null,d_22380,msg,dsts));
}


var G__22381 = cljs.core.next.call(null,seq__22348_22374__$1);
var G__22382 = null;
var G__22383 = (0);
var G__22384 = (0);
seq__22348_22364 = G__22381;
chunk__22349_22365 = G__22382;
count__22350_22366 = G__22383;
i__22351_22367 = G__22384;
continue;
}
} else {
}
}
break;
}

return async_propagate.call(null,manifold_cljs$stream$graph$async_connect_$_this,msg);
}

}
}
});
manifold_cljs$stream$graph$async_connect_$_this = function(msg){
switch(arguments.length){
case 0:
return manifold_cljs$stream$graph$async_connect_$_this__0.call(this);
case 1:
return manifold_cljs$stream$graph$async_connect_$_this__1.call(this,msg);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
manifold_cljs$stream$graph$async_connect_$_this.cljs$core$IFn$_invoke$arity$0 = manifold_cljs$stream$graph$async_connect_$_this__0;
manifold_cljs$stream$graph$async_connect_$_this.cljs$core$IFn$_invoke$arity$1 = manifold_cljs$stream$graph$async_connect_$_this__1;
return manifold_cljs$stream$graph$async_connect_$_this;
})()
;})(sync_sinks,deferreds,sync_propagate,async_propagate,err_callback))
);
});
manifold_cljs.stream.graph.connect = (function manifold_cljs$stream$graph$connect(src,dst,p__22385){
var map__22386 = p__22385;
var map__22386__$1 = ((((!((map__22386 == null)))?(((((map__22386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22386):map__22386);
var opts = map__22386__$1;
var upstream_QMARK_ = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"upstream?","upstream?",1534482703),false);
var downstream_QMARK_ = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"downstream?","downstream?",-497580188),true);
var timeout = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(-1));
var description = cljs.core.get.call(null,map__22386__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var d = (new manifold_cljs.stream.graph.Downstream(timeout,cljs.core.boolean$.call(null,(function (){var and__3911__auto__ = upstream_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
if(!((src == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === src.manifold_cljs$stream$core$IEventSink$)))){
return true;
} else {
if((!src.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,src);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.stream.core.IEventSink,src);
}
} else {
return and__3911__auto__;
}
})()),downstream_QMARK_,dst,description));
var k = manifold_cljs.stream.core.weakHandle.call(null,src,null);
var temp__5455__auto__ = manifold_cljs.stream.graph.handle__GT_downstreams.get(k);
if(cljs.core.truth_(temp__5455__auto__)){
var dsts = temp__5455__auto__;
return manifold_cljs.impl.list.add.call(null,dsts,d);
} else {
var dsts = manifold_cljs.impl.list.list.call(null);
manifold_cljs.stream.graph.handle__GT_downstreams.set(k,dsts);

manifold_cljs.impl.list.add.call(null,dsts,d);

if(cljs.core.truth_(manifold_cljs.stream.core.synchronous_QMARK_.call(null,src))){
throw (new Error("Cannot connect to a synchronous source!"));
} else {
return manifold_cljs.stream.graph.async_connect.call(null,src,dsts);
}
}
});

//# sourceMappingURL=graph.js.map?rel=1557580544387
