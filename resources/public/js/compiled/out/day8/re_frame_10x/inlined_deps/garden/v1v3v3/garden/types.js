// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67480,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67484 = k67480;
var G__67484__$1 = (((G__67484 instanceof cljs.core.Keyword))?G__67484.fqn:null);
switch (G__67484__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67480,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67485){
var vec__67486 = p__67485;
var k__4408__auto__ = cljs.core.nth.call(null,vec__67486,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__67486,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67479){
var self__ = this;
var G__67479__$1 = this;
return (new cljs.core.RecordIter((0),G__67479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (927319699 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67481,other67482){
var self__ = this;
var this67481__$1 = this;
return (((!((other67482 == null)))) && ((this67481__$1.constructor === other67482.constructor)) && (cljs.core._EQ_.call(null,this67481__$1.unit,other67482.unit)) && (cljs.core._EQ_.call(null,this67481__$1.magnitude,other67482.magnitude)) && (cljs.core._EQ_.call(null,this67481__$1.__extmap,other67482.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67479){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67489 = cljs.core.keyword_identical_QMARK_;
var expr__67490 = k__4393__auto__;
if(cljs.core.truth_(pred__67489.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__67490))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(G__67479,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67489.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__67490))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__67479,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__67479),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67479){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__67479,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__67483){
var extmap__4424__auto__ = (function (){var G__67492 = cljs.core.dissoc.call(null,G__67483,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
if(cljs.core.record_QMARK_.call(null,G__67483)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__67492);
} else {
return G__67492;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__67483),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__67483),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67495,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67499 = k67495;
var G__67499__$1 = (((G__67499 instanceof cljs.core.Keyword))?G__67499.fqn:null);
switch (G__67499__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67495,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67500){
var vec__67501 = p__67500;
var k__4408__auto__ = cljs.core.nth.call(null,vec__67501,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__67501,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67494){
var self__ = this;
var G__67494__$1 = this;
return (new cljs.core.RecordIter((0),G__67494__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1249425430 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67496,other67497){
var self__ = this;
var this67496__$1 = this;
return (((!((other67497 == null)))) && ((this67496__$1.constructor === other67497.constructor)) && (cljs.core._EQ_.call(null,this67496__$1.function,other67497.function)) && (cljs.core._EQ_.call(null,this67496__$1.args,other67497.args)) && (cljs.core._EQ_.call(null,this67496__$1.__extmap,other67497.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67494){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67504 = cljs.core.keyword_identical_QMARK_;
var expr__67505 = k__4393__auto__;
if(cljs.core.truth_(pred__67504.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__67505))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(G__67494,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67504.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__67505))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__67494,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__67494),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67494){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__67494,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__67498){
var extmap__4424__auto__ = (function (){var G__67507 = cljs.core.dissoc.call(null,G__67498,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__67498)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__67507);
} else {
return G__67507;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__67498),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__67498),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k67510,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__67514 = k67510;
var G__67514__$1 = (((G__67514 instanceof cljs.core.Keyword))?G__67514.fqn:null);
switch (G__67514__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k67510,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__67515){
var vec__67516 = p__67515;
var k__4408__auto__ = cljs.core.nth.call(null,vec__67516,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__67516,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67509){
var self__ = this;
var G__67509__$1 = this;
return (new cljs.core.RecordIter((0),G__67509__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-980840912 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67511,other67512){
var self__ = this;
var this67511__$1 = this;
return (((!((other67512 == null)))) && ((this67511__$1.constructor === other67512.constructor)) && (cljs.core._EQ_.call(null,this67511__$1.identifier,other67512.identifier)) && (cljs.core._EQ_.call(null,this67511__$1.value,other67512.value)) && (cljs.core._EQ_.call(null,this67511__$1.__extmap,other67512.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__67509){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__67519 = cljs.core.keyword_identical_QMARK_;
var expr__67520 = k__4393__auto__;
if(cljs.core.truth_(pred__67519.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__67520))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(G__67509,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67519.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__67520))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__67509,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__67509),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__67509){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__67509,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__67513){
var extmap__4424__auto__ = (function (){var G__67522 = cljs.core.dissoc.call(null,G__67513,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__67513)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__67522);
} else {
return G__67522;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__67513),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__67513),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


//# sourceMappingURL=types.js.map?rel=1563842223045
