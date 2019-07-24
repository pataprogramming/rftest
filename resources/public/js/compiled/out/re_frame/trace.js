// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__69959){
var map__69960 = p__69959;
var map__69960__$1 = (((((!((map__69960 == null))))?(((((map__69960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69960):map__69960);
var operation = cljs.core.get.call(null,map__69960__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__69960__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__69960__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__69960__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__69962_69982 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__69963_69983 = null;
var count__69964_69984 = (0);
var i__69965_69985 = (0);
while(true){
if((i__69965_69985 < count__69964_69984)){
var vec__69974_69986 = cljs.core._nth.call(null,chunk__69963_69983,i__69965_69985);
var k_69987 = cljs.core.nth.call(null,vec__69974_69986,(0),null);
var cb_69988 = cljs.core.nth.call(null,vec__69974_69986,(1),null);
try{cb_69988.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e69977){var e_69989 = e69977;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_69987,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_69989);
}

var G__69990 = seq__69962_69982;
var G__69991 = chunk__69963_69983;
var G__69992 = count__69964_69984;
var G__69993 = (i__69965_69985 + (1));
seq__69962_69982 = G__69990;
chunk__69963_69983 = G__69991;
count__69964_69984 = G__69992;
i__69965_69985 = G__69993;
continue;
} else {
var temp__5735__auto___69994 = cljs.core.seq.call(null,seq__69962_69982);
if(temp__5735__auto___69994){
var seq__69962_69995__$1 = temp__5735__auto___69994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69962_69995__$1)){
var c__4550__auto___69996 = cljs.core.chunk_first.call(null,seq__69962_69995__$1);
var G__69997 = cljs.core.chunk_rest.call(null,seq__69962_69995__$1);
var G__69998 = c__4550__auto___69996;
var G__69999 = cljs.core.count.call(null,c__4550__auto___69996);
var G__70000 = (0);
seq__69962_69982 = G__69997;
chunk__69963_69983 = G__69998;
count__69964_69984 = G__69999;
i__69965_69985 = G__70000;
continue;
} else {
var vec__69978_70001 = cljs.core.first.call(null,seq__69962_69995__$1);
var k_70002 = cljs.core.nth.call(null,vec__69978_70001,(0),null);
var cb_70003 = cljs.core.nth.call(null,vec__69978_70001,(1),null);
try{cb_70003.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e69981){var e_70004 = e69981;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_70002,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_70004);
}

var G__70005 = cljs.core.next.call(null,seq__69962_69995__$1);
var G__70006 = null;
var G__70007 = (0);
var G__70008 = (0);
seq__69962_69982 = G__70005;
chunk__69963_69983 = G__70006;
count__69964_69984 = G__70007;
i__69965_69985 = G__70008;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1563842225636
