// Compiled by ClojureScript 1.10.238 {}
goog.provide('manifold_cljs.deferred');
goog.require('cljs.core');
goog.require('manifold_cljs.deferred.default_impl');
goog.require('manifold_cljs.deferred.core');
goog.require('manifold_cljs.executor');
goog.require('manifold_cljs.time');

/**
 * @interface
 */
manifold_cljs.deferred.Deferrable = function(){};

/**
 * Provides a conversion mechanism to manifold deferreds.
 */
manifold_cljs.deferred.to_deferred = (function manifold_cljs$deferred$to_deferred(_){
if(((!((_ == null))) && (!((_.manifold_cljs$deferred$Deferrable$to_deferred$arity$1 == null))))){
return _.manifold_cljs$deferred$Deferrable$to_deferred$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (manifold_cljs.deferred.to_deferred[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (manifold_cljs.deferred.to_deferred["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Deferrable.to-deferred",_);
}
}
}
});

/**
 * Returns true if the manifold deferred is realized.
 */
manifold_cljs.deferred.realized_QMARK_ = (function manifold_cljs$deferred$realized_QMARK_(x){
return manifold_cljs.deferred.core.realized.call(null,x);
});
manifold_cljs.deferred.success_value = (function manifold_cljs$deferred$success_value(x,default_value){
return manifold_cljs.deferred.core.successValue.call(null,x,default_value);
});
manifold_cljs.deferred.error_value = (function manifold_cljs$deferred$error_value(x,default_value){
return manifold_cljs.deferred.core.errorValue.call(null,x,default_value);
});
/**
 * Registers callbacks with the manifold deferred for both success and error outcomes.
 */
manifold_cljs.deferred.on_realized = (function manifold_cljs$deferred$on_realized(x,on_success,on_error){
manifold_cljs.deferred.core.onRealized.call(null,x,on_success,on_error);

return x;
});
/**
 * Returns true if the object is an instance of a Manifold deferred.
 */
manifold_cljs.deferred.deferred_QMARK_ = (function manifold_cljs$deferred$deferred_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$deferred$core$IDeferred$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.deferred.core.IDeferred,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.deferred.core.IDeferred,x);
}
});
manifold_cljs.deferred.satisfies_deferrable_QMARK_ = (function manifold_cljs$deferred$satisfies_deferrable_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.manifold_cljs$deferred$Deferrable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.deferred.Deferrable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,manifold_cljs.deferred.Deferrable,x);
}
});
/**
 * Returns true if the object can be coerced to a Manifold deferred.
 */
manifold_cljs.deferred.deferrable_QMARK_ = (function manifold_cljs$deferred$deferrable_QMARK_(x){
var or__3922__auto__ = manifold_cljs.deferred.deferred_QMARK_.call(null,x);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.satisfies_deferrable_QMARK_.call(null,x);
}
});
/**
 * Transforms `x` into a deferred if possible, or returns `default-val`.  If no default value
 * is given, an `IllegalArgumentException` is thrown.
 */
