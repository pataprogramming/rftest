// Compiled by ClojureScript 1.10.520 {}
goog.provide('rftest.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rftest.subs');
rftest.views.main_panel = (function rftest$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rftest.subs","name","rftest.subs/name",336889494)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from me, ",cljs.core.deref.call(null,name)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1563885434065
