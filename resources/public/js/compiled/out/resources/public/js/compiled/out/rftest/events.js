// Compiled by ClojureScript 1.10.520 {}
goog.provide('rftest.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rftest.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rftest.events","initialize-db","rftest.events/initialize-db",229776607),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__51685__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51686__auto__ = rftest.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51686__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__51686__auto__;
}catch (e53203){var e = e53203;
throw e;
}}):(function (_,___$1){
return rftest.db.default_db;
})));

//# sourceMappingURL=events.js.map?rel=1563885446506