manifold_cljs.deferred.__GT_deferred = (function manifold_cljs$deferred$__GT_deferred(var_args){
var G__22111 = arguments.length;
switch (G__22111) {
case 1:
return manifold_cljs.deferred.__GT_deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.__GT_deferred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.__GT_deferred.cljs$core$IFn$_invoke$arity$1 = (function (x){
var x_SINGLEQUOTE_ = manifold_cljs.deferred.__GT_deferred.call(null,x,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),x_SINGLEQUOTE_)){
throw cljs.core.ex_info.call(null,["cannot convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," to deferred."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return x_SINGLEQUOTE_;
}
});

manifold_cljs.deferred.__GT_deferred.cljs$core$IFn$_invoke$arity$2 = (function (x,default_val){
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(manifold_cljs.deferred.satisfies_deferrable_QMARK_.call(null,x))){
return manifold_cljs.deferred.to_deferred.call(null,x);
} else {
return default_val;

}
}
});

manifold_cljs.deferred.__GT_deferred.cljs$lang$maxFixedArity = 2;

/**
 * Creates a listener which can be registered or cancelled via
 *          `add-listener!` and `cancel-listener!`.
 */
manifold_cljs.deferred.listener = manifold_cljs.deferred.core.listener;
/**
 * Equivalent to `deliver`, but allows a `claim-token` to be passed in.
 */
manifold_cljs.deferred.success_BANG_ = (function manifold_cljs$deferred$success_BANG_(var_args){
var G__22114 = arguments.length;
switch (G__22114) {
case 2:
return manifold_cljs.deferred.success_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.success_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.success_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (deferred,x){
return manifold_cljs.deferred.core.success.call(null,deferred,x);
});

manifold_cljs.deferred.success_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (deferred,x,claim_token){
return manifold_cljs.deferred.core.success.call(null,deferred,x,claim_token);
});

manifold_cljs.deferred.success_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Puts the deferred into an error state.
 */
manifold_cljs.deferred.error_BANG_ = (function manifold_cljs$deferred$error_BANG_(var_args){
var G__22117 = arguments.length;
switch (G__22117) {
case 2:
return manifold_cljs.deferred.error_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.error_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.error_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (deferred,x){
return manifold_cljs.deferred.core.error.call(null,deferred,x);
});

manifold_cljs.deferred.error_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (deferred,x,claim_token){
return manifold_cljs.deferred.core.error.call(null,deferred,x,claim_token);
});

manifold_cljs.deferred.error_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Attempts to claim the deferred for future updates.  If successful, a claim token is returned, otherwise returns `nil`.
 */
manifold_cljs.deferred.claim_BANG_ = (function manifold_cljs$deferred$claim_BANG_(deferred){
return manifold_cljs.deferred.core.claim.call(null,deferred);
});
/**
 * Registers a listener which can be cancelled via `cancel-listener!`.  Unless this is useful, prefer `on-realized`.
 */
manifold_cljs.deferred.add_listener_BANG_ = (function manifold_cljs$deferred$add_listener_BANG_(deferred,listener){
return manifold_cljs.deferred.core.addListener.call(null,deferred,listener);
});
/**
 * Cancels a listener which has been registered via `add-listener!`.
 */
manifold_cljs.deferred.cancel_listener_BANG_ = (function manifold_cljs$deferred$cancel_listener_BANG_(deferred,listener){
return manifold_cljs.deferred.core.cancelListener.call(null,deferred,listener);
});
/**
 * Equivalent to Clojure's `promise`, but also allows asynchronous callbacks to be registered
 *   and composed via `chain`.
 */
manifold_cljs.deferred.deferred = (function manifold_cljs$deferred$deferred(var_args){
var G__22120 = arguments.length;
switch (G__22120) {
case 0:
return manifold_cljs.deferred.deferred.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return manifold_cljs.deferred.deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.deferred.cljs$core$IFn$_invoke$arity$0 = (function (){
return manifold_cljs.deferred.deferred.call(null,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.deferred.deferred.cljs$core$IFn$_invoke$arity$1 = (function (executor){
return manifold_cljs.deferred.default_impl.deferred.call(null,executor);
});

manifold_cljs.deferred.deferred.cljs$lang$maxFixedArity = 1;

/**
 * A deferred which already contains a realized value
 */
manifold_cljs.deferred.success_deferred = (function manifold_cljs$deferred$success_deferred(var_args){
var G__22123 = arguments.length;
switch (G__22123) {
case 1:
return manifold_cljs.deferred.success_deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.success_deferred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.success_deferred.cljs$core$IFn$_invoke$arity$1 = (function (val){
return manifold_cljs.deferred.success_deferred.call(null,val,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.deferred.success_deferred.cljs$core$IFn$_invoke$arity$2 = (function (val,executor){
return manifold_cljs.deferred.default_impl.success_deferred.call(null,val,executor);
});

manifold_cljs.deferred.success_deferred.cljs$lang$maxFixedArity = 2;

/**
 * A deferred which already contains a realized error
 */
manifold_cljs.deferred.error_deferred = (function manifold_cljs$deferred$error_deferred(var_args){
var G__22126 = arguments.length;
switch (G__22126) {
case 1:
return manifold_cljs.deferred.error_deferred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.error_deferred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.error_deferred.cljs$core$IFn$_invoke$arity$1 = (function (error){
return manifold_cljs.deferred.error_deferred.call(null,error,manifold_cljs.executor.executor.call(null));
});

manifold_cljs.deferred.error_deferred.cljs$core$IFn$_invoke$arity$2 = (function (error,executor){
return manifold_cljs.deferred.default_impl.error_deferred.call(null,error,executor);
});

manifold_cljs.deferred.error_deferred.cljs$lang$maxFixedArity = 2;

manifold_cljs.deferred.unwrap_SINGLEQUOTE_ = (function manifold_cljs$deferred$unwrap_SINGLEQUOTE_(x){
while(true){
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x))){
var val = manifold_cljs.deferred.success_value.call(null,x,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,val,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452))){
return x;
} else {
var G__22128 = val;
x = G__22128;
continue;
}
} else {
return x;
}
break;
}
});
manifold_cljs.deferred.unwrap = (function manifold_cljs$deferred$unwrap(x){
while(true){
var d = manifold_cljs.deferred.__GT_deferred.call(null,x,null);
if((d == null)){
return x;
} else {
var val = manifold_cljs.deferred.success_value.call(null,d,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val)){
return d;
} else {
var G__22129 = val;
x = G__22129;
continue;
}
}
break;
}
});
/**
 * Conveys the realized value of `a` into `b`.
 */
manifold_cljs.deferred.connect = (function manifold_cljs$deferred$connect(a,b){
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,b))){
} else {
throw (new Error(["Assert failed: ","sink `b` must be a Manifold deferred","\n","(deferred? b)"].join('')));
}

var a__$1 = manifold_cljs.deferred.unwrap.call(null,a);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,a__$1))){
if(cljs.core.truth_(manifold_cljs.deferred.realized_QMARK_.call(null,b))){
return false;
} else {
manifold_cljs.deferred.on_realized.call(null,a__$1,((function (a__$1){
return (function (p1__22130_SHARP_){
var a_SINGLEQUOTE_ = manifold_cljs.deferred.unwrap.call(null,p1__22130_SHARP_);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,a_SINGLEQUOTE_))){
return manifold_cljs.deferred.connect.call(null,a_SINGLEQUOTE_,b);
} else {
return manifold_cljs.deferred.success_BANG_.call(null,b,a_SINGLEQUOTE_);
}
});})(a__$1))
,((function (a__$1){
return (function (p1__22131_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,b,p1__22131_SHARP_);
});})(a__$1))
);

return true;
}
} else {
return manifold_cljs.deferred.success_BANG_.call(null,b,a__$1);
}
});
manifold_cljs.deferred.chain_SINGLEQUOTE__ = (function manifold_cljs$deferred$chain_SINGLEQUOTE__(var_args){
var G__22143 = arguments.length;
switch (G__22143) {
case 2:
return manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22150 = arguments.length;
var i__4500__auto___22151 = (0);
while(true){
if((i__4500__auto___22151 < len__4499__auto___22150)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22151]));

var G__22152 = (i__4500__auto___22151 + (1));
i__4500__auto___22151 = G__22152;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$2 = (function (d,x){
try{var x_SINGLEQUOTE_ = manifold_cljs.deferred.unwrap_SINGLEQUOTE_.call(null,x);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_SINGLEQUOTE_))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
manifold_cljs.deferred.on_realized.call(null,x_SINGLEQUOTE_,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22132_SHARP_){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,d__$1,p1__22132_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22133_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22133_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
);

return d__$1;
} else {
if((d == null)){
return manifold_cljs.deferred.success_deferred.call(null,x_SINGLEQUOTE_);
} else {
return manifold_cljs.deferred.success_BANG_.call(null,d,x_SINGLEQUOTE_);
}
}
}catch (e22144){if((e22144 instanceof Error)){
var e = e22144;
if((d == null)){
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,d,e);
}
} else {
throw e22144;

}
}});

manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$3 = (function (d,x,f){
try{var x_SINGLEQUOTE_ = manifold_cljs.deferred.unwrap_SINGLEQUOTE_.call(null,x);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_SINGLEQUOTE_))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
manifold_cljs.deferred.on_realized.call(null,x_SINGLEQUOTE_,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22134_SHARP_){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,d__$1,p1__22134_SHARP_,f);
});})(d__$1,x_SINGLEQUOTE_))
,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22135_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22135_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
);

return d__$1;
} else {
var x_SINGLEQUOTE__SINGLEQUOTE_ = f.call(null,x_SINGLEQUOTE_);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_SINGLEQUOTE__SINGLEQUOTE_))){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,d,x_SINGLEQUOTE__SINGLEQUOTE_);
} else {
if((d == null)){
return manifold_cljs.deferred.success_deferred.call(null,x_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return manifold_cljs.deferred.success_BANG_.call(null,d,x_SINGLEQUOTE__SINGLEQUOTE_);
}
}
}
}catch (e22145){if((e22145 instanceof Error)){
var e = e22145;
if((d == null)){
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,d,e);
}
} else {
throw e22145;

}
}});

manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$core$IFn$_invoke$arity$variadic = (function (d,x,f,fs){
if((((d == null)) || (cljs.core.not.call(null,manifold_cljs.deferred.realized_QMARK_.call(null,d))))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
var x_22153__$1 = x;
var fs_22154__$1 = cljs.core.list_STAR_.call(null,f,fs);
while(true){
if(cljs.core.empty_QMARK_.call(null,fs_22154__$1)){
manifold_cljs.deferred.success_BANG_.call(null,d__$1,x_22153__$1);
} else {
var vec__22146_22155 = fs_22154__$1;
var seq__22147_22156 = cljs.core.seq.call(null,vec__22146_22155);
var first__22148_22157 = cljs.core.first.call(null,seq__22147_22156);
var seq__22147_22158__$1 = cljs.core.next.call(null,seq__22147_22156);
var f_22159__$1 = first__22148_22157;
var fs_22160__$2 = seq__22147_22158__$1;
var d_SINGLEQUOTE__22161 = manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,null,x_22153__$1,f_22159__$1);
var d__22079__auto___22162 = d_SINGLEQUOTE__22161;
var val_22163 = manifold_cljs.deferred.success_value.call(null,d__22079__auto___22162,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val_22163)){
var err_22164 = manifold_cljs.deferred.error_value.call(null,d__22079__auto___22162,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err_22164)){
manifold_cljs.deferred.on_realized.call(null,d_SINGLEQUOTE__22161,((function (x_22153__$1,fs_22154__$1,err_22164,d__22079__auto___22162,val_22163,vec__22146_22155,seq__22147_22156,first__22148_22157,seq__22147_22158__$1,f_22159__$1,fs_22160__$2,d_SINGLEQUOTE__22161,d__$1){
return (function (p1__22136_SHARP_){
return cljs.core.apply.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE__,d__$1,p1__22136_SHARP_,fs_22160__$2);
});})(x_22153__$1,fs_22154__$1,err_22164,d__22079__auto___22162,val_22163,vec__22146_22155,seq__22147_22156,first__22148_22157,seq__22147_22158__$1,f_22159__$1,fs_22160__$2,d_SINGLEQUOTE__22161,d__$1))
,((function (x_22153__$1,fs_22154__$1,err_22164,d__22079__auto___22162,val_22163,vec__22146_22155,seq__22147_22156,first__22148_22157,seq__22147_22158__$1,f_22159__$1,fs_22160__$2,d_SINGLEQUOTE__22161,d__$1){
return (function (p1__22137_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22137_SHARP_);
});})(x_22153__$1,fs_22154__$1,err_22164,d__22079__auto___22162,val_22163,vec__22146_22155,seq__22147_22156,first__22148_22157,seq__22147_22158__$1,f_22159__$1,fs_22160__$2,d_SINGLEQUOTE__22161,d__$1))
);
} else {
manifold_cljs.deferred.error_BANG_.call(null,d__$1,err_22164);
}
} else {
var G__22165 = val_22163;
var G__22166 = fs_22160__$2;
x_22153__$1 = G__22165;
fs_22154__$1 = G__22166;
continue;
}
}
break;
}

return d__$1;
} else {
return null;
}
});

/** @this {Function} */
manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$lang$applyTo = (function (seq22139){
var G__22140 = cljs.core.first.call(null,seq22139);
var seq22139__$1 = cljs.core.next.call(null,seq22139);
var G__22141 = cljs.core.first.call(null,seq22139__$1);
var seq22139__$2 = cljs.core.next.call(null,seq22139__$1);
var G__22142 = cljs.core.first.call(null,seq22139__$2);
var seq22139__$3 = cljs.core.next.call(null,seq22139__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22140,G__22141,G__22142,seq22139__$3);
});

manifold_cljs.deferred.chain_SINGLEQUOTE__.cljs$lang$maxFixedArity = (3);

manifold_cljs.deferred.chain_ = (function manifold_cljs$deferred$chain_(var_args){
var G__22178 = arguments.length;
switch (G__22178) {
case 2:
return manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22184 = arguments.length;
var i__4500__auto___22185 = (0);
while(true){
if((i__4500__auto___22185 < len__4499__auto___22184)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22185]));

var G__22186 = (i__4500__auto___22185 + (1));
i__4500__auto___22185 = G__22186;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$2 = (function (d,x){
var x_SINGLEQUOTE_ = manifold_cljs.deferred.unwrap.call(null,x);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_SINGLEQUOTE_))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
manifold_cljs.deferred.on_realized.call(null,x_SINGLEQUOTE_,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22167_SHARP_){
return manifold_cljs.deferred.chain_.call(null,d__$1,p1__22167_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22168_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22168_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
);

return d__$1;
} else {
if((d == null)){
return manifold_cljs.deferred.success_deferred.call(null,x_SINGLEQUOTE_);
} else {
return manifold_cljs.deferred.success_BANG_.call(null,d,x_SINGLEQUOTE_);
}
}
});

manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$3 = (function (d,x,f){
if((((d == null)) || (cljs.core.not.call(null,manifold_cljs.deferred.realized_QMARK_.call(null,d))))){
try{var x_SINGLEQUOTE_ = manifold_cljs.deferred.unwrap.call(null,x);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_SINGLEQUOTE_))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
manifold_cljs.deferred.on_realized.call(null,x_SINGLEQUOTE_,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22169_SHARP_){
return manifold_cljs.deferred.chain_.call(null,d__$1,p1__22169_SHARP_,f);
});})(d__$1,x_SINGLEQUOTE_))
,((function (d__$1,x_SINGLEQUOTE_){
return (function (p1__22170_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22170_SHARP_);
});})(d__$1,x_SINGLEQUOTE_))
);

return d__$1;
} else {
var x_SINGLEQUOTE__SINGLEQUOTE_ = f.call(null,x_SINGLEQUOTE_);
if(cljs.core.truth_(manifold_cljs.deferred.deferrable_QMARK_.call(null,x_SINGLEQUOTE__SINGLEQUOTE_))){
return manifold_cljs.deferred.chain_.call(null,d,x_SINGLEQUOTE__SINGLEQUOTE_);
} else {
if((d == null)){
return manifold_cljs.deferred.success_deferred.call(null,x_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return manifold_cljs.deferred.success_BANG_.call(null,d,x_SINGLEQUOTE__SINGLEQUOTE_);
}
}
}
}catch (e22179){if((e22179 instanceof Error)){
var e = e22179;
if((d == null)){
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
return manifold_cljs.deferred.error_BANG_.call(null,d,e);
}
} else {
throw e22179;

}
}} else {
return d;
}
});

manifold_cljs.deferred.chain_.cljs$core$IFn$_invoke$arity$variadic = (function (d,x,f,fs){
if((((d == null)) || (cljs.core.not.call(null,manifold_cljs.deferred.realized_QMARK_.call(null,d))))){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
var x_22187__$1 = x;
var fs_22188__$1 = cljs.core.list_STAR_.call(null,f,fs);
while(true){
if(cljs.core.empty_QMARK_.call(null,fs_22188__$1)){
manifold_cljs.deferred.success_BANG_.call(null,d__$1,x_22187__$1);
} else {
var vec__22180_22189 = fs_22188__$1;
var seq__22181_22190 = cljs.core.seq.call(null,vec__22180_22189);
var first__22182_22191 = cljs.core.first.call(null,seq__22181_22190);
var seq__22181_22192__$1 = cljs.core.next.call(null,seq__22181_22190);
var f_22193__$1 = first__22182_22191;
var fs_22194__$2 = seq__22181_22192__$1;
var d_SINGLEQUOTE__22195 = manifold_cljs.deferred.deferred.call(null);
var __22196 = manifold_cljs.deferred.chain_.call(null,d_SINGLEQUOTE__22195,x_22187__$1,f_22193__$1);
var d__22079__auto___22197 = d__$1;
var val_22198 = manifold_cljs.deferred.success_value.call(null,d__22079__auto___22197,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val_22198)){
var err_22199 = manifold_cljs.deferred.error_value.call(null,d__22079__auto___22197,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err_22199)){
manifold_cljs.deferred.on_realized.call(null,d_SINGLEQUOTE__22195,((function (x_22187__$1,fs_22188__$1,err_22199,d__22079__auto___22197,val_22198,vec__22180_22189,seq__22181_22190,first__22182_22191,seq__22181_22192__$1,f_22193__$1,fs_22194__$2,d_SINGLEQUOTE__22195,__22196,d__$1){
return (function (p1__22171_SHARP_){
return cljs.core.apply.call(null,manifold_cljs.deferred.chain_,d__$1,p1__22171_SHARP_,fs_22194__$2);
});})(x_22187__$1,fs_22188__$1,err_22199,d__22079__auto___22197,val_22198,vec__22180_22189,seq__22181_22190,first__22182_22191,seq__22181_22192__$1,f_22193__$1,fs_22194__$2,d_SINGLEQUOTE__22195,__22196,d__$1))
,((function (x_22187__$1,fs_22188__$1,err_22199,d__22079__auto___22197,val_22198,vec__22180_22189,seq__22181_22190,first__22182_22191,seq__22181_22192__$1,f_22193__$1,fs_22194__$2,d_SINGLEQUOTE__22195,__22196,d__$1){
return (function (p1__22172_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,p1__22172_SHARP_);
});})(x_22187__$1,fs_22188__$1,err_22199,d__22079__auto___22197,val_22198,vec__22180_22189,seq__22181_22190,first__22182_22191,seq__22181_22192__$1,f_22193__$1,fs_22194__$2,d_SINGLEQUOTE__22195,__22196,d__$1))
);
} else {
manifold_cljs.deferred.error_BANG_.call(null,d__$1,err_22199);
}
} else {
var G__22200 = val_22198;
var G__22201 = fs_22194__$2;
x_22187__$1 = G__22200;
fs_22188__$1 = G__22201;
continue;
}
}
break;
}

return d__$1;
} else {
return null;
}
});

/** @this {Function} */
manifold_cljs.deferred.chain_.cljs$lang$applyTo = (function (seq22174){
var G__22175 = cljs.core.first.call(null,seq22174);
var seq22174__$1 = cljs.core.next.call(null,seq22174);
var G__22176 = cljs.core.first.call(null,seq22174__$1);
var seq22174__$2 = cljs.core.next.call(null,seq22174__$1);
var G__22177 = cljs.core.first.call(null,seq22174__$2);
var seq22174__$3 = cljs.core.next.call(null,seq22174__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22175,G__22176,G__22177,seq22174__$3);
});

manifold_cljs.deferred.chain_.cljs$lang$maxFixedArity = (3);

