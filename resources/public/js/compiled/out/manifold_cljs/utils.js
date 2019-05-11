// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.utils');
goog.require('cljs.core');
goog.require('manifold_cljs.impl.queue');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.impl.logging');
manifold_cljs.utils.integer_max_value = (9007199254740991);
manifold_cljs.utils.invoke_callbacks = (function manifold_cljs$utils$invoke_callbacks(callbacks){
return manifold_cljs.executor.execute_on_next_tick.call(null,(function (){
while(true){
var temp__5457__auto__ = manifold_cljs.impl.queue.poll.call(null,callbacks);
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
try{c.call(null);
}catch (e22336){if((e22336 instanceof Error)){
var e_22337 = e22336;
manifold_cljs.impl.logging.error.call(null,e_22337,"error in invoke-callbacks");
} else {
throw e22336;

}
}
continue;
} else {
return null;
}
break;
}
}));
});

//# sourceMappingURL=utils.js.map?rel=1557580544252