// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__67097_67113 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction));
var chunk__67098_67114 = null;
var count__67099_67115 = (0);
var i__67100_67116 = (0);
while(true){
if((i__67100_67116 < count__67099_67115)){
var vec__67107_67117 = cljs.core._nth.call(null,chunk__67098_67114,i__67100_67116);
var k_67118 = cljs.core.nth.call(null,vec__67107_67117,(0),null);
var rxn_67119 = cljs.core.nth.call(null,vec__67107_67117,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,rxn_67119);


var G__67120 = seq__67097_67113;
var G__67121 = chunk__67098_67114;
var G__67122 = count__67099_67115;
var G__67123 = (i__67100_67116 + (1));
seq__67097_67113 = G__67120;
chunk__67098_67114 = G__67121;
count__67099_67115 = G__67122;
i__67100_67116 = G__67123;
continue;
} else {
var temp__5735__auto___67124 = cljs.core.seq.call(null,seq__67097_67113);
if(temp__5735__auto___67124){
var seq__67097_67125__$1 = temp__5735__auto___67124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67097_67125__$1)){
var c__4550__auto___67126 = cljs.core.chunk_first.call(null,seq__67097_67125__$1);
var G__67127 = cljs.core.chunk_rest.call(null,seq__67097_67125__$1);
var G__67128 = c__4550__auto___67126;
var G__67129 = cljs.core.count.call(null,c__4550__auto___67126);
var G__67130 = (0);
seq__67097_67113 = G__67127;
chunk__67098_67114 = G__67128;
count__67099_67115 = G__67129;
i__67100_67116 = G__67130;
continue;
} else {
var vec__67110_67131 = cljs.core.first.call(null,seq__67097_67125__$1);
var k_67132 = cljs.core.nth.call(null,vec__67110_67131,(0),null);
var rxn_67133 = cljs.core.nth.call(null,vec__67110_67131,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.dispose_BANG_.call(null,rxn_67133);


var G__67134 = cljs.core.next.call(null,seq__67097_67125__$1);
var G__67135 = null;
var G__67136 = (0);
var G__67137 = (0);
seq__67097_67113 = G__67134;
chunk__67098_67114 = G__67135;
count__67099_67115 = G__67136;
i__67100_67116 = G__67137;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.clear_all_handlers_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$clear_all_handlers_BANG_(){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind);

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_and_return = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__67138 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67139 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67139;

try{try{return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (_STAR_current_trace_STAR__orig_val__67138,_STAR_current_trace_STAR__temp_val__67139,cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(_STAR_current_trace_STAR__orig_val__67138,_STAR_current_trace_STAR__temp_val__67139,cache_key))
);
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___67140 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___67141 = (end__66345__auto___67140 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___67141,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___67140);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67138;
}} else {
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_.call(null,query_cache,cache_key)) && ((r === cljs.core.get.call(null,query_cache,cache_key))))){
return cljs.core.dissoc.call(null,query_cache,cache_key);
} else {
return query_cache;
}
});})(cache_key))
);
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_.call(null,query_cache,cache_key)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key);
} else {
}
} else {
}

return cljs.core.assoc.call(null,query_cache,cache_key,r);
});})(cache_key))
);

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67142 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67142;

} else {
}

return r;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$cache_lookup(var_args){
var G__67144 = arguments.length;
switch (G__67144) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subscribe(var_args){
var G__67147 = arguments.length;
switch (G__67147) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__67148 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67149 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67149;

try{try{var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5733__auto__)){
var cached = temp__5733__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67153 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67153;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67154 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67154;

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67155 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67155;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,query));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___67156 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___67157 = (end__66345__auto___67156 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___67157,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___67156);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67148;
}} else {
var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5733__auto__)){
var cached = temp__5733__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67158 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67158;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67159 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67159;

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67160 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67160;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,query));
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__67150 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67151 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67151;

try{try{var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5733__auto__)){
var cached = temp__5733__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67161 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67161;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67162 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67162;

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5735__auto___67163 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5735__auto___67163)){
var not_reactive_67164 = temp__5735__auto___67163;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_67164);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67165 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67165;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151))
);
var sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151){
return (function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151))
);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5733__auto__,_STAR_current_trace_STAR__orig_val__67150,_STAR_current_trace_STAR__temp_val__67151))
));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___67166 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___67167 = (end__66345__auto___67166 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___67167,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___67166);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67150;
}} else {
var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5733__auto__)){
var cached = temp__5733__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67168 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67168;

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67169 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67169;

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5735__auto___67170 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5735__auto___67170)){
var not_reactive_67171 = temp__5735__auto___67170;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_67171);
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67172 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67172;

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join(''));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5733__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5733__auto__))
);
var sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5733__auto__){
return (function (){
return handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5733__auto__))
);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.cache_and_return.call(null,query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5733__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5733__auto__))
));
}
}
}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_vals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__67173){
var vec__67174 = p__67173;
var k = cljs.core.nth.call(null,vec__67174,(0),null);
var v = cljs.core.nth.call(null,vec__67174,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,f,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_vals.call(null,f,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.deref_QMARK_.call(null,signals)){
return f.call(null,signals);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.to_seq = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.deref_input_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_.call(null,signals)){
cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.deref_QMARK_.call(null,signals)){
cljs.core.deref.call(null,signals);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals);

}
}
}

if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67177 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.to_seq.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.map_signals.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67177;

} else {
}

return dereffed_signals;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$reg_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67188 = arguments.length;
var i__4731__auto___67189 = (0);
while(true){
if((i__4731__auto___67189 < len__4730__auto___67188)){
args__4736__auto__.push((arguments[i__4731__auto___67189]));

var G__67190 = (i__4731__auto___67189 + (1));
i__4731__auto___67189 = G__67190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__67180 = cljs.core.count.call(null,input_args);
switch (G__67180) {
case (0):
return ((function (G__67180,computation_fn,input_args,err_header){
return (function() {
var G__67192 = null;
var G__67192__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db;
});
var G__67192__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db;
});
G__67192 = function(_,___$1){
switch(arguments.length){
case 1:
return G__67192__1.call(this,_);
case 2:
return G__67192__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67192.cljs$core$IFn$_invoke$arity$1 = G__67192__1;
G__67192.cljs$core$IFn$_invoke$arity$2 = G__67192__2;
return G__67192;
})()
;})(G__67180,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__67181 = input_args;
var marker = cljs.core.nth.call(null,vec__67181,(0),null);
var vec = cljs.core.nth.call(null,vec__67181,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__67181,marker,vec,G__67180,computation_fn,input_args,err_header){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.call(null,vec);
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe.call(null,vec);
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(vec__67181,marker,vec,G__67180,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__67180,computation_fn,input_args,err_header){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__67180,computation_fn,input_args,err_header))

}
})();
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__67184 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67185 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67185;

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67193 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67193;

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___67194 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___67195 = (end__66345__auto___67194 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___67195,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___67194);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67184;
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67196 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67196;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__67186 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67187 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67187;

try{try{var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67197 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67197;

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66345__auto___67198 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__66346__auto___67199 = (end__66345__auto___67198 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66346__auto___67199,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__66345__auto___67198);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67186;
}} else {
var subscription = computation_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66347__auto___67200 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__66347__auto___67200;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2;
day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3;
return day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq67178){
var G__67179 = cljs.core.first.call(null,seq67178);
var seq67178__$1 = cljs.core.next.call(null,seq67178);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67179,seq67178__$1);
});


//# sourceMappingURL=subs.js.map?rel=1563842222618
