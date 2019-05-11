// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31511){if((e31511 instanceof Error)){
var e = e31511;
return "Error: Unable to stringify";
} else {
throw e31511;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31514 = arguments.length;
switch (G__31514) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31512_SHARP_){
if(typeof p1__31512_SHARP_ === 'string'){
return p1__31512_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31512_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31517 = arguments.length;
var i__4500__auto___31518 = (0);
while(true){
if((i__4500__auto___31518 < len__4499__auto___31517)){
args__4502__auto__.push((arguments[i__4500__auto___31518]));

var G__31519 = (i__4500__auto___31518 + (1));
i__4500__auto___31518 = G__31519;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31516){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31516));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31521 = arguments.length;
var i__4500__auto___31522 = (0);
while(true){
if((i__4500__auto___31522 < len__4499__auto___31521)){
args__4502__auto__.push((arguments[i__4500__auto___31522]));

var G__31523 = (i__4500__auto___31522 + (1));
i__4500__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31520){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31520));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31524){
var map__31525 = p__31524;
var map__31525__$1 = ((((!((map__31525 == null)))?(((((map__31525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31525):map__31525);
var message = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27651__auto___31604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___31604,ch){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___31604,ch){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31578_31605 = state_31576__$1;
(statearr_31578_31605[(2)] = inst_31572);

(statearr_31578_31605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var state_31576__$1 = state_31576;
var statearr_31579_31606 = state_31576__$1;
(statearr_31579_31606[(2)] = null);

(statearr_31579_31606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31529 = (state_31576[(7)]);
var inst_31529__$1 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31580 = state_31576;
(statearr_31580[(7)] = inst_31529__$1);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31529__$1)){
var statearr_31581_31607 = state_31576__$1;
(statearr_31581_31607[(1)] = (5));

} else {
var statearr_31582_31608 = state_31576__$1;
(statearr_31582_31608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (15))){
var inst_31536 = (state_31576[(8)]);
var inst_31551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31536);
var inst_31552 = cljs.core.first.call(null,inst_31551);
var inst_31553 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31552);
var inst_31554 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31553)].join('');
var inst_31555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31554);
var state_31576__$1 = state_31576;
var statearr_31583_31609 = state_31576__$1;
(statearr_31583_31609[(2)] = inst_31555);

(statearr_31583_31609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (13))){
var inst_31560 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31584_31610 = state_31576__$1;
(statearr_31584_31610[(2)] = inst_31560);

(statearr_31584_31610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var state_31576__$1 = state_31576;
var statearr_31585_31611 = state_31576__$1;
(statearr_31585_31611[(2)] = null);

(statearr_31585_31611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (17))){
var inst_31558 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31586_31612 = state_31576__$1;
(statearr_31586_31612[(2)] = inst_31558);

(statearr_31586_31612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (12))){
var inst_31535 = (state_31576[(9)]);
var inst_31549 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31535,opts);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31549)){
var statearr_31587_31613 = state_31576__$1;
(statearr_31587_31613[(1)] = (15));

} else {
var statearr_31588_31614 = state_31576__$1;
(statearr_31588_31614[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(4),ch);
} else {
if((state_val_31577 === (11))){
var inst_31536 = (state_31576[(8)]);
var inst_31541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31542 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31536);
var inst_31543 = cljs.core.async.timeout.call(null,(1000));
var inst_31544 = [inst_31542,inst_31543];
var inst_31545 = (new cljs.core.PersistentVector(null,2,(5),inst_31541,inst_31544,null));
var state_31576__$1 = state_31576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31576__$1,(14),inst_31545);
} else {
if((state_val_31577 === (9))){
var inst_31536 = (state_31576[(8)]);
var inst_31562 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31563 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31536);
var inst_31564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31563);
var inst_31565 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31564)].join('');
var inst_31566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31565);
var state_31576__$1 = (function (){var statearr_31589 = state_31576;
(statearr_31589[(10)] = inst_31562);

return statearr_31589;
})();
var statearr_31590_31615 = state_31576__$1;
(statearr_31590_31615[(2)] = inst_31566);

