// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__55054_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__55054_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__55055 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__55056 = null;
var count__55057 = (0);
var i__55058 = (0);
while(true){
if((i__55058 < count__55057)){
var n = cljs.core._nth.call(null,chunk__55056,i__55058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__55059 = seq__55055;
var G__55060 = chunk__55056;
var G__55061 = count__55057;
var G__55062 = (i__55058 + (1));
seq__55055 = G__55059;
chunk__55056 = G__55060;
count__55057 = G__55061;
i__55058 = G__55062;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55055);
if(temp__5735__auto__){
var seq__55055__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55055__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__55055__$1);
var G__55063 = cljs.core.chunk_rest.call(null,seq__55055__$1);
var G__55064 = c__4550__auto__;
var G__55065 = cljs.core.count.call(null,c__4550__auto__);
var G__55066 = (0);
seq__55055 = G__55063;
chunk__55056 = G__55064;
count__55057 = G__55065;
i__55058 = G__55066;
continue;
} else {
var n = cljs.core.first.call(null,seq__55055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__55067 = cljs.core.next.call(null,seq__55055__$1);
var G__55068 = null;
var G__55069 = (0);
var G__55070 = (0);
seq__55055 = G__55067;
chunk__55056 = G__55068;
count__55057 = G__55069;
i__55058 = G__55070;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__55071){
var vec__55072 = p__55071;
var _ = cljs.core.nth.call(null,vec__55072,(0),null);
var v = cljs.core.nth.call(null,vec__55072,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__55075){
var vec__55076 = p__55075;
var k = cljs.core.nth.call(null,vec__55076,(0),null);
var v = cljs.core.nth.call(null,vec__55076,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__55088_55096 = cljs.core.seq.call(null,deps);
var chunk__55089_55097 = null;
var count__55090_55098 = (0);
var i__55091_55099 = (0);
while(true){
if((i__55091_55099 < count__55090_55098)){
var dep_55100 = cljs.core._nth.call(null,chunk__55089_55097,i__55091_55099);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_55100;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55100));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55100,(depth + (1)),state);
} else {
}


var G__55101 = seq__55088_55096;
var G__55102 = chunk__55089_55097;
var G__55103 = count__55090_55098;
var G__55104 = (i__55091_55099 + (1));
seq__55088_55096 = G__55101;
chunk__55089_55097 = G__55102;
count__55090_55098 = G__55103;
i__55091_55099 = G__55104;
continue;
} else {
var temp__5735__auto___55105 = cljs.core.seq.call(null,seq__55088_55096);
if(temp__5735__auto___55105){
var seq__55088_55106__$1 = temp__5735__auto___55105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55088_55106__$1)){
var c__4550__auto___55107 = cljs.core.chunk_first.call(null,seq__55088_55106__$1);
var G__55108 = cljs.core.chunk_rest.call(null,seq__55088_55106__$1);
var G__55109 = c__4550__auto___55107;
var G__55110 = cljs.core.count.call(null,c__4550__auto___55107);
var G__55111 = (0);
seq__55088_55096 = G__55108;
chunk__55089_55097 = G__55109;
count__55090_55098 = G__55110;
i__55091_55099 = G__55111;
continue;
} else {
var dep_55112 = cljs.core.first.call(null,seq__55088_55106__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_55112;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55112));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55112,(depth + (1)),state);
} else {
}


var G__55113 = cljs.core.next.call(null,seq__55088_55106__$1);
var G__55114 = null;
var G__55115 = (0);
var G__55116 = (0);
seq__55088_55096 = G__55113;
chunk__55089_55097 = G__55114;
count__55090_55098 = G__55115;
i__55091_55099 = G__55116;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__55092){
var vec__55093 = p__55092;
var seq__55094 = cljs.core.seq.call(null,vec__55093);
var first__55095 = cljs.core.first.call(null,seq__55094);
var seq__55094__$1 = cljs.core.next.call(null,seq__55094);
var x = first__55095;
var xs = seq__55094__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__55093,seq__55094,first__55095,seq__55094__$1,x,xs,get_deps__$1){
return (function (p1__55079_SHARP_){
return clojure.set.difference.call(null,p1__55079_SHARP_,x);
});})(vec__55093,seq__55094,first__55095,seq__55094__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__55117 = cljs.core.seq.call(null,provides);
var chunk__55118 = null;
var count__55119 = (0);
var i__55120 = (0);
while(true){
if((i__55120 < count__55119)){
var prov = cljs.core._nth.call(null,chunk__55118,i__55120);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55129_55137 = cljs.core.seq.call(null,requires);
var chunk__55130_55138 = null;
var count__55131_55139 = (0);
var i__55132_55140 = (0);
while(true){
if((i__55132_55140 < count__55131_55139)){
var req_55141 = cljs.core._nth.call(null,chunk__55130_55138,i__55132_55140);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55141,prov);


var G__55142 = seq__55129_55137;
var G__55143 = chunk__55130_55138;
var G__55144 = count__55131_55139;
var G__55145 = (i__55132_55140 + (1));
seq__55129_55137 = G__55142;
chunk__55130_55138 = G__55143;
count__55131_55139 = G__55144;
i__55132_55140 = G__55145;
continue;
} else {
var temp__5735__auto___55146 = cljs.core.seq.call(null,seq__55129_55137);
if(temp__5735__auto___55146){
var seq__55129_55147__$1 = temp__5735__auto___55146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55129_55147__$1)){
var c__4550__auto___55148 = cljs.core.chunk_first.call(null,seq__55129_55147__$1);
var G__55149 = cljs.core.chunk_rest.call(null,seq__55129_55147__$1);
var G__55150 = c__4550__auto___55148;
var G__55151 = cljs.core.count.call(null,c__4550__auto___55148);
var G__55152 = (0);
seq__55129_55137 = G__55149;
chunk__55130_55138 = G__55150;
count__55131_55139 = G__55151;
i__55132_55140 = G__55152;
continue;
} else {
var req_55153 = cljs.core.first.call(null,seq__55129_55147__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55153,prov);


var G__55154 = cljs.core.next.call(null,seq__55129_55147__$1);
var G__55155 = null;
var G__55156 = (0);
var G__55157 = (0);
seq__55129_55137 = G__55154;
chunk__55130_55138 = G__55155;
count__55131_55139 = G__55156;
i__55132_55140 = G__55157;
continue;
}
} else {
}
}
break;
}


