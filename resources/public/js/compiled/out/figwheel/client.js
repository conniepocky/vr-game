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
}catch (e38640){if((e38640 instanceof Error)){
var e = e38640;
return "Error: Unable to stringify";
} else {
throw e38640;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38643 = arguments.length;
switch (G__38643) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38641_SHARP_){
if(typeof p1__38641_SHARP_ === 'string'){
return p1__38641_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38641_SHARP_);
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
var len__4499__auto___38646 = arguments.length;
var i__4500__auto___38647 = (0);
while(true){
if((i__4500__auto___38647 < len__4499__auto___38646)){
args__4502__auto__.push((arguments[i__4500__auto___38647]));

var G__38648 = (i__4500__auto___38647 + (1));
i__4500__auto___38647 = G__38648;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38645){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38645));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38650 = arguments.length;
var i__4500__auto___38651 = (0);
while(true){
if((i__4500__auto___38651 < len__4499__auto___38650)){
args__4502__auto__.push((arguments[i__4500__auto___38651]));

var G__38652 = (i__4500__auto___38651 + (1));
i__4500__auto___38651 = G__38652;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38649){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38649));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38653){
var map__38654 = p__38653;
var map__38654__$1 = ((((!((map__38654 == null)))?(((((map__38654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38654):map__38654);
var message = cljs.core.get.call(null,map__38654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38654__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30792__auto___38733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___38733,ch){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___38733,ch){
return (function (state_38705){
var state_val_38706 = (state_38705[(1)]);
if((state_val_38706 === (7))){
var inst_38701 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
var statearr_38707_38734 = state_38705__$1;
(statearr_38707_38734[(2)] = inst_38701);

(statearr_38707_38734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (1))){
var state_38705__$1 = state_38705;
var statearr_38708_38735 = state_38705__$1;
(statearr_38708_38735[(2)] = null);

(statearr_38708_38735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (4))){
var inst_38658 = (state_38705[(7)]);
var inst_38658__$1 = (state_38705[(2)]);
var state_38705__$1 = (function (){var statearr_38709 = state_38705;
(statearr_38709[(7)] = inst_38658__$1);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38658__$1)){
var statearr_38710_38736 = state_38705__$1;
(statearr_38710_38736[(1)] = (5));

} else {
var statearr_38711_38737 = state_38705__$1;
(statearr_38711_38737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (15))){
var inst_38665 = (state_38705[(8)]);
var inst_38680 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38665);
var inst_38681 = cljs.core.first.call(null,inst_38680);
var inst_38682 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38681);
var inst_38683 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38682)].join('');
var inst_38684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38683);
var state_38705__$1 = state_38705;
var statearr_38712_38738 = state_38705__$1;
(statearr_38712_38738[(2)] = inst_38684);

(statearr_38712_38738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (13))){
var inst_38689 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
var statearr_38713_38739 = state_38705__$1;
(statearr_38713_38739[(2)] = inst_38689);

(statearr_38713_38739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (6))){
var state_38705__$1 = state_38705;
var statearr_38714_38740 = state_38705__$1;
(statearr_38714_38740[(2)] = null);

(statearr_38714_38740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (17))){
var inst_38687 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
var statearr_38715_38741 = state_38705__$1;
(statearr_38715_38741[(2)] = inst_38687);

(statearr_38715_38741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (3))){
var inst_38703 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38705__$1,inst_38703);
} else {
if((state_val_38706 === (12))){
var inst_38664 = (state_38705[(9)]);
var inst_38678 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38664,opts);
var state_38705__$1 = state_38705;
if(cljs.core.truth_(inst_38678)){
var statearr_38716_38742 = state_38705__$1;
(statearr_38716_38742[(1)] = (15));

} else {
var statearr_38717_38743 = state_38705__$1;
(statearr_38717_38743[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (2))){
var state_38705__$1 = state_38705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38705__$1,(4),ch);
} else {
if((state_val_38706 === (11))){
var inst_38665 = (state_38705[(8)]);
var inst_38670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38671 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38665);
var inst_38672 = cljs.core.async.timeout.call(null,(1000));
var inst_38673 = [inst_38671,inst_38672];
var inst_38674 = (new cljs.core.PersistentVector(null,2,(5),inst_38670,inst_38673,null));
var state_38705__$1 = state_38705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38705__$1,(14),inst_38674);
} else {
if((state_val_38706 === (9))){
var inst_38665 = (state_38705[(8)]);
var inst_38691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38692 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38665);
var inst_38693 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38692);
var inst_38694 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38693)].join('');
var inst_38695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38694);
var state_38705__$1 = (function (){var statearr_38718 = state_38705;
(statearr_38718[(10)] = inst_38691);

return statearr_38718;
})();
var statearr_38719_38744 = state_38705__$1;
(statearr_38719_38744[(2)] = inst_38695);

(statearr_38719_38744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (5))){
var inst_38658 = (state_38705[(7)]);
var inst_38660 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38661 = (new cljs.core.PersistentArrayMap(null,2,inst_38660,null));
var inst_38662 = (new cljs.core.PersistentHashSet(null,inst_38661,null));
var inst_38663 = figwheel.client.focus_msgs.call(null,inst_38662,inst_38658);
var inst_38664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38663);
var inst_38665 = cljs.core.first.call(null,inst_38663);
var inst_38666 = figwheel.client.autoload_QMARK_.call(null);
var state_38705__$1 = (function (){var statearr_38720 = state_38705;
(statearr_38720[(8)] = inst_38665);

(statearr_38720[(9)] = inst_38664);

return statearr_38720;
})();
if(cljs.core.truth_(inst_38666)){
var statearr_38721_38745 = state_38705__$1;
(statearr_38721_38745[(1)] = (8));

} else {
var statearr_38722_38746 = state_38705__$1;
(statearr_38722_38746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (14))){
var inst_38676 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
var statearr_38723_38747 = state_38705__$1;
(statearr_38723_38747[(2)] = inst_38676);

(statearr_38723_38747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (16))){
var state_38705__$1 = state_38705;
var statearr_38724_38748 = state_38705__$1;
(statearr_38724_38748[(2)] = null);

(statearr_38724_38748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (10))){
var inst_38697 = (state_38705[(2)]);
var state_38705__$1 = (function (){var statearr_38725 = state_38705;
(statearr_38725[(11)] = inst_38697);

return statearr_38725;
})();
var statearr_38726_38749 = state_38705__$1;
(statearr_38726_38749[(2)] = null);

(statearr_38726_38749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (8))){
var inst_38664 = (state_38705[(9)]);
var inst_38668 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38664,opts);
var state_38705__$1 = state_38705;
if(cljs.core.truth_(inst_38668)){
var statearr_38727_38750 = state_38705__$1;
(statearr_38727_38750[(1)] = (11));

} else {
var statearr_38728_38751 = state_38705__$1;
(statearr_38728_38751[(1)] = (12));

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
});})(c__30792__auto___38733,ch))
;
return ((function (switch__30635__auto__,c__30792__auto___38733,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____0 = (function (){
var statearr_38729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38729[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__);

(statearr_38729[(1)] = (1));

return statearr_38729;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____1 = (function (state_38705){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_38705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e38730){if((e38730 instanceof Object)){
var ex__30639__auto__ = e38730;
var statearr_38731_38752 = state_38705;
(statearr_38731_38752[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38753 = state_38705;
state_38705 = G__38753;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__ = function(state_38705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____1.call(this,state_38705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30636__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___38733,ch))
})();
var state__30794__auto__ = (function (){var statearr_38732 = f__30793__auto__.call(null);
(statearr_38732[(6)] = c__30792__auto___38733);

return statearr_38732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___38733,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38754_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38754_SHARP_));
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
var base_path_38758 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38758){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38757 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38756,_STAR_print_fn_STAR_38757,sb,base_path_38758){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_38756,_STAR_print_fn_STAR_38757,sb,base_path_38758))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38757;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38756;
}}catch (e38755){if((e38755 instanceof Error)){
var e = e38755;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38758], null));
} else {
var e = e38755;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38758))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38759){
var map__38760 = p__38759;
var map__38760__$1 = ((((!((map__38760 == null)))?(((((map__38760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38760):map__38760);
var opts = map__38760__$1;
var build_id = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38760,map__38760__$1,opts,build_id){
return (function (p__38762){
var vec__38763 = p__38762;
var seq__38764 = cljs.core.seq.call(null,vec__38763);
var first__38765 = cljs.core.first.call(null,seq__38764);
var seq__38764__$1 = cljs.core.next.call(null,seq__38764);
var map__38766 = first__38765;
var map__38766__$1 = ((((!((map__38766 == null)))?(((((map__38766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38766):map__38766);
var msg = map__38766__$1;
var msg_name = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38764__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38763,seq__38764,first__38765,seq__38764__$1,map__38766,map__38766__$1,msg,msg_name,_,map__38760,map__38760__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38763,seq__38764,first__38765,seq__38764__$1,map__38766,map__38766__$1,msg,msg_name,_,map__38760,map__38760__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38760,map__38760__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38768){
var vec__38769 = p__38768;
var seq__38770 = cljs.core.seq.call(null,vec__38769);
var first__38771 = cljs.core.first.call(null,seq__38770);
var seq__38770__$1 = cljs.core.next.call(null,seq__38770);
var map__38772 = first__38771;
var map__38772__$1 = ((((!((map__38772 == null)))?(((((map__38772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38772):map__38772);
var msg = map__38772__$1;
var msg_name = cljs.core.get.call(null,map__38772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38770__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38774){
var map__38775 = p__38774;
var map__38775__$1 = ((((!((map__38775 == null)))?(((((map__38775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38775):map__38775);
var on_compile_warning = cljs.core.get.call(null,map__38775__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38775__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38775,map__38775__$1,on_compile_warning,on_compile_fail){
return (function (p__38777){
var vec__38778 = p__38777;
var seq__38779 = cljs.core.seq.call(null,vec__38778);
var first__38780 = cljs.core.first.call(null,seq__38779);
var seq__38779__$1 = cljs.core.next.call(null,seq__38779);
var map__38781 = first__38780;
var map__38781__$1 = ((((!((map__38781 == null)))?(((((map__38781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38781):map__38781);
var msg = map__38781__$1;
var msg_name = cljs.core.get.call(null,map__38781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38779__$1;
var pred__38783 = cljs.core._EQ_;
var expr__38784 = msg_name;
if(cljs.core.truth_(pred__38783.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38784))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38783.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38784))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38775,map__38775__$1,on_compile_warning,on_compile_fail))
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,msg_hist,msg_names,msg){
return (function (state_38873){
var state_val_38874 = (state_38873[(1)]);
if((state_val_38874 === (7))){
var inst_38793 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38793)){
var statearr_38875_38922 = state_38873__$1;
(statearr_38875_38922[(1)] = (8));

} else {
var statearr_38876_38923 = state_38873__$1;
(statearr_38876_38923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (20))){
var inst_38867 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38877_38924 = state_38873__$1;
(statearr_38877_38924[(2)] = inst_38867);

(statearr_38877_38924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (27))){
var inst_38863 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38878_38925 = state_38873__$1;
(statearr_38878_38925[(2)] = inst_38863);

(statearr_38878_38925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (1))){
var inst_38786 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38786)){
var statearr_38879_38926 = state_38873__$1;
(statearr_38879_38926[(1)] = (2));

} else {
var statearr_38880_38927 = state_38873__$1;
(statearr_38880_38927[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (24))){
var inst_38865 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38881_38928 = state_38873__$1;
(statearr_38881_38928[(2)] = inst_38865);

(statearr_38881_38928[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (4))){
var inst_38871 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38873__$1,inst_38871);
} else {
if((state_val_38874 === (15))){
var inst_38869 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38882_38929 = state_38873__$1;
(statearr_38882_38929[(2)] = inst_38869);

(statearr_38882_38929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (21))){
var inst_38822 = (state_38873[(2)]);
var inst_38823 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38824 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38823);
var state_38873__$1 = (function (){var statearr_38883 = state_38873;
(statearr_38883[(7)] = inst_38822);

return statearr_38883;
})();
var statearr_38884_38930 = state_38873__$1;
(statearr_38884_38930[(2)] = inst_38824);

(statearr_38884_38930[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (31))){
var inst_38852 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38852)){
var statearr_38885_38931 = state_38873__$1;
(statearr_38885_38931[(1)] = (34));

} else {
var statearr_38886_38932 = state_38873__$1;
(statearr_38886_38932[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (32))){
var inst_38861 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38887_38933 = state_38873__$1;
(statearr_38887_38933[(2)] = inst_38861);

(statearr_38887_38933[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (33))){
var inst_38848 = (state_38873[(2)]);
var inst_38849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38850 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38849);
var state_38873__$1 = (function (){var statearr_38888 = state_38873;
(statearr_38888[(8)] = inst_38848);

return statearr_38888;
})();
var statearr_38889_38934 = state_38873__$1;
(statearr_38889_38934[(2)] = inst_38850);

(statearr_38889_38934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (13))){
var inst_38807 = figwheel.client.heads_up.clear.call(null);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(16),inst_38807);
} else {
if((state_val_38874 === (22))){
var inst_38828 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38829 = figwheel.client.heads_up.append_warning_message.call(null,inst_38828);
var state_38873__$1 = state_38873;
var statearr_38890_38935 = state_38873__$1;
(statearr_38890_38935[(2)] = inst_38829);

(statearr_38890_38935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (36))){
var inst_38859 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38891_38936 = state_38873__$1;
(statearr_38891_38936[(2)] = inst_38859);

(statearr_38891_38936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (29))){
var inst_38839 = (state_38873[(2)]);
var inst_38840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38841 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38840);
var state_38873__$1 = (function (){var statearr_38892 = state_38873;
(statearr_38892[(9)] = inst_38839);

return statearr_38892;
})();
var statearr_38893_38937 = state_38873__$1;
(statearr_38893_38937[(2)] = inst_38841);

(statearr_38893_38937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (6))){
var inst_38788 = (state_38873[(10)]);
var state_38873__$1 = state_38873;
var statearr_38894_38938 = state_38873__$1;
(statearr_38894_38938[(2)] = inst_38788);

(statearr_38894_38938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (28))){
var inst_38835 = (state_38873[(2)]);
var inst_38836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38837 = figwheel.client.heads_up.display_warning.call(null,inst_38836);
var state_38873__$1 = (function (){var statearr_38895 = state_38873;
(statearr_38895[(11)] = inst_38835);

return statearr_38895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(29),inst_38837);
} else {
if((state_val_38874 === (25))){
var inst_38833 = figwheel.client.heads_up.clear.call(null);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(28),inst_38833);
} else {
if((state_val_38874 === (34))){
var inst_38854 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(37),inst_38854);
} else {
if((state_val_38874 === (17))){
var inst_38813 = (state_38873[(2)]);
var inst_38814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38815 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38814);
var state_38873__$1 = (function (){var statearr_38896 = state_38873;
(statearr_38896[(12)] = inst_38813);

return statearr_38896;
})();
var statearr_38897_38939 = state_38873__$1;
(statearr_38897_38939[(2)] = inst_38815);

(statearr_38897_38939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (3))){
var inst_38805 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38805)){
var statearr_38898_38940 = state_38873__$1;
(statearr_38898_38940[(1)] = (13));

} else {
var statearr_38899_38941 = state_38873__$1;
(statearr_38899_38941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (12))){
var inst_38801 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38900_38942 = state_38873__$1;
(statearr_38900_38942[(2)] = inst_38801);

(statearr_38900_38942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (2))){
var inst_38788 = (state_38873[(10)]);
var inst_38788__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38873__$1 = (function (){var statearr_38901 = state_38873;
(statearr_38901[(10)] = inst_38788__$1);

return statearr_38901;
})();
if(cljs.core.truth_(inst_38788__$1)){
var statearr_38902_38943 = state_38873__$1;
(statearr_38902_38943[(1)] = (5));

} else {
var statearr_38903_38944 = state_38873__$1;
(statearr_38903_38944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (23))){
var inst_38831 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38831)){
var statearr_38904_38945 = state_38873__$1;
(statearr_38904_38945[(1)] = (25));

} else {
var statearr_38905_38946 = state_38873__$1;
(statearr_38905_38946[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (35))){
var state_38873__$1 = state_38873;
var statearr_38906_38947 = state_38873__$1;
(statearr_38906_38947[(2)] = null);

(statearr_38906_38947[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (19))){
var inst_38826 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38826)){
var statearr_38907_38948 = state_38873__$1;
(statearr_38907_38948[(1)] = (22));

} else {
var statearr_38908_38949 = state_38873__$1;
(statearr_38908_38949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (11))){
var inst_38797 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38909_38950 = state_38873__$1;
(statearr_38909_38950[(2)] = inst_38797);

(statearr_38909_38950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (9))){
var inst_38799 = figwheel.client.heads_up.clear.call(null);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(12),inst_38799);
} else {
if((state_val_38874 === (5))){
var inst_38790 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38873__$1 = state_38873;
var statearr_38910_38951 = state_38873__$1;
(statearr_38910_38951[(2)] = inst_38790);

(statearr_38910_38951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (14))){
var inst_38817 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38817)){
var statearr_38911_38952 = state_38873__$1;
(statearr_38911_38952[(1)] = (18));

} else {
var statearr_38912_38953 = state_38873__$1;
(statearr_38912_38953[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (26))){
var inst_38843 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38873__$1 = state_38873;
if(cljs.core.truth_(inst_38843)){
var statearr_38913_38954 = state_38873__$1;
(statearr_38913_38954[(1)] = (30));

} else {
var statearr_38914_38955 = state_38873__$1;
(statearr_38914_38955[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (16))){
var inst_38809 = (state_38873[(2)]);
var inst_38810 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38811 = figwheel.client.heads_up.display_exception.call(null,inst_38810);
var state_38873__$1 = (function (){var statearr_38915 = state_38873;
(statearr_38915[(13)] = inst_38809);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(17),inst_38811);
} else {
if((state_val_38874 === (30))){
var inst_38845 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38846 = figwheel.client.heads_up.display_warning.call(null,inst_38845);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(33),inst_38846);
} else {
if((state_val_38874 === (10))){
var inst_38803 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38916_38956 = state_38873__$1;
(statearr_38916_38956[(2)] = inst_38803);

(statearr_38916_38956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (18))){
var inst_38819 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38820 = figwheel.client.heads_up.display_exception.call(null,inst_38819);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(21),inst_38820);
} else {
if((state_val_38874 === (37))){
var inst_38856 = (state_38873[(2)]);
var state_38873__$1 = state_38873;
var statearr_38917_38957 = state_38873__$1;
(statearr_38917_38957[(2)] = inst_38856);

(statearr_38917_38957[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38874 === (8))){
var inst_38795 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38873__$1 = state_38873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38873__$1,(11),inst_38795);
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
});})(c__30792__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30635__auto__,c__30792__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____0 = (function (){
var statearr_38918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38918[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__);

(statearr_38918[(1)] = (1));

return statearr_38918;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____1 = (function (state_38873){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_38873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e38919){if((e38919 instanceof Object)){
var ex__30639__auto__ = e38919;
var statearr_38920_38958 = state_38873;
(statearr_38920_38958[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38959 = state_38873;
state_38873 = G__38959;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__ = function(state_38873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____1.call(this,state_38873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,msg_hist,msg_names,msg))
})();
var state__30794__auto__ = (function (){var statearr_38921 = f__30793__auto__.call(null);
(statearr_38921[(6)] = c__30792__auto__);

return statearr_38921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,msg_hist,msg_names,msg))
);

return c__30792__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30792__auto___38988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto___38988,ch){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto___38988,ch){
return (function (state_38974){
var state_val_38975 = (state_38974[(1)]);
if((state_val_38975 === (1))){
var state_38974__$1 = state_38974;
var statearr_38976_38989 = state_38974__$1;
(statearr_38976_38989[(2)] = null);

(statearr_38976_38989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (2))){
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38974__$1,(4),ch);
} else {
if((state_val_38975 === (3))){
var inst_38972 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38974__$1,inst_38972);
} else {
if((state_val_38975 === (4))){
var inst_38962 = (state_38974[(7)]);
var inst_38962__$1 = (state_38974[(2)]);
var state_38974__$1 = (function (){var statearr_38977 = state_38974;
(statearr_38977[(7)] = inst_38962__$1);

return statearr_38977;
})();
if(cljs.core.truth_(inst_38962__$1)){
var statearr_38978_38990 = state_38974__$1;
(statearr_38978_38990[(1)] = (5));

} else {
var statearr_38979_38991 = state_38974__$1;
(statearr_38979_38991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (5))){
var inst_38962 = (state_38974[(7)]);
var inst_38964 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38962);
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38974__$1,(8),inst_38964);
} else {
if((state_val_38975 === (6))){
var state_38974__$1 = state_38974;
var statearr_38980_38992 = state_38974__$1;
(statearr_38980_38992[(2)] = null);

(statearr_38980_38992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (7))){
var inst_38970 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_38981_38993 = state_38974__$1;
(statearr_38981_38993[(2)] = inst_38970);

(statearr_38981_38993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (8))){
var inst_38966 = (state_38974[(2)]);
var state_38974__$1 = (function (){var statearr_38982 = state_38974;
(statearr_38982[(8)] = inst_38966);

return statearr_38982;
})();
var statearr_38983_38994 = state_38974__$1;
(statearr_38983_38994[(2)] = null);

(statearr_38983_38994[(1)] = (2));


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
});})(c__30792__auto___38988,ch))
;
return ((function (switch__30635__auto__,c__30792__auto___38988,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30636__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30636__auto____0 = (function (){
var statearr_38984 = [null,null,null,null,null,null,null,null,null];
(statearr_38984[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30636__auto__);

(statearr_38984[(1)] = (1));

return statearr_38984;
});
var figwheel$client$heads_up_plugin_$_state_machine__30636__auto____1 = (function (state_38974){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_38974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e38985){if((e38985 instanceof Object)){
var ex__30639__auto__ = e38985;
var statearr_38986_38995 = state_38974;
(statearr_38986_38995[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38996 = state_38974;
state_38974 = G__38996;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30636__auto__ = function(state_38974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30636__auto____1.call(this,state_38974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30636__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30636__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto___38988,ch))
})();
var state__30794__auto__ = (function (){var statearr_38987 = f__30793__auto__.call(null);
(statearr_38987[(6)] = c__30792__auto___38988);

return statearr_38987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto___38988,ch))
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__){
return (function (state_39002){
var state_val_39003 = (state_39002[(1)]);
if((state_val_39003 === (1))){
var inst_38997 = cljs.core.async.timeout.call(null,(3000));
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39002__$1,(2),inst_38997);
} else {
if((state_val_39003 === (2))){
var inst_38999 = (state_39002[(2)]);
var inst_39000 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39002__$1 = (function (){var statearr_39004 = state_39002;
(statearr_39004[(7)] = inst_38999);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39002__$1,inst_39000);
} else {
return null;
}
}
});})(c__30792__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____0 = (function (){
var statearr_39005 = [null,null,null,null,null,null,null,null];
(statearr_39005[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__);

(statearr_39005[(1)] = (1));

return statearr_39005;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____1 = (function (state_39002){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_39002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e39006){if((e39006 instanceof Object)){
var ex__30639__auto__ = e39006;
var statearr_39007_39009 = state_39002;
(statearr_39007_39009[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39010 = state_39002;
state_39002 = G__39010;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__ = function(state_39002){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____1.call(this,state_39002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30636__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__))
})();
var state__30794__auto__ = (function (){var statearr_39008 = f__30793__auto__.call(null);
(statearr_39008[(6)] = c__30792__auto__);

return statearr_39008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__))
);

return c__30792__auto__;
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
var c__30792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30792__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__30793__auto__ = (function (){var switch__30635__auto__ = ((function (c__30792__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39017){
var state_val_39018 = (state_39017[(1)]);
if((state_val_39018 === (1))){
var inst_39011 = cljs.core.async.timeout.call(null,(2000));
var state_39017__$1 = state_39017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39017__$1,(2),inst_39011);
} else {
if((state_val_39018 === (2))){
var inst_39013 = (state_39017[(2)]);
var inst_39014 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39015 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39014);
var state_39017__$1 = (function (){var statearr_39019 = state_39017;
(statearr_39019[(7)] = inst_39013);

return statearr_39019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39017__$1,inst_39015);
} else {
return null;
}
}
});})(c__30792__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__30635__auto__,c__30792__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____0 = (function (){
var statearr_39020 = [null,null,null,null,null,null,null,null];
(statearr_39020[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__);

(statearr_39020[(1)] = (1));

return statearr_39020;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____1 = (function (state_39017){
while(true){
var ret_value__30637__auto__ = (function (){try{while(true){
var result__30638__auto__ = switch__30635__auto__.call(null,state_39017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30638__auto__;
}
break;
}
}catch (e39021){if((e39021 instanceof Object)){
var ex__30639__auto__ = e39021;
var statearr_39022_39024 = state_39017;
(statearr_39022_39024[(5)] = ex__30639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39025 = state_39017;
state_39017 = G__39025;
continue;
} else {
return ret_value__30637__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__ = function(state_39017){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____1.call(this,state_39017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30636__auto__;
})()
;})(switch__30635__auto__,c__30792__auto__,figwheel_version,temp__5457__auto__))
})();
var state__30794__auto__ = (function (){var statearr_39023 = f__30793__auto__.call(null);
(statearr_39023[(6)] = c__30792__auto__);

return statearr_39023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30794__auto__);
});})(c__30792__auto__,figwheel_version,temp__5457__auto__))
);

return c__30792__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39026){
var map__39027 = p__39026;
var map__39027__$1 = ((((!((map__39027 == null)))?(((((map__39027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39027):map__39027);
var file = cljs.core.get.call(null,map__39027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39027__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39027__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39029 = "";
var G__39029__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39029),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39029);
var G__39029__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39029__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39029__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39029__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39029__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39030){
var map__39031 = p__39030;
var map__39031__$1 = ((((!((map__39031 == null)))?(((((map__39031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var ed = map__39031__$1;
var formatted_exception = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39033_39037 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39034_39038 = null;
var count__39035_39039 = (0);
var i__39036_39040 = (0);
while(true){
if((i__39036_39040 < count__39035_39039)){
var msg_39041 = cljs.core._nth.call(null,chunk__39034_39038,i__39036_39040);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39041);


var G__39042 = seq__39033_39037;
var G__39043 = chunk__39034_39038;
var G__39044 = count__39035_39039;
var G__39045 = (i__39036_39040 + (1));
seq__39033_39037 = G__39042;
chunk__39034_39038 = G__39043;
count__39035_39039 = G__39044;
i__39036_39040 = G__39045;
continue;
} else {
var temp__5457__auto___39046 = cljs.core.seq.call(null,seq__39033_39037);
if(temp__5457__auto___39046){
var seq__39033_39047__$1 = temp__5457__auto___39046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39033_39047__$1)){
var c__4319__auto___39048 = cljs.core.chunk_first.call(null,seq__39033_39047__$1);
var G__39049 = cljs.core.chunk_rest.call(null,seq__39033_39047__$1);
var G__39050 = c__4319__auto___39048;
var G__39051 = cljs.core.count.call(null,c__4319__auto___39048);
var G__39052 = (0);
seq__39033_39037 = G__39049;
chunk__39034_39038 = G__39050;
count__39035_39039 = G__39051;
i__39036_39040 = G__39052;
continue;
} else {
var msg_39053 = cljs.core.first.call(null,seq__39033_39047__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39053);


var G__39054 = cljs.core.next.call(null,seq__39033_39047__$1);
var G__39055 = null;
var G__39056 = (0);
var G__39057 = (0);
seq__39033_39037 = G__39054;
chunk__39034_39038 = G__39055;
count__39035_39039 = G__39056;
i__39036_39040 = G__39057;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39058){
var map__39059 = p__39058;
var map__39059__$1 = ((((!((map__39059 == null)))?(((((map__39059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39059):map__39059);
var w = map__39059__$1;
var message = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39061 = cljs.core.seq.call(null,plugins);
var chunk__39062 = null;
var count__39063 = (0);
var i__39064 = (0);
while(true){
if((i__39064 < count__39063)){
var vec__39065 = cljs.core._nth.call(null,chunk__39062,i__39064);
var k = cljs.core.nth.call(null,vec__39065,(0),null);
var plugin = cljs.core.nth.call(null,vec__39065,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39071 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39061,chunk__39062,count__39063,i__39064,pl_39071,vec__39065,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39071.call(null,msg_hist);
});})(seq__39061,chunk__39062,count__39063,i__39064,pl_39071,vec__39065,k,plugin))
);
} else {
}


var G__39072 = seq__39061;
var G__39073 = chunk__39062;
var G__39074 = count__39063;
var G__39075 = (i__39064 + (1));
seq__39061 = G__39072;
chunk__39062 = G__39073;
count__39063 = G__39074;
i__39064 = G__39075;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39061);
if(temp__5457__auto__){
var seq__39061__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39061__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39061__$1);
var G__39076 = cljs.core.chunk_rest.call(null,seq__39061__$1);
var G__39077 = c__4319__auto__;
var G__39078 = cljs.core.count.call(null,c__4319__auto__);
var G__39079 = (0);
seq__39061 = G__39076;
chunk__39062 = G__39077;
count__39063 = G__39078;
i__39064 = G__39079;
continue;
} else {
var vec__39068 = cljs.core.first.call(null,seq__39061__$1);
var k = cljs.core.nth.call(null,vec__39068,(0),null);
var plugin = cljs.core.nth.call(null,vec__39068,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39080 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39061,chunk__39062,count__39063,i__39064,pl_39080,vec__39068,k,plugin,seq__39061__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39080.call(null,msg_hist);
});})(seq__39061,chunk__39062,count__39063,i__39064,pl_39080,vec__39068,k,plugin,seq__39061__$1,temp__5457__auto__))
);
} else {
}


var G__39081 = cljs.core.next.call(null,seq__39061__$1);
var G__39082 = null;
var G__39083 = (0);
var G__39084 = (0);
seq__39061 = G__39081;
chunk__39062 = G__39082;
count__39063 = G__39083;
i__39064 = G__39084;
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
var G__39086 = arguments.length;
switch (G__39086) {
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

var seq__39087_39092 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39088_39093 = null;
var count__39089_39094 = (0);
var i__39090_39095 = (0);
while(true){
if((i__39090_39095 < count__39089_39094)){
var msg_39096 = cljs.core._nth.call(null,chunk__39088_39093,i__39090_39095);
figwheel.client.socket.handle_incoming_message.call(null,msg_39096);


var G__39097 = seq__39087_39092;
var G__39098 = chunk__39088_39093;
var G__39099 = count__39089_39094;
var G__39100 = (i__39090_39095 + (1));
seq__39087_39092 = G__39097;
chunk__39088_39093 = G__39098;
count__39089_39094 = G__39099;
i__39090_39095 = G__39100;
continue;
} else {
var temp__5457__auto___39101 = cljs.core.seq.call(null,seq__39087_39092);
if(temp__5457__auto___39101){
var seq__39087_39102__$1 = temp__5457__auto___39101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39087_39102__$1)){
var c__4319__auto___39103 = cljs.core.chunk_first.call(null,seq__39087_39102__$1);
var G__39104 = cljs.core.chunk_rest.call(null,seq__39087_39102__$1);
var G__39105 = c__4319__auto___39103;
var G__39106 = cljs.core.count.call(null,c__4319__auto___39103);
var G__39107 = (0);
seq__39087_39092 = G__39104;
chunk__39088_39093 = G__39105;
count__39089_39094 = G__39106;
i__39090_39095 = G__39107;
continue;
} else {
var msg_39108 = cljs.core.first.call(null,seq__39087_39102__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39108);


var G__39109 = cljs.core.next.call(null,seq__39087_39102__$1);
var G__39110 = null;
var G__39111 = (0);
var G__39112 = (0);
seq__39087_39092 = G__39109;
chunk__39088_39093 = G__39110;
count__39089_39094 = G__39111;
i__39090_39095 = G__39112;
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
var len__4499__auto___39117 = arguments.length;
var i__4500__auto___39118 = (0);
while(true){
if((i__4500__auto___39118 < len__4499__auto___39117)){
args__4502__auto__.push((arguments[i__4500__auto___39118]));

var G__39119 = (i__4500__auto___39118 + (1));
i__4500__auto___39118 = G__39119;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39114){
var map__39115 = p__39114;
var map__39115__$1 = ((((!((map__39115 == null)))?(((((map__39115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39115):map__39115);
var opts = map__39115__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39113){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39113));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39120){if((e39120 instanceof Error)){
var e = e39120;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39120;

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
return (function (p__39121){
var map__39122 = p__39121;
var map__39122__$1 = ((((!((map__39122 == null)))?(((((map__39122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39122):map__39122);
var msg_name = cljs.core.get.call(null,map__39122__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557582901019