(statearr_31590_31615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31529 = (state_31576[(7)]);
var inst_31531 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31532 = (new cljs.core.PersistentArrayMap(null,2,inst_31531,null));
var inst_31533 = (new cljs.core.PersistentHashSet(null,inst_31532,null));
var inst_31534 = figwheel.client.focus_msgs.call(null,inst_31533,inst_31529);
var inst_31535 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31534);
var inst_31536 = cljs.core.first.call(null,inst_31534);
var inst_31537 = figwheel.client.autoload_QMARK_.call(null);
var state_31576__$1 = (function (){var statearr_31591 = state_31576;
(statearr_31591[(9)] = inst_31535);

(statearr_31591[(8)] = inst_31536);

return statearr_31591;
})();
if(cljs.core.truth_(inst_31537)){
var statearr_31592_31616 = state_31576__$1;
(statearr_31592_31616[(1)] = (8));

} else {
var statearr_31593_31617 = state_31576__$1;
(statearr_31593_31617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (14))){
var inst_31547 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31594_31618 = state_31576__$1;
(statearr_31594_31618[(2)] = inst_31547);

(statearr_31594_31618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (16))){
var state_31576__$1 = state_31576;
var statearr_31595_31619 = state_31576__$1;
(statearr_31595_31619[(2)] = null);

(statearr_31595_31619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31568 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31596 = state_31576;
(statearr_31596[(11)] = inst_31568);

return statearr_31596;
})();
var statearr_31597_31620 = state_31576__$1;
(statearr_31597_31620[(2)] = null);

