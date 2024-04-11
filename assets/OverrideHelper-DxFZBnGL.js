import{s as M,N as C,aV as d,eP as I,eQ as x,a9 as k}from"./index-BjUNJPVf.js";import{j as O,z as b,G as h,s as S,l as N}from"./utils-CuXO_Zzq.js";import{U as g,v as P,q as w,k as G}from"./quantizationUtils-CfV316jZ.js";function T(c,e,r,t,i){if(c==null)return null;const s=c.referencesGeometry()&&i?$(e,t,i):e,n=c.repurposeFeature(s);try{return c.evaluate({...r,$feature:n},c.services)}catch(o){return M.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}const y=new Map;function $(c,e,r){const{transform:t,hasZ:i,hasM:s}=r;y.has(e)||y.set(e,E(e));const n=y.get(e)(c.geometry,t,i,s);return{...c,geometry:n}}function E(c){const e={};switch(c){case"esriGeometryPoint":return(r,t,i,s)=>G(t,e,r,i,s);case"esriGeometryPolygon":return(r,t,i,s)=>w(t,e,r,i,s);case"esriGeometryPolyline":return(r,t,i,s)=>P(t,e,r,i,s);case"esriGeometryMultipoint":return(r,t,i,s)=>g(t,e,r,i,s);default:return M.getLogger("esri.views.2d.support.arcadeOnDemand").error(new C("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const A=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:t,a:i}=c;return[e,r,t,255*i]};class a{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let i=!1;for(const s of t)if(s.primitiveName===e.primitiveName){i=!0;break}if(!i)for(const s of r)s.primitiveName===e.primitiveName&&t.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)a.findApplicableOverrides(i,r,t);if(e.symbolLayers)for(const i of e.symbolLayers)a.findApplicableOverrides(i,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const i of e.effects)a.findApplicableOverrides(i,r,t);if(e.markerPlacement&&a.findApplicableOverrides(e.markerPlacement,r,t),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const i of e.markerGraphics)a.findApplicableOverrides(i,r,t),a.findApplicableOverrides(i.symbol,r,t)}else e.type==="CIMCharacterMarker"?a.findApplicableOverrides(e.symbol,r,t):e.type==="CIMHatchFill"?a.findApplicableOverrides(e.lineSymbol,r,t):e.type==="CIMPictureMarker"&&a.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&O(e),!r||!e.primitiveName)return{type:"cim-effect-info",effect:e,overrides:[]};const t=e.primitiveName,i=[];for(const s of r)s.primitiveName===t&&i.push({...s,propertyName:b(s.propertyName)});return{type:"cim-effect-info",effect:e,overrides:i}}static async resolveSymbolOverrides(e,r,t,i,s,n,o){if(!(e!=null&&e.symbol))return null;let{symbol:p,primitiveOverrides:l}=e;const u=!!l;if(!u&&!i)return p;p=d(p),l=d(l);let v=!0;if(r||(r={attributes:{}},v=!1),u){if(v||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$feature"))})),o||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$view"))})),l.length>0){const f={spatialReference:t,fields:h(r.attributes),geometryType:s};await a.createRenderExpressions(l,f),a.evaluateOverrides(l,r,s??"esriGeometryPoint",n,o)}a.applyOverrides(p,l)}return i&&a.applyDictionaryTextOverrides(p,r,i,null),p}static async createRenderExpressions(e,r){const t=[];for(const i of e){const s=i.valueExpressionInfo;if(!s||a._expressionToRenderExpression.has(s.expression))continue;const n=I(s.expression,r.spatialReference,r.fields);t.push(n),n.then(o=>a._expressionToRenderExpression.set(s.expression,o))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,i,s){const n={$view:{scale:s==null?void 0:s.scale}};for(const o of e){o.value&&typeof o.value=="object"&&x(o.value)&&(o.propertyName==="Color"||o.propertyName==="StrokeColor")&&(o.value=A(o.value));const p=o.valueExpressionInfo;if(!p)continue;const l=a._expressionToRenderExpression.get(p.expression);l&&(o.value=T(l,r,n,t,i))}}static applyDictionaryTextOverrides(e,r,t,i,s="Normal"){if(e!=null&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const n=e.symbolLayers;if(!n)return;for(const o of n)o&&o.type==="CIMVectorMarker"&&a.applyDictionaryTextOverrides(o,r,t,i,e.type==="CIMTextSymbol"?e.textCase:s)}break;case"CIMVectorMarker":{const n=e.markerGraphics;if(!n)return;for(const o of n)o&&a.applyDictionaryTextOverrides(o,r,t,i)}break;case"CIMMarkerGraphic":{const n=e.textString;if(n&&n.includes("[")){const o=S(n,t);e.textString=N(r,o,i,s)}}}}static applyOverrides(e,r,t,i){if(e.primitiveName){for(const s of r)if(s.primitiveName===e.primitiveName){const n=b(s.propertyName);if(i&&i.push({cim:e,nocapPropertyName:n,value:e[n]}),t){let o=!1;for(const p of t)p.primitiveName===e.primitiveName&&(o=!0);o||t.push(s)}s.value!=null&&(e[n]=s.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)a.applyOverrides(s,r,t,i);if(e.symbolLayers)for(const s of e.symbolLayers)a.applyOverrides(s,r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)a.applyOverrides(s,r,t,i);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const s of e.markerGraphics)a.applyOverrides(s,r,t,i),a.applyOverrides(s.symbol,r,t,i)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)t.value!==void 0&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(t=>Number(t));if(e==="Color"){const t=new k(r).toRgba();return t[3]*=255,t}return r}}a._expressionToRenderExpression=new Map;export{a as f};