/**
 * Like `chain`, but does not coerce deferrable values.  This is useful when
 *   coercion is undesired.
 */
manifold_cljs.deferred.chain_SINGLEQUOTE_ = (function manifold_cljs$deferred$chain_SINGLEQUOTE_(var_args){
var G__22206 = arguments.length;
switch (G__22206) {
case 1:
return manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22208 = arguments.length;
var i__4500__auto___22209 = (0);
while(true){
if((i__4500__auto___22209 < len__4499__auto___22208)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22209]));

var G__22210 = (i__4500__auto___22209 + (1));
i__4500__auto___22209 = G__22210;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,null,x,cljs.core.identity);
});

manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,null,x,f);
});

manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,fs){
return cljs.core.apply.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE__,null,x,f,fs);
});

/** @this {Function} */
manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq22203){
var G__22204 = cljs.core.first.call(null,seq22203);
var seq22203__$1 = cljs.core.next.call(null,seq22203);
var G__22205 = cljs.core.first.call(null,seq22203__$1);
var seq22203__$2 = cljs.core.next.call(null,seq22203__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22204,G__22205,seq22203__$2);
});

manifold_cljs.deferred.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2);

/**
 * Composes functions, left to right, over the value `x`, returning a deferred containing
 * the result.  When composing, either `x` or the returned values may be values which can
 * be converted to a deferred, causing the composition to be paused.
 * 
 * The returned deferred will only be realized once all functions have been applied and their
 * return values realized.
 * 
 *     @(chain 1 inc #(async (inc %))) => 3
 * 
 *     @(chain (success-deferred 1) inc inc) => 3
 * 
 * 
 */
manifold_cljs.deferred.chain = (function manifold_cljs$deferred$chain(var_args){
var G__22215 = arguments.length;
switch (G__22215) {
case 1:
return manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22217 = arguments.length;
var i__4500__auto___22218 = (0);
while(true){
if((i__4500__auto___22218 < len__4499__auto___22217)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22218]));

var G__22219 = (i__4500__auto___22218 + (1));
i__4500__auto___22218 = G__22219;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$1 = (function (x){
return manifold_cljs.deferred.chain_.call(null,null,x,cljs.core.identity);
});

manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
return manifold_cljs.deferred.chain_.call(null,null,x,f);
});

manifold_cljs.deferred.chain.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,fs){
return cljs.core.apply.call(null,manifold_cljs.deferred.chain_,null,x,f,fs);
});

/** @this {Function} */
manifold_cljs.deferred.chain.cljs$lang$applyTo = (function (seq22212){
var G__22213 = cljs.core.first.call(null,seq22212);
var seq22212__$1 = cljs.core.next.call(null,seq22212);
var G__22214 = cljs.core.first.call(null,seq22212__$1);
var seq22212__$2 = cljs.core.next.call(null,seq22212__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22213,G__22214,seq22212__$2);
});

manifold_cljs.deferred.chain.cljs$lang$maxFixedArity = (2);

/**
 * Like `catch`, but does not coerce deferrable values.
 */
manifold_cljs.deferred.catch_SINGLEQUOTE_ = (function manifold_cljs$deferred$catch_SINGLEQUOTE_(var_args){
var G__22224 = arguments.length;
switch (G__22224) {
case 2:
return manifold_cljs.deferred.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (x,error_handler){
return manifold_cljs.deferred.catch_SINGLEQUOTE_.call(null,x,null,error_handler);
});

manifold_cljs.deferred.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (x,error_class,error_handler){
var x__$1 = manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x);
var catch_QMARK_ = ((function (x__$1){
return (function (p1__22220_SHARP_){
return (((error_class == null)) || ((p1__22220_SHARP_ instanceof error_class)));
});})(x__$1))
;
if(cljs.core.not.call(null,manifold_cljs.deferred.deferred_QMARK_.call(null,x__$1))){
return x__$1;
} else {
var d__22079__auto__ = x__$1;
var val = manifold_cljs.deferred.success_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val)){
var err = manifold_cljs.deferred.error_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err)){
var d_SINGLEQUOTE_ = manifold_cljs.deferred.deferred.call(null);
manifold_cljs.deferred.on_realized.call(null,x__$1,((function (d_SINGLEQUOTE_,err,d__22079__auto__,val,x__$1,catch_QMARK_){
return (function (p1__22221_SHARP_){
return manifold_cljs.deferred.success_BANG_.call(null,d_SINGLEQUOTE_,p1__22221_SHARP_);
});})(d_SINGLEQUOTE_,err,d__22079__auto__,val,x__$1,catch_QMARK_))
,((function (d_SINGLEQUOTE_,err,d__22079__auto__,val,x__$1,catch_QMARK_){
return (function (p1__22222_SHARP_){
try{if(cljs.core.truth_(catch_QMARK_.call(null,p1__22222_SHARP_))){
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,d_SINGLEQUOTE_,error_handler.call(null,p1__22222_SHARP_));
} else {
return manifold_cljs.deferred.chain_SINGLEQUOTE__.call(null,d_SINGLEQUOTE_,manifold_cljs.deferred.error_deferred.call(null,p1__22222_SHARP_));
}
}catch (e22225){if((e22225 instanceof Error)){
var e = e22225;
return manifold_cljs.deferred.error_BANG_.call(null,d_SINGLEQUOTE_,e);
} else {
throw e22225;

}
}});})(d_SINGLEQUOTE_,err,d__22079__auto__,val,x__$1,catch_QMARK_))
);

return d_SINGLEQUOTE_;
} else {
try{if(cljs.core.truth_(catch_QMARK_.call(null,err))){
return manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,error_handler.call(null,err));
} else {
return manifold_cljs.deferred.error_deferred.call(null,err);
}
}catch (e22226){if((e22226 instanceof Error)){
var e = e22226;
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
throw e22226;

}
}}
} else {
return x__$1;
}
}
});

manifold_cljs.deferred.catch_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3;

