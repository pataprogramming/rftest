// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__65404__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65405__i = 0, G__65405__a = new Array(arguments.length -  0);
while (G__65405__i < G__65405__a.length) {G__65405__a[G__65405__i] = arguments[G__65405__i + 0]; ++G__65405__i;}
  args = new cljs.core.IndexedSeq(G__65405__a,0,null);
} 
return G__65404__delegate.call(this,args);};
G__65404.cljs$lang$maxFixedArity = 0;
G__65404.cljs$lang$applyTo = (function (arglist__65406){
var args = cljs.core.seq(arglist__65406);
return G__65404__delegate(args);
});
G__65404.cljs$core$IFn$_invoke$arity$variadic = G__65404__delegate;
return G__65404;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__65407__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65408__i = 0, G__65408__a = new Array(arguments.length -  0);
while (G__65408__i < G__65408__a.length) {G__65408__a[G__65408__i] = arguments[G__65408__i + 0]; ++G__65408__i;}
  args = new cljs.core.IndexedSeq(G__65408__a,0,null);
} 
return G__65407__delegate.call(this,args);};
G__65407.cljs$lang$maxFixedArity = 0;
G__65407.cljs$lang$applyTo = (function (arglist__65409){
var args = cljs.core.seq(arglist__65409);
return G__65407__delegate(args);
});
G__65407.cljs$core$IFn$_invoke$arity$variadic = G__65407__delegate;
return G__65407;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563842220674
