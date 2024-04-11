import{N as w,ax as D,bW as b,d5 as g,d6 as U,d7 as R,d8 as h,d9 as S}from"./index-C4o9E24G.js";import{c as W,a as N}from"./devEnvironmentUtils-Blrp8lZ5.js";import{b as P}from"./jsonUtils-CG9TbLOP.js";import{c as v,b as j,p as x,w as A,d as E}from"./styleUtils-DaJF9NJT.js";function B(t,e,l,a){const n=t.name;return n==null?Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&t.styleName==="Esri2DPointSymbolsStyle"?T(n,e,a):v(t,e,a).then(s=>Q(s,n,e,l,E,a))}function M(t,e){return e.items.find(l=>l.name===t)}function Q(t,e,l,a,n,s){var c,d;const o=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),p={portal:o,url:b(t.baseUrl),origin:"portal-item"},m=M(e,t.data);if(!m){const y=`The symbol name '${e}' could not be found`;return Promise.reject(new w("symbolstyleutils:symbol-name-not-found",y,{symbolName:e}))}let i=g(n(m,a),p),u=((c=m.thumbnail)==null?void 0:c.href)??null;const f=(d=m.thumbnail)==null?void 0:d.imageData;W()&&(i=N(i)??"",u=N(u));const O={portal:o,url:b(U(i)),origin:"portal-item"};return j(i,s).then(y=>{const F=a==="cimRef"?x(y.data):y.data,r=P(F,O);if(r&&R(r)){if(u){const I=g(u,p);r.thumbnail=new h({url:I})}else f&&(r.thumbnail=new h({url:`data:image/png;base64,${f}`}));t.styleUrl?r.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(r.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return r})}function T(t,e,l){const a=A.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:D.getDefault();return j(a,l).then(s=>{const o=x(s.data);return P(o,{portal:n,url:b(U(a)),origin:"portal-item"})})}export{Q as fetchSymbolFromStyle,M as getStyleItemFromStyle,B as resolveWebStyleSymbol};