// Compiled by ClojureScript 1.10.520 {}
goog.provide('rftest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rftest.events');
goog.require('rftest.views');
goog.require('rftest.config');
goog.require('rftest.plumbing');
rftest.core.dev_setup = (function rftest$core$dev_setup(){
if(rftest.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
rftest.core.mount_root = (function rftest$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rftest.views.main_panel], null),document.getElementById("app"));
});
rftest.core.init = (function rftest$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rftest.events","initialize-db","rftest.events/initialize-db",229776607)], null));

rftest.core.dev_setup.call(null);

return rftest.core.mount_root.call(null);
});
goog.exportSymbol('rftest.core.init', rftest.core.init);

//# sourceMappingURL=core.js.map?rel=1563885475602
