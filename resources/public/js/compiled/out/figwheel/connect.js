// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__57076__delegate = function (x__57055__auto__){
if(cljs.core.truth_(rftest.core.mount_root)){
return cljs.core.apply.call(null,rftest.core.mount_root,x__57055__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","rftest.core/mount-root","' is missing"].join(''));
}
};
var G__57076 = function (var_args){
var x__57055__auto__ = null;
if (arguments.length > 0) {
var G__57077__i = 0, G__57077__a = new Array(arguments.length -  0);
while (G__57077__i < G__57077__a.length) {G__57077__a[G__57077__i] = arguments[G__57077__i + 0]; ++G__57077__i;}
  x__57055__auto__ = new cljs.core.IndexedSeq(G__57077__a,0,null);
} 
return G__57076__delegate.call(this,x__57055__auto__);};
G__57076.cljs$lang$maxFixedArity = 0;
G__57076.cljs$lang$applyTo = (function (arglist__57078){
var x__57055__auto__ = cljs.core.seq(arglist__57078);
return G__57076__delegate(x__57055__auto__);
});
G__57076.cljs$core$IFn$_invoke$arity$variadic = G__57076__delegate;
return G__57076;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1563843531062
