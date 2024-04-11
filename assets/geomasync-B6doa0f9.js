import{az as ln,M as W,et as d,aE as T,aC as F,aA as N,aB as D,aD as V,b0 as H,ax as Q,eD as on,bo as dn}from"./index-BjUNJPVf.js";import{T as o,a as h,X as K,t as X,k as Y,d as z,b as s,r as u,U as P,Q as I,Z as M,B as Z,v as w,ad as G,ae as L,af as E,h as x,S as wn,ag as hn,ah as mn,E as q,ai as yn,N as S,q as O,aj as pn,ak as vn,x as _,al as gn,am as J}from"./arcadeUtils-BxUF81hz.js";import{c as A,r as C,b as y}from"./TimeOnly-BXSODLxA.js";import{l as $}from"./portalUtils-ApkRv-Dr.js";import{disjoint as Pn,intersects as In,touches as An,crosses as Fn,within as Rn,contains as xn,overlaps as bn,equals as Nn,relate as Sn,intersect as On,union as Dn,difference as jn,symmetricDifference as Tn,clip as Ln,cut as Cn,planarArea as nn,geodesicArea as en,planarLength as U,geodesicLength as B,distance as Mn,densify as rn,geodesicDensify as tn,generalize as Zn,buffer as Jn,geodesicBuffer as Un,offset as kn,rotate as an,simplify as sn,isSimple as zn,convexHull as En,nearestCoordinate as qn,nearestVertex as Bn}from"./geometryEngineAsync-wvmuP1s9.js";import"./ImmutableArray-BlMso3qf.js";import"./number-CJqenc9O.js";import"./featureConversionUtils-BHhm7bvm.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-CK-0B5n9.js";import"./UnknownTimeZone-CK7VjgF3.js";async function un(a,e,r){var t,i;if(!((t=ln)==null?void 0:t.findCredential(a.restUrl)))return null;if(a.loadStatus==="loaded"&&e===""&&((i=a.user)!=null&&i.sourceJSON)&&r===!1)return a.user.sourceJSON;const l={responseType:"json",query:{f:"json"}};if(r&&(l.query.returnUserLicenseTypeExtensions=!0),e===""){const f=await W(a.restUrl+"/community/self",l);if(f.data){const m=f.data;if(m!=null&&m.username)return m}return null}const n=await W(a.restUrl+"/community/users/"+e,l);if(n.data){const f=n.data;return f.error?null:f}return null}function cn(a){return on.indexOf("4.")===0?D.fromExtent(a):new D({spatialReference:a.spatialReference,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]})}function R(a,e,r){if(h(a,2,2,e,r),!(a[0]instanceof d&&a[1]instanceof d)){if(!(a[0]instanceof d&&a[1]===null)){if(!(a[1]instanceof d&&a[0]===null)){if(a[0]!==null||a[1]!==null)throw new s(e,u.InvalidParameter,r)}}}}async function fn(a,e){if(a.type!=="polygon"&&a.type!=="polyline"&&a.type!=="extent")return 0;let r=1;(a.spatialReference.vcsWkid||a.spatialReference.latestVcsWkid)&&(r=gn(a.spatialReference)/dn(a.spatialReference));let c=0;if(a.type==="polyline")for(const n of a.paths)for(let t=1;t<n.length;t++)c+=J(n[t],n[t-1],r);else if(a.type==="polygon")for(const n of a.rings){for(let t=1;t<n.length;t++)c+=J(n[t],n[t-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=J(n[0],n[n.length-1],r))}else a.type==="extent"&&(c+=2*J([a.xmin,a.ymin,0],[a.xmax,a.ymin,0],r),c+=2*J([a.xmin,a.ymin,0],[a.xmin,a.ymax,0],r),c*=2,c+=4*Math.abs(w(a.zmax,0)*r-w(a.zmin,0)*r));const l=new F({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:[[0,0],[0,c]]});return U(l,e)}function re(a){a.mode==="async"&&(a.functions.disjoint=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]===null||n[1]===null||Pn(n[0],n[1])))},a.functions.intersects=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},a.functions.touches=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},a.functions.crosses=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Fn(n[0],n[1])))},a.functions.within=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Rn(n[0],n[1])))},a.functions.contains=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&xn(n[0],n[1])))},a.functions.overlaps=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]!==null&&bn(n[0],n[1])))},a.functions.equals=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(h(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?Nn(n[0],n[1]):(K(n[0])&&K(n[1])||!!(X(n[0])&&X(n[1])||Y(n[0])&&Y(n[1])))&&n[0].equals(n[1]))))},a.functions.relate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return Sn(n[0],n[1],z(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new s(e,u.InvalidParameter,r)})},a.functions.intersection=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]===null||n[1]===null?null:On(n[0],n[1])))},a.functions.union=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{const t=[];if((n=o(n)).length===0)throw new s(e,u.WrongNumberOfParameters,r);if(n.length===1)if(P(n[0])){const i=o(n[0]);for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new s(e,u.InvalidParameter,r);t.push(i[f])}}else{if(!I(n[0])){if(n[0]instanceof d)return M(A(n[0]),e.spatialReference);if(n[0]===null)return null;throw new s(e,u.InvalidParameter,r)}{const i=o(n[0].toArray());for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new s(e,u.InvalidParameter,r);t.push(i[f])}}}else for(let i=0;i<n.length;i++)if(n[i]!==null){if(!(n[i]instanceof d))throw new s(e,u.InvalidParameter,r);t.push(n[i])}return t.length===0?null:Dn(t)})},a.functions.difference=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]!==null&&n[1]===null?A(n[0]):n[0]===null?null:jn(n[0],n[1])))},a.functions.symmetricdifference=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(R(n=o(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?A(n[1]):n[1]===null?A(n[0]):Tn(n[0],n[1])))},a.functions.clip=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof T)&&n[1]!==null)throw new s(e,u.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[1]===null?null:Ln(n[0],n[1])})},a.functions.cut=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof F)&&n[1]!==null)throw new s(e,u.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[1]===null?[A(n[0])]:Cn(n[0],n[1])})},a.functions.area=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(Z(n[0])){const t=await n[0].sumArea(C(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return t}if(P(n[0])||I(n[0])){const t=G(n[0],e.spatialReference);return t===null?0:nn(t,C(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return nn(n[0],C(w(n[1],-1)))})},a.functions.areageodetic=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(Z(n[0])){const t=await n[0].sumArea(C(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return t}if(P(n[0])||I(n[0])){const t=G(n[0],e.spatialReference);return t===null?0:en(t,C(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return en(n[0],C(w(n[1],-1)))})},a.functions.length=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(Z(n[0])){const t=await n[0].sumLength(y(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return t}if(P(n[0])||I(n[0])){const t=L(n[0],e.spatialReference);return t===null?0:U(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return U(n[0],y(w(n[1],-1)))})},a.functions.length3d=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(P(n[0])||I(n[0])){const t=L(n[0],e.spatialReference);return t===null?0:t.hasZ===!0?fn(t,y(w(n[1],-1))):U(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[0].hasZ===!0?fn(n[0],y(w(n[1],-1))):U(n[0],y(w(n[1],-1)))})},a.functions.lengthgeodetic=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(Z(n[0])){const t=await n[0].sumLength(y(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return t}if(P(n[0])||I(n[0])){const t=L(n[0],e.spatialReference);return t===null?0:B(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return B(n[0],y(w(n[1],-1)))})},a.functions.distance=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);let t=n[0];(P(n[0])||I(n[0]))&&(t=E(n[0],e.spatialReference));let i=n[1];if((P(n[1])||I(n[1]))&&(i=E(n[1],e.spatialReference)),!(t instanceof d))throw new s(e,u.InvalidParameter,r);if(!(i instanceof d))throw new s(e,u.InvalidParameter,r);return Mn(t,i,y(w(n[2],-1)))})},a.functions.distancegeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);const t=n[0],i=n[1];if(!(t instanceof N))throw new s(e,u.InvalidParameter,r);if(!(i instanceof N))throw new s(e,u.InvalidParameter,r);const f=new F({paths:[],spatialReference:t.spatialReference});return f.addPath([t,i]),B(f,y(w(n[2],-1)))})},a.functions.densify=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);if(t<=0)throw new s(e,u.InvalidParameter,r);return n[0]instanceof D||n[0]instanceof F?rn(n[0],t,y(w(n[2],-1))):n[0]instanceof T?rn(cn(n[0]),t,y(w(n[2],-1))):n[0]})},a.functions.densifygeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);if(t<=0)throw new s(e,u.InvalidParameter,r);return n[0]instanceof D||n[0]instanceof F?tn(n[0],t,y(w(n[2],-1))):n[0]instanceof T?tn(cn(n[0]),t,y(w(n[2],-1))):n[0]})},a.functions.generalize=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);return Zn(n[0],t,wn(w(n[2],!0)),y(w(n[3],-1)))})},a.functions.buffer=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);return t===0?A(n[0]):Jn(n[0],t,y(w(n[2],-1)))})},a.functions.buffergeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);return t===0?A(n[0]):Un(n[0],t,y(w(n[2],-1)))})},a.functions.offset=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof D||n[0]instanceof F))throw new s(e,u.InvalidParameter,r);const t=x(n[1]);if(isNaN(t))throw new s(e,u.InvalidParameter,r);const i=x(w(n[4],10));if(isNaN(i))throw new s(e,u.InvalidParameter,r);const f=x(w(n[5],0));if(isNaN(f))throw new s(e,u.InvalidParameter,r);return kn(n[0],t,y(w(n[2],-1)),z(w(n[3],"round")).toLowerCase(),i,f)})},a.functions.rotate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);let t=n[0];if(t===null)return null;if(!(t instanceof d))throw new s(e,u.InvalidParameter,r);t instanceof T&&(t=D.fromExtent(t));const i=x(n[1]);if(isNaN(i))throw new s(e,u.InvalidParameter,r);const f=w(n[2],null);if(f===null)return an(t,i);if(f instanceof N)return an(t,i,f);throw new s(e,u.InvalidParameter,r)})},a.functions.centroid=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;let t=n[0];if((P(n[0])||I(n[0]))&&(t=E(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,u.InvalidParameter,r);return t instanceof N?M(A(n[0]),e.spatialReference):t instanceof D?t.centroid:t instanceof F?hn(t):t instanceof V?mn(t):t instanceof T?t.center:null})},a.functions.measuretocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((P(n[0])||I(n[0]))&&(t=L(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,u.InvalidParameter,r);if(!(t instanceof F))throw new s(e,u.InvalidParameter,r);if(q(n[1]===!1))throw new s(e,u.InvalidParameter,r);const i=yn(t,n[1]);return i?S.convertObjectToArcadeDictionary(i,O(e),!1,!0):null})},a.functions.pointtocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((P(n[0])||I(n[0]))&&(t=L(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,u.InvalidParameter,r);if(!(t instanceof F))throw new s(e,u.InvalidParameter,r);const i=n[1];if(i===null)return null;if(!(i instanceof N))throw new s(e,u.InvalidParameter,r);if(q(n[1]===!1))throw new s(e,u.InvalidParameter,r);const f=pn(t,i);return f?S.convertObjectToArcadeDictionary(f,O(e),!1,!0):null})},a.functions.distancetocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((P(n[0])||I(n[0]))&&(t=L(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,u.InvalidParameter,r);if(!(t instanceof F))throw new s(e,u.InvalidParameter,r);if(q(n[1]===!1))throw new s(e,u.InvalidParameter,r);const i=vn(t,n[1]);return i?S.convertObjectToArcadeDictionary(i,O(e),!1,!0):null})},a.functions.multiparttosinglepart=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{n=o(n),h(n,1,1,e,r);const t=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);if(n[0]instanceof N)return[M(A(n[0]),e.spatialReference)];if(n[0]instanceof T)return[M(A(n[0]),e.spatialReference)];const i=await sn(n[0]);if(i instanceof D){const f=[],m=[];for(let p=0;p<i.rings.length;p++)if(i.isClockwise(i.rings[p])){const v=H({rings:[i.rings[p]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(v)}else m.push({ring:i.rings[p],pt:i.getPoint(p,0)});for(let p=0;p<m.length;p++)for(let v=0;v<f.length;v++)if(f[v].contains(m[p].pt)){f[v].addRing(m[p].ring);break}return f}if(i instanceof F){const f=[];for(let m=0;m<i.paths.length;m++){const p=H({paths:[i.paths[m]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(p)}return f}if(n[0]instanceof V){const f=M(A(n[0]),e.spatialReference);for(let m=0;m<f.points.length;m++)t.push(f.getPoint(m));return t}return null})},a.functions.issimple=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return zn(n[0])})},a.functions.simplify=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return sn(n[0])})},a.functions.convexhull=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return En(n[0])})},a.functions.getuser=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{var m,p;h(n,0,2,e,r);let t=w(n[1],""),i=t===!0;if(t=t===!0||t===!1?"":z(t),n.length===0||n[0]instanceof _){let v=null;v=(m=e.services)!=null&&m.portal?e.services.portal:Q.getDefault(),n.length>0&&(v=$(n[0],v));const j=await un(v,t,i);if(j){const b=JSON.parse(JSON.stringify(j));for(const g of["lastLogin","created","modified"])b[g]!==void 0&&b[g]!==null&&(b[g]=new Date(b[g]));return S.convertObjectToArcadeDictionary(b,O(e))}return null}let f=null;if(Z(n[0])&&(f=n[0]),f){if(i=!1,t)return null;await f.load();const v=await f.getOwningSystemUrl();if(!v){if(!t){const g=await f.getIdentityUser();return g?S.convertObjectToArcadeDictionary({username:g},O(e)):null}return null}let j=null;j=(p=e.services)!=null&&p.portal?e.services.portal:Q.getDefault(),j=$(new _(v),j);const b=await un(j,t,i);if(b){const g=JSON.parse(JSON.stringify(b));for(const k of["lastLogin","created","modified"])g[k]!==void 0&&g[k]!==null&&(g[k]=new Date(g[k]));return S.convertObjectToArcadeDictionary(g,O(e))}return null}throw new s(e,u.InvalidParameter,r)})}),a.functions.nearestcoordinate=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,u.InvalidParameter,r);if(!(n[1]instanceof N||n[1]===null))throw new s(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const t=await qn(n[0],n[1]);return t===null?null:S.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},O(e),!1,!0)})},a.functions.nearestvertex=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,u.InvalidParameter,r);if(!(n[1]instanceof N||n[1]===null))throw new s(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const t=await Bn(n[0],n[1]);return t===null?null:S.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},O(e),!1,!0)})}}export{re as registerFunctions};