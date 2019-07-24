// Compiled by ClojureScript 1.10.520 {}
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
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e56573){if((e56573 instanceof Error)){
var e = e56573;
return "Error: Unable to stringify";
} else {
throw e56573;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__56576 = arguments.length;
switch (G__56576) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__56574_SHARP_){
if(typeof p1__56574_SHARP_ === 'string'){
return p1__56574_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__56574_SHARP_);
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
var args__4736__auto__ = [];
var len__4730__auto___56579 = arguments.length;
var i__4731__auto___56580 = (0);
while(true){
if((i__4731__auto___56580 < len__4730__auto___56579)){
args__4736__auto__.push((arguments[i__4731__auto___56580]));

var G__56581 = (i__4731__auto___56580 + (1));
i__4731__auto___56580 = G__56581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56578));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56583 = arguments.length;
var i__4731__auto___56584 = (0);
while(true){
if((i__4731__auto___56584 < len__4730__auto___56583)){
args__4736__auto__.push((arguments[i__4731__auto___56584]));

var G__56585 = (i__4731__auto___56584 + (1));
i__4731__auto___56584 = G__56585;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56582));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56586){
var map__56587 = p__56586;
var map__56587__$1 = (((((!((map__56587 == null))))?(((((map__56587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56587):map__56587);
var message = cljs.core.get.call(null,map__56587__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56587__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
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
var c__50402__auto___56666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___56666,ch){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___56666,ch){
return (function (state_56638){
var state_val_56639 = (state_56638[(1)]);
if((state_val_56639 === (7))){
var inst_56634 = (state_56638[(2)]);
var state_56638__$1 = state_56638;
var statearr_56640_56667 = state_56638__$1;
(statearr_56640_56667[(2)] = inst_56634);

(statearr_56640_56667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (1))){
var state_56638__$1 = state_56638;
var statearr_56641_56668 = state_56638__$1;
(statearr_56641_56668[(2)] = null);

(statearr_56641_56668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (4))){
var inst_56591 = (state_56638[(7)]);
var inst_56591__$1 = (state_56638[(2)]);
var state_56638__$1 = (function (){var statearr_56642 = state_56638;
(statearr_56642[(7)] = inst_56591__$1);

return statearr_56642;
})();
if(cljs.core.truth_(inst_56591__$1)){
var statearr_56643_56669 = state_56638__$1;
(statearr_56643_56669[(1)] = (5));

} else {
var statearr_56644_56670 = state_56638__$1;
(statearr_56644_56670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (15))){
var inst_56598 = (state_56638[(8)]);
var inst_56613 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56598);
var inst_56614 = cljs.core.first.call(null,inst_56613);
var inst_56615 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56614);
var inst_56616 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56615)].join('');
var inst_56617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56616);
var state_56638__$1 = state_56638;
var statearr_56645_56671 = state_56638__$1;
(statearr_56645_56671[(2)] = inst_56617);

(statearr_56645_56671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (13))){
var inst_56622 = (state_56638[(2)]);
var state_56638__$1 = state_56638;
var statearr_56646_56672 = state_56638__$1;
(statearr_56646_56672[(2)] = inst_56622);

(statearr_56646_56672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (6))){
var state_56638__$1 = state_56638;
var statearr_56647_56673 = state_56638__$1;
(statearr_56647_56673[(2)] = null);

(statearr_56647_56673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (17))){
var inst_56620 = (state_56638[(2)]);
var state_56638__$1 = state_56638;
var statearr_56648_56674 = state_56638__$1;
(statearr_56648_56674[(2)] = inst_56620);

(statearr_56648_56674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (3))){
var inst_56636 = (state_56638[(2)]);
var state_56638__$1 = state_56638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56638__$1,inst_56636);
} else {
if((state_val_56639 === (12))){
var inst_56597 = (state_56638[(9)]);
var inst_56611 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56597,opts);
var state_56638__$1 = state_56638;
if(inst_56611){
var statearr_56649_56675 = state_56638__$1;
(statearr_56649_56675[(1)] = (15));

} else {
var statearr_56650_56676 = state_56638__$1;
(statearr_56650_56676[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (2))){
var state_56638__$1 = state_56638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56638__$1,(4),ch);
} else {
if((state_val_56639 === (11))){
var inst_56598 = (state_56638[(8)]);
var inst_56603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56604 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56598);
var inst_56605 = cljs.core.async.timeout.call(null,(1000));
var inst_56606 = [inst_56604,inst_56605];
var inst_56607 = (new cljs.core.PersistentVector(null,2,(5),inst_56603,inst_56606,null));
var state_56638__$1 = state_56638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56638__$1,(14),inst_56607);
} else {
if((state_val_56639 === (9))){
var inst_56598 = (state_56638[(8)]);
var inst_56624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56625 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56598);
var inst_56626 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56625);
var inst_56627 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56626)].join('');
var inst_56628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56627);
var state_56638__$1 = (function (){var statearr_56651 = state_56638;
(statearr_56651[(10)] = inst_56624);

return statearr_56651;
})();
var statearr_56652_56677 = state_56638__$1;
(statearr_56652_56677[(2)] = inst_56628);

(statearr_56652_56677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (5))){
var inst_56591 = (state_56638[(7)]);
var inst_56593 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56594 = (new cljs.core.PersistentArrayMap(null,2,inst_56593,null));
var inst_56595 = (new cljs.core.PersistentHashSet(null,inst_56594,null));
var inst_56596 = figwheel.client.focus_msgs.call(null,inst_56595,inst_56591);
var inst_56597 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56596);
var inst_56598 = cljs.core.first.call(null,inst_56596);
var inst_56599 = figwheel.client.autoload_QMARK_.call(null);
var state_56638__$1 = (function (){var statearr_56653 = state_56638;
(statearr_56653[(9)] = inst_56597);

(statearr_56653[(8)] = inst_56598);

return statearr_56653;
})();
if(cljs.core.truth_(inst_56599)){
var statearr_56654_56678 = state_56638__$1;
(statearr_56654_56678[(1)] = (8));

} else {
var statearr_56655_56679 = state_56638__$1;
(statearr_56655_56679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (14))){
var inst_56609 = (state_56638[(2)]);
var state_56638__$1 = state_56638;
var statearr_56656_56680 = state_56638__$1;
(statearr_56656_56680[(2)] = inst_56609);

(statearr_56656_56680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (16))){
var state_56638__$1 = state_56638;
var statearr_56657_56681 = state_56638__$1;
(statearr_56657_56681[(2)] = null);

(statearr_56657_56681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (10))){
var inst_56630 = (state_56638[(2)]);
var state_56638__$1 = (function (){var statearr_56658 = state_56638;
(statearr_56658[(11)] = inst_56630);

return statearr_56658;
})();
var statearr_56659_56682 = state_56638__$1;
(statearr_56659_56682[(2)] = null);

(statearr_56659_56682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56639 === (8))){
var inst_56597 = (state_56638[(9)]);
var inst_56601 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56597,opts);
var state_56638__$1 = state_56638;
if(cljs.core.truth_(inst_56601)){
var statearr_56660_56683 = state_56638__$1;
(statearr_56660_56683[(1)] = (11));

} else {
var statearr_56661_56684 = state_56638__$1;
(statearr_56661_56684[(1)] = (12));

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
});})(c__50402__auto___56666,ch))
;
return ((function (switch__50235__auto__,c__50402__auto___56666,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____0 = (function (){
var statearr_56662 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56662[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__);

(statearr_56662[(1)] = (1));

return statearr_56662;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____1 = (function (state_56638){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_56638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e56663){if((e56663 instanceof Object)){
var ex__50239__auto__ = e56663;
var statearr_56664_56685 = state_56638;
(statearr_56664_56685[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56686 = state_56638;
state_56638 = G__56686;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__ = function(state_56638){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____1.call(this,state_56638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50236__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___56666,ch))
})();
var state__50404__auto__ = (function (){var statearr_56665 = f__50403__auto__.call(null);
(statearr_56665[(6)] = c__50402__auto___56666);

return statearr_56665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___56666,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56687_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56687_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
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
var base_path_56693 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56693){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56691 = true;
var _STAR_print_fn_STAR__temp_val__56692 = ((function (_STAR_print_newline_STAR__orig_val__56689,_STAR_print_fn_STAR__orig_val__56690,_STAR_print_newline_STAR__temp_val__56691,sb,base_path_56693){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__56689,_STAR_print_fn_STAR__orig_val__56690,_STAR_print_newline_STAR__temp_val__56691,sb,base_path_56693))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56692;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56689;
}}catch (e56688){if((e56688 instanceof Error)){
var e = e56688;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56693], null));
} else {
var e = e56688;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_56693))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56694){
var map__56695 = p__56694;
var map__56695__$1 = (((((!((map__56695 == null))))?(((((map__56695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56695):map__56695);
var opts = map__56695__$1;
var build_id = cljs.core.get.call(null,map__56695__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56695,map__56695__$1,opts,build_id){
return (function (p__56697){
var vec__56698 = p__56697;
var seq__56699 = cljs.core.seq.call(null,vec__56698);
var first__56700 = cljs.core.first.call(null,seq__56699);
var seq__56699__$1 = cljs.core.next.call(null,seq__56699);
var map__56701 = first__56700;
var map__56701__$1 = (((((!((map__56701 == null))))?(((((map__56701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56701):map__56701);
var msg = map__56701__$1;
var msg_name = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56699__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56698,seq__56699,first__56700,seq__56699__$1,map__56701,map__56701__$1,msg,msg_name,_,map__56695,map__56695__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56698,seq__56699,first__56700,seq__56699__$1,map__56701,map__56701__$1,msg,msg_name,_,map__56695,map__56695__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56695,map__56695__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56703){
var vec__56704 = p__56703;
var seq__56705 = cljs.core.seq.call(null,vec__56704);
var first__56706 = cljs.core.first.call(null,seq__56705);
var seq__56705__$1 = cljs.core.next.call(null,seq__56705);
var map__56707 = first__56706;
var map__56707__$1 = (((((!((map__56707 == null))))?(((((map__56707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56707):map__56707);
var msg = map__56707__$1;
var msg_name = cljs.core.get.call(null,map__56707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56705__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56709){
var map__56710 = p__56709;
var map__56710__$1 = (((((!((map__56710 == null))))?(((((map__56710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56710):map__56710);
var on_compile_warning = cljs.core.get.call(null,map__56710__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56710__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56710,map__56710__$1,on_compile_warning,on_compile_fail){
return (function (p__56712){
var vec__56713 = p__56712;
var seq__56714 = cljs.core.seq.call(null,vec__56713);
var first__56715 = cljs.core.first.call(null,seq__56714);
var seq__56714__$1 = cljs.core.next.call(null,seq__56714);
var map__56716 = first__56715;
var map__56716__$1 = (((((!((map__56716 == null))))?(((((map__56716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56716):map__56716);
var msg = map__56716__$1;
var msg_name = cljs.core.get.call(null,map__56716__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56714__$1;
var pred__56718 = cljs.core._EQ_;
var expr__56719 = msg_name;
if(cljs.core.truth_(pred__56718.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56719))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56718.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56719))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56710,map__56710__$1,on_compile_warning,on_compile_fail))
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
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__,msg_hist,msg_names,msg){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__,msg_hist,msg_names,msg){
return (function (state_56808){
var state_val_56809 = (state_56808[(1)]);
if((state_val_56809 === (7))){
var inst_56728 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
if(cljs.core.truth_(inst_56728)){
var statearr_56810_56857 = state_56808__$1;
(statearr_56810_56857[(1)] = (8));

} else {
var statearr_56811_56858 = state_56808__$1;
(statearr_56811_56858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (20))){
var inst_56802 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56812_56859 = state_56808__$1;
(statearr_56812_56859[(2)] = inst_56802);

(statearr_56812_56859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (27))){
var inst_56798 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56813_56860 = state_56808__$1;
(statearr_56813_56860[(2)] = inst_56798);

(statearr_56813_56860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (1))){
var inst_56721 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56808__$1 = state_56808;
if(cljs.core.truth_(inst_56721)){
var statearr_56814_56861 = state_56808__$1;
(statearr_56814_56861[(1)] = (2));

} else {
var statearr_56815_56862 = state_56808__$1;
(statearr_56815_56862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (24))){
var inst_56800 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56816_56863 = state_56808__$1;
(statearr_56816_56863[(2)] = inst_56800);

(statearr_56816_56863[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (4))){
var inst_56806 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56808__$1,inst_56806);
} else {
if((state_val_56809 === (15))){
var inst_56804 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56817_56864 = state_56808__$1;
(statearr_56817_56864[(2)] = inst_56804);

(statearr_56817_56864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (21))){
var inst_56757 = (state_56808[(2)]);
var inst_56758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56759 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56758);
var state_56808__$1 = (function (){var statearr_56818 = state_56808;
(statearr_56818[(7)] = inst_56757);

return statearr_56818;
})();
var statearr_56819_56865 = state_56808__$1;
(statearr_56819_56865[(2)] = inst_56759);

(statearr_56819_56865[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (31))){
var inst_56787 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56787){
var statearr_56820_56866 = state_56808__$1;
(statearr_56820_56866[(1)] = (34));

} else {
var statearr_56821_56867 = state_56808__$1;
(statearr_56821_56867[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (32))){
var inst_56796 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56822_56868 = state_56808__$1;
(statearr_56822_56868[(2)] = inst_56796);

(statearr_56822_56868[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (33))){
var inst_56783 = (state_56808[(2)]);
var inst_56784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56785 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56784);
var state_56808__$1 = (function (){var statearr_56823 = state_56808;
(statearr_56823[(8)] = inst_56783);

return statearr_56823;
})();
var statearr_56824_56869 = state_56808__$1;
(statearr_56824_56869[(2)] = inst_56785);

(statearr_56824_56869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (13))){
var inst_56742 = figwheel.client.heads_up.clear.call(null);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(16),inst_56742);
} else {
if((state_val_56809 === (22))){
var inst_56763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56764 = figwheel.client.heads_up.append_warning_message.call(null,inst_56763);
var state_56808__$1 = state_56808;
var statearr_56825_56870 = state_56808__$1;
(statearr_56825_56870[(2)] = inst_56764);

(statearr_56825_56870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (36))){
var inst_56794 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56826_56871 = state_56808__$1;
(statearr_56826_56871[(2)] = inst_56794);

(statearr_56826_56871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (29))){
var inst_56774 = (state_56808[(2)]);
var inst_56775 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56776 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56775);
var state_56808__$1 = (function (){var statearr_56827 = state_56808;
(statearr_56827[(9)] = inst_56774);

return statearr_56827;
})();
var statearr_56828_56872 = state_56808__$1;
(statearr_56828_56872[(2)] = inst_56776);

(statearr_56828_56872[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (6))){
var inst_56723 = (state_56808[(10)]);
var state_56808__$1 = state_56808;
var statearr_56829_56873 = state_56808__$1;
(statearr_56829_56873[(2)] = inst_56723);

(statearr_56829_56873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (28))){
var inst_56770 = (state_56808[(2)]);
var inst_56771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56772 = figwheel.client.heads_up.display_warning.call(null,inst_56771);
var state_56808__$1 = (function (){var statearr_56830 = state_56808;
(statearr_56830[(11)] = inst_56770);

return statearr_56830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(29),inst_56772);
} else {
if((state_val_56809 === (25))){
var inst_56768 = figwheel.client.heads_up.clear.call(null);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(28),inst_56768);
} else {
if((state_val_56809 === (34))){
var inst_56789 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(37),inst_56789);
} else {
if((state_val_56809 === (17))){
var inst_56748 = (state_56808[(2)]);
var inst_56749 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56750 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56749);
var state_56808__$1 = (function (){var statearr_56831 = state_56808;
(statearr_56831[(12)] = inst_56748);

return statearr_56831;
})();
var statearr_56832_56874 = state_56808__$1;
(statearr_56832_56874[(2)] = inst_56750);

(statearr_56832_56874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (3))){
var inst_56740 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56740){
var statearr_56833_56875 = state_56808__$1;
(statearr_56833_56875[(1)] = (13));

} else {
var statearr_56834_56876 = state_56808__$1;
(statearr_56834_56876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (12))){
var inst_56736 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56835_56877 = state_56808__$1;
(statearr_56835_56877[(2)] = inst_56736);

(statearr_56835_56877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (2))){
var inst_56723 = (state_56808[(10)]);
var inst_56723__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56808__$1 = (function (){var statearr_56836 = state_56808;
(statearr_56836[(10)] = inst_56723__$1);

return statearr_56836;
})();
if(cljs.core.truth_(inst_56723__$1)){
var statearr_56837_56878 = state_56808__$1;
(statearr_56837_56878[(1)] = (5));

} else {
var statearr_56838_56879 = state_56808__$1;
(statearr_56838_56879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (23))){
var inst_56766 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56766){
var statearr_56839_56880 = state_56808__$1;
(statearr_56839_56880[(1)] = (25));

} else {
var statearr_56840_56881 = state_56808__$1;
(statearr_56840_56881[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (35))){
var state_56808__$1 = state_56808;
var statearr_56841_56882 = state_56808__$1;
(statearr_56841_56882[(2)] = null);

(statearr_56841_56882[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (19))){
var inst_56761 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56761){
var statearr_56842_56883 = state_56808__$1;
(statearr_56842_56883[(1)] = (22));

} else {
var statearr_56843_56884 = state_56808__$1;
(statearr_56843_56884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (11))){
var inst_56732 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56844_56885 = state_56808__$1;
(statearr_56844_56885[(2)] = inst_56732);

(statearr_56844_56885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (9))){
var inst_56734 = figwheel.client.heads_up.clear.call(null);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(12),inst_56734);
} else {
if((state_val_56809 === (5))){
var inst_56725 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56808__$1 = state_56808;
var statearr_56845_56886 = state_56808__$1;
(statearr_56845_56886[(2)] = inst_56725);

(statearr_56845_56886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (14))){
var inst_56752 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56752){
var statearr_56846_56887 = state_56808__$1;
(statearr_56846_56887[(1)] = (18));

} else {
var statearr_56847_56888 = state_56808__$1;
(statearr_56847_56888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (26))){
var inst_56778 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56808__$1 = state_56808;
if(inst_56778){
var statearr_56848_56889 = state_56808__$1;
(statearr_56848_56889[(1)] = (30));

} else {
var statearr_56849_56890 = state_56808__$1;
(statearr_56849_56890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (16))){
var inst_56744 = (state_56808[(2)]);
var inst_56745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56746 = figwheel.client.heads_up.display_exception.call(null,inst_56745);
var state_56808__$1 = (function (){var statearr_56850 = state_56808;
(statearr_56850[(13)] = inst_56744);

return statearr_56850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(17),inst_56746);
} else {
if((state_val_56809 === (30))){
var inst_56780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56781 = figwheel.client.heads_up.display_warning.call(null,inst_56780);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(33),inst_56781);
} else {
if((state_val_56809 === (10))){
var inst_56738 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56851_56891 = state_56808__$1;
(statearr_56851_56891[(2)] = inst_56738);

(statearr_56851_56891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (18))){
var inst_56754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56755 = figwheel.client.heads_up.display_exception.call(null,inst_56754);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(21),inst_56755);
} else {
if((state_val_56809 === (37))){
var inst_56791 = (state_56808[(2)]);
var state_56808__$1 = state_56808;
var statearr_56852_56892 = state_56808__$1;
(statearr_56852_56892[(2)] = inst_56791);

(statearr_56852_56892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56809 === (8))){
var inst_56730 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56808__$1 = state_56808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56808__$1,(11),inst_56730);
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
});})(c__50402__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50235__auto__,c__50402__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____0 = (function (){
var statearr_56853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56853[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__);

(statearr_56853[(1)] = (1));

return statearr_56853;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____1 = (function (state_56808){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_56808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e56854){if((e56854 instanceof Object)){
var ex__50239__auto__ = e56854;
var statearr_56855_56893 = state_56808;
(statearr_56855_56893[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56894 = state_56808;
state_56808 = G__56894;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__ = function(state_56808){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____1.call(this,state_56808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__,msg_hist,msg_names,msg))
})();
var state__50404__auto__ = (function (){var statearr_56856 = f__50403__auto__.call(null);
(statearr_56856[(6)] = c__50402__auto__);

return statearr_56856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__,msg_hist,msg_names,msg))
);

return c__50402__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__50402__auto___56923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___56923,ch){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___56923,ch){
return (function (state_56909){
var state_val_56910 = (state_56909[(1)]);
if((state_val_56910 === (1))){
var state_56909__$1 = state_56909;
var statearr_56911_56924 = state_56909__$1;
(statearr_56911_56924[(2)] = null);

(statearr_56911_56924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56910 === (2))){
var state_56909__$1 = state_56909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56909__$1,(4),ch);
} else {
if((state_val_56910 === (3))){
var inst_56907 = (state_56909[(2)]);
var state_56909__$1 = state_56909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56909__$1,inst_56907);
} else {
if((state_val_56910 === (4))){
var inst_56897 = (state_56909[(7)]);
var inst_56897__$1 = (state_56909[(2)]);
var state_56909__$1 = (function (){var statearr_56912 = state_56909;
(statearr_56912[(7)] = inst_56897__$1);

return statearr_56912;
})();
if(cljs.core.truth_(inst_56897__$1)){
var statearr_56913_56925 = state_56909__$1;
(statearr_56913_56925[(1)] = (5));

} else {
var statearr_56914_56926 = state_56909__$1;
(statearr_56914_56926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56910 === (5))){
var inst_56897 = (state_56909[(7)]);
var inst_56899 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56897);
var state_56909__$1 = state_56909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56909__$1,(8),inst_56899);
} else {
if((state_val_56910 === (6))){
var state_56909__$1 = state_56909;
var statearr_56915_56927 = state_56909__$1;
(statearr_56915_56927[(2)] = null);

(statearr_56915_56927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56910 === (7))){
var inst_56905 = (state_56909[(2)]);
var state_56909__$1 = state_56909;
var statearr_56916_56928 = state_56909__$1;
(statearr_56916_56928[(2)] = inst_56905);

(statearr_56916_56928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56910 === (8))){
var inst_56901 = (state_56909[(2)]);
var state_56909__$1 = (function (){var statearr_56917 = state_56909;
(statearr_56917[(8)] = inst_56901);

return statearr_56917;
})();
var statearr_56918_56929 = state_56909__$1;
(statearr_56918_56929[(2)] = null);

(statearr_56918_56929[(1)] = (2));


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
});})(c__50402__auto___56923,ch))
;
return ((function (switch__50235__auto__,c__50402__auto___56923,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50236__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50236__auto____0 = (function (){
var statearr_56919 = [null,null,null,null,null,null,null,null,null];
(statearr_56919[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50236__auto__);

(statearr_56919[(1)] = (1));

return statearr_56919;
});
var figwheel$client$heads_up_plugin_$_state_machine__50236__auto____1 = (function (state_56909){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_56909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e56920){if((e56920 instanceof Object)){
var ex__50239__auto__ = e56920;
var statearr_56921_56930 = state_56909;
(statearr_56921_56930[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56931 = state_56909;
state_56909 = G__56931;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50236__auto__ = function(state_56909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50236__auto____1.call(this,state_56909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50236__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50236__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___56923,ch))
})();
var state__50404__auto__ = (function (){var statearr_56922 = f__50403__auto__.call(null);
(statearr_56922[(6)] = c__50402__auto___56923);

return statearr_56922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___56923,ch))
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
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__){
return (function (state_56937){
var state_val_56938 = (state_56937[(1)]);
if((state_val_56938 === (1))){
var inst_56932 = cljs.core.async.timeout.call(null,(3000));
var state_56937__$1 = state_56937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56937__$1,(2),inst_56932);
} else {
if((state_val_56938 === (2))){
var inst_56934 = (state_56937[(2)]);
var inst_56935 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56937__$1 = (function (){var statearr_56939 = state_56937;
(statearr_56939[(7)] = inst_56934);

return statearr_56939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56937__$1,inst_56935);
} else {
return null;
}
}
});})(c__50402__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____0 = (function (){
var statearr_56940 = [null,null,null,null,null,null,null,null];
(statearr_56940[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__);

(statearr_56940[(1)] = (1));

return statearr_56940;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____1 = (function (state_56937){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_56937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e56941){if((e56941 instanceof Object)){
var ex__50239__auto__ = e56941;
var statearr_56942_56944 = state_56937;
(statearr_56942_56944[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56945 = state_56937;
state_56937 = G__56945;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__ = function(state_56937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____1.call(this,state_56937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50236__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__))
})();
var state__50404__auto__ = (function (){var statearr_56943 = f__50403__auto__.call(null);
(statearr_56943[(6)] = c__50402__auto__);

return statearr_56943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__))
);

return c__50402__auto__;
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
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__,figwheel_version,temp__5735__auto__){
return (function (state_56952){
var state_val_56953 = (state_56952[(1)]);
if((state_val_56953 === (1))){
var inst_56946 = cljs.core.async.timeout.call(null,(2000));
var state_56952__$1 = state_56952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56952__$1,(2),inst_56946);
} else {
if((state_val_56953 === (2))){
var inst_56948 = (state_56952[(2)]);
var inst_56949 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_56950 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56949);
var state_56952__$1 = (function (){var statearr_56954 = state_56952;
(statearr_56954[(7)] = inst_56948);

return statearr_56954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56952__$1,inst_56950);
} else {
return null;
}
}
});})(c__50402__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____0 = (function (){
var statearr_56955 = [null,null,null,null,null,null,null,null];
(statearr_56955[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__);

(statearr_56955[(1)] = (1));

return statearr_56955;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____1 = (function (state_56952){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_56952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e56956){if((e56956 instanceof Object)){
var ex__50239__auto__ = e56956;
var statearr_56957_56959 = state_56952;
(statearr_56957_56959[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56960 = state_56952;
state_56952 = G__56960;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__ = function(state_56952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____1.call(this,state_56952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__,figwheel_version,temp__5735__auto__))
})();
var state__50404__auto__ = (function (){var statearr_56958 = f__50403__auto__.call(null);
(statearr_56958[(6)] = c__50402__auto__);

return statearr_56958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__,figwheel_version,temp__5735__auto__))
);

return c__50402__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__56961){
var map__56962 = p__56961;
var map__56962__$1 = (((((!((map__56962 == null))))?(((((map__56962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56962):map__56962);
var file = cljs.core.get.call(null,map__56962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__56964 = "";
var G__56964__$1 = (cljs.core.truth_(file)?[G__56964,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__56964);
var G__56964__$2 = (cljs.core.truth_(line)?[G__56964__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__56964__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__56964__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__56964__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56965){
var map__56966 = p__56965;
var map__56966__$1 = (((((!((map__56966 == null))))?(((((map__56966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56966):map__56966);
var ed = map__56966__$1;
var exception_data = cljs.core.get.call(null,map__56966__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56966__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_56969 = (function (){var G__56968 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56968)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__56968;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_56969);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56970){
var map__56971 = p__56970;
var map__56971__$1 = (((((!((map__56971 == null))))?(((((map__56971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56971):map__56971);
var w = map__56971__$1;
var message = cljs.core.get.call(null,map__56971__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
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
var seq__56973 = cljs.core.seq.call(null,plugins);
var chunk__56974 = null;
var count__56975 = (0);
var i__56976 = (0);
while(true){
if((i__56976 < count__56975)){
var vec__56983 = cljs.core._nth.call(null,chunk__56974,i__56976);
var k = cljs.core.nth.call(null,vec__56983,(0),null);
var plugin = cljs.core.nth.call(null,vec__56983,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56989 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56973,chunk__56974,count__56975,i__56976,pl_56989,vec__56983,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56989.call(null,msg_hist);
});})(seq__56973,chunk__56974,count__56975,i__56976,pl_56989,vec__56983,k,plugin))
);
} else {
}


var G__56990 = seq__56973;
var G__56991 = chunk__56974;
var G__56992 = count__56975;
var G__56993 = (i__56976 + (1));
seq__56973 = G__56990;
chunk__56974 = G__56991;
count__56975 = G__56992;
i__56976 = G__56993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__56973);
if(temp__5735__auto__){
var seq__56973__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56973__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__56973__$1);
var G__56994 = cljs.core.chunk_rest.call(null,seq__56973__$1);
var G__56995 = c__4550__auto__;
var G__56996 = cljs.core.count.call(null,c__4550__auto__);
var G__56997 = (0);
seq__56973 = G__56994;
chunk__56974 = G__56995;
count__56975 = G__56996;
i__56976 = G__56997;
continue;
} else {
var vec__56986 = cljs.core.first.call(null,seq__56973__$1);
var k = cljs.core.nth.call(null,vec__56986,(0),null);
var plugin = cljs.core.nth.call(null,vec__56986,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56998 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56973,chunk__56974,count__56975,i__56976,pl_56998,vec__56986,k,plugin,seq__56973__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56998.call(null,msg_hist);
});})(seq__56973,chunk__56974,count__56975,i__56976,pl_56998,vec__56986,k,plugin,seq__56973__$1,temp__5735__auto__))
);
} else {
}


var G__56999 = cljs.core.next.call(null,seq__56973__$1);
var G__57000 = null;
var G__57001 = (0);
var G__57002 = (0);
seq__56973 = G__56999;
chunk__56974 = G__57000;
count__56975 = G__57001;
i__56976 = G__57002;
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
var G__57004 = arguments.length;
switch (G__57004) {
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
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

var seq__57005_57010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57006_57011 = null;
var count__57007_57012 = (0);
var i__57008_57013 = (0);
while(true){
if((i__57008_57013 < count__57007_57012)){
var msg_57014 = cljs.core._nth.call(null,chunk__57006_57011,i__57008_57013);
figwheel.client.socket.handle_incoming_message.call(null,msg_57014);


var G__57015 = seq__57005_57010;
var G__57016 = chunk__57006_57011;
var G__57017 = count__57007_57012;
var G__57018 = (i__57008_57013 + (1));
seq__57005_57010 = G__57015;
chunk__57006_57011 = G__57016;
count__57007_57012 = G__57017;
i__57008_57013 = G__57018;
continue;
} else {
var temp__5735__auto___57019 = cljs.core.seq.call(null,seq__57005_57010);
if(temp__5735__auto___57019){
var seq__57005_57020__$1 = temp__5735__auto___57019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57005_57020__$1)){
var c__4550__auto___57021 = cljs.core.chunk_first.call(null,seq__57005_57020__$1);
var G__57022 = cljs.core.chunk_rest.call(null,seq__57005_57020__$1);
var G__57023 = c__4550__auto___57021;
var G__57024 = cljs.core.count.call(null,c__4550__auto___57021);
var G__57025 = (0);
seq__57005_57010 = G__57022;
chunk__57006_57011 = G__57023;
count__57007_57012 = G__57024;
i__57008_57013 = G__57025;
continue;
} else {
var msg_57026 = cljs.core.first.call(null,seq__57005_57020__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57026);


var G__57027 = cljs.core.next.call(null,seq__57005_57020__$1);
var G__57028 = null;
var G__57029 = (0);
var G__57030 = (0);
seq__57005_57010 = G__57027;
chunk__57006_57011 = G__57028;
count__57007_57012 = G__57029;
i__57008_57013 = G__57030;
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
var args__4736__auto__ = [];
var len__4730__auto___57035 = arguments.length;
var i__4731__auto___57036 = (0);
while(true){
if((i__4731__auto___57036 < len__4730__auto___57035)){
args__4736__auto__.push((arguments[i__4731__auto___57036]));

var G__57037 = (i__4731__auto___57036 + (1));
i__4731__auto___57036 = G__57037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57032){
var map__57033 = p__57032;
var map__57033__$1 = (((((!((map__57033 == null))))?(((((map__57033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57033):map__57033);
var opts = map__57033__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57031){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57031));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57038){if((e57038 instanceof Error)){
var e = e57038;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57038;

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
return (function (p__57039){
var map__57040 = p__57039;
var map__57040__$1 = (((((!((map__57040 == null))))?(((((map__57040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57040):map__57040);
var msg_name = cljs.core.get.call(null,map__57040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563843530992
