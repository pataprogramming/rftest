// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52325 = arguments.length;
switch (G__52325) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52326 = (function (f,blockable,meta52327){
this.f = f;
this.blockable = blockable;
this.meta52327 = meta52327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52328,meta52327__$1){
var self__ = this;
var _52328__$1 = this;
return (new cljs.core.async.t_cljs$core$async52326(self__.f,self__.blockable,meta52327__$1));
});

cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52328){
var self__ = this;
var _52328__$1 = this;
return self__.meta52327;
});

cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52327","meta52327",-312492499,null)], null);
});

cljs.core.async.t_cljs$core$async52326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52326";

cljs.core.async.t_cljs$core$async52326.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async52326");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52326.
 */
cljs.core.async.__GT_t_cljs$core$async52326 = (function cljs$core$async$__GT_t_cljs$core$async52326(f__$1,blockable__$1,meta52327){
return (new cljs.core.async.t_cljs$core$async52326(f__$1,blockable__$1,meta52327));
});

}

return (new cljs.core.async.t_cljs$core$async52326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52332 = arguments.length;
switch (G__52332) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52335 = arguments.length;
switch (G__52335) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52338 = arguments.length;
switch (G__52338) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_52340 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52340);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52340,ret){
return (function (){
return fn1.call(null,val_52340);
});})(val_52340,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52342 = arguments.length;
switch (G__52342) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___52344 = n;
var x_52345 = (0);
while(true){
if((x_52345 < n__4607__auto___52344)){
(a[x_52345] = x_52345);

var G__52346 = (x_52345 + (1));
x_52345 = G__52346;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52347 = (function (flag,meta52348){
this.flag = flag;
this.meta52348 = meta52348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52349,meta52348__$1){
var self__ = this;
var _52349__$1 = this;
return (new cljs.core.async.t_cljs$core$async52347(self__.flag,meta52348__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52349){
var self__ = this;
var _52349__$1 = this;
return self__.meta52348;
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52348","meta52348",1047243618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52347";

cljs.core.async.t_cljs$core$async52347.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async52347");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52347.
 */
cljs.core.async.__GT_t_cljs$core$async52347 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52347(flag__$1,meta52348){
return (new cljs.core.async.t_cljs$core$async52347(flag__$1,meta52348));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52347(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52350 = (function (flag,cb,meta52351){
this.flag = flag;
this.cb = cb;
this.meta52351 = meta52351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52352,meta52351__$1){
var self__ = this;
var _52352__$1 = this;
return (new cljs.core.async.t_cljs$core$async52350(self__.flag,self__.cb,meta52351__$1));
});

cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52352){
var self__ = this;
var _52352__$1 = this;
return self__.meta52351;
});

cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52351","meta52351",1767728504,null)], null);
});

cljs.core.async.t_cljs$core$async52350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52350";

cljs.core.async.t_cljs$core$async52350.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async52350");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52350.
 */
cljs.core.async.__GT_t_cljs$core$async52350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52350(flag__$1,cb__$1,meta52351){
return (new cljs.core.async.t_cljs$core$async52350(flag__$1,cb__$1,meta52351));
});

}

return (new cljs.core.async.t_cljs$core$async52350(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52353_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52354_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52354_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52355 = (i + (1));
i = G__52355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52361 = arguments.length;
var i__4731__auto___52362 = (0);
while(true){
if((i__4731__auto___52362 < len__4730__auto___52361)){
args__4736__auto__.push((arguments[i__4731__auto___52362]));

var G__52363 = (i__4731__auto___52362 + (1));
i__4731__auto___52362 = G__52363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52358){
var map__52359 = p__52358;
var map__52359__$1 = (((((!((map__52359 == null))))?(((((map__52359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52359):map__52359);
var opts = map__52359__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52356){
var G__52357 = cljs.core.first.call(null,seq52356);
var seq52356__$1 = cljs.core.next.call(null,seq52356);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52357,seq52356__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52365 = arguments.length;
switch (G__52365) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50402__auto___52411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___52411){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___52411){
return (function (state_52389){
var state_val_52390 = (state_52389[(1)]);
if((state_val_52390 === (7))){
var inst_52385 = (state_52389[(2)]);
var state_52389__$1 = state_52389;
var statearr_52391_52412 = state_52389__$1;
(statearr_52391_52412[(2)] = inst_52385);

(statearr_52391_52412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (1))){
var state_52389__$1 = state_52389;
var statearr_52392_52413 = state_52389__$1;
(statearr_52392_52413[(2)] = null);

(statearr_52392_52413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (4))){
var inst_52368 = (state_52389[(7)]);
var inst_52368__$1 = (state_52389[(2)]);
var inst_52369 = (inst_52368__$1 == null);
var state_52389__$1 = (function (){var statearr_52393 = state_52389;
(statearr_52393[(7)] = inst_52368__$1);

return statearr_52393;
})();
if(cljs.core.truth_(inst_52369)){
var statearr_52394_52414 = state_52389__$1;
(statearr_52394_52414[(1)] = (5));

} else {
var statearr_52395_52415 = state_52389__$1;
(statearr_52395_52415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (13))){
var state_52389__$1 = state_52389;
var statearr_52396_52416 = state_52389__$1;
(statearr_52396_52416[(2)] = null);

(statearr_52396_52416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (6))){
var inst_52368 = (state_52389[(7)]);
var state_52389__$1 = state_52389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52389__$1,(11),to,inst_52368);
} else {
if((state_val_52390 === (3))){
var inst_52387 = (state_52389[(2)]);
var state_52389__$1 = state_52389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52389__$1,inst_52387);
} else {
if((state_val_52390 === (12))){
var state_52389__$1 = state_52389;
var statearr_52397_52417 = state_52389__$1;
(statearr_52397_52417[(2)] = null);

(statearr_52397_52417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (2))){
var state_52389__$1 = state_52389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52389__$1,(4),from);
} else {
if((state_val_52390 === (11))){
var inst_52378 = (state_52389[(2)]);
var state_52389__$1 = state_52389;
if(cljs.core.truth_(inst_52378)){
var statearr_52398_52418 = state_52389__$1;
(statearr_52398_52418[(1)] = (12));

} else {
var statearr_52399_52419 = state_52389__$1;
(statearr_52399_52419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (9))){
var state_52389__$1 = state_52389;
var statearr_52400_52420 = state_52389__$1;
(statearr_52400_52420[(2)] = null);

(statearr_52400_52420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (5))){
var state_52389__$1 = state_52389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52401_52421 = state_52389__$1;
(statearr_52401_52421[(1)] = (8));

} else {
var statearr_52402_52422 = state_52389__$1;
(statearr_52402_52422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (14))){
var inst_52383 = (state_52389[(2)]);
var state_52389__$1 = state_52389;
var statearr_52403_52423 = state_52389__$1;
(statearr_52403_52423[(2)] = inst_52383);

(statearr_52403_52423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (10))){
var inst_52375 = (state_52389[(2)]);
var state_52389__$1 = state_52389;
var statearr_52404_52424 = state_52389__$1;
(statearr_52404_52424[(2)] = inst_52375);

(statearr_52404_52424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52390 === (8))){
var inst_52372 = cljs.core.async.close_BANG_.call(null,to);
var state_52389__$1 = state_52389;
var statearr_52405_52425 = state_52389__$1;
(statearr_52405_52425[(2)] = inst_52372);

(statearr_52405_52425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___52411))
;
return ((function (switch__50235__auto__,c__50402__auto___52411){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_52406 = [null,null,null,null,null,null,null,null];
(statearr_52406[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_52406[(1)] = (1));

return statearr_52406;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_52389){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52407){if((e52407 instanceof Object)){
var ex__50239__auto__ = e52407;
var statearr_52408_52426 = state_52389;
(statearr_52408_52426[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52427 = state_52389;
state_52389 = G__52427;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_52389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_52389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___52411))
})();
var state__50404__auto__ = (function (){var statearr_52409 = f__50403__auto__.call(null);
(statearr_52409[(6)] = c__50402__auto___52411);

return statearr_52409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___52411))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__52428){
var vec__52429 = p__52428;
var v = cljs.core.nth.call(null,vec__52429,(0),null);
var p = cljs.core.nth.call(null,vec__52429,(1),null);
var job = vec__52429;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__50402__auto___52600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results){
return (function (state_52436){
var state_val_52437 = (state_52436[(1)]);
if((state_val_52437 === (1))){
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52436__$1,(2),res,v);
} else {
if((state_val_52437 === (2))){
var inst_52433 = (state_52436[(2)]);
var inst_52434 = cljs.core.async.close_BANG_.call(null,res);
var state_52436__$1 = (function (){var statearr_52438 = state_52436;
(statearr_52438[(7)] = inst_52433);

return statearr_52438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52436__$1,inst_52434);
} else {
return null;
}
}
});})(c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results))
;
return ((function (switch__50235__auto__,c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_52439 = [null,null,null,null,null,null,null,null];
(statearr_52439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__);

(statearr_52439[(1)] = (1));

return statearr_52439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1 = (function (state_52436){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52440){if((e52440 instanceof Object)){
var ex__50239__auto__ = e52440;
var statearr_52441_52601 = state_52436;
(statearr_52441_52601[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52602 = state_52436;
state_52436 = G__52602;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = function(state_52436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1.call(this,state_52436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results))
})();
var state__50404__auto__ = (function (){var statearr_52442 = f__50403__auto__.call(null);
(statearr_52442[(6)] = c__50402__auto___52600);

return statearr_52442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___52600,res,vec__52429,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52443){
var vec__52444 = p__52443;
var v = cljs.core.nth.call(null,vec__52444,(0),null);
var p = cljs.core.nth.call(null,vec__52444,(1),null);
var job = vec__52444;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___52603 = n;
var __52604 = (0);
while(true){
if((__52604 < n__4607__auto___52603)){
var G__52447_52605 = type;
var G__52447_52606__$1 = (((G__52447_52605 instanceof cljs.core.Keyword))?G__52447_52605.fqn:null);
switch (G__52447_52606__$1) {
case "compute":
var c__50402__auto___52608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52604,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (__52604,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function (state_52460){
var state_val_52461 = (state_52460[(1)]);
if((state_val_52461 === (1))){
var state_52460__$1 = state_52460;
var statearr_52462_52609 = state_52460__$1;
(statearr_52462_52609[(2)] = null);

(statearr_52462_52609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (2))){
var state_52460__$1 = state_52460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52460__$1,(4),jobs);
} else {
if((state_val_52461 === (3))){
var inst_52458 = (state_52460[(2)]);
var state_52460__$1 = state_52460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52460__$1,inst_52458);
} else {
if((state_val_52461 === (4))){
var inst_52450 = (state_52460[(2)]);
var inst_52451 = process.call(null,inst_52450);
var state_52460__$1 = state_52460;
if(cljs.core.truth_(inst_52451)){
var statearr_52463_52610 = state_52460__$1;
(statearr_52463_52610[(1)] = (5));

} else {
var statearr_52464_52611 = state_52460__$1;
(statearr_52464_52611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (5))){
var state_52460__$1 = state_52460;
var statearr_52465_52612 = state_52460__$1;
(statearr_52465_52612[(2)] = null);

(statearr_52465_52612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (6))){
var state_52460__$1 = state_52460;
var statearr_52466_52613 = state_52460__$1;
(statearr_52466_52613[(2)] = null);

(statearr_52466_52613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (7))){
var inst_52456 = (state_52460[(2)]);
var state_52460__$1 = state_52460;
var statearr_52467_52614 = state_52460__$1;
(statearr_52467_52614[(2)] = inst_52456);

(statearr_52467_52614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52604,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
;
return ((function (__52604,switch__50235__auto__,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_52468 = [null,null,null,null,null,null,null];
(statearr_52468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__);

(statearr_52468[(1)] = (1));

return statearr_52468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1 = (function (state_52460){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52469){if((e52469 instanceof Object)){
var ex__50239__auto__ = e52469;
var statearr_52470_52615 = state_52460;
(statearr_52470_52615[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52616 = state_52460;
state_52460 = G__52616;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = function(state_52460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1.call(this,state_52460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__;
})()
;})(__52604,switch__50235__auto__,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
})();
var state__50404__auto__ = (function (){var statearr_52471 = f__50403__auto__.call(null);
(statearr_52471[(6)] = c__50402__auto___52608);

return statearr_52471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(__52604,c__50402__auto___52608,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
);


break;
case "async":
var c__50402__auto___52617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52604,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (__52604,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function (state_52484){
var state_val_52485 = (state_52484[(1)]);
if((state_val_52485 === (1))){
var state_52484__$1 = state_52484;
var statearr_52486_52618 = state_52484__$1;
(statearr_52486_52618[(2)] = null);

(statearr_52486_52618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52485 === (2))){
var state_52484__$1 = state_52484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52484__$1,(4),jobs);
} else {
if((state_val_52485 === (3))){
var inst_52482 = (state_52484[(2)]);
var state_52484__$1 = state_52484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52484__$1,inst_52482);
} else {
if((state_val_52485 === (4))){
var inst_52474 = (state_52484[(2)]);
var inst_52475 = async.call(null,inst_52474);
var state_52484__$1 = state_52484;
if(cljs.core.truth_(inst_52475)){
var statearr_52487_52619 = state_52484__$1;
(statearr_52487_52619[(1)] = (5));

} else {
var statearr_52488_52620 = state_52484__$1;
(statearr_52488_52620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52485 === (5))){
var state_52484__$1 = state_52484;
var statearr_52489_52621 = state_52484__$1;
(statearr_52489_52621[(2)] = null);

(statearr_52489_52621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52485 === (6))){
var state_52484__$1 = state_52484;
var statearr_52490_52622 = state_52484__$1;
(statearr_52490_52622[(2)] = null);

(statearr_52490_52622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52485 === (7))){
var inst_52480 = (state_52484[(2)]);
var state_52484__$1 = state_52484;
var statearr_52491_52623 = state_52484__$1;
(statearr_52491_52623[(2)] = inst_52480);

(statearr_52491_52623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52604,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
;
return ((function (__52604,switch__50235__auto__,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_52492 = [null,null,null,null,null,null,null];
(statearr_52492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__);

(statearr_52492[(1)] = (1));

return statearr_52492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1 = (function (state_52484){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52493){if((e52493 instanceof Object)){
var ex__50239__auto__ = e52493;
var statearr_52494_52624 = state_52484;
(statearr_52494_52624[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52625 = state_52484;
state_52484 = G__52625;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = function(state_52484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1.call(this,state_52484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__;
})()
;})(__52604,switch__50235__auto__,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
})();
var state__50404__auto__ = (function (){var statearr_52495 = f__50403__auto__.call(null);
(statearr_52495[(6)] = c__50402__auto___52617);

return statearr_52495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(__52604,c__50402__auto___52617,G__52447_52605,G__52447_52606__$1,n__4607__auto___52603,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52447_52606__$1)].join('')));

}

var G__52626 = (__52604 + (1));
__52604 = G__52626;
continue;
} else {
}
break;
}

var c__50402__auto___52627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___52627,jobs,results,process,async){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___52627,jobs,results,process,async){
return (function (state_52517){
var state_val_52518 = (state_52517[(1)]);
if((state_val_52518 === (7))){
var inst_52513 = (state_52517[(2)]);
var state_52517__$1 = state_52517;
var statearr_52519_52628 = state_52517__$1;
(statearr_52519_52628[(2)] = inst_52513);

(statearr_52519_52628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52518 === (1))){
var state_52517__$1 = state_52517;
var statearr_52520_52629 = state_52517__$1;
(statearr_52520_52629[(2)] = null);

(statearr_52520_52629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52518 === (4))){
var inst_52498 = (state_52517[(7)]);
var inst_52498__$1 = (state_52517[(2)]);
var inst_52499 = (inst_52498__$1 == null);
var state_52517__$1 = (function (){var statearr_52521 = state_52517;
(statearr_52521[(7)] = inst_52498__$1);

return statearr_52521;
})();
if(cljs.core.truth_(inst_52499)){
var statearr_52522_52630 = state_52517__$1;
(statearr_52522_52630[(1)] = (5));

} else {
var statearr_52523_52631 = state_52517__$1;
(statearr_52523_52631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52518 === (6))){
var inst_52503 = (state_52517[(8)]);
var inst_52498 = (state_52517[(7)]);
var inst_52503__$1 = cljs.core.async.chan.call(null,(1));
var inst_52504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52505 = [inst_52498,inst_52503__$1];
var inst_52506 = (new cljs.core.PersistentVector(null,2,(5),inst_52504,inst_52505,null));
var state_52517__$1 = (function (){var statearr_52524 = state_52517;
(statearr_52524[(8)] = inst_52503__$1);

return statearr_52524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52517__$1,(8),jobs,inst_52506);
} else {
if((state_val_52518 === (3))){
var inst_52515 = (state_52517[(2)]);
var state_52517__$1 = state_52517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52517__$1,inst_52515);
} else {
if((state_val_52518 === (2))){
var state_52517__$1 = state_52517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52517__$1,(4),from);
} else {
if((state_val_52518 === (9))){
var inst_52510 = (state_52517[(2)]);
var state_52517__$1 = (function (){var statearr_52525 = state_52517;
(statearr_52525[(9)] = inst_52510);

return statearr_52525;
})();
var statearr_52526_52632 = state_52517__$1;
(statearr_52526_52632[(2)] = null);

(statearr_52526_52632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52518 === (5))){
var inst_52501 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52517__$1 = state_52517;
var statearr_52527_52633 = state_52517__$1;
(statearr_52527_52633[(2)] = inst_52501);

(statearr_52527_52633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52518 === (8))){
var inst_52503 = (state_52517[(8)]);
var inst_52508 = (state_52517[(2)]);
var state_52517__$1 = (function (){var statearr_52528 = state_52517;
(statearr_52528[(10)] = inst_52508);

return statearr_52528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52517__$1,(9),results,inst_52503);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___52627,jobs,results,process,async))
;
return ((function (switch__50235__auto__,c__50402__auto___52627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_52529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__);

(statearr_52529[(1)] = (1));

return statearr_52529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1 = (function (state_52517){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52530){if((e52530 instanceof Object)){
var ex__50239__auto__ = e52530;
var statearr_52531_52634 = state_52517;
(statearr_52531_52634[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52635 = state_52517;
state_52517 = G__52635;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = function(state_52517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1.call(this,state_52517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___52627,jobs,results,process,async))
})();
var state__50404__auto__ = (function (){var statearr_52532 = f__50403__auto__.call(null);
(statearr_52532[(6)] = c__50402__auto___52627);

return statearr_52532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___52627,jobs,results,process,async))
);


var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__,jobs,results,process,async){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__,jobs,results,process,async){
return (function (state_52570){
var state_val_52571 = (state_52570[(1)]);
if((state_val_52571 === (7))){
var inst_52566 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
var statearr_52572_52636 = state_52570__$1;
(statearr_52572_52636[(2)] = inst_52566);

(statearr_52572_52636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (20))){
var state_52570__$1 = state_52570;
var statearr_52573_52637 = state_52570__$1;
(statearr_52573_52637[(2)] = null);

(statearr_52573_52637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (1))){
var state_52570__$1 = state_52570;
var statearr_52574_52638 = state_52570__$1;
(statearr_52574_52638[(2)] = null);

(statearr_52574_52638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (4))){
var inst_52535 = (state_52570[(7)]);
var inst_52535__$1 = (state_52570[(2)]);
var inst_52536 = (inst_52535__$1 == null);
var state_52570__$1 = (function (){var statearr_52575 = state_52570;
(statearr_52575[(7)] = inst_52535__$1);

return statearr_52575;
})();
if(cljs.core.truth_(inst_52536)){
var statearr_52576_52639 = state_52570__$1;
(statearr_52576_52639[(1)] = (5));

} else {
var statearr_52577_52640 = state_52570__$1;
(statearr_52577_52640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (15))){
var inst_52548 = (state_52570[(8)]);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52570__$1,(18),to,inst_52548);
} else {
if((state_val_52571 === (21))){
var inst_52561 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
var statearr_52578_52641 = state_52570__$1;
(statearr_52578_52641[(2)] = inst_52561);

(statearr_52578_52641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (13))){
var inst_52563 = (state_52570[(2)]);
var state_52570__$1 = (function (){var statearr_52579 = state_52570;
(statearr_52579[(9)] = inst_52563);

return statearr_52579;
})();
var statearr_52580_52642 = state_52570__$1;
(statearr_52580_52642[(2)] = null);

(statearr_52580_52642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (6))){
var inst_52535 = (state_52570[(7)]);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52570__$1,(11),inst_52535);
} else {
if((state_val_52571 === (17))){
var inst_52556 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
if(cljs.core.truth_(inst_52556)){
var statearr_52581_52643 = state_52570__$1;
(statearr_52581_52643[(1)] = (19));

} else {
var statearr_52582_52644 = state_52570__$1;
(statearr_52582_52644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (3))){
var inst_52568 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52570__$1,inst_52568);
} else {
if((state_val_52571 === (12))){
var inst_52545 = (state_52570[(10)]);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52570__$1,(14),inst_52545);
} else {
if((state_val_52571 === (2))){
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52570__$1,(4),results);
} else {
if((state_val_52571 === (19))){
var state_52570__$1 = state_52570;
var statearr_52583_52645 = state_52570__$1;
(statearr_52583_52645[(2)] = null);

(statearr_52583_52645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (11))){
var inst_52545 = (state_52570[(2)]);
var state_52570__$1 = (function (){var statearr_52584 = state_52570;
(statearr_52584[(10)] = inst_52545);

return statearr_52584;
})();
var statearr_52585_52646 = state_52570__$1;
(statearr_52585_52646[(2)] = null);

(statearr_52585_52646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (9))){
var state_52570__$1 = state_52570;
var statearr_52586_52647 = state_52570__$1;
(statearr_52586_52647[(2)] = null);

(statearr_52586_52647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (5))){
var state_52570__$1 = state_52570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52587_52648 = state_52570__$1;
(statearr_52587_52648[(1)] = (8));

} else {
var statearr_52588_52649 = state_52570__$1;
(statearr_52588_52649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (14))){
var inst_52550 = (state_52570[(11)]);
var inst_52548 = (state_52570[(8)]);
var inst_52548__$1 = (state_52570[(2)]);
var inst_52549 = (inst_52548__$1 == null);
var inst_52550__$1 = cljs.core.not.call(null,inst_52549);
var state_52570__$1 = (function (){var statearr_52589 = state_52570;
(statearr_52589[(11)] = inst_52550__$1);

(statearr_52589[(8)] = inst_52548__$1);

return statearr_52589;
})();
if(inst_52550__$1){
var statearr_52590_52650 = state_52570__$1;
(statearr_52590_52650[(1)] = (15));

} else {
var statearr_52591_52651 = state_52570__$1;
(statearr_52591_52651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (16))){
var inst_52550 = (state_52570[(11)]);
var state_52570__$1 = state_52570;
var statearr_52592_52652 = state_52570__$1;
(statearr_52592_52652[(2)] = inst_52550);

(statearr_52592_52652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (10))){
var inst_52542 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
var statearr_52593_52653 = state_52570__$1;
(statearr_52593_52653[(2)] = inst_52542);

(statearr_52593_52653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (18))){
var inst_52553 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
var statearr_52594_52654 = state_52570__$1;
(statearr_52594_52654[(2)] = inst_52553);

(statearr_52594_52654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52571 === (8))){
var inst_52539 = cljs.core.async.close_BANG_.call(null,to);
var state_52570__$1 = state_52570;
var statearr_52595_52655 = state_52570__$1;
(statearr_52595_52655[(2)] = inst_52539);

(statearr_52595_52655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto__,jobs,results,process,async))
;
return ((function (switch__50235__auto__,c__50402__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_52596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__);

(statearr_52596[(1)] = (1));

return statearr_52596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1 = (function (state_52570){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52597){if((e52597 instanceof Object)){
var ex__50239__auto__ = e52597;
var statearr_52598_52656 = state_52570;
(statearr_52598_52656[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52657 = state_52570;
state_52570 = G__52657;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__ = function(state_52570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1.call(this,state_52570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__,jobs,results,process,async))
})();
var state__50404__auto__ = (function (){var statearr_52599 = f__50403__auto__.call(null);
(statearr_52599[(6)] = c__50402__auto__);

return statearr_52599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__,jobs,results,process,async))
);

return c__50402__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52659 = arguments.length;
switch (G__52659) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52662 = arguments.length;
switch (G__52662) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52665 = arguments.length;
switch (G__52665) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__50402__auto___52714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___52714,tc,fc){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___52714,tc,fc){
return (function (state_52691){
var state_val_52692 = (state_52691[(1)]);
if((state_val_52692 === (7))){
var inst_52687 = (state_52691[(2)]);
var state_52691__$1 = state_52691;
var statearr_52693_52715 = state_52691__$1;
(statearr_52693_52715[(2)] = inst_52687);

(statearr_52693_52715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (1))){
var state_52691__$1 = state_52691;
var statearr_52694_52716 = state_52691__$1;
(statearr_52694_52716[(2)] = null);

(statearr_52694_52716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (4))){
var inst_52668 = (state_52691[(7)]);
var inst_52668__$1 = (state_52691[(2)]);
var inst_52669 = (inst_52668__$1 == null);
var state_52691__$1 = (function (){var statearr_52695 = state_52691;
(statearr_52695[(7)] = inst_52668__$1);

return statearr_52695;
})();
if(cljs.core.truth_(inst_52669)){
var statearr_52696_52717 = state_52691__$1;
(statearr_52696_52717[(1)] = (5));

} else {
var statearr_52697_52718 = state_52691__$1;
(statearr_52697_52718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (13))){
var state_52691__$1 = state_52691;
var statearr_52698_52719 = state_52691__$1;
(statearr_52698_52719[(2)] = null);

(statearr_52698_52719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (6))){
var inst_52668 = (state_52691[(7)]);
var inst_52674 = p.call(null,inst_52668);
var state_52691__$1 = state_52691;
if(cljs.core.truth_(inst_52674)){
var statearr_52699_52720 = state_52691__$1;
(statearr_52699_52720[(1)] = (9));

} else {
var statearr_52700_52721 = state_52691__$1;
(statearr_52700_52721[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (3))){
var inst_52689 = (state_52691[(2)]);
var state_52691__$1 = state_52691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52691__$1,inst_52689);
} else {
if((state_val_52692 === (12))){
var state_52691__$1 = state_52691;
var statearr_52701_52722 = state_52691__$1;
(statearr_52701_52722[(2)] = null);

(statearr_52701_52722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (2))){
var state_52691__$1 = state_52691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52691__$1,(4),ch);
} else {
if((state_val_52692 === (11))){
var inst_52668 = (state_52691[(7)]);
var inst_52678 = (state_52691[(2)]);
var state_52691__$1 = state_52691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52691__$1,(8),inst_52678,inst_52668);
} else {
if((state_val_52692 === (9))){
var state_52691__$1 = state_52691;
var statearr_52702_52723 = state_52691__$1;
(statearr_52702_52723[(2)] = tc);

(statearr_52702_52723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (5))){
var inst_52671 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52672 = cljs.core.async.close_BANG_.call(null,fc);
var state_52691__$1 = (function (){var statearr_52703 = state_52691;
(statearr_52703[(8)] = inst_52671);

return statearr_52703;
})();
var statearr_52704_52724 = state_52691__$1;
(statearr_52704_52724[(2)] = inst_52672);

(statearr_52704_52724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (14))){
var inst_52685 = (state_52691[(2)]);
var state_52691__$1 = state_52691;
var statearr_52705_52725 = state_52691__$1;
(statearr_52705_52725[(2)] = inst_52685);

(statearr_52705_52725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (10))){
var state_52691__$1 = state_52691;
var statearr_52706_52726 = state_52691__$1;
(statearr_52706_52726[(2)] = fc);

(statearr_52706_52726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52692 === (8))){
var inst_52680 = (state_52691[(2)]);
var state_52691__$1 = state_52691;
if(cljs.core.truth_(inst_52680)){
var statearr_52707_52727 = state_52691__$1;
(statearr_52707_52727[(1)] = (12));

} else {
var statearr_52708_52728 = state_52691__$1;
(statearr_52708_52728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___52714,tc,fc))
;
return ((function (switch__50235__auto__,c__50402__auto___52714,tc,fc){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_52709 = [null,null,null,null,null,null,null,null,null];
(statearr_52709[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_52709[(1)] = (1));

return statearr_52709;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_52691){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52710){if((e52710 instanceof Object)){
var ex__50239__auto__ = e52710;
var statearr_52711_52729 = state_52691;
(statearr_52711_52729[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52730 = state_52691;
state_52691 = G__52730;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_52691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_52691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___52714,tc,fc))
})();
var state__50404__auto__ = (function (){var statearr_52712 = f__50403__auto__.call(null);
(statearr_52712[(6)] = c__50402__auto___52714);

return statearr_52712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___52714,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__){
return (function (state_52751){
var state_val_52752 = (state_52751[(1)]);
if((state_val_52752 === (7))){
var inst_52747 = (state_52751[(2)]);
var state_52751__$1 = state_52751;
var statearr_52753_52771 = state_52751__$1;
(statearr_52753_52771[(2)] = inst_52747);

(statearr_52753_52771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (1))){
var inst_52731 = init;
var state_52751__$1 = (function (){var statearr_52754 = state_52751;
(statearr_52754[(7)] = inst_52731);

return statearr_52754;
})();
var statearr_52755_52772 = state_52751__$1;
(statearr_52755_52772[(2)] = null);

(statearr_52755_52772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (4))){
var inst_52734 = (state_52751[(8)]);
var inst_52734__$1 = (state_52751[(2)]);
var inst_52735 = (inst_52734__$1 == null);
var state_52751__$1 = (function (){var statearr_52756 = state_52751;
(statearr_52756[(8)] = inst_52734__$1);

return statearr_52756;
})();
if(cljs.core.truth_(inst_52735)){
var statearr_52757_52773 = state_52751__$1;
(statearr_52757_52773[(1)] = (5));

} else {
var statearr_52758_52774 = state_52751__$1;
(statearr_52758_52774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (6))){
var inst_52731 = (state_52751[(7)]);
var inst_52738 = (state_52751[(9)]);
var inst_52734 = (state_52751[(8)]);
var inst_52738__$1 = f.call(null,inst_52731,inst_52734);
var inst_52739 = cljs.core.reduced_QMARK_.call(null,inst_52738__$1);
var state_52751__$1 = (function (){var statearr_52759 = state_52751;
(statearr_52759[(9)] = inst_52738__$1);

return statearr_52759;
})();
if(inst_52739){
var statearr_52760_52775 = state_52751__$1;
(statearr_52760_52775[(1)] = (8));

} else {
var statearr_52761_52776 = state_52751__$1;
(statearr_52761_52776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (3))){
var inst_52749 = (state_52751[(2)]);
var state_52751__$1 = state_52751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52751__$1,inst_52749);
} else {
if((state_val_52752 === (2))){
var state_52751__$1 = state_52751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52751__$1,(4),ch);
} else {
if((state_val_52752 === (9))){
var inst_52738 = (state_52751[(9)]);
var inst_52731 = inst_52738;
var state_52751__$1 = (function (){var statearr_52762 = state_52751;
(statearr_52762[(7)] = inst_52731);

return statearr_52762;
})();
var statearr_52763_52777 = state_52751__$1;
(statearr_52763_52777[(2)] = null);

(statearr_52763_52777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (5))){
var inst_52731 = (state_52751[(7)]);
var state_52751__$1 = state_52751;
var statearr_52764_52778 = state_52751__$1;
(statearr_52764_52778[(2)] = inst_52731);

(statearr_52764_52778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (10))){
var inst_52745 = (state_52751[(2)]);
var state_52751__$1 = state_52751;
var statearr_52765_52779 = state_52751__$1;
(statearr_52765_52779[(2)] = inst_52745);

(statearr_52765_52779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52752 === (8))){
var inst_52738 = (state_52751[(9)]);
var inst_52741 = cljs.core.deref.call(null,inst_52738);
var state_52751__$1 = state_52751;
var statearr_52766_52780 = state_52751__$1;
(statearr_52766_52780[(2)] = inst_52741);

(statearr_52766_52780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50236__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50236__auto____0 = (function (){
var statearr_52767 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52767[(0)] = cljs$core$async$reduce_$_state_machine__50236__auto__);

(statearr_52767[(1)] = (1));

return statearr_52767;
});
var cljs$core$async$reduce_$_state_machine__50236__auto____1 = (function (state_52751){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52768){if((e52768 instanceof Object)){
var ex__50239__auto__ = e52768;
var statearr_52769_52781 = state_52751;
(statearr_52769_52781[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52782 = state_52751;
state_52751 = G__52782;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50236__auto__ = function(state_52751){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50236__auto____1.call(this,state_52751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50236__auto____0;
cljs$core$async$reduce_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50236__auto____1;
return cljs$core$async$reduce_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__))
})();
var state__50404__auto__ = (function (){var statearr_52770 = f__50403__auto__.call(null);
(statearr_52770[(6)] = c__50402__auto__);

return statearr_52770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__))
);

return c__50402__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__,f__$1){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__,f__$1){
return (function (state_52788){
var state_val_52789 = (state_52788[(1)]);
if((state_val_52789 === (1))){
var inst_52783 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_52788__$1 = state_52788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52788__$1,(2),inst_52783);
} else {
if((state_val_52789 === (2))){
var inst_52785 = (state_52788[(2)]);
var inst_52786 = f__$1.call(null,inst_52785);
var state_52788__$1 = state_52788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52788__$1,inst_52786);
} else {
return null;
}
}
});})(c__50402__auto__,f__$1))
;
return ((function (switch__50235__auto__,c__50402__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50236__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50236__auto____0 = (function (){
var statearr_52790 = [null,null,null,null,null,null,null];
(statearr_52790[(0)] = cljs$core$async$transduce_$_state_machine__50236__auto__);

(statearr_52790[(1)] = (1));

return statearr_52790;
});
var cljs$core$async$transduce_$_state_machine__50236__auto____1 = (function (state_52788){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52791){if((e52791 instanceof Object)){
var ex__50239__auto__ = e52791;
var statearr_52792_52794 = state_52788;
(statearr_52792_52794[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52795 = state_52788;
state_52788 = G__52795;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50236__auto__ = function(state_52788){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50236__auto____1.call(this,state_52788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50236__auto____0;
cljs$core$async$transduce_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50236__auto____1;
return cljs$core$async$transduce_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__,f__$1))
})();
var state__50404__auto__ = (function (){var statearr_52793 = f__50403__auto__.call(null);
(statearr_52793[(6)] = c__50402__auto__);

return statearr_52793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__,f__$1))
);

return c__50402__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52797 = arguments.length;
switch (G__52797) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__){
return (function (state_52822){
var state_val_52823 = (state_52822[(1)]);
if((state_val_52823 === (7))){
var inst_52804 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
var statearr_52824_52845 = state_52822__$1;
(statearr_52824_52845[(2)] = inst_52804);

(statearr_52824_52845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (1))){
var inst_52798 = cljs.core.seq.call(null,coll);
var inst_52799 = inst_52798;
var state_52822__$1 = (function (){var statearr_52825 = state_52822;
(statearr_52825[(7)] = inst_52799);

return statearr_52825;
})();
var statearr_52826_52846 = state_52822__$1;
(statearr_52826_52846[(2)] = null);

(statearr_52826_52846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (4))){
var inst_52799 = (state_52822[(7)]);
var inst_52802 = cljs.core.first.call(null,inst_52799);
var state_52822__$1 = state_52822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52822__$1,(7),ch,inst_52802);
} else {
if((state_val_52823 === (13))){
var inst_52816 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
var statearr_52827_52847 = state_52822__$1;
(statearr_52827_52847[(2)] = inst_52816);

(statearr_52827_52847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (6))){
var inst_52807 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
if(cljs.core.truth_(inst_52807)){
var statearr_52828_52848 = state_52822__$1;
(statearr_52828_52848[(1)] = (8));

} else {
var statearr_52829_52849 = state_52822__$1;
(statearr_52829_52849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (3))){
var inst_52820 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52822__$1,inst_52820);
} else {
if((state_val_52823 === (12))){
var state_52822__$1 = state_52822;
var statearr_52830_52850 = state_52822__$1;
(statearr_52830_52850[(2)] = null);

(statearr_52830_52850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (2))){
var inst_52799 = (state_52822[(7)]);
var state_52822__$1 = state_52822;
if(cljs.core.truth_(inst_52799)){
var statearr_52831_52851 = state_52822__$1;
(statearr_52831_52851[(1)] = (4));

} else {
var statearr_52832_52852 = state_52822__$1;
(statearr_52832_52852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (11))){
var inst_52813 = cljs.core.async.close_BANG_.call(null,ch);
var state_52822__$1 = state_52822;
var statearr_52833_52853 = state_52822__$1;
(statearr_52833_52853[(2)] = inst_52813);

(statearr_52833_52853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (9))){
var state_52822__$1 = state_52822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52834_52854 = state_52822__$1;
(statearr_52834_52854[(1)] = (11));

} else {
var statearr_52835_52855 = state_52822__$1;
(statearr_52835_52855[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (5))){
var inst_52799 = (state_52822[(7)]);
var state_52822__$1 = state_52822;
var statearr_52836_52856 = state_52822__$1;
(statearr_52836_52856[(2)] = inst_52799);

(statearr_52836_52856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (10))){
var inst_52818 = (state_52822[(2)]);
var state_52822__$1 = state_52822;
var statearr_52837_52857 = state_52822__$1;
(statearr_52837_52857[(2)] = inst_52818);

(statearr_52837_52857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52823 === (8))){
var inst_52799 = (state_52822[(7)]);
var inst_52809 = cljs.core.next.call(null,inst_52799);
var inst_52799__$1 = inst_52809;
var state_52822__$1 = (function (){var statearr_52838 = state_52822;
(statearr_52838[(7)] = inst_52799__$1);

return statearr_52838;
})();
var statearr_52839_52858 = state_52822__$1;
(statearr_52839_52858[(2)] = null);

(statearr_52839_52858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_52840 = [null,null,null,null,null,null,null,null];
(statearr_52840[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_52840[(1)] = (1));

return statearr_52840;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_52822){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e52841){if((e52841 instanceof Object)){
var ex__50239__auto__ = e52841;
var statearr_52842_52859 = state_52822;
(statearr_52842_52859[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52860 = state_52822;
state_52822 = G__52860;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_52822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_52822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__))
})();
var state__50404__auto__ = (function (){var statearr_52843 = f__50403__auto__.call(null);
(statearr_52843[(6)] = c__50402__auto__);

return statearr_52843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__))
);

return c__50402__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52861 = (function (ch,cs,meta52862){
this.ch = ch;
this.cs = cs;
this.meta52862 = meta52862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52863,meta52862__$1){
var self__ = this;
var _52863__$1 = this;
return (new cljs.core.async.t_cljs$core$async52861(self__.ch,self__.cs,meta52862__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52863){
var self__ = this;
var _52863__$1 = this;
return self__.meta52862;
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52862","meta52862",801851455,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52861";

cljs.core.async.t_cljs$core$async52861.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async52861");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52861.
 */
cljs.core.async.__GT_t_cljs$core$async52861 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52861(ch__$1,cs__$1,meta52862){
return (new cljs.core.async.t_cljs$core$async52861(ch__$1,cs__$1,meta52862));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52861(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__50402__auto___53083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53083,cs,m,dchan,dctr,done){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53083,cs,m,dchan,dctr,done){
return (function (state_52998){
var state_val_52999 = (state_52998[(1)]);
if((state_val_52999 === (7))){
var inst_52994 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53000_53084 = state_52998__$1;
(statearr_53000_53084[(2)] = inst_52994);

(statearr_53000_53084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (20))){
var inst_52897 = (state_52998[(7)]);
var inst_52909 = cljs.core.first.call(null,inst_52897);
var inst_52910 = cljs.core.nth.call(null,inst_52909,(0),null);
var inst_52911 = cljs.core.nth.call(null,inst_52909,(1),null);
var state_52998__$1 = (function (){var statearr_53001 = state_52998;
(statearr_53001[(8)] = inst_52910);

return statearr_53001;
})();
if(cljs.core.truth_(inst_52911)){
var statearr_53002_53085 = state_52998__$1;
(statearr_53002_53085[(1)] = (22));

} else {
var statearr_53003_53086 = state_52998__$1;
(statearr_53003_53086[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (27))){
var inst_52866 = (state_52998[(9)]);
var inst_52939 = (state_52998[(10)]);
var inst_52941 = (state_52998[(11)]);
var inst_52946 = (state_52998[(12)]);
var inst_52946__$1 = cljs.core._nth.call(null,inst_52939,inst_52941);
var inst_52947 = cljs.core.async.put_BANG_.call(null,inst_52946__$1,inst_52866,done);
var state_52998__$1 = (function (){var statearr_53004 = state_52998;
(statearr_53004[(12)] = inst_52946__$1);

return statearr_53004;
})();
if(cljs.core.truth_(inst_52947)){
var statearr_53005_53087 = state_52998__$1;
(statearr_53005_53087[(1)] = (30));

} else {
var statearr_53006_53088 = state_52998__$1;
(statearr_53006_53088[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (1))){
var state_52998__$1 = state_52998;
var statearr_53007_53089 = state_52998__$1;
(statearr_53007_53089[(2)] = null);

(statearr_53007_53089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (24))){
var inst_52897 = (state_52998[(7)]);
var inst_52916 = (state_52998[(2)]);
var inst_52917 = cljs.core.next.call(null,inst_52897);
var inst_52875 = inst_52917;
var inst_52876 = null;
var inst_52877 = (0);
var inst_52878 = (0);
var state_52998__$1 = (function (){var statearr_53008 = state_52998;
(statearr_53008[(13)] = inst_52916);

(statearr_53008[(14)] = inst_52878);

(statearr_53008[(15)] = inst_52875);

(statearr_53008[(16)] = inst_52876);

(statearr_53008[(17)] = inst_52877);

return statearr_53008;
})();
var statearr_53009_53090 = state_52998__$1;
(statearr_53009_53090[(2)] = null);

(statearr_53009_53090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (39))){
var state_52998__$1 = state_52998;
var statearr_53013_53091 = state_52998__$1;
(statearr_53013_53091[(2)] = null);

(statearr_53013_53091[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (4))){
var inst_52866 = (state_52998[(9)]);
var inst_52866__$1 = (state_52998[(2)]);
var inst_52867 = (inst_52866__$1 == null);
var state_52998__$1 = (function (){var statearr_53014 = state_52998;
(statearr_53014[(9)] = inst_52866__$1);

return statearr_53014;
})();
if(cljs.core.truth_(inst_52867)){
var statearr_53015_53092 = state_52998__$1;
(statearr_53015_53092[(1)] = (5));

} else {
var statearr_53016_53093 = state_52998__$1;
(statearr_53016_53093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (15))){
var inst_52878 = (state_52998[(14)]);
var inst_52875 = (state_52998[(15)]);
var inst_52876 = (state_52998[(16)]);
var inst_52877 = (state_52998[(17)]);
var inst_52893 = (state_52998[(2)]);
var inst_52894 = (inst_52878 + (1));
var tmp53010 = inst_52875;
var tmp53011 = inst_52876;
var tmp53012 = inst_52877;
var inst_52875__$1 = tmp53010;
var inst_52876__$1 = tmp53011;
var inst_52877__$1 = tmp53012;
var inst_52878__$1 = inst_52894;
var state_52998__$1 = (function (){var statearr_53017 = state_52998;
(statearr_53017[(14)] = inst_52878__$1);

(statearr_53017[(15)] = inst_52875__$1);

(statearr_53017[(16)] = inst_52876__$1);

(statearr_53017[(17)] = inst_52877__$1);

(statearr_53017[(18)] = inst_52893);

return statearr_53017;
})();
var statearr_53018_53094 = state_52998__$1;
(statearr_53018_53094[(2)] = null);

(statearr_53018_53094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (21))){
var inst_52920 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53022_53095 = state_52998__$1;
(statearr_53022_53095[(2)] = inst_52920);

(statearr_53022_53095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (31))){
var inst_52946 = (state_52998[(12)]);
var inst_52950 = done.call(null,null);
var inst_52951 = cljs.core.async.untap_STAR_.call(null,m,inst_52946);
var state_52998__$1 = (function (){var statearr_53023 = state_52998;
(statearr_53023[(19)] = inst_52950);

return statearr_53023;
})();
var statearr_53024_53096 = state_52998__$1;
(statearr_53024_53096[(2)] = inst_52951);

(statearr_53024_53096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (32))){
var inst_52938 = (state_52998[(20)]);
var inst_52940 = (state_52998[(21)]);
var inst_52939 = (state_52998[(10)]);
var inst_52941 = (state_52998[(11)]);
var inst_52953 = (state_52998[(2)]);
var inst_52954 = (inst_52941 + (1));
var tmp53019 = inst_52938;
var tmp53020 = inst_52940;
var tmp53021 = inst_52939;
var inst_52938__$1 = tmp53019;
var inst_52939__$1 = tmp53021;
var inst_52940__$1 = tmp53020;
var inst_52941__$1 = inst_52954;
var state_52998__$1 = (function (){var statearr_53025 = state_52998;
(statearr_53025[(20)] = inst_52938__$1);

(statearr_53025[(21)] = inst_52940__$1);

(statearr_53025[(10)] = inst_52939__$1);

(statearr_53025[(22)] = inst_52953);

(statearr_53025[(11)] = inst_52941__$1);

return statearr_53025;
})();
var statearr_53026_53097 = state_52998__$1;
(statearr_53026_53097[(2)] = null);

(statearr_53026_53097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (40))){
var inst_52966 = (state_52998[(23)]);
var inst_52970 = done.call(null,null);
var inst_52971 = cljs.core.async.untap_STAR_.call(null,m,inst_52966);
var state_52998__$1 = (function (){var statearr_53027 = state_52998;
(statearr_53027[(24)] = inst_52970);

return statearr_53027;
})();
var statearr_53028_53098 = state_52998__$1;
(statearr_53028_53098[(2)] = inst_52971);

(statearr_53028_53098[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (33))){
var inst_52957 = (state_52998[(25)]);
var inst_52959 = cljs.core.chunked_seq_QMARK_.call(null,inst_52957);
var state_52998__$1 = state_52998;
if(inst_52959){
var statearr_53029_53099 = state_52998__$1;
(statearr_53029_53099[(1)] = (36));

} else {
var statearr_53030_53100 = state_52998__$1;
(statearr_53030_53100[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (13))){
var inst_52887 = (state_52998[(26)]);
var inst_52890 = cljs.core.async.close_BANG_.call(null,inst_52887);
var state_52998__$1 = state_52998;
var statearr_53031_53101 = state_52998__$1;
(statearr_53031_53101[(2)] = inst_52890);

(statearr_53031_53101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (22))){
var inst_52910 = (state_52998[(8)]);
var inst_52913 = cljs.core.async.close_BANG_.call(null,inst_52910);
var state_52998__$1 = state_52998;
var statearr_53032_53102 = state_52998__$1;
(statearr_53032_53102[(2)] = inst_52913);

(statearr_53032_53102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (36))){
var inst_52957 = (state_52998[(25)]);
var inst_52961 = cljs.core.chunk_first.call(null,inst_52957);
var inst_52962 = cljs.core.chunk_rest.call(null,inst_52957);
var inst_52963 = cljs.core.count.call(null,inst_52961);
var inst_52938 = inst_52962;
var inst_52939 = inst_52961;
var inst_52940 = inst_52963;
var inst_52941 = (0);
var state_52998__$1 = (function (){var statearr_53033 = state_52998;
(statearr_53033[(20)] = inst_52938);

(statearr_53033[(21)] = inst_52940);

(statearr_53033[(10)] = inst_52939);

(statearr_53033[(11)] = inst_52941);

return statearr_53033;
})();
var statearr_53034_53103 = state_52998__$1;
(statearr_53034_53103[(2)] = null);

(statearr_53034_53103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (41))){
var inst_52957 = (state_52998[(25)]);
var inst_52973 = (state_52998[(2)]);
var inst_52974 = cljs.core.next.call(null,inst_52957);
var inst_52938 = inst_52974;
var inst_52939 = null;
var inst_52940 = (0);
var inst_52941 = (0);
var state_52998__$1 = (function (){var statearr_53035 = state_52998;
(statearr_53035[(20)] = inst_52938);

(statearr_53035[(21)] = inst_52940);

(statearr_53035[(10)] = inst_52939);

(statearr_53035[(11)] = inst_52941);

(statearr_53035[(27)] = inst_52973);

return statearr_53035;
})();
var statearr_53036_53104 = state_52998__$1;
(statearr_53036_53104[(2)] = null);

(statearr_53036_53104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (43))){
var state_52998__$1 = state_52998;
var statearr_53037_53105 = state_52998__$1;
(statearr_53037_53105[(2)] = null);

(statearr_53037_53105[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (29))){
var inst_52982 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53038_53106 = state_52998__$1;
(statearr_53038_53106[(2)] = inst_52982);

(statearr_53038_53106[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (44))){
var inst_52991 = (state_52998[(2)]);
var state_52998__$1 = (function (){var statearr_53039 = state_52998;
(statearr_53039[(28)] = inst_52991);

return statearr_53039;
})();
var statearr_53040_53107 = state_52998__$1;
(statearr_53040_53107[(2)] = null);

(statearr_53040_53107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (6))){
var inst_52930 = (state_52998[(29)]);
var inst_52929 = cljs.core.deref.call(null,cs);
var inst_52930__$1 = cljs.core.keys.call(null,inst_52929);
var inst_52931 = cljs.core.count.call(null,inst_52930__$1);
var inst_52932 = cljs.core.reset_BANG_.call(null,dctr,inst_52931);
var inst_52937 = cljs.core.seq.call(null,inst_52930__$1);
var inst_52938 = inst_52937;
var inst_52939 = null;
var inst_52940 = (0);
var inst_52941 = (0);
var state_52998__$1 = (function (){var statearr_53041 = state_52998;
(statearr_53041[(20)] = inst_52938);

(statearr_53041[(21)] = inst_52940);

(statearr_53041[(10)] = inst_52939);

(statearr_53041[(11)] = inst_52941);

(statearr_53041[(29)] = inst_52930__$1);

(statearr_53041[(30)] = inst_52932);

return statearr_53041;
})();
var statearr_53042_53108 = state_52998__$1;
(statearr_53042_53108[(2)] = null);

(statearr_53042_53108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (28))){
var inst_52938 = (state_52998[(20)]);
var inst_52957 = (state_52998[(25)]);
var inst_52957__$1 = cljs.core.seq.call(null,inst_52938);
var state_52998__$1 = (function (){var statearr_53043 = state_52998;
(statearr_53043[(25)] = inst_52957__$1);

return statearr_53043;
})();
if(inst_52957__$1){
var statearr_53044_53109 = state_52998__$1;
(statearr_53044_53109[(1)] = (33));

} else {
var statearr_53045_53110 = state_52998__$1;
(statearr_53045_53110[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (25))){
var inst_52940 = (state_52998[(21)]);
var inst_52941 = (state_52998[(11)]);
var inst_52943 = (inst_52941 < inst_52940);
var inst_52944 = inst_52943;
var state_52998__$1 = state_52998;
if(cljs.core.truth_(inst_52944)){
var statearr_53046_53111 = state_52998__$1;
(statearr_53046_53111[(1)] = (27));

} else {
var statearr_53047_53112 = state_52998__$1;
(statearr_53047_53112[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (34))){
var state_52998__$1 = state_52998;
var statearr_53048_53113 = state_52998__$1;
(statearr_53048_53113[(2)] = null);

(statearr_53048_53113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (17))){
var state_52998__$1 = state_52998;
var statearr_53049_53114 = state_52998__$1;
(statearr_53049_53114[(2)] = null);

(statearr_53049_53114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (3))){
var inst_52996 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52998__$1,inst_52996);
} else {
if((state_val_52999 === (12))){
var inst_52925 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53050_53115 = state_52998__$1;
(statearr_53050_53115[(2)] = inst_52925);

(statearr_53050_53115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (2))){
var state_52998__$1 = state_52998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52998__$1,(4),ch);
} else {
if((state_val_52999 === (23))){
var state_52998__$1 = state_52998;
var statearr_53051_53116 = state_52998__$1;
(statearr_53051_53116[(2)] = null);

(statearr_53051_53116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (35))){
var inst_52980 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53052_53117 = state_52998__$1;
(statearr_53052_53117[(2)] = inst_52980);

(statearr_53052_53117[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (19))){
var inst_52897 = (state_52998[(7)]);
var inst_52901 = cljs.core.chunk_first.call(null,inst_52897);
var inst_52902 = cljs.core.chunk_rest.call(null,inst_52897);
var inst_52903 = cljs.core.count.call(null,inst_52901);
var inst_52875 = inst_52902;
var inst_52876 = inst_52901;
var inst_52877 = inst_52903;
var inst_52878 = (0);
var state_52998__$1 = (function (){var statearr_53053 = state_52998;
(statearr_53053[(14)] = inst_52878);

(statearr_53053[(15)] = inst_52875);

(statearr_53053[(16)] = inst_52876);

(statearr_53053[(17)] = inst_52877);

return statearr_53053;
})();
var statearr_53054_53118 = state_52998__$1;
(statearr_53054_53118[(2)] = null);

(statearr_53054_53118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (11))){
var inst_52875 = (state_52998[(15)]);
var inst_52897 = (state_52998[(7)]);
var inst_52897__$1 = cljs.core.seq.call(null,inst_52875);
var state_52998__$1 = (function (){var statearr_53055 = state_52998;
(statearr_53055[(7)] = inst_52897__$1);

return statearr_53055;
})();
if(inst_52897__$1){
var statearr_53056_53119 = state_52998__$1;
(statearr_53056_53119[(1)] = (16));

} else {
var statearr_53057_53120 = state_52998__$1;
(statearr_53057_53120[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (9))){
var inst_52927 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53058_53121 = state_52998__$1;
(statearr_53058_53121[(2)] = inst_52927);

(statearr_53058_53121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (5))){
var inst_52873 = cljs.core.deref.call(null,cs);
var inst_52874 = cljs.core.seq.call(null,inst_52873);
var inst_52875 = inst_52874;
var inst_52876 = null;
var inst_52877 = (0);
var inst_52878 = (0);
var state_52998__$1 = (function (){var statearr_53059 = state_52998;
(statearr_53059[(14)] = inst_52878);

(statearr_53059[(15)] = inst_52875);

(statearr_53059[(16)] = inst_52876);

(statearr_53059[(17)] = inst_52877);

return statearr_53059;
})();
var statearr_53060_53122 = state_52998__$1;
(statearr_53060_53122[(2)] = null);

(statearr_53060_53122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (14))){
var state_52998__$1 = state_52998;
var statearr_53061_53123 = state_52998__$1;
(statearr_53061_53123[(2)] = null);

(statearr_53061_53123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (45))){
var inst_52988 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53062_53124 = state_52998__$1;
(statearr_53062_53124[(2)] = inst_52988);

(statearr_53062_53124[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (26))){
var inst_52930 = (state_52998[(29)]);
var inst_52984 = (state_52998[(2)]);
var inst_52985 = cljs.core.seq.call(null,inst_52930);
var state_52998__$1 = (function (){var statearr_53063 = state_52998;
(statearr_53063[(31)] = inst_52984);

return statearr_53063;
})();
if(inst_52985){
var statearr_53064_53125 = state_52998__$1;
(statearr_53064_53125[(1)] = (42));

} else {
var statearr_53065_53126 = state_52998__$1;
(statearr_53065_53126[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (16))){
var inst_52897 = (state_52998[(7)]);
var inst_52899 = cljs.core.chunked_seq_QMARK_.call(null,inst_52897);
var state_52998__$1 = state_52998;
if(inst_52899){
var statearr_53066_53127 = state_52998__$1;
(statearr_53066_53127[(1)] = (19));

} else {
var statearr_53067_53128 = state_52998__$1;
(statearr_53067_53128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (38))){
var inst_52977 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53068_53129 = state_52998__$1;
(statearr_53068_53129[(2)] = inst_52977);

(statearr_53068_53129[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (30))){
var state_52998__$1 = state_52998;
var statearr_53069_53130 = state_52998__$1;
(statearr_53069_53130[(2)] = null);

(statearr_53069_53130[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (10))){
var inst_52878 = (state_52998[(14)]);
var inst_52876 = (state_52998[(16)]);
var inst_52886 = cljs.core._nth.call(null,inst_52876,inst_52878);
var inst_52887 = cljs.core.nth.call(null,inst_52886,(0),null);
var inst_52888 = cljs.core.nth.call(null,inst_52886,(1),null);
var state_52998__$1 = (function (){var statearr_53070 = state_52998;
(statearr_53070[(26)] = inst_52887);

return statearr_53070;
})();
if(cljs.core.truth_(inst_52888)){
var statearr_53071_53131 = state_52998__$1;
(statearr_53071_53131[(1)] = (13));

} else {
var statearr_53072_53132 = state_52998__$1;
(statearr_53072_53132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (18))){
var inst_52923 = (state_52998[(2)]);
var state_52998__$1 = state_52998;
var statearr_53073_53133 = state_52998__$1;
(statearr_53073_53133[(2)] = inst_52923);

(statearr_53073_53133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (42))){
var state_52998__$1 = state_52998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52998__$1,(45),dchan);
} else {
if((state_val_52999 === (37))){
var inst_52866 = (state_52998[(9)]);
var inst_52957 = (state_52998[(25)]);
var inst_52966 = (state_52998[(23)]);
var inst_52966__$1 = cljs.core.first.call(null,inst_52957);
var inst_52967 = cljs.core.async.put_BANG_.call(null,inst_52966__$1,inst_52866,done);
var state_52998__$1 = (function (){var statearr_53074 = state_52998;
(statearr_53074[(23)] = inst_52966__$1);

return statearr_53074;
})();
if(cljs.core.truth_(inst_52967)){
var statearr_53075_53134 = state_52998__$1;
(statearr_53075_53134[(1)] = (39));

} else {
var statearr_53076_53135 = state_52998__$1;
(statearr_53076_53135[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52999 === (8))){
var inst_52878 = (state_52998[(14)]);
var inst_52877 = (state_52998[(17)]);
var inst_52880 = (inst_52878 < inst_52877);
var inst_52881 = inst_52880;
var state_52998__$1 = state_52998;
if(cljs.core.truth_(inst_52881)){
var statearr_53077_53136 = state_52998__$1;
(statearr_53077_53136[(1)] = (10));

} else {
var statearr_53078_53137 = state_52998__$1;
(statearr_53078_53137[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53083,cs,m,dchan,dctr,done))
;
return ((function (switch__50235__auto__,c__50402__auto___53083,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50236__auto__ = null;
var cljs$core$async$mult_$_state_machine__50236__auto____0 = (function (){
var statearr_53079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53079[(0)] = cljs$core$async$mult_$_state_machine__50236__auto__);

(statearr_53079[(1)] = (1));

return statearr_53079;
});
var cljs$core$async$mult_$_state_machine__50236__auto____1 = (function (state_52998){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_52998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53080){if((e53080 instanceof Object)){
var ex__50239__auto__ = e53080;
var statearr_53081_53138 = state_52998;
(statearr_53081_53138[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53139 = state_52998;
state_52998 = G__53139;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50236__auto__ = function(state_52998){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50236__auto____1.call(this,state_52998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50236__auto____0;
cljs$core$async$mult_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50236__auto____1;
return cljs$core$async$mult_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53083,cs,m,dchan,dctr,done))
})();
var state__50404__auto__ = (function (){var statearr_53082 = f__50403__auto__.call(null);
(statearr_53082[(6)] = c__50402__auto___53083);

return statearr_53082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53083,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__53141 = arguments.length;
switch (G__53141) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53153 = arguments.length;
var i__4731__auto___53154 = (0);
while(true){
if((i__4731__auto___53154 < len__4730__auto___53153)){
args__4736__auto__.push((arguments[i__4731__auto___53154]));

var G__53155 = (i__4731__auto___53154 + (1));
i__4731__auto___53154 = G__53155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53147){
var map__53148 = p__53147;
var map__53148__$1 = (((((!((map__53148 == null))))?(((((map__53148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53148):map__53148);
var opts = map__53148__$1;
var statearr_53150_53156 = state;
(statearr_53150_53156[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__53148,map__53148__$1,opts){
return (function (val){
var statearr_53151_53157 = state;
(statearr_53151_53157[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__53148,map__53148__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_53152_53158 = state;
(statearr_53152_53158[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53143){
var G__53144 = cljs.core.first.call(null,seq53143);
var seq53143__$1 = cljs.core.next.call(null,seq53143);
var G__53145 = cljs.core.first.call(null,seq53143__$1);
var seq53143__$2 = cljs.core.next.call(null,seq53143__$1);
var G__53146 = cljs.core.first.call(null,seq53143__$2);
var seq53143__$3 = cljs.core.next.call(null,seq53143__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53144,G__53145,G__53146,seq53143__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53159 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53160){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53160 = meta53160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53161,meta53160__$1){
var self__ = this;
var _53161__$1 = this;
return (new cljs.core.async.t_cljs$core$async53159(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53160__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53161){
var self__ = this;
var _53161__$1 = this;
return self__.meta53160;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53160","meta53160",-2015461725,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53159";

cljs.core.async.t_cljs$core$async53159.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53159");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53159.
 */
cljs.core.async.__GT_t_cljs$core$async53159 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53160){
return (new cljs.core.async.t_cljs$core$async53159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53160));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53159(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50402__auto___53323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53263){
var state_val_53264 = (state_53263[(1)]);
if((state_val_53264 === (7))){
var inst_53178 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
var statearr_53265_53324 = state_53263__$1;
(statearr_53265_53324[(2)] = inst_53178);

(statearr_53265_53324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (20))){
var inst_53190 = (state_53263[(7)]);
var state_53263__$1 = state_53263;
var statearr_53266_53325 = state_53263__$1;
(statearr_53266_53325[(2)] = inst_53190);

(statearr_53266_53325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (27))){
var state_53263__$1 = state_53263;
var statearr_53267_53326 = state_53263__$1;
(statearr_53267_53326[(2)] = null);

(statearr_53267_53326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (1))){
var inst_53165 = (state_53263[(8)]);
var inst_53165__$1 = calc_state.call(null);
var inst_53167 = (inst_53165__$1 == null);
var inst_53168 = cljs.core.not.call(null,inst_53167);
var state_53263__$1 = (function (){var statearr_53268 = state_53263;
(statearr_53268[(8)] = inst_53165__$1);

return statearr_53268;
})();
if(inst_53168){
var statearr_53269_53327 = state_53263__$1;
(statearr_53269_53327[(1)] = (2));

} else {
var statearr_53270_53328 = state_53263__$1;
(statearr_53270_53328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (24))){
var inst_53223 = (state_53263[(9)]);
var inst_53237 = (state_53263[(10)]);
var inst_53214 = (state_53263[(11)]);
var inst_53237__$1 = inst_53214.call(null,inst_53223);
var state_53263__$1 = (function (){var statearr_53271 = state_53263;
(statearr_53271[(10)] = inst_53237__$1);

return statearr_53271;
})();
if(cljs.core.truth_(inst_53237__$1)){
var statearr_53272_53329 = state_53263__$1;
(statearr_53272_53329[(1)] = (29));

} else {
var statearr_53273_53330 = state_53263__$1;
(statearr_53273_53330[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (4))){
var inst_53181 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53181)){
var statearr_53274_53331 = state_53263__$1;
(statearr_53274_53331[(1)] = (8));

} else {
var statearr_53275_53332 = state_53263__$1;
(statearr_53275_53332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (15))){
var inst_53208 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53208)){
var statearr_53276_53333 = state_53263__$1;
(statearr_53276_53333[(1)] = (19));

} else {
var statearr_53277_53334 = state_53263__$1;
(statearr_53277_53334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (21))){
var inst_53213 = (state_53263[(12)]);
var inst_53213__$1 = (state_53263[(2)]);
var inst_53214 = cljs.core.get.call(null,inst_53213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53215 = cljs.core.get.call(null,inst_53213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53216 = cljs.core.get.call(null,inst_53213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53263__$1 = (function (){var statearr_53278 = state_53263;
(statearr_53278[(13)] = inst_53215);

(statearr_53278[(11)] = inst_53214);

(statearr_53278[(12)] = inst_53213__$1);

return statearr_53278;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53263__$1,(22),inst_53216);
} else {
if((state_val_53264 === (31))){
var inst_53245 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53245)){
var statearr_53279_53335 = state_53263__$1;
(statearr_53279_53335[(1)] = (32));

} else {
var statearr_53280_53336 = state_53263__$1;
(statearr_53280_53336[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (32))){
var inst_53222 = (state_53263[(14)]);
var state_53263__$1 = state_53263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53263__$1,(35),out,inst_53222);
} else {
if((state_val_53264 === (33))){
var inst_53213 = (state_53263[(12)]);
var inst_53190 = inst_53213;
var state_53263__$1 = (function (){var statearr_53281 = state_53263;
(statearr_53281[(7)] = inst_53190);

return statearr_53281;
})();
var statearr_53282_53337 = state_53263__$1;
(statearr_53282_53337[(2)] = null);

(statearr_53282_53337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (13))){
var inst_53190 = (state_53263[(7)]);
var inst_53197 = inst_53190.cljs$lang$protocol_mask$partition0$;
var inst_53198 = (inst_53197 & (64));
var inst_53199 = inst_53190.cljs$core$ISeq$;
var inst_53200 = (cljs.core.PROTOCOL_SENTINEL === inst_53199);
var inst_53201 = ((inst_53198) || (inst_53200));
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53201)){
var statearr_53283_53338 = state_53263__$1;
(statearr_53283_53338[(1)] = (16));

} else {
var statearr_53284_53339 = state_53263__$1;
(statearr_53284_53339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (22))){
var inst_53222 = (state_53263[(14)]);
var inst_53223 = (state_53263[(9)]);
var inst_53221 = (state_53263[(2)]);
var inst_53222__$1 = cljs.core.nth.call(null,inst_53221,(0),null);
var inst_53223__$1 = cljs.core.nth.call(null,inst_53221,(1),null);
var inst_53224 = (inst_53222__$1 == null);
var inst_53225 = cljs.core._EQ_.call(null,inst_53223__$1,change);
var inst_53226 = ((inst_53224) || (inst_53225));
var state_53263__$1 = (function (){var statearr_53285 = state_53263;
(statearr_53285[(14)] = inst_53222__$1);

(statearr_53285[(9)] = inst_53223__$1);

return statearr_53285;
})();
if(cljs.core.truth_(inst_53226)){
var statearr_53286_53340 = state_53263__$1;
(statearr_53286_53340[(1)] = (23));

} else {
var statearr_53287_53341 = state_53263__$1;
(statearr_53287_53341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (36))){
var inst_53213 = (state_53263[(12)]);
var inst_53190 = inst_53213;
var state_53263__$1 = (function (){var statearr_53288 = state_53263;
(statearr_53288[(7)] = inst_53190);

return statearr_53288;
})();
var statearr_53289_53342 = state_53263__$1;
(statearr_53289_53342[(2)] = null);

(statearr_53289_53342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (29))){
var inst_53237 = (state_53263[(10)]);
var state_53263__$1 = state_53263;
var statearr_53290_53343 = state_53263__$1;
(statearr_53290_53343[(2)] = inst_53237);

(statearr_53290_53343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (6))){
var state_53263__$1 = state_53263;
var statearr_53291_53344 = state_53263__$1;
(statearr_53291_53344[(2)] = false);

(statearr_53291_53344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (28))){
var inst_53233 = (state_53263[(2)]);
var inst_53234 = calc_state.call(null);
var inst_53190 = inst_53234;
var state_53263__$1 = (function (){var statearr_53292 = state_53263;
(statearr_53292[(7)] = inst_53190);

(statearr_53292[(15)] = inst_53233);

return statearr_53292;
})();
var statearr_53293_53345 = state_53263__$1;
(statearr_53293_53345[(2)] = null);

(statearr_53293_53345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (25))){
var inst_53259 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
var statearr_53294_53346 = state_53263__$1;
(statearr_53294_53346[(2)] = inst_53259);

(statearr_53294_53346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (34))){
var inst_53257 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
var statearr_53295_53347 = state_53263__$1;
(statearr_53295_53347[(2)] = inst_53257);

(statearr_53295_53347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (17))){
var state_53263__$1 = state_53263;
var statearr_53296_53348 = state_53263__$1;
(statearr_53296_53348[(2)] = false);

(statearr_53296_53348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (3))){
var state_53263__$1 = state_53263;
var statearr_53297_53349 = state_53263__$1;
(statearr_53297_53349[(2)] = false);

(statearr_53297_53349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (12))){
var inst_53261 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53263__$1,inst_53261);
} else {
if((state_val_53264 === (2))){
var inst_53165 = (state_53263[(8)]);
var inst_53170 = inst_53165.cljs$lang$protocol_mask$partition0$;
var inst_53171 = (inst_53170 & (64));
var inst_53172 = inst_53165.cljs$core$ISeq$;
var inst_53173 = (cljs.core.PROTOCOL_SENTINEL === inst_53172);
var inst_53174 = ((inst_53171) || (inst_53173));
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53174)){
var statearr_53298_53350 = state_53263__$1;
(statearr_53298_53350[(1)] = (5));

} else {
var statearr_53299_53351 = state_53263__$1;
(statearr_53299_53351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (23))){
var inst_53222 = (state_53263[(14)]);
var inst_53228 = (inst_53222 == null);
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53228)){
var statearr_53300_53352 = state_53263__$1;
(statearr_53300_53352[(1)] = (26));

} else {
var statearr_53301_53353 = state_53263__$1;
(statearr_53301_53353[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (35))){
var inst_53248 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
if(cljs.core.truth_(inst_53248)){
var statearr_53302_53354 = state_53263__$1;
(statearr_53302_53354[(1)] = (36));

} else {
var statearr_53303_53355 = state_53263__$1;
(statearr_53303_53355[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (19))){
var inst_53190 = (state_53263[(7)]);
var inst_53210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53190);
var state_53263__$1 = state_53263;
var statearr_53304_53356 = state_53263__$1;
(statearr_53304_53356[(2)] = inst_53210);

(statearr_53304_53356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (11))){
var inst_53190 = (state_53263[(7)]);
var inst_53194 = (inst_53190 == null);
var inst_53195 = cljs.core.not.call(null,inst_53194);
var state_53263__$1 = state_53263;
if(inst_53195){
var statearr_53305_53357 = state_53263__$1;
(statearr_53305_53357[(1)] = (13));

} else {
var statearr_53306_53358 = state_53263__$1;
(statearr_53306_53358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (9))){
var inst_53165 = (state_53263[(8)]);
var state_53263__$1 = state_53263;
var statearr_53307_53359 = state_53263__$1;
(statearr_53307_53359[(2)] = inst_53165);

(statearr_53307_53359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (5))){
var state_53263__$1 = state_53263;
var statearr_53308_53360 = state_53263__$1;
(statearr_53308_53360[(2)] = true);

(statearr_53308_53360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (14))){
var state_53263__$1 = state_53263;
var statearr_53309_53361 = state_53263__$1;
(statearr_53309_53361[(2)] = false);

(statearr_53309_53361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (26))){
var inst_53223 = (state_53263[(9)]);
var inst_53230 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53223);
var state_53263__$1 = state_53263;
var statearr_53310_53362 = state_53263__$1;
(statearr_53310_53362[(2)] = inst_53230);

(statearr_53310_53362[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (16))){
var state_53263__$1 = state_53263;
var statearr_53311_53363 = state_53263__$1;
(statearr_53311_53363[(2)] = true);

(statearr_53311_53363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (38))){
var inst_53253 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
var statearr_53312_53364 = state_53263__$1;
(statearr_53312_53364[(2)] = inst_53253);

(statearr_53312_53364[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (30))){
var inst_53223 = (state_53263[(9)]);
var inst_53215 = (state_53263[(13)]);
var inst_53214 = (state_53263[(11)]);
var inst_53240 = cljs.core.empty_QMARK_.call(null,inst_53214);
var inst_53241 = inst_53215.call(null,inst_53223);
var inst_53242 = cljs.core.not.call(null,inst_53241);
var inst_53243 = ((inst_53240) && (inst_53242));
var state_53263__$1 = state_53263;
var statearr_53313_53365 = state_53263__$1;
(statearr_53313_53365[(2)] = inst_53243);

(statearr_53313_53365[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (10))){
var inst_53165 = (state_53263[(8)]);
var inst_53186 = (state_53263[(2)]);
var inst_53187 = cljs.core.get.call(null,inst_53186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53188 = cljs.core.get.call(null,inst_53186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53189 = cljs.core.get.call(null,inst_53186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53190 = inst_53165;
var state_53263__$1 = (function (){var statearr_53314 = state_53263;
(statearr_53314[(16)] = inst_53188);

(statearr_53314[(7)] = inst_53190);

(statearr_53314[(17)] = inst_53187);

(statearr_53314[(18)] = inst_53189);

return statearr_53314;
})();
var statearr_53315_53366 = state_53263__$1;
(statearr_53315_53366[(2)] = null);

(statearr_53315_53366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (18))){
var inst_53205 = (state_53263[(2)]);
var state_53263__$1 = state_53263;
var statearr_53316_53367 = state_53263__$1;
(statearr_53316_53367[(2)] = inst_53205);

(statearr_53316_53367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (37))){
var state_53263__$1 = state_53263;
var statearr_53317_53368 = state_53263__$1;
(statearr_53317_53368[(2)] = null);

(statearr_53317_53368[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53264 === (8))){
var inst_53165 = (state_53263[(8)]);
var inst_53183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53165);
var state_53263__$1 = state_53263;
var statearr_53318_53369 = state_53263__$1;
(statearr_53318_53369[(2)] = inst_53183);

(statearr_53318_53369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50235__auto__,c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50236__auto__ = null;
var cljs$core$async$mix_$_state_machine__50236__auto____0 = (function (){
var statearr_53319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53319[(0)] = cljs$core$async$mix_$_state_machine__50236__auto__);

(statearr_53319[(1)] = (1));

return statearr_53319;
});
var cljs$core$async$mix_$_state_machine__50236__auto____1 = (function (state_53263){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53320){if((e53320 instanceof Object)){
var ex__50239__auto__ = e53320;
var statearr_53321_53370 = state_53263;
(statearr_53321_53370[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53371 = state_53263;
state_53263 = G__53371;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50236__auto__ = function(state_53263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50236__auto____1.call(this,state_53263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50236__auto____0;
cljs$core$async$mix_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50236__auto____1;
return cljs$core$async$mix_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50404__auto__ = (function (){var statearr_53322 = f__50403__auto__.call(null);
(statearr_53322[(6)] = c__50402__auto___53323);

return statearr_53322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53373 = arguments.length;
switch (G__53373) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53377 = arguments.length;
switch (G__53377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__53375_SHARP_){
if(cljs.core.truth_(p1__53375_SHARP_.call(null,topic))){
return p1__53375_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53375_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53378 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53379){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53379 = meta53379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53380,meta53379__$1){
var self__ = this;
var _53380__$1 = this;
return (new cljs.core.async.t_cljs$core$async53378(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53379__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53380){
var self__ = this;
var _53380__$1 = this;
return self__.meta53379;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53379","meta53379",1946695010,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53378";

cljs.core.async.t_cljs$core$async53378.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53378");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53378.
 */
cljs.core.async.__GT_t_cljs$core$async53378 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53379){
return (new cljs.core.async.t_cljs$core$async53378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53379));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53378(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50402__auto___53498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53498,mults,ensure_mult,p){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53498,mults,ensure_mult,p){
return (function (state_53452){
var state_val_53453 = (state_53452[(1)]);
if((state_val_53453 === (7))){
var inst_53448 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53454_53499 = state_53452__$1;
(statearr_53454_53499[(2)] = inst_53448);

(statearr_53454_53499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (20))){
var state_53452__$1 = state_53452;
var statearr_53455_53500 = state_53452__$1;
(statearr_53455_53500[(2)] = null);

(statearr_53455_53500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (1))){
var state_53452__$1 = state_53452;
var statearr_53456_53501 = state_53452__$1;
(statearr_53456_53501[(2)] = null);

(statearr_53456_53501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (24))){
var inst_53431 = (state_53452[(7)]);
var inst_53440 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53431);
var state_53452__$1 = state_53452;
var statearr_53457_53502 = state_53452__$1;
(statearr_53457_53502[(2)] = inst_53440);

(statearr_53457_53502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (4))){
var inst_53383 = (state_53452[(8)]);
var inst_53383__$1 = (state_53452[(2)]);
var inst_53384 = (inst_53383__$1 == null);
var state_53452__$1 = (function (){var statearr_53458 = state_53452;
(statearr_53458[(8)] = inst_53383__$1);

return statearr_53458;
})();
if(cljs.core.truth_(inst_53384)){
var statearr_53459_53503 = state_53452__$1;
(statearr_53459_53503[(1)] = (5));

} else {
var statearr_53460_53504 = state_53452__$1;
(statearr_53460_53504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (15))){
var inst_53425 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53461_53505 = state_53452__$1;
(statearr_53461_53505[(2)] = inst_53425);

(statearr_53461_53505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (21))){
var inst_53445 = (state_53452[(2)]);
var state_53452__$1 = (function (){var statearr_53462 = state_53452;
(statearr_53462[(9)] = inst_53445);

return statearr_53462;
})();
var statearr_53463_53506 = state_53452__$1;
(statearr_53463_53506[(2)] = null);

(statearr_53463_53506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (13))){
var inst_53407 = (state_53452[(10)]);
var inst_53409 = cljs.core.chunked_seq_QMARK_.call(null,inst_53407);
var state_53452__$1 = state_53452;
if(inst_53409){
var statearr_53464_53507 = state_53452__$1;
(statearr_53464_53507[(1)] = (16));

} else {
var statearr_53465_53508 = state_53452__$1;
(statearr_53465_53508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (22))){
var inst_53437 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
if(cljs.core.truth_(inst_53437)){
var statearr_53466_53509 = state_53452__$1;
(statearr_53466_53509[(1)] = (23));

} else {
var statearr_53467_53510 = state_53452__$1;
(statearr_53467_53510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (6))){
var inst_53431 = (state_53452[(7)]);
var inst_53433 = (state_53452[(11)]);
var inst_53383 = (state_53452[(8)]);
var inst_53431__$1 = topic_fn.call(null,inst_53383);
var inst_53432 = cljs.core.deref.call(null,mults);
var inst_53433__$1 = cljs.core.get.call(null,inst_53432,inst_53431__$1);
var state_53452__$1 = (function (){var statearr_53468 = state_53452;
(statearr_53468[(7)] = inst_53431__$1);

(statearr_53468[(11)] = inst_53433__$1);

return statearr_53468;
})();
if(cljs.core.truth_(inst_53433__$1)){
var statearr_53469_53511 = state_53452__$1;
(statearr_53469_53511[(1)] = (19));

} else {
var statearr_53470_53512 = state_53452__$1;
(statearr_53470_53512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (25))){
var inst_53442 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53471_53513 = state_53452__$1;
(statearr_53471_53513[(2)] = inst_53442);

(statearr_53471_53513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (17))){
var inst_53407 = (state_53452[(10)]);
var inst_53416 = cljs.core.first.call(null,inst_53407);
var inst_53417 = cljs.core.async.muxch_STAR_.call(null,inst_53416);
var inst_53418 = cljs.core.async.close_BANG_.call(null,inst_53417);
var inst_53419 = cljs.core.next.call(null,inst_53407);
var inst_53393 = inst_53419;
var inst_53394 = null;
var inst_53395 = (0);
var inst_53396 = (0);
var state_53452__$1 = (function (){var statearr_53472 = state_53452;
(statearr_53472[(12)] = inst_53394);

(statearr_53472[(13)] = inst_53396);

(statearr_53472[(14)] = inst_53395);

(statearr_53472[(15)] = inst_53393);

(statearr_53472[(16)] = inst_53418);

return statearr_53472;
})();
var statearr_53473_53514 = state_53452__$1;
(statearr_53473_53514[(2)] = null);

(statearr_53473_53514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (3))){
var inst_53450 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53452__$1,inst_53450);
} else {
if((state_val_53453 === (12))){
var inst_53427 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53474_53515 = state_53452__$1;
(statearr_53474_53515[(2)] = inst_53427);

(statearr_53474_53515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (2))){
var state_53452__$1 = state_53452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53452__$1,(4),ch);
} else {
if((state_val_53453 === (23))){
var state_53452__$1 = state_53452;
var statearr_53475_53516 = state_53452__$1;
(statearr_53475_53516[(2)] = null);

(statearr_53475_53516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (19))){
var inst_53433 = (state_53452[(11)]);
var inst_53383 = (state_53452[(8)]);
var inst_53435 = cljs.core.async.muxch_STAR_.call(null,inst_53433);
var state_53452__$1 = state_53452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53452__$1,(22),inst_53435,inst_53383);
} else {
if((state_val_53453 === (11))){
var inst_53407 = (state_53452[(10)]);
var inst_53393 = (state_53452[(15)]);
var inst_53407__$1 = cljs.core.seq.call(null,inst_53393);
var state_53452__$1 = (function (){var statearr_53476 = state_53452;
(statearr_53476[(10)] = inst_53407__$1);

return statearr_53476;
})();
if(inst_53407__$1){
var statearr_53477_53517 = state_53452__$1;
(statearr_53477_53517[(1)] = (13));

} else {
var statearr_53478_53518 = state_53452__$1;
(statearr_53478_53518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (9))){
var inst_53429 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53479_53519 = state_53452__$1;
(statearr_53479_53519[(2)] = inst_53429);

(statearr_53479_53519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (5))){
var inst_53390 = cljs.core.deref.call(null,mults);
var inst_53391 = cljs.core.vals.call(null,inst_53390);
var inst_53392 = cljs.core.seq.call(null,inst_53391);
var inst_53393 = inst_53392;
var inst_53394 = null;
var inst_53395 = (0);
var inst_53396 = (0);
var state_53452__$1 = (function (){var statearr_53480 = state_53452;
(statearr_53480[(12)] = inst_53394);

(statearr_53480[(13)] = inst_53396);

(statearr_53480[(14)] = inst_53395);

(statearr_53480[(15)] = inst_53393);

return statearr_53480;
})();
var statearr_53481_53520 = state_53452__$1;
(statearr_53481_53520[(2)] = null);

(statearr_53481_53520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (14))){
var state_53452__$1 = state_53452;
var statearr_53485_53521 = state_53452__$1;
(statearr_53485_53521[(2)] = null);

(statearr_53485_53521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (16))){
var inst_53407 = (state_53452[(10)]);
var inst_53411 = cljs.core.chunk_first.call(null,inst_53407);
var inst_53412 = cljs.core.chunk_rest.call(null,inst_53407);
var inst_53413 = cljs.core.count.call(null,inst_53411);
var inst_53393 = inst_53412;
var inst_53394 = inst_53411;
var inst_53395 = inst_53413;
var inst_53396 = (0);
var state_53452__$1 = (function (){var statearr_53486 = state_53452;
(statearr_53486[(12)] = inst_53394);

(statearr_53486[(13)] = inst_53396);

(statearr_53486[(14)] = inst_53395);

(statearr_53486[(15)] = inst_53393);

return statearr_53486;
})();
var statearr_53487_53522 = state_53452__$1;
(statearr_53487_53522[(2)] = null);

(statearr_53487_53522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (10))){
var inst_53394 = (state_53452[(12)]);
var inst_53396 = (state_53452[(13)]);
var inst_53395 = (state_53452[(14)]);
var inst_53393 = (state_53452[(15)]);
var inst_53401 = cljs.core._nth.call(null,inst_53394,inst_53396);
var inst_53402 = cljs.core.async.muxch_STAR_.call(null,inst_53401);
var inst_53403 = cljs.core.async.close_BANG_.call(null,inst_53402);
var inst_53404 = (inst_53396 + (1));
var tmp53482 = inst_53394;
var tmp53483 = inst_53395;
var tmp53484 = inst_53393;
var inst_53393__$1 = tmp53484;
var inst_53394__$1 = tmp53482;
var inst_53395__$1 = tmp53483;
var inst_53396__$1 = inst_53404;
var state_53452__$1 = (function (){var statearr_53488 = state_53452;
(statearr_53488[(12)] = inst_53394__$1);

(statearr_53488[(13)] = inst_53396__$1);

(statearr_53488[(14)] = inst_53395__$1);

(statearr_53488[(15)] = inst_53393__$1);

(statearr_53488[(17)] = inst_53403);

return statearr_53488;
})();
var statearr_53489_53523 = state_53452__$1;
(statearr_53489_53523[(2)] = null);

(statearr_53489_53523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (18))){
var inst_53422 = (state_53452[(2)]);
var state_53452__$1 = state_53452;
var statearr_53490_53524 = state_53452__$1;
(statearr_53490_53524[(2)] = inst_53422);

(statearr_53490_53524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53453 === (8))){
var inst_53396 = (state_53452[(13)]);
var inst_53395 = (state_53452[(14)]);
var inst_53398 = (inst_53396 < inst_53395);
var inst_53399 = inst_53398;
var state_53452__$1 = state_53452;
if(cljs.core.truth_(inst_53399)){
var statearr_53491_53525 = state_53452__$1;
(statearr_53491_53525[(1)] = (10));

} else {
var statearr_53492_53526 = state_53452__$1;
(statearr_53492_53526[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53498,mults,ensure_mult,p))
;
return ((function (switch__50235__auto__,c__50402__auto___53498,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53493[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53493[(1)] = (1));

return statearr_53493;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53452){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53494){if((e53494 instanceof Object)){
var ex__50239__auto__ = e53494;
var statearr_53495_53527 = state_53452;
(statearr_53495_53527[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53528 = state_53452;
state_53452 = G__53528;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53498,mults,ensure_mult,p))
})();
var state__50404__auto__ = (function (){var statearr_53496 = f__50403__auto__.call(null);
(statearr_53496[(6)] = c__50402__auto___53498);

return statearr_53496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53498,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53530 = arguments.length;
switch (G__53530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53533 = arguments.length;
switch (G__53533) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53536 = arguments.length;
switch (G__53536) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__50402__auto___53603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53575){
var state_val_53576 = (state_53575[(1)]);
if((state_val_53576 === (7))){
var state_53575__$1 = state_53575;
var statearr_53577_53604 = state_53575__$1;
(statearr_53577_53604[(2)] = null);

(statearr_53577_53604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (1))){
var state_53575__$1 = state_53575;
var statearr_53578_53605 = state_53575__$1;
(statearr_53578_53605[(2)] = null);

(statearr_53578_53605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (4))){
var inst_53539 = (state_53575[(7)]);
var inst_53541 = (inst_53539 < cnt);
var state_53575__$1 = state_53575;
if(cljs.core.truth_(inst_53541)){
var statearr_53579_53606 = state_53575__$1;
(statearr_53579_53606[(1)] = (6));

} else {
var statearr_53580_53607 = state_53575__$1;
(statearr_53580_53607[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (15))){
var inst_53571 = (state_53575[(2)]);
var state_53575__$1 = state_53575;
var statearr_53581_53608 = state_53575__$1;
(statearr_53581_53608[(2)] = inst_53571);

(statearr_53581_53608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (13))){
var inst_53564 = cljs.core.async.close_BANG_.call(null,out);
var state_53575__$1 = state_53575;
var statearr_53582_53609 = state_53575__$1;
(statearr_53582_53609[(2)] = inst_53564);

(statearr_53582_53609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (6))){
var state_53575__$1 = state_53575;
var statearr_53583_53610 = state_53575__$1;
(statearr_53583_53610[(2)] = null);

(statearr_53583_53610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (3))){
var inst_53573 = (state_53575[(2)]);
var state_53575__$1 = state_53575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53575__$1,inst_53573);
} else {
if((state_val_53576 === (12))){
var inst_53561 = (state_53575[(8)]);
var inst_53561__$1 = (state_53575[(2)]);
var inst_53562 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53561__$1);
var state_53575__$1 = (function (){var statearr_53584 = state_53575;
(statearr_53584[(8)] = inst_53561__$1);

return statearr_53584;
})();
if(cljs.core.truth_(inst_53562)){
var statearr_53585_53611 = state_53575__$1;
(statearr_53585_53611[(1)] = (13));

} else {
var statearr_53586_53612 = state_53575__$1;
(statearr_53586_53612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (2))){
var inst_53538 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53539 = (0);
var state_53575__$1 = (function (){var statearr_53587 = state_53575;
(statearr_53587[(7)] = inst_53539);

(statearr_53587[(9)] = inst_53538);

return statearr_53587;
})();
var statearr_53588_53613 = state_53575__$1;
(statearr_53588_53613[(2)] = null);

(statearr_53588_53613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (11))){
var inst_53539 = (state_53575[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53575,(10),Object,null,(9));
var inst_53548 = chs__$1.call(null,inst_53539);
var inst_53549 = done.call(null,inst_53539);
var inst_53550 = cljs.core.async.take_BANG_.call(null,inst_53548,inst_53549);
var state_53575__$1 = state_53575;
var statearr_53589_53614 = state_53575__$1;
(statearr_53589_53614[(2)] = inst_53550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (9))){
var inst_53539 = (state_53575[(7)]);
var inst_53552 = (state_53575[(2)]);
var inst_53553 = (inst_53539 + (1));
var inst_53539__$1 = inst_53553;
var state_53575__$1 = (function (){var statearr_53590 = state_53575;
(statearr_53590[(7)] = inst_53539__$1);

(statearr_53590[(10)] = inst_53552);

return statearr_53590;
})();
var statearr_53591_53615 = state_53575__$1;
(statearr_53591_53615[(2)] = null);

(statearr_53591_53615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (5))){
var inst_53559 = (state_53575[(2)]);
var state_53575__$1 = (function (){var statearr_53592 = state_53575;
(statearr_53592[(11)] = inst_53559);

return statearr_53592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53575__$1,(12),dchan);
} else {
if((state_val_53576 === (14))){
var inst_53561 = (state_53575[(8)]);
var inst_53566 = cljs.core.apply.call(null,f,inst_53561);
var state_53575__$1 = state_53575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53575__$1,(16),out,inst_53566);
} else {
if((state_val_53576 === (16))){
var inst_53568 = (state_53575[(2)]);
var state_53575__$1 = (function (){var statearr_53593 = state_53575;
(statearr_53593[(12)] = inst_53568);

return statearr_53593;
})();
var statearr_53594_53616 = state_53575__$1;
(statearr_53594_53616[(2)] = null);

(statearr_53594_53616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (10))){
var inst_53543 = (state_53575[(2)]);
var inst_53544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53575__$1 = (function (){var statearr_53595 = state_53575;
(statearr_53595[(13)] = inst_53543);

return statearr_53595;
})();
var statearr_53596_53617 = state_53575__$1;
(statearr_53596_53617[(2)] = inst_53544);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53576 === (8))){
var inst_53557 = (state_53575[(2)]);
var state_53575__$1 = state_53575;
var statearr_53597_53618 = state_53575__$1;
(statearr_53597_53618[(2)] = inst_53557);

(statearr_53597_53618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50235__auto__,c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53598[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53598[(1)] = (1));

return statearr_53598;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53575){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53599){if((e53599 instanceof Object)){
var ex__50239__auto__ = e53599;
var statearr_53600_53619 = state_53575;
(statearr_53600_53619[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53620 = state_53575;
state_53575 = G__53620;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50404__auto__ = (function (){var statearr_53601 = f__50403__auto__.call(null);
(statearr_53601[(6)] = c__50402__auto___53603);

return statearr_53601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53603,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53623 = arguments.length;
switch (G__53623) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___53677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53677,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53677,out){
return (function (state_53655){
var state_val_53656 = (state_53655[(1)]);
if((state_val_53656 === (7))){
var inst_53635 = (state_53655[(7)]);
var inst_53634 = (state_53655[(8)]);
var inst_53634__$1 = (state_53655[(2)]);
var inst_53635__$1 = cljs.core.nth.call(null,inst_53634__$1,(0),null);
var inst_53636 = cljs.core.nth.call(null,inst_53634__$1,(1),null);
var inst_53637 = (inst_53635__$1 == null);
var state_53655__$1 = (function (){var statearr_53657 = state_53655;
(statearr_53657[(7)] = inst_53635__$1);

(statearr_53657[(8)] = inst_53634__$1);

(statearr_53657[(9)] = inst_53636);

return statearr_53657;
})();
if(cljs.core.truth_(inst_53637)){
var statearr_53658_53678 = state_53655__$1;
(statearr_53658_53678[(1)] = (8));

} else {
var statearr_53659_53679 = state_53655__$1;
(statearr_53659_53679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (1))){
var inst_53624 = cljs.core.vec.call(null,chs);
var inst_53625 = inst_53624;
var state_53655__$1 = (function (){var statearr_53660 = state_53655;
(statearr_53660[(10)] = inst_53625);

return statearr_53660;
})();
var statearr_53661_53680 = state_53655__$1;
(statearr_53661_53680[(2)] = null);

(statearr_53661_53680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (4))){
var inst_53625 = (state_53655[(10)]);
var state_53655__$1 = state_53655;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53655__$1,(7),inst_53625);
} else {
if((state_val_53656 === (6))){
var inst_53651 = (state_53655[(2)]);
var state_53655__$1 = state_53655;
var statearr_53662_53681 = state_53655__$1;
(statearr_53662_53681[(2)] = inst_53651);

(statearr_53662_53681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (3))){
var inst_53653 = (state_53655[(2)]);
var state_53655__$1 = state_53655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53655__$1,inst_53653);
} else {
if((state_val_53656 === (2))){
var inst_53625 = (state_53655[(10)]);
var inst_53627 = cljs.core.count.call(null,inst_53625);
var inst_53628 = (inst_53627 > (0));
var state_53655__$1 = state_53655;
if(cljs.core.truth_(inst_53628)){
var statearr_53664_53682 = state_53655__$1;
(statearr_53664_53682[(1)] = (4));

} else {
var statearr_53665_53683 = state_53655__$1;
(statearr_53665_53683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (11))){
var inst_53625 = (state_53655[(10)]);
var inst_53644 = (state_53655[(2)]);
var tmp53663 = inst_53625;
var inst_53625__$1 = tmp53663;
var state_53655__$1 = (function (){var statearr_53666 = state_53655;
(statearr_53666[(11)] = inst_53644);

(statearr_53666[(10)] = inst_53625__$1);

return statearr_53666;
})();
var statearr_53667_53684 = state_53655__$1;
(statearr_53667_53684[(2)] = null);

(statearr_53667_53684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (9))){
var inst_53635 = (state_53655[(7)]);
var state_53655__$1 = state_53655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53655__$1,(11),out,inst_53635);
} else {
if((state_val_53656 === (5))){
var inst_53649 = cljs.core.async.close_BANG_.call(null,out);
var state_53655__$1 = state_53655;
var statearr_53668_53685 = state_53655__$1;
(statearr_53668_53685[(2)] = inst_53649);

(statearr_53668_53685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (10))){
var inst_53647 = (state_53655[(2)]);
var state_53655__$1 = state_53655;
var statearr_53669_53686 = state_53655__$1;
(statearr_53669_53686[(2)] = inst_53647);

(statearr_53669_53686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53656 === (8))){
var inst_53635 = (state_53655[(7)]);
var inst_53634 = (state_53655[(8)]);
var inst_53625 = (state_53655[(10)]);
var inst_53636 = (state_53655[(9)]);
var inst_53639 = (function (){var cs = inst_53625;
var vec__53630 = inst_53634;
var v = inst_53635;
var c = inst_53636;
return ((function (cs,vec__53630,v,c,inst_53635,inst_53634,inst_53625,inst_53636,state_val_53656,c__50402__auto___53677,out){
return (function (p1__53621_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53621_SHARP_);
});
;})(cs,vec__53630,v,c,inst_53635,inst_53634,inst_53625,inst_53636,state_val_53656,c__50402__auto___53677,out))
})();
var inst_53640 = cljs.core.filterv.call(null,inst_53639,inst_53625);
var inst_53625__$1 = inst_53640;
var state_53655__$1 = (function (){var statearr_53670 = state_53655;
(statearr_53670[(10)] = inst_53625__$1);

return statearr_53670;
})();
var statearr_53671_53687 = state_53655__$1;
(statearr_53671_53687[(2)] = null);

(statearr_53671_53687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53677,out))
;
return ((function (switch__50235__auto__,c__50402__auto___53677,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53672[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53672[(1)] = (1));

return statearr_53672;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53655){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53673){if((e53673 instanceof Object)){
var ex__50239__auto__ = e53673;
var statearr_53674_53688 = state_53655;
(statearr_53674_53688[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53689 = state_53655;
state_53655 = G__53689;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53677,out))
})();
var state__50404__auto__ = (function (){var statearr_53675 = f__50403__auto__.call(null);
(statearr_53675[(6)] = c__50402__auto___53677);

return statearr_53675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53677,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53691 = arguments.length;
switch (G__53691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___53736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53736,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53736,out){
return (function (state_53715){
var state_val_53716 = (state_53715[(1)]);
if((state_val_53716 === (7))){
var inst_53697 = (state_53715[(7)]);
var inst_53697__$1 = (state_53715[(2)]);
var inst_53698 = (inst_53697__$1 == null);
var inst_53699 = cljs.core.not.call(null,inst_53698);
var state_53715__$1 = (function (){var statearr_53717 = state_53715;
(statearr_53717[(7)] = inst_53697__$1);

return statearr_53717;
})();
if(inst_53699){
var statearr_53718_53737 = state_53715__$1;
(statearr_53718_53737[(1)] = (8));

} else {
var statearr_53719_53738 = state_53715__$1;
(statearr_53719_53738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (1))){
var inst_53692 = (0);
var state_53715__$1 = (function (){var statearr_53720 = state_53715;
(statearr_53720[(8)] = inst_53692);

return statearr_53720;
})();
var statearr_53721_53739 = state_53715__$1;
(statearr_53721_53739[(2)] = null);

(statearr_53721_53739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (4))){
var state_53715__$1 = state_53715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53715__$1,(7),ch);
} else {
if((state_val_53716 === (6))){
var inst_53710 = (state_53715[(2)]);
var state_53715__$1 = state_53715;
var statearr_53722_53740 = state_53715__$1;
(statearr_53722_53740[(2)] = inst_53710);

(statearr_53722_53740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (3))){
var inst_53712 = (state_53715[(2)]);
var inst_53713 = cljs.core.async.close_BANG_.call(null,out);
var state_53715__$1 = (function (){var statearr_53723 = state_53715;
(statearr_53723[(9)] = inst_53712);

return statearr_53723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53715__$1,inst_53713);
} else {
if((state_val_53716 === (2))){
var inst_53692 = (state_53715[(8)]);
var inst_53694 = (inst_53692 < n);
var state_53715__$1 = state_53715;
if(cljs.core.truth_(inst_53694)){
var statearr_53724_53741 = state_53715__$1;
(statearr_53724_53741[(1)] = (4));

} else {
var statearr_53725_53742 = state_53715__$1;
(statearr_53725_53742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (11))){
var inst_53692 = (state_53715[(8)]);
var inst_53702 = (state_53715[(2)]);
var inst_53703 = (inst_53692 + (1));
var inst_53692__$1 = inst_53703;
var state_53715__$1 = (function (){var statearr_53726 = state_53715;
(statearr_53726[(8)] = inst_53692__$1);

(statearr_53726[(10)] = inst_53702);

return statearr_53726;
})();
var statearr_53727_53743 = state_53715__$1;
(statearr_53727_53743[(2)] = null);

(statearr_53727_53743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (9))){
var state_53715__$1 = state_53715;
var statearr_53728_53744 = state_53715__$1;
(statearr_53728_53744[(2)] = null);

(statearr_53728_53744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (5))){
var state_53715__$1 = state_53715;
var statearr_53729_53745 = state_53715__$1;
(statearr_53729_53745[(2)] = null);

(statearr_53729_53745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (10))){
var inst_53707 = (state_53715[(2)]);
var state_53715__$1 = state_53715;
var statearr_53730_53746 = state_53715__$1;
(statearr_53730_53746[(2)] = inst_53707);

(statearr_53730_53746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53716 === (8))){
var inst_53697 = (state_53715[(7)]);
var state_53715__$1 = state_53715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53715__$1,(11),out,inst_53697);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53736,out))
;
return ((function (switch__50235__auto__,c__50402__auto___53736,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53731[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53731[(1)] = (1));

return statearr_53731;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53715){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53732){if((e53732 instanceof Object)){
var ex__50239__auto__ = e53732;
var statearr_53733_53747 = state_53715;
(statearr_53733_53747[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53748 = state_53715;
state_53715 = G__53748;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53736,out))
})();
var state__50404__auto__ = (function (){var statearr_53734 = f__50403__auto__.call(null);
(statearr_53734[(6)] = c__50402__auto___53736);

return statearr_53734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53736,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53750 = (function (f,ch,meta53751){
this.f = f;
this.ch = ch;
this.meta53751 = meta53751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53752,meta53751__$1){
var self__ = this;
var _53752__$1 = this;
return (new cljs.core.async.t_cljs$core$async53750(self__.f,self__.ch,meta53751__$1));
});

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53752){
var self__ = this;
var _53752__$1 = this;
return self__.meta53751;
});

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53753 = (function (f,ch,meta53751,_,fn1,meta53754){
this.f = f;
this.ch = ch;
this.meta53751 = meta53751;
this._ = _;
this.fn1 = fn1;
this.meta53754 = meta53754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53755,meta53754__$1){
var self__ = this;
var _53755__$1 = this;
return (new cljs.core.async.t_cljs$core$async53753(self__.f,self__.ch,self__.meta53751,self__._,self__.fn1,meta53754__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53755){
var self__ = this;
var _53755__$1 = this;
return self__.meta53754;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53749_SHARP_){
return f1.call(null,(((p1__53749_SHARP_ == null))?null:self__.f.call(null,p1__53749_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53751","meta53751",-1523249716,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53750","cljs.core.async/t_cljs$core$async53750",350343579,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53754","meta53754",1481986837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53753";

cljs.core.async.t_cljs$core$async53753.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53753");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53753.
 */
cljs.core.async.__GT_t_cljs$core$async53753 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53753(f__$1,ch__$1,meta53751__$1,___$2,fn1__$1,meta53754){
return (new cljs.core.async.t_cljs$core$async53753(f__$1,ch__$1,meta53751__$1,___$2,fn1__$1,meta53754));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53753(self__.f,self__.ch,self__.meta53751,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53751","meta53751",-1523249716,null)], null);
});

cljs.core.async.t_cljs$core$async53750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53750";

cljs.core.async.t_cljs$core$async53750.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53750");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53750.
 */
cljs.core.async.__GT_t_cljs$core$async53750 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53750(f__$1,ch__$1,meta53751){
return (new cljs.core.async.t_cljs$core$async53750(f__$1,ch__$1,meta53751));
});

}

return (new cljs.core.async.t_cljs$core$async53750(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53756 = (function (f,ch,meta53757){
this.f = f;
this.ch = ch;
this.meta53757 = meta53757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53758,meta53757__$1){
var self__ = this;
var _53758__$1 = this;
return (new cljs.core.async.t_cljs$core$async53756(self__.f,self__.ch,meta53757__$1));
});

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53758){
var self__ = this;
var _53758__$1 = this;
return self__.meta53757;
});

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async53756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53757","meta53757",1774200160,null)], null);
});

cljs.core.async.t_cljs$core$async53756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53756";

cljs.core.async.t_cljs$core$async53756.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53756");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53756.
 */
cljs.core.async.__GT_t_cljs$core$async53756 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53756(f__$1,ch__$1,meta53757){
return (new cljs.core.async.t_cljs$core$async53756(f__$1,ch__$1,meta53757));
});

}

return (new cljs.core.async.t_cljs$core$async53756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53759 = (function (p,ch,meta53760){
this.p = p;
this.ch = ch;
this.meta53760 = meta53760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53761,meta53760__$1){
var self__ = this;
var _53761__$1 = this;
return (new cljs.core.async.t_cljs$core$async53759(self__.p,self__.ch,meta53760__$1));
});

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53761){
var self__ = this;
var _53761__$1 = this;
return self__.meta53760;
});

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53760","meta53760",-526444043,null)], null);
});

cljs.core.async.t_cljs$core$async53759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53759";

cljs.core.async.t_cljs$core$async53759.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async53759");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53759.
 */
cljs.core.async.__GT_t_cljs$core$async53759 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53759(p__$1,ch__$1,meta53760){
return (new cljs.core.async.t_cljs$core$async53759(p__$1,ch__$1,meta53760));
});

}

return (new cljs.core.async.t_cljs$core$async53759(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53763 = arguments.length;
switch (G__53763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___53803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___53803,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___53803,out){
return (function (state_53784){
var state_val_53785 = (state_53784[(1)]);
if((state_val_53785 === (7))){
var inst_53780 = (state_53784[(2)]);
var state_53784__$1 = state_53784;
var statearr_53786_53804 = state_53784__$1;
(statearr_53786_53804[(2)] = inst_53780);

(statearr_53786_53804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (1))){
var state_53784__$1 = state_53784;
var statearr_53787_53805 = state_53784__$1;
(statearr_53787_53805[(2)] = null);

(statearr_53787_53805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (4))){
var inst_53766 = (state_53784[(7)]);
var inst_53766__$1 = (state_53784[(2)]);
var inst_53767 = (inst_53766__$1 == null);
var state_53784__$1 = (function (){var statearr_53788 = state_53784;
(statearr_53788[(7)] = inst_53766__$1);

return statearr_53788;
})();
if(cljs.core.truth_(inst_53767)){
var statearr_53789_53806 = state_53784__$1;
(statearr_53789_53806[(1)] = (5));

} else {
var statearr_53790_53807 = state_53784__$1;
(statearr_53790_53807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (6))){
var inst_53766 = (state_53784[(7)]);
var inst_53771 = p.call(null,inst_53766);
var state_53784__$1 = state_53784;
if(cljs.core.truth_(inst_53771)){
var statearr_53791_53808 = state_53784__$1;
(statearr_53791_53808[(1)] = (8));

} else {
var statearr_53792_53809 = state_53784__$1;
(statearr_53792_53809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (3))){
var inst_53782 = (state_53784[(2)]);
var state_53784__$1 = state_53784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53784__$1,inst_53782);
} else {
if((state_val_53785 === (2))){
var state_53784__$1 = state_53784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53784__$1,(4),ch);
} else {
if((state_val_53785 === (11))){
var inst_53774 = (state_53784[(2)]);
var state_53784__$1 = state_53784;
var statearr_53793_53810 = state_53784__$1;
(statearr_53793_53810[(2)] = inst_53774);

(statearr_53793_53810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (9))){
var state_53784__$1 = state_53784;
var statearr_53794_53811 = state_53784__$1;
(statearr_53794_53811[(2)] = null);

(statearr_53794_53811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (5))){
var inst_53769 = cljs.core.async.close_BANG_.call(null,out);
var state_53784__$1 = state_53784;
var statearr_53795_53812 = state_53784__$1;
(statearr_53795_53812[(2)] = inst_53769);

(statearr_53795_53812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (10))){
var inst_53777 = (state_53784[(2)]);
var state_53784__$1 = (function (){var statearr_53796 = state_53784;
(statearr_53796[(8)] = inst_53777);

return statearr_53796;
})();
var statearr_53797_53813 = state_53784__$1;
(statearr_53797_53813[(2)] = null);

(statearr_53797_53813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53785 === (8))){
var inst_53766 = (state_53784[(7)]);
var state_53784__$1 = state_53784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53784__$1,(11),out,inst_53766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___53803,out))
;
return ((function (switch__50235__auto__,c__50402__auto___53803,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53798 = [null,null,null,null,null,null,null,null,null];
(statearr_53798[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53798[(1)] = (1));

return statearr_53798;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53784){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53799){if((e53799 instanceof Object)){
var ex__50239__auto__ = e53799;
var statearr_53800_53814 = state_53784;
(statearr_53800_53814[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53815 = state_53784;
state_53784 = G__53815;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___53803,out))
})();
var state__50404__auto__ = (function (){var statearr_53801 = f__50403__auto__.call(null);
(statearr_53801[(6)] = c__50402__auto___53803);

return statearr_53801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___53803,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53817 = arguments.length;
switch (G__53817) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__){
return (function (state_53880){
var state_val_53881 = (state_53880[(1)]);
if((state_val_53881 === (7))){
var inst_53876 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
var statearr_53882_53920 = state_53880__$1;
(statearr_53882_53920[(2)] = inst_53876);

(statearr_53882_53920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (20))){
var inst_53846 = (state_53880[(7)]);
var inst_53857 = (state_53880[(2)]);
var inst_53858 = cljs.core.next.call(null,inst_53846);
var inst_53832 = inst_53858;
var inst_53833 = null;
var inst_53834 = (0);
var inst_53835 = (0);
var state_53880__$1 = (function (){var statearr_53883 = state_53880;
(statearr_53883[(8)] = inst_53857);

(statearr_53883[(9)] = inst_53833);

(statearr_53883[(10)] = inst_53834);

(statearr_53883[(11)] = inst_53835);

(statearr_53883[(12)] = inst_53832);

return statearr_53883;
})();
var statearr_53884_53921 = state_53880__$1;
(statearr_53884_53921[(2)] = null);

(statearr_53884_53921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (1))){
var state_53880__$1 = state_53880;
var statearr_53885_53922 = state_53880__$1;
(statearr_53885_53922[(2)] = null);

(statearr_53885_53922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (4))){
var inst_53821 = (state_53880[(13)]);
var inst_53821__$1 = (state_53880[(2)]);
var inst_53822 = (inst_53821__$1 == null);
var state_53880__$1 = (function (){var statearr_53886 = state_53880;
(statearr_53886[(13)] = inst_53821__$1);

return statearr_53886;
})();
if(cljs.core.truth_(inst_53822)){
var statearr_53887_53923 = state_53880__$1;
(statearr_53887_53923[(1)] = (5));

} else {
var statearr_53888_53924 = state_53880__$1;
(statearr_53888_53924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (15))){
var state_53880__$1 = state_53880;
var statearr_53892_53925 = state_53880__$1;
(statearr_53892_53925[(2)] = null);

(statearr_53892_53925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (21))){
var state_53880__$1 = state_53880;
var statearr_53893_53926 = state_53880__$1;
(statearr_53893_53926[(2)] = null);

(statearr_53893_53926[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (13))){
var inst_53833 = (state_53880[(9)]);
var inst_53834 = (state_53880[(10)]);
var inst_53835 = (state_53880[(11)]);
var inst_53832 = (state_53880[(12)]);
var inst_53842 = (state_53880[(2)]);
var inst_53843 = (inst_53835 + (1));
var tmp53889 = inst_53833;
var tmp53890 = inst_53834;
var tmp53891 = inst_53832;
var inst_53832__$1 = tmp53891;
var inst_53833__$1 = tmp53889;
var inst_53834__$1 = tmp53890;
var inst_53835__$1 = inst_53843;
var state_53880__$1 = (function (){var statearr_53894 = state_53880;
(statearr_53894[(9)] = inst_53833__$1);

(statearr_53894[(10)] = inst_53834__$1);

(statearr_53894[(11)] = inst_53835__$1);

(statearr_53894[(12)] = inst_53832__$1);

(statearr_53894[(14)] = inst_53842);

return statearr_53894;
})();
var statearr_53895_53927 = state_53880__$1;
(statearr_53895_53927[(2)] = null);

(statearr_53895_53927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (22))){
var state_53880__$1 = state_53880;
var statearr_53896_53928 = state_53880__$1;
(statearr_53896_53928[(2)] = null);

(statearr_53896_53928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (6))){
var inst_53821 = (state_53880[(13)]);
var inst_53830 = f.call(null,inst_53821);
var inst_53831 = cljs.core.seq.call(null,inst_53830);
var inst_53832 = inst_53831;
var inst_53833 = null;
var inst_53834 = (0);
var inst_53835 = (0);
var state_53880__$1 = (function (){var statearr_53897 = state_53880;
(statearr_53897[(9)] = inst_53833);

(statearr_53897[(10)] = inst_53834);

(statearr_53897[(11)] = inst_53835);

(statearr_53897[(12)] = inst_53832);

return statearr_53897;
})();
var statearr_53898_53929 = state_53880__$1;
(statearr_53898_53929[(2)] = null);

(statearr_53898_53929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (17))){
var inst_53846 = (state_53880[(7)]);
var inst_53850 = cljs.core.chunk_first.call(null,inst_53846);
var inst_53851 = cljs.core.chunk_rest.call(null,inst_53846);
var inst_53852 = cljs.core.count.call(null,inst_53850);
var inst_53832 = inst_53851;
var inst_53833 = inst_53850;
var inst_53834 = inst_53852;
var inst_53835 = (0);
var state_53880__$1 = (function (){var statearr_53899 = state_53880;
(statearr_53899[(9)] = inst_53833);

(statearr_53899[(10)] = inst_53834);

(statearr_53899[(11)] = inst_53835);

(statearr_53899[(12)] = inst_53832);

return statearr_53899;
})();
var statearr_53900_53930 = state_53880__$1;
(statearr_53900_53930[(2)] = null);

(statearr_53900_53930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (3))){
var inst_53878 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53880__$1,inst_53878);
} else {
if((state_val_53881 === (12))){
var inst_53866 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
var statearr_53901_53931 = state_53880__$1;
(statearr_53901_53931[(2)] = inst_53866);

(statearr_53901_53931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (2))){
var state_53880__$1 = state_53880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53880__$1,(4),in$);
} else {
if((state_val_53881 === (23))){
var inst_53874 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
var statearr_53902_53932 = state_53880__$1;
(statearr_53902_53932[(2)] = inst_53874);

(statearr_53902_53932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (19))){
var inst_53861 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
var statearr_53903_53933 = state_53880__$1;
(statearr_53903_53933[(2)] = inst_53861);

(statearr_53903_53933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (11))){
var inst_53846 = (state_53880[(7)]);
var inst_53832 = (state_53880[(12)]);
var inst_53846__$1 = cljs.core.seq.call(null,inst_53832);
var state_53880__$1 = (function (){var statearr_53904 = state_53880;
(statearr_53904[(7)] = inst_53846__$1);

return statearr_53904;
})();
if(inst_53846__$1){
var statearr_53905_53934 = state_53880__$1;
(statearr_53905_53934[(1)] = (14));

} else {
var statearr_53906_53935 = state_53880__$1;
(statearr_53906_53935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (9))){
var inst_53868 = (state_53880[(2)]);
var inst_53869 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53880__$1 = (function (){var statearr_53907 = state_53880;
(statearr_53907[(15)] = inst_53868);

return statearr_53907;
})();
if(cljs.core.truth_(inst_53869)){
var statearr_53908_53936 = state_53880__$1;
(statearr_53908_53936[(1)] = (21));

} else {
var statearr_53909_53937 = state_53880__$1;
(statearr_53909_53937[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (5))){
var inst_53824 = cljs.core.async.close_BANG_.call(null,out);
var state_53880__$1 = state_53880;
var statearr_53910_53938 = state_53880__$1;
(statearr_53910_53938[(2)] = inst_53824);

(statearr_53910_53938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (14))){
var inst_53846 = (state_53880[(7)]);
var inst_53848 = cljs.core.chunked_seq_QMARK_.call(null,inst_53846);
var state_53880__$1 = state_53880;
if(inst_53848){
var statearr_53911_53939 = state_53880__$1;
(statearr_53911_53939[(1)] = (17));

} else {
var statearr_53912_53940 = state_53880__$1;
(statearr_53912_53940[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (16))){
var inst_53864 = (state_53880[(2)]);
var state_53880__$1 = state_53880;
var statearr_53913_53941 = state_53880__$1;
(statearr_53913_53941[(2)] = inst_53864);

(statearr_53913_53941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53881 === (10))){
var inst_53833 = (state_53880[(9)]);
var inst_53835 = (state_53880[(11)]);
var inst_53840 = cljs.core._nth.call(null,inst_53833,inst_53835);
var state_53880__$1 = state_53880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53880__$1,(13),out,inst_53840);
} else {
if((state_val_53881 === (18))){
var inst_53846 = (state_53880[(7)]);
var inst_53855 = cljs.core.first.call(null,inst_53846);
var state_53880__$1 = state_53880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53880__$1,(20),out,inst_53855);
} else {
if((state_val_53881 === (8))){
var inst_53834 = (state_53880[(10)]);
var inst_53835 = (state_53880[(11)]);
var inst_53837 = (inst_53835 < inst_53834);
var inst_53838 = inst_53837;
var state_53880__$1 = state_53880;
if(cljs.core.truth_(inst_53838)){
var statearr_53914_53942 = state_53880__$1;
(statearr_53914_53942[(1)] = (10));

} else {
var statearr_53915_53943 = state_53880__$1;
(statearr_53915_53943[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____0 = (function (){
var statearr_53916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53916[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__);

(statearr_53916[(1)] = (1));

return statearr_53916;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____1 = (function (state_53880){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53917){if((e53917 instanceof Object)){
var ex__50239__auto__ = e53917;
var statearr_53918_53944 = state_53880;
(statearr_53918_53944[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53945 = state_53880;
state_53880 = G__53945;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__ = function(state_53880){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____1.call(this,state_53880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50236__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__))
})();
var state__50404__auto__ = (function (){var statearr_53919 = f__50403__auto__.call(null);
(statearr_53919[(6)] = c__50402__auto__);

return statearr_53919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__))
);

return c__50402__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53947 = arguments.length;
switch (G__53947) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53950 = arguments.length;
switch (G__53950) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53953 = arguments.length;
switch (G__53953) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___54000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___54000,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___54000,out){
return (function (state_53977){
var state_val_53978 = (state_53977[(1)]);
if((state_val_53978 === (7))){
var inst_53972 = (state_53977[(2)]);
var state_53977__$1 = state_53977;
var statearr_53979_54001 = state_53977__$1;
(statearr_53979_54001[(2)] = inst_53972);

(statearr_53979_54001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (1))){
var inst_53954 = null;
var state_53977__$1 = (function (){var statearr_53980 = state_53977;
(statearr_53980[(7)] = inst_53954);

return statearr_53980;
})();
var statearr_53981_54002 = state_53977__$1;
(statearr_53981_54002[(2)] = null);

(statearr_53981_54002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (4))){
var inst_53957 = (state_53977[(8)]);
var inst_53957__$1 = (state_53977[(2)]);
var inst_53958 = (inst_53957__$1 == null);
var inst_53959 = cljs.core.not.call(null,inst_53958);
var state_53977__$1 = (function (){var statearr_53982 = state_53977;
(statearr_53982[(8)] = inst_53957__$1);

return statearr_53982;
})();
if(inst_53959){
var statearr_53983_54003 = state_53977__$1;
(statearr_53983_54003[(1)] = (5));

} else {
var statearr_53984_54004 = state_53977__$1;
(statearr_53984_54004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (6))){
var state_53977__$1 = state_53977;
var statearr_53985_54005 = state_53977__$1;
(statearr_53985_54005[(2)] = null);

(statearr_53985_54005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (3))){
var inst_53974 = (state_53977[(2)]);
var inst_53975 = cljs.core.async.close_BANG_.call(null,out);
var state_53977__$1 = (function (){var statearr_53986 = state_53977;
(statearr_53986[(9)] = inst_53974);

return statearr_53986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53977__$1,inst_53975);
} else {
if((state_val_53978 === (2))){
var state_53977__$1 = state_53977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53977__$1,(4),ch);
} else {
if((state_val_53978 === (11))){
var inst_53957 = (state_53977[(8)]);
var inst_53966 = (state_53977[(2)]);
var inst_53954 = inst_53957;
var state_53977__$1 = (function (){var statearr_53987 = state_53977;
(statearr_53987[(7)] = inst_53954);

(statearr_53987[(10)] = inst_53966);

return statearr_53987;
})();
var statearr_53988_54006 = state_53977__$1;
(statearr_53988_54006[(2)] = null);

(statearr_53988_54006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (9))){
var inst_53957 = (state_53977[(8)]);
var state_53977__$1 = state_53977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53977__$1,(11),out,inst_53957);
} else {
if((state_val_53978 === (5))){
var inst_53957 = (state_53977[(8)]);
var inst_53954 = (state_53977[(7)]);
var inst_53961 = cljs.core._EQ_.call(null,inst_53957,inst_53954);
var state_53977__$1 = state_53977;
if(inst_53961){
var statearr_53990_54007 = state_53977__$1;
(statearr_53990_54007[(1)] = (8));

} else {
var statearr_53991_54008 = state_53977__$1;
(statearr_53991_54008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (10))){
var inst_53969 = (state_53977[(2)]);
var state_53977__$1 = state_53977;
var statearr_53992_54009 = state_53977__$1;
(statearr_53992_54009[(2)] = inst_53969);

(statearr_53992_54009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53978 === (8))){
var inst_53954 = (state_53977[(7)]);
var tmp53989 = inst_53954;
var inst_53954__$1 = tmp53989;
var state_53977__$1 = (function (){var statearr_53993 = state_53977;
(statearr_53993[(7)] = inst_53954__$1);

return statearr_53993;
})();
var statearr_53994_54010 = state_53977__$1;
(statearr_53994_54010[(2)] = null);

(statearr_53994_54010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___54000,out))
;
return ((function (switch__50235__auto__,c__50402__auto___54000,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_53995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53995[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_53995[(1)] = (1));

return statearr_53995;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_53977){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_53977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e53996){if((e53996 instanceof Object)){
var ex__50239__auto__ = e53996;
var statearr_53997_54011 = state_53977;
(statearr_53997_54011[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54012 = state_53977;
state_53977 = G__54012;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_53977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_53977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___54000,out))
})();
var state__50404__auto__ = (function (){var statearr_53998 = f__50403__auto__.call(null);
(statearr_53998[(6)] = c__50402__auto___54000);

return statearr_53998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___54000,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54014 = arguments.length;
switch (G__54014) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___54080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___54080,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___54080,out){
return (function (state_54052){
var state_val_54053 = (state_54052[(1)]);
if((state_val_54053 === (7))){
var inst_54048 = (state_54052[(2)]);
var state_54052__$1 = state_54052;
var statearr_54054_54081 = state_54052__$1;
(statearr_54054_54081[(2)] = inst_54048);

(statearr_54054_54081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (1))){
var inst_54015 = (new Array(n));
var inst_54016 = inst_54015;
var inst_54017 = (0);
var state_54052__$1 = (function (){var statearr_54055 = state_54052;
(statearr_54055[(7)] = inst_54016);

(statearr_54055[(8)] = inst_54017);

return statearr_54055;
})();
var statearr_54056_54082 = state_54052__$1;
(statearr_54056_54082[(2)] = null);

(statearr_54056_54082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (4))){
var inst_54020 = (state_54052[(9)]);
var inst_54020__$1 = (state_54052[(2)]);
var inst_54021 = (inst_54020__$1 == null);
var inst_54022 = cljs.core.not.call(null,inst_54021);
var state_54052__$1 = (function (){var statearr_54057 = state_54052;
(statearr_54057[(9)] = inst_54020__$1);

return statearr_54057;
})();
if(inst_54022){
var statearr_54058_54083 = state_54052__$1;
(statearr_54058_54083[(1)] = (5));

} else {
var statearr_54059_54084 = state_54052__$1;
(statearr_54059_54084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (15))){
var inst_54042 = (state_54052[(2)]);
var state_54052__$1 = state_54052;
var statearr_54060_54085 = state_54052__$1;
(statearr_54060_54085[(2)] = inst_54042);

(statearr_54060_54085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (13))){
var state_54052__$1 = state_54052;
var statearr_54061_54086 = state_54052__$1;
(statearr_54061_54086[(2)] = null);

(statearr_54061_54086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (6))){
var inst_54017 = (state_54052[(8)]);
var inst_54038 = (inst_54017 > (0));
var state_54052__$1 = state_54052;
if(cljs.core.truth_(inst_54038)){
var statearr_54062_54087 = state_54052__$1;
(statearr_54062_54087[(1)] = (12));

} else {
var statearr_54063_54088 = state_54052__$1;
(statearr_54063_54088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (3))){
var inst_54050 = (state_54052[(2)]);
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54052__$1,inst_54050);
} else {
if((state_val_54053 === (12))){
var inst_54016 = (state_54052[(7)]);
var inst_54040 = cljs.core.vec.call(null,inst_54016);
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54052__$1,(15),out,inst_54040);
} else {
if((state_val_54053 === (2))){
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54052__$1,(4),ch);
} else {
if((state_val_54053 === (11))){
var inst_54032 = (state_54052[(2)]);
var inst_54033 = (new Array(n));
var inst_54016 = inst_54033;
var inst_54017 = (0);
var state_54052__$1 = (function (){var statearr_54064 = state_54052;
(statearr_54064[(7)] = inst_54016);

(statearr_54064[(10)] = inst_54032);

(statearr_54064[(8)] = inst_54017);

return statearr_54064;
})();
var statearr_54065_54089 = state_54052__$1;
(statearr_54065_54089[(2)] = null);

(statearr_54065_54089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (9))){
var inst_54016 = (state_54052[(7)]);
var inst_54030 = cljs.core.vec.call(null,inst_54016);
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54052__$1,(11),out,inst_54030);
} else {
if((state_val_54053 === (5))){
var inst_54016 = (state_54052[(7)]);
var inst_54020 = (state_54052[(9)]);
var inst_54017 = (state_54052[(8)]);
var inst_54025 = (state_54052[(11)]);
var inst_54024 = (inst_54016[inst_54017] = inst_54020);
var inst_54025__$1 = (inst_54017 + (1));
var inst_54026 = (inst_54025__$1 < n);
var state_54052__$1 = (function (){var statearr_54066 = state_54052;
(statearr_54066[(12)] = inst_54024);

(statearr_54066[(11)] = inst_54025__$1);

return statearr_54066;
})();
if(cljs.core.truth_(inst_54026)){
var statearr_54067_54090 = state_54052__$1;
(statearr_54067_54090[(1)] = (8));

} else {
var statearr_54068_54091 = state_54052__$1;
(statearr_54068_54091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (14))){
var inst_54045 = (state_54052[(2)]);
var inst_54046 = cljs.core.async.close_BANG_.call(null,out);
var state_54052__$1 = (function (){var statearr_54070 = state_54052;
(statearr_54070[(13)] = inst_54045);

return statearr_54070;
})();
var statearr_54071_54092 = state_54052__$1;
(statearr_54071_54092[(2)] = inst_54046);

(statearr_54071_54092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (10))){
var inst_54036 = (state_54052[(2)]);
var state_54052__$1 = state_54052;
var statearr_54072_54093 = state_54052__$1;
(statearr_54072_54093[(2)] = inst_54036);

(statearr_54072_54093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54053 === (8))){
var inst_54016 = (state_54052[(7)]);
var inst_54025 = (state_54052[(11)]);
var tmp54069 = inst_54016;
var inst_54016__$1 = tmp54069;
var inst_54017 = inst_54025;
var state_54052__$1 = (function (){var statearr_54073 = state_54052;
(statearr_54073[(7)] = inst_54016__$1);

(statearr_54073[(8)] = inst_54017);

return statearr_54073;
})();
var statearr_54074_54094 = state_54052__$1;
(statearr_54074_54094[(2)] = null);

(statearr_54074_54094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___54080,out))
;
return ((function (switch__50235__auto__,c__50402__auto___54080,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_54075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54075[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_54075[(1)] = (1));

return statearr_54075;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_54052){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_54052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e54076){if((e54076 instanceof Object)){
var ex__50239__auto__ = e54076;
var statearr_54077_54095 = state_54052;
(statearr_54077_54095[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54096 = state_54052;
state_54052 = G__54096;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_54052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_54052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___54080,out))
})();
var state__50404__auto__ = (function (){var statearr_54078 = f__50403__auto__.call(null);
(statearr_54078[(6)] = c__50402__auto___54080);

return statearr_54078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___54080,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54098 = arguments.length;
switch (G__54098) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50402__auto___54168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___54168,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___54168,out){
return (function (state_54140){
var state_val_54141 = (state_54140[(1)]);
if((state_val_54141 === (7))){
var inst_54136 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54142_54169 = state_54140__$1;
(statearr_54142_54169[(2)] = inst_54136);

(statearr_54142_54169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (1))){
var inst_54099 = [];
var inst_54100 = inst_54099;
var inst_54101 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54140__$1 = (function (){var statearr_54143 = state_54140;
(statearr_54143[(7)] = inst_54101);

(statearr_54143[(8)] = inst_54100);

return statearr_54143;
})();
var statearr_54144_54170 = state_54140__$1;
(statearr_54144_54170[(2)] = null);

(statearr_54144_54170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (4))){
var inst_54104 = (state_54140[(9)]);
var inst_54104__$1 = (state_54140[(2)]);
var inst_54105 = (inst_54104__$1 == null);
var inst_54106 = cljs.core.not.call(null,inst_54105);
var state_54140__$1 = (function (){var statearr_54145 = state_54140;
(statearr_54145[(9)] = inst_54104__$1);

return statearr_54145;
})();
if(inst_54106){
var statearr_54146_54171 = state_54140__$1;
(statearr_54146_54171[(1)] = (5));

} else {
var statearr_54147_54172 = state_54140__$1;
(statearr_54147_54172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (15))){
var inst_54130 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54148_54173 = state_54140__$1;
(statearr_54148_54173[(2)] = inst_54130);

(statearr_54148_54173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (13))){
var state_54140__$1 = state_54140;
var statearr_54149_54174 = state_54140__$1;
(statearr_54149_54174[(2)] = null);

(statearr_54149_54174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (6))){
var inst_54100 = (state_54140[(8)]);
var inst_54125 = inst_54100.length;
var inst_54126 = (inst_54125 > (0));
var state_54140__$1 = state_54140;
if(cljs.core.truth_(inst_54126)){
var statearr_54150_54175 = state_54140__$1;
(statearr_54150_54175[(1)] = (12));

} else {
var statearr_54151_54176 = state_54140__$1;
(statearr_54151_54176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (3))){
var inst_54138 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54140__$1,inst_54138);
} else {
if((state_val_54141 === (12))){
var inst_54100 = (state_54140[(8)]);
var inst_54128 = cljs.core.vec.call(null,inst_54100);
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54140__$1,(15),out,inst_54128);
} else {
if((state_val_54141 === (2))){
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54140__$1,(4),ch);
} else {
if((state_val_54141 === (11))){
var inst_54104 = (state_54140[(9)]);
var inst_54108 = (state_54140[(10)]);
var inst_54118 = (state_54140[(2)]);
var inst_54119 = [];
var inst_54120 = inst_54119.push(inst_54104);
var inst_54100 = inst_54119;
var inst_54101 = inst_54108;
var state_54140__$1 = (function (){var statearr_54152 = state_54140;
(statearr_54152[(11)] = inst_54118);

(statearr_54152[(12)] = inst_54120);

(statearr_54152[(7)] = inst_54101);

(statearr_54152[(8)] = inst_54100);

return statearr_54152;
})();
var statearr_54153_54177 = state_54140__$1;
(statearr_54153_54177[(2)] = null);

(statearr_54153_54177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (9))){
var inst_54100 = (state_54140[(8)]);
var inst_54116 = cljs.core.vec.call(null,inst_54100);
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54140__$1,(11),out,inst_54116);
} else {
if((state_val_54141 === (5))){
var inst_54104 = (state_54140[(9)]);
var inst_54101 = (state_54140[(7)]);
var inst_54108 = (state_54140[(10)]);
var inst_54108__$1 = f.call(null,inst_54104);
var inst_54109 = cljs.core._EQ_.call(null,inst_54108__$1,inst_54101);
var inst_54110 = cljs.core.keyword_identical_QMARK_.call(null,inst_54101,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54111 = ((inst_54109) || (inst_54110));
var state_54140__$1 = (function (){var statearr_54154 = state_54140;
(statearr_54154[(10)] = inst_54108__$1);

return statearr_54154;
})();
if(cljs.core.truth_(inst_54111)){
var statearr_54155_54178 = state_54140__$1;
(statearr_54155_54178[(1)] = (8));

} else {
var statearr_54156_54179 = state_54140__$1;
(statearr_54156_54179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (14))){
var inst_54133 = (state_54140[(2)]);
var inst_54134 = cljs.core.async.close_BANG_.call(null,out);
var state_54140__$1 = (function (){var statearr_54158 = state_54140;
(statearr_54158[(13)] = inst_54133);

return statearr_54158;
})();
var statearr_54159_54180 = state_54140__$1;
(statearr_54159_54180[(2)] = inst_54134);

(statearr_54159_54180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (10))){
var inst_54123 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54160_54181 = state_54140__$1;
(statearr_54160_54181[(2)] = inst_54123);

(statearr_54160_54181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (8))){
var inst_54104 = (state_54140[(9)]);
var inst_54108 = (state_54140[(10)]);
var inst_54100 = (state_54140[(8)]);
var inst_54113 = inst_54100.push(inst_54104);
var tmp54157 = inst_54100;
var inst_54100__$1 = tmp54157;
var inst_54101 = inst_54108;
var state_54140__$1 = (function (){var statearr_54161 = state_54140;
(statearr_54161[(14)] = inst_54113);

(statearr_54161[(7)] = inst_54101);

(statearr_54161[(8)] = inst_54100__$1);

return statearr_54161;
})();
var statearr_54162_54182 = state_54140__$1;
(statearr_54162_54182[(2)] = null);

(statearr_54162_54182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50402__auto___54168,out))
;
return ((function (switch__50235__auto__,c__50402__auto___54168,out){
return (function() {
var cljs$core$async$state_machine__50236__auto__ = null;
var cljs$core$async$state_machine__50236__auto____0 = (function (){
var statearr_54163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54163[(0)] = cljs$core$async$state_machine__50236__auto__);

(statearr_54163[(1)] = (1));

return statearr_54163;
});
var cljs$core$async$state_machine__50236__auto____1 = (function (state_54140){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_54140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e54164){if((e54164 instanceof Object)){
var ex__50239__auto__ = e54164;
var statearr_54165_54183 = state_54140;
(statearr_54165_54183[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54184 = state_54140;
state_54140 = G__54184;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
cljs$core$async$state_machine__50236__auto__ = function(state_54140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50236__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50236__auto____1.call(this,state_54140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50236__auto____0;
cljs$core$async$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50236__auto____1;
return cljs$core$async$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___54168,out))
})();
var state__50404__auto__ = (function (){var statearr_54166 = f__50403__auto__.call(null);
(statearr_54166[(6)] = c__50402__auto___54168);

return statearr_54166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___54168,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563843529265