/**
 * An equivalent of the catch clause, which takes an `error-handler` function that will be invoked
 * with the exception, and whose return value will be yielded as a successful outcome.  If an
 * `error-class` is specified, only exceptions of that type will be caught.  If not, all exceptions
 * will be caught.
 * 
 *     (-> d
 *       (chain f g h)
 *       (catch MyError #(str "oh no: " (.getMessage %)))
 *       (catch         #(str "something unexpected: " (.getMessage %))))
 * 
 *  
 */
manifold_cljs.deferred.catch$ = (function manifold_cljs$deferred$catch(var_args){
var G__22229 = arguments.length;
switch (G__22229) {
case 2:
return manifold_cljs.deferred.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.catch$.cljs$core$IFn$_invoke$arity$2 = (function (x,error_handler){
return manifold_cljs.deferred.catch$.call(null,x,null,error_handler);
});

manifold_cljs.deferred.catch$.cljs$core$IFn$_invoke$arity$3 = (function (x,error_class,error_handler){
var temp__5455__auto__ = manifold_cljs.deferred.__GT_deferred.call(null,x,null);
if(cljs.core.truth_(temp__5455__auto__)){
var d = temp__5455__auto__;
return manifold_cljs.deferred.chain.call(null,manifold_cljs.deferred.catch_SINGLEQUOTE_.call(null,manifold_cljs.deferred.chain.call(null,d),error_class,error_handler));
} else {
return x;
}
});

manifold_cljs.deferred.catch$.cljs$lang$maxFixedArity = 3;

/**
 * Like `finally`, but doesn't coerce deferrable values.
 */
manifold_cljs.deferred.finally_SINGLEQUOTE_ = (function manifold_cljs$deferred$finally_SINGLEQUOTE_(x,f){
var d__22079__auto__ = x;
var val = manifold_cljs.deferred.success_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val)){
var err = manifold_cljs.deferred.error_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err)){
var d = manifold_cljs.deferred.deferred.call(null);
manifold_cljs.deferred.on_realized.call(null,x,((function (d,err,d__22079__auto__,val){
return (function (p1__22231_SHARP_){
try{f.call(null);

return manifold_cljs.deferred.success_BANG_.call(null,d,p1__22231_SHARP_);
}catch (e22233){if((e22233 instanceof Error)){
var e = e22233;
return manifold_cljs.deferred.error_BANG_.call(null,d,e);
} else {
throw e22233;

}
}});})(d,err,d__22079__auto__,val))
,((function (d,err,d__22079__auto__,val){
return (function (p1__22232_SHARP_){
try{f.call(null);

return manifold_cljs.deferred.error_BANG_.call(null,d,p1__22232_SHARP_);
}catch (e22234){if((e22234 instanceof Error)){
var e = e22234;
return manifold_cljs.deferred.error_BANG_.call(null,d,e);
} else {
throw e22234;

}
}});})(d,err,d__22079__auto__,val))
);

return d;
} else {
try{f.call(null);

return manifold_cljs.deferred.error_deferred.call(null,err);
}catch (e22235){if((e22235 instanceof Error)){
var e = e22235;
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
throw e22235;

}
}}
} else {
try{f.call(null);

return x;
}catch (e22236){if((e22236 instanceof Error)){
var e = e22236;
return manifold_cljs.deferred.error_deferred.call(null,e);
} else {
throw e22236;

}
}}
});
/**
 * An equivalent of the finally clause, which takes a no-arg side-effecting function that executes
 * no matter what the result.
 */
manifold_cljs.deferred.finally$ = (function manifold_cljs$deferred$finally(x,f){
var temp__5455__auto__ = manifold_cljs.deferred.__GT_deferred.call(null,x,null);
if(cljs.core.truth_(temp__5455__auto__)){
var d = temp__5455__auto__;
return manifold_cljs.deferred.finally_SINGLEQUOTE_.call(null,d,f);
} else {
return manifold_cljs.deferred.finally_SINGLEQUOTE_.call(null,x,f);
}
});
/**
 * Like `zip`, but only unwraps Manifold deferreds.
 */
manifold_cljs.deferred.zip_SINGLEQUOTE_ = (function manifold_cljs$deferred$zip_SINGLEQUOTE_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22238 = arguments.length;
var i__4500__auto___22239 = (0);
while(true){
if((i__4500__auto___22239 < len__4499__auto___22238)){
args__4502__auto__.push((arguments[i__4500__auto___22239]));

var G__22240 = (i__4500__auto___22239 + (1));
i__4500__auto___22239 = G__22240;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return manifold_cljs.deferred.zip_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

manifold_cljs.deferred.zip_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
var cnt = cljs.core.count.call(null,vals);
var ary = cljs.core.object_array.call(null,cnt);
var counter = cljs.core.volatile_BANG_.call(null,cnt);
var d = null;
var idx = (0);
var s = vals;
while(true){
if(cljs.core.empty_QMARK_.call(null,s)){
if((cljs.core.deref.call(null,counter) === (0))){
return manifold_cljs.deferred.success_deferred.call(null,(function (){var or__3922__auto__ = cljs.core.seq.call(null,ary);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.List.EMPTY;
}
})());
} else {
return d;
}
} else {
var x = cljs.core.first.call(null,s);
var rst = cljs.core.rest.call(null,s);
var idx_SINGLEQUOTE_ = (idx + (1));
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x))){
var d__22079__auto__ = x;
var val = manifold_cljs.deferred.success_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val)){
var err = manifold_cljs.deferred.error_value.call(null,d__22079__auto__,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err)){
var d__$1 = (function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return manifold_cljs.deferred.deferred.call(null);
}
})();
manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x),((function (d,idx,s,d__$1,err,d__22079__auto__,val,x,rst,idx_SINGLEQUOTE_,cnt,ary,counter){
return (function (val__$1){
(ary[idx] = val__$1);

if((cljs.core._vreset_BANG_.call(null,counter,(cljs.core._deref.call(null,counter) - (1))) === (0))){
return manifold_cljs.deferred.success_BANG_.call(null,d__$1,cljs.core.seq.call(null,ary));
} else {
return null;
}
});})(d,idx,s,d__$1,err,d__22079__auto__,val,x,rst,idx_SINGLEQUOTE_,cnt,ary,counter))
,((function (d,idx,s,d__$1,err,d__22079__auto__,val,x,rst,idx_SINGLEQUOTE_,cnt,ary,counter){
return (function (err__$1){
return manifold_cljs.deferred.error_BANG_.call(null,d__$1,err__$1);
});})(d,idx,s,d__$1,err,d__22079__auto__,val,x,rst,idx_SINGLEQUOTE_,cnt,ary,counter))
);

