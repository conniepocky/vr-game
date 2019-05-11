// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.impl.list');
goog.require('cljs.core');
manifold_cljs.impl.list.list = (function manifold_cljs$impl$list$list(){
return [];
});
manifold_cljs.impl.list.remove = (function manifold_cljs$impl$list$remove(l,item){
var s = l.length;
var idx = (0);
while(true){
if((idx < s)){
if((item === (l[idx]))){
l.splice(idx,(1));
} else {
}

var G__21801 = (idx + (1));
idx = G__21801;
continue;
} else {
return null;
}
break;
}
});
manifold_cljs.impl.list.size = (function manifold_cljs$impl$list$size(l){
return l.length;
});
manifold_cljs.impl.list.add = (function manifold_cljs$impl$list$add(l,item){
return l.push(item);
});

//# sourceMappingURL=list.js.map?rel=1557580542593