var G__55158 = seq__55117;
var G__55159 = chunk__55118;
var G__55160 = count__55119;
var G__55161 = (i__55120 + (1));
seq__55117 = G__55158;
chunk__55118 = G__55159;
count__55119 = G__55160;
i__55120 = G__55161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55117);
if(temp__5735__auto__){
var seq__55117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55117__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__55117__$1);
var G__55162 = cljs.core.chunk_rest.call(null,seq__55117__$1);
var G__55163 = c__4550__auto__;
var G__55164 = cljs.core.count.call(null,c__4550__auto__);
var G__55165 = (0);
seq__55117 = G__55162;
chunk__55118 = G__55163;
count__55119 = G__55164;
i__55120 = G__55165;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55117__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55133_55166 = cljs.core.seq.call(null,requires);
var chunk__55134_55167 = null;
var count__55135_55168 = (0);
var i__55136_55169 = (0);
while(true){
if((i__55136_55169 < count__55135_55168)){
var req_55170 = cljs.core._nth.call(null,chunk__55134_55167,i__55136_55169);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55170,prov);


var G__55171 = seq__55133_55166;
var G__55172 = chunk__55134_55167;
var G__55173 = count__55135_55168;
var G__55174 = (i__55136_55169 + (1));
seq__55133_55166 = G__55171;
chunk__55134_55167 = G__55172;
count__55135_55168 = G__55173;
i__55136_55169 = G__55174;
continue;
} else {
var temp__5735__auto___55175__$1 = cljs.core.seq.call(null,seq__55133_55166);
if(temp__5735__auto___55175__$1){
var seq__55133_55176__$1 = temp__5735__auto___55175__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55133_55176__$1)){
var c__4550__auto___55177 = cljs.core.chunk_first.call(null,seq__55133_55176__$1);
var G__55178 = cljs.core.chunk_rest.call(null,seq__55133_55176__$1);
var G__55179 = c__4550__auto___55177;
var G__55180 = cljs.core.count.call(null,c__4550__auto___55177);
var G__55181 = (0);
seq__55133_55166 = G__55178;
chunk__55134_55167 = G__55179;
count__55135_55168 = G__55180;
i__55136_55169 = G__55181;
continue;
} else {
var req_55182 = cljs.core.first.call(null,seq__55133_55176__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55182,prov);


var G__55183 = cljs.core.next.call(null,seq__55133_55176__$1);
var G__55184 = null;
var G__55185 = (0);
var G__55186 = (0);
seq__55133_55166 = G__55183;
chunk__55134_55167 = G__55184;
count__55135_55168 = G__55185;
i__55136_55169 = G__55186;
continue;
}
} else {
}
}
break;
}


