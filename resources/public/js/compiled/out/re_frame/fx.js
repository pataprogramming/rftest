// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__70785 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__70786 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__70786;

try{try{var seq__70787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__70788 = null;
var count__70789 = (0);
var i__70790 = (0);
while(true){
if((i__70790 < count__70789)){
var vec__70797 = cljs.core._nth.call(null,chunk__70788,i__70790);
var effect_key = cljs.core.nth.call(null,vec__70797,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70797,(1),null);
var temp__5733__auto___70819 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___70819)){
var effect_fn_70820 = temp__5733__auto___70819;
effect_fn_70820.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__70821 = seq__70787;
var G__70822 = chunk__70788;
var G__70823 = count__70789;
var G__70824 = (i__70790 + (1));
seq__70787 = G__70821;
chunk__70788 = G__70822;
count__70789 = G__70823;
i__70790 = G__70824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70787);
if(temp__5735__auto__){
var seq__70787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70787__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70787__$1);
var G__70825 = cljs.core.chunk_rest.call(null,seq__70787__$1);
var G__70826 = c__4550__auto__;
var G__70827 = cljs.core.count.call(null,c__4550__auto__);
var G__70828 = (0);
seq__70787 = G__70825;
chunk__70788 = G__70826;
count__70789 = G__70827;
i__70790 = G__70828;
continue;
} else {
var vec__70800 = cljs.core.first.call(null,seq__70787__$1);
var effect_key = cljs.core.nth.call(null,vec__70800,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70800,(1),null);
var temp__5733__auto___70829 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___70829)){
var effect_fn_70830 = temp__5733__auto___70829;
effect_fn_70830.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__70831 = cljs.core.next.call(null,seq__70787__$1);
var G__70832 = null;
var G__70833 = (0);
var G__70834 = (0);
seq__70787 = G__70831;
chunk__70788 = G__70832;
count__70789 = G__70833;
i__70790 = G__70834;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__45288__auto___70835 = re_frame.interop.now.call(null);
var duration__45289__auto___70836 = (end__45288__auto___70835 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45289__auto___70836,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__45288__auto___70835);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__70785;
}} else {
var seq__70803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__70804 = null;
var count__70805 = (0);
var i__70806 = (0);
while(true){
if((i__70806 < count__70805)){
var vec__70813 = cljs.core._nth.call(null,chunk__70804,i__70806);
var effect_key = cljs.core.nth.call(null,vec__70813,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70813,(1),null);
var temp__5733__auto___70837 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___70837)){
var effect_fn_70838 = temp__5733__auto___70837;
effect_fn_70838.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__70839 = seq__70803;
var G__70840 = chunk__70804;
var G__70841 = count__70805;
var G__70842 = (i__70806 + (1));
seq__70803 = G__70839;
chunk__70804 = G__70840;
count__70805 = G__70841;
i__70806 = G__70842;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70803);
if(temp__5735__auto__){
var seq__70803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70803__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70803__$1);
var G__70843 = cljs.core.chunk_rest.call(null,seq__70803__$1);
var G__70844 = c__4550__auto__;
var G__70845 = cljs.core.count.call(null,c__4550__auto__);
var G__70846 = (0);
seq__70803 = G__70843;
chunk__70804 = G__70844;
count__70805 = G__70845;
i__70806 = G__70846;
continue;
} else {
var vec__70816 = cljs.core.first.call(null,seq__70803__$1);
var effect_key = cljs.core.nth.call(null,vec__70816,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70816,(1),null);
var temp__5733__auto___70847 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___70847)){
var effect_fn_70848 = temp__5733__auto___70847;
effect_fn_70848.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__70849 = cljs.core.next.call(null,seq__70803__$1);
var G__70850 = null;
var G__70851 = (0);
var G__70852 = (0);
seq__70803 = G__70849;
chunk__70804 = G__70850;
count__70805 = G__70851;
i__70806 = G__70852;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__70853 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__70854 = null;
var count__70855 = (0);
var i__70856 = (0);
while(true){
if((i__70856 < count__70855)){
var map__70861 = cljs.core._nth.call(null,chunk__70854,i__70856);
var map__70861__$1 = (((((!((map__70861 == null))))?(((((map__70861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70861):map__70861);
var effect = map__70861__$1;
var ms = cljs.core.get.call(null,map__70861__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__70861__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__70853,chunk__70854,count__70855,i__70856,map__70861,map__70861__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__70853,chunk__70854,count__70855,i__70856,map__70861,map__70861__$1,effect,ms,dispatch))
,ms);
}


var G__70865 = seq__70853;
var G__70866 = chunk__70854;
var G__70867 = count__70855;
var G__70868 = (i__70856 + (1));
seq__70853 = G__70865;
chunk__70854 = G__70866;
count__70855 = G__70867;
i__70856 = G__70868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70853);
if(temp__5735__auto__){
var seq__70853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70853__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70853__$1);
var G__70869 = cljs.core.chunk_rest.call(null,seq__70853__$1);
var G__70870 = c__4550__auto__;
var G__70871 = cljs.core.count.call(null,c__4550__auto__);
var G__70872 = (0);
seq__70853 = G__70869;
chunk__70854 = G__70870;
count__70855 = G__70871;
i__70856 = G__70872;
continue;
} else {
var map__70863 = cljs.core.first.call(null,seq__70853__$1);
var map__70863__$1 = (((((!((map__70863 == null))))?(((((map__70863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70863):map__70863);
var effect = map__70863__$1;
var ms = cljs.core.get.call(null,map__70863__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__70863__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__70853,chunk__70854,count__70855,i__70856,map__70863,map__70863__$1,effect,ms,dispatch,seq__70853__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__70853,chunk__70854,count__70855,i__70856,map__70863,map__70863__$1,effect,ms,dispatch,seq__70853__$1,temp__5735__auto__))
,ms);
}


var G__70873 = cljs.core.next.call(null,seq__70853__$1);
var G__70874 = null;
var G__70875 = (0);
var G__70876 = (0);
seq__70853 = G__70873;
chunk__70854 = G__70874;
count__70855 = G__70875;
i__70856 = G__70876;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__70877 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__70878 = null;
var count__70879 = (0);
var i__70880 = (0);
while(true){
if((i__70880 < count__70879)){
var event = cljs.core._nth.call(null,chunk__70878,i__70880);
re_frame.router.dispatch.call(null,event);


var G__70881 = seq__70877;
var G__70882 = chunk__70878;
var G__70883 = count__70879;
var G__70884 = (i__70880 + (1));
seq__70877 = G__70881;
chunk__70878 = G__70882;
count__70879 = G__70883;
i__70880 = G__70884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70877);
if(temp__5735__auto__){
var seq__70877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70877__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70877__$1);
var G__70885 = cljs.core.chunk_rest.call(null,seq__70877__$1);
var G__70886 = c__4550__auto__;
var G__70887 = cljs.core.count.call(null,c__4550__auto__);
var G__70888 = (0);
seq__70877 = G__70885;
chunk__70878 = G__70886;
count__70879 = G__70887;
i__70880 = G__70888;
continue;
} else {
var event = cljs.core.first.call(null,seq__70877__$1);
re_frame.router.dispatch.call(null,event);


var G__70889 = cljs.core.next.call(null,seq__70877__$1);
var G__70890 = null;
var G__70891 = (0);
var G__70892 = (0);
seq__70877 = G__70889;
chunk__70878 = G__70890;
count__70879 = G__70891;
i__70880 = G__70892;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__70893 = cljs.core.seq.call(null,value);
var chunk__70894 = null;
var count__70895 = (0);
var i__70896 = (0);
while(true){
if((i__70896 < count__70895)){
var event = cljs.core._nth.call(null,chunk__70894,i__70896);
clear_event.call(null,event);


var G__70897 = seq__70893;
var G__70898 = chunk__70894;
var G__70899 = count__70895;
var G__70900 = (i__70896 + (1));
seq__70893 = G__70897;
chunk__70894 = G__70898;
count__70895 = G__70899;
i__70896 = G__70900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70893);
if(temp__5735__auto__){
var seq__70893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70893__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70893__$1);
var G__70901 = cljs.core.chunk_rest.call(null,seq__70893__$1);
var G__70902 = c__4550__auto__;
var G__70903 = cljs.core.count.call(null,c__4550__auto__);
var G__70904 = (0);
seq__70893 = G__70901;
chunk__70894 = G__70902;
count__70895 = G__70903;
i__70896 = G__70904;
continue;
} else {
var event = cljs.core.first.call(null,seq__70893__$1);
clear_event.call(null,event);


var G__70905 = cljs.core.next.call(null,seq__70893__$1);
var G__70906 = null;
var G__70907 = (0);
var G__70908 = (0);
seq__70893 = G__70905;
chunk__70894 = G__70906;
count__70895 = G__70907;
i__70896 = G__70908;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1563842226888