var G__22241 = d__$1;
var G__22242 = idx_SINGLEQUOTE_;
var G__22243 = rst;
d = G__22241;
idx = G__22242;
s = G__22243;
continue;
} else {
return manifold_cljs.deferred.error_deferred.call(null,err);
}
} else {
(ary[idx] = val);

cljs.core._vreset_BANG_.call(null,counter,(cljs.core._deref.call(null,counter) - (1)));

var G__22244 = d;
var G__22245 = idx_SINGLEQUOTE_;
var G__22246 = rst;
d = G__22244;
idx = G__22245;
s = G__22246;
continue;
}
} else {
(ary[idx] = x);

cljs.core._vreset_BANG_.call(null,counter,(cljs.core._deref.call(null,counter) - (1)));

var G__22247 = d;
var G__22248 = idx_SINGLEQUOTE_;
var G__22249 = rst;
d = G__22247;
idx = G__22248;
s = G__22249;
continue;
}
}
break;
}
});

manifold_cljs.deferred.zip_SINGLEQUOTE_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
manifold_cljs.deferred.zip_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq22237){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22237));
});

/**
 * Takes a list of values, some of which may be deferrable, and returns a deferred that will yield a list
 * of realized values.
 * 
 *      @(zip 1 2 3) => [1 2 3]
 *      @(zip (async 1) 2 3) => [1 2 3]
 * 
 *   
 */
manifold_cljs.deferred.zip = (function manifold_cljs$deferred$zip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22252 = arguments.length;
var i__4500__auto___22253 = (0);
while(true){
if((i__4500__auto___22253 < len__4499__auto___22252)){
args__4502__auto__.push((arguments[i__4500__auto___22253]));

var G__22254 = (i__4500__auto___22253 + (1));
i__4500__auto___22253 = G__22254;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return manifold_cljs.deferred.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

manifold_cljs.deferred.zip.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return cljs.core.apply.call(null,manifold_cljs.deferred.zip_SINGLEQUOTE_,cljs.core.map.call(null,(function (p1__22250_SHARP_){
var or__3922__auto__ = manifold_cljs.deferred.__GT_deferred.call(null,p1__22250_SHARP_,null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__22250_SHARP_;
}
}),vals));
});

manifold_cljs.deferred.zip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
manifold_cljs.deferred.zip.cljs$lang$applyTo = (function (seq22251){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22251));
});

manifold_cljs.deferred.random_array = (function manifold_cljs$deferred$random_array(n){
var a = cljs.core.int_array.call(null,n);
(a[(0)] = (0));

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,(i + (1)));
(a[i] = (a[j]));

(a[j] = i);

var G__22255 = (i + (1));
i = G__22255;
continue;
}
break;
}
});
/**
 * Like `alt`, but only unwraps Manifold deferreds.
 */
manifold_cljs.deferred.alt_SINGLEQUOTE_ = (function manifold_cljs$deferred$alt_SINGLEQUOTE_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22259 = arguments.length;
var i__4500__auto___22260 = (0);
while(true){
if((i__4500__auto___22260 < len__4499__auto___22259)){
args__4502__auto__.push((arguments[i__4500__auto___22260]));

var G__22261 = (i__4500__auto___22260 + (1));
i__4500__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return manifold_cljs.deferred.alt_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

manifold_cljs.deferred.alt_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
var d = manifold_cljs.deferred.deferred.call(null);
var cnt = cljs.core.count.call(null,vals);
var idxs = manifold_cljs.deferred.random_array.call(null,cnt);
var i_22262 = (0);
while(true){
if((i_22262 < cnt)){
var i_SINGLEQUOTE__22263 = (idxs[i_22262]);
var x_22264 = cljs.core.nth.call(null,vals,i_SINGLEQUOTE__22263);
if(cljs.core.truth_(manifold_cljs.deferred.deferred_QMARK_.call(null,x_22264))){
var d__22079__auto___22265 = x_22264;
var val_22266 = manifold_cljs.deferred.success_value.call(null,d__22079__auto___22265,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),val_22266)){
var err_22267 = manifold_cljs.deferred.error_value.call(null,d__22079__auto___22265,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452));
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("manifold-cljs.deferred","none","manifold-cljs.deferred/none",1009740452),err_22267)){
manifold_cljs.deferred.on_realized.call(null,manifold_cljs.deferred.chain_SINGLEQUOTE_.call(null,x_22264),((function (i_22262,err_22267,d__22079__auto___22265,val_22266,i_SINGLEQUOTE__22263,x_22264,d,cnt,idxs){
return (function (p1__22256_SHARP_){
return manifold_cljs.deferred.success_BANG_.call(null,d,p1__22256_SHARP_);
});})(i_22262,err_22267,d__22079__auto___22265,val_22266,i_SINGLEQUOTE__22263,x_22264,d,cnt,idxs))
,((function (i_22262,err_22267,d__22079__auto___22265,val_22266,i_SINGLEQUOTE__22263,x_22264,d,cnt,idxs){
return (function (p1__22257_SHARP_){
return manifold_cljs.deferred.error_BANG_.call(null,d,p1__22257_SHARP_);
});})(i_22262,err_22267,d__22079__auto___22265,val_22266,i_SINGLEQUOTE__22263,x_22264,d,cnt,idxs))
);

var G__22268 = (i_22262 + (1));
i_22262 = G__22268;
continue;
} else {
manifold_cljs.deferred.error_BANG_.call(null,d,err_22267);
}
} else {
manifold_cljs.deferred.success_BANG_.call(null,d,val_22266);
}
} else {
manifold_cljs.deferred.success_BANG_.call(null,d,x_22264);
}
} else {
}
break;
}

