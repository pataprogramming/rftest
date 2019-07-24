// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43698__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43699__i = 0, G__43699__a = new Array(arguments.length -  0);
while (G__43699__i < G__43699__a.length) {G__43699__a[G__43699__i] = arguments[G__43699__i + 0]; ++G__43699__i;}
  args = new cljs.core.IndexedSeq(G__43699__a,0,null);
} 
return G__43698__delegate.call(this,args);};
G__43698.cljs$lang$maxFixedArity = 0;
G__43698.cljs$lang$applyTo = (function (arglist__43700){
var args = cljs.core.seq(arglist__43700);
return G__43698__delegate(args);
});
G__43698.cljs$core$IFn$_invoke$arity$variadic = G__43698__delegate;
return G__43698;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43701__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43702__i = 0, G__43702__a = new Array(arguments.length -  0);
while (G__43702__i < G__43702__a.length) {G__43702__a[G__43702__i] = arguments[G__43702__i + 0]; ++G__43702__i;}
  args = new cljs.core.IndexedSeq(G__43702__a,0,null);
} 
return G__43701__delegate.call(this,args);};
G__43701.cljs$lang$maxFixedArity = 0;
G__43701.cljs$lang$applyTo = (function (arglist__43703){
var args = cljs.core.seq(arglist__43703);
return G__43701__delegate(args);
});
G__43701.cljs$core$IFn$_invoke$arity$variadic = G__43701__delegate;
return G__43701;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563842195675