var G__55187 = cljs.core.next.call(null,seq__55117__$1);
var G__55188 = null;
var G__55189 = (0);
var G__55190 = (0);
seq__55117 = G__55187;
chunk__55118 = G__55188;
count__55119 = G__55189;
i__55120 = G__55190;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__55191_55195 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__55192_55196 = null;
var count__55193_55197 = (0);
var i__55194_55198 = (0);
while(true){
if((i__55194_55198 < count__55193_55197)){
var ns_55199 = cljs.core._nth.call(null,chunk__55192_55196,i__55194_55198);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55199);


var G__55200 = seq__55191_55195;
var G__55201 = chunk__55192_55196;
var G__55202 = count__55193_55197;
var G__55203 = (i__55194_55198 + (1));
seq__55191_55195 = G__55200;
chunk__55192_55196 = G__55201;
count__55193_55197 = G__55202;
i__55194_55198 = G__55203;
continue;
} else {
var temp__5735__auto___55204 = cljs.core.seq.call(null,seq__55191_55195);
if(temp__5735__auto___55204){
var seq__55191_55205__$1 = temp__5735__auto___55204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55191_55205__$1)){
var c__4550__auto___55206 = cljs.core.chunk_first.call(null,seq__55191_55205__$1);
var G__55207 = cljs.core.chunk_rest.call(null,seq__55191_55205__$1);
var G__55208 = c__4550__auto___55206;
var G__55209 = cljs.core.count.call(null,c__4550__auto___55206);
var G__55210 = (0);
seq__55191_55195 = G__55207;
chunk__55192_55196 = G__55208;
count__55193_55197 = G__55209;
i__55194_55198 = G__55210;
continue;
} else {
var ns_55211 = cljs.core.first.call(null,seq__55191_55205__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55211);


var G__55212 = cljs.core.next.call(null,seq__55191_55205__$1);
var G__55213 = null;
var G__55214 = (0);
var G__55215 = (0);
seq__55191_55195 = G__55212;
chunk__55192_55196 = G__55213;
count__55193_55197 = G__55214;
i__55194_55198 = G__55215;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__55216__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__55216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55217__i = 0, G__55217__a = new Array(arguments.length -  0);
while (G__55217__i < G__55217__a.length) {G__55217__a[G__55217__i] = arguments[G__55217__i + 0]; ++G__55217__i;}
  args = new cljs.core.IndexedSeq(G__55217__a,0,null);
} 
return G__55216__delegate.call(this,args);};
G__55216.cljs$lang$maxFixedArity = 0;
G__55216.cljs$lang$applyTo = (function (arglist__55218){
var args = cljs.core.seq(arglist__55218);
return G__55216__delegate(args);
});
G__55216.cljs$core$IFn$_invoke$arity$variadic = G__55216__delegate;
return G__55216;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__55219_SHARP_,p2__55220_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55219_SHARP_)),p2__55220_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__55221_SHARP_,p2__55222_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55221_SHARP_),p2__55222_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__55223 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__55223.addCallback(((function (G__55223){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__55223))
);

G__55223.addErrback(((function (G__55223){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__55223))
);

return G__55223;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e55224){if((e55224 instanceof Error)){
var e = e55224;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55224;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e55225){if((e55225 instanceof Error)){
var e = e55225;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55225;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__55226 = cljs.core._EQ_;
var expr__55227 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__55226.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__55227))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__55226.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__55227))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__55226.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__55227))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__55226,expr__55227){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__55226,expr__55227))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__55229,callback){
var map__55230 = p__55229;
var map__55230__$1 = (((((!((map__55230 == null))))?(((((map__55230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55230):map__55230);
var file_msg = map__55230__$1;
var request_url = cljs.core.get.call(null,map__55230__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__55230,map__55230__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__55230,map__55230__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__){
return (function (state_55268){
var state_val_55269 = (state_55268[(1)]);
if((state_val_55269 === (7))){
var inst_55264 = (state_55268[(2)]);
var state_55268__$1 = state_55268;
var statearr_55270_55296 = state_55268__$1;
(statearr_55270_55296[(2)] = inst_55264);

(statearr_55270_55296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (1))){
var state_55268__$1 = state_55268;
var statearr_55271_55297 = state_55268__$1;
(statearr_55271_55297[(2)] = null);

(statearr_55271_55297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (4))){
var inst_55234 = (state_55268[(7)]);
var inst_55234__$1 = (state_55268[(2)]);
var state_55268__$1 = (function (){var statearr_55272 = state_55268;
(statearr_55272[(7)] = inst_55234__$1);

return statearr_55272;
})();
if(cljs.core.truth_(inst_55234__$1)){
var statearr_55273_55298 = state_55268__$1;
(statearr_55273_55298[(1)] = (5));

} else {
var statearr_55274_55299 = state_55268__$1;
(statearr_55274_55299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (15))){
var inst_55249 = (state_55268[(8)]);
var inst_55247 = (state_55268[(9)]);
var inst_55251 = inst_55249.call(null,inst_55247);
var state_55268__$1 = state_55268;
var statearr_55275_55300 = state_55268__$1;
(statearr_55275_55300[(2)] = inst_55251);

(statearr_55275_55300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (13))){
var inst_55258 = (state_55268[(2)]);
var state_55268__$1 = state_55268;
var statearr_55276_55301 = state_55268__$1;
(statearr_55276_55301[(2)] = inst_55258);

(statearr_55276_55301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (6))){
var state_55268__$1 = state_55268;
var statearr_55277_55302 = state_55268__$1;
(statearr_55277_55302[(2)] = null);

(statearr_55277_55302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (17))){
var inst_55255 = (state_55268[(2)]);
var state_55268__$1 = state_55268;
var statearr_55278_55303 = state_55268__$1;
(statearr_55278_55303[(2)] = inst_55255);

(statearr_55278_55303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (3))){
var inst_55266 = (state_55268[(2)]);
var state_55268__$1 = state_55268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55268__$1,inst_55266);
} else {
if((state_val_55269 === (12))){
var state_55268__$1 = state_55268;
var statearr_55279_55304 = state_55268__$1;
(statearr_55279_55304[(2)] = null);

(statearr_55279_55304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (2))){
var state_55268__$1 = state_55268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55268__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_55269 === (11))){
var inst_55239 = (state_55268[(10)]);
var inst_55245 = figwheel.client.file_reloading.blocking_load.call(null,inst_55239);
var state_55268__$1 = state_55268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55268__$1,(14),inst_55245);
} else {
if((state_val_55269 === (9))){
var inst_55239 = (state_55268[(10)]);
var state_55268__$1 = state_55268;
if(cljs.core.truth_(inst_55239)){
var statearr_55280_55305 = state_55268__$1;
(statearr_55280_55305[(1)] = (11));

} else {
var statearr_55281_55306 = state_55268__$1;
(statearr_55281_55306[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (5))){
var inst_55240 = (state_55268[(11)]);
var inst_55234 = (state_55268[(7)]);
var inst_55239 = cljs.core.nth.call(null,inst_55234,(0),null);
var inst_55240__$1 = cljs.core.nth.call(null,inst_55234,(1),null);
var state_55268__$1 = (function (){var statearr_55282 = state_55268;
(statearr_55282[(11)] = inst_55240__$1);

(statearr_55282[(10)] = inst_55239);

return statearr_55282;
})();
if(cljs.core.truth_(inst_55240__$1)){
var statearr_55283_55307 = state_55268__$1;
(statearr_55283_55307[(1)] = (8));

} else {
var statearr_55284_55308 = state_55268__$1;
(statearr_55284_55308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (14))){
var inst_55249 = (state_55268[(8)]);
var inst_55239 = (state_55268[(10)]);
var inst_55247 = (state_55268[(2)]);
var inst_55248 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_55249__$1 = cljs.core.get.call(null,inst_55248,inst_55239);
var state_55268__$1 = (function (){var statearr_55285 = state_55268;
(statearr_55285[(8)] = inst_55249__$1);

(statearr_55285[(9)] = inst_55247);

return statearr_55285;
})();
if(cljs.core.truth_(inst_55249__$1)){
var statearr_55286_55309 = state_55268__$1;
(statearr_55286_55309[(1)] = (15));

} else {
var statearr_55287_55310 = state_55268__$1;
(statearr_55287_55310[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (16))){
var inst_55247 = (state_55268[(9)]);
var inst_55253 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_55247);
var state_55268__$1 = state_55268;
var statearr_55288_55311 = state_55268__$1;
(statearr_55288_55311[(2)] = inst_55253);

(statearr_55288_55311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (10))){
var inst_55260 = (state_55268[(2)]);
var state_55268__$1 = (function (){var statearr_55289 = state_55268;
(statearr_55289[(12)] = inst_55260);

return statearr_55289;
})();
var statearr_55290_55312 = state_55268__$1;
(statearr_55290_55312[(2)] = null);

(statearr_55290_55312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55269 === (8))){
var inst_55240 = (state_55268[(11)]);
var inst_55242 = eval(inst_55240);
var state_55268__$1 = state_55268;
var statearr_55291_55313 = state_55268__$1;
(statearr_55291_55313[(2)] = inst_55242);

(statearr_55291_55313[(1)] = (10));


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
});})(c__50402__auto__))
;
return ((function (switch__50235__auto__,c__50402__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50236__auto__ = null;
var figwheel$client$file_reloading$state_machine__50236__auto____0 = (function (){
var statearr_55292 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55292[(0)] = figwheel$client$file_reloading$state_machine__50236__auto__);

(statearr_55292[(1)] = (1));

return statearr_55292;
});
var figwheel$client$file_reloading$state_machine__50236__auto____1 = (function (state_55268){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_55268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e55293){if((e55293 instanceof Object)){
var ex__50239__auto__ = e55293;
var statearr_55294_55314 = state_55268;
(statearr_55294_55314[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55315 = state_55268;
state_55268 = G__55315;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50236__auto__ = function(state_55268){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50236__auto____1.call(this,state_55268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50236__auto____0;
figwheel$client$file_reloading$state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50236__auto____1;
return figwheel$client$file_reloading$state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__))
})();
var state__50404__auto__ = (function (){var statearr_55295 = f__50403__auto__.call(null);
(statearr_55295[(6)] = c__50402__auto__);

return statearr_55295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__))
);

return c__50402__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__55317 = arguments.length;
switch (G__55317) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__55319,callback){
var map__55320 = p__55319;
var map__55320__$1 = (((((!((map__55320 == null))))?(((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55320):map__55320);
var file_msg = map__55320__$1;
var namespace = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__55320,map__55320__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__55320,map__55320__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__55322){
var map__55323 = p__55322;
var map__55323__$1 = (((((!((map__55323 == null))))?(((((map__55323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55323):map__55323);
var file_msg = map__55323__$1;
var namespace = cljs.core.get.call(null,map__55323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__55325){
var map__55326 = p__55325;
var map__55326__$1 = (((((!((map__55326 == null))))?(((((map__55326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55326):map__55326);
var file_msg = map__55326__$1;
var namespace = cljs.core.get.call(null,map__55326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__55328,callback){
var map__55329 = p__55328;
var map__55329__$1 = (((((!((map__55329 == null))))?(((((map__55329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55329):map__55329);
var file_msg = map__55329__$1;
var request_url = cljs.core.get.call(null,map__55329__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__55329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__50402__auto___55379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto___55379,out){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto___55379,out){
return (function (state_55364){
var state_val_55365 = (state_55364[(1)]);
if((state_val_55365 === (1))){
var inst_55338 = cljs.core.seq.call(null,files);
var inst_55339 = cljs.core.first.call(null,inst_55338);
var inst_55340 = cljs.core.next.call(null,inst_55338);
var inst_55341 = files;
var state_55364__$1 = (function (){var statearr_55366 = state_55364;
(statearr_55366[(7)] = inst_55341);

(statearr_55366[(8)] = inst_55339);

(statearr_55366[(9)] = inst_55340);

return statearr_55366;
})();
var statearr_55367_55380 = state_55364__$1;
(statearr_55367_55380[(2)] = null);

(statearr_55367_55380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55365 === (2))){
var inst_55341 = (state_55364[(7)]);
var inst_55347 = (state_55364[(10)]);
var inst_55346 = cljs.core.seq.call(null,inst_55341);
var inst_55347__$1 = cljs.core.first.call(null,inst_55346);
var inst_55348 = cljs.core.next.call(null,inst_55346);
var inst_55349 = (inst_55347__$1 == null);
var inst_55350 = cljs.core.not.call(null,inst_55349);
var state_55364__$1 = (function (){var statearr_55368 = state_55364;
(statearr_55368[(11)] = inst_55348);

(statearr_55368[(10)] = inst_55347__$1);

return statearr_55368;
})();
if(inst_55350){
var statearr_55369_55381 = state_55364__$1;
(statearr_55369_55381[(1)] = (4));

} else {
var statearr_55370_55382 = state_55364__$1;
(statearr_55370_55382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55365 === (3))){
var inst_55362 = (state_55364[(2)]);
var state_55364__$1 = state_55364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55364__$1,inst_55362);
} else {
if((state_val_55365 === (4))){
var inst_55347 = (state_55364[(10)]);
var inst_55352 = figwheel.client.file_reloading.reload_js_file.call(null,inst_55347);
var state_55364__$1 = state_55364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55364__$1,(7),inst_55352);
} else {
if((state_val_55365 === (5))){
var inst_55358 = cljs.core.async.close_BANG_.call(null,out);
var state_55364__$1 = state_55364;
var statearr_55371_55383 = state_55364__$1;
(statearr_55371_55383[(2)] = inst_55358);

(statearr_55371_55383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55365 === (6))){
var inst_55360 = (state_55364[(2)]);
var state_55364__$1 = state_55364;
var statearr_55372_55384 = state_55364__$1;
(statearr_55372_55384[(2)] = inst_55360);

(statearr_55372_55384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55365 === (7))){
var inst_55348 = (state_55364[(11)]);
var inst_55354 = (state_55364[(2)]);
var inst_55355 = cljs.core.async.put_BANG_.call(null,out,inst_55354);
var inst_55341 = inst_55348;
var state_55364__$1 = (function (){var statearr_55373 = state_55364;
(statearr_55373[(7)] = inst_55341);

(statearr_55373[(12)] = inst_55355);

return statearr_55373;
})();
var statearr_55374_55385 = state_55364__$1;
(statearr_55374_55385[(2)] = null);

(statearr_55374_55385[(1)] = (2));


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
});})(c__50402__auto___55379,out))
;
return ((function (switch__50235__auto__,c__50402__auto___55379,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____0 = (function (){
var statearr_55375 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55375[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__);

(statearr_55375[(1)] = (1));

return statearr_55375;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____1 = (function (state_55364){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_55364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e55376){if((e55376 instanceof Object)){
var ex__50239__auto__ = e55376;
var statearr_55377_55386 = state_55364;
(statearr_55377_55386[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55387 = state_55364;
state_55364 = G__55387;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__ = function(state_55364){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____1.call(this,state_55364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto___55379,out))
})();
var state__50404__auto__ = (function (){var statearr_55378 = f__50403__auto__.call(null);
(statearr_55378[(6)] = c__50402__auto___55379);

return statearr_55378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto___55379,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__55388,opts){
var map__55389 = p__55388;
var map__55389__$1 = (((((!((map__55389 == null))))?(((((map__55389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55389):map__55389);
var eval_body = cljs.core.get.call(null,map__55389__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__55389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e55391){var e = e55391;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__55392_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55392_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55393){
var vec__55394 = p__55393;
var k = cljs.core.nth.call(null,vec__55394,(0),null);
var v = cljs.core.nth.call(null,vec__55394,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__55397){
var vec__55398 = p__55397;
var k = cljs.core.nth.call(null,vec__55398,(0),null);
var v = cljs.core.nth.call(null,vec__55398,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55404,p__55405){
var map__55406 = p__55404;
var map__55406__$1 = (((((!((map__55406 == null))))?(((((map__55406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55406):map__55406);
var opts = map__55406__$1;
var before_jsload = cljs.core.get.call(null,map__55406__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55406__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55406__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55407 = p__55405;
var map__55407__$1 = (((((!((map__55407 == null))))?(((((map__55407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55407):map__55407);
var msg = map__55407__$1;
var files = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__50402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__50403__auto__ = (function (){var switch__50235__auto__ = ((function (c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55561){
var state_val_55562 = (state_55561[(1)]);
if((state_val_55562 === (7))){
var inst_55422 = (state_55561[(7)]);
var inst_55424 = (state_55561[(8)]);
var inst_55423 = (state_55561[(9)]);
var inst_55421 = (state_55561[(10)]);
var inst_55429 = cljs.core._nth.call(null,inst_55422,inst_55424);
var inst_55430 = figwheel.client.file_reloading.eval_body.call(null,inst_55429,opts);
var inst_55431 = (inst_55424 + (1));
var tmp55563 = inst_55422;
var tmp55564 = inst_55423;
var tmp55565 = inst_55421;
var inst_55421__$1 = tmp55565;
var inst_55422__$1 = tmp55563;
var inst_55423__$1 = tmp55564;
var inst_55424__$1 = inst_55431;
var state_55561__$1 = (function (){var statearr_55566 = state_55561;
(statearr_55566[(11)] = inst_55430);

(statearr_55566[(7)] = inst_55422__$1);

(statearr_55566[(8)] = inst_55424__$1);

(statearr_55566[(9)] = inst_55423__$1);

(statearr_55566[(10)] = inst_55421__$1);

return statearr_55566;
})();
var statearr_55567_55650 = state_55561__$1;
(statearr_55567_55650[(2)] = null);

(statearr_55567_55650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (20))){
var inst_55464 = (state_55561[(12)]);
var inst_55472 = figwheel.client.file_reloading.sort_files.call(null,inst_55464);
var state_55561__$1 = state_55561;
var statearr_55568_55651 = state_55561__$1;
(statearr_55568_55651[(2)] = inst_55472);

(statearr_55568_55651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (27))){
var state_55561__$1 = state_55561;
var statearr_55569_55652 = state_55561__$1;
(statearr_55569_55652[(2)] = null);

(statearr_55569_55652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (1))){
var inst_55413 = (state_55561[(13)]);
var inst_55410 = before_jsload.call(null,files);
var inst_55411 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55412 = (function (){return ((function (inst_55413,inst_55410,inst_55411,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55401_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55401_SHARP_);
});
;})(inst_55413,inst_55410,inst_55411,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55413__$1 = cljs.core.filter.call(null,inst_55412,files);
var inst_55414 = cljs.core.not_empty.call(null,inst_55413__$1);
var state_55561__$1 = (function (){var statearr_55570 = state_55561;
(statearr_55570[(14)] = inst_55411);

(statearr_55570[(13)] = inst_55413__$1);

(statearr_55570[(15)] = inst_55410);

return statearr_55570;
})();
if(cljs.core.truth_(inst_55414)){
var statearr_55571_55653 = state_55561__$1;
(statearr_55571_55653[(1)] = (2));

} else {
var statearr_55572_55654 = state_55561__$1;
(statearr_55572_55654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (24))){
var state_55561__$1 = state_55561;
var statearr_55573_55655 = state_55561__$1;
(statearr_55573_55655[(2)] = null);

(statearr_55573_55655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (39))){
var inst_55514 = (state_55561[(16)]);
var state_55561__$1 = state_55561;
var statearr_55574_55656 = state_55561__$1;
(statearr_55574_55656[(2)] = inst_55514);

(statearr_55574_55656[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (46))){
var inst_55556 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55575_55657 = state_55561__$1;
(statearr_55575_55657[(2)] = inst_55556);

(statearr_55575_55657[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (4))){
var inst_55458 = (state_55561[(2)]);
var inst_55459 = cljs.core.List.EMPTY;
var inst_55460 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55459);
var inst_55461 = (function (){return ((function (inst_55458,inst_55459,inst_55460,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55402_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55402_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55402_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__55402_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_55458,inst_55459,inst_55460,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55462 = cljs.core.filter.call(null,inst_55461,files);
var inst_55463 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55464 = cljs.core.concat.call(null,inst_55462,inst_55463);
var state_55561__$1 = (function (){var statearr_55576 = state_55561;
(statearr_55576[(17)] = inst_55458);

(statearr_55576[(18)] = inst_55460);

(statearr_55576[(12)] = inst_55464);

return statearr_55576;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55577_55658 = state_55561__$1;
(statearr_55577_55658[(1)] = (16));

} else {
var statearr_55578_55659 = state_55561__$1;
(statearr_55578_55659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (15))){
var inst_55448 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55579_55660 = state_55561__$1;
(statearr_55579_55660[(2)] = inst_55448);

(statearr_55579_55660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (21))){
var inst_55474 = (state_55561[(19)]);
var inst_55474__$1 = (state_55561[(2)]);
var inst_55475 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55474__$1);
var state_55561__$1 = (function (){var statearr_55580 = state_55561;
(statearr_55580[(19)] = inst_55474__$1);

return statearr_55580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55561__$1,(22),inst_55475);
} else {
if((state_val_55562 === (31))){
var inst_55559 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55561__$1,inst_55559);
} else {
if((state_val_55562 === (32))){
var inst_55514 = (state_55561[(16)]);
var inst_55519 = inst_55514.cljs$lang$protocol_mask$partition0$;
var inst_55520 = (inst_55519 & (64));
var inst_55521 = inst_55514.cljs$core$ISeq$;
var inst_55522 = (cljs.core.PROTOCOL_SENTINEL === inst_55521);
var inst_55523 = ((inst_55520) || (inst_55522));
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55523)){
var statearr_55581_55661 = state_55561__$1;
(statearr_55581_55661[(1)] = (35));

} else {
var statearr_55582_55662 = state_55561__$1;
(statearr_55582_55662[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (40))){
var inst_55536 = (state_55561[(20)]);
var inst_55535 = (state_55561[(2)]);
var inst_55536__$1 = cljs.core.get.call(null,inst_55535,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55537 = cljs.core.get.call(null,inst_55535,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55538 = cljs.core.not_empty.call(null,inst_55536__$1);
var state_55561__$1 = (function (){var statearr_55583 = state_55561;
(statearr_55583[(21)] = inst_55537);

(statearr_55583[(20)] = inst_55536__$1);

return statearr_55583;
})();
if(cljs.core.truth_(inst_55538)){
var statearr_55584_55663 = state_55561__$1;
(statearr_55584_55663[(1)] = (41));

} else {
var statearr_55585_55664 = state_55561__$1;
(statearr_55585_55664[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (33))){
var state_55561__$1 = state_55561;
var statearr_55586_55665 = state_55561__$1;
(statearr_55586_55665[(2)] = false);

(statearr_55586_55665[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (13))){
var inst_55434 = (state_55561[(22)]);
var inst_55438 = cljs.core.chunk_first.call(null,inst_55434);
var inst_55439 = cljs.core.chunk_rest.call(null,inst_55434);
var inst_55440 = cljs.core.count.call(null,inst_55438);
var inst_55421 = inst_55439;
var inst_55422 = inst_55438;
var inst_55423 = inst_55440;
var inst_55424 = (0);
var state_55561__$1 = (function (){var statearr_55587 = state_55561;
(statearr_55587[(7)] = inst_55422);

(statearr_55587[(8)] = inst_55424);

(statearr_55587[(9)] = inst_55423);

(statearr_55587[(10)] = inst_55421);

return statearr_55587;
})();
var statearr_55588_55666 = state_55561__$1;
(statearr_55588_55666[(2)] = null);

(statearr_55588_55666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (22))){
var inst_55474 = (state_55561[(19)]);
var inst_55482 = (state_55561[(23)]);
var inst_55477 = (state_55561[(24)]);
var inst_55478 = (state_55561[(25)]);
var inst_55477__$1 = (state_55561[(2)]);
var inst_55478__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55477__$1);
var inst_55479 = (function (){var all_files = inst_55474;
var res_SINGLEQUOTE_ = inst_55477__$1;
var res = inst_55478__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55474,inst_55482,inst_55477,inst_55478,inst_55477__$1,inst_55478__$1,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55403_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__55403_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55474,inst_55482,inst_55477,inst_55478,inst_55477__$1,inst_55478__$1,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55480 = cljs.core.filter.call(null,inst_55479,inst_55477__$1);
var inst_55481 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55482__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55481);
var inst_55483 = cljs.core.not_empty.call(null,inst_55482__$1);
var state_55561__$1 = (function (){var statearr_55589 = state_55561;
(statearr_55589[(23)] = inst_55482__$1);

(statearr_55589[(24)] = inst_55477__$1);

(statearr_55589[(26)] = inst_55480);

(statearr_55589[(25)] = inst_55478__$1);

return statearr_55589;
})();
if(cljs.core.truth_(inst_55483)){
var statearr_55590_55667 = state_55561__$1;
(statearr_55590_55667[(1)] = (23));

} else {
var statearr_55591_55668 = state_55561__$1;
(statearr_55591_55668[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (36))){
var state_55561__$1 = state_55561;
var statearr_55592_55669 = state_55561__$1;
(statearr_55592_55669[(2)] = false);

(statearr_55592_55669[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (41))){
var inst_55536 = (state_55561[(20)]);
var inst_55540 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55541 = cljs.core.map.call(null,inst_55540,inst_55536);
var inst_55542 = cljs.core.pr_str.call(null,inst_55541);
var inst_55543 = ["figwheel-no-load meta-data: ",inst_55542].join('');
var inst_55544 = figwheel.client.utils.log.call(null,inst_55543);
var state_55561__$1 = state_55561;
var statearr_55593_55670 = state_55561__$1;
(statearr_55593_55670[(2)] = inst_55544);

(statearr_55593_55670[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (43))){
var inst_55537 = (state_55561[(21)]);
var inst_55547 = (state_55561[(2)]);
var inst_55548 = cljs.core.not_empty.call(null,inst_55537);
var state_55561__$1 = (function (){var statearr_55594 = state_55561;
(statearr_55594[(27)] = inst_55547);

return statearr_55594;
})();
if(cljs.core.truth_(inst_55548)){
var statearr_55595_55671 = state_55561__$1;
(statearr_55595_55671[(1)] = (44));

} else {
var statearr_55596_55672 = state_55561__$1;
(statearr_55596_55672[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (29))){
var inst_55474 = (state_55561[(19)]);
var inst_55482 = (state_55561[(23)]);
var inst_55477 = (state_55561[(24)]);
var inst_55480 = (state_55561[(26)]);
var inst_55478 = (state_55561[(25)]);
var inst_55514 = (state_55561[(16)]);
var inst_55510 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55513 = (function (){var all_files = inst_55474;
var res_SINGLEQUOTE_ = inst_55477;
var res = inst_55478;
var files_not_loaded = inst_55480;
var dependencies_that_loaded = inst_55482;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55514,inst_55510,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55512){
var map__55597 = p__55512;
var map__55597__$1 = (((((!((map__55597 == null))))?(((((map__55597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55597):map__55597);
var namespace = cljs.core.get.call(null,map__55597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55514,inst_55510,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55514__$1 = cljs.core.group_by.call(null,inst_55513,inst_55480);
var inst_55516 = (inst_55514__$1 == null);
var inst_55517 = cljs.core.not.call(null,inst_55516);
var state_55561__$1 = (function (){var statearr_55599 = state_55561;
(statearr_55599[(28)] = inst_55510);

(statearr_55599[(16)] = inst_55514__$1);

return statearr_55599;
})();
if(inst_55517){
var statearr_55600_55673 = state_55561__$1;
(statearr_55600_55673[(1)] = (32));

} else {
var statearr_55601_55674 = state_55561__$1;
(statearr_55601_55674[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (44))){
var inst_55537 = (state_55561[(21)]);
var inst_55550 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55537);
var inst_55551 = cljs.core.pr_str.call(null,inst_55550);
var inst_55552 = ["not required: ",inst_55551].join('');
var inst_55553 = figwheel.client.utils.log.call(null,inst_55552);
var state_55561__$1 = state_55561;
var statearr_55602_55675 = state_55561__$1;
(statearr_55602_55675[(2)] = inst_55553);

(statearr_55602_55675[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (6))){
var inst_55455 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55603_55676 = state_55561__$1;
(statearr_55603_55676[(2)] = inst_55455);

(statearr_55603_55676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (28))){
var inst_55480 = (state_55561[(26)]);
var inst_55507 = (state_55561[(2)]);
var inst_55508 = cljs.core.not_empty.call(null,inst_55480);
var state_55561__$1 = (function (){var statearr_55604 = state_55561;
(statearr_55604[(29)] = inst_55507);

return statearr_55604;
})();
if(cljs.core.truth_(inst_55508)){
var statearr_55605_55677 = state_55561__$1;
(statearr_55605_55677[(1)] = (29));

} else {
var statearr_55606_55678 = state_55561__$1;
(statearr_55606_55678[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (25))){
var inst_55478 = (state_55561[(25)]);
var inst_55494 = (state_55561[(2)]);
var inst_55495 = cljs.core.not_empty.call(null,inst_55478);
var state_55561__$1 = (function (){var statearr_55607 = state_55561;
(statearr_55607[(30)] = inst_55494);

return statearr_55607;
})();
if(cljs.core.truth_(inst_55495)){
var statearr_55608_55679 = state_55561__$1;
(statearr_55608_55679[(1)] = (26));

} else {
var statearr_55609_55680 = state_55561__$1;
(statearr_55609_55680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (34))){
var inst_55530 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55530)){
var statearr_55610_55681 = state_55561__$1;
(statearr_55610_55681[(1)] = (38));

} else {
var statearr_55611_55682 = state_55561__$1;
(statearr_55611_55682[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (17))){
var state_55561__$1 = state_55561;
var statearr_55612_55683 = state_55561__$1;
(statearr_55612_55683[(2)] = recompile_dependents);

(statearr_55612_55683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (3))){
var state_55561__$1 = state_55561;
var statearr_55613_55684 = state_55561__$1;
(statearr_55613_55684[(2)] = null);

(statearr_55613_55684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (12))){
var inst_55451 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55614_55685 = state_55561__$1;
(statearr_55614_55685[(2)] = inst_55451);

(statearr_55614_55685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (2))){
var inst_55413 = (state_55561[(13)]);
var inst_55420 = cljs.core.seq.call(null,inst_55413);
var inst_55421 = inst_55420;
var inst_55422 = null;
var inst_55423 = (0);
var inst_55424 = (0);
var state_55561__$1 = (function (){var statearr_55615 = state_55561;
(statearr_55615[(7)] = inst_55422);

(statearr_55615[(8)] = inst_55424);

(statearr_55615[(9)] = inst_55423);

(statearr_55615[(10)] = inst_55421);

return statearr_55615;
})();
var statearr_55616_55686 = state_55561__$1;
(statearr_55616_55686[(2)] = null);

(statearr_55616_55686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (23))){
var inst_55474 = (state_55561[(19)]);
var inst_55482 = (state_55561[(23)]);
var inst_55477 = (state_55561[(24)]);
var inst_55480 = (state_55561[(26)]);
var inst_55478 = (state_55561[(25)]);
var inst_55485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55487 = (function (){var all_files = inst_55474;
var res_SINGLEQUOTE_ = inst_55477;
var res = inst_55478;
var files_not_loaded = inst_55480;
var dependencies_that_loaded = inst_55482;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55485,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55486){
var map__55617 = p__55486;
var map__55617__$1 = (((((!((map__55617 == null))))?(((((map__55617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55617):map__55617);
var request_url = cljs.core.get.call(null,map__55617__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55485,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55488 = cljs.core.reverse.call(null,inst_55482);
var inst_55489 = cljs.core.map.call(null,inst_55487,inst_55488);
var inst_55490 = cljs.core.pr_str.call(null,inst_55489);
var inst_55491 = figwheel.client.utils.log.call(null,inst_55490);
var state_55561__$1 = (function (){var statearr_55619 = state_55561;
(statearr_55619[(31)] = inst_55485);

return statearr_55619;
})();
var statearr_55620_55687 = state_55561__$1;
(statearr_55620_55687[(2)] = inst_55491);

(statearr_55620_55687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (35))){
var state_55561__$1 = state_55561;
var statearr_55621_55688 = state_55561__$1;
(statearr_55621_55688[(2)] = true);

(statearr_55621_55688[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (19))){
var inst_55464 = (state_55561[(12)]);
var inst_55470 = figwheel.client.file_reloading.expand_files.call(null,inst_55464);
var state_55561__$1 = state_55561;
var statearr_55622_55689 = state_55561__$1;
(statearr_55622_55689[(2)] = inst_55470);

(statearr_55622_55689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (11))){
var state_55561__$1 = state_55561;
var statearr_55623_55690 = state_55561__$1;
(statearr_55623_55690[(2)] = null);

(statearr_55623_55690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (9))){
var inst_55453 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55624_55691 = state_55561__$1;
(statearr_55624_55691[(2)] = inst_55453);

(statearr_55624_55691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (5))){
var inst_55424 = (state_55561[(8)]);
var inst_55423 = (state_55561[(9)]);
var inst_55426 = (inst_55424 < inst_55423);
var inst_55427 = inst_55426;
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55427)){
var statearr_55625_55692 = state_55561__$1;
(statearr_55625_55692[(1)] = (7));

} else {
var statearr_55626_55693 = state_55561__$1;
(statearr_55626_55693[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (14))){
var inst_55434 = (state_55561[(22)]);
var inst_55443 = cljs.core.first.call(null,inst_55434);
var inst_55444 = figwheel.client.file_reloading.eval_body.call(null,inst_55443,opts);
var inst_55445 = cljs.core.next.call(null,inst_55434);
var inst_55421 = inst_55445;
var inst_55422 = null;
var inst_55423 = (0);
var inst_55424 = (0);
var state_55561__$1 = (function (){var statearr_55627 = state_55561;
(statearr_55627[(7)] = inst_55422);

(statearr_55627[(8)] = inst_55424);

(statearr_55627[(9)] = inst_55423);

(statearr_55627[(10)] = inst_55421);

(statearr_55627[(32)] = inst_55444);

return statearr_55627;
})();
var statearr_55628_55694 = state_55561__$1;
(statearr_55628_55694[(2)] = null);

(statearr_55628_55694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (45))){
var state_55561__$1 = state_55561;
var statearr_55629_55695 = state_55561__$1;
(statearr_55629_55695[(2)] = null);

(statearr_55629_55695[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (26))){
var inst_55474 = (state_55561[(19)]);
var inst_55482 = (state_55561[(23)]);
var inst_55477 = (state_55561[(24)]);
var inst_55480 = (state_55561[(26)]);
var inst_55478 = (state_55561[(25)]);
var inst_55497 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55499 = (function (){var all_files = inst_55474;
var res_SINGLEQUOTE_ = inst_55477;
var res = inst_55478;
var files_not_loaded = inst_55480;
var dependencies_that_loaded = inst_55482;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55497,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55498){
var map__55630 = p__55498;
var map__55630__$1 = (((((!((map__55630 == null))))?(((((map__55630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55630):map__55630);
var namespace = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55497,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55500 = cljs.core.map.call(null,inst_55499,inst_55478);
var inst_55501 = cljs.core.pr_str.call(null,inst_55500);
var inst_55502 = figwheel.client.utils.log.call(null,inst_55501);
var inst_55503 = (function (){var all_files = inst_55474;
var res_SINGLEQUOTE_ = inst_55477;
var res = inst_55478;
var files_not_loaded = inst_55480;
var dependencies_that_loaded = inst_55482;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55497,inst_55499,inst_55500,inst_55501,inst_55502,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55474,inst_55482,inst_55477,inst_55480,inst_55478,inst_55497,inst_55499,inst_55500,inst_55501,inst_55502,state_val_55562,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55504 = setTimeout(inst_55503,(10));
var state_55561__$1 = (function (){var statearr_55632 = state_55561;
(statearr_55632[(33)] = inst_55497);

(statearr_55632[(34)] = inst_55502);

return statearr_55632;
})();
var statearr_55633_55696 = state_55561__$1;
(statearr_55633_55696[(2)] = inst_55504);

(statearr_55633_55696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (16))){
var state_55561__$1 = state_55561;
var statearr_55634_55697 = state_55561__$1;
(statearr_55634_55697[(2)] = reload_dependents);

(statearr_55634_55697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (38))){
var inst_55514 = (state_55561[(16)]);
var inst_55532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55514);
var state_55561__$1 = state_55561;
var statearr_55635_55698 = state_55561__$1;
(statearr_55635_55698[(2)] = inst_55532);

(statearr_55635_55698[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (30))){
var state_55561__$1 = state_55561;
var statearr_55636_55699 = state_55561__$1;
(statearr_55636_55699[(2)] = null);

(statearr_55636_55699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (10))){
var inst_55434 = (state_55561[(22)]);
var inst_55436 = cljs.core.chunked_seq_QMARK_.call(null,inst_55434);
var state_55561__$1 = state_55561;
if(inst_55436){
var statearr_55637_55700 = state_55561__$1;
(statearr_55637_55700[(1)] = (13));

} else {
var statearr_55638_55701 = state_55561__$1;
(statearr_55638_55701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (18))){
var inst_55468 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55468)){
var statearr_55639_55702 = state_55561__$1;
(statearr_55639_55702[(1)] = (19));

} else {
var statearr_55640_55703 = state_55561__$1;
(statearr_55640_55703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (42))){
var state_55561__$1 = state_55561;
var statearr_55641_55704 = state_55561__$1;
(statearr_55641_55704[(2)] = null);

(statearr_55641_55704[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (37))){
var inst_55527 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55642_55705 = state_55561__$1;
(statearr_55642_55705[(2)] = inst_55527);

(statearr_55642_55705[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (8))){
var inst_55434 = (state_55561[(22)]);
var inst_55421 = (state_55561[(10)]);
var inst_55434__$1 = cljs.core.seq.call(null,inst_55421);
var state_55561__$1 = (function (){var statearr_55643 = state_55561;
(statearr_55643[(22)] = inst_55434__$1);

return statearr_55643;
})();
if(inst_55434__$1){
var statearr_55644_55706 = state_55561__$1;
(statearr_55644_55706[(1)] = (10));

} else {
var statearr_55645_55707 = state_55561__$1;
(statearr_55645_55707[(1)] = (11));

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
}
});})(c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50235__auto__,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____0 = (function (){
var statearr_55646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55646[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__);

(statearr_55646[(1)] = (1));

return statearr_55646;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____1 = (function (state_55561){
while(true){
var ret_value__50237__auto__ = (function (){try{while(true){
var result__50238__auto__ = switch__50235__auto__.call(null,state_55561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50238__auto__;
}
break;
}
}catch (e55647){if((e55647 instanceof Object)){
var ex__50239__auto__ = e55647;
var statearr_55648_55708 = state_55561;
(statearr_55648_55708[(5)] = ex__50239__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50237__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55709 = state_55561;
state_55561 = G__55709;
continue;
} else {
return ret_value__50237__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__ = function(state_55561){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____1.call(this,state_55561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50236__auto__;
})()
;})(switch__50235__auto__,c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__50404__auto__ = (function (){var statearr_55649 = f__50403__auto__.call(null);
(statearr_55649[(6)] = c__50402__auto__);

return statearr_55649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50404__auto__);
});})(c__50402__auto__,map__55406,map__55406__$1,opts,before_jsload,on_jsload,reload_dependents,map__55407,map__55407__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__50402__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55712,link){
var map__55713 = p__55712;
var map__55713__$1 = (((((!((map__55713 == null))))?(((((map__55713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55713):map__55713);
var file = cljs.core.get.call(null,map__55713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__55713,map__55713__$1,file){
return (function (p1__55710_SHARP_,p2__55711_SHARP_){
if(cljs.core._EQ_.call(null,p1__55710_SHARP_,p2__55711_SHARP_)){
return p1__55710_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__55713,map__55713__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55716){
var map__55717 = p__55716;
var map__55717__$1 = (((((!((map__55717 == null))))?(((((map__55717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55717):map__55717);
var match_length = cljs.core.get.call(null,map__55717__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55717__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55715_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55715_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55719_SHARP_,p2__55720_SHARP_){
return cljs.core.assoc.call(null,p1__55719_SHARP_,cljs.core.get.call(null,p2__55720_SHARP_,key),p2__55720_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_55721 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55721);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55721);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55722,p__55723){
var map__55724 = p__55722;
var map__55724__$1 = (((((!((map__55724 == null))))?(((((map__55724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55724):map__55724);
var on_cssload = cljs.core.get.call(null,map__55724__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55725 = p__55723;
var map__55725__$1 = (((((!((map__55725 == null))))?(((((map__55725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55725):map__55725);
var files_msg = map__55725__$1;
var files = cljs.core.get.call(null,map__55725__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563843530223
