// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.impl.queue');
goog.require('cljs.core');
manifold_cljs.impl.queue.queue = (function manifold_cljs$impl$queue$queue(){
return [];
});
manifold_cljs.impl.queue.offer = (function manifold_cljs$impl$queue$offer(q,e){
return q.push(e);
});
manifold_cljs.impl.queue.poll = (function manifold_cljs$impl$queue$poll(q){
return q.shift();
});
manifold_cljs.impl.queue.pop = (function manifold_cljs$impl$queue$pop(q){
return q.pop();
});
manifold_cljs.impl.queue.size = (function manifold_cljs$impl$queue$size(q){
return cljs.core.count.call(null,q);
});
manifold_cljs.impl.queue.empty_QMARK_ = (function manifold_cljs$impl$queue$empty_QMARK_(q){
return (cljs.core.count.call(null,q) === (0));
});

//# sourceMappingURL=queue.js.map?rel=1557580542553
