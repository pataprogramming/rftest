// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.call(null,(0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$start_trace(p__66422){
var map__66423 = p__66422;
var map__66423__$1 = (((((!((map__66423 == null))))?(((((map__66423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66423):map__66423);
var operation = cljs.core.get.call(null,map__66423__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__66423__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__66423__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__66423__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce.call(null,(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__66425_66445 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__66426_66446 = null;
var count__66427_66447 = (0);
var i__66428_66448 = (0);
while(true){
if((i__66428_66448 < count__66427_66447)){
var vec__66437_66449 = cljs.core._nth.call(null,chunk__66426_66446,i__66428_66448);
var k_66450 = cljs.core.nth.call(null,vec__66437_66449,(0),null);
var cb_66451 = cljs.core.nth.call(null,vec__66437_66449,(1),null);
try{cb_66451.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e66440){var e_66452 = e66440;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66450,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_66452);
}

var G__66453 = seq__66425_66445;
var G__66454 = chunk__66426_66446;
var G__66455 = count__66427_66447;
var G__66456 = (i__66428_66448 + (1));
seq__66425_66445 = G__66453;
chunk__66426_66446 = G__66454;
count__66427_66447 = G__66455;
i__66428_66448 = G__66456;
continue;
} else {
var temp__5735__auto___66457 = cljs.core.seq.call(null,seq__66425_66445);
if(temp__5735__auto___66457){
var seq__66425_66458__$1 = temp__5735__auto___66457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66425_66458__$1)){
var c__4550__auto___66459 = cljs.core.chunk_first.call(null,seq__66425_66458__$1);
var G__66460 = cljs.core.chunk_rest.call(null,seq__66425_66458__$1);
var G__66461 = c__4550__auto___66459;
var G__66462 = cljs.core.count.call(null,c__4550__auto___66459);
var G__66463 = (0);
seq__66425_66445 = G__66460;
chunk__66426_66446 = G__66461;
count__66427_66447 = G__66462;
i__66428_66448 = G__66463;
continue;
} else {
var vec__66441_66464 = cljs.core.first.call(null,seq__66425_66458__$1);
var k_66465 = cljs.core.nth.call(null,vec__66441_66464,(0),null);
var cb_66466 = cljs.core.nth.call(null,vec__66441_66464,(1),null);
try{cb_66466.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e66444){var e_66467 = e66444;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66465,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_66467);
}

var G__66468 = cljs.core.next.call(null,seq__66425_66458__$1);
var G__66469 = null;
var G__66470 = (0);
var G__66471 = (0);
seq__66425_66445 = G__66468;
chunk__66426_66446 = G__66469;
count__66427_66447 = G__66470;
i__66428_66448 = G__66471;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1563842221966