(statearr_31597_31620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31535 = (state_31576[(9)]);
var inst_31539 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31535,opts);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31539)){
var statearr_31598_31621 = state_31576__$1;
(statearr_31598_31621[(1)] = (11));

} else {
var statearr_31599_31622 = state_31576__$1;
(statearr_31599_31622[(1)] = (12));

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
});})(c__27651__auto___31604,ch))
;
return ((function (switch__27561__auto__,c__27651__auto___31604,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____0 = (function (){
var statearr_31600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31600[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__);

(statearr_31600[(1)] = (1));

return statearr_31600;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____1 = (function (state_31576){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e31601){if((e31601 instanceof Object)){
var ex__27565__auto__ = e31601;
var statearr_31602_31623 = state_31576;
(statearr_31602_31623[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31624 = state_31576;
state_31576 = G__31624;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27562__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___31604,ch))
})();
var state__27653__auto__ = (function (){var statearr_31603 = f__27652__auto__.call(null);
(statearr_31603[(6)] = c__27651__auto___31604);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___31604,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31625_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31625_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31629 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31629){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31628 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31627,_STAR_print_fn_STAR_31628,sb,base_path_31629){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31627,_STAR_print_fn_STAR_31628,sb,base_path_31629))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31628;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31627;
}}catch (e31626){if((e31626 instanceof Error)){
var e = e31626;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31629], null));
} else {
var e = e31626;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31629))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31630){
var map__31631 = p__31630;
var map__31631__$1 = ((((!((map__31631 == null)))?(((((map__31631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31631):map__31631);
var opts = map__31631__$1;
var build_id = cljs.core.get.call(null,map__31631__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31631,map__31631__$1,opts,build_id){
return (function (p__31633){
var vec__31634 = p__31633;
var seq__31635 = cljs.core.seq.call(null,vec__31634);
var first__31636 = cljs.core.first.call(null,seq__31635);
var seq__31635__$1 = cljs.core.next.call(null,seq__31635);
var map__31637 = first__31636;
var map__31637__$1 = ((((!((map__31637 == null)))?(((((map__31637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31637):map__31637);
var msg = map__31637__$1;
var msg_name = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31635__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31634,seq__31635,first__31636,seq__31635__$1,map__31637,map__31637__$1,msg,msg_name,_,map__31631,map__31631__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31634,seq__31635,first__31636,seq__31635__$1,map__31637,map__31637__$1,msg,msg_name,_,map__31631,map__31631__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31631,map__31631__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31639){
var vec__31640 = p__31639;
var seq__31641 = cljs.core.seq.call(null,vec__31640);
var first__31642 = cljs.core.first.call(null,seq__31641);
var seq__31641__$1 = cljs.core.next.call(null,seq__31641);
var map__31643 = first__31642;
var map__31643__$1 = ((((!((map__31643 == null)))?(((((map__31643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);
var msg = map__31643__$1;
var msg_name = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31641__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31645){
var map__31646 = p__31645;
var map__31646__$1 = ((((!((map__31646 == null)))?(((((map__31646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);
var on_compile_warning = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31646,map__31646__$1,on_compile_warning,on_compile_fail){
return (function (p__31648){
var vec__31649 = p__31648;
var seq__31650 = cljs.core.seq.call(null,vec__31649);
var first__31651 = cljs.core.first.call(null,seq__31650);
var seq__31650__$1 = cljs.core.next.call(null,seq__31650);
var map__31652 = first__31651;
var map__31652__$1 = ((((!((map__31652 == null)))?(((((map__31652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31652):map__31652);
var msg = map__31652__$1;
var msg_name = cljs.core.get.call(null,map__31652__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31650__$1;
var pred__31654 = cljs.core._EQ_;
var expr__31655 = msg_name;
if(cljs.core.truth_(pred__31654.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31655))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31654.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31655))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31646,map__31646__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__,msg_hist,msg_names,msg){
return (function (state_31744){
var state_val_31745 = (state_31744[(1)]);
if((state_val_31745 === (7))){
var inst_31664 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31664)){
var statearr_31746_31793 = state_31744__$1;
(statearr_31746_31793[(1)] = (8));

} else {
var statearr_31747_31794 = state_31744__$1;
(statearr_31747_31794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (20))){
var inst_31738 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31748_31795 = state_31744__$1;
(statearr_31748_31795[(2)] = inst_31738);

(statearr_31748_31795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (27))){
var inst_31734 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31749_31796 = state_31744__$1;
(statearr_31749_31796[(2)] = inst_31734);

(statearr_31749_31796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (1))){
var inst_31657 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31657)){
var statearr_31750_31797 = state_31744__$1;
(statearr_31750_31797[(1)] = (2));

} else {
var statearr_31751_31798 = state_31744__$1;
(statearr_31751_31798[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (24))){
var inst_31736 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31752_31799 = state_31744__$1;
(statearr_31752_31799[(2)] = inst_31736);

(statearr_31752_31799[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (4))){
var inst_31742 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31744__$1,inst_31742);
} else {
if((state_val_31745 === (15))){
var inst_31740 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31753_31800 = state_31744__$1;
(statearr_31753_31800[(2)] = inst_31740);

(statearr_31753_31800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (21))){
var inst_31693 = (state_31744[(2)]);
var inst_31694 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31695 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31694);
var state_31744__$1 = (function (){var statearr_31754 = state_31744;
(statearr_31754[(7)] = inst_31693);

return statearr_31754;
})();
var statearr_31755_31801 = state_31744__$1;
(statearr_31755_31801[(2)] = inst_31695);

(statearr_31755_31801[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (31))){
var inst_31723 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31723)){
var statearr_31756_31802 = state_31744__$1;
(statearr_31756_31802[(1)] = (34));

} else {
var statearr_31757_31803 = state_31744__$1;
(statearr_31757_31803[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (32))){
var inst_31732 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31758_31804 = state_31744__$1;
(statearr_31758_31804[(2)] = inst_31732);

(statearr_31758_31804[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (33))){
var inst_31719 = (state_31744[(2)]);
var inst_31720 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31721 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31720);
var state_31744__$1 = (function (){var statearr_31759 = state_31744;
(statearr_31759[(8)] = inst_31719);

return statearr_31759;
})();
var statearr_31760_31805 = state_31744__$1;
(statearr_31760_31805[(2)] = inst_31721);

(statearr_31760_31805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (13))){
var inst_31678 = figwheel.client.heads_up.clear.call(null);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(16),inst_31678);
} else {
if((state_val_31745 === (22))){
var inst_31699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31700 = figwheel.client.heads_up.append_warning_message.call(null,inst_31699);
var state_31744__$1 = state_31744;
var statearr_31761_31806 = state_31744__$1;
(statearr_31761_31806[(2)] = inst_31700);

(statearr_31761_31806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (36))){
var inst_31730 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31762_31807 = state_31744__$1;
(statearr_31762_31807[(2)] = inst_31730);

(statearr_31762_31807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (29))){
var inst_31710 = (state_31744[(2)]);
var inst_31711 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31712 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31711);
var state_31744__$1 = (function (){var statearr_31763 = state_31744;
(statearr_31763[(9)] = inst_31710);

return statearr_31763;
})();
var statearr_31764_31808 = state_31744__$1;
(statearr_31764_31808[(2)] = inst_31712);

(statearr_31764_31808[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (6))){
var inst_31659 = (state_31744[(10)]);
var state_31744__$1 = state_31744;
var statearr_31765_31809 = state_31744__$1;
(statearr_31765_31809[(2)] = inst_31659);

(statearr_31765_31809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (28))){
var inst_31706 = (state_31744[(2)]);
var inst_31707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31708 = figwheel.client.heads_up.display_warning.call(null,inst_31707);
var state_31744__$1 = (function (){var statearr_31766 = state_31744;
(statearr_31766[(11)] = inst_31706);

return statearr_31766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(29),inst_31708);
} else {
if((state_val_31745 === (25))){
var inst_31704 = figwheel.client.heads_up.clear.call(null);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(28),inst_31704);
} else {
if((state_val_31745 === (34))){
var inst_31725 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(37),inst_31725);
} else {
if((state_val_31745 === (17))){
var inst_31684 = (state_31744[(2)]);
var inst_31685 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31686 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31685);
var state_31744__$1 = (function (){var statearr_31767 = state_31744;
(statearr_31767[(12)] = inst_31684);

return statearr_31767;
})();
var statearr_31768_31810 = state_31744__$1;
(statearr_31768_31810[(2)] = inst_31686);

(statearr_31768_31810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (3))){
var inst_31676 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31676)){
var statearr_31769_31811 = state_31744__$1;
(statearr_31769_31811[(1)] = (13));

} else {
var statearr_31770_31812 = state_31744__$1;
(statearr_31770_31812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (12))){
var inst_31672 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31771_31813 = state_31744__$1;
(statearr_31771_31813[(2)] = inst_31672);

(statearr_31771_31813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (2))){
var inst_31659 = (state_31744[(10)]);
var inst_31659__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31744__$1 = (function (){var statearr_31772 = state_31744;
(statearr_31772[(10)] = inst_31659__$1);

return statearr_31772;
})();
if(cljs.core.truth_(inst_31659__$1)){
var statearr_31773_31814 = state_31744__$1;
(statearr_31773_31814[(1)] = (5));

} else {
var statearr_31774_31815 = state_31744__$1;
(statearr_31774_31815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (23))){
var inst_31702 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31702)){
var statearr_31775_31816 = state_31744__$1;
(statearr_31775_31816[(1)] = (25));

} else {
var statearr_31776_31817 = state_31744__$1;
(statearr_31776_31817[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (35))){
var state_31744__$1 = state_31744;
var statearr_31777_31818 = state_31744__$1;
(statearr_31777_31818[(2)] = null);

(statearr_31777_31818[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (19))){
var inst_31697 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31697)){
var statearr_31778_31819 = state_31744__$1;
(statearr_31778_31819[(1)] = (22));

} else {
var statearr_31779_31820 = state_31744__$1;
(statearr_31779_31820[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (11))){
var inst_31668 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31780_31821 = state_31744__$1;
(statearr_31780_31821[(2)] = inst_31668);

(statearr_31780_31821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (9))){
var inst_31670 = figwheel.client.heads_up.clear.call(null);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(12),inst_31670);
} else {
if((state_val_31745 === (5))){
var inst_31661 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31744__$1 = state_31744;
var statearr_31781_31822 = state_31744__$1;
(statearr_31781_31822[(2)] = inst_31661);

(statearr_31781_31822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (14))){
var inst_31688 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31688)){
var statearr_31782_31823 = state_31744__$1;
(statearr_31782_31823[(1)] = (18));

} else {
var statearr_31783_31824 = state_31744__$1;
(statearr_31783_31824[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (26))){
var inst_31714 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31714)){
var statearr_31784_31825 = state_31744__$1;
(statearr_31784_31825[(1)] = (30));

} else {
var statearr_31785_31826 = state_31744__$1;
(statearr_31785_31826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (16))){
var inst_31680 = (state_31744[(2)]);
var inst_31681 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31682 = figwheel.client.heads_up.display_exception.call(null,inst_31681);
var state_31744__$1 = (function (){var statearr_31786 = state_31744;
(statearr_31786[(13)] = inst_31680);

return statearr_31786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(17),inst_31682);
} else {
if((state_val_31745 === (30))){
var inst_31716 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31717 = figwheel.client.heads_up.display_warning.call(null,inst_31716);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(33),inst_31717);
} else {
if((state_val_31745 === (10))){
var inst_31674 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31787_31827 = state_31744__$1;
(statearr_31787_31827[(2)] = inst_31674);

(statearr_31787_31827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (18))){
var inst_31690 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31691 = figwheel.client.heads_up.display_exception.call(null,inst_31690);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(21),inst_31691);
} else {
if((state_val_31745 === (37))){
var inst_31727 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31788_31828 = state_31744__$1;
(statearr_31788_31828[(2)] = inst_31727);

(statearr_31788_31828[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (8))){
var inst_31666 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(11),inst_31666);
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
});})(c__27651__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27561__auto__,c__27651__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____0 = (function (){
var statearr_31789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31789[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__);

(statearr_31789[(1)] = (1));

return statearr_31789;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____1 = (function (state_31744){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_31744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e31790){if((e31790 instanceof Object)){
var ex__27565__auto__ = e31790;
var statearr_31791_31829 = state_31744;
(statearr_31791_31829[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31830 = state_31744;
state_31744 = G__31830;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__ = function(state_31744){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____1.call(this,state_31744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__,msg_hist,msg_names,msg))
})();
var state__27653__auto__ = (function (){var statearr_31792 = f__27652__auto__.call(null);
(statearr_31792[(6)] = c__27651__auto__);

return statearr_31792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__,msg_hist,msg_names,msg))
);

return c__27651__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27651__auto___31859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto___31859,ch){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto___31859,ch){
return (function (state_31845){
var state_val_31846 = (state_31845[(1)]);
if((state_val_31846 === (1))){
var state_31845__$1 = state_31845;
var statearr_31847_31860 = state_31845__$1;
(statearr_31847_31860[(2)] = null);

(statearr_31847_31860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (2))){
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31845__$1,(4),ch);
} else {
if((state_val_31846 === (3))){
var inst_31843 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31845__$1,inst_31843);
} else {
if((state_val_31846 === (4))){
var inst_31833 = (state_31845[(7)]);
var inst_31833__$1 = (state_31845[(2)]);
var state_31845__$1 = (function (){var statearr_31848 = state_31845;
(statearr_31848[(7)] = inst_31833__$1);

return statearr_31848;
})();
if(cljs.core.truth_(inst_31833__$1)){
var statearr_31849_31861 = state_31845__$1;
(statearr_31849_31861[(1)] = (5));

} else {
var statearr_31850_31862 = state_31845__$1;
(statearr_31850_31862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (5))){
var inst_31833 = (state_31845[(7)]);
var inst_31835 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31833);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31845__$1,(8),inst_31835);
} else {
if((state_val_31846 === (6))){
var state_31845__$1 = state_31845;
var statearr_31851_31863 = state_31845__$1;
(statearr_31851_31863[(2)] = null);

(statearr_31851_31863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (7))){
var inst_31841 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31852_31864 = state_31845__$1;
(statearr_31852_31864[(2)] = inst_31841);

(statearr_31852_31864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (8))){
var inst_31837 = (state_31845[(2)]);
var state_31845__$1 = (function (){var statearr_31853 = state_31845;
(statearr_31853[(8)] = inst_31837);

return statearr_31853;
})();
var statearr_31854_31865 = state_31845__$1;
(statearr_31854_31865[(2)] = null);

(statearr_31854_31865[(1)] = (2));


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
});})(c__27651__auto___31859,ch))
;
return ((function (switch__27561__auto__,c__27651__auto___31859,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27562__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27562__auto____0 = (function (){
var statearr_31855 = [null,null,null,null,null,null,null,null,null];
(statearr_31855[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27562__auto__);

(statearr_31855[(1)] = (1));

return statearr_31855;
});
var figwheel$client$heads_up_plugin_$_state_machine__27562__auto____1 = (function (state_31845){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_31845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e31856){if((e31856 instanceof Object)){
var ex__27565__auto__ = e31856;
var statearr_31857_31866 = state_31845;
(statearr_31857_31866[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31867 = state_31845;
state_31845 = G__31867;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27562__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27562__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27562__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27562__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto___31859,ch))
})();
var state__27653__auto__ = (function (){var statearr_31858 = f__27652__auto__.call(null);
(statearr_31858[(6)] = c__27651__auto___31859);

return statearr_31858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto___31859,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__){
return (function (state_31873){
var state_val_31874 = (state_31873[(1)]);
if((state_val_31874 === (1))){
var inst_31868 = cljs.core.async.timeout.call(null,(3000));
var state_31873__$1 = state_31873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31873__$1,(2),inst_31868);
} else {
if((state_val_31874 === (2))){
var inst_31870 = (state_31873[(2)]);
var inst_31871 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31873__$1 = (function (){var statearr_31875 = state_31873;
(statearr_31875[(7)] = inst_31870);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31873__$1,inst_31871);
} else {
return null;
}
}
});})(c__27651__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____1 = (function (state_31873){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_31873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e31877){if((e31877 instanceof Object)){
var ex__27565__auto__ = e31877;
var statearr_31878_31880 = state_31873;
(statearr_31878_31880[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31881 = state_31873;
state_31873 = G__31881;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__ = function(state_31873){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____1.call(this,state_31873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27562__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__))
})();
var state__27653__auto__ = (function (){var statearr_31879 = f__27652__auto__.call(null);
(statearr_31879[(6)] = c__27651__auto__);

return statearr_31879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__))
);

return c__27651__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27651__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27651__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27652__auto__ = (function (){var switch__27561__auto__ = ((function (c__27651__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (1))){
var inst_31882 = cljs.core.async.timeout.call(null,(2000));
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31888__$1,(2),inst_31882);
} else {
if((state_val_31889 === (2))){
var inst_31884 = (state_31888[(2)]);
var inst_31885 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31886 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31885);
var state_31888__$1 = (function (){var statearr_31890 = state_31888;
(statearr_31890[(7)] = inst_31884);

return statearr_31890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31888__$1,inst_31886);
} else {
return null;
}
}
});})(c__27651__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27561__auto__,c__27651__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____0 = (function (){
var statearr_31891 = [null,null,null,null,null,null,null,null];
(statearr_31891[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__);

(statearr_31891[(1)] = (1));

return statearr_31891;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____1 = (function (state_31888){
while(true){
var ret_value__27563__auto__ = (function (){try{while(true){
var result__27564__auto__ = switch__27561__auto__.call(null,state_31888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27564__auto__;
}
break;
}
}catch (e31892){if((e31892 instanceof Object)){
var ex__27565__auto__ = e31892;
var statearr_31893_31895 = state_31888;
(statearr_31893_31895[(5)] = ex__27565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31896 = state_31888;
state_31888 = G__31896;
continue;
} else {
return ret_value__27563__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27562__auto__;
})()
;})(switch__27561__auto__,c__27651__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27653__auto__ = (function (){var statearr_31894 = f__27652__auto__.call(null);
(statearr_31894[(6)] = c__27651__auto__);

return statearr_31894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27653__auto__);
});})(c__27651__auto__,figwheel_version,temp__5457__auto__))
);

return c__27651__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31897){
var map__31898 = p__31897;
var map__31898__$1 = ((((!((map__31898 == null)))?(((((map__31898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);
var file = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31900 = "";
var G__31900__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31900),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31900);
var G__31900__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31900__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31900__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31900__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31900__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31901){
var map__31902 = p__31901;
var map__31902__$1 = ((((!((map__31902 == null)))?(((((map__31902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31902):map__31902);
var ed = map__31902__$1;
var formatted_exception = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31902__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31904_31908 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31905_31909 = null;
var count__31906_31910 = (0);
var i__31907_31911 = (0);
while(true){
if((i__31907_31911 < count__31906_31910)){
var msg_31912 = cljs.core._nth.call(null,chunk__31905_31909,i__31907_31911);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31912);


var G__31913 = seq__31904_31908;
var G__31914 = chunk__31905_31909;
var G__31915 = count__31906_31910;
var G__31916 = (i__31907_31911 + (1));
seq__31904_31908 = G__31913;
chunk__31905_31909 = G__31914;
count__31906_31910 = G__31915;
i__31907_31911 = G__31916;
continue;
} else {
var temp__5457__auto___31917 = cljs.core.seq.call(null,seq__31904_31908);
if(temp__5457__auto___31917){
var seq__31904_31918__$1 = temp__5457__auto___31917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31904_31918__$1)){
var c__4319__auto___31919 = cljs.core.chunk_first.call(null,seq__31904_31918__$1);
var G__31920 = cljs.core.chunk_rest.call(null,seq__31904_31918__$1);
var G__31921 = c__4319__auto___31919;
var G__31922 = cljs.core.count.call(null,c__4319__auto___31919);
var G__31923 = (0);
seq__31904_31908 = G__31920;
chunk__31905_31909 = G__31921;
count__31906_31910 = G__31922;
i__31907_31911 = G__31923;
continue;
} else {
var msg_31924 = cljs.core.first.call(null,seq__31904_31918__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31924);


var G__31925 = cljs.core.next.call(null,seq__31904_31918__$1);
var G__31926 = null;
var G__31927 = (0);
var G__31928 = (0);
seq__31904_31908 = G__31925;
chunk__31905_31909 = G__31926;
count__31906_31910 = G__31927;
i__31907_31911 = G__31928;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31929){
var map__31930 = p__31929;
var map__31930__$1 = ((((!((map__31930 == null)))?(((((map__31930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31930):map__31930);
var w = map__31930__$1;
var message = cljs.core.get.call(null,map__31930__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31932 = cljs.core.seq.call(null,plugins);
var chunk__31933 = null;
var count__31934 = (0);
var i__31935 = (0);
while(true){
if((i__31935 < count__31934)){
var vec__31936 = cljs.core._nth.call(null,chunk__31933,i__31935);
var k = cljs.core.nth.call(null,vec__31936,(0),null);
var plugin = cljs.core.nth.call(null,vec__31936,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31942 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31932,chunk__31933,count__31934,i__31935,pl_31942,vec__31936,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31942.call(null,msg_hist);
});})(seq__31932,chunk__31933,count__31934,i__31935,pl_31942,vec__31936,k,plugin))
);
} else {
}


var G__31943 = seq__31932;
var G__31944 = chunk__31933;
var G__31945 = count__31934;
var G__31946 = (i__31935 + (1));
seq__31932 = G__31943;
chunk__31933 = G__31944;
count__31934 = G__31945;
i__31935 = G__31946;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31932);
if(temp__5457__auto__){
var seq__31932__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31932__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31932__$1);
var G__31947 = cljs.core.chunk_rest.call(null,seq__31932__$1);
var G__31948 = c__4319__auto__;
var G__31949 = cljs.core.count.call(null,c__4319__auto__);
var G__31950 = (0);
seq__31932 = G__31947;
chunk__31933 = G__31948;
count__31934 = G__31949;
i__31935 = G__31950;
continue;
} else {
var vec__31939 = cljs.core.first.call(null,seq__31932__$1);
var k = cljs.core.nth.call(null,vec__31939,(0),null);
var plugin = cljs.core.nth.call(null,vec__31939,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31951 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31932,chunk__31933,count__31934,i__31935,pl_31951,vec__31939,k,plugin,seq__31932__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31951.call(null,msg_hist);
});})(seq__31932,chunk__31933,count__31934,i__31935,pl_31951,vec__31939,k,plugin,seq__31932__$1,temp__5457__auto__))
);
} else {
}


var G__31952 = cljs.core.next.call(null,seq__31932__$1);
var G__31953 = null;
var G__31954 = (0);
var G__31955 = (0);
seq__31932 = G__31952;
chunk__31933 = G__31953;
count__31934 = G__31954;
i__31935 = G__31955;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31957 = arguments.length;
switch (G__31957) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31958_31963 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31959_31964 = null;
var count__31960_31965 = (0);
var i__31961_31966 = (0);
while(true){
if((i__31961_31966 < count__31960_31965)){
var msg_31967 = cljs.core._nth.call(null,chunk__31959_31964,i__31961_31966);
figwheel.client.socket.handle_incoming_message.call(null,msg_31967);


var G__31968 = seq__31958_31963;
var G__31969 = chunk__31959_31964;
var G__31970 = count__31960_31965;
var G__31971 = (i__31961_31966 + (1));
seq__31958_31963 = G__31968;
chunk__31959_31964 = G__31969;
count__31960_31965 = G__31970;
i__31961_31966 = G__31971;
continue;
} else {
var temp__5457__auto___31972 = cljs.core.seq.call(null,seq__31958_31963);
if(temp__5457__auto___31972){
var seq__31958_31973__$1 = temp__5457__auto___31972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31958_31973__$1)){
var c__4319__auto___31974 = cljs.core.chunk_first.call(null,seq__31958_31973__$1);
var G__31975 = cljs.core.chunk_rest.call(null,seq__31958_31973__$1);
var G__31976 = c__4319__auto___31974;
var G__31977 = cljs.core.count.call(null,c__4319__auto___31974);
var G__31978 = (0);
seq__31958_31963 = G__31975;
chunk__31959_31964 = G__31976;
count__31960_31965 = G__31977;
i__31961_31966 = G__31978;
continue;
} else {
var msg_31979 = cljs.core.first.call(null,seq__31958_31973__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31979);


var G__31980 = cljs.core.next.call(null,seq__31958_31973__$1);
var G__31981 = null;
var G__31982 = (0);
var G__31983 = (0);
seq__31958_31963 = G__31980;
chunk__31959_31964 = G__31981;
count__31960_31965 = G__31982;
i__31961_31966 = G__31983;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31988 = arguments.length;
var i__4500__auto___31989 = (0);
while(true){
if((i__4500__auto___31989 < len__4499__auto___31988)){
args__4502__auto__.push((arguments[i__4500__auto___31989]));

var G__31990 = (i__4500__auto___31989 + (1));
i__4500__auto___31989 = G__31990;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31985){
var map__31986 = p__31985;
var map__31986__$1 = ((((!((map__31986 == null)))?(((((map__31986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);
var opts = map__31986__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31984){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31984));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31991){if((e31991 instanceof Error)){
var e = e31991;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31991;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31992){
var map__31993 = p__31992;
var map__31993__$1 = ((((!((map__31993 == null)))?(((((map__31993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31993):map__31993);
var msg_name = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557580562309
