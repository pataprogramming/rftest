// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__66022 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__66023 = true;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__66023;

try{return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__66022,_STAR_always_update_STAR__temp_val__66023){
return (function (){
var _STAR_always_update_STAR__orig_val__66024 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__66025 = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__66025;

try{cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__66024;
}});})(_STAR_always_update_STAR__orig_val__66022,_STAR_always_update_STAR__temp_val__66023))
);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__66022;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render(var_args){
var G__66027 = arguments.length;
switch (G__66027) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.call(null,comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp.call(null,f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var seq__66029_66033 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots)));
var chunk__66030_66034 = null;
var count__66031_66035 = (0);
var i__66032_66036 = (0);
while(true){
if((i__66032_66036 < count__66031_66035)){
var v_66037 = cljs.core._nth.call(null,chunk__66030_66034,i__66032_66036);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_66037);


var G__66038 = seq__66029_66033;
var G__66039 = chunk__66030_66034;
var G__66040 = count__66031_66035;
var G__66041 = (i__66032_66036 + (1));
seq__66029_66033 = G__66038;
chunk__66030_66034 = G__66039;
count__66031_66035 = G__66040;
i__66032_66036 = G__66041;
continue;
} else {
var temp__5735__auto___66042 = cljs.core.seq.call(null,seq__66029_66033);
if(temp__5735__auto___66042){
var seq__66029_66043__$1 = temp__5735__auto___66042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66029_66043__$1)){
var c__4550__auto___66044 = cljs.core.chunk_first.call(null,seq__66029_66043__$1);
var G__66045 = cljs.core.chunk_rest.call(null,seq__66029_66043__$1);
var G__66046 = c__4550__auto___66044;
var G__66047 = cljs.core.count.call(null,c__4550__auto___66044);
var G__66048 = (0);
seq__66029_66033 = G__66045;
chunk__66030_66034 = G__66046;
count__66031_66035 = G__66047;
i__66032_66036 = G__66048;
continue;
} else {
var v_66049 = cljs.core.first.call(null,seq__66029_66043__$1);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_66049);


var G__66050 = cljs.core.next.call(null,seq__66029_66043__$1);
var G__66051 = null;
var G__66052 = (0);
var G__66053 = (0);
seq__66029_66033 = G__66050;
chunk__66030_66034 = G__66051;
count__66031_66035 = G__66052;
i__66032_66036 = G__66053;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1563842221595
