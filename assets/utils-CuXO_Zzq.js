function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngineJSON-BfS7Q-po.js","assets/geometryEngineBase-CDbTTSsS.js","assets/index-BjUNJPVf.js","assets/index-BJXAwoda.css","assets/json-Wa8cmqdu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as N}from"./index-BjUNJPVf.js";const V={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderLineColor:[0,0,0,1]},S={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetX:0,offsetY:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMSolidFill:{enable:!0,colorocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:"Loop",repeatdelay:0}};function X(e){return[e.r,e.g,e.b,e.a]}const B=` /-,
`;function x(e){let t=e.length;for(;t--;)if(!B.includes(e.charAt(t)))return!1;return!0}function Y(e,t){const r=[];let o=0,n=-1;do if(n=e.indexOf("[",o),n>=o){if(n>o){const i=e.substr(o,n-o);r.push([i,null,x(i)])}if(o=n+1,n=e.indexOf("]",o),n>=o){if(n>o){const i=t[e.substr(o,n-o)];i&&r.push([null,i,!1])}o=n+1}}while(n!==-1);if(o<e.length-1){const i=e.substr(o);r.push([i,null,x(i)])}return r}function U(e,t,r,o){let n="",i=null;for(const m of t){const[a,l,y]=m;if(a)y?i=a:(i&&(n+=i,i=null),n+=a);else{let u=l;r!=null&&(u=W(l,r));const c=e.attributes[u];c&&(i&&(n+=i,i=null),n+=c)}}return _(n,o)}function _(e,t){switch(typeof e!="string"&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function $(e,t,r,o,n,i,m=!0){const a=t/n,l=r/i,y=Math.ceil(a/2),u=Math.ceil(l/2);for(let c=0;c<i;c++)for(let M=0;M<n;M++){const d=4*(M+(m?i-c-1:c)*n);let s=0,p=0,h=0,I=0,b=0,P=0,w=0;const O=(c+.5)*l;for(let g=Math.floor(c*l);g<(c+1)*l;g++){const L=Math.abs(O-(g+.5))/u,R=(M+.5)*a,D=L*L;for(let k=Math.floor(M*a);k<(M+1)*a;k++){let f=Math.abs(R-(k+.5))/y;const C=Math.sqrt(D+f*f);C>=-1&&C<=1&&(s=2*C*C*C-3*C*C+1,s>0&&(f=4*(k+g*t),w+=s*e[f+3],h+=s,e[f+3]<255&&(s=s*e[f+3]/250),I+=s*e[f],b+=s*e[f+1],P+=s*e[f+2],p+=s))}}o[d]=I/p,o[d+1]=b/p,o[d+2]=P/p,o[d+3]=w/h}}function j(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function K(e){var t;return((t=e.data)==null?void 0:t.symbol)??null}function Q(e){return e.type==="CIMVectorMarker"||e.type==="CIMPictureMarker"||e.type==="CIMBarChartMarker"||e.type==="CIMCharacterMarker"||e.type==="CIMPieChartMarker"||e.type==="CIMStackedBarChartMarker"}function Z(e){return e.type==="CIMGradientStroke"||e.type==="CIMPictureStroke"||e.type==="CIMSolidStroke"}function ee(e){return e!=null&&(e.type==="CIMGradientFill"||e.type==="CIMHatchFill"||e.type==="CIMPictureFill"||e.type==="CIMSolidFill"||e.type==="CIMWaterFill")}function q(e){return e!=null&&(e.type==="CIMMarkerPlacementAlongLineRandomSize"||e.type==="CIMMarkerPlacementAlongLineSameSize"||e.type==="CIMMarkerPlacementAlongLineVariableSize"||e.type==="CIMMarkerPlacementAtExtremities"||e.type==="CIMMarkerPlacementAtMeasuredUnits"||e.type==="CIMMarkerPlacementAtRatioPositions"||e.type==="CIMMarkerPlacementOnLine"||e.type==="CIMMarkerPlacementOnVertices")}const te=(e,t=0)=>e==null||isNaN(e)?t:e,re=(e,t)=>e??t,oe=e=>e.tintColor?j(e.tintColor):[255,255,255,1],ne=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function ie(){return N(()=>import("./geometryEngineJSON-BfS7Q-po.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))}function ae(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function le(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function se(e){let t="normal",r="normal";if(e){const o=e.toLowerCase();o.includes("italic")?t="italic":o.includes("oblique")&&(t="oblique"),o.includes("bold")?r="bold":o.includes("light")&&(r="lighter")}return{style:t,weight:r}}function ce(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function G(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const r=G(t);if(r!=null)return r}break;case"CIMTextSymbol":return G(e.symbol);case"CIMSolidFill":return e.color}return null}function E(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const r of t){const o=E(r);if(o!=null)return o}break}case"CIMTextSymbol":return E(e.symbol);case"CIMSolidStroke":return e.color}}function A(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const r=A(t);if(r!==void 0)return r}break;case"CIMTextSymbol":return A(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function fe(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function ue(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function Me(e){return(e?Object.keys(e):[]).map(t=>({name:t,alias:t,type:typeof e[t]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}const me=e=>e.includes("data:image/svg+xml");function ye(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function de(e,t,r,o,n,i){const{infos:m}=i;let a=1,l=0,y=0,u=0;for(const{offsetX:d,offsetY:s,rotation:p,size:h,frameHeight:I,rotateClockWise:b}of m)y=z(d,s,l,a,y),u=v(d,s,l,a,u),I&&(a*=h/I),l=T(p,b,l);const c=z(o,n,l,a,y),M=v(o,n,l,a,u);return{size:e*a,rotation:T(t,r,l),offsetX:c,offsetY:M}}function H(e){if(e==null)return!1;if(Array.isArray(e))return e.every(t=>H(t));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function Ce(e,t){if(t==="color"||t==="outlinecolor"||t==="backgroundcolor"||t==="borderLineColor")return[...V[t]];const r=S[e];if(!r||typeof r[t]=="boolean")throw new Error(`InternalError: default value for type ${e}.`);return r[t]}function pe(e){return e!=null&&e.dashTemplate&&typeof e.dashTemplate=="string"&&(e.dashTemplate=e.dashTemplate.split(" ").map(Number)),e}function F(e){if(e==null)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const t=e.symbolLayers;if(!t)return"Normal";for(const r of t)if(r.type==="CIMVectorMarker")return F(r)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return"Normal";for(const r of t)if(r.symbol)return F(r.symbol)}}return"Normal"}function Ie(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers){for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const o=r.size??S.CIMVectorMarker.size;o>t&&(t=o);break}}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers){for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const o=r.width;o!=null&&o>t&&(t=o);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(r.markerPlacement&&q(r.markerPlacement)){const o=r.size??S.CIMVectorMarker.size;o>t&&(t=o)}break;case"CIMPictureFill":{const o=r.height;o!=null&&o>t&&(t=o)}}}return t}}}function W(e,t){if(t!==null){const r=t.get(e);return r?r.name:e}return e}function v(e,t,r,o,n){const i=r*Math.PI/180;if(i){const m=Math.cos(i);return(Math.sin(i)*e+m*t)*o+n}return t*o+n}function z(e,t,r,o,n){const i=r*Math.PI/180;return i?(Math.cos(i)*e-Math.sin(i)*t)*o+n:e*o+n}function T(e,t,r){return t?r-e:r+e}export{fe as A,Ie as B,ee as C,Ce as D,H as E,ue as F,Me as G,te as I,G as L,K as M,me as N,de as O,se as P,ae as S,E as T,q as b,ne as d,j as f,le as g,re as h,pe as j,ie as k,U as l,Z as m,X as o,oe as p,F as q,Y as s,S as t,$ as u,W as v,ce as w,A as x,Q as y,ye as z};