return d;
});

manifold_cljs.deferred.alt_SINGLEQUOTE_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
manifold_cljs.deferred.alt_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq22258){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22258));
});

/**
 * Takes a list of values, some of which may be deferrable, and returns a
 *   deferred that will yield the value which was realized first.
 * 
 *  @(alt 1 2) => 1
 *  @(alt (future (Thread/sleep 1) 1)
 *        (future (Thread/sleep 1) 2)) => 1 or 2 depending on the thread scheduling
 * 
 *   Values appearing earlier in the input are preferred.
 */
manifold_cljs.deferred.alt = (function manifold_cljs$deferred$alt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22271 = arguments.length;
var i__4500__auto___22272 = (0);
while(true){
if((i__4500__auto___22272 < len__4499__auto___22271)){
args__4502__auto__.push((arguments[i__4500__auto___22272]));

var G__22273 = (i__4500__auto___22272 + (1));
i__4500__auto___22272 = G__22273;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return manifold_cljs.deferred.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

manifold_cljs.deferred.alt.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return cljs.core.apply.call(null,manifold_cljs.deferred.alt_SINGLEQUOTE_,cljs.core.map.call(null,(function (p1__22269_SHARP_){
var or__3922__auto__ = manifold_cljs.deferred.__GT_deferred.call(null,p1__22269_SHARP_,null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__22269_SHARP_;
}
}),vals));
});

manifold_cljs.deferred.alt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
manifold_cljs.deferred.alt.cljs$lang$applyTo = (function (seq22270){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22270));
});

/**
 * Takes a deferred, and sets a timeout on it, such that it will be realized as `timeout-value`
 * (or a TimeoutException if none is specified) if it is not realized in `interval` ms.  Returns
 * the deferred that was passed in.
 * 
 * This will act directly on the deferred value passed in.  If the deferred represents a value
 * returned by `chain`, all actions not yet completed will be short-circuited upon timeout.
 */
manifold_cljs.deferred.timeout_BANG_ = (function manifold_cljs$deferred$timeout_BANG_(var_args){
var G__22275 = arguments.length;
switch (G__22275) {
case 2:
return manifold_cljs.deferred.timeout_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return manifold_cljs.deferred.timeout_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

manifold_cljs.deferred.timeout_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (d,interval){
if(cljs.core.truth_((function (){var or__3922__auto__ = (interval == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not.call(null,manifold_cljs.deferred.deferred_QMARK_.call(null,d));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return manifold_cljs.deferred.realized_QMARK_.call(null,d);
}
}
})())){
} else {
if(!((interval > (0)))){
manifold_cljs.deferred.error_BANG_.call(null,d,cljs.core.ex_info.call(null,["timed out after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interval)," milliseconds"].join(''),cljs.core.PersistentArrayMap.EMPTY));
} else {
manifold_cljs.time.in$.call(null,interval,(function (){
return manifold_cljs.deferred.error_BANG_.call(null,d,cljs.core.ex_info.call(null,["timed out after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interval)," milliseconds"].join(''),cljs.core.PersistentArrayMap.EMPTY));
}));

}
}

return d;
});

manifold_cljs.deferred.timeout_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (d,interval,timeout_value){
if(cljs.core.truth_((function (){var or__3922__auto__ = (interval == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not.call(null,manifold_cljs.deferred.deferred_QMARK_.call(null,d));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return manifold_cljs.deferred.realized_QMARK_.call(null,d);
}
}
})())){
} else {
if(!((interval > (0)))){
manifold_cljs.deferred.success_BANG_.call(null,d,timeout_value);
} else {
manifold_cljs.time.in$.call(null,interval,(function (){
return manifold_cljs.deferred.success_BANG_.call(null,d,timeout_value);
}));

}
}

return d;
});

manifold_cljs.deferred.timeout_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
manifold_cljs.deferred.Recur = (function (s){
this.s = s;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
manifold_cljs.deferred.Recur.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

manifold_cljs.deferred.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
});

manifold_cljs.deferred.Recur.cljs$lang$type = true;

manifold_cljs.deferred.Recur.cljs$lang$ctorStr = "manifold-cljs.deferred/Recur";

manifold_cljs.deferred.Recur.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"manifold-cljs.deferred/Recur");
});

/**
 * Positional factory function for manifold-cljs.deferred/Recur.
 */
manifold_cljs.deferred.__GT_Recur = (function manifold_cljs$deferred$__GT_Recur(s){
return (new manifold_cljs.deferred.Recur(s));
});

/**
 * A special recur that can be used with `manifold.deferred/loop`.
 */
manifold_cljs.deferred.recur = (function manifold_cljs$deferred$recur(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22278 = arguments.length;
var i__4500__auto___22279 = (0);
while(true){
if((i__4500__auto___22279 < len__4499__auto___22278)){
args__4502__auto__.push((arguments[i__4500__auto___22279]));

var G__22280 = (i__4500__auto___22279 + (1));
i__4500__auto___22279 = G__22280;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return manifold_cljs.deferred.recur.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

manifold_cljs.deferred.recur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (new manifold_cljs.deferred.Recur(args));
});

manifold_cljs.deferred.recur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
manifold_cljs.deferred.recur.cljs$lang$applyTo = (function (seq22277){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22277));
});

manifold_cljs.deferred.time_STAR_ = (function manifold_cljs$deferred$time_STAR_(deferred_fn){
var start = cljs.core.system_time.call(null);
var announce = ((function (start){
return (function (){
return cljs.core.prn.call(null,["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time.call(null) - start).toFixed((6)))," msecs"].join(''));
});})(start))
;
var d = deferred_fn.call(null);
manifold_cljs.deferred.on_realized.call(null,d,announce,announce);

return d;
});

//# sourceMappingURL=deferred.js.map?rel=1557580543990
