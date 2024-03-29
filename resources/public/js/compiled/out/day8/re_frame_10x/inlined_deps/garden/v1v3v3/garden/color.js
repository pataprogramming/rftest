// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k68681,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__68686 = k68681;
var G__68686__$1 = (((G__68686 instanceof cljs.core.Keyword))?G__68686.fqn:null);
switch (G__68686__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k68681,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__68687){
var vec__68688 = p__68687;
var k__4408__auto__ = cljs.core.nth.call(null,vec__68688,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__68688,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.color.CSSColor{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68680){
var self__ = this;
var G__68680__$1 = this;
return (new cljs.core.RecordIter((0),G__68680__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1592325990 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68682,other68683){
var self__ = this;
var this68682__$1 = this;
return (((!((other68683 == null)))) && ((this68682__$1.constructor === other68683.constructor)) && (cljs.core._EQ_.call(null,this68682__$1.red,other68683.red)) && (cljs.core._EQ_.call(null,this68682__$1.green,other68683.green)) && (cljs.core._EQ_.call(null,this68682__$1.blue,other68683.blue)) && (cljs.core._EQ_.call(null,this68682__$1.hue,other68683.hue)) && (cljs.core._EQ_.call(null,this68682__$1.saturation,other68683.saturation)) && (cljs.core._EQ_.call(null,this68682__$1.lightness,other68683.lightness)) && (cljs.core._EQ_.call(null,this68682__$1.alpha,other68683.alpha)) && (cljs.core._EQ_.call(null,this68682__$1.__extmap,other68683.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__68680){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__68691 = cljs.core.keyword_identical_QMARK_;
var expr__68692 = k__4393__auto__;
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"red","red",-969428204),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(G__68680,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,G__68680,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,G__68680,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__68680,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__68680,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__68680,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__68691.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__68692))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__68680,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__68680),null));
}
}
}
}
}
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"red","red",-969428204),self__.red,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"green","green",-945526839),self__.green,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__68680){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__68680,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.call = (function() {
var G__68696 = null;
var G__68696__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__68696__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k);
});
var G__68696__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k,missing);
});
G__68696 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__68696__1.call(this,self__);
case 2:
return G__68696__2.call(this,self__,k);
case 3:
return G__68696__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__68696.cljs$core$IFn$_invoke$arity$1 = G__68696__1;
G__68696.cljs$core$IFn$_invoke$arity$2 = G__68696__2;
G__68696.cljs$core$IFn$_invoke$arity$3 = G__68696__3;
return G__68696;
})()
;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.apply = (function (self__,args68685){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args68685)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k,missing);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.color/CSSColor",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.color/CSSColor");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.color/CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.color/CSSColor, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.map__GT_CSSColor = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$map__GT_CSSColor(G__68684){
var extmap__4424__auto__ = (function (){var G__68694 = cljs.core.dissoc.call(null,G__68684,new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
if(cljs.core.record_QMARK_.call(null,G__68684)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__68694);
} else {
return G__68694;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__68684),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__68684),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgb(var_args){
var G__68699 = arguments.length;
switch (G__68699) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__68700){
var vec__68701 = p__68700;
var r = cljs.core.nth.call(null,vec__68701,(0),null);
var g = cljs.core.nth.call(null,vec__68701,(1),null);
var b = cljs.core.nth.call(null,vec__68701,(2),null);
var vs = vec__68701;
if(cljs.core.every_QMARK_.call(null,((function (vec__68701,r,g,b,vs){
return (function (p1__68697_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_.call(null,p1__68697_SHARP_,(0),(255));
});})(vec__68701,r,g,b,vs))
,vs)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null));
} else {
throw cljs.core.ex_info.call(null,"RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$lang$maxFixedArity = 3;

/**
 * Create an RGBA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgba(var_args){
var G__68706 = arguments.length;
switch (G__68706) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__68707){
var vec__68708 = p__68707;
var r = cljs.core.nth.call(null,vec__68708,(0),null);
var g = cljs.core.nth.call(null,vec__68708,(1),null);
var b = cljs.core.nth.call(null,vec__68708,(2),null);
var a = cljs.core.nth.call(null,vec__68708,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgba.cljs$lang$maxFixedArity = 4;

/**
 * Create an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hsl(var_args){
var G__68714 = arguments.length;
switch (G__68714) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__68715){
var vec__68716 = p__68715;
var h = cljs.core.nth.call(null,vec__68716,(0),null);
var s = cljs.core.nth.call(null,vec__68716,(1),null);
var l = cljs.core.nth.call(null,vec__68716,(2),null);
var vec__68719 = cljs.core.map.call(null,((function (vec__68716,h,s,l){
return (function (p1__68712_SHARP_){
return cljs.core.get.call(null,p1__68712_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__68712_SHARP_);
});})(vec__68716,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.call(null,vec__68719,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__68719,(1),null);
var l__$1 = cljs.core.nth.call(null,vec__68719,(2),null);
if(((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_.call(null,s__$1,(0),(100))) && (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_.call(null,l__$1,(0),(100))))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod.call(null,h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null));
} else {
throw cljs.core.ex_info.call(null,"Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$lang$maxFixedArity = 3;

/**
 * Create an HSLA color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hsla(var_args){
var G__68724 = arguments.length;
switch (G__68724) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__68725){
var vec__68726 = p__68725;
var h = cljs.core.nth.call(null,vec__68726,(0),null);
var s = cljs.core.nth.call(null,vec__68726,(1),null);
var l = cljs.core.nth.call(null,vec__68726,(2),null);
var a = cljs.core.nth.call(null,vec__68726,(3),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsla.cljs$lang$maxFixedArity = 4;

/**
 * Return true if color is an RGB color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null))));
});
/**
 * Return true if x is a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$color_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)));
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hex_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__4120__auto__ = typeof x === 'string';
if(and__4120__auto__){
return cljs.core.re_matches.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_re,x);
} else {
return and__4120__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hex__GT_rgb(s){
var temp__5735__auto__ = cljs.core.re_matches.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__68732 = temp__5735__auto__;
var _ = cljs.core.nth.call(null,vec__68732,(0),null);
var hex = cljs.core.nth.call(null,vec__68732,(1),null);
var hex__$1 = ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,hex)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,((function (vec__68732,_,hex,temp__5735__auto__){
return (function (p1__68730_SHARP_){
return (new cljs.core.List(null,p1__68730_SHARP_,(new cljs.core.List(null,p1__68730_SHARP_,null,(1),null)),(2),null));
});})(vec__68732,_,hex,temp__5735__auto__))
,hex)):hex);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,((function (hex__$1,vec__68732,_,hex,temp__5735__auto__){
return (function (p1__68731_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.call(null,p1__68731_SHARP_,(16));
});})(hex__$1,vec__68732,_,hex,temp__5735__auto__))
,cljs.core.re_seq.call(null,/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgb__GT_hex(p__68735){
var map__68736 = p__68735;
var map__68736__$1 = (((((!((map__68736 == null))))?(((((map__68736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68736):map__68736);
var r = cljs.core.get.call(null,map__68736__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.call(null,map__68736__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.call(null,map__68736__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = ((function (map__68736,map__68736__$1,r,g,b){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.call(null,"%2s",day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.call(null,v,(16)))," ","0");
});})(map__68736,map__68736__$1,r,g,b))
;
return cljs.core.apply.call(null,cljs.core.str,"#",cljs.core.map.call(null,hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.trim_one = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rgb__GT_hsl(p__68739){
var map__68740 = p__68739;
var map__68740__$1 = (((((!((map__68740 == null))))?(((((map__68740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68740):map__68740);
var color = map__68740__$1;
var red = cljs.core.get.call(null,map__68740__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__68740__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__68740__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,color)){
return color;
} else {
var vec__68742 = cljs.core.map.call(null,((function (map__68740,map__68740__$1,color,red,green,blue){
return (function (p1__68738_SHARP_){
return (p1__68738_SHARP_ / (255));
});})(map__68740,map__68740__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.call(null,vec__68742,(0),null);
var g = cljs.core.nth.call(null,vec__68742,(1),null);
var b = cljs.core.nth.call(null,vec__68742,(2),null);
var mx = (function (){var x__4219__auto__ = (function (){var x__4219__auto__ = r;
var y__4220__auto__ = g;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var mn = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = r;
var y__4223__auto__ = g;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__68745 = cljs.core._EQ_;
var expr__68746 = mx;
if(cljs.core.truth_(pred__68745.call(null,mn,expr__68746))){
return (0);
} else {
if(cljs.core.truth_(pred__68745.call(null,r,expr__68746))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_(pred__68745.call(null,g,expr__68746))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_(pred__68745.call(null,b,expr__68746))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__68746)].join('')));
}
}
}
}
})();
var l = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.trim_one.call(null,((mx + mn) / (2)));
var s = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.trim_one.call(null,((cljs.core._EQ_.call(null,mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,cljs.core.mod.call(null,h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hsl__GT_rgb(p__68749){
var map__68750 = p__68749;
var map__68750__$1 = (((((!((map__68750 == null))))?(((((map__68750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68750):map__68750);
var color = map__68750__$1;
var hue = cljs.core.get.call(null,map__68750__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__68750__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__68750__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,color)){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__68752 = cljs.core.map.call(null,((function (h,s,l,m2,m1,map__68750,map__68750__$1,color,hue,saturation,lightness){
return (function (p1__68748_SHARP_){
return Math.round((p1__68748_SHARP_ * (255)));
});})(h,s,l,m2,m1,map__68750,map__68750__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h + (1.0 / (3)))),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,h),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h - (1.0 / (3))))], null));
var r = cljs.core.nth.call(null,vec__68752,(0),null);
var g = cljs.core.nth.call(null,vec__68752,(1),null);
var b = cljs.core.nth.call(null,vec__68752,(2),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue__GT_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hsl__GT_hex(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hex__GT_hsl(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,color));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip,(0),(100));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_clip = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$as_hex(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl__GT_hex.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$as_rgb(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$as_hsl(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,x);
} else {
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_hsl.call(null,x);
} else {
if(typeof x === 'number'){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip.call(null,x),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip.call(null,x)], null));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.restrict_rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$restrict_rgb(m){
return cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.make_color_operation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation(op){
return (function() {
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op = null;
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb_clip,op);
var a__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.restrict_rgb.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb.call(null,a));
var b__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.restrict_rgb.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb.call(null,b));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,o,a__$1,b__$1));
});
var day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__68755__delegate = function (a,b,more){
return cljs.core.reduce.call(null,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op,day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.call(null,a,b),more);
};
var G__68755 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__68756__i = 0, G__68756__a = new Array(arguments.length -  2);
while (G__68756__i < G__68756__a.length) {G__68756__a[G__68756__i] = arguments[G__68756__i + 2]; ++G__68756__i;}
  more = new cljs.core.IndexedSeq(G__68756__a,0,null);
} 
return G__68755__delegate.call(this,a,b,more);};
G__68755.cljs$lang$maxFixedArity = 2;
G__68755.cljs$lang$applyTo = (function (arglist__68757){
var a = cljs.core.first(arglist__68757);
arglist__68757 = cljs.core.next(arglist__68757);
var b = cljs.core.first(arglist__68757);
var more = cljs.core.rest(arglist__68757);
return G__68755__delegate(a,b,more);
});
G__68755.cljs$core$IFn$_invoke$arity$variadic = G__68755__delegate;
return G__68755;
})()
;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__68758 = null;
if (arguments.length > 2) {
var G__68759__i = 0, G__68759__a = new Array(arguments.length -  2);
while (G__68759__i < G__68759__a.length) {G__68759__a[G__68759__i] = arguments[G__68759__i + 2]; ++G__68759__i;}
G__68758 = new cljs.core.IndexedSeq(G__68759__a,0,null);
}
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__68758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2;
day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_PLUS_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_STAR_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_div = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._SLASH_);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hsl.call(null,color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rotate_hue = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$rotate_hue(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.call(null,(function (p1__68760_SHARP_){
return cljs.core.mod.call(null,p1__68760_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.saturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$saturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.desaturate = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$desaturate(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.lighten = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$lighten(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.darken = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$darken(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.invert = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$invert(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,cljs.core._,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb.call(null,color)));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$mix(var_args){
var G__68765 = arguments.length;
switch (G__68765) {
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___68767 = arguments.length;
var i__4731__auto___68768 = (0);
while(true){
if((i__4731__auto___68768 < len__4730__auto___68767)){
args_arr__4751__auto__.push((arguments[i__4731__auto___68768]));

var G__68769 = (i__4731__auto___68768 + (1));
i__4731__auto___68768 = G__68769;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.restrict_rgb.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb.call(null,color_1));
var c2 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.restrict_rgb.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_rgb.call(null,color_2));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average,c1,c2));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.call(null,color_1,color_2),more);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$lang$applyTo = (function (seq68762){
var G__68763 = cljs.core.first.call(null,seq68762);
var seq68762__$1 = cljs.core.next.call(null,seq68762);
var G__68764 = cljs.core.first.call(null,seq68762__$1);
var seq68762__$2 = cljs.core.next.call(null,seq68762__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68763,G__68764,seq68762__$2);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.mix.cljs$lang$maxFixedArity = (2);

/**
 * Return the complement of a color.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$complement(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(180));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hue_rotations(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68772 = arguments.length;
var i__4731__auto___68773 = (0);
while(true){
if((i__4731__auto___68773 < len__4730__auto___68772)){
args__4736__auto__.push((arguments[i__4731__auto___68773]));

var G__68774 = (i__4731__auto___68773 + (1));
i__4731__auto___68773 = G__68774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.call(null,cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rotate_hue,color),amounts);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq68770){
var G__68771 = cljs.core.first.call(null,seq68770);
var seq68770__$1 = cljs.core.next.call(null,seq68770);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68771,seq68770__$1);
});

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$analogous(var_args){
var G__68776 = arguments.length;
switch (G__68776) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.call(null,color,true);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),sign.call(null,(30)),sign.call(null,(60)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.analogous.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.triad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$triad(color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),(120),(240));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$split_complement(var_args){
var G__68779 = arguments.length;
switch (G__68779) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.call(null,color,(130));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip.call(null,(1),(179),distance_from_complement);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),d,(- d));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.split_complement.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$tetrad(var_args){
var G__68782 = arguments.length;
switch (G__68782) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.call(null,color,(90));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip.call(null,(1),(90),Math.abs(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle)));
var color_2 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rotate_hue.call(null,color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(0)),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.complement.call(null,color),color_2,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.complement.call(null,color_2)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.tetrad.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$shades(var_args){
var G__68785 = arguments.length;
switch (G__68785) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.call(null,color,(10));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hsl.call(null,color);
var iter__4523__auto__ = ((function (c){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$iter__68786(s__68787){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__68787__$1 = s__68787;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68787__$1);
if(temp__5735__auto__){
var s__68787__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68787__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__68787__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__68789 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__68788 = (0);
while(true){
if((i__68788 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__68788);
cljs.core.chunk_append.call(null,b__68789,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__68791 = (i__68788 + (1));
i__68788 = G__68791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68789),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$iter__68786.call(null,cljs.core.chunk_rest.call(null,s__68787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68789),null);
}
} else {
var i = cljs.core.first.call(null,s__68787__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$iter__68786.call(null,cljs.core.rest.call(null,s__68787__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),Math.floor((100.0 / step))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.shades.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.ex_info_color_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.call(null,["Unknown color ",cljs.core.pr_str.call(null,n)," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set.call(null,cljs.core.keys.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_name__GT_color = cljs.core.memoize.call(null,(function (k){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_name__GT_hex.call(null,k);
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.from_name = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$from_name(n){
var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.color_name__GT_color.call(null,cljs.core.keyword.call(null,n));
if(cljs.core.truth_(temp__5733__auto__)){
var h = temp__5733__auto__;
return h;
} else {
throw day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.ex_info_color_name.call(null,n);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.scale_color_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$scale_color_value(value,amount){
return (value + (((amount > (0)))?(((100) - value) * (amount / (100))):((value * amount) / (100))));
});
/**
 * Scale the lightness of a color by amount
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.scale_lightness = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$scale_lightness(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.scale_color_value,amount);
});
/**
 * Scale the saturation of a color by amount
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.scale_saturation = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$scale_saturation(color,amount){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.scale_color_value,amount);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.decrown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$decrown_hex(hex){
return clojure.string.replace.call(null,hex,/^#/,"");
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.crown_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.expand_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$expand_hex(hex){
var _ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.decrown_hex.call(null,hex);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.mapcat.call(null,cljs.core.vector,_,_));
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,(6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_long = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$hex__GT_long(hex){
return parseInt(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.expand_hex.call(null,clojure.string.replace.call(null,hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.long__GT_hex = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.weighted_mix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$color$weighted_mix(color_1,color_2,weight){
var vec__68793 = cljs.core.map.call(null,(function (p1__68792_SHARP_){
return (p1__68792_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.call(null,vec__68793,(0),null);
var weight_2 = cljs.core.nth.call(null,vec__68793,(1),null);
var vec__68796 = cljs.core.map.call(null,cljs.core.comp.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hex__GT_long,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.call(null,vec__68796,(0),null);
var long_2 = cljs.core.nth.call(null,vec__68796,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.crown_hex.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.expand_hex.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.long__GT_hex.call(null,((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=color.js.map?rel=1563842224469
