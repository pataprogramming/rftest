// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__70151 = arguments.length;
switch (G__70151) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__70153 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__70154 = null;
var count__70155 = (0);
var i__70156 = (0);
while(true){
if((i__70156 < count__70155)){
var k = cljs.core._nth.call(null,chunk__70154,i__70156);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__70157 = seq__70153;
var G__70158 = chunk__70154;
var G__70159 = count__70155;
var G__70160 = (i__70156 + (1));
seq__70153 = G__70157;
chunk__70154 = G__70158;
count__70155 = G__70159;
i__70156 = G__70160;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70153);
if(temp__5735__auto__){
var seq__70153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70153__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70153__$1);
var G__70161 = cljs.core.chunk_rest.call(null,seq__70153__$1);
var G__70162 = c__4550__auto__;
var G__70163 = cljs.core.count.call(null,c__4550__auto__);
var G__70164 = (0);
seq__70153 = G__70161;
chunk__70154 = G__70162;
count__70155 = G__70163;
i__70156 = G__70164;
continue;
} else {
var k = cljs.core.first.call(null,seq__70153__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__70165 = cljs.core.next.call(null,seq__70153__$1);
var G__70166 = null;
var G__70167 = (0);
var G__70168 = (0);
seq__70153 = G__70165;
chunk__70154 = G__70166;
count__70155 = G__70167;
i__70156 = G__70168;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1563842225791
