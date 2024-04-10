import{c4 as G,ag as z,aB as L,c5 as E,S as O,c6 as V,ay as Z,bo as j}from"./index-CsUFEoah.js";import{L as A}from"./quantizationUtils-BpZdSdEI.js";import{l as B,u as D}from"./heatmapUtils-Ca5may50.js";import{Z as P}from"./utils-Cxsl-0yv.js";import{c as T,B as R}from"./utils-Dc_4IsWJ.js";let c=null;const S=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function U(t,e,s){return t.x<0?t.x+=e:t.x>s&&(t.x-=e),t}function J(t,e,s,o){const r=G(s)?z(s):null,m=r?Math.round((r.valid[1]-r.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new L(i.geometry);return A(e,a,a,a.hasZ,a.hasM),i.geometry=r?U(a,m??0,o[0]):a,i})}function K(t,e=18,s,o,r){const m=new Float64Array(o*r);e=Math.round(j(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const g=D(s);for(const{geometry:h,attributes:M}of t){const{x:$,y:u}=h,y=Math.max(0,$-e),N=Math.max(0,u-e),F=Math.min(r,u+e),I=Math.min(o,$+e),p=+g(M);for(let f=N;f<F;f++)for(let d=y;d<I;d++){const b=f*o+d,w=B(d-$,f-u,e)*p,l=m[b]+=w;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function Y(t){const e=S.exec(t);if(!e)return null;const{hh:s,mm:o,ss:r,ms:m}=e.groups;return Number(s)*E.hours+Number(o)*E.minutes+Number(r)*E.seconds+Number(m||0)}async function Q(t,e,s=!0){if(!e)return[];const{field:o,field2:r,field3:m,fieldDelimiter:i,fieldInfos:a,timeZone:g}=t,h=o&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===o.toLowerCase())),M=!!h&&O(h),$=!!h&&P(h),u=t.valueExpression,y=t.normalizationType,N=t.normalizationField,F=t.normalizationTotal,I=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!c){const{arcadeUtils:l}=await V();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),d=p?c.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new Z(p.spatialReference)}):null}const b=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&b?{fields:b}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=w?{...l,layer:w}:l,C=c.createExecContext(v,d,g);n=c.executeFunction(f,C)}else x&&(n=x[o],r?(n=`${T(n)}${i}${T(x[r])}`,m&&(n=`${n}${i}${T(x[m])}`)):typeof n=="string"&&s&&($?n=n?new Date(n).getTime():null:M&&(n=n?Y(n):null)));if(y&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[N]);n=R(n,y,v,F)}I.push(n)}),I}export{Q as b,J as j,Y as w,K as x};