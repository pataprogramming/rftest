// Compiled by ClojureScript 1.10.520 {}
goog.provide('rftest.plumbing');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
taoensso.encore.debugf.call(null,"Initializing the sente plumbing...");
var map__51676_51678 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__51676_51679__$1 = (((((!((map__51676_51678 == null))))?(((((map__51676_51678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51676_51678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51676_51678):map__51676_51678);
var chsk_51680 = cljs.core.get.call(null,map__51676_51679__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_51681 = cljs.core.get.call(null,map__51676_51679__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_51682 = cljs.core.get.call(null,map__51676_51679__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_51683 = cljs.core.get.call(null,map__51676_51679__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rftest.plumbing.chsk = chsk_51680;

rftest.plumbing.ch_chsk = ch_recv_51681;

rftest.plumbing.chsk_send_BANG_ = send_fn_51682;

rftest.plumbing.chsk_state = state_51683;
if((typeof rftest !== 'undefined') && (typeof rftest.plumbing !== 'undefined') && (typeof rftest.plumbing.event_msg_handler !== 'undefined')){
} else {
rftest.plumbing.event_msg_handler = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rftest.plumbing","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
rftest.plumbing.event_msg_handler_STAR_ = (function rftest$plumbing$event_msg_handler_STAR_(p__51684){
var map__51685 = p__51684;
var map__51685__$1 = (((((!((map__51685 == null))))?(((((map__51685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51685):map__51685);
var ev_msg = map__51685__$1;
var id = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rftest.plumbing.event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,rftest.plumbing.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__51687){
var map__51688 = p__51687;
var map__51688__$1 = (((((!((map__51688 == null))))?(((((map__51688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51688):map__51688);
var ev_msg = map__51688__$1;
var _QMARK_data = cljs.core.get.call(null,map__51688__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return taoensso.encore.debugf.call(null,"Channel socket successfully established!");
} else {
return taoensso.encore.debugf.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,rftest.plumbing.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__51690){
var map__51691 = p__51690;
var map__51691__$1 = (((((!((map__51691 == null))))?(((((map__51691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51691):map__51691);
var ev_msg = map__51691__$1;
var _QMARK_data = cljs.core.get.call(null,map__51691__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__51693 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__51693,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__51693,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__51693,(2),null);
return taoensso.encore.debugf.call(null,"Handshake: %s",_QMARK_data);
}));
cljs.core._add_method.call(null,rftest.plumbing.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__51696){
var map__51697 = p__51696;
var map__51697__$1 = (((((!((map__51697 == null))))?(((((map__51697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51697):map__51697);
var ev_msg = map__51697__$1;
var event = cljs.core.get.call(null,map__51697__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unhandled event: %s",event);
}));
rftest.plumbing.router_ = cljs.core.atom.call(null,null);
rftest.plumbing.stop_router_BANG_ = (function rftest$plumbing$stop_router_BANG_(){
var temp__5735__auto__ = cljs.core.deref.call(null,rftest.plumbing.router_);
if(cljs.core.truth_(temp__5735__auto__)){
var stop_f = temp__5735__auto__;
return stop_f.call(null);
} else {
return null;
}
});
rftest.plumbing.start_router_BANG_ = (function rftest$plumbing$start_router_BANG_(){
rftest.plumbing.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,rftest.plumbing.router_,taoensso.sente.start_chsk_router_BANG_.call(null,rftest.plumbing.ch_chsk,rftest.plumbing.event_msg_handler_STAR_));
});
rftest.plumbing.start_BANG_ = (function rftest$plumbing$start_BANG_(){
return rftest.plumbing.start_router_BANG_.call(null);
});
rftest.plumbing.start_BANG_.call(null);

//# sourceMappingURL=plumbing.js.map?rel=1563845951234
