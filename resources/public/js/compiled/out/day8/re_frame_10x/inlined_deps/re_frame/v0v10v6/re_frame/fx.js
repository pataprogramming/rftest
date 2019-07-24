// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__66865 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__66866 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__66866;

try{try{var seq__66867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66868 = null;
var count__66869 = (0);
var i__66870 = (0);
while(true){
if((i__66870 < count__66869)){
var vec__66877 = cljs.core._nth.call(null,chunk__66868,i__66870);
var effect_key = cljs.core.nth.call(null,vec__66877,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66877,(1),null);
var temp__5733__auto___66899 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66899)){
var effect_fn_66900 = temp__5733__auto___66899;
effect_fn_66900.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__66901 = seq__66867;
var G__66902 = chunk__66868;
var G__66903 = count__66869;
var G__66904 = (i__66870 + (1));
seq__66867 = G__66901;
chunk__66868 = G__66902;
count__66869 = G__66903;
i__66870 = G__66904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66867);
if(temp__5735__auto__){
var seq__66867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66867__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66867__$1);
var G__66905 = cljs.core.chunk_rest.call(null,seq__66867__$1);
var G__66906 = c__4550__auto__;
var G__66907 = cljs.core.count.call(null,c__4550__auto__);
var G__66908 = (0);
seq__66867 = G__66905;
chunk__66868 = G__66906;
count__66869 = G__66907;
i__66870 = G__66908;
continue;
} else {
var vec__66880 = cljs.core.first.call(null,seq__66867__$1);
var effect_key = cljs.core.nth.call(null,vec__66880,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66880,(1),null);
var temp__5733__auto___66909 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66909)){
var effect_fn_66910 = temp__5733__auto___66909;
effect_fn_66910.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__66911 = cljs.core.next.call(null,seq__66867__$1);
var G__66912 = null;
var G__66913 = (0);
var G__66914 = (0);
seq__66867 = G__66911;
chunk__66868 = G__66912;
count__66869 = G__66913;
i__66870 = G__66914;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___66915 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___66916 = (end__66345__auto___66915 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___66916,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___66915);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__66865;
}} else {
var seq__66883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66884 = null;
var count__66885 = (0);
var i__66886 = (0);
while(true){
if((i__66886 < count__66885)){
var vec__66893 = cljs.core._nth.call(null,chunk__66884,i__66886);
var effect_key = cljs.core.nth.call(null,vec__66893,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66893,(1),null);
var temp__5733__auto___66917 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66917)){
var effect_fn_66918 = temp__5733__auto___66917;
effect_fn_66918.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__66919 = seq__66883;
var G__66920 = chunk__66884;
var G__66921 = count__66885;
var G__66922 = (i__66886 + (1));
seq__66883 = G__66919;
chunk__66884 = G__66920;
count__66885 = G__66921;
i__66886 = G__66922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66883);
if(temp__5735__auto__){
var seq__66883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66883__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66883__$1);
var G__66923 = cljs.core.chunk_rest.call(null,seq__66883__$1);
var G__66924 = c__4550__auto__;
var G__66925 = cljs.core.count.call(null,c__4550__auto__);
var G__66926 = (0);
seq__66883 = G__66923;
chunk__66884 = G__66924;
count__66885 = G__66925;
i__66886 = G__66926;
continue;
} else {
var vec__66896 = cljs.core.first.call(null,seq__66883__$1);
var effect_key = cljs.core.nth.call(null,vec__66896,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66896,(1),null);
var temp__5733__auto___66927 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___66927)){
var effect_fn_66928 = temp__5733__auto___66927;
effect_fn_66928.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__66929 = cljs.core.next.call(null,seq__66883__$1);
var G__66930 = null;
var G__66931 = (0);
var G__66932 = (0);
seq__66883 = G__66929;
chunk__66884 = G__66930;
count__66885 = G__66931;
i__66886 = G__66932;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__66933 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__66934 = null;
var count__66935 = (0);
var i__66936 = (0);
while(true){
if((i__66936 < count__66935)){
var map__66941 = cljs.core._nth.call(null,chunk__66934,i__66936);
var map__66941__$1 = (((((!((map__66941 == null))))?(((((map__66941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66941):map__66941);
var effect = map__66941__$1;
var ms = cljs.core.get.call(null,map__66941__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66941__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66933,chunk__66934,count__66935,i__66936,map__66941,map__66941__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__66933,chunk__66934,count__66935,i__66936,map__66941,map__66941__$1,effect,ms,dispatch))
,ms);
}


var G__66945 = seq__66933;
var G__66946 = chunk__66934;
var G__66947 = count__66935;
var G__66948 = (i__66936 + (1));
seq__66933 = G__66945;
chunk__66934 = G__66946;
count__66935 = G__66947;
i__66936 = G__66948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66933);
if(temp__5735__auto__){
var seq__66933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66933__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66933__$1);
var G__66949 = cljs.core.chunk_rest.call(null,seq__66933__$1);
var G__66950 = c__4550__auto__;
var G__66951 = cljs.core.count.call(null,c__4550__auto__);
var G__66952 = (0);
seq__66933 = G__66949;
chunk__66934 = G__66950;
count__66935 = G__66951;
i__66936 = G__66952;
continue;
} else {
var map__66943 = cljs.core.first.call(null,seq__66933__$1);
var map__66943__$1 = (((((!((map__66943 == null))))?(((((map__66943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66943):map__66943);
var effect = map__66943__$1;
var ms = cljs.core.get.call(null,map__66943__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66943__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66933,chunk__66934,count__66935,i__66936,map__66943,map__66943__$1,effect,ms,dispatch,seq__66933__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__66933,chunk__66934,count__66935,i__66936,map__66943,map__66943__$1,effect,ms,dispatch,seq__66933__$1,temp__5735__auto__))
,ms);
}


var G__66953 = cljs.core.next.call(null,seq__66933__$1);
var G__66954 = null;
var G__66955 = (0);
var G__66956 = (0);
seq__66933 = G__66953;
chunk__66934 = G__66954;
count__66935 = G__66955;
i__66936 = G__66956;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__66957 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__66958 = null;
var count__66959 = (0);
var i__66960 = (0);
while(true){
if((i__66960 < count__66959)){
var event = cljs.core._nth.call(null,chunk__66958,i__66960);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__66961 = seq__66957;
var G__66962 = chunk__66958;
var G__66963 = count__66959;
var G__66964 = (i__66960 + (1));
seq__66957 = G__66961;
chunk__66958 = G__66962;
count__66959 = G__66963;
i__66960 = G__66964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66957);
if(temp__5735__auto__){
var seq__66957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66957__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66957__$1);
var G__66965 = cljs.core.chunk_rest.call(null,seq__66957__$1);
var G__66966 = c__4550__auto__;
var G__66967 = cljs.core.count.call(null,c__4550__auto__);
var G__66968 = (0);
seq__66957 = G__66965;
chunk__66958 = G__66966;
count__66959 = G__66967;
i__66960 = G__66968;
continue;
} else {
var event = cljs.core.first.call(null,seq__66957__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__66969 = cljs.core.next.call(null,seq__66957__$1);
var G__66970 = null;
var G__66971 = (0);
var G__66972 = (0);
seq__66957 = G__66969;
chunk__66958 = G__66970;
count__66959 = G__66971;
i__66960 = G__66972;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__66973 = cljs.core.seq.call(null,value);
var chunk__66974 = null;
var count__66975 = (0);
var i__66976 = (0);
while(true){
if((i__66976 < count__66975)){
var event = cljs.core._nth.call(null,chunk__66974,i__66976);
clear_event.call(null,event);


var G__66977 = seq__66973;
var G__66978 = chunk__66974;
var G__66979 = count__66975;
var G__66980 = (i__66976 + (1));
seq__66973 = G__66977;
chunk__66974 = G__66978;
count__66975 = G__66979;
i__66976 = G__66980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66973);
if(temp__5735__auto__){
var seq__66973__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66973__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66973__$1);
var G__66981 = cljs.core.chunk_rest.call(null,seq__66973__$1);
var G__66982 = c__4550__auto__;
var G__66983 = cljs.core.count.call(null,c__4550__auto__);
var G__66984 = (0);
seq__66973 = G__66981;
chunk__66974 = G__66982;
count__66975 = G__66983;
i__66976 = G__66984;
continue;
} else {
var event = cljs.core.first.call(null,seq__66973__$1);
clear_event.call(null,event);


var G__66985 = cljs.core.next.call(null,seq__66973__$1);
var G__66986 = null;
var G__66987 = (0);
var G__66988 = (0);
seq__66973 = G__66985;
chunk__66974 = G__66986;
count__66975 = G__66987;
i__66976 = G__66988;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1563842222456
